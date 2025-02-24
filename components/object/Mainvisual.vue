
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
const swiperFirst = ref();
const swiperSecond = ref();

onMounted(() => {
  if (swiperFirst.value && swiperSecond.value) {
    swiperFirst.value.controller.control = swiperSecond.value;
    swiperSecond.value.controller.control = swiperFirst.value;
  }
});
</script>

<template>
  <div class="p-main-visual">
    <div class="p-main-visual__container">

      <div class="p-main-visual__images">
          <Swiper ref="swiperFirst"
            :loop="true"
            :speed="3000"
            effect="fade"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :fade-effect="{ crossFade: true }"
            :controller="{ control: swiperSecond }"
          >
            <SwiperSlide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-01.jpg" /></SwiperSlide>
            <SwiperSlide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-02.jpg" /></SwiperSlide>
            <SwiperSlide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-03.jpg" /></SwiperSlide>
          </Swiper>
      </div>

      <div class="p-main-visual__images">
          <Swiper ref="swiperSecond"
            :loop="true"
            :speed="3000"
            effect="fade"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :fade-effect="{ crossFade: true }"
            :controller="{ control: swiperFirst }"
          >
            <SwiperSlide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-02.jpg" /></SwiperSlide>
            <SwiperSlide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-03.jpg" /></SwiperSlide>
            <SwiperSlide class="p-main-visual__image"><img src="@/assets/images/img-main-visual-01.jpg" /></SwiperSlide>
          </Swiper>
      </div>

    </div>
  </div>
</template>