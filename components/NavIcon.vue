<template>
  <div class="icon">
    <button>
      <img src="~/static/menu.svg" alt="">
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
  width: 40px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 25%);
}
.icon {
  display: none;
  @include mq {
    display: block;
  }
}
</style>