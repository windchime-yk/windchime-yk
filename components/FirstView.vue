<template>
  <div class="first-view">
    <div class="first-view__title">
      <span class="first-view__text is-laptop">Simple is Best</span>
      <div class="first-view__text is-phone">
        <span class="first-view__text--first">Simple</span>
        <span class="first-view__text--second">is</span>
        <span class="first-view__text--third">Best</span>
      </div>
    </div>

    <a class="first-view__arrow" href="#main">
      <img src="~/assets/images/arrow.svg" alt="" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FirstView',
})
</script>

<style lang="scss" scoped>
.first-view {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #1f2e55;
  @include mq('tb') {
    justify-content: start;
    height: calc(100vh - #{$header-height});
    padding-top: 100px;
  }
}

.first-view__title {
  display: flex;
  font-size: 10rem;
  text-transform: uppercase;
  @include mq('lt') {
    font-size: 8rem;
  }
}

.first-view__text {
  display: block;
  overflow: hidden;
  font-family: 'Fira Code', monospace;
  white-space: nowrap;
  border-right: 2px solid #fff;
  animation: typing 2s steps(14), caret 1s steps(1) 2s infinite;
  &.is-laptop {
    @include mq('tb') {
      display: none;
    }
  }
  &.is-phone {
    display: none;
    @include mq('tb') {
      display: block;
      border-right: none;
      animation: none;
    }
  }
  &--first,
  &--second,
  &--third {
    display: block;
    margin-right: auto;
    margin-left: auto;
    overflow: hidden;
    white-space: nowrap;
  }
  &--first {
    width: 6ch;
    animation: typingfirst 1s steps(6);
  }
  &--second {
    width: 0;
    animation: typingsecond 0.5s steps(2) 1s forwards;
  }
  &--third {
    width: 0;
    animation: typingthird 0.75s steps(4) 1.5s forwards,
      caret 1s steps(1) 2.25s infinite;
  }
}

@keyframes typing {
  0% {
    width: 0;
    border-right: 1px solid #fff;
  }
  100% {
    width: 14ch;
  }
}

@keyframes typingfirst {
  0% {
    width: 0;
    border-right: 1px solid #fff;
  }
  100% {
    width: 6ch;
    border-right: 1px solid #fff;
  }
}

@keyframes typingsecond {
  0% {
    width: 0;
    border-right: 1px solid #fff;
  }
  99% {
    border-right: 1px solid #fff;
  }
  100% {
    width: 2ch;
    border-right: none;
  }
}

@keyframes typingthird {
  0% {
    width: 0;
    border-right: 1px solid;
  }
  100% {
    width: 4ch;
    border-right: 1px solid;
  }
}

@keyframes caret {
  50% {
    border-right-color: transparent;
  }
}

.first-view__arrow {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  animation-name: fuwafuwa;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @include mq('tb') {
    bottom: 25%;
  }
}

@keyframes fuwafuwa {
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, 30px);
  }
}
</style>
