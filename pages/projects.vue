<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="projects">
        <section class="main py-8 sm:py-16 bg-[url(/public/images/index_bg.png)]">
            <h1 class="text-main-sm text-center">專案</h1>
            <h2 class="text-main-sub text-with-space-sm mt-2">Projects</h2>
        </section>
        <section class="showcases container mx-auto py-8 sm:py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-8">
                <CompTitle class="col-span-1 md:col-span-2 xl:col-span-3 mt-12 mb-6" title="精選" title-bg="FEATURED" />
                <div v-for="(item, index) in projectItemsFeatured" :key="index" class="project-boxes">
                    <BoxProject class="col-span-1" :title="item.title" :desc="item.desc" :special="item.special"
                        :tags="item.tags" :img-url="item.imgUrl" :url="item.url" />
                </div>
                <CompTitle class="col-span-1 md:col-span-2 xl:col-span-3 mt-12 mb-6" title="其他" title-bg="OTHER" />
                <div v-for="(item, index) in projectItemsOther" :key="index" class="project-boxes">
                    <BoxProject class="col-span-1" :title="item.title" :desc="item.desc" :special="item.special"
                        :tags="item.tags" :img-url="item.imgUrl" :url="item.url" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import BoxProject from '~/components/projects/boxProject.vue'
import CompTitle from "~/components/compTitle.vue"
const projectItemsFeatured = [
    {
        title: "Empowering Interactive Fitness Game",
        desc: "本研究提出一項「賦能式」人工智慧，結合動態感測技術以增強健身遊戲的多元性與挑戰性，降低重複動作帶來的無趣，成功提升玩家參與度達16%",
        special: "IEEE ICCE-TW 2023",
        tags: ["AI", "數位遊戲", "MCU", "ESP8266", "人機互動"],
        imgUrl: "/images/projects/empowering_interactive_fitness_game/preview.png",
        url: "/projects/"
    }, {
        title: "Word Card Generation for Language Education using Latent Diffusion Model",
        desc: "設計基於LDM的單字卡生成系統，透過CC0數據集、GPT-4提示與SLD機制確保版權合法與語意相關，並由實驗證實其可為教育領域安全生成適當內容",
        special: "IET ICETA 2023",
        tags: ["AI", "Diffusion model", "圖像生成"],
        imgUrl: "/images/projects/word_card_ldm/preview.png",
        url: "/projects/"
    }, {
        title: "雙軸穩定器",
        desc: "以RPi 4B+MPU6050 kernel+SG90開發手持穩定器，並使用FIFO Buffer降低讀取延遲約60%",
        tags: ["ARM-based", "樹莓派", "體感"],
        imgUrl: "/images/projects/two_axis_gimbal_stabilizer/preview.png",
        url: "/projects/"
    }, {
        title: "ML-Display",
        desc: "ESP32開發即時網路資訊小螢幕，利用雙核心task scheduling加速效能約50%",
        tags: ["MCU", "ESP32", "Wi-Fi", "FreeRTOS"],
        imgUrl: "/images/projects/ml_display/preview.png",
        url: "/projects/"
    }, {
        title: "山頂的Pachinko",
        desc: "山區互動式垃圾桶及後台管理系統",
        tags: ["MCU", "ESP32", "Firebase", "Unity"],
        special: "2023技職盃黑客松 北區賽佳作",
        imgUrl: "/images/projects/pachinko_in_mountain/preview.png",
        url: "/projects/"
    }, {
        title: "滴滴蘭",
        desc: "針對蘭花產業的AR監控與2倍節水循環系統",
        tags: ["MCU", "ESP32", "Firebase", "Unity", "ARCore"],
        special: "2023技職盃黑客松 全國賽入圍",
        imgUrl: "/images/projects/drop_orchid/preview.png",
        url: "/projects/"
    }, {
        title: "火鍋武士Hotpot Knight",
        desc: "自製藍牙無線光劍控制器+火鍋料大戰的體感遊戲",
        tags: ["MCU", "LinkIt7697", "藍牙", "體感"],
        imgUrl: "/images/projects/hotpot_knight/preview.png",
        url: "/projects/"
    }, {
        title: "The Blinking Bullet",
        desc: "VR戰地攝影體驗",
        tags: ["VR", "數位遊戲", "Unreal Engine 5", "Meta Quest 2"],
        special: "2024 放視大賞．跨域類跨域組 銀賞\n2024 放視大賞．遊戲類非典型遊戲組 入圍\n2024 金點新秀設計獎．和碩贊助特別獎",
        imgUrl: "/images/projects/the_blinking_bullet/preview.png",
        url: "/projects/"
    },
]

const projectItemsOther = [
    {
        title: "疫手掌握NullTac",
        desc: "結合Leap Motion的非接觸式電梯按鈕介面",
        tags: ["Leap Motion Controller", "Unity"],
        imgUrl: "/images/projects/nulltac/preview.png",
        url: "/projects/"
    }, {
        title: "The Controlled演控人生",
        desc: "社交軟體演算法模擬2D遊戲",
        tags: ["模擬", "Unity"],
        special: "2023 放視大賞．PC與主機遊戲組 入圍",
        imgUrl: "/images/projects/the_controlled/preview.png",
        url: "/projects/"
    }, {
        title: "北科Lion的逆襲",
        desc: "透過AR與LBS技術，引導北科大新生實地探索校園裝置藝術與吉祥物",
        tags: ["AR", "Unity"],
        special: "曾獲 中時新聞網、工商時報 報導",
        imgUrl: "/images/projects/ntut_lion_revenge/preview.png",
        url: "/projects/"
    },
    {
        title: "Bad Taste Radar",
        desc: "以網路爬蟲獲取各大美食網站評分，並分析評價的地雷程度(可信度)",
        tags: ["網站", "網路爬蟲", "Blazer", "Firebase"],
        imgUrl: "/images/projects/bad_taste_radar/preview.png",
        url: "/projects/"
    }, {
        title: "廢話少說工作室 CtC! Studio 官網",
        desc: "廢話少說工作室Landing Page及專案介紹頁面",
        tags: ["網站", "Firebase", "jQuery", "Bootstrap", "GASP"],
        imgUrl: "/images/projects/cut_the_crap_studio/preview.png",
        url: "/projects/"
    },
]
</script>