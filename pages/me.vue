<template>
  <div>
    <section>
      <div class="wrapper">
        <h1>Jeison Higuita</h1>
        <p> Software Developer, Lifelong learner and Traveler.</p>
        <external-links></external-links>
      </div>
    </section>
    <bar></bar>
  </div>
</template>

<script>
import Bar from '~/components/Bar.vue'
import ExternalLinks from  '~/components/ExternalLinks'

export default {
  components: {
   Bar,
   ExternalLinks
  }
}
</script>


<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    height: 100%;
    min-height: 100vh;
    width: 100wh;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
    border: 1px solid red;
    position: relative;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1080px;
    border: 1px solid red;
    position: relative;
    padding: 1rem;

  }

  p {
    font-size: 1rem;
    /* text-align: center; */
    margin: 0;
    margin-bottom: 2rem;
  }

  h1 {
    /* text-align: center; */
    margin-bottom: 0rem;
    font-size: 4rem;
    transition: .3s ease-out all;
    margin-top: 0;
  }
  h1:hover {
    text-shadow:5px 5px 2px #00ffde, -5px -5px 2px #ff9393;
  }

  @media (min-width: 768) {
    h1 {
      font-size: 8rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
</style>

