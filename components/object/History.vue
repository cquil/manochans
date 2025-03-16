
<script setup lang="ts">


import type { MicroCMSImage} from 'microcms-js-sdk';

type Timeline = {
  id: string;
  url: string;
  day: string;
  title: string;
  text: string;
  viewThumbsnail: "画像" | "iframe";
  imageThumbsnail: MicroCMSImage;
  iframeThumbsnail: string;
};

const { data } = await useMicroCMSGetList<Timeline>({
  endpoint: "timeline",
  queries: {
    limit: 100,
    orders: "publishedAt"
  }
});
</script>

<template>
  <div class="p-timeline">
    <div
      v-for="item in data?.contents"
      :key="item.id"
      class="p-timeline__item"
      data-aos="custom-up"
      data-aos-duration="600">
      <div class="p-timeline__item-inner">

        <div class="p-timeline__item-year">{{ dateFormat(item.day) }}</div>
        <div class="p-timeline__item-content">
          <div class="p-timeline__item-title">{{ item.title }}</div>
          <div class="p-timeline__item-text">{{ item.text }}</div>
          <div class="p-timeline__item-movie">
            <NuxtLink :to="item.url" class="p-timeline__item-link">
              <template v-if="item.viewThumbsnail === '画像'">
                <img :src="item.imageThumbsnail.url">
              </template>
              <template v-else>
                <img :src="'https://img.youtube.com/vi/' + item.iframeThumbsnail + '/maxresdefault.jpg'" />
              </template>
            </NuxtLink>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</template>