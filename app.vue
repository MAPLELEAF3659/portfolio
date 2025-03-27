<template>
  <div class="app bg-color-page">
    <Header />
    <NuxtPage class="pt-14 pb-12 bg-color-page min-h-svh" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/barHeader.vue"
import Footer from './components/barFooter.vue';

useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `Jun-Ye Zhou Portfolio | ${pageTitle}`
      : 'Jun-Ye Zhou Portfolio'
  }
})
</script>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-25vh);
}
</style>
