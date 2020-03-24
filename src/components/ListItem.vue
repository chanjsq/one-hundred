<template>
  <div>
    <div ref="text">{{ text }}</div>
  </div>
</template>

<script>
import CircleType from 'circletype';

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  mounted() {
    new CircleType(this.$refs.text).radius(1000);
  },
};
</script>

<style scoped>
</style>
