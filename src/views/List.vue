<template>
  <div class="list">
    <div class="top">
      <div class="num-box">
        <div class="select-num">{{ selectedCount }}</div>
        <div class="select-state">已完成</div>
      </div>
    </div>
    <div ref="wheel" class="list-bd" :style="{ animationPlayState }">
      <list-item
        class="list-item"
        v-for="item in randomItems"
        :key="item.id"
        :id="item.id"
        :text="item.text"
        :style="item.style"
        :radius="item.radius"
        @toggle="updateSelectedItems"
      />
    </div>
    <div>
      <img class="confirm-text" src="@/assets/img/confirm-text.png">
      <div class="tipsDiv">
      <p class="tips">如果转过去了没来得及点别担心，一会它们会再转回来哦~</p>
      </div>
    </div>
    <template v-if="selectedCount">
      <div @click = "goToShare">
      <img class="btn-text" src="@/assets/img/confirm-btn.png">
      </div>
    </template>
  </div>
</template>

<script>
import _ from 'lodash';
import ListItem from '@/components/ListItem.vue';
import items from '@/mock/items';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      items,
      selectedItems: [],
      animationPlayState: 'running',
      startX: null,
    };
  },
  computed: {
    randomItems() {
      return this.items.map((item, index) => {
        const {
          id, top, angle, radius,
        } = this.getConfigByIndex(index);
        return {
          id,
          text: item,
          style: {
            transform: `translateY(${top}px) rotate(${angle}deg)`,
            transformOrigin: `center ${radius}px`,
          },
          radius,
        };
      });
    },
    selectedCount() {
      return this.selectedItems.length;
    },
  },
  methods: {
    saveImage() {
      // console.log(this.$refs.wheel);
      // this.$refs.wheel.class
    },
    goToShare() {
      const { name } = this.$route.query;
      const selection = this.selectedItems.toString();
      this.$router.replace(`/login?name=${name}&sele=${selection}`);
    },
    getConfigByIndex(index) {
      const id = index + 1;
      let top;
      if (index % 10 < 5) {
        top = 50 + (index % 5) * 80;
      } else {
        top = 50 + (index % 5) * 80 + 40;
      }
      top += _.random(-10, 10, false);
      const angle = Math.floor(index / 5) * 36;
      const radius = (2000 / 2 - top);
      return {
        id, top, angle, radius,
      };
    },
    updateSelectedItems(text) {
      if (this.selectedItems.includes(text)) {
        this.selectedItems = this.selectedItems.filter((item) => item !== text);
      } else {
        this.selectedItems.push(text);
      }
      // console.log(this.selectedItems);
    },
  },
};
</script>

<style scoped>
.tipsDiv {
  text-align: center;
  position: absolute;
  bottom: 80px;
  left: 0px;
  right: 0px;
}
.tips {
  text-align: center;
  margin: auto;
  font-size: 12px;
  font-style: italic;
  color: rgb(177,177,177);
}
.list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f0f0f0;
}
.floating-button {
position: absolute;
right: 16px;
bottom: 150px;
z-index: 1500;
overflow: hidden;
display: flex;
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
  top: 97px;
  left: calc(50% - 2000px / 2);
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  animation: spin 60s linear infinite;
  color: #000;
}

.list-item {
  position: absolute;
  top: 0;
  left: 50%;
}

.confirm-text {
  position: absolute;
  bottom: 100px;
  left: calc(50% - 130px / 2);
  width: 130px;
  height: 12px;
}


.btn-text {
  position: absolute;
  bottom: 20px;
  left: calc(50% - 128px / 2);
  width: 128px;
}

.btn-bg {
  position: absolute;
  top: 623px;
  left: calc(50% - 130px / 2 + 3px);;
  width: 130px;
  height: 35px;
}
</style>
