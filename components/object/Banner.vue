
<script setup lang="ts">

import bannerImage from "@/assets/images/img-banner.svg";
const bannerUrl = "https://mano-singing.vercel.app/";


</script>

<template>
  <div class="p-banner" >
    <NuxtLink :to="bannerUrl" class="p-banner__image" target="_blank">
      <img :src="bannerImage" />
    </NuxtLink>
    <p>スクショ画面？と説明テキストと誘導ボタン</p>
  </div>
</template>