<template>
  <div>
    <section class='section'>

      <wrapper>
        <h1>Jeison Higuita</h1>
        <p> Software Developer, Lifelong learner and Traveler.</p>
        <external-links></external-links>
      </wrapper>
    </section>
    <section id="gradient" class="section section-2 gradient">
      <wrapper>
        <h1 class='gradient-effect'>What I do?</h1>
        <p class="p2"> Create.  Code.  Improve.</p>
      </wrapper>
    </section>
    <bar></bar>
  </div>
</template>

<script>
import Bar from '~/components/Bar.vue'
import ExternalLinks from  '~/components/ExternalLinks'
import Wrapper from '~/components/Wrapper'

export default {
  components: {
   Bar,
   ExternalLinks,
   Wrapper
  },
}
</script>


<style>
  p {
    font-size: 1.5rem;
    text-align: center;
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
  .gradient-effect, h1:hover {
    text-shadow:5px 5px 2px #00ffde, -5px -5px 2px #ff9393;
  }
  @keyframes bar { 
      0%{background-position:0% 100%}
      50%{background-position:100% 75%}
      100%{background-position:0% 100%}
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

  .p2 {
    background: -webkit-linear-gradient(left, #ff9393 10% , #00ffde,  #ff9393 90%);
    font-weight: bold;
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
}
</style>

