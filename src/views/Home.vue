<template>
  <div class="home" @click="playMusic">
    <div class="music-btn"></div>
    <audio ref="bgMusic" src="@/assets/audio/bg.mp3"></audio>
    <img class="title" src="@/assets/img/title.png">
    <img class="eye" src="@/assets/img/eye.png">
    <img class="eye-outline" src="@/assets/img/eye-outline.png">
    <img class="text" src="@/assets/img/text.png">
    <div class="slide">
      <img class="slide-line" src="@/assets/img/slide-line.png">
      <img class="slide-text" src="@/assets/img/slide-text.png">
      <div class="slide-btn">
        <img class="slide-btn-inner" src="@/assets/img/slide-btn-inner.png">
        <img class="slide-btn-outer" src="@/assets/img/slide-btn-outer.png">
      </div>
    </div>
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

<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fbec71 url(~@/assets/img/side.jpg) repeat-y 0 0 / 40px;
  animation: side-scroll 25s linear infinite both;
}

.music-btn {
  position: absolute;
  top: 25px;
  right: 23px;
  width: 22px;
  height: 52px;
  background: url(~@/assets/img/music-btn.png) no-repeat center / contain;
}

.title {
  position: absolute;
  left: 59px;
  top: 159px;
  width: 221px;
  height: 134px;
}

.eye {
  position: absolute;
  top: 148px;
  left: 277px;
  width: 34px;
  height: 19px;
}

.eye-outline {
  position: absolute;
  top: 125px;
  left: 262px;
  width: 66px;
  height: 63px;
  animation: spin 7s linear infinite both;
}

.text {
  position: absolute;
  left: 102px;
  top: 341px;
  width: 240px;
  height: 132px;
}

.slide {
  position: absolute;
  top: 580px;
  left: 165px;
}

.slide-line {
  position: absolute;
  top: 5px;
  width: 104px;
  height: 24px;
}

.slide-text {
  position: absolute;
  left: 37px;
  width: 50px;
  height: 14px;
}

.slide-btn {
  position: absolute;
  left: 104px;
}

.slide-btn-inner,
.slide-btn-outer {
  position: absolute;
  top: 5px;
  width: 24px;
  height: 24px;
}

.slide-btn-outer {
  animation: breathe 1s linear infinite alternate both;
}

@keyframes side-scroll {
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

@keyframes breathe {
  from {
    width: 24px;
    height: 24px;
  }
  to {
    width: 62px;
    height: 62px;
    margin-left: -19px;
    margin-top: -19px;
  }
}
</style>
