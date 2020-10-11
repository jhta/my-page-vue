<template>
  <div>
    <me-first v-bind="main" />
    <me-second />
    <me-third />
    <experience :jobs="allJobs" />
    <ui-footer :links="main.links.link" />
  </div>
</template>

<script>
import { fetchHomePageData } from "~/services/cms";
import MeFirst from "~/components/sections/me/first";
import MeSecond from "~/components/sections/me/second";
import MeThird from "~/components/sections/me/third";

const Experience = () => import("~/components/sections/experience");

import UiFooter from "~/components/sections/footer";

export default {
  components: {
    MeFirst,
    MeSecond,
    MeThird,
    UiFooter,
    Experience
  },
  async asyncData() {
    return fetchHomePageData();
  }
};
</script>
