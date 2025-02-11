
<script setup lang="ts">
</script>

<template>

  <div class="l-two-column">
    <div class="l-two-column__aside">
      <Header />
    </div>

    <div class="l-two-column__main">
      <main class="l-main">
        <slot />
      </main>
      <Footer />
    </div>

  </div>
</template>