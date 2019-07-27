<template>
    <!-- 内容 -->
    <div class="pass-content" >
      <img class="pass-close" src="../assets/images/close.png" @click="closePermitModal" />
      <div class="pass-content-header">
        <p class="pass-details">预约单详情</p>
        <div class="pass-odd">
          <p>单号</p>
          <p>190000145</p>
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
            <p class="pass-footcont">{{info.visitor_name}}</p>
            <p class="pass-footcont">{{Array.isArray(info.followers) ? info.followers.length : 1}}人</p>
            <p class="pass-footcont">15721064851</p>
          </div>
        </div>

      </div>
      

    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'Pass',
  props: {
    closePermitModal: {
      type: Function,
      default: () => {}
    },
    info: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  mounted () {
    this.renderQrcode();
  },
  methods: {
    renderQrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 160,  
        height: 160,
        text: 'https://visitor-frontend.fookwood.com', // 二维码地址
        colorDark : "#1678E5",
        colorLight : "#fff",
      })
      return qrcode;
    },
  },
}
</script>

<style lang="less">

.pass-content {
  width: 100%;
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
        padding: 40px 25%;
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

</style>

