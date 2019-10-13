<template>
  <header role="banner" class="header">
    <div class="header__wrap">
      <h1 class="title">SiB</h1>
      <nav-icon @click="navShow = !navShow" />
      <global-nav :class="isActive" />
    </div>
  </header>
</template>

<script>
import NavIcon from '~/components/NavIcon.vue'
import GlobalNav from '~/components/GlobalNav.vue'

export default {
  components: {
    NavIcon,
    GlobalNav
  },
  data() {
    return {
      navShow: false,
    }
  },
  computed: {
    isActive() {
      return this.navShow ? 'nav-show' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  background: $mainColor;
  @include mq {
    height: $headerHeightSp;
    padding: 10px 0;
    top: auto;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
.header__wrap {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include mq(1200px) {
    margin-right: 20px;
    margin-left: 20px;
  }
  @include mq {
    justify-content: flex-start;
  }
}
.title {
  font-size: 4rem;
  color: #fff;
  text-align: left;
  @include mq {
    font-size: 3.5rem;
    margin: 0;
  }
}
/deep/ .nav {
  &.nav-show {
    display: block;
  }
}
</style>