<template>
    <section class="main py-8 sm:py-16 bg-[url(/public/images/index_bg.png)]">
        <h1 class="text-main-sm text-center">{{ title }}</h1>
        <h2 class="text-main-sub text-with-space-sm mt-2">{{ titleAlt }}</h2>
    </section>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ""
    },
    titleAlt: {
        type: String,
        default: ""
    }
})
</script>