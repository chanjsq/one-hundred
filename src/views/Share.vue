/* eslint-disable guard-for-in */
<template>
  <div>
    <div class="sharee" ref="mainDom">
      <div v-if="!imgUrl">
        <img src="@/assets/img/head.png" class="headImg"/>
        <div class="barA">
          <div class="finishedA">已完成 {{selectedCount}} 件</div>
          <div class="qrDiv">
            <div class="qrDivLeftTxt">
              <div class="upTxt">扫码\\标记</div>
              <div class="botTxt">你的重大之旅</div>
            </div>
            <img src="@/assets/img/qrcode.jpg" class="qrImg"/>
          </div>
        </div>
        <div class="imgs">
          <b-row>
            <b-col cols="3" class="imgItem" v-for="item in computeItems" :key="item.idd">
              <img :src="item.src" class="imgI"/>
              <p class="titleI">{{item.text}}</p>
            </b-col>
          </b-row>
        </div>
      </div>
      <div v-if="imgUrl">
        <img :src="imgUrl" class="newImg" />
      </div>
    </div>
    <b-button variant="success" class="floating-button" @click="saveImage">点击这里保存截图</b-button>
  </div>
</template>

<script>
import items from '@/mock/items';
import html2canvas from 'html2canvas';

export default {
  data() {
    const selectItems = this.$route.query.sele.split(',');
    return {
      selectedItems: selectItems,
      selectedCount: selectItems.length,
      imgUrl: null,
    };
  },
  computed: {
    computeItems() {
      return this.selectedItems.map((item) => {
        const itemSrc = parseInt(item, 10) + 1;
        return {
          idd: item,
          text: items[item],
          src: `/things/${itemSrc}.png`,
        };
      });
    },
  },
  methods: {
    toLogin() {
      this.$router.replace('/login');
    },
    saveImage() {
      html2canvas(this.$refs.mainDom).then((canvas) => {
        this.imgUrl = canvas.toDataURL('image/png');
        alert('长按页面即可以下载图片');
      });
    },
  },
};
</script>

<style scoped>
.newImg {
  width: 100%;
}
.floating-button {
position: absolute;
right: 16px;
bottom: 150px;
z-index: 1500;
overflow: hidden;
display: flex;
}
.imgItem {
  width: 70px;
}
.imgI {
  width: 70px;
  height: 70px;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 0px black;
}
.titleI {
  text-align: center;
  width: 70px;
  font-size: 12px;
  margin-top: 3px;
}
.imgs {
  padding: 10px;
}
.sharee {
  background-color: rgb(240,240,240);
  min-height: 600px;
}
.qrDiv {
  height:58px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 40%;
  background-color: rgb(240,240,240);
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.qrImg {
  line-height: 60px;
  height: 50px;
  width: 50px;
  vertical-align: center;
  margin-top: 5px;
}

.qrDivLeftTxt {
  font-size: 12px;
  height: 60px;
  display:flex;
  justify-content: center;
  flex-direction: column;
}
.upTxt {
  font-weight: bold;
}

.barA {
  margin-top: -4px;
  min-height: 60px;
  display:flex;
  flex-direction: row;
}

.finishedA {
  height: 58px;
  background-color: black;
  padding: 10px;
  color:white;
  font-size: 35px;
  width: 60%;
  text-align: center;
  font-weight: bolder;
  line-height: 40px;
}
.headImg{
  width: 100%;
}
.line_02{
  /* margin-top: ; */
    height: 1px;
    border-top: 1px solid #ddd;
    text-align: center;
}
.line_02 span{
    position: relative;
    top: -15px;
    background: #fff;
    /* padding: 0 20px; */
}

.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fbec71;
}

.music-btn {
  position: absolute;
  top: 25px;
  right: 23px;
  width: 22px;
  height: 52px;
  background: url(~@/assets/img/music-btn.png) no-repeat center / contain;
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
