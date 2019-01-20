<template>
  <div v-if="show" class="bar" >
      <span  v-scroll-to="'#gradient'" v-on:click="toggleTriangle()" class='white-triangle'>
        <span class="inside-triangle-top"></span>
        <span class="inside-triangle"></span>
      </span>
  </div>
</template>

<script>
export default {
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

  .white-triangle{
    position: absolute;
    width: 2rem;
    /* background: white; */
    height: 2rem;
    left: 50%;
    border-top: 2rem white solid;
    border-left: 2rem transparent solid;
    border-right: 2rem transparent solid;

    transform: translateX(-50%);
    /* top: 0; */
    /* margin: 0 auto; */
    cursor: pointer;
  }

  .inside-triangle {
    position: absolute;
    width: 1rem;
    /* background: white; */
    height: 1rem;
    left: 50%;
    border-top: 1rem #6fdac5 solid;
    border-top: 1rem solid #4a4a4a;
    /* border-top: 1rem #4a4a4a solid; */
    border-left: 1rem transparent solid;
    border-right: 1rem transparent solid;
    opacity: 0.7;

    transform: translateX(-50%);
    top: -2rem;
    /* margin: 0 auto; */
     transition: all .5s ease-in-out;
  }

  .inside-triangle:hover, .inside-triangle-top:hover {
    border-top: 1rem solid  #6fdac5;
  }

  .inside-triangle-top {
    position: absolute;
    width: 1rem;
    /* background: white; */
    height: 1rem;
    left: 50%;
    border-top: 1rem #6fdac5 solid;
    border-top: 1rem solid #4a4a4a;
    /* border-top: 1rem #ff9393 solid; */
    border-left: 1rem transparent solid;
    border-right: 1rem transparent solid;

    transform: translateX(-50%);
    top: -3.5rem;
    /* margin: 0 auto; */
  }

  @media (min-width: 1080px) {
    .bar {
      height: 2.5rem;
    }
  }





</style>

