<template>
  <div class="article-wrapper" :class="{ reverse: side === 'right'}">
    <div class="article experience" :class='side' >
      <div class="article-container">
      <wrapper v-bind:withBorders="true" class='h100'>
        <div class="job--description c-white">
          <h3 class="job--title c-white" data-aos='fade' data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out">
              {{ title }} 
            <br />
            <span class='job--tittle--sub c-base'>{{ subtitle }} </span>
          </h3>
          <p data-aos='fade'>
            <slot></slot>
          </p>
        </div>
      </wrapper> 
      </div>
    </div>
    <div class="article-image" :style="{ backgroundImage: 'url('+ backgroundImage +')'}"></div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Wrapper from '~/components/Wrapper'

export default {
 props: {
    side: VueTypes.oneOf(['left', 'right']).def('left'),
    title: VueTypes.string,
    subtitle: VueTypes.string, 
    backgroundImage: VueTypes.string,
  },
  components: {
    Wrapper,
  },
}

</script>
<style scoped>


  .article {
    height: 100%;
    position: relative;
    width: 60%;
    color: white;
  }

  .article-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .article-wrapper.reverse {
    flex-direction: row-reverse;
  }

  .article-container {
    padding: 2rem;
    background: black;
    height: 100%;
  }

  .article-image {
    height: 100%;
    width: 40%;
    background: white;
    /* background-image: url(https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center; 
    padding: 0;
 
  }

  .job--title {
    font-size: 4rem;
    line-height: 2.5rem;
    border-bottom: white solid 4px;
    margin-bottom: 1.5rem;
    padding-bottom: 2rem;
  }

  .job--tittle--sub {
    font-size: 1rem;
  }

  p {
    font-size: 1.5rem;
  }
</style>

