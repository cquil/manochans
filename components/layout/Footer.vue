
<script setup lang="ts"></script>

<template>
<footer class="l-footer">
  <div class="l-container">
    <div class="l-footer__content">
      <div class="l-footer__logo">
        <NuxtLink to="/">
          <NuxtImg src="images/logo-white.svg" alt="logo" width="237" format="webp"/>
        </NuxtLink>
      </div>
      <ul class="l-footer__list">
        <li class="l-footer__item">
          <NuxtLink to="privacy-policy" class="l-footer__link">Privacy Policy</NuxtLink>
        </li>
        <li class="l-footer__item">
          <NuxtLink to="terms" class="l-footer__link">Terms of Service</NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink class="l-footer__copyright" to="https://x.com/CqSite">管理者: cq</NuxtLink>
  </div>
</footer>
</template>