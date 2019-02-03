<template>
  <section id='letsWander' class="section bg-black">
    <wrapper>
      <h1 data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out" class='p2 gradient-title '>let's wander</h1>
    </wrapper>

  <bar :background='"black"' :goTo='"#sweetgreen"'></bar>
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
  .gradient-title {
    letter-spacing: .5rem;
    font-size: 6rem;
    font-style: italic;
    line-height: 6rem;
    border-bottom: 1rem solid white;
  }


  .p2 {
    background: -webkit-linear-gradient(left, #ff9393, #00ffde);
    -webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
    padding: .2rem;
    font-weight: bold;
  }

@media (min-width: 1080px) {
  .gradient-title {
    padding: 3rem;
    font-size: 15rem;
    line-height: 10rem;
  }
}

</style>

