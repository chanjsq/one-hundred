<template>
  <div class="app">
    <audio ref="bgMusic" src="@/assets/audio/bg.mp3"></audio>
    <div class="msc-div" v-if="rout === '/'">
      <div class="music-btn" @click = "playMusic"></div>
      <p class="mcs-txt">点击播放↑背景音乐</p>
    </div>
    <transition name="slide-left">
      <router-view @login="saveName" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    const route = this.$router.currentRoute.fullPath;
    return {
      name: '',
      rout: route,
    };
  },
  watch: {
    $route(to) {
      // console.log(to, from);
      if (to.path !== '/') this.rout = '123';
      else this.rout = '/';
    },
  },
  methods: {
    saveName(name) {
      this.name = name;
    },
    playMusic() {
      const { bgMusic } = this.$refs;
      if (bgMusic.paused) {
        bgMusic.play();
      } else {
        bgMusic.pause();
      }
    },
  },
};
</script>

<style lang="scss">
.msc-div {
  position: absolute;
  top: 25px;
  right: 23px;
  text-align: center;
  z-index: 100;
}
.music-btn {
  margin: auto;
  position: relative;
  width: 52px;
  height: 52px;
  background: url(~@/assets/img/music-btn.png) no-repeat center / contain;
}
.mcs-txt {
  position: relative;
  font-size: 12px;
  color: black;
}
body {
  margin: 0;
  font-family: 'Heiti SC', 'Helvetica Neue', Helvetica, sans-serif;
}

.app {
  width: 100%;
  height: 100vh;
  // overflow: hidden;
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
  animation: side 40s linear infinite both;
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
