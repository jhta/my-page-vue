<template>
  <div>
    <Section>
      <wrapper v-bind:withBorders="true">
        <div class="first-content">
          <!-- <h1 class="first-title font-tittle">Jeison Higuita</h1> -->
          <p class="first-text text-center">
            Hi there, I'm <b class="b-name">Jeison Higuita</b><br />
            Colombian <b>Software Engineer</b>, Lifelong learner
            and Amateur Photographer based on Amsterdam Currently working at <a target="_blank" href="https://www.cg.nl/">CG</a>.
          </p>
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


<style scoped>



/* .first-text > a:hover {
  text-shadow:2px 2px 1px #00ffde, -2px -2px 1px #ff9393;
} */

.first-text {
  font-size: 1.3rem;
  padding-bottom: 2rem;
  text-align: left;
}

.first-content {
  max-width: 1080px;
  padding: 3rem 1rem;
}

@media (min-width: 768px) {
  .first-text {
    font-size: 2.4rem;
  }
}

@media (min-width: 1080px) {
  .first-text {
    font-size: 3rem;
    /* line-height: 5rem; */
    padding-bottom: 3rem;
  }
}
</style>

