<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const swiperFirst = ref(null);
const swiperSecond = ref(null);

const swiperOptions = {
  loop: true,
  speed: 4500,
  effect: "fade",
  autoplay: { delay: 4500, disableOnInteraction: false },
  fadeEffect: { crossFade: true },
};
</script>

<template>
  <div class="p-main-visual">
    
    <div class="p-main-visual__container">

      <div class="p-main-visual__images" data-aos="custom-fade" data-aos-delay="200" data-aos-duration="600">
          <swiper
            ref="swiperFirst"
            v-bind="swiperOptions"
            :modules="[EffectFade, Autoplay]"
          >
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-01.jpg" alt="メイン画像" /></swiper-slide>
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-02.jpg" alt="メイン画像" /></swiper-slide>
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-03.jpg" alt="メイン画像" /></swiper-slide>
          </swiper>
      </div>

      <div class="p-main-visual__images" data-aos="custom-fade" data-aos-delay="600" data-aos-duration="600">
          <swiper
            ref="swiperSecond"
            v-bind="swiperOptions"
            :modules="[EffectFade, Autoplay]"
          >
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-03.jpg" alt="メイン画像" /></swiper-slide>
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-01.jpg" alt="メイン画像" /></swiper-slide>
            <swiper-slide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-02.jpg" alt="メイン画像" /></swiper-slide>
          </swiper>
      </div>

    </div>
    <Floatbanner />
  </div>
</template>