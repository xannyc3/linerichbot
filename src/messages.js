const { PROVIDERS, getRotatedGames, getNextUpdateIn } = require("./games");

// =============================================
// สร้าง Flex Message: ตารางเลือกค่ายเกม
// =============================================
function buildProviderSelectionMessage() {
  const providers = Object.values(PROVIDERS);

  // สร้าง grid 3 คอลัมน์
  const rows = [];
  for (let i = 0; i < providers.length; i += 3) {
    const rowProviders = providers.slice(i, i + 3);
    const columns = rowProviders.map((p) => buildProviderButton(p));

    // เติม placeholder ถ้าไม่ครบ 3
    while (columns.length < 3) {
      columns.push({ type: "box", layout: "vertical", contents: [], flex: 1 });
    }

    rows.push({
      type: "box",
      layout: "horizontal",
      spacing: "sm",
      contents: columns,
    });
  }

  return {
    type: "flex",
    altText: "🎰 เลือกค่ายเกม BONUS TIME",
    contents: {
      type: "bubble",
      size: "mega",
      header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#1A1A2E",
        paddingAll: "16px",
        contents: [
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "text",
                text: "🎰",
                size: "xxl",
                flex: 0,
              },
              {
                type: "box",
                layout: "vertical",
                paddingStart: "10px",
                contents: [
                  {
                    type: "text",
                    text: "BONUS TIME",
                    color: "#FFD700",
                    weight: "bold",
                    size: "xl",
                  },
                  {
                    type: "text",
                    text: "เลือกค่ายเกมที่ต้องการ",
                    color: "#AAAAAA",
                    size: "sm",
                  },
                ],
              },
            ],
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#0F0F1E",
        spacing: "sm",
        paddingAll: "12px",
        contents: [
          ...rows,
          {
            type: "separator",
            margin: "md",
            color: "#333355",
          },
          {
            type: "box",
            layout: "horizontal",
            margin: "sm",
            contents: [
              {
                type: "text",
                text: "🔄 อัพเดทเกมทุก 5 นาที",
                color: "#888888",
                size: "xs",
                flex: 1,
              },
              {
                type: "text",
                text: `⏱ ${getNextUpdateIn()}`,
                color: "#FFD700",
                size: "xs",
                align: "end",
              },
            ],
          },
        ],
      },
    },
  };
}

function buildProviderButton(provider) {
  return {
    type: "box",
    layout: "vertical",
    flex: 1,
    backgroundColor: "#1E1E35",
    cornerRadius: "12px",
    paddingAll: "10px",
    action: {
      type: "postback",
      label: provider.name,
      data: `action=select_provider&provider=${provider.id}`,
      displayText: `เลือกค่าย ${provider.name}`,
    },
    contents: [
      {
        type: "text",
        text: provider.emoji,
        align: "center",
        size: "xxl",
      },
      {
        type: "text",
        text: provider.name,
        align: "center",
        color: "#FFFFFF",
        size: "xxs",
        weight: "bold",
        wrap: true,
      },
    ],
  };
}

// =============================================
// สร้าง Flex Message: การ์ดเกม 4 เกม
// =============================================
function buildGameCardsMessage(providerId) {
  const provider = PROVIDERS[providerId];
  if (!provider) return null;

  const games = getRotatedGames(providerId);

  return {
    type: "flex",
    altText: `🎮 ${provider.name} - เกมแนะนำ`,
    contents: {
      type: "carousel",
      contents: games.map((game) => buildGameCard(game, provider)),
    },
  };
}

