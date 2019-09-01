<template>
  <div>
    <me-first/>
    <me-second />
    <me-third />
    <sweetgreen />
    <nike />
    <espn />
    <platzi />
    <workep />
    <ui-footer />
  </div>
</template>

<script>
import MeFirst from '~/components/sections/me/first'
import MeSecond from '~/components/sections/me/second'
import MeThird from '~/components/sections/me/third'

import Sweetgreen from '~/components/sections/experience/sweetgreen'
import Espn from '~/components/sections/experience/espn'
import Nike from '~/components/sections/experience/nike'
import Platzi from '~/components/sections/experience/platzi'
import Workep from '~/components/sections/experience/workep'

import UiFooter from '~/components/sections/footer'

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
    UiFooter,
  },
}
</script>


