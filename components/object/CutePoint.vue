
<script setup lang="ts">


import image01 from "@/assets/images/img-cute-point-01.jpg";
import image02 from "@/assets/images/img-cute-point-02.jpg";
import image03 from "@/assets/images/img-cute-point-03.jpg";
const points = ([
  {
    image: image01,
    title: "ギャップのある歌声",
    text: "天使のような可愛らしい声と、力強く響く歌声。その対照的なギャップが魅力的！ キュートで甘い高音から、迫力ある低音まで自在に操り、曲ごとに異なる表情を見せる。可愛さとカッコよさが絶妙に融合し、聴く人の心を惹きつけて離さない！",
    links: {
      text: "聴いてみる！",
      url: "https://youtu.be/J-KXMg-G3A4?t=1536"
    }
  },
  {
    image: image02,
    title: "包み込むような癒し",
    text: "優しく語りかける声や、ほんわかした温かい雰囲気に癒される。落ち込んだ日や疲れたときも、彼女の言葉がそっと寄り添い、元気を与えてくれる。まるでそばにいるかのような安心感で、心がふんわりと軽くなるはず！",
    links: {
      text: "",
      url: ""
    }
  },
  {
    image: image03,
    title: "愛らしいあくまねこ",
    text: "ふわふわの髪と猫耳、いたずらっぽい表情がたまらない！ 小悪魔のような茶目っ気と、時折見せる癒しの天使のような優しさが絶妙なバランス。無邪気な仕草や甘えるような姿に、思わず心を奪われてしまうこと間違いなし！",
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