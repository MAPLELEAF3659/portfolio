<template>
    <div class="keywords flex flex-wrap gap-2 gap-y-4 my-2 " :class="{ 'justify-center': centered }">
        <div v-for="(item, index) in keywords" :key="index">
            <span class="keyword text-desc bg-slate-300 rounded-2xl px-4 py-1 text-black shadow-md shadow-slate-800">
                {{ item }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    // eslint-disable-next-line vue/require-default-prop
    keywords: {
        type: Array,
    },
    centered: {
        type: Boolean,
        default: false
    }
})
</script>