<template>
  <nav class="nav" role="navigation">
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
.nav {
  width: auto;
  @include mq {
    width: 100%;
    padding: 20px;
    display: none;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #555;
  }
}
.list {
  display: flex;
  @include mq {
    flex-direction: column;
    padding: 0;
  }
}
.item:not(:first-of-type) {
  margin-left: 20px;
  @include mq {
    margin-left: 0;
    margin-top: 20px;
  }
}
.link {
  text-transform: capitalize;
  text-decoration: none;
  color: $subColor;
  @include mq {
    display: block;
    font-size: 2rem;
  }
}
</style>

