<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="雙軸穩定器" title-alt="2-Axis Gimbal Stabilizer" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-6 gap-4 items-center mx-4 lg:mx-16 xl:mx-48">
                <CompKeywords :keywords="['RPi 4B', 'Linux kernel driver', 'MPU6050', 'SG90', 'i2c', 'FIFO']" centered
                    class="col-span-6 mx-auto" />
                <BoxLink caption="Github" url="https://github.com/MAPLELEAF3659/two-axis_gimbal_stabilizer"
                    class="col-span-6" />
                <CompTitleWithDesc title="簡介" title-bg="INTRODUCTION" desc="1. 提供攝影工作者穩定的影像拍攝效果，減少因手部晃動或外部震動導致的影像模糊
                    2. 雙軸伺服馬達(SG90)設計，可針對Roll和Pitch方向進行轉向補償
                    3. 使用高精度動作感測器(MPU6050)，並且自定義其Linux kernel driver，實現快速準確的轉向檢測" class="col-span-6 md:col-span-3" />
                <BoxYouTube url="https://www.youtube.com/embed/aVimZLmbsr4?si=rjtHaHLQZbPt32Pg" caption="DEMO"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/two_axis_gimbal_stabilizer/fifo.png"
                    caption="FIFO Buffer概念圖" class="col-span-6 md:col-span-3" />
                <CompTitleWithDesc title="優化" title-bg="OPTIMIZATION"
                    desc="FIFO Buffer
                        改進加速度數值分址讀取方案，採用MPU6050的DMP(Digital Motion Processor)之FIFO Buffer功能，使其可將加速度XYZ HIGH+LOW共6項數值合併，讓i2c driver可連續讀取，進而降低延遲達60%(以PMU測試)"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/two_axis_gimbal_stabilizer/hardware.png" caption="硬體設計圖"
                    class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/two_axis_gimbal_stabilizer/architecture.png"
                    caption="系統架構圖" class="col-span-6 md:col-span-2" />
                <CompImgWithCaption img-url="/images/projects/two_axis_gimbal_stabilizer/circuit.png" caption="電路圖"
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
