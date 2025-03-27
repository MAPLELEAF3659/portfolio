<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="about">
        <SectSubHeader title="關於" title-alt="ABOUT" />
        <div class="container mx-auto py-8 sm:py-12">
            <div class="grid grid-cols-6 gap-4 items-center mx-4 lg:mx-32 xl:mx-48">
                <div class="col-span-6 md:col-span-3 flex flex-col gap-4">
                    <CompTitle title="自我介紹" title-bg="INTRODUCTION" />
                    <CompDesc class="ml-8"
                        desc="我是周駿曄，目前就讀臺大工程科學與海洋工程所，於系統設計實驗室進行 Wi-Fi AP 機器學習加速研究，專注於嵌入式系統、AI 與多媒體網路等領域。" />
                </div>
                <CompImgWithCaption class="col-span-6 md:col-span-3" img-url="/images/about/conference.png"
                    caption="我在國際研討會發表論文" />

                <CompImgWithCaption class="hidden md:flex col-span-6 md:col-span-3"
                    img-url="/images/about/projects.png" caption="本人參與之各項專題製作" />
                <div class="col-span-6 md:col-span-3 flex flex-col gap-4">
                    <CompTitle title="學理與實務兼具" title-bg="PROJECTS" />
                    <CompDesc class="ml-8"
                        desc="我熱衷於探索跨領域整合的可能性，並透過專案實作不斷提升自身技術能力。在兼顧學業成績（北科 GPA 3.97/4.0，臺大 GPA 4.24/4.3）的同時，我積極參與 MCU、SBC、IoT 感測裝置、網路通訊、AI等專題，提升軟韌體實作量能，也培養團隊合作和問題解決的能力。" />
                </div>
                <CompImgWithCaption class="flex md:hidden col-span-6 md:col-span-3"
                    img-url="/images/about/projects.png" caption="本人參與之各項專題製作" />

                <div class="col-span-6 md:col-span-3 flex flex-col gap-4">
                    <CompTitle title="求新求變" title-bg="EXPERIENCES" />
                    <CompDesc class="ml-8" desc="「我以求新進取的態度迎接每一個學習機會。」" />
                    <CompDesc class="ml-8"
                        desc="在志合訊息擔任Diffusion Model研究助理，以及球據智能的Vue.js前端工程實習崗位的工作經歷中，強化了我的數據分析、研究和軟體開發實力。" />
                    <CompDesc class="ml-8"
                        desc="而從 IEEE 與 IET等國際研討會的AI相關論文發表中，提升了我的寫作、演講與專案執行能力。另外，我也積極參與各項競賽，發揮跨域整合及團隊合作思維，並充分展現領導力、創新系統設計來解決實際問題。例如在2024 年獲「放視大賞」跨域銀賞及「金點新秀」和碩贊助特別獎，以及在2023年獲「技職盃黑客松」北區佳作並入圍全國決賽。" />
                </div>
                <CompImgWithCaption class="col-span-6 md:col-span-3" img-url="/images/about/career_and_contest.png"
                    caption="我在實習、競賽中取得成果" />

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectSubHeader from '~/components/sectSubHeader.vue';
import CompTitle from '~/components/compTitle.vue';
import CompDesc from '~/components/compDesc.vue';
import CompImgWithCaption from '~/components/compImgWithCaption.vue';
</script>