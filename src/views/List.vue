<template>
  <div class="list">
    <div class="top">
      <div class="num-box">
        <div class="select-num">0</div>
        <div class="select-state">已完成</div>
      </div>
    </div>
    <div class="list-bd">
      <list-item
        class="list-item"
        v-for="item in randomItems"
        :key="item.id"
        :text="item.text"
        :style="item.style"
        :radius="item.radius"
      />
    </div>
    <img class="confirm-text" src="@/assets/img/confirm-text.png">
  </div>
</template>

<script>
import _ from 'lodash';
import ListItem from '@/components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      items: ['看极光', '一次无计划的旅程', '勇敢告白一次', '写信给未来的自己', '去爱豆的演唱会', '看完1000部电影', '毫无顾忌地大醉一场', '潜水', '认真道别一次', '完整地看一次日出/日落', '拿到驾照', '开一家店（网店也算）', '拥有一个死党', '经济独立', '会一种乐器', '拍一次全家福', '打卡书籍/影视中的经典地标', '得一次第一名', '献血', '看完1000本书', '拥有自己的房子', '（曾经/正在）和宠物一同生活', '遇到过令你心动的人', '高空跳伞', '创业（无论成败）', '有一道拿手好菜', '一个人去旅行', '拥有马甲线/腹肌', '与网友成为现实中的朋友', '上一次电视', '看一场流星雨', '去世界级赛事现场', '和喜欢的人用同一个耳机听歌', '为梦想疯狂一次', '种一棵树（含蚂蚁森林）', '培养一个兴趣爱好', '去喜欢的国家生活一段时间', '保存着一份孩子气', '拥有10年以上的挚友', '写一本书', '做爱心志愿者', '完成制订的减肥/健身计划', '去西藏', '作为选手参加一次大型赛事', '对家人说我爱你', '去一次音乐节', '见证自己的蜕变', '精通一门外语', '把房子装饰成喜欢的样子', '随手帮助陌生人', '定期存钱（金额不限）', '毕业旅行', '登记器官/遗体捐献', '用第一笔工资给家人买礼物', '体验乡间生活', '亲手种出食物并吃掉', '学会一支舞', '看一场灿烂的烟火', '邀请亲友参加自己的毕业典礼', '近距离接触偶像', '和喜欢的人恋爱', '观鲸', '在星空下露营', '在到过的地方寄明信片给自己 ', '拿一次奖学金', '实现家人的心愿', '珍藏一件凝聚情感的物品', '结识不同国籍的朋友', '发表一次演讲', '拥有一段刻骨铭心的爱情', '对伴侣认真说一次我爱你', '陪家人去旅行', '冲洗重要的照片，整理成相册', '赚到人生的第一个100万', '记录生活（含社交平台）', '拍一次写真', '见证好朋友的婚礼', '拍幼时和长大的对比照', '组一支乐队', '试着原谅一个人', '重回童年居住的地方', '去中国各省市打卡', '带父母重拍婚纱照', '送自己一个贵到模糊的礼物', '谈一场校园恋爱', '带家人体检', '打卡七大洲', '拜访恩师', '去不同的城市生活', '当爸爸/妈妈', '定期自我总结', '将一个浪漫的想法变成现实', '和伴侣一起看鬼片', '立一份遗嘱', '和愧对的人道歉', '学会理财', '参加大型的倒计时跨年', '与朋友彻夜谈心', '接纳自己，与自己和解', '学会断舍离'],
    };
  },
  computed: {
    randomItems() {
      return _.shuffle(this.items).map((item, index) => {
        const i = index + 1;
        const y = _.random(0, 350, false);
        const r = _.random(0, 360, false);
        const a = 1000 - y;
        return {
          id: i,
          text: item,
          style: {
            transform: `translateY(${y}px) rotate(${r}deg)`,
            transformOrigin: `center ${a}px`,
          },
          radius: a,
        };
      });
    },
  },
};
</script>

<style scoped>
.list {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f0f0f0;
}

.top {
  position: relative;
  height: 42px;
  background: url(~@/assets/img/select-top.png) no-repeat 0 0 / cover;
  box-shadow: 0 1px rgba(0, 0, 0, .3);
}

.num-box {
  position: absolute;
  top: 0;
  right: 0;
  width: 47px;
  height: 100%;
  background: #f5e000;
  text-align: center;
  line-height: 1;
}

.select-num {
  font-weight: 700;
  font-style: italic;
  font-size: 23px;
  color: #000;
  margin-top: 4px;
}

.select-state {
  font-size: 12px;
}

.list-bd {
  position: absolute;
  top: 80px;
  left: calc(50% - 2000px / 2);
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  animation: spin 200s linear infinite;
}

.list-item {
  position: absolute;
  top: 0;
  left: 50%;
}

.confirm-text {
  position: absolute;
  top: 600px;
  left: calc(50% - 130px / 2);
  width: 130px;
  height: 12px;
}
</style>
