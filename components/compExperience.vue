<template>
    <div class="experience flex flex-col">
        <div class="date flex items-left">
            <span class="text-desc">{{ dateStart }}</span>
            <span v-show="dateEnd" class="text-desc">-{{ dateEnd }}</span>
        </div>
        <div class="info">
            <h2 class="text-title">{{ title }}</h2>
            <h2 class="text-desc mt-1 mb-2">{{ subtitle }}</h2>
            <ul class="flex flex-col gap-2">
                <li v-for="(item, index) in descArray" :key="index" class="text-desc flex">
                    <span class="mx-2">●</span>
                    <p>{{ item }}</p>
                </li>
            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    dateStart: {
        type: String,
        required: true
    },
    dateEnd: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ""
    },
    descArray: {
        type: Array,
        default: new Array
    }
})
</script>