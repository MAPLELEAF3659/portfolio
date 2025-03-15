<template>
    <div class="page-index w-full h-full  bg-[url(/public/images/index_bg.png)]">
        <section class="main py-32">
            <div class="top gap-2 mb-32">
                <h2 class="text-main-sub text-with-space-sm">JUN-YE ZHOU</h2>
                <h1 class="text-main text-with-space">周駿曄</h1>
                <h2 class="text-main-sub text-with-space-sm mt-4">2020 - {{ currentYear }}</h2>
            </div>
            <div class="bottom flex flex-col items-center gap-2 mb-16">
                <h2 class="text-main-sub text-with-space font-semibold italic">PORTFOLIO</h2>
                <div class="divider border-2 border-white w-20" />
                <p class="text-desc text-white text-center">An Interdisciplinary Information Engineer with Creative
                    Design Thinking in AI.</p>
            </div>
            <div class="arrow flex flex-col items-center ">
                <span class="arrow-down text-main-sub">↓</span>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear();

useHead({
    title: "主頁"
})
</script>

<style lang="postcss">

.arrow-down {
    animation: MoveDown 2s ease-in-out infinite;
}

@keyframes MoveDown {
    0%{
        opacity: 0;
        transform: translateY(0%);
    }
    
    25%{
        opacity: 1;
    }

    70% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateY(75%);
    }
}
</style>