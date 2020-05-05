<template>
  <div class="gradient button--cover">
    <a class="button--content" target="_blank" :href="link">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ["text", "link"]
};
</script>

<style scoped>
.button--cover {
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  display: inline-block;
}

.button-cover:hover > .button--content {
  color: black !important;
}

.button--content {
  background: black;
  color: white;
  padding: 0.5rem;
  transition: all ease-in 0.3s;
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
