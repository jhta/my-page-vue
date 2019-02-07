<template>
    <div class="article experience left" :class='side' >
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
</template>

<script>
import Wrapper from '~/components/Wrapper'

export default {
 props: {
    side: {
      default: 'left'
    },
    title: {
      default: ''
    },
    subtitle: {
      default: ''
    }
  },
  components: {
    Wrapper,
  },
}

</script>
<style scoped>

  .article.left {
    left: 0 !important;
  }

  .article.right {
    left: 40% !important;
  }


  .article {
    height: 100%;
    position: relative;
    width: 60%;
    color: white;
  }

  .article-container {
    padding: 2rem;
    background: black;
    height: 100%;
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

</style>

