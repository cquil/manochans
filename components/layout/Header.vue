
<script setup lang="ts">
function anchorTo(event: Event) {
  event.preventDefault();

  const target = event.currentTarget as HTMLAnchorElement;
  const targetId = target.getAttribute("href")?.substring(1);

  if (targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}
</script>

<template>
<header class="l-header">
  <div class="l-header__container">
    <h1 class="l-header__logo">
      <NuxtLink to="/">
        <NuxtImg src="images/logo.png" alt="logo" width="150" format="webp"/>
      </NuxtLink>
    </h1>
    <nav class="l-header__nav">
      <ul class="l-header__nav-list">
        <li class="l-header__nav-item"><NuxtLink @click="anchorTo" href="#section01" class="l-header__nav-link">プロフィール</NuxtLink></li>
        <li class="l-header__nav-item"><NuxtLink to="/" class="l-header__nav-link">アンカー02</NuxtLink></li>
        <li class="l-header__nav-item"><NuxtLink to="/" class="l-header__nav-link">アンカー03</NuxtLink></li>
      </ul>
    </nav>
  </div>

</header>
</template>