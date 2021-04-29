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
            <span class="introduction__name">WhyK</span>
            <ul class="introduction-link">
              <li class="introduction-link__item">
                <a
                  class="introduction__icon introduction__icon--twitter"
                  href="https://twitter.com/windchime_yk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon class="fa-fw" :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li class="introduction-link__item">
                <a
                  class="introduction__icon introduction__icon--github"
                  href="https://github.com/windchime-yk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon class="fa-fw" :icon="['fab', 'github']" />
                </a>
              </li>
            </ul>
          </dt>
          <dd class="introduction__description">
            <p class="introduction__paragraph">
              フロントエンドエンジニア。TSer。
            </p>
            <p class="introduction__paragraph">
              VueとDenoが好き。<br />それらを活用したプロダクト開発を模索している。
            </p>
            <p class="introduction__paragraph">
              在宅勤務が快適すぎて離れられない。
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
  display: flex;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  @include mq() {
    flex-direction: column;
    text-align: center;
  }
}
.introduction-link {
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-left: 5px;
  list-style: none;
  @include mq() {
    margin-top: 5px;
    margin-left: 0;
  }
}
.introduction__icon {
  @include mq() {
    font-size: 2.5rem;
  }
  &--twitter {
    color: #1c91da;
  }
  &--github {
    color: #24292e;
    @include mq() {
      margin-left: 5px;
    }
  }
}
.introduction__description {
  font-size: 1.5rem;
}
.introduction__paragraph {
  margin-bottom: 10px;
}
</style>
