<template>
    <div class="flex flex-col gap-4">
        <img :src="imgUrl" alt="image">
        <div class="bg-color-img-caption border-black border rounded-2xl px-4 py-2 mx-auto">
            <span class="text-caption">{{ caption }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
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