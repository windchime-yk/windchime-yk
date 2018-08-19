<template>
  <header role="banner" class="header">
    <h1 class="title">SiB</h1>
    <global-nav/>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 50px 0 0 40px;
  width: 20%;
  background: $mainColor;
}
.title {
  font-size: 4rem;
  color: #fff;
  text-align: left;
  margin-bottom: 20px;
}
</style>


<script>
import GlobalNav from '~/components/GlobalNav.vue'

export default {
  components: {
    GlobalNav
  }
}
</script>
