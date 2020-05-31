<template>
  <div class="login scrolling-side-right">
    <img class="title" src="@/assets/img/title-3.png">
    <img class="input-bg" src="@/assets/img/input-bg.png">
    <textarea class="input" v-model="name" v-focus />
    <div class="error-tip" v-if="showError">
      <img class="error-img" src="@/assets/img/error.png">请输入你的自定义list
    </div>
    <img class="confirm-txt" src="@/assets/img/free_txt.png" />
    <img class="confirm-top" src="@/assets/img/finish.png" @click="onSubmit">
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
      const { sele, name } = this.$route.query;
      if (this.name) {
        this.$emit('login', this.name);
        this.showError = false;
        localStorage.setItem('free', this.name);
        this.$router.replace(`/share?sele=${sele}&name=${name}`);
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: rgb(255,250,222);
}

.title {
  position: absolute;
  top: 16px;
  right: 53px;
  width: 114px;
}
.confirm-txt {
  position: absolute;
  width: 220px;
  top: 305px;
  left: 40px;
}
.input-bg {
  position: absolute;
  left: 37px;
  top: 90px;
  width: 244px;
}


.input {
  position: absolute;
  left: 41px;
  top: 147px;
  width: 239px;
  height: 115px;
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
  top: 275px;
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

.confirm-top {
  position: absolute;
  top: 563px;
  right: 100px;
  width: 110px;
  transition: all .15s linear;
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
