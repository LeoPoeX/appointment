<template>
  <div class="box">
    <van-tabs v-model="active" sticky swipeable animated>
      <van-tab v-for="tab in tabs" :key="tab.key" :title="tab.title">
        <List :tab="tab.key" :showPermitModal = "showPermitModal" />
      </van-tab>
    </van-tabs>

    <!-- 底部栏 -->
    <router-link
      tag="div"
      to="/appointment"
      class="bottom-column"
    >
      <img src="../assets/images/appointment.png" />我要预约
    </router-link>

    <van-popup class="myPopup" v-model="show">
      <Pass :closePermitModal = "closePermitModal" :info = "itemDetail" />
    </van-popup>
  </div>
</template>

<script>
import List from '../components/list';
import Pass from '../components/pass'
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
      showCode: false,
      show: false,
    }
  },
  components: {
    List,
    Pass
  },
  methods: {
    showPermitModal(item) {
      this.show = true;
      this.itemDetail = item;
    },
    closePermitModal () {
      this.show = false;
      this.itemDetail = {};
    }
  }
}
</script>


<style lang="less">
.box {
  margin-bottom: 50px;
  width: 100%;
  position: relative;



  // 底部栏
  .bottom-column {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 42px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #232323;
    background: #fff;
    border-top: 1px solid #DFDFDF;
    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }

  .myPopup {
    background: 0;
    width: 90%;
  }
}

</style>



