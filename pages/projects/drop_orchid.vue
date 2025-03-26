<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="滴滴蘭" title-alt="2023技職盃黑克松全國賽入圍" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-6 gap-4 items-center mx-4 lg:mx-32 xl:mx-48">
                <CompDesc desc="參與人員：周駿曄(程式)、林○亨(程式)、張○嘉(美術)" class="col-span-6 mx-auto text-center" />
                <CompKeywords :keywords="['ESP32', 'Firebase', 'ARCore', 'Unity']" centered class="col-span-6 mx-auto" />
                <CompTitleWithDesc title="簡介" title-bg="INTRODUCTION"
                    desc="本作以AR結合蘭花產業的前瞻理念，提供AR監測系統、水循環系統等設計，其中硬體裝置部分包含土壤溼度、水質、水流量感測器，希望減少水風險、增加水資源利用。"
                    class="col-span-6 md:col-span-3" />
                <BoxYouTube url="https://www.youtube.com/embed/ypIrChkcLGs?si=_z6vkZ5ggC6LUWe5" caption="DEMO"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/drop_orchid/system_design_1.png" caption="AR監控系統"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/drop_orchid/system_design_2.png" caption="水質、土壤、水流量感測系統"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/drop_orchid/presentation.jpg" caption="上台報告畫面(本人在中間)"
                    class="col-span-6 md:col-span-3" />
                <CompImgWithCaption img-url="/images/projects/drop_orchid/prototype.jpg" caption="實體原型裝置"
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
import BoxYouTube from '~/components/boxYouTube.vue';
</script>
