<template>
  <section id="works" class="contents">
    <h2 class="contents__title">Works</h2>
    <div class="product">
      <div v-for="(work, index) in works" :key="index" class="product__item">
        <div class="product__percentage">
          <span
            v-for="(item, indexChild) in work.skill"
            :key="indexChild"
            class="product__color"
            :style="[
              {
                'background-color': item.color,
                width: `${100 / work.skill.length}%`,
              },
            ]"
          />
        </div>
        <dl class="product__body">
          <dt class="product__title">{{ work.name }}</dt>
          <dd class="product__description">{{ work.description }}</dd>
        </dl>
        <ul class="product__skill">
          <li
            v-for="(item, indexChild) in work.skill"
            :key="indexChild"
            class="product__tag"
          >
            {{ item.label }}
          </li>
        </ul>
        <ul class="product__action">
          <li class="product__btn product__btn--github">
            <a class="product__link" :href="work.github" target="_blank"
              >GitHubを開く</a
            >
          </li>
          <li v-if="work.link" class="product__btn">
            <a class="product__link" :href="work.link" target="_blank">
              リンクを開く
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { works } from '~/assets/json/works.json'

export default Vue.extend({
  data() {
    return {
      works,
    }
  },
})
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.product__item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 22.7%;
  padding-bottom: 20px;
  margin-left: 3%;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  &:first-of-type {
    margin-left: 0;
  }
  @include mq('tb') {
    width: 48.5%;
    &:nth-of-type(odd) {
      margin-left: 0;
    }
    &:nth-last-of-type(n + 3) {
      margin-bottom: 20px;
    }
  }
  @include mq('sp') {
    width: 100%;
    &:nth-of-type(odd),
    &:nth-of-type(even) {
      margin-right: auto;
      margin-bottom: 20px;
      margin-left: auto;
    }
  }
}
.product__percentage {
  display: flex;
  width: 100%;
  height: 8px;
  margin-bottom: 12px;
}
.product__color {
  display: block;
  width: 20%;
}
.product__body {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.product__title {
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.product__description {
  height: 125px;
  font-size: 1.5rem;
}
.product__skill {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding-left: 0;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
  font-size: 1.2rem;
  list-style: none;
}
.product__tag {
  padding: 5px 10px;
  margin-bottom: 5px;
  margin-left: 5px;
  border: 2px solid #000;
  border-radius: 3px;
}
.product__action {
  padding-left: 0;
  list-style: none;
}
.product__btn {
  &:not(&--github) {
    margin-top: 5px;
  }
}
.product__link {
  display: block;
  padding: 10px 30px;
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  background-color: #000;
  border-radius: 3px;
}
</style>
