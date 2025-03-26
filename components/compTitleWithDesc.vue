<template>
    <div class="flex flex-col gap-4">
        <CompTitle :title="title" :title-bg="titleBg"/>
        <CompDesc :desc="desc" class="ml-8"/>
    </div>
</template>

<script setup lang="ts">
import CompTitle from './compTitle.vue';
import CompDesc from './compDesc.vue';
defineProps({
    title: {
        type: String,
        default: ""
    },
    titleBg: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        default: ""
    },
})
</script>