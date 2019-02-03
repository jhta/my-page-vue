<template>
  <div>
    <section id="gradient" class="section section-2 gradient">
      <wrapper v-bind:withBorders="true">
        <h1 class='gradient-effect'>What I do?</h1>
        <div data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out" class='text-envolve'>
          <p
            class="p2 text-center">
              Sketch. Create.  Code.  Improve.
          </p>
        </div>

      </wrapper>
      <bar v-bind:goTo='"#letsWander"'/>
    </section>
  </div>
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


<style>
  p {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
  }


  h1 {
    text-align: center;
    margin-bottom: 0rem;
    font-size: 4rem;
    transition: .3s ease-out all;
    margin-top: 0;
    font-family: 'Staatliches', cursive ;
  }

  .gradient-effect, .first-title:hover {
    text-shadow:5px 5px 2px #00ffde, -5px -5px 2px #ff9393;
  }

  .p2 {
    background: -webkit-linear-gradient(left, #ff9393, #00ffde);
    -webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
    padding: .2rem;
    font-weight: bold;
  }
 .gradient {
    background: #ff9393;
    /* animation-name: bar; */
    animation-duration: 10s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    background: -webkit-linear-gradient(left, #ff9393 10% , #00ffde,  #ff9393 90%);
    background-size: 200% 100%;
    /* display: flex; */
    /* justify-content: center; */
  }



@media (min-width: 768px) {
  h1 {
    font-size: 8rem;
    line-height: 10rem;
  }

  p {
    font-size: 1.5rem;
  }
}

@media (min-width: 1080px) {
  h1 {
    font-size: 10rem;
    line-height: 12rem;
  }

  p {
    font-size: 2rem;
  }

  .gradient-title {
    padding: 3rem;
    font-size: 15rem;
    line-height: 10rem;
  }
}
</style>

