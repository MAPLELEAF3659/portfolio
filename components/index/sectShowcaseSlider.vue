<template>
    <section class="section-showcase-slider">
        <Flicking :options="{ align: 'center', circular: true, adaptive: true }">
            <div v-for="(item, index) in items" :key="index" class="box-project w-64">
                <BoxProject
:title="item.title" :desc="item.desc" :special="item.special" :tags="item.tags"
                    :img-url="item.imgUrl" :url="item.url" />
            </div>
        </Flicking>
    </section>
</template>

<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import BoxProject from "~/components/projects/boxProject.vue";

defineProps({
    items: {
        type: Array<ProjectPreviewItem>,
        required: true
    }
})
</script>

<style lang="postcss">
@import url("~/node_modules/@egjs/vue3-flicking/dist/flicking.css");
</style>