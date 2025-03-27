<template>
    <nuxt-link :to="url">
        <button class="text-desc rounded-2xl bg-slate-500 hover:bg-slate-800 shadow-xl px-4 py-1">{{ text }}</button>
    </nuxt-link>
</template>
<script setup lang="ts">
defineProps({
    url: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>