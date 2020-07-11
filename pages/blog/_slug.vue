<template>
  <section>
    <h2>{{ contents[0].title }}</h2>
    <div v-html="contents[0].contents" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ app, params }) {
    const { contents } = await app.$axios.$get(
      `https://whyk-blog.microcms.io/api/v1/contents?filters=slug[equals]${params.slug}`,
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
  head() {
    return {
      title: this.contents[0].title,
    }
  },
})
</script>
