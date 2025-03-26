<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="project-detail">
        <SectSubHeader title="Empowering Interactive Fitness Game" title-alt="賦能式互動健身遊戲" />
        <div class="container mx-auto py-8 sm:py-16">
            <div class="grid grid-cols-2 gap-4 items-center">
                <CompDesc desc="2023 IEEE International Conference on Consumer Electronics-Taiwan(ICCE-Taiwan)"
                    class="col-span-2 mx-auto" />
                <CompKeywords title="Keywords"
                    :keywords="['Artificial Intelligence', 'Fitness Game', 'Player Participation', 'Exergame']"
                    class="col-span-2 mx-auto" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectSubHeader from '~/components/sectSubHeader.vue'
import CompDesc from '~/components/compDesc.vue';
import CompKeywords from '~/components/projects/compKeywords.vue';
</script>
