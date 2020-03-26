<template>
  <div class="login scrolling-side-right">
    <img class="title" src="@/assets/img/title-2.png">
    <img class="input-bg" src="@/assets/img/input-bg.png">
    <img class="input-circle" src="@/assets/img/input-circle.png">
    <input class="input" v-model="name" v-focus>
    <div class="error-tip" v-if="showError">
      <img class="error-img" src="@/assets/img/error.png">请输入名字
    </div>
    <img class="confirm-bg" src="@/assets/img/confirm-bg.png">
    <img class="confirm-top" src="@/assets/img/confirm-top.png" @click="onSubmit">
    <audio ref="clickMusic" src="@/assets/audio/click.mp3"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      showError: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.name) {
        this.$emit('login', this.name);
        this.$refs.clickMusic.play().then(() => {
          this.$router.replace('/list');
        });
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
}

.title {
  position: absolute;
  top: 16px;
  right: 53px;
  width: 114px;
  height: 75px;
}

.input-bg {
  position: absolute;
  left: 37px;
  top: 209px;
  width: 244px;
  height: 113px;
}

.input-circle {
  position: absolute;
  top: 188px;
  left: 107px;
  width: 48px;
  height: 46px;
  animation: spin 8s linear infinite;
}

.input {
  position: absolute;
  left: 41px;
  top: 282px;
  width: 239px;
  height: 23px;
  outline: 0;
  border: 0;
  padding: 0;
  color: #4b4a4a;
  background: transparent;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
}

.error-tip {
  position: absolute;
  top: 334px;
  left: 0;
  right: 50px;
  text-align: center;
  color: #eb5e54;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-img {
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
  animation: shine .5s linear infinite alternate both;
}

.confirm-bg {
  position: absolute;
  top: 466px;
  left: 101px;
  width: 130px;
  height: 35px;
}

.confirm-top {
  position: absolute;
  top: 463px;
  left: 100px;
  width: 128px;
  height: 33px;
  transition: all .15s linear;
}

.confirm-top:active {
  top: 466px;
  left: 102px;
}

@keyframes shine {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
