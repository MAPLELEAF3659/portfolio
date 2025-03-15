<template>
    <footer class="footer p-2 w-full bg-color-header-footer sm:fixed bottom-0 z-10">
        <div class="container flex flex-col mx-auto sm:flex-row items-center justify-center my-2 gap-4">
            <nuxt-link to="/">
                <span class="text-white text-base">2020-{{ currentYear }} &copy; MAPLELEAF3659</span>
            </nuxt-link>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>