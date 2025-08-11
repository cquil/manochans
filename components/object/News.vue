
<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    addClass?: string;
    limit?: number;
  }>(),
  {
    addClass: '',
    limit: 10,
  }
);

// トップページかどうかを判定
const isHome = computed(() => props.addClass?.includes('is-home'));

// ページネーション用の状態管理（トップページでは無効）
const currentPage = ref(1);
const itemsPerPage = ref<number>(isHome.value ? 2 : props.limit);

// 現在のページのデータを取得
const { data: currentPageData, refresh: refreshCurrentPage } = await useAsyncData(
  'news-current',
  () => $fetch('/api/news', {
    query: {
      limit: itemsPerPage.value,
      offset: isHome.value ? 0 : (currentPage.value - 1) * itemsPerPage.value,
    }
  })
);

// 全件数を取得（ページネーション計算用、トップページでは不要）
const { data: totalData } = await useAsyncData('news-total', () =>
  isHome.value ? Promise.resolve({ totalCount: 0 }) : $fetch('/api/news', {
    query: {
      limit: 1,
      offset: 0,
    }
  })
);

// ページネーション計算（トップページでは常に1ページ）
const totalPages = computed(() => {
  if (isHome.value) return 1;
  if (!totalData.value?.totalCount) return 0;
  return Math.ceil(totalData.value.totalCount / itemsPerPage.value);
});

// ページ変更関数（トップページでは無効）
const changePage = async (page: number) => {
  if (isHome.value) return;
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    await refreshCurrentPage();
    
    // ページの上部にスクロール
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// 日付フォーマット関数
const dateFormat = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

</script>

<template>

  <div :class="['p-news', addClass]">

    <template v-for="item in currentPageData?.contents || []" :key="item.id">
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

  <!-- ページネーションUI（トップページでは非表示） -->
  <div v-if="!isHome && totalPages > 1" class="p-news__pagination">
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="p-news__pagination-btn"
    >
      前へ
    </button>
    <span class="p-news__pagination-info">
      {{ currentPage }} / {{ totalPages }}
    </span>
    <button 
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="p-news__pagination-btn"
    >
      次へ
    </button>
  </div>

</template>




