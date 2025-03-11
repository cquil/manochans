<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const isTopPage = computed(() => route.path === "/");

const navItems = [
  { id: "profile", href: "profile", label: "プロフィール" },
  { id: "news", href: "news", label: "最新情報" },
  { id: "cute", href: "cute", label: "ここ好き！" },
  { id: "member", href: "member", label: "メンバーシップ限定" },
  { id: "music", href: "music", label: "コラボ" },
  { id: "history", href: "history", label: "タイムライン" },
];

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
<header class="l-header" data-aos="fade-down" data-aos-delay="1800">
  <div class="l-header__container">
    <h1 class="l-header__logo">
      <NuxtLink to="/">
        <NuxtImg src="images/logo.png" alt="logo" width="150" format="webp"/>
      </NuxtLink>
    </h1>
    <nav class="l-header__nav">
      <ul class="l-header__nav-list">
        <li v-for="item in navItems" :key="item.id" class="l-header__nav-item">
          <NuxtLink
            :to="isTopPage ? '' : `/#${item.href}`"
            :href="`#${item.href}`"
            @click.prevent="isTopPage ? anchorTo($event) : null"
            class="l-header__nav-link"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>

</header>
</template>