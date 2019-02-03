<template>
  <section id="sweetgreen" class="section bg-salad">
    <div class="article experience left" >
      <wrapper v-bind:withBorders="true" class='h100'>
        <div class="job--description c-white">
          <h3 class="job--title c-white" data-aos='fade' data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out">
            Sweetgreen Android App
            <br />
            <span class='job--tittle--sub c-base'>Working by MatterSupply.co</span>
          </h3>
          <p data-aos='fade'>this is a nice description</p>
        </div>
      </wrapper> 
    </div>
    <bar/>
  </section>
</template>

<script>
import Bar from '~/components/Bar.vue'
import Wrapper from '~/components/Wrapper'

export default {
  components: {
    Bar,
    Wrapper,
  },
}

</script>
<style scoped>

  .article {
    background: black;
    height: 100%;
    position: relative;
    width: 60%;
    padding: 3rem;
    color: white;
  }
  .job--title {
    font-size: 4rem;
    line-height: 2.5rem;
    border-bottom: white solid 4px;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
  }

  .job--tittle--sub {
    font-size: 1rem;
  }

  .bg-salad {
    background-image: url(https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
  }

  .left {
    
  }

</style>

