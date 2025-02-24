
<script setup lang="ts">
defineProps<{
  marginClass?: string;
  text: string;
  addClass?: string;
}>();
</script>

<template>
  <div class="c-heading-wrapper" :class="marginClass">
    <h2 class="c-heading" :class="addClass">{{ text }}</h2>
  </div>
</template>