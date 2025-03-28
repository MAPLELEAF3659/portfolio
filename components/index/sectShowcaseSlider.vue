<template>
    <section class="section-showcase-slider">
        <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
        <Flicking :options="{ align: 'center', circular: true, adaptive: true }"
            :plugins="flickingPlugins">
            <div v-for="(item, index) in items" :key="index">
                <div class="panel mx-4 my-8">
                    <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                    <BoxProject :title="item.title" :desc="item.desc" :tags="item.tags" :special="item.special"
                        :img-url="item.imgUrl" :url="item.url" />
                </div>
            </div>
            <template #viewport>
                <div class="flicking-pagination" />
                <span class="flicking-arrow-prev hidden sm:block" />
                <span class="flicking-arrow-next hidden sm:block" />
            </template>
        </Flicking>
    </section>
</template>

<script setup lang="ts">
import { AutoPlay, Pagination, Arrow, Fade } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import BoxProject from "~/components/projects/boxProject.vue";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";

const flickingPlugins = [
    new AutoPlay({ duration: 2500, direction: "NEXT", stopOnHover: false }),
    new Pagination({ type: "bullet" }),
    new Arrow(),
    new Fade()
]

defineProps({
    items: {
        type: Array<ProjectPreviewItem>,
        required: true
    }
})
</script>

<style lang="postcss">
@import url("~/node_modules/@egjs/vue3-flicking/dist/flicking.css");

.panel {
    width: 30vw;
}

@media (max-width:1024px) {
    .panel {
        width: 40vw;
    }
}

@media (max-width:768px) {
    .panel {
        width: 60vw;
    }
}
</style>