
<script setup lang="ts">


import image01 from "@/assets/images/img-cute-point-01.jpg";
import image02 from "@/assets/images/img-cute-point-02.jpg";
import image03 from "@/assets/images/img-cute-point-03.jpg";
const points = ([
  {
    image: image01,
    title: "ギャップのある歌声",
    text: "天使のような可愛らしい声と力強く響く歌声のギャップが魅力的！\n可愛さとカッコよさを自在に操り、聴く人の心を惹きつける！",
    links: {
      text: "聴いてみる！",
      url: "https://youtu.be/J-KXMg-G3A4?t=1536"
    }
  },
  {
    image: image02,
    title: "包み込むような癒し",
    text: "優しく語りかける声や、ほんわかした雰囲気に癒される。\n疲れた日も、彼女の言葉で元気をもらえるはず！",
    links: {
      text: "",
      url: ""
    }
  },
  {
    image: image03,
    title: "愛らしいあくまねこ",
    text: "ふわふわの髪と猫耳、いたずらっぽい表情がたまらない！\n時には小悪魔、時には癒しの天使。\nその無邪気な仕草に心を奪われること間違いなし！",
    links: {
      text: "",
      url: ""
    }
  },
])
</script>

<template>

  <div class="p-cute-point">
    <div class="p-cute-point__item"  v-for="(point, index) in points" :key="index">
      <div class="p-cute-point__item-image">
        <img :src="point.image" />
      </div>
      <div class="p-cute-point__item-content">
        <h3 class="p-cute-point__item-title">{{ point.title }}</h3>
        <p class="p-cute-point__item-text">
          {{ point.text }}
        </p>
        <div class="p-cute-point__item-button" v-if="point.links.text">
          <NuxtLink :to=point.links.url class="c-button is-xs p-cute-point__item-link" target="_blank">{{ point.links.text }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>