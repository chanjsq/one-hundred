<template>
  <div>
    <div class="text" ref="text">{{ text }}</div>
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
    radius: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    new CircleType(this.$refs.text).radius(this.radius);
  },
};
</script>

<style scoped>
</style>
