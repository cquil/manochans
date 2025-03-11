
<script setup lang="ts">

definePageMeta({
  layout: "base",
});



</script>

<template>
  <div class="l-one-column">

    <section class="l-section">
      <PageHeader pageTitle="collaboration" />
    </section>

    <section class="l-section">
      <div class="l-container">
        <News :addClass="'is-archive'"/>
      </div>
    </section>

  </div>
</template>