<template>
  <div class="details-box">
    <diV class="details-content">
      <!-- 到达时间和离开时间 -->
      <div class="details-timeBox">
        <span :class="`details-tag ${status}-tag`">待审核</span>
        <div class="details-time">
          <p class="details-timeDesc">到达时间</p>
          <p class="details-date">2019/07/12</p>
          <p class="details-hour">09:00</p>
        </div>
        <div class="details-symbol">~</div>
        <div class="details-time">
          <p class="details-timeDesc">离开时间</p>
          <p class="details-date">2019/07/12</p>
          <p class="details-hour">15:00</p>
        </div>
      </div>

      <!-- 预约详情 -->
      <div class="details-info">
        <p class="details-oddnum">预约单号：YY19000145</p>
        
        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">预约人：</span>
            <span>矮大紧</span>
          </div>
          <div class="details-desc">
            <span class="details-name">电话：</span>
            <span>15900000001</span>
          </div>
        </div>

        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">职务：</span>
            <span>财务总监</span>
          </div>
          <div class="details-desc">
            <span class="details-name">车牌：</span>
            <span>苏E384A1</span>
          </div>
        </div>

        <div class="details-row">
            <span class="details-site">地址：</span>
            <span>昆山XXXXX精密仪器股份有限公司 </span>
        </div>

        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">来访事由：</span>
            <span>商务交流</span>
          </div>
          <div class="details-desc">
            <span class="details-name">来访人数：</span>
            <span>4人</span>
          </div>
        </div>

        <div class="details-line"></div>

        <div class="details-row">
          <div class="details-desc">
            <span class="details-name">接待人：</span>
            <span>王长阳</span>
          </div>
          <div class="details-desc">
            <span class="details-name">电话：</span>
            <span>15900000002</span>
          </div>
        </div>

      </div>

    </diV>

    <!-- 随员详情 -->
    <div class="details-content">
      <div class="details-rettitle">
        随员详情
      </div>
      <!-- 随员信息 -->
      <div class="details-retInfo" v-for="( item, id ) in list" :key="id">
        <!-- 编号 -->
        <div class="details-retnum"><span class="details-id">{{ item.id }}</span></div>
        <!-- 信息内容 -->
        <div class="details-retDesc">

          <div class="details-row">
            <div class="details-desc">
             <div class="details-icon"><img /></div>
              <span class="details-retname">{{ item.name }}</span>
            </div>
            <div class="details-desc">
              <div class="details-icon"><img /></div>
              <span class="details-retname">{{ item.tel }}</span>
            </div>
          </div>

          <div class="details-row">
            <div class="details-desc">
             <div class="details-icon"><img /></div>
              <span class="details-retname">{{ item.post }}</span>
            </div>
            <div class="details-desc">
              <div class="details-icon"><img /></div>
              <span class="details-retname">{{ item.platenum }}</span>
            </div>
          </div>

          <div class="details-row">
            <div class="details-desc details-add">
              <div class="details-icon"><img /></div>
              <span class="details-retname">{{ item.add }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    list: Array,
    status: { // 'audit', 'pass', 'over'
      type: String,
      default: 'audit'
    }
  }
}
</script>

<style lang="less">
.details-box {
  margin: 35px 15px 0 15px;
  
  .details-content {
    background: #FFFFFF;
    border: 0.5px solid #D6D6D6;
    border-radius: 8px;
    margin-top: 10px;
    // 到达时间和离开时间
    .details-timeBox {
      padding: 24px 24px 15px 24px;
      display: flex;
      position: relative;
      align-content: center;
      justify-content: space-around;
      box-shadow: 0 8px 15px 0 rgba(199,199,199,0.50);
      .details-tag {
        width: 48px;
        height: 20px;
        line-height: 20px;
        border-radius: 0 0 4px 4px;
        text-align: center;
        color: #FFFFFF;
        position: absolute;
        top: 0;
        right: 10px;
        // 待审核标签
        &.audit-tag {
          background: #FF0000;
        }
        // 待放行标签
        &.pass-tag {
          background: #00A83B;
        }
        // 已放行标签
        &.over-tag {
          background: #989898;
        }
      }
      .details-symbol {
        line-height: 75px;
        font-size: 30px;
        color: #D8A950;
      }
      .details-time {
        width: 70px;
        text-align: center;
        font-weight: bold;
        .details-timeDesc {
          color: #C6AA67;
          padding-bottom: 8px;
          border-bottom: 1px solid #EBEBEB;
        }
        .details-date {
          margin-top: 7px;
          font-size: 13px;
        }
        .details-hour {
          font-size: 15px;
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
        font-size: 14px;
        text-align: center;
      }
      // 每行信息
      .details-row {
        display: flex;
        margin-top: 15px;
        line-height: 20px;
        font-size: 14px;

        .details-desc{
          width: 50%;
          .details-name {
            color: #AEAEAE;
          }
        }
        // 地址
        .details-site {
          color: #AEAEAE;
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
          top: 0;
          left: 4px;
          color: #fff;
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
              background: #F6CD80;
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

