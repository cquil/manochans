
<script setup lang="ts">
  import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <Header />
  <main class="l-main">
    <slot />
  </main>
  <Footer />
  <SpeedInsights />
</template>

<style></style>