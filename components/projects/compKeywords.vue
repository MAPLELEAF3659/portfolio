<template>
    <div class="flex items-center gap-4">
        <p v-show="title" class="text-desc"><i>{{ title }}</i></p>
        <div class="tags flex flex-wrap gap-2 gap-y-4 my-2">
            <div v-for="(item, index) in keywords" :key="index">
                <span
                    class="keyword text-desc bg-slate-300 rounded-2xl px-4 py-1 text-black shadow-md shadow-slate-800">
                    {{ item }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ""
    },
    keywords: {
        type: Array,
        default: new Array
    },
})
</script>