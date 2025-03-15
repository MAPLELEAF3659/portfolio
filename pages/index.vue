<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="page-index w-full h-full">
        <section class="main h-svh py-48 bg-[url(/public/images/index_bg.png)]">
            <div class="top gap-2 mb-32">
                <h2 class="text-main-sub text-with-space-sm">JUN-YE ZHOU</h2>
                <h1 class="text-main text-with-space">周駿曄</h1>
                <h2 class="text-main-sub text-with-space-sm mt-4">2020 - {{ currentYear }}</h2>
            </div>
            <div class="bottom flex flex-col items-center gap-2 mb-16">
                <h2 class="text-main-sub text-with-space font-semibold italic">PORTFOLIO</h2>
                <div class="divider border-2 border-white w-20" />
                <p class="text-desc text-white text-center">An Interdisciplinary Information Engineer with Creative
                    Design Thinking in AI.</p>
            </div>
            <div class="arrow flex flex-col items-center ">
                <span class="arrow-down text-main-sub">↓</span>
            </div>
        </section>
        <div class="container mx-auto my-16 md:my-32 flex flex-col gap-16">
            <section class="about section-box">
                <CompTitle title="簡介" title-bg="ABOUT" />
                <CompDesc
                    desc="從資訊跨足設計的跳脫框架，使我同時具有開發者的務實能力，以及設計師的創新思維。而透過各項專題實作與國際研討會發表，我已累積許多軟韌體、人工智慧、多媒體網路、人機互動等豐富經驗，讓我得以蛻變成為AI跨域科技人。" />
            </section>
            <section class="education section-box">
                <CompTitle title="學歷" title-bg="EDUCATION" />
                <CompTwoCols date-start="2024" date-end="2026(預計)" title="國立臺灣大學"
                    subtitle="工程科學與海洋工程學系碩士班丁組(主修資訊科技) | GPA(累積)：4.24/4.3"
                    :desc-array="['系統設計實驗室(Prof. 陳彥廷)', '碩論方向：802.11(WiFi) AP machine learning acceleration', '修習課程：嵌入式系統、嵌入式機器學習、多媒體網路、資料礦掘']" />
                <CompTwoCols date-start="2020" date-end="2024" title="國立臺北科技大學" subtitle="互動設計系媒體設計組 | GPA：3.97/4.0"
                    :desc-array="['AI互動媒體實驗室', '總排名: 2/63(3.2%)、書卷獎x6', '修習課程：人機互動、物聯網、全端網站開發、多媒體技術、數位遊戲設計']" />
            </section>
            <section class="work-exp section-box">
                <CompTitle title="工作經驗" title-bg="WORK EXPERIENCE" />
                <CompTwoCols date-start="2023.04" date-end="2023.09" title="研究助理(Diffusion model)" subtitle="志合訊息股份有限公司"
                    :desc-array="['研究有關Diffusion model相關論文與PyTorch+HuggingFace實作，並給予工作同仁指導教學。研究後期擔任顧問角色，給予LDM大模型訓練建議與範例程式碼。']" />
                <CompTwoCols date-start="2022.06" date-end="2023.09" title="前端工程實習(Vue.js)"
                    subtitle="球據智能運動數據分析股份有限公司(現名富據智能科技)" :desc-array="['開發公司所研發之籃球比賽AI辨識系統之前端介面，包括網頁影片編輯器(類似威力導演)、影片選擇大廳、後台管理介面等，提升約20%管理員審核效率。',
                        '開發公司形象官網前端，包含主頁介紹與動畫、登入與註冊頁面、聯絡我們頁面等。',
                        '開發公司IG 活動小網站，包含活動說明與答題頁面之動畫實作。']" />
            </section>
            <section class="publication section-box">
                <CompTitle title="發表" title-bg="PUBLICATION" />
                <CompTwoCols date-start="2024"
                    title="Enhancing exercise engagement through AI-driven virtual training and game-based animation"
                    subtitle="2024 IET International Conference on Engineering Technologies and Applications (ICETA)"
                    :desc-array="['第三作者']" />
                <CompTwoCols date-start="2023" title="Empowering Interactive Fitness Game"
                    subtitle="2023 IEEE International Conference on Consumer Electronics-Taiwan (ICCE-Taiwan)"
                    :desc-array="['第一作者、通訊作者、Oral presentation']" />
                <CompTwoCols date-start="2023"
                    title="Word Card Generation for Language Education using Latent Diffusion Model"
                    subtitle="2023 IET International Conference on Engineering Technologies and Applications (ICETA)"
                    :desc-array="['第一作者、通訊作者、Oral presentation']" />
                <CompTwoCols date-start="2022" date-end="至今" title="MAPLELEAF3659 Blog" subtitle="個人技術部落格"
                    :desc-array="['程式設計/AI/生活分享', '目前技術文章主題包含：FPGA、RPi Linux Kernel、AE/VAE、Diffusion model、Multimedia', '累計點閱超過1000次']" />
            </section>
            <section class="awards section-box">
                <CompTitle title="獎項" title-bg="AWARDS" />
                <CompTwoCols date-start="2024.05.30" date-end="2023.06.01" title="放視大賞2024 ● 跨域組銀賞"
                    subtitle="作品《The Blinking Bullet》" />
                <CompTwoCols date-start="2024.05.24" date-end="2023.05.27" title="金點新秀設計獎2024 ● 和碩贊助特別獎"
                    subtitle="作品《The Blinking Bullet》" />
                <CompTwoCols date-start="2023.05.25" date-end="2023.05.27" title="放視大賞2023 ● PC與主機遊戲組入圍"
                    subtitle="作品《The Controlled》" />
                <CompTwoCols date-start="2023.04" date-end="2023.05" title="技職盃黑克松2023 ● 全國賽入圍/北區賽佳作"
                    subtitle="作品《滴滴蘭》(全國賽)、《山頂的Pachinko》(北區賽)" />
            </section>
            <section class="activities section-box">
                <CompTitle title="活動經歷" title-bg="ACTIVITY EXPERIENCE" />
                <CompTwoCols date-start="2024.02.29" title="秀山國小教師研習營 - AI生成創作" subtitle="講師" />
                <CompTwoCols date-start="2023.12.20" title="國立暨南大學 - AI人像生成" subtitle="講師" />
                <CompTwoCols date-start="2023.08" date-end="2023.09" title="XR 創新與實作課程 - NVIDIA x HTC x 北科大" subtitle="助教" />
                <CompTwoCols date-start="2023.02" date-end="2023.06" title="111-2 學期北科互動系上課程(互動程式設計III、設計實作、基本設計II)"
                    subtitle="助教" />
                <CompTwoCols date-start="2023.04.14" title="教育部 人文社科教育苗圃分區資源中心計畫工作坊" subtitle="參與人" />
                <CompTwoCols date-start="2022.10.20" title="NVIDIA Studio x HP 協作空間 Openday" subtitle="作品製作與展演" />
                <CompTwoCols date-start="2022.07.11" date-end="2022.07.12" title="2022 創新IOT應用與雛型設計跨域工作坊" subtitle="助教" />
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
import CompTitle from "~/components/compTitle.vue"
import CompDesc from "~/components/compDesc.vue"
import CompTwoCols from "~/components/compTwoCols.vue"
const currentYear = new Date().getFullYear();

useHead({
    title: "主頁"
})
</script>

<style lang="postcss">
.arrow-down {
    animation: MoveDown 2s ease-in-out infinite;
}

@keyframes MoveDown {
    0% {
        opacity: 0;
        transform: translateY(0%);
    }

    25% {
        opacity: 1;
    }

    70% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateY(75%);
    }
}

.section-box {
    @apply mx-8 md:mx-16 lg:mx-32 xl:mx-64 flex flex-col gap-8;
}
</style>