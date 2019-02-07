<template>
  <section id="sweetgreen" class="section bg-ball">
    <job-article :side="'right'" :title="'Sweetgreen Android App'" :subtitle="'Working by MatterSupply.co'">
            I have been working with an amazing team developing the sweetgreen android application
            using React Native as base of our development.
            We had done big challenges trying to create the best mobile user experiences, working over the common RN limit,
            improvint a lot the performance with custom base components, custom screen controllers and great use of the
            state managment, making possible the accessibility and the clean navigation.

            Our stack:
            * React Native
            * serverless AWS Lambda as the only endpoint for our GraphQL server.
            * GraphQL for consume, optimize, parse and 'clean' the data.
            * Apollo server and Apollo client, for use GraphQL on server and app.
            * Redux, Reselect and RxJS for make possible the side effects.
            * Our custom theme using Styled components.
            * CI with fastline and appcenter.
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
}
</script>

<style scoped>
  .bg-ball{
    /* background-image: url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'); */
    background-image: url('https://images.unsplash.com/photo-1498846323785-c40aafaaa4f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1858&q=80');
    background-repeat: no-repeat;
    background-size: contain;
    padding: 0;
  }


</style>

