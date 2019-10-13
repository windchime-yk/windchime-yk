<template>
  <div>
    <global-header/>
    <div class="contents__wrap">
      <nuxt/>
      <global-footer/>
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

li {
  list-style: none;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
}
dt {
  font-size: 1.8rem;
}
dd,
p,
li,
a {
  font-size: 1.5rem;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.container {
  max-width: 1000px;
  width: 100%;
  margin: ($headerHeight + 20px) auto 0;
  @include mq {
    margin-top: 0;
    margin-bottom: $headerHeightSp + 20px;
  }
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

