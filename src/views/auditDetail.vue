<template>
  <div class="audit-container">
    <!-- 内容 -->
    <div :class="`audit-content ${detailInfo.state === 1 ? 'has-footer' : ''}`">
      <Details :info="detailInfo" />
    </div>

    <!-- 尾部 -->
    <footer class="audit-footer" v-if="detailInfo.state === 1">
      <div class="audit-auditbox">
        <!-- 通过 -->
        <div class="audit-YoN" @click="handlePassModal">
          <img class="audit-icon" src="../assets/images/done.png" />
          <p class="audit-done">通过</p>
        </div>
        <!-- 拒绝 -->
        <div class="audit-YoN" @click="handleRejectModal">
          <img class="audit-icon" src="../assets/images/not.png" />
          <p class="audit-not">拒绝</p>
        </div>
        
      </div>
    </footer>

    <!-- 通过弹窗 -->
    <transition name="fade">
      <Modal v-if="passModal.visible" :orderNo="passModal.orderNo" status="pass" />
    </transition>

    <!-- 拒绝弹窗 -->
    <transition name="fade">
      <Modal v-if="rejectModal.visible" :orderNo="rejectModal.orderNo" status="reject" />
    </transition>

  </div>
</template>

<script>
import Details from '../components/details';
import Modal from '../components/modal';
import axios from 'axios';
import utils from '../utils';
export default {
  data () {
    return {
      // 通过弹窗显示
      passModal: {
        visible: false,
        orderNo: ''
      },
      // 拒绝弹窗显示
      rejectModal: {
        visible: false,
        orderNo: ''
      },
      toTab: 0, // 要跳转的tab，默认为0，保持keep-alive，当大于0时，跳转到对应的tab页下
      detailInfo: {}
    }
  },
  components: {
    Details,
    Modal
  },
  created() {
    this.getDetailInfo();
  },
  beforeRouteLeave(to, from, next) {
    // 设置当前路由的 meta
    to.meta.keepAlive = Number(this.toTab) > 0 ? false : true;
    next();
  },
  methods: {
    getDetailInfo () {
      const { params } = this.$route;
      if (!params.id) return;

      axios({
        method:'get',
        url: `/api/employee/appointment/${params.id}`,
        headers: {'X-Token': window.localStorage.getItem('user-token')},
      }).then(({data}) => {
        this.detailInfo = data
        this.detailInfo.start_day = utils.parseTime(this.detailInfo.start_time, 'yyyy-MM-dd');
        this.detailInfo.end_day = utils.parseTime(this.detailInfo.end_time, 'yyyy-MM-dd');
        this.detailInfo.start_time = utils.parseTime(this.detailInfo.start_time, 'hh:mm');
        this.detailInfo.end_time = utils.parseTime(this.detailInfo.end_time, 'hh:mm');
      }).catch((error) => {
        utils.handleNetworkError(error);
        this.$router.back(-1);
      })
    },
    // 通过弹窗
    handlePassModal () {
      const { params } = this.$route;
      if (!params.id) return;
      axios({
        method:'post',
        url: `/api/employee/appointment/${params.id}/check`,
        data: {
          approved: true
        },
        headers: {'X-Token': window.localStorage.getItem('user-token')},
      }).then(() => {
        this.passModal.visible = true;
        this.passModal.orderNo = this.detailInfo.ticket_id;
        setTimeout( () => {
          this.passModal.visible = false;
          this.detailInfo.state = 3;
          this.toTab = 2;
          this.$router.push({ path: `/list`, query: { activeTab: '2' } });
        }, 3000)
      }).catch((error) => {
        utils.handleNetworkError(error);
      })
    },
    // 拒绝弹窗
    handleRejectModal () {
      const { params } = this.$route;
      if (!params.id) return;
      axios({
        method:'post',
        url: `/api/employee/appointment/${params.id}/check`,
        data: {
          approved: false
        },
        headers: {'X-Token': window.localStorage.getItem('user-token')},
      }).then(() => {
        this.rejectModal.visible = true;
        this.rejectModal.orderNo = this.detailInfo.ticket_id;
        setTimeout( () => {
          this.rejectModal.visible = false;
          this.detailInfo.state = 2;
          this.toTab = 3;
          this.$router.push({ path: `/list`, query: { activeTab: '3' } });
        }, 3000)
      }).catch((error) => {
        utils.handleNetworkError(error);
      })
    },
    
  },
}
</script>

<style lang="less">

.audit-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: calc(env(safe-area-inset-bottom) + 0px) !important;
  bottom: calc(constant(safe-area-inset-bottom) + 0px) !important;
  background: url('../assets/images/back.png') no-repeat;
  background-size: 100% 219px;
  background-position-y: -30px;

  .audit-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: env(safe-area-inset-bottom) !important;
    bottom: constant(safe-area-inset-bottom) !important;
    &.has-footer {
      bottom: calc(env(safe-area-inset-bottom) + 42px) !important;
      bottom: calc(constant(safe-area-inset-bottom) + 42px) !important;
    }
  }

  .audit-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    height: 42px;
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    .audit-auditbox {
      display: flex;
      height: 100%;
      .audit-YoN {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #ECECEC;
        &:first-child {
          border-left: 0;
        }
        .audit-icon {
          width: 12px;
          height: 12px;
          margin-top: 2px;
        }
        // 通过
        .audit-done {
          color: #00A83B;
          margin-left: 5px;
        }
        // 拒绝
        .audit-not {
          color: #FF0000;
          margin-left: 5px;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>


