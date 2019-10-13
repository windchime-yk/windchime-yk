<template>
  <nav role="navigation">
    <ul class="list">
      <li v-for="(item, index) in items" :key="index" class="item">
        <a :href="`#${item}`" v-scroll-to="`#${item}`" class="link">{{ item }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "about",
        "work",
        "blog",
        "contact",
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: auto;
  @include mq {
    display: none;
  }
}
.list {
  display: flex;
}
.item {
  font-size: 1.8rem;
  margin-left: 20px;
}
.link {
  text-transform: capitalize;
  text-decoration: none;
  color: $subColor;
}
</style>

