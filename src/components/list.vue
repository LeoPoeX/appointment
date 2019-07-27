<template>
  <van-pull-refresh v-model="isPulling" @refresh="onPullRefresh">
    <van-list
      v-model="isLoading"
      :finished="isFinished"
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
            <p class="appoint-desc time">
              {{ item.start_time ? getTime(item.start_time) : ''}}
              ～
              {{ item.end_time ? getTime(item.end_time) : '' }}
            </p>
          </div>
        </div>
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import axios from 'axios';
import Tag from '../components/tag';
import utils from '../utils.js';
export default {
  name: 'Card',
  props: {
    tab: String
  },
  data() {
    return {
      list: [],
      offset: 0,
      limit: 3,
      isLoading: false, // 上拉刷新
      isPulling: false, // 下拉刷新
      isFinished: false, // 加载完毕
      error: false // 是否加载失败，加载失败后点击错误提示可以重新。触发load事件，必须使用sync修饰符
    }
  },
  components: {
    Tag
  },
  methods: {
    onPullRefresh () {
      this.offset = 0;
      this.isFinished = true; // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
      this.getList(); // 加载数据
    },
    getList () {
      let params = {
        offset: this.offset,
        limit: this.limit
      }
      if (Number(this.tab) !== 0) {
        params.state = '1,3';
      }
      axios({
        method:'get',
        url: `/api/employee/appointments`,
        params: params,
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({ data }) => {
        this.list = this.offset > 0 ? [...this.list, ...data.list] : data.list;
        this.offset = this.list.length;
        // 加载状态结束
        this.isPulling = false;
        this.isLoading = false;
        this.isFinished = this.list.length === data.total;
      }).catch(() => {
        this.error = true;
      })
    },
    getTime (Gotime) {
      let time = utils.parseTime(Gotime, 'yyyy-MM-dd hh:mm');
      return time;
    },
    // 查看通行证
    showPermit(e) {
      e.stopPropagation();
      this.$router.push({ path: '/permit' });
    },
    // 查看详情
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


