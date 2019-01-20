<template>
  <div class="bar" ></div>
</template>


<style>
  @keyframes bar { 
      0%{background-position:0% 100%}
      50%{background-position:125% 100%}
      100%{background-position:0% 100%}
  }
  .bar {
    height: 3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 150%;
    background: #ff9393;
    animation-name: bar;
    animation-duration: 10s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    background: -webkit-linear-gradient(left, #ff9393 10% , #00ffde,  #ff9393 90%);
    background-size: 200% 100%;
  }


</style>

