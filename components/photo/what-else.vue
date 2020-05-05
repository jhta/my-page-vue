
<template>
    <Section id="gradient" class="gradient">
      <wrapper withBorders>
        <div class="second-content">
          <h1 class='gradient-effect'>But... what else I do?</h1>
        </div>
      </wrapper>
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

  h1 {
    text-align: center;
    margin-bottom: 0rem;
    font-size: 4.5rem;
    line-height: 5rem;
    transition: .3s ease-out all;
    margin-top: 0;
    font-family: 'Staatliches', cursive ;
  }

  .section-2 {
    top: -2rem;
  }

  .wrapper-2 {
    margin-bottom: -2rem;
  }

  .gradient-effect, .first-title:hover {
    text-shadow:5px 5px 2px #00ffde, -5px -5px 2px #ff9393;
  }

  .secondary-text {
    /* background: -webkit-linear-gradient(left, #ff9393, #00ffde); */
    background-color: #00ffde;
    -webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
    padding: .2rem;
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
    background: -webkit-linear-gradient(-20deg, #ff9393 10%,#40E4CB, #00ffde, #ff9393 90%);
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

