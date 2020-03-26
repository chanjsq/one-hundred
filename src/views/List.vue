<template>
  <div class="list">
    <div class="top">
      <div class="num-box">
        <div class="select-num">0</div>
        <div class="select-state">已完成</div>
      </div>
    </div>
    <div ref="wheel" class="list-bd" :style="{ animationPlayState }">
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
import items from '@/mock/items';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      items,
      animationPlayState: 'running',
      startX: null,
    };
  },
  computed: {
    randomItems() {
      return this.items.map((item, index) => {
        const id = index + 1;
        const top = _.random(0, 350, false);
        const angle = _.random(0, 360, false);
        const radius = 1000 - top;
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
