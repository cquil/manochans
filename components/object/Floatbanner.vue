

<script setup lang="ts">

const { data } = await useAsyncData('banner', () =>
  $fetch('/api/banner')
);
</script>

<template>
  <div class="p-float-banner" v-if="data.hook==true">
    <a class="p-float-banner__item" :href="data.url" target="_blank">
      <img :src="data.image.url" />
    </a>
  </div>
</template>