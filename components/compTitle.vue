<template>
    <div class="title flex items-center gap-2 mt-8">
        <div class="circle w-3 h-3 md:w-6 md:h-6 rounded-full bg-red-300" />
        <div class="text relative">
            <h3 class="absolute text-title text-t whitespace-nowrap">{{ title }}</h3>
            <h3 class="absolute text-title text-bg  whitespace-nowrap">{{ titleBg }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    titleBg: {
        type: String,
        required: true
    },
})
</script>

<style lang="postcss">
.text-t {
    z-index: 1;
    transform: translateY(-50%);
}

.text-bg {
    z-index: 0;
    transform: translateY(-70%);
    opacity: 0.5;
    @apply italic text-5xl md:text-6xl text-transparent bg-clip-text font-normal bg-gradient-to-b from-gray-400 to-gray-700 from-40%;
}
</style>