<template>
  <div class="box">
    <!-- tabs -->
    <mt-navbar class="tab" v-model="selected">
      <mt-tab-item class="tab-til" id="0">全部</mt-tab-item>
      <mt-tab-item class="tab-til" id="1">待处理</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" :swipeable='true'>
      <!-- 全部 -->
      <mt-tab-container-item id="0">
        <List tab="0" />
      </mt-tab-container-item>

      <!-- 待处理 -->
      <mt-tab-container-item id="1">
        <List tab="1" />
      </mt-tab-container-item>
    </mt-tab-container>


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
      selected: '0',
      list: [],
      showCode: false
    }
  },
  components: {
    List
  },
 
}
</script>


<style lang="less">
.box {
  margin-bottom: 50px;
  margin-top: 50px;

  // tab
  .tab {
    padding: 0 18px;
    width: 90%;
    position: fixed;
    top: 0;
    z-index: 10;
    a {
      color: #232323;
    }
    .tab-til {
      font-size: 12px;
    }
  }

  // 底部栏
  .bottom-column {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 42px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #232323;
    background: #fff;
    border-top: 1px solid #DFDFDF;
    img {
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }
  }
}

</style>



