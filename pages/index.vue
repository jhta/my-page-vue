<template>
  <div>
    <me-first/>
    <me-second />
    <me-third />
    <sweetgreen />
    <nike />
    <espn />
    <platzi />
    <workep />
  </div>
</template>

<script>
import Bar from '~/components/Bar.vue'
import ExternalLinks from  '~/components/ExternalLinks'
import Wrapper from '~/components/Wrapper'
import MeFirst from '~/components/sections/me/first'
import MeSecond from '~/components/sections/me/second'
import MeThird from '~/components/sections/me/third'
import Sweetgreen from '~/components/sections/experience/sweetgreen'
import Espn from '~/components/sections/experience/espn'
import Nike from '~/components/sections/experience/nike'
import Platzi from '~/components/sections/experience/platzi'
import Workep from '~/components/sections/experience/workep'

export default {
  components: {
    Bar,
    ExternalLinks,
    Wrapper,
    MeFirst,
    MeSecond,
    Sweetgreen,
    Espn,
    MeThird,
    Nike,
    Platzi,
    Workep
  },
}
</script>

<style>


  h1 {
    text-align: center;
    margin-bottom: 0rem;
    font-size: 4rem;
    transition: .3s ease-out all;
    margin-top: 0;
    font-family: 'Staatliches', cursive ;
  }

  .gradient-title {
    letter-spacing: .5rem;
    font-size: 6rem;
    font-style: italic;
    line-height: 6rem;
    border-bottom: 1rem solid white;
  }
 
 .gradient {
    background: #ff9393;
    /* animation-name: bar; */
    animation-duration: 10s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    background: -webkit-linear-gradient(left, #ff9393 10% , #00ffde,  #ff9393 90%);
    background-size: 200% 100%;
    /* display: flex; */
    /* justify-content: center; */
  }

  .p2 {
    background: -webkit-linear-gradient(left, #ff9393, #00ffde);
    -webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
    padding: .2rem;
    font-weight: bold;
  }

@media (min-width: 768px) {
  h1 {
    font-size: 8rem;
    line-height: 10rem;
  }
}

@media (min-width: 1080px) {
  h1 {
    font-size: 10rem;
    line-height: 12rem;
  }


  .gradient-title {
    padding: 3rem;
    font-size: 15rem;
    line-height: 10rem;
  }
}
</style>

