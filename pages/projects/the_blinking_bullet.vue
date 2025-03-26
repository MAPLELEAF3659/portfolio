<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="The Blinking Bullet" title-alt="2024 放視大賞．跨域類跨域組 銀賞
        2024 放視大賞．遊戲類非典型遊戲組 入圍
        2024 金點新秀設計獎．和碩贊助特別獎" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-6 gap-4 items-center mx-4 lg:mx-32 xl:mx-48">
                <CompDesc desc="參與人員：周駿曄(程式設計)、陳○錡(3D美術)、孫○年(關卡設計)、黃○誠(角色設計)" class="col-span-6 mx-auto text-center" />
                <CompKeywords :keywords="['Unreal Engine 5', 'MetaXR (for Oculus Quest 2)', 'Firebase', 'Nuxt.js']"
                    centered class="col-span-6 mx-auto" />
                <BoxLink caption="特製戰地新聞網站" url="https://nnd-news.web.app/" class="col-span-6" />
                <CompImgWithCaption img-url="/images/projects/the_blinking_bullet/prize_vgw.jpg" caption="放視大賞得獎畫面(左側為本團隊)"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/the_blinking_bullet/prize_golden_young_pin.jpg" caption="金點新秀得獎畫面(右側為本團隊)"
                    class="col-span-6 md:col-span-3" />
                <CompTitleWithDesc title="簡介" title-bg="INTRODUCTION"
                    desc="本專案旨在使用虛擬實境(VR)技術，為體驗者提供一個深刻、沉浸式的體驗，讓體驗者更加了解戰爭攝影師的工作和面臨的危險情況，並提升對他們的尊重和理解。同時，我們預期本作品能引發對國際戰爭衝突的更深入討論，以促進和平和解決衝突的努力。"
                    class="col-span-6 md:col-span-3" />
                <BoxYouTube url="https://www.youtube.com/embed/T3KIVOzgVB8?si=zG_dHGdjCQq5Ke-z" caption="DEMO"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/the_blinking_bullet/how_to_play.png" caption="VR操作示意圖"
                    class="col-span-6 md:col-span-3" />
                <CompTitleWithDesc title="VR操作說明" title-bg="VR PLAY"
                    desc="VR裝置Quest2手把所具有的檢測加速度與方向的功能，讓我們能夠以偵測手勢與手部高度的方式用現有的設備創造出模擬攝影的體感操作模式，並將其運用於Unreal Engine 5中，整合其具備的真實畫面及特效，使體驗更上層樓。"
                    class="col-span-6 md:col-span-3" />
                <div class="col-span-6 md:col-span-3 flex flex-col gap-4">
                    <CompTitleWithDesc title="新聞網站操作說明" title-bg="NEWS" desc="以Nuxt.js網站框架(Vue 3)建立特製新聞網站，並將其串接至Firebase伺服器，利用其Firestore、Storage、Auth及Hosting功能，擴大遊戲體驗至現實當中，讓玩家能夠真正地將照片曝光在大眾視野。" />
                    <CompImgWithCaption img-url="/images/projects/the_blinking_bullet/nnd_news_upload.png"
                        caption="新聞網站上傳照片" />
                </div>
                <CompImgWithCaption img-url="/images/projects/the_blinking_bullet/nnd_news_index.png" caption="新聞網站主頁"
                    class="col-span-6 md:col-span-3" />
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
