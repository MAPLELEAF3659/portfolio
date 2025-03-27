<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="about">
        <SectSubHeader title="聯絡" title-alt="Contact" />
        <div class="container mx-auto py-8 sm:py-16">
            <div class="flex flex-wrap gap-4 justify-center mx-4">
                <BoxContactLink title="GitHub" subtitle="MAPLELEAF3659" url="https://github.com/mapleleaf3659" icon-url="/images/icons/github.png" :ani-delay="0.5"/>
                <BoxContactLink title="Email" subtitle="ig910425@gmail.com" url="mailto:ig910425@gmail.com" icon-url="/images/icons/mail.png" :ani-delay="0.75"/>
                <BoxContactLink title="YouTube" subtitle="MAPLELEAF3659" url="https://www.youtube.com/@MAPLELEAF-iu2nr" icon-url="/images/icons/youtube.png" :ani-delay="1"/>
                <BoxContactLink title="Blog" subtitle="MAPLELEAF3659" url="https://mapleleaf3659.github.io/ml-blog" icon-url="/images/icons/blog.png" :ani-delay="1.25"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectSubHeader from '~/components/sectSubHeader.vue';
import BoxContactLink from '~/components/contact/boxContactLink.vue';

useHead({
    title: "聯絡"
})
</script>