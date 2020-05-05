
<template>
  <div>
    <photo-slider/>
    <ui-footer/>
  </div>
</template>

<script>
const PhotoSlider = () => import("~/components/photo/slider");
import UiFooter from "~/components/sections/footer";

export default {
  components: {
    UiFooter,
    PhotoSlider
  }
};
</script>


