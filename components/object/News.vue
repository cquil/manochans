
<script setup lang="ts">

defineProps({
  addClass: String,
  limit: Number,
});

const { data } = await useAsyncData('news', () =>
  $fetch('/api/news')
);

</script>

<template>

  <div :class="['p-news', addClass]">

    <template v-for="item in data?.contents.slice(0, limit ?? data.contents.length)" :key="item.id">
      <NuxtLink
        v-if="item.url"
        :to="item.url"
        class="p-news__item"
        data-aos="custom-up"
        data-aos-duration="600"
        target="_blank"
      >
        <div class="p-news__image"><img :src="item.image.url" /></div>
        <div class="p-news__content">
          <div class="p-news__title">{{ item.title }}</div>
          <div class="p-news__post">{{ dateFormat(item.publishedAt ?? item.createdAt) }}</div>
        </div>
      </NuxtLink>
      <div
        v-else
        class="p-news__item"
        data-aos="custom-up"
        data-aos-duration="600"
      >
        <div class="p-news__image"><img :src="item.image.url" /></div>
        <div class="p-news__content">
          <div class="p-news__title">{{ item.title }}</div>
          <div class="p-news__post">{{ dateFormat(item.publishedAt ?? item.createdAt) }}</div>
        </div>
      </div>
    </template>

  </div>

</template>




