<template>
  <div v-if="show" class="bar" v-bind:class="{isBlack: background === 'black'}">
    <down-arrows v-bind:whiteArrow='whiteArrow' v-bind:whiteChilds='background === "black"'></down-arrows>
  </div>
</template>

<script>
import DownArrows from './DownArrows'

export default {
  components: {
    DownArrows,
  },

  props: ['whiteArrow', 'background'],


  data() {
    return {
      show: true 
    }
  },
  methods: {
    toggleTriangle () {
      // this.show = !this.show
      console.log('just testing')
    }
  }
}
</script>


<style scoped>
  @keyframes bar { 
      0%{background-position:0% 100%}
      50%{background-position:100% 75%}
      100%{background-position:0% 100%}
  }
  .bar {
    height: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #ff9393;
    /* animation-name: bar; */
    animation-duration: 10s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    background: -webkit-linear-gradient(left, #ff9393 10% , #00ffde,  #ff9393 90%);
    background-size: 200% 100%;
    /* display: flex; */

     transition: all .3s ease-in-out;
    /* justify-content: center; */
  }

  .bar:hover {
    transform: scale(1.1);
  }

  .isBlack {
    background: black;
  }

  @media (min-width: 1080px) {
    .bar {
      height: 2.5rem;
    }
  }





</style>

