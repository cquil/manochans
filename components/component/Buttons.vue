
<script setup lang="ts">
defineProps<{
  marginClass?: string;
  toLink: string;
  text: string;
  addClass?: string;
}>();
</script>

<template>
  <div class="c-button-wrapper" :class="marginClass">
    <NuxtLink :to="toLink" class="c-button" :class="addClass">{{ text }}</NuxtLink>
  </div>
</template>