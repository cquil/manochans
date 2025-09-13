
<script setup lang="ts">

const { data } = await useAsyncData('news', () =>
  $fetch('/api/news')
);

const dateFormat = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

// 現在の日時を取得
const now = new Date();

// 1週間後の日時を計算
const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

// イベントデータをフィルタリング
const eventData = computed(() => {
  if (!data.value?.contents) return [];
  
  return data.value.contents.filter((item: any) => {
    // event_checkがtrueかどうかチェック
    if (!item.event_check) return false;
    
    // event_dateが存在するかチェック
    if (!item.event_date) return false;
    
    // event_dateが現在から1週間以内かチェック
    const eventDate = new Date(item.event_date);
    return eventDate >= now && eventDate <= oneWeekLater;
  });
});

</script>

<template>

<div class="p-news is-home">

    <!-- イベントがある場合 -->
    <template v-if="eventData.length > 0" v-for="item in eventData" :key="item.id">
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
          <div class="p-news__post">{{ dateFormat(item.event_date) }}</div>
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
          <div class="p-news__post">{{ dateFormat(item.event_date) }}</div>
        </div>
      </div>
    </template>

    <!-- イベントがない場合 -->
    <div v-else class="p-news__empty"></div>

  </div>

</template>