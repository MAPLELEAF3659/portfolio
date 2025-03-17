<template>
    <header class="header fixed h-16 w-full bg-color-header-footer z-10 p-2">
        <div class="container h-full mx-auto flex md:grid grid-cols-2 lg:grid-cols-3">
            <div class="col-span-1 flex h-full items-center">
                <nuxt-link class="logo" to="/">
                    <h1 class="text-title">Jun-Ye Zhou Portfolio</h1>
                </nuxt-link>
            </div>
            <div class="col-span-1 hidden md:flex h-full w-full items-center justify-end lg:justify-center">
                <ul class="flex flex-row gap-4">
                    <li>
                        <nuxt-link to="/projects" class="text-desc">專案</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about" class="text-desc">關於</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-span-1 hidden lg:flex h-full items-center justify-end">
                <ul class="flex flex-row gap-4">
                    <li>
                        <a class="text-desc" href="https://github.com/MAPLELEAF3659">GitHub</a>
                    </li>
                    <li>
                        <a class="text-desc" href="https://mapleleaf3659.github.io/ml-blog">Blog</a>
                    </li>
                    <li>
                        <nuxt-link to="/contact" class="text-desc rounded-2xl bg-slate-500 px-4 py-1">聯絡</nuxt-link>
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