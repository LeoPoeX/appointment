<template>
  <div class="box">
    <div class="tab-wrap">
      <van-tabs v-model="active" sticky swipeable animated>
        <van-tab v-for="tab in tabs" :key="tab.key" :title="tab.title">
          <List :tab="tab.key" />
        </van-tab>
      </van-tabs>
    </div>

    <!-- 底部栏 -->
    <router-link
      tag="div"
      to="/appointment"
      class="bottom-column"
    >
      <img src="../assets/images/appointment.png" />我要预约
    </router-link>

  </div>
</template>

<script>
import List from '../components/list';
export default {
  name: 'MyReservation',
  data() {
    return {
      itemDetail: {},
      tabs: [{
        key: '1',
        title: '待处理'
      }, {
        key: '0',
        title: '全部'
      }],
      active: '0',
      list: [],
    }
  },
  components: {
    List
  },
  methods: {
  }
}
</script>


<style lang="less">
.box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: calc(env(safe-area-inset-bottom) + 0px) !important;
  bottom: calc(constant(safe-area-inset-bottom) + 0px) !important;

  .tab-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: calc(env(safe-area-inset-bottom) + 42px) !important;
    bottom: calc(constant(safe-area-inset-bottom) + 42px) !important;
  }

  // 底部栏
  .bottom-column {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    bottom: calc(env(safe-area-inset-bottom) + 0px) !important;
    bottom: calc(constant(safe-area-inset-bottom) + 0px) !important;
    height: 42px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #232323;
    background: #fff;
    border-top: 1px solid #ECECEC;
    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
}

</style>



