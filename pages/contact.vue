<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="about">
        <SectSubHeader title="聯絡" title-alt="Contact" />
        <div class="container mx-auto py-8 sm:py-16">
            <div class="flex flex-wrap gap-4 justify-center mx-4">
                <BoxContactLink  title="GitHub" subtitle="MAPLELEAF3659" url="https://github.com/mapleleaf3659" icon-url="/images/icons/github.png"/>
                <BoxContactLink  title="Email" subtitle="ig910425@gmail.com" url="mailto:ig910425@gmail.com" icon-url="/images/icons/mail.png"/>
                <BoxContactLink  title="YouTube" subtitle="MAPLELEAF3659" url="https://www.youtube.com/@MAPLELEAF-iu2nr" icon-url="/images/icons/youtube.png"/>
                <BoxContactLink  title="Blog" subtitle="MAPLELEAF3659" url="https://mapleleaf3659.github.io/ml-blog" icon-url="/images/icons/blog.png"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectSubHeader from '~/components/sectSubHeader.vue';
import BoxContactLink from '~/components/boxContactLink.vue';

useHead({
    title: "聯絡"
})
</script>