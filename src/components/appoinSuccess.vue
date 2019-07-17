<template>
  <div class="appoinsuccess-box">
    <!-- 头部 -->
    <mt-header title="通行证" class="appoinsuccess-header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

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
          <div class="appoinsuccess-QRimg"></div>
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
export default {
  name: 'appoinsuccess',
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

  .appoinsuccess-header{
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12); 
    color: #333333; 
    font-size: 1.7rem;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .appoinsuccess-content {
    padding: 0 15px;
    display: table-cell;
    vertical-align: middle;

    .appoinsuccess-close {
      display: block; 
      float: right; 
      width: 1.5rem;
      height: 1.5rem;
    }

    .appoinsuccess-content-header {
      background: #F9D18C;
      padding: 0.6rem 1rem 0.6rem 2rem;
      display: flex;
      justify-content: space-between;
      clear: both;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      .appoinsuccess-details {
        color: #835B02;
        line-height: 36px;
        font-size: 1.5rem;
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

        .appoinsuccess-QRimg {
          display: inline-block;
          background: #1979F2;
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

