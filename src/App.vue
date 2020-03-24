<template>
  <div>
    <router-view @play="playMusic" />
    <audio ref="bgMusic" src="@/assets/audio/bg.mp3"></audio>
  </div>
</template>

<script>
export default {
  methods: {
    playMusic() {
      const { bgMusic } = this.$refs;
      if (bgMusic.paused) {
        bgMusic.play();
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.scrolling-side,
.scrolling-side-right {
  background: url(~@/assets/img/side.jpg) repeat-y 0 0 / 40px;
  animation: side 25s linear infinite both;
}

.scrolling-side-right {
  background-position-x: right;
}

@keyframes side {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: -1352px;
  }
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
