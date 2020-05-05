<template>
  <div class="bg-white">
    <Section>
      <wrapper v-bind:withBorders="true">
        <div class="first-content">
          <!-- <h1 class="first-title font-tittle">Jeison Higuita</h1> -->
          <div class="first-text text-center">
            <h1>
              Hi there, I'm
              <b class="b-name">Jeison Higuita</b>.
            </h1>
            <h2>
              Colombian
              <b>Software Engineer</b>, Lifelong learner
              and Amateur Photographer based on Amsterdam, currently working at
              <a
                target="_blank"
                href="https://www.cg.nl/"
              >recharge.com</a>.
            </h2>
          </div>
          <external-links/>
        </div>
      </wrapper>
      <bar :whiteArrow="true" goTo="#gradient"></bar>
    </Section>
  </div>
</template>

<script>
import Bar from "~/components/Bar.vue";
import ExternalLinks from "~/components/ExternalLinks";
import Wrapper from "~/components/Wrapper";
import Section from "~/components/Section";

export default {
  components: {
    Bar,
    ExternalLinks,
    Wrapper,
    Section
  }
};
</script>


<style scoped>
.first-text {
  font-size: 1.3rem;
  padding-bottom: 2rem;
  text-align: left;
}

.bg-white {
  background: white;
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
  .first-content {
    padding: 3rem 2rem;
  }
  .first-text {
    font-size: 2.8rem;
    padding-bottom: 3rem;
  }
}
</style>

