<template>
  <div class="appoinsuccess-box">

    <!-- 内容 -->
    <div class="appoinsuccess-content">
      <router-link to="/list?activeTab = 2"><img class="appoinsuccess-close" src="../assets/images/close.png" /></router-link>
      <div class="appoinsuccess-content-header">
        <p class="appoinsuccess-details">预约单详情</p>
        <div class="appoinsuccess-odd">
          <p>单号</p>
          <p>{{info.ticket_id }}</p>
        </div>
      </div>

      <div class="appoinsuccess-remain">

        <div class="appoinsuccess-title">
          <img class="appoinsuccess-img" src="../assets/images/success.png" />
          <p class="appoinsuccess-text">预约成功！</p>
        </div>
        <!-- 二维码 -->
        <div id="qrcode">
        </div>

        <div class="appoinsuccess-footer">
          <div class="appoinsuccess-footbox">
            <p class="appoinsuccess-footcont appoinsuccess-footname">来访人</p>
            <p class="appoinsuccess-footcont appoinsuccess-footname">随行人</p>
            <p class="appoinsuccess-footcont appoinsuccess-footname">手机号</p>
          </div>
          <div class="appoinsuccess-footbox">
            <p class="appoinsuccess-footcont">{{ info.visitor_name }}</p>
            <p class="appoinsuccess-footcont">{{ info.followers }}人</p>
            <p class="appoinsuccess-footcont">{{ info.visitor_phone }}</p>
          </div>
        </div>

      </div>
      

    </div>

  </div>  
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'appoinsuccess',
  components: {
    QRCode: QRCode
  },
  data() {
    return {
      info: {},
      toTab: 0, // 要跳转的tab，默认为0，保持keep-alive，当大于0时，跳转到对应的tab页下
    }
  },
  created () {
    this.getQueryString();
    this.returnList();
  },
  beforeRouteLeave(to, from, next) {
    // 设置当前路由的 meta
    to.meta.keepAlive = Number(this.toTab) > 0 ? false : true;
    next();
  },
  mounted () {
    this.renderQrcode();
  },
  methods: {
    getQueryString() {
      this.info = this.$route.query;
    },
    renderQrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 160,  
        height: 160,
        text: this.info.qr_string, // 二维码地址
        colorDark : "#1678E5",
        colorLight : "#fff",
      })
      return qrcode;
    },
    returnList() {
      setTimeout( () => {
        this.toTab = 2;
        this.$router.push({ path: `/list`, query: { activeTab: '2' } });
      }, 3000)
    }
  },
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
      background: url("../assets/images/permit.png") no-repeat;
      background-size: 100% 100%;
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
        font-size: 12px;
      }
    }

    .appoinsuccess-remain {
      background: #FFFFFF;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      .appoinsuccess-title {
        text-align: center;
        padding-top: 10px;

        .appoinsuccess-img {
          width: 42px;
        }

        .appoinsuccess-text {
          color: #00A83B;
          font-size: 18px;
        }
      }

      #qrcode {
        padding-top: 5px;
        text-align: center;
        img {
          display: inline-block !important;
          background: #fff;
        }
      }

      .appoinsuccess-footer {
        padding: 12px 11px;
        font-size: 12px;

        .appoinsuccess-footbox {
          background: #FFFAF5;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #DEDEDE;

          &:last-child {
            border-bottom: 0;
          }

          .appoinsuccess-footcont {
            width: 30%;
            text-align: center;

            &.appoinsuccess-footname {
              color: #C6AA67;
            }
          }
        }
      }
    }
  }
}
</style>

