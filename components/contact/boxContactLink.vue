<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <a :href="url"
        class="box-contact-link flex flex-col bg-color-link-box hover:bg-color-link-box-hover rounded-2xl p-8 sm:w-56 md:w-64 ani-float-up"
        :style="{ 'animation-delay': aniDelay + 's' }">
        <img class="icon h-16 md:h-32 w-auto mx-auto mb-6" :src="baseUrl + iconUrl.replace('/images', 'images')"
            alt="icon">
        <p class="text-title text-black text-center mb-2">{{ title }}</p>
        <p class="text-desc text-black text-center block md:hidden">
            <span v-if="subtitle.length > 13" class="text-desc text-black text-center">{{ subtitle.substring(0, 11)
                }}...</span>
            <span v-else class="text-desc text-black text-center">{{ subtitle }}</span>
        </p>
        <p class="text-desc text-black text-center hidden md:block">{{ subtitle }}</p>
    </a>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;
defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    iconUrl: {
        type: String,
        default: ""
    },
    aniDelay: {
        type: Number,
        default: 1
    }
})
</script>