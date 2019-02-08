<template>
  <section id="sweetgreen" class="section no-padding">
    <job-article :backgroundImage='bg' :title="'Sweetgreen Android App'" :subtitle="'Working by MatterSupply.co'">
      <p>
        I have been working with an amazing team developing the sweetgreen android application
        using React Native as base of our development.
        We had done big challenges trying to create the best mobile user experiences, working over the common RN limit,
        improvint a lot the performance with custom base components, custom screen controllers and great use of the
        state managment, making possible the accessibility and the clean navigation.
        <br /><br />
        Our Stack:
        <br/><br/>
        <ul>
          <li>React Native</li>
          <li>Serverless AWS Lambda as the only endpoint for our GraphQL server.</li>
          <li>GraphQL for consume, optimize, parse and 'clean' the data.</li>
          <li>Apollo server and Apollo client, for use GraphQL on server and app.</li>
          <li>Redux, Reselect and RxJS for make possible the side effects.</li>
          <li>Our custom theme using Styled components.</li>
          <li> CI with fastline and appcenter.</li>
        </ul>
      </p>
    </job-article>
    <!-- <bar/> -->
  </section>
</template>

<script>
import Bar from '~/components/Bar.vue'
import Wrapper from '~/components/Wrapper'
import JobArticle from '~/components/Article'

export default {
  components: {
    Bar,
    Wrapper,
    JobArticle,
  },

  data() {
    return {
      bg: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
    }
  }
}

</script>
<style scoped>

  p {
    font-size: 1.5rem;
  }

  ul {
    list-style-type: square;
    padding-left: 2rem;
  }
</style>

