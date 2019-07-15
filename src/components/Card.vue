<template>
  <div>
    <div class="card-box" v-for="(item, i) in list" :key="i">
      <div class="card-header">
        <span :class="`tag ${status}-tag`">{{ item.state }}</span>
        <router-link tag="a" to="/pass" :class="status">查看通行证</router-link>
      </div>
      
      <div :class="`card-content ${status==='over' ? 'over-box' : ''}`">
        <div class="appoint-info">
          <span class="appoint-icon"><img /></span>
          <span class="appoint-name">姓名：</span>
          <p class="appoint-desc user">{{ item.name }}</p>
        </div>
        <div class="appoint-info">
          <span class="appoint-icon"><img /></span>
          <span class="appoint-name">单位：</span>
          <p class="appoint-desc">{{ item.company }}</p>
        </div>
        <div class="appoint-info">
          <span class="appoint-icon"><img /></span>
          <span class="appoint-name">随行：</span>
          <p class="appoint-desc">{{ item.others[0] }} / {{ item.others[1] }} / {{ item.others[2] }} </p>
        </div>
        <div class="appoint-info">
          <span class="appoint-icon"><img /></span>
          <span class="appoint-name">来访日期：</span>
          <p class="appoint-desc time">{{ item.visitStartTime }}～{{ item.visitEndTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../utils';
export default {
  name: 'Card',
  props: {
    list: Array,
    status: { // 'audit', 'pass', 'over'
      type: String,
      default: 'audit'
    }
  },
  data() {
    return {
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
.card-box {
  margin: 1.3rem;
  background: #FFFFFF;

  .card-header {
    height: 4.5rem;
    width: 100%;
    background: #fa7f0c;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color: #FFFFFF;

    .tag {
      display: inline-block;
      width: 5rem;
      line-height: 2rem;
      border-radius: 0 0 8px 8px;
      text-align: center;
      margin-left: 20px;
      font-size: 12px;
      // 待审核标签
      &.audit-tag {
        background: #FF0000;
        box-shadow: 0 1px 2px 0 rgba(204,151,31,0.75);
      }
      // 待放行标签
      &.pass-tag {
        background: #00A83B;
        box-shadow: 0 1px 2px 0 rgba(204,151,31,0.75);
      }
      // 已放行标签
      &.over-tag {
        background: #989898;
      }
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
      &.over {
        text-decoration: line-through;
        color: #C2C2C2;
      }
    }
  }

  .card-content {
    border: 1px solid #DDDDDD;
    padding: 1rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;

    // 已放行
    &.over-box {
      color: #c2c2c2;
      .appoint-info {
        .appoint-icon {
          background-color: #dfdfdf;
        }
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
      margin-top: 0.5rem;
      display: flex;
      border-bottom: 1px solid #DDDDDD;
      .appoint-icon {
        flex-shrink: 0;
        width: 1.7rem;
        height: 1.7rem;
        background: #F6CD80;
        border-radius: 50%;
        margin-bottom: 2px;
      }
      .appoint-name {
        flex-shrink: 0;
        margin-left: 5px;
        color: #C6AA67;
      }
      .appoint-desc {
        flex-grow: 1;
        text-align: right;
        color: #333333;
        &.user {
          font-weight: bold;
          font-size: 1.5rem;
        }
        &.time {
          color: #FF0000;
        }
      }
    }
  }
}
</style>


