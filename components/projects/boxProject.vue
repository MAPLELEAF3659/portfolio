<template>
    <div class="box-project bg-slate-600 rounded-2xl p-8 shadow-lg shadow-slate-800">
        <nuxt-link :to="url" draggable="false" class="flex flex-col gap-2">
            <div class="img-container h-32 md:h-48 lg:h-64 flex flex-col items-center justify-center">
                <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                <img class="w-full overflow-hidden" :src="baseUrl + imgUrl.replace('/images', 'images')"
                    :alt="'preview image'" draggable="false">
            </div>
            <h1 class="text-title hover:underline line-clamp-2 md:line-clamp-none">{{ title }}</h1>
            <p class="text-desc line-clamp-3 md:line-clamp-none">{{ desc }}</p>
            <CompKeywords v-show="tags ? tags.length > 0 : false" :keywords="tags" />
            <p v-show="special" class="text-desc italic whitespace-pre-wrap">{{ special }}</p>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import CompKeywords from './compKeywords.vue';

const config = useRuntimeConfig();
const baseUrl = config.app.baseURL;
defineProps({
    title: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        default: ""
    },
    special: {
        type: String,
        default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    tags: {
        type: Array
    },
    imgUrl: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    }
})
</script>
