<template>
  <div class="container">
    <w-header />
    <first-view />
    <main id="main" class="main">
      <about-contents />
      <skill-contents />
      <works-contents />
      <blog-contents />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WHeader from '~/components/WHeader.vue'
import FirstView from '~/components/FirstView.vue'
import AboutContents from '~/components/contents/AboutContents.vue'
import SkillContents from '~/components/contents/SkillContents.vue'
import WorksContents from '~/components/contents/WorksContents.vue'
import BlogContents from '~/components/contents/BlogContents.vue'

export default Vue.extend({
  components: {
    WHeader,
    FirstView,
    AboutContents,
    SkillContents,
    WorksContents,
    BlogContents
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
}
.main {
  width: 100%;
  max-width: 1000px;
  padding-top: 50px + $header-height;
  margin-top: -$header-height;
  @include mq('tb') {
    width: 90%;
    padding-top: 50px;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
