<template>
    <div class="box-link bg-color-link-box border-black border rounded-2xl px-4 py-2 mx-auto flex flex-col">
        <span class="text-caption">{{ caption }}</span>
        <a :href="url" class="text-caption underline">{{ url }}</a>
    </div>
</template>
<script setup lang="ts">
defineProps({
    caption: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    }
})
</script>