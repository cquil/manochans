



<script setup lang="ts">

defineNuxtComponent({
  ssr: false
});

defineProps({
  addClass: String,
  
});

import type { MicroCMSImage} from 'microcms-js-sdk';

type News = {
  id: string;
  title: string;
  image: MicroCMSImage;
  url: string;
};

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
});

</script>

<template>

  <div :class="['p-news', addClass]">
    <NuxtLink
      v-for="item in data?.contents"
      :key="item.id"
      :to="`${item.url}`"
      class="p-news__item"
      data-aos="custom-up"
      data-aos-duration="600"
      target="_blank">
      <div class="p-news__image"><img :src="item.image.url" /></div>
      <div class="p-news__content">
        <div class="p-news__title">{{ item.title }}</div>
        <div class="p-news__post">{{ dateFormat(item.publishedAt ?? item.createdAt) }}</div>
      </div>
    </NuxtLink>
  </div>

</template>