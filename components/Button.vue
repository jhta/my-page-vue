<template>
  <div class="gradient button--cover">
    <a class="button--content" target="_blank" :href="link">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ['text', 'link']
}
</script>

<style scoped>
.button--cover {
  padding: .5rem .2rem .5rem .2rem;
  display: inline-block;
}



.button--content {
  background: black;
  color: white;
  padding: .5rem;
  transition: all ease-in .3s;
}

.button--content:hover {
  background: transparent;
  color: black;
  text-decoration: underline;
}

.button--content:active {
  font-weight: bold;
}

</style>
