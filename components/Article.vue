<template>
  <div class="article-wrapper" :class="{ reverse: side === 'right'}">
    <div class="article experience" :class='side' >
      <div class="article-container">
        <wrapper v-bind:withBorders="true" class='h100' v-bind:planeResponsive="true">
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
  .article-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column-reverse;
  }

  .article {
    min-height: 100%;
    position: relative;
    color: white;
    background: black;
  }


  .article-container {
    padding: 1rem;
    height: 100%;
  }

  .article-image {
    height: 300px;
    background: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center; 
    padding: 0;
  }

  .job--description {
    padding: 2rem 0;
  }

  .job--title {
    font-size: 2rem;
    line-height: 2rem;
    border-bottom: white solid 4px;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .job--tittle--sub {
    font-size: 0.8rem;
  }

  p {
    font-size: 1rem;
  }


@media (min-width: 764px) {
  .experience {
    flex-grow: 2;
  }

  .article-image {
    height: 400px;
  }

  .article-container {
    padding: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .job--description {
    padding: 2rem 1rem;
  }
}

@media (min-width: 1080px) {
  .article {
    width: 60%;
    height: 100%;
  }

  .article-wrapper {
    height: 100%;
    flex-direction: row;
  }

  .article-wrapper.reverse {
    flex-direction: row-reverse;
  }

  .article-image {
    height: 100%;
    width: 40%;
    background: white;
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

  .job--description {
    padding: 3rem 1.5rem;
  }
}

@media (min-width: 1620px) {
  p, .job--tittle--sub {
    font-size: 1.5rem;
  }
}
</style>

