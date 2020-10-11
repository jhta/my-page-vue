<template>
  <div>
    <job
      v-for="(job, index) in jobs"
      :key="job.id"
      v-bind="job"
      :side="index % 2 !== 0 ? 'right' : 'left'"
    />
  </div>
</template>

<script>
import Job from "./job";

export default {
  components: {
    Job
  },
  props: {
    jobs: {
      type: Array,
      default: () => []
    }
  }
};
</script>
