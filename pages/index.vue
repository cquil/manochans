
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
      <div class="l-two-column__contents">
        <section class="l-section">
          <p class="p-first-view__text">こちらはdev branchになります。</p>
          <FirstView />
        </section>
        <section class="l-section"><Lead /></section>
        <section class="l-section is-xlg is-top is-has-event">
          <Headings text="直近のイベント情報" marginClass="is-xxs-bottom" />
          <EventCard />
        </section>
        <section class="l-section is-xlg is-top" id="profile"><Profile /></section>
        <section class="l-section is-xlg is-top" id="news">
          <Headings text="最新情報" marginClass="is-xxs-bottom" />
          <News :addClass="'is-home'" :limit="2" />
          <Buttons text="最新情報一覧へ" marginClass="is-xxs-top is-right" addClass="" toLink="/news/"/>
        </section>
        <section class="l-section is-xlg is-top" id="cute">
          <Headings text="魅力ポイント" marginClass="is-xxs-bottom"  />
          <CutePoint />
        </section>
        <section class="l-section is-xlg is-top" id="member">
          <Headings text="メンシ限定" marginClass="is-xxs-bottom" />
          <Member />
        </section>
        <section class="l-section is-xlg is-top" id="music">
          <Headings text="コラボ動画" marginClass="is-xxs-bottom"  />
          <MusicCard :addClass="'is-home'" :limit="2"  />
          <Buttons text="コラボ動画一覧へ" marginClass="is-xxs-top is-right" addClass="" toLink="/collaboration/"/>
        </section>
        <section class="l-section is-xlg is-top" id="history">
          <Headings text="タイムライン" marginClass="is-xxs-bottom"  />
          <History />
        </section>
      </div>
    </div>
  </div>
</template>