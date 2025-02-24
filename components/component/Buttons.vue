
<script setup lang="ts">
defineProps<{
  marginClass?: string;
  text: string;
  addClass?: string;
}>();
</script>

<template>
  <div class="c-button-wrapper" :class="marginClass">
    <NuxtLink class="c-button" :class="addClass">{{ text }}</NuxtLink>
  </div>
</template>