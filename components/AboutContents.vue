<template>
  <section id="about" class="contents">
    <h2 class="contents__title">About</h2>
    <div class="introduction">
      <div class="introduction__avatar">
        <img
          src="~/assets/images/avater.png"
          alt="WhyKのアイコン"
          class="introduction__image"
        />
      </div>
      <div class="introduction__body">
        <dl>
          <dt class="introduction__title">WhyK</dt>
          <dd class="introduction__description">
            <p class="introduction__paragraph">
              フロントエンドエンジニア。<br />業務では、主にVueとNuxtJSでの開発を行なう。
            </p>
            <p class="introduction__paragraph">
              Vue周りのフレームワークとNode.jsが好きで、それらを活用したプロダクト開発を模索中。<br />最近は、Node.jsのExpressを使ってJSON
              APIを試作してみたりしてる。<br />あと、玄米茶とドクペが好き。
            </p>
            <p class="introduction__paragraph">
              一人暮らしをした暁には、テンジクネズミを飼いたいと思っている。
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.introduction {
  display: flex;
  @include mq() {
    flex-direction: column;
  }
}
.introduction__avatar {
  width: 20%;
  margin-left: 5%;
  @include mq() {
    width: 50%;
    margin-right: auto;
    margin-bottom: 20px;
    margin-left: auto;
  }
}
.introduction__image {
  width: 100%;
}
.introduction__body {
  width: 70%;
  margin-left: 5%;
  @include mq() {
    width: 100%;
    margin-left: 0;
  }
}
.introduction__title {
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  @include mq() {
    text-align: center;
  }
}
.introduction__description {
  font-size: 1.5rem;
}
.introduction__paragraph {
  margin-bottom: 10px;
}
</style>
