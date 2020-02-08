<template>
  <footer class="gradient">
    <div class="footer">
      <external-links />
    </div>
    <div class="copyright">
      <p>me@jeison.xyz</p>
    </div>
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
  height: 20rem;
  flex-direction: column;
  align-items: center;
  display: flex;
}

.footer {
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  height: 15rem;
  background: transparent;
}

.copyright {
  width: 100%;
  border-top: 4px solid black;
  height: 5rem;
  font-size: 1.5rem;
  flex-direction: column;
  align-items: center;
  display: flex;
 
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

