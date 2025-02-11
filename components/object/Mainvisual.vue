
<script setup lang="ts">
import { onMounted } from "vue";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css"; // Swiperのスタイルをインポート
onMounted(() => {
  register();
});
</script>

<template>
  <div class="p-main-visual">
    <!-- <div class="p-main-visual__scroll-bar"></div> -->
    <div class="p-main-visual__container">
      <div class="p-main-visual__content">
        <h2 class="p-main-visual__title">魔ノむえる<br>非公式ファンサイト</h2>
        <p class="p-main-visual__text">魔ノむえるちゃんに関する情報を発信中</p>
      </div>

      <div class="p-main-visual__images">
        <client-only>
          <swiper-container
            loop="true"
            speed="3000"
            effect="fade"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :fade-effect="{ crossFade: true }"
          >
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-01.jpg" /></swiper-slide>
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-02.jpg" /></swiper-slide>
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-03.jpg" /></swiper-slide>
          </swiper-container>
        </client-only>
      </div>
    </div>
  </div>
</template>