function buildGameCard(game, provider) {
  const winRateColor = game.winRate >= 90 ? "#00FF88" : game.winRate >= 80 ? "#FFD700" : "#FF9944";
  const barWidth = `${game.winRate}%`;

  return {
    type: "bubble",
    size: "kilo",
    header: {
      type: "box",
      layout: "vertical",
      paddingAll: "0px",
      contents: [
        {
          type: "image",
          url: game.image,
          aspectMode: "cover",
          aspectRatio: "4:3",
          size: "full",
          action: {
            type: "postback",
            label: game.name,
            data: `action=play_game&game=${game.id}&provider=${provider.id}`,
            displayText: `เล่น ${game.name}`,
          },
        },
        // HOT badge
        ...(game.hot
          ? [
              {
                type: "box",
                layout: "vertical",
                position: "absolute",
                offsetTop: "8px",
                offsetEnd: "8px",
                backgroundColor: "#FF4444",
                cornerRadius: "20px",
                paddingAll: "4px",
                paddingStart: "8px",
                paddingEnd: "8px",
                contents: [
                  {
                    type: "text",
                    text: "🔥 HOT",
                    color: "#FFFFFF",
                    size: "xxs",
                    weight: "bold",
                  },
                ],
              },
            ]
          : []),
      ],
    },
    body: {
      type: "box",
      layout: "vertical",
      backgroundColor: "#1A1A2E",
      paddingAll: "12px",
      spacing: "sm",
      contents: [
        // Game name
        {
          type: "text",
          text: game.name,
          color: "#FFFFFF",
          weight: "bold",
          size: "sm",
          wrap: true,
        },
        {
          type: "text",
          text: provider.name,
          color: "#888888",
          size: "xxs",
        },
        {
          type: "separator",
          color: "#333355",
        },
        // อัตราชนะของเกม
        {
          type: "text",
          text: "อัตราการชนะของเกม",
          color: "#AAAAAA",
          size: "xxs",
        },
        {
          type: "text",
          text: `${game.winRate}%`,
          color: winRateColor,
          weight: "bold",
          size: "lg",
        },
        // Progress bar
        {
          type: "box",
          layout: "vertical",
          backgroundColor: "#333355",
          cornerRadius: "4px",
          height: "8px",
          contents: [
            {
              type: "box",
              layout: "vertical",
              backgroundColor: winRateColor,
              cornerRadius: "4px",
              height: "8px",
              width: barWidth,
              contents: [],
            },
          ],
        },
        // Stats row
        {
          type: "box",
          layout: "horizontal",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "vertical",
              flex: 1,
              contents: [
                {
                  type: "text",
                  text: "โอกาสชนะ",
                  color: "#888888",
                  size: "xxs",
                },
                {
                  type: "text",
                  text: `${game.winRate}%`,
                  color: "#FFFFFF",
                  size: "xs",
                  weight: "bold",
                },
              ],
            },
            {
              type: "box",
              layout: "vertical",
              flex: 1,
              contents: [
                {
                  type: "text",
                  text: "เข้าฟรีสปิน",
                  color: "#888888",
                  size: "xxs",
                },
                {
                  type: "text",
                  text: `${game.freeSpinRate}%`,
                  color: "#FFFFFF",
                  size: "xs",
                  weight: "bold",
                },
              ],
            },
            {
              type: "box",
              layout: "vertical",
              flex: 1,
              contents: [
                {
                  type: "text",
                  text: "ตัวคูณสูงสุด",
                  color: "#888888",
                  size: "xxs",
                },
                {
                  type: "text",
                  text: `x${game.maxMultiplier.toLocaleString()}`,
                  color: "#FFD700",
                  size: "xxs",
                  weight: "bold",
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      backgroundColor: "#1A1A2E",
      paddingAll: "10px",
      contents: [
        {
          type: "button",
          action: {
            type: "postback",
            label: `▶ เล่น ${game.name}`,
            data: `action=play_game&game=${game.id}&provider=${provider.id}`,
            displayText: `เล่น ${game.name}`,
          },
          style: "primary",
          color: provider.color || "#FF6B35",
          height: "sm",
        },
      ],
    },
  };
}

// =============================================
// Quick Reply: ปุ่มกลับไปเลือกค่าย
// =============================================
function buildBackToProviderMessage(providerName) {
  return {
    type: "text",
    text: `✅ กด "เลือกค่ายเกม" เพื่อดูค่ายอื่น หรือพิมพ์ bonustime เพื่อเริ่มใหม่`,
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "🎰 เลือกค่ายเกม",
            text: "bonustime",
          },
        },
        {
          type: "action",
          action: {
            type: "postback",
            label: "🔄 รีเฟรชเกม",
            data: `action=refresh_games&provider=${providerName}`,
            displayText: "รีเฟรชเกม",
          },
        },
      ],
    },
  };
}

// ข้อความแจ้ง play game
function buildPlayGameMessage(game, provider) {
  return {
    type: "text",
    text: `🎮 กำลังเปิด ${game.name} จาก ${provider.name}\n\n⚡ อัตราชนะ: ${game.winRate}%\n🎁 โอกาสฟรีสปิน: ${game.freeSpinRate}%\n💰 ตัวคูณสูงสุด: x${game.maxMultiplier.toLocaleString()}\n\n🔗 กรุณาเข้าเกมผ่านเว็บไซต์ของเรา\n⏱ เกมอัพเดทในอีก: ${getNextUpdateIn()}`,
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "🎰 bonustime",
            text: "bonustime",
          },
        },
      ],
    },
  };
}

module.exports = {
  buildProviderSelectionMessage,
  buildGameCardsMessage,
  buildBackToProviderMessage,
  buildPlayGameMessage,
};
