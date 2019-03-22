<template>
  <div class="icon">
    <button>
      <img src="~/static/menu.svg" alt="">
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
  width: 50px;
}
.icon {
  display: none;
  @include mq {
    display: block;
  }
}
</style>