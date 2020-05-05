<template>
  <Section>
    <h2>“Taking an image, freezing a moment, reveals how rich reality truly is.”</h2>
    <p>
      My photos:
      <a href="unsplash.com/@jeison">unsplash.com/@jeison</a>
    </p>
    <img v-if="showImage" class="init-image" :src="initialImage">
    <div class="slider">
      <client-only>
        <vue-displacement-slideshow
          :images="images"
          displacement="https://vue-displacement-slideshow.now.sh/static/img/map.3408054.png"
          :intensity="0.2"
          :speedIn="1.4"
          :speedOut="1.4"
          ease="expo.out"
          ref="slideshow"
        />
      </client-only>
    </div>
  </Section>
</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import Section from "~/components/Section.vue";

export default {
  components: {
    VueDisplacementSlideshow,
    Section
  },
  data() {
    return {
      showImage: true,
      initialImage:
        "https://images.unsplash.com/photo-1568579161643-7b44db5d03e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=100"
    };
  },
  computed: {
    images() {
      return [
        "https://images.unsplash.com/photo-1568579161643-7b44db5d03e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=100",
        "https://images.unsplash.com/photo-1546458544-801cbd163951?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=100",
        "https://images.unsplash.com/photo-1529689989216-0d8698e129c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=100"
      ];
    }
  },
  methods: {
    init() {
      //We loop through all our images by calling the 'next' method of our component every 2 seconds
      setInterval(() => {
        this.$refs.slideshow.next();
      }, 4000);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
h2 {
  max-width: 320px;
  font-size: 1.2rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: black;
  color: white;
  padding: 1rem;
  z-index: 10;
}

p {
  font-size: 2rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-color: black;
  color: white;
  padding: 1rem;
  z-index: 10;
}

a:hover {
  color: #3273dc;
  text-decoration: underline;
}

.slider {
  position: absolute;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  z-index: 5;
}

.init-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>