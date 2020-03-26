<template>
  <div class="app" @click="playMusic">
    <transition name="slide-left">
      <router-view @login="saveName" />
    </transition>
    <audio ref="bgMusic" src="@/assets/audio/bg.mp3"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    playMusic() {
      const { bgMusic } = this.$refs;
      if (bgMusic.paused) {
        bgMusic.play();
      }
    },
    saveName(name) {
      this.name = name;
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Heiti SC', 'Helvetica Neue', Helvetica, sans-serif;
}

.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

// 页面切换过渡

.slide-left-enter-active,
.slide-left-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 1s;
}

.slide-left-enter-to,
.slide-left-leave {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100vw);
}

.slide-left-enter {
  transform: translateX(100vw);
}

// 滚动侧栏图片

.scrolling-side::before,
.scrolling-side-right::after {
  content: '';
  position: absolute;
  top: 0;
  width: 40px;
  height: 100vh;
  background: url(~@/assets/img/side.jpg) repeat-y 0 0 / 100%;
  animation: side 25s linear infinite both;
}

.scrolling-side::before {
  left: 0;
}

.scrolling-side-right::after {
  right: 0;
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
