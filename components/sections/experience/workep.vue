<template>
  <Section id="workep" class="no-padding">
    <job-article
      :backgroundImage="bg"
      :title="'Workep'"
      :subtitle="'Working for Workep (Feb 2014 - Jul 2015)'"
    >
      <p>
        As tech founder my work was help to take the technical decitions about code, implementations,
        third party services, lead the development and make possible the results in crazy deadlines
        for our customers and investors. We implement all our architecture in AWS  and run an API  
        for data procesing and a server render with React.
        <br /><br />
        Our Stack:
        <br/><br/>
        <ul>
          <li>React for the UI</li>
          <li>Gulp + Browserify for module/task runner</li>
          <li>State managment with Flux</li>
          <li>Render server with Node Hapi/React</li>
          <li>API for data manipulation created with Node Hapi</li>
          <li>Mongo and Redis as Database</li>
          <li>Sockets with socket.io for our chat system</li>
          <li>AWS cloud arquitecture (S3, CloudFront, Beanstalk)</li>
        </ul>
      </p>
      <br/><br/>
      <div class="gradient button--cover">
        <a class="link" href="https://workep.com/">Visit the website</a>
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
      // bg: 'https://images.unsplash.com/photo-1550867395-83e15953bc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2467&q=80'
      bg: 'https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80'
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

