<template>
  <nav role="navigation">
    <ul class="list">
      <li class="item"><a href="/" class="link">Top</a></li>
      <li class="item"><a href="/about" class="link">About</a></li>
      <li class="item"><a href="/product" class="link">Product</a></li>
      <li class="item"><a href="/blog" class="link">Blog</a></li>
      <li class="item"><a href="/contact" class="link">Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.item {
  text-align-last: left;
  font-size: 1.8rem;
}
.link {
  text-transform: uppercase;
  text-decoration: none;
  color: $linkColor;
}
</style>

