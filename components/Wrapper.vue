<template>
  <section class="wrapper">
    <span class="border-top" v-if="withBorders"></span>
    <span class="border-top-left" :class="{hideResponsive: planeResponsive}" v-if="withBorders"></span>
    <slot></slot>
    <span class="border-bottom" v-if="withBorders"></span>
    <span class="border-bottom-right" :class="{hideResponsive: planeResponsive}" v-if="withBorders"></span>
  </section>
</template>

<script>
export default {
  props: ['withBorders', 'planeResponsive'],
}
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  position: relative;
  padding: 1rem;
}

.border-top {
  position: absolute;
  top: 0;
  left: 0;
  height: .5rem;
  width: 4rem;
  background: -webkit-linear-gradient(left, #00ffde, #ff9393);
}

.border-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  height: .5rem;
  width: 4rem;
  /* background:  #ff9393; */
  background: black;
  background: -webkit-linear-gradient(right, #ff9393, #00ffde);
}
.border-top-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 4rem;
  width: .5rem;
  background: #00ffde;
}



.border-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 4rem;
  width: .5rem;
  background:  #ff9393;
}

.hideResponsive {
  display: none;
}
@media(min-width: 768px) {
  .border-bottom-right, .border-top-left {
    height: 6rem;
  }

  .border-top, .border-bottom {
    width: 6rem;
  }
}

@media(min-width: 1080px) {
  .border-bottom-right, .border-top-left {
    height: 8rem;
  }

  .border-bottom, .border-top {
    width: 8rem;
  }

  .hideResponsive {
    display: block;
  }
}

@media(min-width: 1620px) {
  .wrapper {
    padding: 6rem 4rem 6rem 4rem; 
  }
}
</style>
