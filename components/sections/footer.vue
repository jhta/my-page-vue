<template>
  <footer class="footer gradient">
      <external-links />
      <p>me@jeison.xyz</p>
  </footer>
</template>

<script>
import Bar from '~/components/Bar.vue'
import Wrapper from '~/components/Wrapper'
import Section from '~/components/Section'

import ExternalLinks from  '~/components/ExternalLinks'

export default {
  components: {
    Bar,
    Wrapper,
    Section,
    ExternalLinks,
  },
}
</script>


<style scoped>

footer {
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 10rem;
}

p {
  margin-top: 1rem;
  font-size: 18px;
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
</style>

