
<script setup lang="ts">

defineProps({
  pageTitle: String,
});
</script>

<template>
<div class="l-page-header">
  <div class="l-page-header__container">
    <h2 class="l-page-header__title">{{ pageTitle }}</h2>
  </div>
</div>
</template>