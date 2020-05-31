/* eslint-disable guard-for-in */
<template>
  <div class="A" style="background-color:rgb(255,250,222);">
    <div v-if="imgUrl">
      <img :src="imgUrl" class="newImg" />
    </div>
    <div class="sharee" ref="mainDom">
      <div v-if="!imgUrl">
      <div class="name">
        <img src="@/assets/img/name.png" class="tianImg"/>
        <p :class="nameClass">{{nameA}}</p>
      </div>
        <img src="@/assets/img/title-3.png" class="headImg"/>
        <div class="barA">
          <div class="finishedA">已完成 {{selectedCount}} 件</div>
          <div class="qrDiv">
            <div class="qrDivLeftTxt">
              <div class="upTxt">扫码//标记</div>
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
        <p class="footer-txt">制作：重庆大学学生会宣传部，秘书处于卓浩；华晨</p>
        <p class="footer-txt">部分素材来源：网易哒哒“人生必做的100件事”</p>
      </div>
    </div>
    <b-button
      v-if="!imgUrl"
      variant="success"
      class="floating-button"
      @click="saveImage">
    点击这里保存截图
    </b-button>
  </div>
</template>

<script>
import items from '@/mock/items';
import html2canvas from 'html2canvas';
import yesapi from '../lib/yes3';

export default {
  data() {
    const selectItems = this.$route.query.sele.split(',');
    const { name } = this.$route.query;
    let namec = '';
    if (name.length === 3) namec = 'name_txt';
    else if (name.length === 2) namec = 'name_txt_2';
    else if (name.length === 4) namec = 'name_txt_4';
    return {
      selectedItems: selectItems,
      selectedCount: selectItems.length,
      imgUrl: null,
      nameA: name,
      nameClass: namec,
    };
  },
  computed: {
    computeItems() {
      return this.selectedItems.map((item) => {
        const itemSrc = parseInt(item, 10);
        return {
          idd: item,
          text: items[item - 1],
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
      try {
        this.uploadData();
      // eslint-disable-next-line no-empty
      } catch {}
    },
    async uploadData() {
      await yesapi.table.create('cqu_50things_select', { sele: this.selectedItems.toString(), s_name: this.$route.query.name });
      await yesapi.table.create('cqu_50things_comment', { free: localStorage.getItem('free') });
    },
  },
};
</script>

<style scoped>

.name {
  position: absolute;
  top: 50px;
  left: 10px;
}
.name_txt {
  position: relative;
  width: 30px;
  margin-top: 3px;
  margin-left: 10px;
  font-size: 18px;
  z-index: 100;
  font-weight: bold;
}
.name_txt_2 {
  position: relative;
  width: 30px;
  margin-top: 17px;
  margin-left: 10px;
  font-size: 18px;
  z-index: 100;
  font-weight: bold;
}
.name_txt_4 {
  position: relative;
  width: 30px;
  margin-top: 1px;
  margin-left: 12px;
  line-height: 21px;
  font-size: 16px;
  z-index: 100;
  font-weight: bold;
}
.tianImg {
  position: absolute;
  width: 36px;
}

.footer-txt {
  font-size: 10px;
  color: rgba(0,0,0,0.6);
  text-align: center;
  margin-bottom: 0px;
}

.newImg {
  width: 100%;
}
.floating-button {
position: absolute;
right: 16px;
bottom: 150px;
z-index: 1500;
height: 100px;
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
.A {
  min-height: 100%;
  background-color: rgb(255,250,222);
}
.sharee {
  background-color: rgb(255,250,222);
  min-height: 400px;
}
.qrDiv {
  height:58px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 40%;
  background-color: rgb(255,250,222);
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.qrImg {
  line-height: 55px;
  height: 50px;
  width: 50px;
  vertical-align: center;
  margin-top: 3px;
}

.qrDivLeftTxt {
  font-size: 12px;
  height: 60px;
  line-height: 20px;
  display:flex;
  justify-content: center;
  flex-direction: column;
}
.upTxt {
  margin-top: -3px;
  font-weight: bold;
}

.barA {
  position: relative;
  margin-top: -4px;
  min-height: 60px;
  display:flex;
  flex-direction: row;
}

.finishedA {
  background-color: black;
  padding: 10px;
  color:white;
  font-size: 35px;
  width: 60%;
  text-align: center;
  font-weight: bolder;
  height: 58px;
  line-height: 35px;
}
.headImg{
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 40px;
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
