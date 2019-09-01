<template>
  <Section id="platzi" class="no-padding">
    <job-article
      :backgroundImage='bg'
      :side="'right'"
      :title="'Platzi (YC 2015)'"
      :subtitle="'Working for Platzi (Jun 2015 - Oct 2016)'"
    >
      <p>
        I worked creating the best video education experience in LATAM developing for the full platform (VoD, video streaming, frontpage, administration, support)
        providing new features and bug fixiging for improve the user experience and 
        the website retention. We made a big migration from technologies like JQuery and Backbone to
        React/Redux.
        <br /><br />
        Our Stack:
        <br/><br/>
        <ul>
          <li>React</li>
          <li>Webpack for module bundle managment</li>
          <li>Routing with React Router</li>
          <li>State managment with Redux</li>
          <li>Server Render with node/React</li>
          <li>Sockets with socket.io</li>
          <li>A lot of third party services as Stripe, Paypal, Front, Mailchimp, etc</li>
          <li>Our custom theme using stylus.</li>
        </ul>
      </p>
        <br/><br/>
      <div class="gradient button--cover">
        <a class="link" href="https://platzi.com/">Visit the website</a>
      </div>
    </job-article>
    <!-- <bar/> -->
  </Section>
</template>

<script>
import Bar from '~/components/Bar.vue'
import Wrapper from '~/components/Wrapper'
import JobArticle from '~/components/Article'
import Section from '~/components/Section'

export default {
  components: {
    Bar,
    Wrapper,
    JobArticle,
    Section
  },

  data() {
    return {
      bg: 'https://images.unsplash.com/photo-1503444200347-fa86187a2797?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80'
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

