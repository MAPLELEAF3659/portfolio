<template>
    <header class="header fixed h-16 w-full bg-color-header-footer z-10 p-2">
        <div class="container h-full mx-auto flex flex-row justify-between">
            <div class="flex h-full items-center">
                <nuxt-link class="logo" to="/">
                    <h1 class="text-white text-3xl">Jun-Ye Zhou Portfolio</h1>
                </nuxt-link>
            </div>
            <div class="flex h-full items-center">
                <ul class="flex flex-row gap-4">
                    <li>
                        <a class="text-white" href="https://github.com/MAPLELEAF3659">GitHub</a>
                    </li>
                    <li>
                        <a class="text-white" href="https://mapleleaf3659.github.io/ml-blog">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
// const isHamListShow = ref(false)

// function CloseHamList() {
//     isHamListShow.value = false
// }

// function ToggleHamList() {
//     isHamListShow.value = !isHamListShow.value
// }
</script>

<style scoped lang="postcss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>