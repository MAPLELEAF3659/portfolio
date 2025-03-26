<template>
    <div class="box-project bg-slate-600 rounded-2xl p-8 shadow-lg shadow-slate-800">
        <nuxt-link class="flex flex-col gap-2" :to="url">
            <div class="img-container md:h-48 lg:h-64 flex flex-col items-center justify-center">
                <img :src="baseUrl + imgUrl.replace('/images', 'images')" :alt="'preview image'">
            </div>
            <h1 class="text-title">{{ title }}</h1>
            <p class="text-desc">{{ desc }}</p>
            <div v-show="tags.length > 0" class="tags flex flex-wrap gap-2 gap-y-4 my-2">
                <div v-for="(item, index) in tags" :key="index">
                    <span
                        class="tag text-desc bg-slate-300 rounded-2xl px-4 py-1 text-black shadow-md shadow-slate-800">
                        {{ item }}
                    </span>
                </div>
            </div>
            <p v-show="special" class="text-desc italic whitespace-pre-wrap">{{ special }}</p>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
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
    tags: {
        type: Array,
        default: new Array
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