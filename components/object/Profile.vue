
<script setup lang="ts">

</script>

<template>

  <div class="p-profile">


    <div class="p-profile__item" data-aos="custom-up" data-aos-duration="600">
      <Headings text="プロフィール" marginClass="is-xxs-bottom" />
      <table class="c-table p-profile__item-table">
        <tbody>
          <tr>
            <th>名前</th>
            <td>魔ノむえる</td>
          </tr>
          <tr>
            <th>誕生日</th>
            <td>7月15日</td>
          </tr>
          <tr>
            <th>年齢</th>
            <td>20歳（永遠）</td>
          </tr>
          <tr>
            <th>身長</th>
            <td>153cm</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-profile__item" data-aos="custom-up" data-aos-duration="600">
      <Headings text="タグ" marginClass="is-xxs-bottom" />
      <table class="c-table p-profile__item-table">
        <tbody>
          <tr>
            <th>FM</th>
            <td>👾🖤</td>
          </tr>
          <tr>
            <th>FN</th>
            <td>まのちゃんず</td>
          </tr>
          <tr>
            <th>ALL</th>
            <td>#魔ノむえる</td>
          </tr>
          <tr>
            <th>LIVE</th>
            <td>#まのちらいぶ</td>
          </tr>
          <tr>
            <th>FANART</th>
            <td>#まのにあーと</td>
          </tr>
          <tr>
            <th>CLIP</th>
            <td>#まのちょき</td>
          </tr>
        </tbody>
      </table>
      <div class="p-profile__item-buttons">
        <NuxtLink to="https://www.youtube.com/channel/UCFqVAFANOHm17UVy8sWkhqw" target="_blank" class="c-button p-profile__item-button">Youtube</NuxtLink>
        <NuxtLink to="https://x.com/Mano_muerU/" target="_blank" class="c-button p-profile__item-button">X</NuxtLink>
      </div>
    </div>


  </div>

</template>