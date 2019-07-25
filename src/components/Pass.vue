<template>
  <div class="pass-box">
    <!-- 内容 -->
    <div class="pass-content">
      <router-link to="/"><img class="pass-close" src="../assets/images/close.png" /></router-link>
      <div class="pass-content-header">
        <p class="pass-details">预约单详情</p>
        <div class="pass-odd">
          <p>单号</p>
          <p>190000145</p>
        </div>
      </div>
      
      <div class="pass-slice"></div>

      <div class="pass-remain">  
        <!-- 二维码 -->
        <div class="pass-QR">
          <canvas id="canvas"></canvas>
        </div>

        <div class="pass-footer">
          <div class="pass-footbox">
            <p class="pass-footcont">来访人</p>
            <p class="pass-footcont">随行人</p>
            <p class="pass-footcont">手机号</p>
          </div>
          <div class="pass-footbox">
            <p class="pass-footcont">矮大紧</p>
            <p class="pass-footcont">4人</p>
            <p class="pass-footcont">15721064851</p>
          </div>
        </div>

      </div>
      

    </div>

  </div>  
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'Pass',
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
      }
    }

    .pass-slice {
      background: url("../assets/images/Slice.png") no-repeat;
      background-size: 100% 10px;
      width: 100%;
      height: 10px;
    }

    .pass-remain {
      background: #FFFFFF;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      .pass-QR {
        padding: 45px 25%;
        text-align: center;

        #canvas {
          width: 160px;
          height: 160px;
        }
      }

      .pass-footer {
        padding: 12px 11px;

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
          }
        }
      }

    }
    
  }

}
</style>

