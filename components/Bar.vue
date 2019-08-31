<template>
  <div class="bar" v-bind:class="{'bg-gradient': Boolean(isGradient) }">
    <down-arrows
      :whiteArrow='whiteArrow'
      :whiteChilds='background === "black"'
      :goTo='goTo'
    />
  </div>
</template>

<script>
import DownArrows from './DownArrows'

export default {
  props: ['whiteArrow', 'background', 'isGradient', 'goTo'],
  components: {
    DownArrows,
  },
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
    z-index: 1000;
    /* background: #ff9393; */
  
  }

  .bg-gradient {
    background: #ff9393;
    background: -webkit-linear-gradient(left, #ff9393 10% , #00ffde,  #ff9393 90%);
    animation-duration: 10s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    /* background: -webkit-linear-gradient(left, #ff9393 10% , #00ffde,  #ff9393 90%); */
    background-size: 200% 100%;
    transition: all .3s ease-in-out;
  }

  .bar:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1080px) {
    .bar {
      height: 2.5rem;
    }
  }





</style>

