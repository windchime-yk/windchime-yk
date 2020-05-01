<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
:root {
  @media (prefers-color-scheme: light) {
    --base-color: #f7f7f7;
    --main-color: #1f2e55;
    --accent-color: #282a2c;
  }

  @media (prefers-color-scheme: dark) {
    --base-color: #282a2c;
    --main-color: #1f2e55;
    --accent-color: #f7f7f7;
  }
}

html {
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
    'Hiragino Sans', Meiryo, sans-serif;
  font-size: 62.5%;
  // background-color: $base-color;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

button {
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  appearance: none;
}

.contents {
  padding-top: $header-height;
  margin-top: -$header-height;
  margin-bottom: 100px;
  &.is-hidden-header {
    padding-top: 0;
    margin-top: 0;
  }
  @include mq('tb') {
    padding-top: 0;
    margin-top: 0;
  }
}
.contents__title {
  margin-bottom: 30px;
  font-size: 3rem;
}
</style>
