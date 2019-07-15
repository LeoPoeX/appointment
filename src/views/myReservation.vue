<template>
  <div class="box">
    
    <!-- 头部 -->
    <Header title="我的预约"/>

    <!-- tabs -->
    <mt-navbar class="tab" v-model="selected">
      <mt-tab-item class="tab-til" id="1">待审核</mt-tab-item>
      <mt-tab-item class="tab-til" id="2">待放行</mt-tab-item>
      <mt-tab-item class="tab-til" id="3">已放行</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 待审核内容 -->
        <router-link to="/auditdetails"><Card :list="waitAuditList" status="audit" /></router-link>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <!-- 待放行内容 -->
        <router-link to="/passdetails"><Card :list="passList" status="pass" /></router-link>

      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        
        <!-- 已放行内容 -->
        <router-link to="/overdetails"><Card :list="overList" status="over" /></router-link>

      </mt-tab-container-item>
    </mt-tab-container>


    <!-- 底部栏 -->
    <div class="bottom-column">
      <router-link tag="a" to="/appointment"><img src="../assets/images/appointment.png" />我要预约</router-link>
    </div>

  </div>
</template>

<script>
import Header from '../components/Header';
import Card from '../components/Card.vue';
import utils from '../utils';

export default {
  name: 'MyReservation',
  data() {
    return {
      selected: '1',
      waitAuditList: [{ // 待审核列表
        id: 1,
        state: '待审核',
        name: '王长阳1',
        company: '昆山XXXXX精密仪器股份有限公司',
        others: ['码云', '马化腾', '李彦宏'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }, {
        id: 2,
        state: '待审核',
        name: '王长阳2',
        company: '昆山XXXXX精密仪器股份有限公司',
        others: ['码云', '马化腾', '李彦宏'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }, {
        id: 3,
        state: '待审核',
        name: '王长阳3',
        company: '昆山XXXXX精密仪器股份有限公司',
        others: ['码云', '马化腾', '李彦宏'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }],
      passList: [{  //待放行列表
        id: 1,
        state: '待放行',
        name: '小明1',
        company: 'XXXXX',
        others: ['张三', '李四'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }],
      overList: [{  //已放行列表
        id: 1,
        state: '已放行',
        name: '小红1',
        company: 'XXXXX',
        others: ['网名1'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }]
    }
  },
  components: {
    Header,
    Card
  },
  methods: {
    getTime (e) {
      let time = utils.parseTime(e, 'yyyy-MM-dd hh:mm');
      return time;
    }
  }
}
</script>


<style lang="less">
.box {
  margin: 0;
  width: 100%;
  margin: 3.6rem 0;

  // 顶部
  .title {
  width: 100%;
  height: 3.6rem;
  text-align: center;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
  box-shadow: 0  0.1rem 0.1rem 0 rgba(0,0,0,0.12);
  position: fixed;
  top: 0;
  z-index: 10;

    .arrow {
      width: 2.2rem;
      height: 2.2rem;
      position: absolute;
      left: 1.4rem;
      margin-top: 0.6rem;
    }

    p {
      margin: 0;
      font-size: 1.7rem;
      display: inline-block;
      line-height: 3.6rem;
    }
  }

  // tab
  .tab {
    margin: 0 1.5rem;
    
    a {
      color: #232323;
    }
    
    .tab-til {
      font-size: 2rem;
    }
  }

  // 底部栏
  .bottom-column {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    text-align: center;
    background: #FFFFFF;
    border-top: 0.1rem solid #DFDFDF;
    align-content: center;

    a {
      margin: 0;
      font-size: 1.8rem;
      display: flex;
      text-align: center;
      line-height: 3.5rem;
      justify-content: center;
      align-content: center;
      text-decoration: none;
      color: #232323;
      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
        margin-top: 1rem;
      }
    }
  }
}

</style>



