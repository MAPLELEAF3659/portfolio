<template>
    <div class="flex flex-col gap-4">
        <img class="p-4" :src="baseUrl + imgUrl.replace('/images', 'images')" alt="image">
        <div v-show="caption" class="bg-color-img-caption border-black border rounded-2xl px-4 py-2 mx-auto text-center">
            <span class="text-caption">{{ caption }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;
defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        default: ""
    }
})
</script>