// =============================================
// GAME DATA - อัพเดทเกมและค่ายที่นี่
// =============================================

const PROVIDERS = {
  PG: {
    id: "PG",
    name: "PG Soft",
    emoji: "🎮",
    color: "#FF6B35",
    games: [
      {
        id: "pg_opera_dynasty",
        name: "Opera Dynasty",
        image: "https://img.pgsoft-media.com/uploads/games/opera-dynasty/cover.jpg",
        winRate: 84,
        freeSpinRate: 82,
        maxMultiplier: 33200,
        rtp: 96.79,
        hot: true,
      },
      {
        id: "pg_ways_qilin",
        name: "Ways of the Qilin",
        image: "https://img.pgsoft-media.com/uploads/games/ways-of-the-qilin/cover.jpg",
        winRate: 95,
        freeSpinRate: 78,
        maxMultiplier: 15000,
        rtp: 96.59,
        hot: true,
      },
      {
        id: "pg_mahjong_ways",
        name: "Mahjong Ways",
        image: "https://img.pgsoft-media.com/uploads/games/mahjong-ways/cover.jpg",
        winRate: 88,
        freeSpinRate: 85,
        maxMultiplier: 25000,
        rtp: 96.52,
        hot: false,
      },
      {
        id: "pg_fortune_ox",
        name: "Fortune Ox",
        image: "https://img.pgsoft-media.com/uploads/games/fortune-ox/cover.jpg",
        winRate: 91,
        freeSpinRate: 80,
        maxMultiplier: 8000,
        rtp: 96.81,
        hot: false,
      },
      {
        id: "pg_wild_bandito",
        name: "Wild Bandito",
        image: "https://img.pgsoft-media.com/uploads/games/wild-bandito/cover.jpg",
        winRate: 79,
        freeSpinRate: 76,
        maxMultiplier: 10000,
        rtp: 96.72,
        hot: false,
      },
      {
        id: "pg_lucky_neko",
        name: "Lucky Neko",
        image: "https://img.pgsoft-media.com/uploads/games/lucky-neko/cover.jpg",
        winRate: 86,
        freeSpinRate: 83,
        maxMultiplier: 12800,
        rtp: 96.74,
        hot: false,
      },
      {
        id: "pg_gem_saviour_sword",
        name: "Gem Saviour Sword",
        image: "https://img.pgsoft-media.com/uploads/games/gem-saviour-sword/cover.jpg",
        winRate: 82,
        freeSpinRate: 79,
        maxMultiplier: 20000,
        rtp: 96.71,
        hot: false,
      },
      {
        id: "pg_dragon_hatch",
        name: "Dragon Hatch",
        image: "https://img.pgsoft-media.com/uploads/games/dragon-hatch/cover.jpg",
        winRate: 90,
        freeSpinRate: 87,
        maxMultiplier: 16000,
        rtp: 96.81,
        hot: true,
      },
    ],
  },

  JOKER: {
    id: "JOKER",
    name: "Joker Gaming",
    emoji: "🃏",
    color: "#9B59B6",
    games: [
      {
        id: "joker_roma",
        name: "Roma",
        image: "https://via.placeholder.com/400x300/9B59B6/white?text=Roma",
        winRate: 87,
        freeSpinRate: 80,
        maxMultiplier: 18000,
        rtp: 97.0,
        hot: true,
      },
      {
        id: "joker_golden_lotus",
        name: "Golden Lotus",
        image: "https://via.placeholder.com/400x300/9B59B6/white?text=Golden+Lotus",
        winRate: 83,
        freeSpinRate: 77,
        maxMultiplier: 12000,
        rtp: 96.5,
        hot: false,
      },
      {
        id: "joker_captain_treasure",
        name: "Captain's Treasure",
        image: "https://via.placeholder.com/400x300/9B59B6/white?text=Captains+Treasure",
        winRate: 91,
        freeSpinRate: 85,
        maxMultiplier: 22000,
        rtp: 96.8,
        hot: true,
      },
      {
        id: "joker_hot_hot_fruit",
        name: "Hot Hot Fruit",
        image: "https://via.placeholder.com/400x300/9B59B6/white?text=Hot+Hot+Fruit",
        winRate: 78,
        freeSpinRate: 74,
        maxMultiplier: 9000,
        rtp: 96.3,
        hot: false,
      },
      {
        id: "joker_dragon_fortune",
        name: "Dragon Fortune",
        image: "https://via.placeholder.com/400x300/9B59B6/white?text=Dragon+Fortune",
        winRate: 89,
        freeSpinRate: 82,
        maxMultiplier: 15000,
        rtp: 96.9,
        hot: false,
      },
      {
        id: "joker_panda",
        name: "Panda",
        image: "https://via.placeholder.com/400x300/9B59B6/white?text=Panda",
        winRate: 85,
        freeSpinRate: 79,
        maxMultiplier: 11000,
        rtp: 96.6,
        hot: false,
      },
    ],
  },

  NETENT: {
    id: "NETENT",
    name: "NetEnt",
    emoji: "🌟",
    color: "#E74C3C",
    games: [
      {
        id: "ne_starburst",
        name: "Starburst",
        image: "https://via.placeholder.com/400x300/E74C3C/white?text=Starburst",
        winRate: 93,
        freeSpinRate: 88,
        maxMultiplier: 50000,
        rtp: 96.09,
        hot: true,
      },
      {
        id: "ne_gonzo_quest",
        name: "Gonzo's Quest",
        image: "https://via.placeholder.com/400x300/E74C3C/white?text=Gonzos+Quest",
        winRate: 86,
        freeSpinRate: 81,
        maxMultiplier: 37500,
        rtp: 95.97,
        hot: true,
      },
      {
        id: "ne_dead_or_alive",
        name: "Dead or Alive 2",
        image: "https://via.placeholder.com/400x300/E74C3C/white?text=Dead+or+Alive+2",
        winRate: 80,
        freeSpinRate: 75,
        maxMultiplier: 100000,
        rtp: 96.82,
        hot: false,
      },
      {
        id: "ne_twin_spin",
        name: "Twin Spin",
        image: "https://via.placeholder.com/400x300/E74C3C/white?text=Twin+Spin",
        winRate: 88,
        freeSpinRate: 83,
        maxMultiplier: 27000,
        rtp: 96.6,
        hot: false,
      },
      {
        id: "ne_blood_suckers",
        name: "Blood Suckers",
        image: "https://via.placeholder.com/400x300/E74C3C/white?text=Blood+Suckers",
        winRate: 77,
        freeSpinRate: 72,
        maxMultiplier: 7500,
        rtp: 98.0,
        hot: false,
      },
    ],
  },

  NOLIMIT: {
    id: "NOLIMIT",
    name: "Nolimit City",
    emoji: "💥",
    color: "#27AE60",
    games: [
      {
        id: "nl_xways_hoarder",
        name: "xWays Hoarder",
        image: "https://via.placeholder.com/400x300/27AE60/white?text=xWays+Hoarder",
        winRate: 85,
        freeSpinRate: 80,
        maxMultiplier: 80000,
        rtp: 96.17,
        hot: true,
      },
      {
        id: "nl_san_quentin",
        name: "San Quentin xWays",
        image: "https://via.placeholder.com/400x300/27AE60/white?text=San+Quentin",
        winRate: 81,
        freeSpinRate: 76,
        maxMultiplier: 150000,
        rtp: 96.13,
        hot: true,
      },
      {
        id: "nl_mental",
        name: "Mental",
        image: "https://via.placeholder.com/400x300/27AE60/white?text=Mental",
        winRate: 89,
        freeSpinRate: 84,
        maxMultiplier: 50000,
        rtp: 96.08,
        hot: false,
      },
      {
        id: "nl_tombstone",
        name: "Tombstone RIP",
        image: "https://via.placeholder.com/400x300/27AE60/white?text=Tombstone+RIP",
        winRate: 78,
        freeSpinRate: 73,
        maxMultiplier: 60000,
        rtp: 96.14,
        hot: false,
      },
    ],
  },

  HACKSAW: {
    id: "HACKSAW",
    name: "Hacksaw Gaming",
    emoji: "🔥",
    color: "#E67E22",
    games: [
      {
        id: "hw_chaos_crew",
        name: "Chaos Crew",
        image: "https://via.placeholder.com/400x300/E67E22/white?text=Chaos+Crew",
        winRate: 92,
        freeSpinRate: 87,
        maxMultiplier: 25000,
        rtp: 96.1,
        hot: true,
      },
      {
        id: "hw_wanted_dead_or_wild",
        name: "Wanted Dead or Wild",
        image: "https://via.placeholder.com/400x300/E67E22/white?text=Wanted+Dead+or+Wild",
        winRate: 86,
        freeSpinRate: 81,
        maxMultiplier: 50000,
        rtp: 96.38,
        hot: true,
      },
      {
        id: "hw_stick_em",
        name: "Stick'em",
        image: "https://via.placeholder.com/400x300/E67E22/white?text=Stickem",
        winRate: 84,
        freeSpinRate: 79,
        maxMultiplier: 20000,
        rtp: 96.1,
        hot: false,
      },
      {
        id: "hw_blood_and_shadow",
        name: "Blood and Shadow",
        image: "https://via.placeholder.com/400x300/E67E22/white?text=Blood+and+Shadow",
        winRate: 79,
        freeSpinRate: 74,
        maxMultiplier: 30000,
        rtp: 96.17,
        hot: false,
      },
    ],
  },

  PLAY: {
    id: "PLAY",
    name: "Play'n GO",
    emoji: "▶️",
    color: "#2980B9",
    games: [
      {
        id: "play_book_of_dead",
        name: "Book of Dead",
        image: "https://via.placeholder.com/400x300/2980B9/white?text=Book+of+Dead",
        winRate: 94,
        freeSpinRate: 89,
        maxMultiplier: 5000,
        rtp: 96.21,
        hot: true,
      },
      {
        id: "play_reactoonz",
        name: "Reactoonz",
        image: "https://via.placeholder.com/400x300/2980B9/white?text=Reactoonz",
        winRate: 87,
        freeSpinRate: 82,
        maxMultiplier: 4500,
        rtp: 96.51,
        hot: true,
      },
      {
        id: "play_fire_joker",
        name: "Fire Joker",
        image: "https://via.placeholder.com/400x300/2980B9/white?text=Fire+Joker",
        winRate: 83,
        freeSpinRate: 78,
        maxMultiplier: 800,
        rtp: 96.15,
        hot: false,
      },
      {
        id: "play_moon_princess",
        name: "Moon Princess",
        image: "https://via.placeholder.com/400x300/2980B9/white?text=Moon+Princess",
        winRate: 90,
        freeSpinRate: 85,
        maxMultiplier: 5000,
        rtp: 96.51,
        hot: false,
      },
    ],
  },
};

