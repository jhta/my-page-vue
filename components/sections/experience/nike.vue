<template>
  <Section id="nike" class="no-padding">
    <job-article :backgroundImage='bg' :side="'right'" :title="'Nike'" :subtitle="'Working for MatterSupply.co (Aug 2018 - Nov 2018)'">
      <p>
        "Just do it campaign". We had worked implementing a static/generated website using a CMS structure,
        perfect for a fast rendering site and using all the power of Gatsby+React for customize the CMS entries
        and improve the SEO and performance. We used Contentful as CMS provider, that helped us to made a completly
        moldable web structure based on the content also consume this data as GraphQL API queries.
        <br /><br />
        Our Stack:
        <br/><br/>
        <ul>
          <li>React+Gatsby</li>
          <li>Contenful as CMS data provider</li>
          <li>Serverless AWS Lambda as the only endpoint for the static website.</li>
          <li>Cloudinary as CDN for static content and image manipulation</li>
          <li>GraphQL for consume the Contenful graphql-data.</li>
          <li>Apollo client, for use GraphQL on our web.</li>
          <li>Redux, Reselect and RxJS for make possible the side effects.</li>
          <li>Our custom theme using emotion.</li>
        </ul>
      </p>
      <br/><br/>
      <a href="https://justdoit.nike.com/">Visit the website</a>
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
      bg: 'https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2192&q=80'
    }
  }
}

</script>
<style scoped>

  ul {
    list-style-type: square;
    padding-left: 2rem;
  }
</style>

