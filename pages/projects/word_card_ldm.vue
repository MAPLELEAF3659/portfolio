<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="Word Card Generation for Language Education using Latent Diffusion Model"
            title-alt="基於潛在擴散模型之應用於語言教育的單字卡牌生成" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-2 gap-4 items-center mx-4 lg:mx-32 xl:mx-64">
                <CompDesc
                    desc="2023 IET International Conference on Engineering Technologies and Applications (IET-ICETA)"
                    class="col-span-2 mx-auto text-center" />
                <CompKeywords
                    :keywords="['Diffusion Model', 'Image Generation', 'Word Card', 'Language Education', 'Vocabulary Acquisition']" centered
                    class="col-span-2 mx-auto" />
                <BoxLink caption="IEEE Xplore Proceeding" url="https://ieeexplore.ieee.org/document/10461215"
                    class="col-span-2" />
                <CompTitleWithDesc title="摘要" title-bg="ABSTRACT"
                    desc="這篇論文提出了一個在語言教育中利用潛在擴散模型(LDM)生成單字卡的創新系統。該系統應對了處理版權合規性、語義相關性和防止不適當內容生成的挑戰。通過整合CC0數據集、GPT-4提示生成和安全潛在擴散(SLD)機制，我們的系統可更安全地生成圖像，並在版權法規下產生具有上下文相關性的單字卡。實驗評估(FID、I2P)表明該系統成功地生成了可供語言教育使用的單字卡，同時有效地減輕了不適當內容的風險。"
                    class="col-span-2" />
                <CompImgWithCaption img-url="/images/projects/word_card_ldm/architecture.png"
                    caption="系統架構圖" class="col-span-2 md:col-span-1" />
                <CompImgWithCaption img-url="/images/projects/word_card_ldm/preview.png"
                    caption="本系統生成之卡牌範例" class="col-span-2 md:col-span-1" />
                <CompImgWithCaption img-url="/images/projects/word_card_ldm/oral_presentation.png"
                    caption="現場英文報告" class="col-span-2 md:col-span-1" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectSubHeader from '~/components/sectSubHeader.vue'
import CompDesc from '~/components/compDesc.vue';
import CompKeywords from '~/components/projects/compKeywords.vue';
import CompTitleWithDesc from '~/components/compTitleWithDesc.vue';
import CompImgWithCaption from '~/components/compImgWithCaption.vue';
import BoxLink from '~/components/boxLink.vue';
</script>
