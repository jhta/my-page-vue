<template>
  <div class="wrapper-2">
    <Section id="gradient" class="section-2 gradient">
      <wrapper v-bind:withBorders="true">
        <div class="second-content">
          <h1 class="gradient-effect">Work experience</h1>
          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            class="text-envolve"
          >
            <p class="secondary-text text-center">Sketch. Create. Code. Improve.</p>
          </div>
        </div>
      </wrapper>
      <bar goTo="#letsWander"/>
    </Section>
  </div>
</template>

<script>
import Bar from "~/components/Bar.vue";
import Wrapper from "~/components/Wrapper";
import Section from "~/components/Section";

export default {
  components: {
    Bar,
    Wrapper,
    Section
  }
};
</script>


<style scoped>
h1 {
  text-align: center;
  margin-bottom: 0rem;
  font-size: 4.5rem;
  line-height: 5rem;
  transition: 0.3s ease-out all;
  margin-top: 0;
  font-family: "Staatliches", cursive;
}

.section-2 {
  top: -2rem;
}

.wrapper-2 {
  margin-bottom: -2rem;
}

.gradient-effect,
.first-title:hover {
  text-shadow: 2px 2px 2px #00ffde, -2px -2px 2px #ff9393;
}

.secondary-text {
  width: 100%;
  background: -webkit-linear-gradient(left, #ff9393, #00ffde);
  /* background-color: #00ffde; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.2rem;
  font-weight: bold;
  font-size: 1rem;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.gradient {
  background: #ff9393;
  animation-name: gradientBG;
  animation-duration: 6s;
  /* animation-delay: 1s; */
  animation-iteration-count: infinite;
  background: -webkit-linear-gradient(
    -20deg,
    #ff9393 10%,
    #40e4cb,
    #00ffde,
    #ff9393 90%
  );
  /* background: -webkit-linear-gradient(left, #ff9393, #00ffde); */
  background-size: 400% 400%;
}

.second-content {
  padding: 3rem 1rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 8rem;
    line-height: 8rem;
  }

  .secondary-text {
    font-size: 1.5rem;
  }

  .second-content {
    padding: 3rem;
  }
}

@media (min-width: 1080px) {
  h1 {
    font-size: 10rem;
    line-height: 12rem;
  }

  .secondary-text {
    font-size: 2rem;
  }

  .second-content {
    padding: 4rem;
  }
}
</style>

