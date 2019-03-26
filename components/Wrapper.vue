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
  padding: 2rem 1rem 1rem 1rem;
}

.border-top {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: .5rem;
  width: 6rem;
  background: -webkit-linear-gradient(left, #00ffde, #ff9393);
}

.border-bottom {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  height: .5rem;
  width: 6rem;
  /* background:  #ff9393; */
  background: black;
  background: -webkit-linear-gradient(right, #ff9393, #00ffde);
}
.border-top-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  width: .5rem;
  background:  #ff9393;
  background: #00ffde;
}



.border-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 6rem;
  width: .5rem;
  /* background:  #ff9393; */
  background:  #ff9393;
  /* background: #00ffde; */
}

.hideResponsive {
  display: none;
}


@media(min-width: 1080px) {
  .wrapper {
    padding: 6rem 4rem 6rem 4rem; 
  }

  .border-bottom-right {
    height: 8rem;
    width: .5rem;
  }

  .border-top-left{
    height: 8rem;
    width: .5rem;
  }

  .wrapper::before {
    height: .5rem;
    width: 8rem;
  }

  .wrapper::after {
    height: .5rem;
    width: 8rem;
  }

  .hideResponsive {
    display: block;
  }

}
</style>
