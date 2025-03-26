<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="山頂的Pachinko" title-alt="2023技職盃黑克松北區賽佳作" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-6 gap-4 items-center mx-4 lg:mx-32 xl:mx-48">
                <CompKeywords
                    :keywords="['ESP32', 'FreeRTOS', 'Multi-core Task Scheduling', 'TFT Screen', 'WebAPI', 'Wi-Fi']"
                    centered class="col-span-6 mx-auto" />
                <BoxLink caption="Github" url="https://github.com/MAPLELEAF3659/ml_display" class="col-span-6" />
                <CompTitleWithDesc title="簡介" title-bg="INTRODUCTION"
                    desc="本作品核心概念為山林互動式垃圾桶與管理系統，結合丟垃圾與玩彈珠檯的創新HCI開發實作，減少登山客亂丟垃圾之亂象。系統包含紅外線、超音波等感測裝置及彈珠檯遊戲畫面，以及後台(Firebase)山林垃圾桶管理網頁。"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/pachinko_in_mountain/arch.png" caption="系統特色"
                    class="col-span-6 md:col-span-3" />
                <BoxYouTube url="https://www.youtube.com/embed/8HKLGZQKQ6Q?si=1UfXRbm-Lb72wC9Z" caption="DEMO"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/pachinko_in_mountain/prize.jpg" caption="得獎畫面"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/pachinko_in_mountain/sustainability.png" caption="山林垃圾減量永續概念"
                    class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/pachinko_in_mountain/persona.png" caption="人物誌"
                    class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/pachinko_in_mountain/service_blueprint.png" caption="服務藍圖"
                    class="col-span-6 md:col-span-2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectSubHeader from '~/components/sectSubHeader.vue'
import CompKeywords from '~/components/projects/compKeywords.vue';
import CompTitleWithDesc from '~/components/compTitleWithDesc.vue';
import CompImgWithCaption from '~/components/compImgWithCaption.vue';
import BoxLink from '~/components/boxLink.vue';
import BoxYouTube from '~/components/boxYouTube.vue';
</script>
