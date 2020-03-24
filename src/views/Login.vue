<template>
  <div class="login scrolling-side-right">
    <img class="title" src="@/assets/img/title-2.png">
    <img class="input-bg" src="@/assets/img/input-bg.png">
    <img class="input-circle" src="@/assets/img/input-circle.png">
    <input class="input" v-focus>
    <img class="confirm-bg" src="@/assets/img/confirm-bg.png">
    <img class="confirm-top" src="@/assets/img/confirm-top.png" @click="onSubmit">
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$router.push('/list');
    },
  },
};
</script>

<style scoped>
.login {
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
</style>
