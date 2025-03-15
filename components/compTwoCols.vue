<template>
    <div class="education grid grid-cols-1 lg:grid-cols-6">
        <div class="col-span-1 flex flex-row lg:flex-col xl:flex-row items-left  xl:items-center">
            <span class="text-desc">{{ dateStart }}</span>
            <span v-show="dateEnd" class="text-desc">-{{ dateEnd }}</span>
        </div>
        <div class="col-span-5">
            <h2 class="text-title">{{ title }}</h2>
            <h2 class="text-desc mt-1 mb-2">{{ subtitle }}</h2>
            <ul class="flex flex-col gap-2">
                <li v-for="(item, index) in descArray" :key="index">
                    <p class="text-desc">
                        <span class="mx-2">●</span>
                        <span>{{ item }}</span>
                    </p>
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