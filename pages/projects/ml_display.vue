<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="ML-Display" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-6 gap-4 mx-4 lg:mx-32 xl:mx-48">
                <CompKeywords
                    :keywords="['ESP32', 'FreeRTOS', 'Multi-core Task Scheduling', 'TFT Screen', 'WebAPI', 'Wi-Fi']" centered
                    class="col-span-6 mx-auto" />
                <BoxLink caption="Github" url="https://github.com/MAPLELEAF3659/ml_display"
                    class="col-span-6" />
                <CompTitleWithDesc title="簡介" title-bg="INTRODUCTION" desc="多功能資訊顯示器，包含兩種模式：
                    1. 主畫面：NTP時鐘、天氣描述/溫度/濕度、台股指數/股價現價及變化、國際匯率
                    2. Foobar2000：播放中歌曲的metadata、播放進度同步、歌詞同步" class="col-span-6 md:col-span-3" />
                <BoxYouTube url="https://www.youtube.com/embed/tnHw0xSMCKo?si=5hilCDlCx3-A-Pi-" caption="DEMO"
                    class="col-span-6 md:col-span-3" />
                <CompTitleWithDesc title="問題" title-bg="PROBLEM" desc="1. 在主畫面中，時鐘UI必須每秒更新1次。但因WebAPI更新資料時使用HTTP GET函式，執行時間可能超過1秒導致UI卡住
                    2. 使用HTTP或載入中文字型時，memory超出單個task或timer所能乘載的大小，有可能導致重開機(fatal error)"
                    class="col-span-6 md:col-span-3" />
                <CompTitleWithDesc title="FreeRTOS Task Scheduling" title-bg="FreeRTOS" desc="利用ESP32的雙核心及FreeRTOS，使task安排在不同的core異步執行，並以queue互相溝通，可提升約50%效能：
                        core 1: TFT print/draw string、update NTP time
                        core 0: HTTP Get Task 
                        基於Queue，照先進先出順序執行，使此HTTP Get Task限制在8192 memory stack depth"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/ml_display/main_screen.png" caption="主畫面"
                    class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/ml_display/player_screen.png" caption="Foobar2000播放畫面"
                    class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/ml_display/circuit.png" caption="電路圖"
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
