<template>
  <div class="details-box">
    <div class="details-content">
      <!-- 到达时间和离开时间 -->
      <div class="details-timeBox">
        <Tag :state="info.state" class="details-tag" />
        <div class="details-time">
          <p class="details-timeDesc">到达时间</p>
          <p class="details-date">{{ info.start_day }}</p>
          <p class="details-hour">{{ info.end_time }}</p>
        </div>
        <div class="details-symbol">~</div>
        <div class="details-time">
          <p class="details-timeDesc">离开时间</p>
          <p class="details-date">{{ info.end_day }}</p>
          <p class="details-hour">{{ info.end_time }}</p>
        </div>
      </div>

      <!-- 预约详情 -->
      <div class="details-info">
        <p class="details-oddnum">预约单号：{{ info.ticket_id }}</p>
        
        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">预约人：</span>
            <span>{{ info.visitor_name }}</span>
          </div>
          <div class="details-desc">
            <span class="details-name">电话：</span>
            <span>{{ info.visitor_phone }}</span>
          </div>
        </div>

        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">职务：</span>
            <span>{{ info.visitor_position }}</span>
          </div>
          <div class="details-desc">
            <span class="details-name">车牌：</span>
            <span>{{ info.visitor_car_number}}</span>
          </div>
        </div>

        <div class="details-row">
            <span class="details-name">地址：</span>
            <span>{{ info.visitor_organization }} </span>
        </div>

        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">来访事由：</span>
            <span>{{ info.reason }}</span>
          </div>
          <div class="details-desc">
            <span class="details-name">来访人数：</span>
            <span>{{ Array.isArray(info.followers) ? info.followers.length + 1 : 1 }}人</span>
          </div>
        </div>

        <div class="details-line"></div>

        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">接待人：</span>
            <span>{{ info.employee_name }}</span>
          </div>
          <div class="details-desc">
            <span class="details-name">电话：</span>
            <span>{{ info.employee_phone }}</span>
          </div>
        </div>

      </div>

    </div>

    <!-- 随员详情 -->
    <div class="details-content follower-box" v-if="Array.isArray(info.followers) && info.followers.length">
      <div class="details-rettitle">
        随员详情
      </div>
      
    
      <!-- 随员信息 -->
      <div class="details-retInfo" v-for="(user, index) in info.followers" :key="index">
        <!-- 编号 -->
        <div class="details-retnum"><span class="details-id">{{ index + 1 }}</span></div>
        <!-- 信息内容 -->
        <div class="details-retDesc">

          <div class="details-row">
            <div class="details-desc">
            <img class="details-icon" src="../assets/images/name.png" />
              <span class="details-retname">{{ user.name }}</span>
            </div>
            <div class="details-desc">
              <img class="details-icon" src="../assets/images/tel.png" />
              <span class="details-retname">{{ user.phone }}</span>
            </div>
          </div>

          <div class="details-row">
            <div class="details-desc">
              <img class="details-icon" src="../assets/images/post.png" />
              <span class="details-retname">{{ user.position }}</span>
            </div>
            <div class="details-desc">
              <img class="details-icon" src="../assets/images/car.png" />
              <span class="details-retname">{{ user.car_number }}</span>
            </div>
          </div>

          <div class="details-row">
            <div class="details-desc details-add">
              <img class="details-icon" src="../assets/images/firm.png" />
              <span class="details-retname">{{ user.organization }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Tag from '@/components/tag';
export default {
  name: 'Details',
  props: {
    info: Object
  },
  components: {
    Tag
  }
}
</script>

<style lang="less">
.details-box {
  margin: 35px 15px 0 15px;
  
  .details-content {
    background: #FFFFFF;
    border: 0.5px solid #DFDFDF;
    border-radius: 8px;
    margin-top: 10px;
    &.follower-box {
      margin-top: 12px;
    }
    // 到达时间和离开时间
    .details-timeBox {
      padding: 24px 24px 15px 24px;
      display: flex;
      position: relative;
      align-content: center;
      justify-content: space-around;
      box-shadow: 0 8px 15px 0 rgba(199,199,199,0.50);
      .details-tag {
        position: absolute;
        top: 0;
        right: 10px;
        margin-left: 0;
      }
      .details-symbol {
        line-height: 75px;
        font-size: 30px;
        color: #D8A950;
      }
      .details-time {
        width: 80px;
        text-align: center;
        font-weight: bold;
        .details-timeDesc {
          color: #C6AA67;
          padding-bottom: 8px;
          border-bottom: 1px solid #ECECEC;
        }
        .details-date {
          margin-top: 7px;
          font-size: 11px;
          color: #333333;
        }
        .details-hour {
          font-size: 17px;
          color: #151515;
        }
      }
    }
    // 预约详情
    .details-info {
      padding: 20px 15px;
      .details-oddnum {
        line-height: 30px;
        background: #FFFAF5;
        color: #FF8800;
        font-size: 12px;
        text-align: center;
      }
      // 每行信息
      .details-row {
        display: flex;
        margin-top: 15px;
        line-height: 20px;
        font-size: 13px;

        .details-desc{
          width: 50%;
        }
        
        .details-name {
          color: #AEAEAE;
          min-height: 40px;
        }
      }

      .details-line {
        width: 100%;
        height: 1px;
        margin-top: 15px;
        background: #D8D8D8;
      }
    }
    // 随员详情
    .details-rettitle {
      line-height: 41px;
      padding-left: 10px;
      font-size: 14px;
      color: #232323;
    }

    .details-retInfo {
      border-top: 1px solid  #EFB13E;
      position: relative;
      // 编号
      .details-retnum {
        width: 16px;
        height: 16px;
        position: absolute;
        transform: rotate(-270deg);
        background-image: linear-gradient(-217deg, #F7DE74 0%, #EEAC38 100%);
        border-radius: 0 5px 5px 0;
        top: 0;
        left: 11px;
        .details-id {
          transform: rotate(270deg);
          display: inline-block;
          position: absolute;
          top: 1px;
          left: 4px;
          color: #fff;
          font-size: 11px;
        }
      }
      // 信息内容
      .details-retDesc {
        padding-left: 40px;
        padding-bottom: 12px;
        .details-row {
          display: flex;
          margin-top: 10px;
          &:first-child {
            margin-top: 6px;
          }
          .details-desc {
            width: 50%;
            display: flex;
            &.details-add {
              width: 100%;
            }
            .details-icon{
              width: 13px;
              height: 13px;
              background: #ffffff;
              border-radius: 50%;
              margin-top: 2px;
            }
            .details-retname {
              color: #999999;
              margin-left: 5px;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>

