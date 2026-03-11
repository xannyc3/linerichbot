require("dotenv").config();
const express = require("express");
const line = require("@line/bot-sdk");
const {
  buildProviderSelectionMessage,
  buildGameCardsMessage,
  buildBackToProviderMessage,
  buildPlayGameMessage,
} = require("./messages");
const { PROVIDERS } = require("./games");

// =============================================
// LINE SDK Config
// =============================================
const lineConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: lineConfig.channelAccessToken,
});

const app = express();

// =============================================
// Webhook Route
// =============================================
app.post(
  "/webhook",
  line.middleware(lineConfig),
  async (req, res) => {
    try {
      const events = req.body.events;
      await Promise.all(events.map(handleEvent));
      res.status(200).json({ status: "ok" });
    } catch (err) {
      console.error("Webhook error:", err);
      res.status(500).end();
    }
  }
);

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "🎰 BONUS TIME Bot is running!",
    time: new Date().toISOString(),
  });
});

// =============================================
// Event Handler
// =============================================
async function handleEvent(event) {
  const replyToken = event.replyToken;

  // ---- TEXT MESSAGE ----
  if (event.type === "message" && event.message.type === "text") {
    const text = event.message.text.trim().toLowerCase();

    if (text === "bonustime" || text === "bonus time" || text === "โบนัสไทม์") {
      // ส่งตารางเลือกค่ายเกม
      return client.replyMessage({
        replyToken,
        messages: [buildProviderSelectionMessage()],
      });
    }

    // คำสั่งอื่น ๆ
    return client.replyMessage({
      replyToken,
      messages: [
        {
          type: "text",
          text: "🎰 พิมพ์ bonustime เพื่อดูเกมแนะนำและเลือกค่ายเกมได้เลยครับ!",
          quickReply: {
            items: [
              {
                type: "action",
                action: {
                  type: "message",
                  label: "🎰 BONUS TIME",
                  text: "bonustime",
                },
              },
            ],
          },
        },
      ],
    });
  }

  // ---- POSTBACK ----
  if (event.type === "postback") {
    const params = new URLSearchParams(event.postback.data);
    const action = params.get("action");
    const providerId = params.get("provider");

    if (action === "select_provider" && providerId) {
      const provider = PROVIDERS[providerId];
      if (!provider) return;

      const gameCards = buildGameCardsMessage(providerId);
      const backMsg = buildBackToProviderMessage(provider.name);

      return client.replyMessage({
        replyToken,
        messages: [gameCards, backMsg],
      });
    }

    if (action === "refresh_games" && providerId) {
      // รีเฟรชและส่งเกมใหม่
      const gameCards = buildGameCardsMessage(providerId);
      return client.replyMessage({
        replyToken,
        messages: [gameCards],
      });
    }

    if (action === "play_game") {
      const gameId = params.get("game");
      const pId = params.get("provider");
      const provider = PROVIDERS[pId];
      if (!provider) return;

      // หาเกมจาก games list
      const game = provider.games.find((g) => g.id === gameId);
      if (!game) return;

      return client.replyMessage({
        replyToken,
        messages: [buildPlayGameMessage(game, provider)],
      });
    }

    // ถ้าไม่รู้ action
    return client.replyMessage({
      replyToken,
      messages: [
        {
          type: "text",
          text: "พิมพ์ bonustime เพื่อเริ่มใหม่ครับ 🎰",
        },
      ],
    });
  }
}

// =============================================
// Start Server
// =============================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🎰 BONUS TIME Bot server running on port ${PORT}`);
  console.log(`📡 Webhook URL: http://localhost:${PORT}/webhook`);
  console.log(`\n✅ ตั้งค่า LINE Developers Console:`);
  console.log(`   Webhook URL: https://YOUR_DOMAIN/webhook`);
  console.log(`   Use webhook: ON`);
});
