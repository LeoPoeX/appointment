<template>
  <div class="audit-box">
    <!-- 内容 -->
    <Details :info="detailInfo" />

    <!-- 尾部 -->
    <footer class="audit-audit">
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
          this.detailInfo.status = 3;
        }, 3000)
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
          this.detailInfo.status = 2;
        }, 3000)
      })
    },
    
  },
}
</script>

<style lang="less">
.audit-box {
  padding-top: 10px;
  padding-bottom: 50px;
  background: url('../assets/images/back.png') no-repeat;
  background-size: 100% 219px;
  background-position-y: -30px;

  .audit-audit {
    width: 100%;
    height: 42px;
    position: fixed;
    bottom: 0;
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
        border-left: 1px solid #DFDFDF;
        &:first-child {
          border-left: 0;
        }
        .audit-icon {
          width: 12px;
          height: 12px;
          margin-top: 3px;
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


