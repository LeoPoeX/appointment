<template>
  <div class="box">
    <div class="tab-wrap">
      <van-tabs v-model="activeName" sticky swipeable animated @change="changeTab">
        <van-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" :title="tab.title">
          <List :tab="tab.status" />
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
  beforeRouteLeave(to, from, next) {
    // 设置当前路由的 meta
    from.meta.keepAlive = true;
    next();
  },
  data() {
    const activeNameStr = this.$route.query.activeTab || '1';
    return {
      itemDetail: {},
      tabs: [
        {
          name: '1',
          status: '1',
          title: '待审核'
        },
        {
          name: '2',
          status: '3',
          title: '待放行'
        },
        {
          name: '3',
          status: '2,4',
          title: '已完结'
        },
      ],
      activeName: activeNameStr,
      list: [],
    }
  },
  components: {
    List
  },
  methods: {
    changeTab(name) {
      this.$router.replace({
        path: '/list',
        query: {activeTab: name},
      })
    }
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
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
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



