<template>
    <div class="box-project bg-slate-600 rounded-2xl p-8 shadow-lg shadow-slate-800">
        <nuxt-link class="flex flex-col gap-2" :to="url">
            <div class="img-container md:h-48 lg:h-64 flex flex-col items-center justify-center">
                <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                <img class="w-full overflow-hidden" :src="baseUrl + imgUrl.replace('/images', 'images')"
                    :alt="'preview image'">
            </div>
            <h1 class="text-title">{{ title }}</h1>
            <p class="text-desc">{{ desc }}</p>
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