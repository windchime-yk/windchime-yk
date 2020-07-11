<template>
  <div class="container">
    <w-header />
    <first-view />
    <main id="main" class="main">
      <about-contents />
      <skill-contents />
      <works-contents />
      <blog-contents :contents="contents" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ app }) {
    const { contents } = await app.$axios.$get(
      'https://whyk-blog.microcms.io/api/v1/contents',
      {
        headers: {
          'X-API-KEY': process.env.CMS_API_KEY,
        },
      }
    )
    return {
      contents,
    }
  },
  data() {
    return {
      contents: [],
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
}
.main {
  width: 100%;
  max-width: 1000px;
  padding-top: 50px + $header-height;
  margin-top: -$header-height;
  @include mq('tb') {
    width: 90%;
    padding-top: 50px;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
