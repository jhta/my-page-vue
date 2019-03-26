<template>
  <div>
    <Section>
      <wrapper v-bind:withBorders="true">
        <div class="first-content">
          <h1 class="first-title font-tittle">Jeison Higuita</h1>
          <p class="first-text text-center"> Software Developer, Lifelong learner and Traveler.</p>
        <external-links></external-links>
        </div>
      </wrapper>
    <bar :whiteArrow='true' :isGradient='true' :goTo='"#gradient"'></bar>
    </Section>
  </div>
</template>

<script>
import Bar from '~/components/Bar.vue'
import ExternalLinks from  '~/components/ExternalLinks'
import Wrapper from '~/components/Wrapper'
import Section from '~/components/Section'

export default {
  components: {
    Bar,
    ExternalLinks,
    Wrapper,
    Section
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
}

.gradient-effect, .first-title:hover {
  text-shadow:5px 5px 2px #00ffde, -5px -5px 2px #ff9393;
}

.first-text {
  font-size: 1rem;
  padding-bottom: 1rem;
}

.first-content {
  padding: 2rem 1rem;
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

  .first-text {
    font-size: 2rem;
  }
}
</style>

