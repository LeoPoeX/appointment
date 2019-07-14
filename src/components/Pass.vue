<template>
  <div class="pass-box">
    <!-- 头部 -->
    <mt-header title="通行证" class="pass-header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 内容 -->
    <div class="pass-content">
      <router-link to="/"><img class="close" src="../assets/images/close.png" /></router-link>
      <div class="content-header">
        <p class="Booking-details">预约单详情</p>
        <div class="odd-number">
          <p>单号</p>
          <p>190000145</p>
        </div>
      </div>

      <div class="content-remain">
        <!-- 二维码 -->
        <div class="QR-code">
          <div class="QR-img"></div>
        </div>

        <div class="footer">
          
        </div>

      </div>
      

    </div>

  </div>  
</template>

<script>
export default {
  name: 'Pass',
}
</script>

<style lang="less">
.pass-box {
  padding-top: 40px;
  background: #616161;
  height: 100%;

  .pass-header{
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12); 
    color: #333333; 
    font-size: 1.7rem;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .pass-content {
    margin: 1.3rem;

    .close {
      display: block; 
      float: right; 
      width: 1.5rem;
      height: 1.5rem;
    }

    .content-header {
      background: #F9D18C;
      padding: 0.6rem 1rem 0.6rem 2rem;
      display: flex;
      justify-content: space-between;
      clear: both;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;


      .Booking-details {
        color: #835B02;
        line-height: 36px;
        font-size: 1.5rem;
      }

      .odd-number {
        text-align: right;
        color: #815900;
      }
    }

    .content-remain {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      .QR-code {
        background: #FFFFFF;
        padding: 45px 25%;

        .QR-img {
          background: #000;
          width: 160px;
          height: 160px;
        }
      }

    }
    
  }

}
</style>

