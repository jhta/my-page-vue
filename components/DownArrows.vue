<template>
  <div class="triangle-container triangle--base"  v-scroll-to='goTo' v-bind:class="{'white': whiteArrow }">
    <span class="triangle triangle--top" v-bind:class="{'white--minus': whiteChilds}"></span>
    <span class="triangle triangle--bottom" v-bind:class="{'white--minus': whiteChilds}"></span>
  </div>
</template>

<script>
export default {
  props: ['whiteArrow', 'whiteChilds', 'goTo'],
}
</script>

<style scoped>

  .triangle-container {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  .triangle {
    position: absolute;
    border-left: 1rem transparent solid;
    border-right: 1rem transparent solid;
    border-top: 1rem solid #4a4a4a;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    opacity: 0.7;
    transition: all .5s ease-in-out;
  }

  .triangle--top {
    top: -3.5rem;
  }

  .triangle--bottom {
    top: -2rem;
  }

  .triangle--base {
    width: 2rem;
    height: 2rem;
    border-top: 2rem transparent solid;
    border-left: 2rem transparent solid;
    border-right: 2rem transparent solid;
    cursor: pointer;
  }

  .white {
    border-top: 2rem white solid;
  }

  .white--minus {

    border-top: 1rem white solid;
  }

  .triangle:hover {
    border-top: 1rem solid  #6fdac5;
  }

</style>
