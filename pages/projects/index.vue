<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="projects">
        <SectSubHeader title="專案" title-alt="Projects" />
        <section class="showcases container mx-auto py-8 sm:py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-8">
                <CompTitle class="col-span-1 md:col-span-2 xl:col-span-3 mt-12 mb-6" title="精選" title-bg="FEATURED" />
                <div v-for="(item, index) in projectItemsFeatured" :key="index" class="project-boxes">
                    <BoxProject class="col-span-1" :title="item.title" :desc="item.desc" :special="item.special"
                        :tags="item.tags" :img-url="item.imgUrl" :url="item.url" :ani-delay="index * 0.1" />
                </div>
                <CompTitle class="col-span-1 md:col-span-2 xl:col-span-3 mt-12 mb-6" title="其他" title-bg="OTHER" />
                <div v-for="(item, index) in projectItemsOther" :key="index" class="project-boxes">
                    <BoxProject class="col-span-1" :title="item.title" :desc="item.desc" :special="item.special"
                        :tags="item.tags" :img-url="item.imgUrl" :url="item.url" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import BoxProject from '~/components/projects/boxProject.vue'
import CompTitle from "~/components/compTitle.vue"
import SectSubHeader from '~/components/sectSubHeader.vue'
import { projectItemsFeatured, projectItemsOther } from "~/types/constants";

useHead({
    title: "專案"
})
</script>