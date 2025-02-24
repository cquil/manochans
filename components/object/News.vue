
<script setup lang="ts">

</script>

<template>
  <Headings text="最新情報" marginClass="is-xxs-bottom" addClass="is-lg" />

  <div class="p-news">
    <NuxtLink to="/" class="p-news__item">
      <div class="p-news__image"><img src="@/assets/images/img-main-visual-01.jpg" /></div>
      <div class="p-news__content">
        <div class="p-news__title">これはお知らせテキストですこれはお知らせテキストですこれはお知らせテキストです</div>
        <div class="p-news__post">2000.01.01</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/" class="p-news__item">
      <div class="p-news__image"><img src="@/assets/images/img-main-visual-01.jpg" /></div>
      <div class="p-news__content">
        <div class="p-news__title">これはお知らせテキストですこれはお知らせテキストですこれはお知らせテキストです</div>
        <div class="p-news__post">2000.01.01</div>
      </div>
    </NuxtLink>
  </div>

  <Buttons text="最新情報一覧へ" marginClass="is-xxs-top is-right" addClass="" />
</template>