<template>
  <div class="list">
    <div class="top"></div>
    <div class="list-bd">
      <list-item text="见证自己的蜕变" />
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  components: {
    ListItem,
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
  height: 42px;
  background: url(~@/assets/img/select-top.png) no-repeat 0 0 / cover;
}

.list-bd {
  position: absolute;
  top: 80px;
  left: calc(50% - 2000px / 2);
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  animation: spin 150s linear infinite;
}
</style>
