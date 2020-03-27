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
    <img class="confirm-text" src="@/assets/img/confirm-text.png">
    <template v-if="selectedCount">
      <img class="btn-bg" src="@/assets/img/confirm-bg.png">
      <img class="btn-text" src="@/assets/img/confirm-btn.png">
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
    getConfigByIndex(index) {
      const id = index + 1;
      let top;
      if (index % 10 < 5) {
        top = 50 + (index % 5) * 80;
      } else {
        top = 50 + (index % 5) * 80 + 40;
      }
      top += _.random(-10, 10, false);
      const angle = Math.floor(index / 5) * 18;
      const radius = 2000 / 2 - top;
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
  top: 97px;
  left: calc(50% - 2000px / 2);
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  animation: spin 140s linear infinite;
  color: #000;
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

.btn-text {
  position: absolute;
  top: 621px;
  left: calc(50% - 128px / 2);
  width: 128px;
  height: 33px;
}

.btn-text:active {
  top: 623px;
  left: calc(50% - 128px / 2 + 2px);
}

.btn-bg {
  position: absolute;
  top: 623px;
  left: calc(50% - 130px / 2 + 3px);;
  width: 130px;
  height: 35px;
}
</style>
