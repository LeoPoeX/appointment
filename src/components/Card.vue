<template>
  <div>
    <div class="audit" v-for="(item, i) in waitAuditList" :key="i">
      <div class="card-header">
        <p>待审核</p>
        <router-link tag="a" to="/pass">查看通行证</router-link>
      </div>
      
      <div class="content-box">
        <div class="content">
          <div class="mess">
            <div class="img-backgro"><img /></div>
            <p>姓名：</p>
          </div>
          <p class="text name">{{ item.name }}</p>
        </div>
        <div class="content">
          <div class="mess">
            <div class="img-backgro"><img /></div>
            <p>单位：</p>
          </div>
          <p class="text">{{ item.company }}</p>
        </div>
        <div class="content">
          <div class="mess">
            <div class="img-backgro"><img /></div>
            <p>随行：</p>
          </div>
          <p class="text">{{ item.others[0] }} / {{ item.others[1] }} / {{ item.others[2] }} </p>
        </div>
        <div class="content">
          <div class="mess">
            <div class="img-backgro"><img /></div>
            <p>来访日期：</p>
          </div>
          <p class="text time">{{ item.visitStartTime }}～{{ item.visitEndTime }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import utils from '../utils';
export default {
  name: 'Card',
  data() {
    return {
      waitAuditList: [{ // 待审核列表
        id: 1,
        name: '王长阳1',
        company: '昆山XXXXX精密仪器股份有限公司',
        others: ['码云', '马化腾', '李彦宏'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }, {
        id: 2,
        name: '王长阳2',
        company: '昆山XXXXX精密仪器股份有限公司',
        others: ['码云', '马化腾', '李彦宏'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }, {
        id: 3,
        name: '王长阳3',
        company: '昆山XXXXX精密仪器股份有限公司',
        others: ['码云', '马化腾', '李彦宏'],
        visitStartTime: this.getTime(1563098400000),
        visitEndTime: this.getTime(1563105600000)
      }]
    }
    
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
.audit {
  margin: 1.3rem;

  .card-header {
    height: 4.5rem;
    width: 100%;
    background: #fa7f0c;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color: #FFFFFF;

    // 待放行标签
    .daifangxing {
      background: #00A83B;
    }

    // 已放行标签
    .yifangxing {
      background: #ACACAC;
      box-shadow: 0 0.1rem 0.2rem 0 rgba(112, 112, 112, 0.315);
    }
    // 已放行
    .yiwancheng {
      text-decoration: line-through;
      color: #C2C2C2;
    }


    p {
      display: inline-block;
      margin: 0;
      width: 5rem;
      height: 2rem;
      background: #FF0000;
      box-shadow: 0 0.1rem 0.2rem 0 rgba(204,151,31,0.75);
      border-radius: 0 0 0.5rem 0.5rem;
      text-align: center;
      margin-left: 2rem;
      font-size: 1.3rem;
    }

    a {
      display: block;
      width: 6rem;
      line-height: 2rem;
      text-align: center;
      align-content: center;
      background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFF5E1 100%);
      border-radius: 0.4rem;
      float: right;
      text-decoration: none;
      color: #FF4F00;
      margin: 1.3rem 1.5rem 0 0;
    }
  }

  .content-box {
    border: 1px solid #DDDDDD;
    padding: 1rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;

    .content {
      margin-top: 0.5rem;
      display: flex;
      border-bottom: 1px solid #DDDDDD;
      justify-content: space-between;

      // 已放行
      .fulfill-box {
        color: #c2c2c2;

      }

      .mess {
        display: flex;
        
        .img-backgro {
          width: 1.7rem;
          height: 1.7rem;
          background: #F6CD80;
          border-radius: 50%;
          margin-bottom: 2px;
        }

        .fulfill-img {
          background: #C2C2C2;
        }

        p {
          margin-left: 5px; 
        }
      
      }

      

      .fulfill-text {
        color: #C2C2C2;
      }

      p {
        margin: 0;
      }

      .name {
        font-weight: bold;
        font-size: 1.5rem;
      }

      .time {
        color: #FF0000;
      }
    }
  }

}
</style>


