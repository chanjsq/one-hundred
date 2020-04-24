<template>
  <div>
    <div
      v-show="selected"
      class="img"
      :style="{ backgroundImage: `url(/things/${id}.png)` }"
      @click="toggle"
    >
    </div>
    <div
      v-show="!selected"
      ref="text"
      @click="toggle"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
import CircleType from 'circletype';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    radius: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggle() {
      this.selected = !this.selected;
      this.$emit('toggle', this.id);
    },
  },
  mounted() {
    new CircleType(this.$refs.text).radius(this.radius);
  },
};
</script>

<style scoped>
.img {
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  width: 70px;
  height: 70px;
  background-size: 100%;
  border-radius: 50%;
  box-shadow: -3px 3px #a8a8a8;
}
</style>
