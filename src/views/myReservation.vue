<template>
  <div class="box">
    <!-- tabs -->
    <mt-navbar class="tab" v-model="selected">
      <mt-tab-item class="tab-til" id="1">待审核</mt-tab-item>
      <mt-tab-item class="tab-til" id="2">待放行</mt-tab-item>
      <mt-tab-item class="tab-til" id="3">已放行</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <!-- 待审核内容 -->
      <mt-tab-container-item id="1">
        <List :list="list" status="audit" />
      </mt-tab-container-item>

      <!-- 待放行内容 -->
      <mt-tab-container-item id="2">
        <List :list="list" status="pass" />
      </mt-tab-container-item>

      <!-- 已放行内容 -->
      <mt-tab-container-item id="3">
        <List :list="list" status="over" />
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
import axios from 'axios';
import List from '../components/List.vue';
import utils from '../utils';

export default {
  name: 'MyReservation',
  data() {
    return {
      selected: '1',
      // waitAuditList: [{ // 待审核列表
      //   id: 1,
      //   state: '待审核',
      //   name: '王长阳1',
      //   company: '昆山XXXXX精密仪器股份有限公司',
      //   others: ['码云', '马化腾', '李彦宏'],
      //   visitStartTime: this.getTime(1563098400000),
      //   visitEndTime: this.getTime(1563105600000)
      // }, {
      //   id: 2,
      //   state: '待审核',
      //   name: '王长阳2',
      //   company: '昆山XXXXX精密仪器股份有限公司',
      //   others: ['码云', '马化腾', '李彦宏'],
      //   visitStartTime: this.getTime(1563098400000),
      //   visitEndTime: this.getTime(1563105600000)
      // }, {
      //   id: 3,
      //   state: '待审核',
      //   name: '王长阳3',
      //   company: '昆山XXXXX精密仪器股份有限公司',
      //   others: ['码云', '马化腾', '李彦宏'],
      //   visitStartTime: this.getTime(1563098400000),
      //   visitEndTime: this.getTime(1563105600000)
      // }],
      // passList: [{  //待放行列表
      //   id: 1,
      //   state: '待放行',
      //   name: '小明1',
      //   company: 'XXXXX',
      //   others: ['张三', '李四'],
      //   visitStartTime: this.getTime(1563098400000),
      //   visitEndTime: this.getTime(1563105600000)
      // }],
      // overList: [{  //已放行列表
      //   id: 1,
      //   state: '已放行',
      //   name: '小红1',
      //   company: 'XXXXX',
      //   others: ['网名1'],
      //   visitStartTime: this.getTime(1563098400000),
      //   visitEndTime: this.getTime(1563105600000)
      // }]
      list: [],
    }
  },
  components: {
    List
  },
  created() {
    this.getList();
  },
  methods: {
    getTime (e) {
      let time = utils.parseTime(e, 'yyyy-MM-dd hh:mm');
      return time;
    },
    getList () {
      axios({
        method:'get',
        url: '/api/employee/appointments',
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({data}) => {
        if ( data.length > 0) {
          var param=this.follow(data);
         this.list = param
        }
        
      })
    },
    follow (num) {    
      for ( var param in num) {
       var json=num[param];
       var arr=json.followers;
       var a=arr.join('/')
       num[param].followers=a;     
      }
      return num;
    },
    
  }
}
</script>


<style lang="less">
.box {
  margin-bottom: 3.6rem;
  margin-top: 50px;
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
    padding: 0 18px;
    width: 90%;
    position: fixed;
    top: 0;
    z-index: 10;
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
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #232323;
    background: #fff;
    border-top: 1px solid #DFDFDF;
    img {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 1rem;
    }
  }
}

</style>



