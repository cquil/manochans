
<script setup lang="ts">

defineNuxtComponent({
  ssr: false
});

defineProps({
  addClass: String,
});

import type { MicroCMSImage} from 'microcms-js-sdk';

type Collabo = {
  id: string;
  title: string;
  thumbnails: MicroCMSImage;
  url: string;
};

const { data } = await useMicroCMSGetList<Collabo>({
  endpoint: "collab",
});
</script>

<template>
  <div :class="['p-music-card', addClass]">
    <NuxtLink
      v-for="item in data?.contents"
      :key="item.id"
      :to="`${item.url}`"
      class="p-music-card__item"
      data-aos="custom-up"
      data-aos-duration="600"
      target="_blank">
      <div class="p-music-card__image">
        <img :src="'https://img.youtube.com/vi/' + item.thumbnails + '/maxresdefault.jpg'" />
      </div>
      <div class="p-music-card__content">
        <div class="p-music-card__title">{{ item.title }}</div>
      </div>
    </NuxtLink>
  </div>
</template>