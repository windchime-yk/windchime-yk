<template>
  <nav role="navigation">
    <ul class="list">
      <li class="item"><a href="#about" class="link">About</a></li>
      <li class="item"><a href="#product" class="link">Product</a></li>
      <li class="item"><a href="#blog" class="link">Blog</a></li>
      <li class="item"><a href="#contact" class="link">Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: auto;
  @include mq {
    display: none;
  }
}
.list {
  padding-left: 20%;
}
.item {
  font-size: 1.8rem;
}
.link {
  text-transform: uppercase;
  text-decoration: none;
  color: $linkColor;
}
</style>

