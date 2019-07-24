<template>
  <div>
    <div class="card-box" v-for="item in list" :key="item.id">
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
          <p class="appoint-desc">{{ item.followers }} </p>
        </div>
        <div class="appoint-info">
          <img class="appoint-icon" src="../assets/images/date.png" />
          <span class="appoint-name">来访日期：</span>
          <p class="appoint-desc time">{{ item.start_time }}～{{ item.end_time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../components/Tag';
import utils from '../utils';
export default {
  name: 'Card',
  props: {
    list: Array
  },
  data() {
    return {
    }
  },
  components: {
    Tag
  },
  methods: {
    getTime (e) {
      let time = utils.parseTime(e, 'yyyy-MM-dd hh:mm');
      return time;
    },
    showPermit(e) {
      e.stopPropagation();
      this.$router.push({ path: '/pass' });
    },
    showDetails(id) {
      if ( !id ) return;
      this.$router.push({ path: `/details/${id}` });

    }
  }
}
</script>

<style lang="less">
.card-box {
  margin: 1.3rem;
  background: #FFFFFF;

  .card-header {
    height: 45px;
    width: 100%;
    background: url("../assets/images/vip.png") no-repeat;
    background-size: 100% 45px; 
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    .show-permit {
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
      margin: 1rem 1.5rem 0 0;
      &.over {
        text-decoration: line-through;
        color: #C2C2C2;
        pointer-events:none;
      }
    }
  }

  .card-content {
    border: 1px solid #DDDDDD;
    padding: 1rem;
    background: #fff;
    background: url("../assets/images/Slice.png") no-repeat;
    background-size: 100% 10px; 
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    position: relative;

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
      margin-top: 0.5rem;
      display: flex;
      border-bottom: 1px solid #DDDDDD;
      .appoint-icon {
        flex-shrink: 0;
        width: 1.7rem;
        height: 1.7rem;
        background: #ffffff;
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


