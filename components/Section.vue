
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
}


@media (min-width: 1080px) {
  .section {
    height: 100vh;
  }
}

</style>
