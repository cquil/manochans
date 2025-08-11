
<script setup lang="ts">

definePageMeta({
  layout: "base",
});

</script>

<template>
  <div class="l-one-column">

    <section class="l-section">
      <PageHeader pageTitle="News" />
    </section>

    <section class="l-section">
      <News :limit="10"/>
    </section>

  </div>
</template>