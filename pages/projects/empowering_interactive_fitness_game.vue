<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="Empowering Interactive Fitness Game" title-alt="賦能式互動健身遊戲" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-2 gap-4 items-center mx-4 lg:mx-32 xl:mx-64">
                <CompDesc desc="2023 IEEE International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)"
                    class="col-span-2 mx-auto text-center" />
                <CompKeywords :keywords="['Artificial Intelligence', 'Fitness Game', 'Player Participation', 'Exergame']"
                    class="col-span-2 mx-auto" />
                <BoxLink caption="IEEE Xplore Proceeding" url="https://ieeexplore.ieee.org/document/10227046" class="col-span-2"/>
                <CompTitleWithDesc title="摘要" title-bg="ABSTRACT"
                    desc="此研究目的是降低現代電子健身遊戲中常見的重複性動作所帶來的無趣，並提升玩家的參與度。我們的研究提出了一種賦能式人工智慧(Empowering AI)，能夠透過體感裝置收集玩家在健身活動期間的數據，以此來增強遊戲中AI 的能力，使健身遊戲更多元化和具有挑戰性。同時，我們使用 GPT-3 來根據玩家需求生成適合的對手，提供健身活動的預評估。研究結果( 內在感知量表IMI、t-test) 顯示所提出之賦能式互動健身遊戲的玩家參與度有16% 顯著提升效果。"
                    class="col-span-2 md:col-span-1" />
                <CompImgWithCaption img-url="/images/projects/empowering_interactive_fitness_game/preview.png"
                    caption="互動系統示意圖" class="col-span-2 md:col-span-1" />
                <CompImgWithCaption img-url="/images/projects/empowering_interactive_fitness_game/hardware.png"
                    caption="硬體裝置示意圖" class="col-span-2 md:col-span-1" />
                <CompImgWithCaption img-url="/images/projects/empowering_interactive_fitness_game/oral_presentation.png"
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
