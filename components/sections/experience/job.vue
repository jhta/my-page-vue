<template>
  <Section id="sweetgreen" class="no-padding">
    <job-article
      :backgroundImage="imageUrl"
      :title="title"
      :subtitle="subtitle"
      :side="side"
    >
      <vue-simple-markdown :source="description" />
      <br /><br />
      <ui-button :link="project.url" :text="project.label" />
    </job-article>
  </Section>
</template>

<script>
import Bar from "~/components/Bar.vue";
import UiButton from "~/components/Button.vue";
import Wrapper from "~/components/Wrapper";
import JobArticle from "~/components/Article";
import Section from "~/components/Section";

export default {
  components: {
    Bar,
    Wrapper,
    JobArticle,
    Section,
    UiButton
  },
  props: {
    side: String,
    title: String,
    date: String,
    description: String,
    imageUrl: String,
    company: {
      type: Object,
      default: () => ({})
    },
    project: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    subtitle() {
      return `Working for ${this.company.label} (${this.date})`;
    }
  }
};
</script>
