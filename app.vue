<template>
  <div class="app">
    <Header />
    <NuxtPage class="pt-14 pb-12 bg-color-page" />
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
