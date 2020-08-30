<template>
  <header class="header">
    <h1 class="header__title">
      <a href="/">
        <img
          class="header__logo"
          src="~/assets/images/site-logo.svg"
          alt="whyk-dev"
        />
      </a>
    </h1>
    <nav v-show="!blog" :class="['nav', { 'is-expanded': isExpanded }]">
      <ul v-if="blog" class="nav__list">
        <li v-for="(item, index) in blogItems" :key="index" class="nav__item">
          <a class="nav__anchor" :href="`/blog/${item}`" @click="expandedNav()">
            {{ item }}
          </a>
        </li>
      </ul>
      <ul v-else class="nav__list">
        <li v-for="(item, index) in items" :key="index" class="nav__item">
          <a class="nav__anchor" :href="`#${item}`" @click="expandedNav()">{{
            item
          }}</a>
        </li>
      </ul>
    </nav>
    <button
      v-show="!blog"
      :class="['header__btn', { 'is-expanded': isExpanded }]"
      @click="expandedNav()"
    >
      <header-icon />
    </button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderIcon from '~/components/HeaderIcon.vue'

export default Vue.extend({
  name: 'WHeader',
  components: {
    HeaderIcon,
  },
  props: {
    blog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isExpanded: false,
      items: ['about', 'skill', 'works', 'blog'],
      blogItems: ['category', 'tags', 'posts'],
    }
  },
  methods: {
    expandedNav() {
      this.isExpanded = !this.isExpanded
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: $header-height;
  padding-right: 30px;
  padding-left: 30px;
  background-color: #1f2e55;
  @include mq('tb') {
    position: static;
  }
}

.nav {
  @include mq('tb') {
    position: fixed;
    bottom: -190px;
    left: 0;
    width: 100%;
    background-color: $main-color;
    transition: bottom 0.5s ease-in;
    &.is-expanded {
      bottom: 0;
    }
  }
}
.nav__list {
  display: flex;
  list-style: none;
  @include mq('tb') {
    flex-direction: column;
    padding-top: 40px;
    padding-left: 0;
  }
}

.nav__item {
  margin-left: 40px;
  @include mq('tb') {
    margin-left: 0;
  }
}

.nav__anchor {
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;
  @include mq('tb') {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
}

.header__btn {
  display: none;
  @include mq('tb') {
    position: fixed;
    bottom: 5px;
    left: 50%;
    display: block;
    padding: 20px;
    color: $sub-text-color;
    background-color: $accent-color;
    border-radius: 50%;
    transition: bottom 0.5s ease-in;
    transform: translateX(-50%);
    &.is-expanded {
      bottom: 195px;
    }
  }
}
</style>
