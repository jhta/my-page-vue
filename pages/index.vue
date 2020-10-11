<template>
  <div>
    <me-first v-bind="main" />
    <me-second />
    <me-third />
    <sweetgreen />
    <nike />
    <espn />
    <platzi />
    <workep />
    <ui-footer :links="main.links.link" />
  </div>
</template>

<script>
import { fetchHomePageData } from "~/services/cms";
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
  },
  async asyncData() {
    return fetchHomePageData();
  }
};
</script>
