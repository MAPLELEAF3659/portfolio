<template>
    <p class="text-desc">{{ desc }}</p>
</template>

<script setup lang="ts">
defineProps({
    desc: {
        type: String,
        required: true
    },
})
</script>