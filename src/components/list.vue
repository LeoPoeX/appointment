<template>
  <van-list
    v-model="loading"
    :finished="finished"
    :error.sync="error"
    error-text="请求失败，点击重新加载"
    finished-text="没有更多了"
    @load="getList"
  >
    <div class="card-box" v-for="item in list" :key="item.id" >
      <div class="card-header">
        <Tag :state="item.state"/>
        <span
          :class="`show-permit ${item.state}`"
          @click="showPermit"
        >查看通行证</span>
      </div>

      <div :class="`card-content ${item.state === 4 ? 'over-box' : ''}`" @click="showDetails(item.id)">
        <div class="appoint-info">
          <img class="appoint-icon" src="../assets/images/name.png" />
          <span class="appoint-name">姓名：</span>
          <p class="appoint-desc user">{{ item.visitor_name }}</p>
        </div>
        <div class="appoint-info">
          <img class="appoint-icon" src="../assets/images/firm.png" />
          <span class="appoint-name">单位：</span>
          <p class="appoint-desc">{{ item.visitor_organization }}</p>
        </div>
        <div class="appoint-info">
          <img class="appoint-icon" src="../assets/images/followers.png" />
          <span class="appoint-name">随行：</span>
          <p class="appoint-desc">{{ Array.isArray(item.followers) ? item.followers.join('/') : '' }} </p>
        </div>
        <div class="appoint-info">
          <img class="appoint-icon" src="../assets/images/date.png" />
          <span class="appoint-name appoint-date">来访日期：</span>
          <p class="appoint-desc time">{{ item.start_time }}～{{ item.end_time }}</p>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
import axios from 'axios';
import Tag from '../components/tag';
import utils from '../utils.js';
export default {
  name: 'Card',
  props: {
    tab: String,
    openPassModal: Function
  },
  data() {
    return {
      list: [],
      loading: false,
      error: false,
      finished: false
    }
  },
  components: {
    Tag
  },
  created() {
    // this.getList();
  },
  methods: {
    getList () {
      const params = Number(this.tab) !== 0 ? { state: '1,3', offset: 0, limit: 10 } : { offset: 0, limit: 10 }
      axios({
        method:'get',
        url: `/api/employee/appointments`,
        params: params,
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({data}) => {
        if ( data.length > 0) {
          this.list = data
          // for (var i =0; i < this.list.length; i++ ) {
          //   this.list[i].start_time = new Date(+new Date(this.list[i].start_time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
          //   this.list[i].end_time = new Date(+new Date(this.list[i].end_time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
          // }
        }
        // 加载状态结束
        this.loading = false;
        this.finished = true;
      }).catch(() => {
        this.error = true;
      })
    },
    getTime (Gotime) {
      let time = utils.parseTime(Gotime, 'yyyy-MM-dd hh:mm');
      return time;
    },
    showPermit(e) {
      e.stopPropagation();
      this.$router.push({ path: '/pass' });
    },
    showDetails(id) {
      if ( !id ) return;
      this.$router.push({ path: `/detail/${id}` });
    }
  }
}
</script>

<style lang="less">
.card-box {
  margin: 15px;
  background: #FFFFFF;

  .card-header {
    height: 45px;
    width: 100%;
    background: url("../assets/images/vip.png") no-repeat;
    background-size: 100% 45px; 
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    position: relative;

    .show-permit {
      display: block;
      width: 72px;
      line-height: 24px;
      text-align: center;
      align-content: center;
      background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFF5E1 100%);
      border-radius: 5px;
      float: right;
      text-decoration: none;
      color: #FF4F00;
      margin: 8px 18px 0 0;
      font-size: 12px;
      &.over {
        text-decoration: line-through;
        color: #C2C2C2;
        pointer-events:none;
      }
    }
  }

  .card-content {
    border-left: 1px solid #DDDDDD;
    border-right: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
    padding: 12px;
    background: #fff;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    position: relative;
    font-size: 12px;

    // 已放行
    &.over-box {
      color: #c2c2c2;
      .appoint-info {
        .appoint-name {
          color: #c2c2c2;
        }
        .appoint-desc {
          color: #c2c2c2;
          &.time {
            color: #c2c2c2;
          }
        }
      }
    }
    .appoint-info {
      margin-top: 6px;
      display: flex;
      border-bottom: 1px solid #DDDDDD;
      .appoint-icon {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        background: #ffffff;
        border-radius: 50%;
        margin-bottom: 2px;
      }
      .appoint-name {
        flex-shrink: 0;
        margin-left: 5px;
        color: #C6AA67;
        font-size: 14px;
        &.appoint-date {
          font-size: 11px;
        }
      }
      .appoint-desc {
        flex-grow: 1;
        text-align: right;
        color: #333333;
        font-size: 13px;
        &.user {
          font-weight: bold;
          font-size: 16px;
        }
        &.time {
          color: #FF0000;
          font-size: 11px;
        }
      }
    }
  }
}
</style>


