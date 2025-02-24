
<script setup lang="ts">

definePageMeta({
  layout: "base",
});

</script>

<template>
  <div class="l-two-column">
    <div class="l-two-column__container">
      <div class="l-two-column__main">
        <Mainvisual />
      </div>
      <!-- end main -->
      <div class="l-two-column__contents">
        <section class="l-section"><FirstView /></section>
        <section class="l-section"><Lead /></section>
        <section class="l-section is-xlg is-top" id="section01"><Profile /></section>
        <section class="l-section is-xlg is-top" id="section02"><News /></section>
        <section class="l-section is-xlg is-top" id="section03"><CutePoint /></section>
        <section class="l-section is-xlg is-top" id="section04"><Banner /></section>
        <section class="l-section is-xlg is-top" id="section05"><MusicCard /></section>
      </div>
      <!-- end contents -->
    </div>
  </div>
</template>