// =============================================
// ฟังก์ชันเลือก 4 เกมแบบสุ่ม โดยให้ % แตกต่างกัน
// อัพเดททุก 5 นาที ตาม timestamp
// =============================================

function getRotatedGames(providerId) {
  const provider = PROVIDERS[providerId];
  if (!provider) return null;

  const games = provider.games;

  // ใช้เวลา (ทุก 5 นาที) เป็น seed สำหรับการหมุนเวียน
  const now = Date.now();
  const interval = 5 * 60 * 1000; // 5 minutes in ms
  const slot = Math.floor(now / interval);

  // Shuffle ด้วย slot เป็น seed (deterministic per 5-min window)
  const shuffled = [...games].sort((a, b) => {
    const hashA = (slot * 31 + a.id.charCodeAt(0) * 17) % 100;
    const hashB = (slot * 31 + b.id.charCodeAt(0) * 17) % 100;
    return hashA - hashB;
  });

  // เลือก 4 เกมแรก
  const selected = shuffled.slice(0, 4);

  // สุ่ม % ใหม่ให้แต่ละเกมในรอบนี้ (ต่างกัน)
  return selected.map((game, index) => {
    // ทำให้ % แตกต่างกันและสุ่มตาม slot
    const baseVariation = ((slot + index * 13) % 20) - 10; // -10 to +10
    const winRate = Math.min(99, Math.max(60, game.winRate + baseVariation));
    const freeSpinRate = Math.min(99, Math.max(55, game.freeSpinRate + baseVariation - 2));

    return {
      ...game,
      winRate,
      freeSpinRate,
    };
  });
}

// คำนวณเวลาที่เหลือก่อนอัพเดทรอบถัดไป
function getNextUpdateIn() {
  const now = Date.now();
  const interval = 5 * 60 * 1000;
  const nextSlot = (Math.floor(now / interval) + 1) * interval;
  const remaining = nextSlot - now;
  const mins = Math.floor(remaining / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

module.exports = { PROVIDERS, getRotatedGames, getNextUpdateIn };
