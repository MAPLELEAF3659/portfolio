<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="火鍋武士" title-alt="HOTPOT KNIGHT" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-6 gap-4 items-center mx-4 lg:mx-32 xl:mx-48">
                <CompDesc desc="參與人員：周駿曄(遊戲、硬體校正)、陳○錡(美術)、張○嘉(硬體)、黃○誠(美術)" class="col-span-6 mx-auto text-center" />
                <CompKeywords :keywords="['MTK Linkit 7697', 'Bluetooth', 'MPU-6050', 'WS2812', 'Unity']" centered
                    class="col-span-6 mx-auto" />
                <CompTitleWithDesc title="一個關於火鍋料大戰的遊戲" title-bg="INTRODUCTION"
                    desc="玩家可選擇加入正義軍團或邪惡帝國：正義軍團支持蟹味棒、魚卵捲(劍會發出綠色光)；邪惡帝國支持芋頭、南瓜(劍會發出紅色光)。遊戲開始時會有不同火鍋料飛上來，玩家必須以手上的光劍揮砍來把火鍋料給切碎，如果切到自己陣營的火鍋料會扣一條命(玩家有三條命)，反之則加分，命數歸零則遊戲結束。"
                    class="col-span-6 md:col-span-3" />
                <BoxYouTube url="https://www.youtube.com/embed/KUtJeZEDpeM?si=4stMt9q1zAcNM_w9" caption="DEMO"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/hotpot_knight/hardware.png" caption="硬體設計"
                    class="col-span-6 md:col-span-3" />
                <CompTitleWithDesc title="實體光劍控制器" title-bg="LIGHTSABER" desc="1. 以MPU6050收集陀螺儀及加速度計資料，並以DMP硬體加速計算轉向與位移
                        2. 將光劍以藍牙連接傳送資料至遊戲中，進行延遲偏移校正與同步
                        3. 另外，光劍會隨玩家所選的陣營發出不同顏色的光(WS2812)，以及在揮動與打擊時發出不同音效，提升玩家互動回饋" class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/hotpot_knight/choose_faction.png" caption="遊戲畫面：選擇陣營"
                    class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/hotpot_knight/game.png" caption="遊戲畫面：切碎敵方的火鍋料！"
                    class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/hotpot_knight/vfx.png" caption="特效"
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
import BoxYouTube from '~/components/boxYouTube.vue';
</script>
