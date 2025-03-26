<template>
    <p class="text-desc whitespace-pre-line">{{ desc }}</p>
</template>

<script setup lang="ts">
defineProps({
    desc: {
        type: String,
        required: true
    },
})
</script>