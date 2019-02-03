<template>
  <div>
    <section class='section'>
      <wrapper v-bind:withBorders="true">
        <h1 class="first-title font-tittle">Jeison Higuita</h1>
        <p class="text-center"> Software Developer, Lifelong learner and Traveler.</p>
        <external-links></external-links>
      </wrapper>
    <bar :whiteArrow='true' :isGradient='true' :goTo='"#gradient"'></bar>
    </section>
  </div>
</template>

<script>
import Bar from '~/components/Bar.vue'
import ExternalLinks from  '~/components/ExternalLinks'
import Wrapper from '~/components/Wrapper'

export default {
  components: {
    Bar,
    ExternalLinks,
    Wrapper
  },
}
</script>


<style>
p {
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
  margin-bottom: 0rem;
  font-size: 4rem;
  transition: .3s ease-out all;
  margin-top: 0;
}

.gradient-effect, .first-title:hover {
  text-shadow:5px 5px 2px #00ffde, -5px -5px 2px #ff9393;
}
 

@media (min-width: 768px) {
  h1 {
    font-size: 8rem;
    line-height: 10rem;
  }

  p {
    font-size: 1.5rem;
  }
}

@media (min-width: 1080px) {
  h1 {
    font-size: 10rem;
    line-height: 12rem;
  }

  p {
    font-size: 2rem;
  }
}
</style>

