<template>
  <header role="banner" class="header">
    <div class="header__wrap">
      <h1 class="title">SiB</h1>
      <nav-icon/>
      <global-nav/>
    </div>
  </header>
</template>

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
  @include mq {
    justify-content: flex-start;
    margin-left: 20px;
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
