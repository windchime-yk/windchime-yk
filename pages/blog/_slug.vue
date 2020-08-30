<template>
  <div class="container">
    <w-header blog />
    <main class="main">
      <section class="blog">
        <h2 class="blog__title">{{ contents[0].title }}</h2>
        <ul class="info">
          <li class="info__item">
            <font-awesome-icon class="fa-fw" :icon="['fas', 'folder']" />
            {{ contents[0].category.name }}
          </li>
          <li class="info__item">
            <font-awesome-icon class="fa-fw" :icon="['fas', 'pen']" />
            {{ adjuctDate(contents[0].createdAt) }}
          </li>
          <li class="info__item">
            <font-awesome-icon class="fa-fw" :icon="['fas', 'history']" />
            {{ adjuctDate(contents[0].updatedAt, true) }}
          </li>
        </ul>
        <div class="blog__body" v-html="contents[0].contents" />
        <div class="blog__back">
          <nuxt-link class="blog__link" to="/#blog">
            ブログ一覧に戻る
          </nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Contents {
  title: string
}

interface Data {
  contents: Contents[]
}

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
  data(): Data {
    return {
      contents: [],
    }
  },
  methods: {
    adjuctDate(datetime: string, update: boolean = false) {
      const { year, month, date, hour, minutes } = this.getDateUnit(datetime)

      if (update) return `${year}/${month}/${date} ${hour}:${minutes}`
      return `${year}/${month}/${date}`
    },
    getDateUnit(date: string) {
      const datetime = new Date(date)
      return {
        year: datetime.getFullYear(),
        month: this.zeroPadding(datetime.getMonth() + 1),
        date: this.zeroPadding(datetime.getDate()),
        hour: this.zeroPadding(datetime.getHours()),
        minutes: this.zeroPadding(datetime.getMinutes()),
      }
    },
    zeroPadding(num: number) {
      return String(num).padStart(2, '0')
    },
  },
  head() {
    return {
      // @ts-ignore
      title: this.contents[0].title,
    }
  },
})
</script>

<style lang="scss" scoped>
.main {
  width: 70%;
  margin-top: 50px + $header-height;
  margin-right: auto;
  margin-left: auto;
  @include mq('tb') {
    width: 90%;
    padding-top: 50px;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
  }
}

.blog {
  padding: 30px 20px;
  @include boxShadow;
}

.blog__title {
  font-size: 4rem;
  font-weight: bold;
}

.blog__body {
  font-size: 1.5rem;

  & ul {
    padding: 0;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

.blog__back {
  margin-top: 30px;
  text-align: right;
}

.blog__link {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  background-color: #000;
  border-radius: 3px;
}

.info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 0;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 20px;
  list-style: none;
}

.info__item {
  margin-top: 5px;
  font-size: 1.5rem;
  &:not(:last-child) {
    margin-right: 20px;
  }
}
</style>
