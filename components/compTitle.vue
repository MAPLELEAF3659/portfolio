<template>
    <div class="title flex items-center gap-2">
        <div class="circle w-6 h-6 rounded-full bg-red-300" />
        <div class="text relative w-full">
            <h3 class="absolute text-title text-t">{{ title }}</h3>
            <h3 class="absolute text-title text-bg">{{ titleBg }}</h3>
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
    @apply italic text-6xl text-transparent bg-clip-text font-normal bg-gradient-to-b from-gray-400 to-gray-700 from-40%;
}
</style>