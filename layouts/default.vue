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
dd {
  margin-left: 1em;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.contents__wrap {
  @include mq {
    margin-bottom: 60px;
  }
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

