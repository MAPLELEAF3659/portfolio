<template>
    <header class="header fixed h-16 w-full bg-color-header-footer z-50 p-2">
        <div class="container h-full mx-auto flex justify-between md:grid grid-cols-2 lg:grid-cols-3">
            <div class="col-span-1 flex h-full items-center ml-2 xl:ml-0">
                <nuxt-link class="logo" to="/">
                    <h1 class="text-title">Jun-Ye Zhou Portfolio</h1>
                </nuxt-link>
            </div>
            <div class="col-span-1 hidden md:flex h-full w-full items-center justify-end lg:justify-center">
                <ul class="flex flex-row gap-4 items-center">
                    <li>
                        <nuxt-link to="/projects" class="text-link">專案</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about" class="text-link">關於</nuxt-link>
                    </li>
                    <li class="flex lg:hidden items-center">
                        <button class="h-10 w-10" @click="ToggleHamList">
                            <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="white">
                                <transition>
                                    <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                                    <path v-show="!isHamListShow" strokeLinecap="round" strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </transition>
                                <transition>
                                    <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                                    <path v-show="isHamListShow" strokeLinecap="round" strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12" />
                                </transition>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div class="col-span-1 hidden lg:flex h-full items-center justify-end mr-2 xl:mr-0">
                <ul class="flex flex-row gap-4 items-center">
                    <li>
                        <a class="text-link" href="https://github.com/MAPLELEAF3659">GitHub</a>
                    </li>
                    <li>
                        <a class="text-link" href="https://mapleleaf3659.github.io/ml-blog">Blog</a>
                    </li>
                    <li>
                        <BtnLinkHeader text="聯絡" url="/contact"/>
                    </li>
                </ul>
            </div>
            <button class="block md:hidden h-10 w-10 self-center" @click="ToggleHamList">
                <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="white">
                    <transition>
                        <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                        <path v-show="!isHamListShow" strokeLinecap="round" strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </transition>
                    <transition>
                        <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                        <path v-show="isHamListShow" strokeLinecap="round" strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12" />
                    </transition>
                </svg>
            </button>
        </div>
        <transition>
            <div v-show="isHamListShow" class="hamlist lg:hidden h-full w-full mt-2 -ml-2">
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <div class="bg fixed h-screen w-screen z-40 bg-black bg-opacity-75" @touchstart="CloseHamList"></div>
                <div class="main fixed w-full pt-6 pb-4 z-50 bg-slate-900">
                    <ul class="flex flex-col gap-4 mb-4 text-center items-center">
                        <li>
                            <nuxt-link to="/projects" class="text-link" @click="CloseHamList">專案</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about" class="text-link" @click="CloseHamList">關於</nuxt-link>
                        </li>
                        <li @click="CloseHamList">
                            <a class="text-link" href="https://github.com/MAPLELEAF3659">GitHub</a>
                        </li>
                        <li @click="CloseHamList">
                            <a class="text-link" href="https://mapleleaf3659.github.io/ml-blog">Blog</a>
                        </li>
                        <li @click="CloseHamList">
                            <BtnLinkHeader text="聯絡" url="/contact"/>
                        </li>
                    </ul>
                </div>
            </div>

        </transition>
    </header>
</template>

<script setup lang="ts">
import BtnLinkHeader from '~/components/btnLinkHeader.vue'
const isHamListShow = ref(false)

function CloseHamList() {
    isHamListShow.value = false
}

function ToggleHamList() {
    isHamListShow.value = !isHamListShow.value
}
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