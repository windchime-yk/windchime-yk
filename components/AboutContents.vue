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
          <dt class="introduction__title">
            WhyK
            <a
              class="introduction__icon--twitter"
              href="https://twitter.com/windchime_yk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a
              class="introduction__icon--github"
              href="https://github.com/windchime-yk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </dt>
          <dd class="introduction__description">
            <p class="introduction__paragraph">
              フロントエンドエンジニア。TSer。
            </p>
            <p class="introduction__paragraph">
              Vue周りのフレームワークとサーバーサイドJavaScriptが好き。<br />それらを活用したプロダクト開発を模索している。<br />最近はDenoがマイブーム。
            </p>
            <p class="introduction__paragraph">
              在宅勤務に慣れてしまったので、出社してたときの感覚を忘れてしまった。
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
.introduction__icon {
  &--twitter {
    color: #1c91da;
  }
  &--github {
    color: #24292e;
  }
}
.introduction__description {
  font-size: 1.5rem;
}
.introduction__paragraph {
  margin-bottom: 10px;
}
</style>
