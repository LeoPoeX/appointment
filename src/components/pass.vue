<template>
  <div class="pass-box">
    <!-- 内容 -->
    <div class="pass-content" >
      <router-link to="/"><img class="pass-close" src="../assets/images/close.png" /></router-link>
      <div class="pass-content-header">
        <p class="pass-details">预约单详情</p>
        <div class="pass-odd">
          <p>单号</p>
          <p>{{ detailInfo.query.ticket_id }}</p>
        </div>
      </div>
  
      <div class="pass-remain">  
        <!-- 二维码 -->
        <div id="qrcode">
        </div>

        <div class="pass-footer">
          <div class="pass-footbox">
            <p class="pass-footcont pass-footname">来访人</p>
            <p class="pass-footcont pass-footname">随行人</p>
            <p class="pass-footcont pass-footname">手机号</p>
          </div>
          <div class="pass-footbox">
            <p class="pass-footcont">{{ detailInfo.query.visitor_name }}</p>
            <p class="pass-footcont">{{detailInfo.query.followers.length + 1}}人</p>
            <p class="pass-footcont">{{ detailInfo.query.visitor_phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
// import axios from 'axios'
export default {
  name: 'Pass',
  data() {
    return {
      detailInfo: {},
    }
  },
  created () {
    this.getQueryString();
  },
  mounted () {
    this.renderQrcode();
  },
  methods: {
    getQueryString() {
      this.detailInfo = this.$route;
    },
    renderQrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 160,  
        height: 160,
        text: this.detailInfo.query.qr_string, // 二维码地址
        colorDark : "#1678E5",
        colorLight : "#fff",
      })
      return qrcode;
    },
  },
}
</script>

<style lang="less">
.pass-box {
  background: #616161;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  display: table;

  .pass-content {
    padding: 0 15px;
    display: table-cell;
    vertical-align: middle;

    .pass-close {
      display: block; 
      float: right; 
      width: 18px;
      height: 18px;
    }

    .pass-content-header {
      background: url("../assets/images/permit.png") no-repeat;
      background-size: 100% 100%;
      padding: 7px 12px 7px 24px;
      display: flex;
      justify-content: space-between;
      clear: both;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      .pass-details {
        color: #835B02;
        line-height: 36px;
        font-size: 15px;
      }

      .pass-odd {
        text-align: right;
        color: #815900;
        font-size: 12px;
      }
    }

    .pass-remain {
      background: #FFFFFF;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      #qrcode {
        padding: 40px 0;
        text-align: center;
        img {
          display: inline-block !important;
          background: #fff;
        }
      }

      .pass-footer {
        padding: 12px 11px;
        font-size: 12px;

        .pass-footbox {
          background: #FFFAF5;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #DDDDDD;

          &:last-child {
            border-bottom: 0;
          }

          .pass-footcont {
            width: 30%;
            text-align: center;
            &.pass-footname {
              color: #C6AA67;
            }
          }
        }
      }
    }
  }
}
</style>

