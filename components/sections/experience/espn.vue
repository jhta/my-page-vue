<template>
  <Section id="espn" class="no-padding">
    <job-article
      :backgroundImage="bg"
      :title="'ESPN'"
      :subtitle="'Working for Globant (Feb 2017 - Aug 2018)'"
    >
      <p>
        I worked with a distributed team in Colombia, Argentina, Uruguay and US developing the new version
        for espn.com frontpage, schedule and diferents leagues a competitions. Our focus was the high Quality,
        full support for a lot of devices, countries, languages and timezones, also a 90% test coverage and
        fast rendering for support one of the most visited websites in US. We made a big migration from BackboneJS
        to a server rendered React/Node arquitecture.
        <br /><br />
        Our Stack:
        <br/><br/>
        <ul>
          <li>React</li>
          <li>Webpack for module bundle managment</li>
          <li>Our own components playbook</li>
          <li>State managment with Mobx</li>
          <li>Our own server proxy for consume third party services (Ads, Analytics, I18N, etc)</li>
          <li>Our own server render and routing managment with Express</li>
          <li>Mocha/Chai/Enzyme as expect for unit and integration testing</li>
        </ul>
      </p>
      <br/><br/>
      <div class="gradient button--cover">
        <a class="link" href="https://espn.com/">Visit the website</a>
      </div>

    </job-article>
  </Section>
</template>

<script>
import Bar from '~/components/Bar.vue'
import Wrapper from '~/components/Wrapper'
import JobArticle from '~/components/Article'
import Section from '~/components/Section.vue'

export default {
  components: {
    Bar,
    Wrapper,
    JobArticle,
    Section,
  },

  data() {
    return {
      bg: 'https://images.unsplash.com/photo-1486128105845-91daff43f404?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80'
      // bg:'https://images.unsplash.com/photo-1498846323785-c40aafaaa4f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1858&q=80'
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: square;
    padding-left: 2rem;
  }


.link {
  background: black;
  color: white;
  padding: .5rem;
}

.button--cover {
  padding: .5rem .2rem .5rem .2rem;
  display: inline-block;
}
</style>

