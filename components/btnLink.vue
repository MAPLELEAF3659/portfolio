<template>
    <nuxt-link :to="url">
        <button
            class="text-desc text-w rounded-2xl btn-link-color hover:btn-link-color-hover shadow-xl px-4 py-2">{{
            text }}</button>
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