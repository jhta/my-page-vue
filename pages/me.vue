<template>
  <div>
    <section class='section'>

      <wrapper v-bind:withBorders="true">
        <h1 class="first-title">Jeison Higuita</h1>
        <p class="text-center"> Software Developer, Lifelong learner and Traveler.</p>
        <external-links></external-links>
      </wrapper>

    <bar v-bind:whiteArrow='true'></bar>
    </section>
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

        <bar></bar>
    </section>
    <section class="section black">
      <wrapper>
        <h1 data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out" class='p2 gradient-title '>let's wander</h1>
      </wrapper>

    <bar v-bind:background='"black"'></bar>
    </section>
    <section class="section bg-salad">
      <div class="article experience left" >
     <wrapper v-bind:withBorders="true" class='h100'>
       <div class="job--description c-white">
         <h3 class="job--title c-white" data-aos='fade' data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out">
           Sweetgreen
         </h3>

         <p data-aos='fade'>this is a nice description</p>
       </div>
      </wrapper> 


      </div>
    </section>
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
    color: white;
    border-bottom: white solid 4px;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  .text-center {
    text-align: center;
  }
  .black {
    background: black;
  }

  .c-white {
    color: white !important;
  	-webkit-text-fill-color: white !important;
  }

  .c-black {
    color: black !important;
  	-webkit-text-fill-color: black !important;
    
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
  @keyframes bar { 
      0%{background-position:0% 100%}
      50%{background-position:100% 75%}
      100%{background-position:0% 100%}
  }

  .gradient-title {
    letter-spacing: .5rem;
    font-size: 6rem;
    font-style: italic;
    line-height: 6rem;
    border-bottom: 1rem solid white;
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
    background: -webkit-linear-gradient(left, #ff9393, #00ffde);
    -webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
    padding: .2rem;
    font-weight: bold;
  }


  .text-envolve {
    background: #4a4a4a;
  }

  .bg-salad {
    background-image: url(https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
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

