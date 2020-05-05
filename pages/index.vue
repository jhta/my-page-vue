<template>
  <div>
    <me-first/>
    <me-second/>
    <me-third/>
    <sweetgreen/>
    <nike/>
    <espn/>
    <platzi/>
    <workep/>
    <ui-footer/>
  </div>
</template>

<script>
import MeFirst from "~/components/sections/me/first";
import MeSecond from "~/components/sections/me/second";
import MeThird from "~/components/sections/me/third";

const Sweetgreen = () => import("~/components/sections/experience/sweetgreen");
const Espn = () => import("~/components/sections/experience/espn");
const Nike = () => import("~/components/sections/experience/nike");
const Platzi = () => import("~/components/sections/experience/platzi");
const Workep = () => import("~/components/sections/experience/workep");

import UiFooter from "~/components/sections/footer";

export default {
  components: {
    MeFirst,
    MeSecond,
    Sweetgreen,
    Espn,
    MeThird,
    Nike,
    Platzi,
    Workep,
    UiFooter
  }
};
</script>


