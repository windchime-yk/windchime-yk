<template>
  <section id="blog" class="contents">
    <h2 class="contents__title">Blog</h2>
    <div class="article">
      <p v-if="contents.length === 0" class="article__empty">
        まだ記事は投稿していません……_(:3」∠)_
      </p>
      <div
        v-for="(content, index) in contents"
        v-else
        :key="index"
        class="article__item"
      >
        <dl class="article__body">
          <dt class="article__title">{{ content.title }}</dt>
          <dd class="article__description">{{ content.description }}</dd>
        </dl>
        <div class="article__btn">
          <nuxt-link class="article__link" :to="`blog/${content.slug}/`">
            詳細を読む
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.article__empty {
  padding: 50px 20px;
  font-size: 2rem;
  text-align: center;
  border-radius: 3px;
  @include boxShadow;
}
.article__item {
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 3px;
  @include boxShadow;
}
.article__title {
  font-size: 2rem;
  font-weight: bold;
}
.article__description {
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 1.5rem;
}
.article__btn {
  margin-top: 30px;
  text-align: right;
}
.article__link {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  background-color: #000;
  border-radius: 3px;
}
</style>
