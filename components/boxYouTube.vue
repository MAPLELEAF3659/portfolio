<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/html-self-closing -->
<template>
    <div class="box-youtube flex flex-col gap-4">
        <div class="h-72 w-full px-4">
            <iframe width="100%" height="100%" :src="url"
                title="2-axis Gimbal Stabilizer using RPi 4B+MPU6050+SG90 | MAPLLEAF3659" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div v-show="caption" class="bg-color-img-caption border-black border rounded-2xl px-4 py-2 mx-auto">
            <span class="text-caption">{{ caption }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    url: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        default: ""
    }
})
</script>