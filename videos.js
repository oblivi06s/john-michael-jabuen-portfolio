// Portfolio videos, shown in this order on the site.
//
// Each video needs:
//   category    "ugc" | "animation" | "podcast" | "vsl"
//   title, description
//   driveId     the Google Drive file ID (the part after /file/d/ in a share link)
//   thumbnail   usually https://drive.google.com/thumbnail?id=DRIVE_ID&sz=w1000
//
// Optional:
//   clientWork: true          shows the "Real client work" badge. Only use it for genuine client projects.
//   orientation: "landscape"  for 16:9 videos. Leave it out for vertical 9:16 videos.
//
// The Drive file must be shared as "Anyone with the link can view".
const videos = [
    {
        id: 1,
        category: "ugc",
        title: "Kleone Copper Antenna",
        description: "A story-driven AI UGC video.",
        driveId: "1QmFWx9NJ2xpf8H0E76jHYaTBqxozFqzV",
        thumbnail: "https://drive.google.com/thumbnail?id=1QmFWx9NJ2xpf8H0E76jHYaTBqxozFqzV&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 2,
        category: "vsl",
        title: "Kleone Copper Antenna",
        description: "What happened to real food.",
        driveId: "1Ukk1-iPP41IujdX6R38yUh2y8791ajC5",
        thumbnail: "https://drive.google.com/thumbnail?id=1Ukk1-iPP41IujdX6R38yUh2y8791ajC5&sz=w1000",
        label: "VSL",
        clientWork: true
    },

    
    {
        id: 3,
        category: "animation",
        title: "AI 3D Cartoon",
        description: "1920: a farmer bets his neighbour a pig that the copper stick won't work.",
        driveId: "18OHy1SPWbDGxZoBYpWhQrs6vKTetmeC_",
        thumbnail: "https://drive.google.com/thumbnail?id=18OHy1SPWbDGxZoBYpWhQrs6vKTetmeC_&sz=w1000",
        label: "Animation",
        clientWork: true
    },

    {
        id: 4,
        category: "ugc",
        title: "Kleone Copper Antenna",
        description: "A story-driven AI UGC video.",
        driveId: "10lLeIchlvwSb0S9TSxF7tjNCf7C_mZro",
        thumbnail: "https://drive.google.com/thumbnail?id=10lLeIchlvwSb0S9TSxF7tjNCf7C_mZro&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    
    {
        id: 5,
        category: "vsl",
        title: "Kleone Copper Antenna",
        description: " Most copper antennas online are plated junk",
        driveId: "1j0ZbfAC85l-uhUEItUjsmCKGNQF2QYSo",
        thumbnail: "https://drive.google.com/thumbnail?id=1j0ZbfAC85l-uhUEItUjsmCKGNQF2QYSo&sz=w1000",
        label: "VSL",
        clientWork: true
    },

    {
        id: 6,
        category: "animation",
        title: "AI 3D Cartoon",
        description: "A copper method from 1920 goes in before the first freeze and works all winter",
        driveId: "11Te1i2vpCU0GyDx3dzVYh25Gv_znUS74",
        thumbnail: "https://drive.google.com/thumbnail?id=11Te1i2vpCU0GyDx3dzVYh25Gv_znUS74&sz=w1000",
        label: "Animation",
        clientWork: true
    },

    {
        id: 7,
        category: "ugc",
        title: "Kleone Copper Antenna",
        description: "The fertilizer bag is built to run out — that's the business.",
        driveId: "1r-tdiIyN59dPOYfb76Eyqfs54x6YdG_D",
        thumbnail: "https://drive.google.com/thumbnail?id=1r-tdiIyN59dPOYfb76Eyqfs54x6YdG_D&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 8,
        category: "vsl",
        title: "Kleone Copper Antenna",
        description: "If your garden gave you less this year, it was never your hands.",
        driveId: "1E1HsXTB-WK_etZyGJLXrCWWiErUoSFAA",
        thumbnail: "https://drive.google.com/thumbnail?id=1E1HsXTB-WK_etZyGJLXrCWWiErUoSFAA&sz=w1000",
        label: "VSL",
        clientWork: true
    },


    {
        id: 9,
        category: "ugc",
        title: "Kleone Copper Antenna",
        description: "A farmer whose family hasn't bought fertilizer in four generations shows the copper his great-grandfather left in the barn.",
        driveId: "1o7BFAzvgHLrAvRlsKChY7sJFEv_hBKOo",
        thumbnail: "https://drive.google.com/thumbnail?id=1o7BFAzvgHLrAvRlsKChY7sJFEv_hBKOo&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },


    {
        id: 10,
        category: "vsl",
        title: "Educational VSL",
        description: "A video sales letter that educates everyone regarding parasites.",
        driveId: "1dqkHQcOa_SajV2vIaXhswr9SwQUigkdx",
        thumbnail: "https://drive.google.com/thumbnail?id=1dqkHQcOa_SajV2vIaXhswr9SwQUigkdx&sz=w1000",
        label: "VSL",
        clientWork: true
    },


    {
        id: 11,
        category: "vsl",
        title: "Product VSL",
        description: "A video sales letter with storytelling and product visuals.",
        driveId: "1AL7egUPw04hvRSLR480beZIbgn8Uoy3-",
        thumbnail: "https://drive.google.com/thumbnail?id=1AL7egUPw04hvRSLR480beZIbgn8Uoy3-&sz=w1000",
        label: "VSL",
        clientWork: true
    },

    {
        id: 12,
        category: "animation",
        title: "AI 3D Cartoon",
        description: "1925: every farmer's wife on the road asks her the same question. It was a copper antenna.",
        driveId: "1dyImlcHAItT5tvc5uE1fGxEZkhzT7zqh",
        thumbnail: "https://drive.google.com/thumbnail?id=1dyImlcHAItT5tvc5uE1fGxEZkhzT7zqh&sz=w1000",
        label: "Animation",
        clientWork: true
    },

    {
        id: 13,
        category: "ugc",
        title: "Copper Antenna",
        description: "Woman, 60s, looking at a stack of fertilizer bags in the garage.",
        driveId: "1VfhT8nntgzSa8X4UxmPfYIvXX3WEjO58",
        thumbnail: "https://drive.google.com/thumbnail?id=1VfhT8nntgzSa8X4UxmPfYIvXX3WEjO58&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },
    
    {
        id: 14,
        category: "ugc",
        title: "Copper Antenna",
        description: "A skeptic opens the box, thinks they look like a shop-class project.",
        driveId: "1ccWQ6ChxYIFJC8j892SuKfSIpbc8xS64",
        thumbnail: "https://drive.google.com/thumbnail?id=1ccWQ6ChxYIFJC8j892SuKfSIpbc8xS64&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 15,
        category: "animation",
        title: "AI 3D Cartoon",
        description: "Every village had one man who said it was nonsense.",
        driveId: "1f3fN2Ti_-c5TTYn6_HnSkPUvDZpTE9W7",
        thumbnail: "https://drive.google.com/thumbnail?id=1f3fN2Ti_-c5TTYn6_HnSkPUvDZpTE9W7&sz=w1000",
        label: "Animation",
        clientWork: true
    },

    {
        id: 16,
        category: "animation",
        title: "AI 3D Cartoon",
        description: "Grandma's secret wasn't in the soil. It was IN the soil.",
        driveId: "17MDJX9bfztovr2o47bDh_IBzJ5lX9iva",
        thumbnail: "https://drive.google.com/thumbnail?id=17MDJX9bfztovr2o47bDh_IBzJ5lX9iva&sz=w1000",
        label: "Animation",
        clientWork: true
    },

    {
        id: 17,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "A story-driven AI UGC video.",
        driveId: "1b6Ol8Nrxi3JfRpJFLYOYgI5rSy0hg9FR",
        thumbnail: "https://drive.google.com/thumbnail?id=1b6Ol8Nrxi3JfRpJFLYOYgI5rSy0hg9FR&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },
    

    {
        id: 18,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "An AI UGC video featuring a product story.",
        driveId: "1scAU_VcWgn0rdNBPPLcVDJEnuUGWb-aD",
        thumbnail: "https://drive.google.com/thumbnail?id=1scAU_VcWgn0rdNBPPLcVDJEnuUGWb-aD&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 19,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "An AI UGC video teaching remedy and featuring a product.",
        driveId: "1yX2AOPEqn7yMmk0sdUykUymbh6FW5EMq",
        thumbnail: "https://drive.google.com/thumbnail?id=1yX2AOPEqn7yMmk0sdUykUymbh6FW5EMq&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 20,
        category: "ugc",
        title: "Soursop Bitters",
        description: "A symptom-driven AI UGC video.",
        driveId: "1_CSexI4AbnrQmQHl7WM49qvcDhYB2Igy",
        thumbnail: "https://drive.google.com/thumbnail?id=1_CSexI4AbnrQmQHl7WM49qvcDhYB2Igy&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 21,
        category: "ugc",
        title: "Recipe Video",
        description: "An AI UGC Video teaching healthy recipe.",
        driveId: "1IUsDSY5Mh1iqrQTu04U2UCjkc75UWWFR",
        thumbnail: "https://drive.google.com/thumbnail?id=1IUsDSY5Mh1iqrQTu04U2UCjkc75UWWFR&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 22,
        category: "ugc",
        title: "JUPI Hydration Product",
        description: "A warning-driven AI UGC Video.",
        driveId: "1CNFNEUhe1b5TwBxX5yTajekPkefi4gbm",
        thumbnail: "https://drive.google.com/thumbnail?id=1CNFNEUhe1b5TwBxX5yTajekPkefi4gbm&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 23,
        category: "ugc",
        title: "Soursop Bitters",
        description: "AI UGC Video that promotes healthy habits.",
        driveId: "1ZTIMJvzjYQYKfpXoJQFpZ6CUzyBN_fmq",
        thumbnail: "https://drive.google.com/thumbnail?id=1ZTIMJvzjYQYKfpXoJQFpZ6CUzyBN_fmq&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 24,
        category: "ugc",
        title: "Blueberry Tips",
        description: "AI UGC Video that reveals a secret.",
        driveId: "17lMvZyDbrqLE6QX5PhUwOzxSczh4pD90",
        thumbnail: "https://drive.google.com/thumbnail?id=17lMvZyDbrqLE6QX5PhUwOzxSczh4pD90&sz=w1000",
        label: "AI UGC",
        clientWork: true
    },

    {
        id: 25,
        category: "vsl",
        title: "Warning VSL",
        description: "A video sales letter that provides symptoms and remedy.",
        driveId: "1ibaO6Esc9yojX5unG68BqUJdnwNV5BIK",
        thumbnail: "https://drive.google.com/thumbnail?id=1ibaO6Esc9yojX5unG68BqUJdnwNV5BIK&sz=w1000",
        label: "VSL",
        clientWork: true
    },


    {
        id: 26,
        category: "podcast",
        title: "Testimony Podcast",
        description: "A podcast-style ad that provides first-hand experience.",
        driveId: "1FWLIS9Hv0NHnWNyyUJ5xxRcGHUrPzd5X",
        thumbnail: "https://drive.google.com/thumbnail?id=1FWLIS9Hv0NHnWNyyUJ5xxRcGHUrPzd5X&sz=w1000",
        label: "PODCAST",
        clientWork: true
    }

];
