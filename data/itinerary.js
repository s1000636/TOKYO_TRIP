export const itinerary = [
  {
    day: 1,
    date: "2026/10/06",
    title: "成田抵達 → 錦糸町",
    summary: "成田機場入境 → 東武 LEVANT → 晴空塔 → 晚餐。",
    budget: "交通約 ¥1,500–2,000／人（含機場交通）、晴空塔約 ¥2,100 起、餐食約 ¥2,500；約 NT$2,000–2,500／人",
    events: [
      {
        time: "12:55",
        icon: "✈️",
        title: "成田機場入境",
        duration: "約 40 分鐘",
        note: "入境、行李、海關"
      },
      {
        time: "13:40",
        icon: "🚆",
        title: "成田 → 東武 LEVANT",
        duration: "約 70 分鐘",
        note: "Skyliner / N'EX 至上野或東京，再轉 JR 至錦糸町",
        transport: "Skyliner / N'EX + JR"
      },
      {
        time: "14:30",
        icon: "🏨",
        title: "飯店 Check-in、休息",
        duration: "約 1 小時",
        place: "Tobu Hotel Levant Tokyo"
      },
      {
        time: "15:52",
        icon: "🗼",
        title: "東京晴空塔",
        duration: "2–2.5 小時",
        place: "Tokyo Skytree",
        transport: "錦糸町 → 押上"
      },
      {
        time: "18:30",
        icon: "🍜",
        title: "晚餐",
        duration: "約 1 小時",
        note: "晴空塔內或押上周邊"
      }
    ]
  },

  {
    day: 2,
    date: "2026/10/07",
    title: "神社 → 動物園 → 淺草 → PARCO",
    summary: "小網神社 → 上野動物園 → 淺草 → 錦糸町 PARCO。",
    budget: "交通約 ¥800、動物園約 ¥600、餐食約 ¥3,000；約 NT$1,300／人",
    events: [
      {
        time: "09:45",
        icon: "⛩️",
        title: "小網神社",
        duration: "30 分鐘",
        place: "Koami Shrine",
        note: "祈福；建議早去"
      },
      {
        time: "10:15",
        icon: "🚇",
        title: "前往上野動物園",
        duration: "約 20–25 分鐘",
        transport: "地鐵"
      },
      {
        time: "11:00",
        icon: "🐼",
        title: "上野動物園",
        duration: "約 3 小時",
        place: "Ueno Zoo",
        note: "依當日園區開放與動物展示狀況安排"
      },
      {
        time: "14:00",
        icon: "🚇",
        title: "上野 → 淺草",
        duration: "約 5 分鐘車程，另加步行",
        transport: "東京 Metro 銀座線"
      },
      {
        time: "14:30",
        icon: "🏮",
        title: "淺草・雷門・仲見世通",
        duration: "約 2 小時",
        place: "Senso-ji Temple",
        note: "含午餐／仲見世小吃"
      },
      {
        time: "16:30",
        icon: "🛍️",
        title: "淺草 → 錦糸町 PARCO",
        duration: "約 20 分鐘",
        place: "PARCO 錦糸町",
        transport: "都營淺草線 + 步行",
        note: "晚餐＋購物"
      }
    ]
  },

  {
    day: 3,
    date: "2026/10/08",
    title: "東京迪士尼樂園",
    summary: "全天東京迪士尼樂園；建議提早入園並依當日官方 App 安排 DPA／Standby Pass 等項目。",
    budget: "門票約 ¥8,900、餐食＋爆米花桶等約 ¥3,000–4,000；約 NT$2,800–3,000／人（不含另購快速通關）",
    events: [
      {
        time: "早上",
        icon: "🚆",
        title: "錦糸町 → 舞濱",
        duration: "約 40 分鐘",
        transport: "JR + 園區交通"
      },
      {
        time: "09:00",
        icon: "🎢",
        title: "東京迪士尼樂園入場",
        duration: "全天",
        place: "Tokyo Disneyland",
        note: "建議依官方 App 當日資訊安排 DPA／預約項目"
      },
      {
        time: "白天",
        icon: "🎯",
        title: "遊樂設施・餐飲・商店",
        duration: "全天",
        note: "依現場人潮彈性調整"
      },
      {
        time: "晚上",
        icon: "🎆",
        title: "夜間遊行／煙火後離場",
        duration: "依當日營運時間",
        note: "實際演出以官方公告為準"
      }
    ]
  },

  {
    day: 4,
    date: "2026/10/09",
    title: "皮克斯展 → 豐洲 → 台場",
    summary: "CREVIA BASE 皮克斯展 → 豐洲ららぽーと ANNEX → 台場海濱公園。",
    budget: "交通約 ¥820、展覽約 ¥2,000–2,500、餐食約 ¥2,500；約 NT$1,300／人",
    events: [
      {
        time: "10:30",
        icon: "🧸",
        title: "CREVIA BASE 皮克斯展",
        duration: "約 1.5 小時",
        place: "CREVIA BASE"
      },
      {
        time: "14:00",
        icon: "🛍️",
        title: "豐洲ららぽーと ANNEX",
        duration: "約 2 小時",
        place: "LaLaport Toyosu",
        note: "午餐可在此解決"
      },
      {
        time: "16:35",
        icon: "🌊",
        title: "台場海濱公園",
        duration: "約 2 小時",
        place: "Odaiba Marine Park",
        note: "建議留到傍晚看彩虹橋夜景"
      },
      {
        time: "全天",
        icon: "🚝",
        title: "交通",
        duration: "百合海鷗號串聯",
        transport: "ゆりかもめ",
        note: "一日券約 ¥820；實際票價以當日官方資訊為準"
      }
    ]
  },

  {
    day: 5,
    date: "2026/10/10",
    title: "井之頭 → 貓咖 → 澀谷 SKY → 晚餐",
    summary: "井之頭弁財天／井之頭公園 → 貓咪咖啡廳 MOCHA → SHIBUYA SKY → SATO ブリアン。",
    budget: "交通約 ¥1,000、SHIBUYA SKY 約 ¥2,200、貓咖約 ¥1,500、晚餐約 ¥5,000–6,000；約 NT$3,500–4,000／人",
    events: [
      {
        time: "10:00",
        icon: "⛩️",
        title: "井之頭弁財天／井之頭公園",
        duration: "約 1.5 小時",
        place: "Inokashira Park"
      },
      {
        time: "12:01",
        icon: "🐱",
        title: "貓咪咖啡廳 MOCHA",
        duration: "約 1 小時",
        note: "建議提前預約"
      },
      {
        time: "13:49",
        icon: "🌇",
        title: "SHIBUYA SKY",
        duration: "約 1.5–2 小時",
        place: "SHIBUYA SKY",
        note: "建議先網路預約時段票"
      },
      {
        time: "18:30",
        icon: "🥩",
        title: "SATO ブリアン晚餐",
        duration: "晚餐",
        place: "SATO ブリアン",
        note: "建議提前訂位"
      }
    ]
  },

  {
    day: 6,
    date: "2026/10/11",
    title: "彈性上午 → 成田 → 賦歸",
    summary: "上午留白；錦糸町補買伴手禮或就近逛街，13:00 前從錦糸町出發前往成田。",
    budget: "依上午購物與機場交通實際支出",
    events: [
      {
        time: "上午",
        icon: "🛍️",
        title: "彈性行程",
        duration: "上午",
        place: "Kinshicho",
        note: "錦糸町周邊補買伴手禮，或就近逛街"
      },
      {
        time: "13:00前",
        icon: "🚆",
        title: "錦糸町 → 成田機場",
        duration: "約 90 分鐘",
        transport: "JR + N'EX",
        note: "預留緩衝"
      },
      {
        time: "16:20",
        icon: "✈️",
        title: "JX803 起飛",
        duration: "回程航班"
      }
    ]
  }
];