<template>
  <div class="appoinsuccess-box">

    <!-- 内容 -->
    <div class="appoinsuccess-content">
      <router-link to="/"><img class="appoinsuccess-close" src="../assets/images/close.png" /></router-link>
      <div class="appoinsuccess-content-header">
        <p class="appoinsuccess-details">预约单详情</p>
        <div class="appoinsuccess-odd">
          <p>单号</p>
          <p>190000145</p>
        </div>
      </div>

      <div class="appoinsuccess-remain">

        <div class="appoinsuccess-title">
          <img class="appoinsuccess-img" src="../assets/images/success.png" />
          <p class="appoinsuccess-text">预约成功！</p>
        </div>
        <!-- 二维码 -->
        <div class="appoinsuccess-QR">
          <canvas id="canvas"></canvas>
        </div>

        <div class="appoinsuccess-footer">
          <div class="appoinsuccess-footbox">
            <p class="appoinsuccess-footcont">来访人</p>
            <p class="appoinsuccess-footcont">随行人</p>
            <p class="appoinsuccess-footcont">手机号</p>
          </div>
          <div class="appoinsuccess-footbox">
            <p class="appoinsuccess-footcont">矮大紧</p>
            <p class="appoinsuccess-footcont">4人</p>
            <p class="appoinsuccess-footcont">15721064851</p>
          </div>
        </div>

      </div>
      

    </div>

  </div>  
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'appoinsuccess',
  components: {
    QRCode: QRCode
  },
  methods: {
    useqrcode(){
      var canvas = document.getElementById('canvas')
      QRCode.toCanvas(canvas, 'https://visitor-frontend.fookwood.com', function (error) {
        if (error) {
          console.error(error)
        }
      })
    }
  },
  mounted () {
    this.useqrcode()
  }
}
</script>

<style lang="less">
.appoinsuccess-box {
  background: #616161;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  display: table;

  .appoinsuccess-content {
    padding: 0 15px;
    display: table-cell;
    vertical-align: middle;

    .appoinsuccess-close {
      display: block; 
      float: right; 
      width: 18px;
      height: 18px;
    }

    .appoinsuccess-content-header {
      background: #F9D18C;
      padding: 7px 12px 7px 24px;
      display: flex;
      justify-content: space-between;
      clear: both;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      .appoinsuccess-details {
        color: #835B02;
        line-height: 36px;
        font-size: 15px;
      }

      .appoinsuccess-odd {
        text-align: right;
        color: #815900;
      }
    }

    .appoinsuccess-remain {
      background: #FFFFFF;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      .appoinsuccess-title {
        text-align: center;
        padding-top: 15px;

        .appoinsuccess-img {
          width: 42px;
        }

        .appoinsuccess-text {
          color: #00A83B;
          font-size: 28px;
        }
      }

      .appoinsuccess-QR {
        padding: 25px 25%;
        text-align: center;

        #canvas {
          width: 160px;
          height: 160px;
        }
      }

      .appoinsuccess-footer {
        padding: 12px 11px;

        .appoinsuccess-footbox {
          background: #FFFAF5;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #DDDDDD;

          &:last-child {
            border-bottom: 0;
          }

          .appoinsuccess-footcont {
            width: 30%;
            text-align: center;
          }
        }
      }

    }
    
  }

}
</style>

