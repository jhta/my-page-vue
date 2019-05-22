<template>
  <Section id='letsWander' class="bg-black">
    <wrapper>
      <h1 data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        class="title gradient-title"
      >
        what have I code?
        </h1>
    </wrapper>

  <bar :background='"black"' :goTo='"#sweetgreen"'></bar>
  </Section>
</template>

<script>
import Bar from '~/components/Bar.vue'
import Wrapper from '~/components/Wrapper'
import Section from '~/components/Section'

export default {
  components: {
    Bar,
    Wrapper,
    Section,
  },
}
</script>

<style scoped>
  .title {
    letter-spacing: .5rem;
    font-size: 4rem;
    font-style: italic;
    line-height: 4rem;
    border-bottom: 1rem solid white;
    font-weight: lighter;
    font-family: 'Staatliches', cursive ;
  }


  .gradient-title {
    background: -webkit-linear-gradient(left, #ff9393, #00ffde);
    -webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
    padding: .2rem;
  }

@media (min-width: 764px) {
  .gradient-title {
    font-size: 8rem;
    line-height: 8rem;
  }
}

@media (min-width: 1080px) {
  .gradient-title {
    padding: 3rem;
    font-size: 10rem;
    line-height: 10rem;
  }
}

</style>

