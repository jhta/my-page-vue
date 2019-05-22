
<template>
  <section class="section"><slot></slot></section>
</template>


<script>
export default {
  props: ['fixed']
}
</script>


<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  padding: 0.5rem;
}


@media (min-width: 768px) {
  .section {
    padding: 1rem;
  }
}
@media (min-width: 1080px) {
  .section {
    height: 100vh;
  }
}
</style>