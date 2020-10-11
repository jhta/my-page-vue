<template>
  <div class="bg-white">
    <Section>
      <wrapper v-bind:withBorders="true">
        <div class="first-content">
          <div class="first-text text-center">
            <vue-simple-markdown :source="description" />
          </div>
          <external-links :links="links.link" />
        </div>
      </wrapper>
      <bar whiteArrow goTo="#gradient" />
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
  },
  props: {
    description: String,
    links: {
      type: Object,
      default: () => ({})
    }
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
