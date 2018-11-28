<template>
  <header role="banner" class="header">
    <h1 class="title">SiB</h1>
    <nav-icon/>
    <global-nav/>
    <a href="https://github.com/windchime-yk" target="_blank"><img src="~/static/github-brands.svg" alt="GitHub"></a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 50px 0 0 30px;
  max-width: 225px;
  width: 100%;
  background: $mainColor;
  @include mq {
    max-width: none;
    width: 100%;
    height: 80px;
    padding: 10px 0;
    top: auto;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
.title {
  font-size: 4rem;
  color: #fff;
  text-align: left;
  margin-bottom: 20px;
  @include mq {
    font-size: 3.5rem;
    margin: 0;
  }
}
img {
  width: 50px;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  @include mq {
    position: static;
    width: 40px;
  }
}
</style>


<script>
import GlobalNav from '~/components/GlobalNav.vue'
import NavIcon from '~/components/NavIcon.vue'

export default {
  components: {
    GlobalNav,
    NavIcon
  }
}
</script>
