<template>
    <section class="main px-4 md:px-16 xl:px-48 py-8 sm:py-16 bg-[url(/public/images/index_bg.png)] bg-cover">
        <h1 class="text-main-sm text-center ani-float-up">{{ title }}</h1>
        <h2 class="text-main-sub text-with-space-sm mt-4 whitespace-pre-line ani-float-up">{{ titleAlt }}</h2>
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