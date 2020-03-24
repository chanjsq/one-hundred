<template>
  <div class="home">
    <div class="music-btn" @click="playMusic"></div>
    <audio ref="bgMusic" src="@/assets/audio/bg.mp3"></audio>
  </div>
</template>

<script>
export default {
  methods: {
    playMusic() {
      this.$refs.bgMusic.play().catch(() => console.log('click to play music'));
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fbec71 url(~@/assets/img/side.jpg) repeat-y 0 0 / 40px;
  animation: scrolling-side 20s linear infinite both;
}

.music-btn {
  position: absolute;
  top: 25px;
  right: 23px;
  width: 22px;
  height: 52px;
  background: url(~@/assets/img/music-btn.png) no-repeat center / contain;
}

@keyframes scrolling-side {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: -1352px;
  }
}
</style>
