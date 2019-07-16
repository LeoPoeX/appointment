<template>
  <div class="audit-box">
    <!-- 头部 -->
    <Header title="待审核申请"/>

    <!-- 内容 -->
    <Details :list="waitAuditList"  status="audit" />

    <!-- 尾部 -->
    <footer class="audit-audit">
      <div class="audit-auditbox">
        <!-- 通过 -->
        <div class="audit-YoN" @click="viaModal">
          <img class="audit-icon" src="../assets/images/done.png" />
          <p class="audit-done">通过</p>
        </div>
        <!-- 拒绝 -->
        <div class="audit-YoN" @click="errorModal">
          <img class="audit-icon" src="../assets/images/not.png" />
          <p class="audit-not">拒绝</p>
        </div>
        
      </div>
    </footer>

    <!-- 通过弹窗 -->
    <div class="modal-backdrop" v-if="viaShow" >
      <div class="modal-iconback modal-via">
        <img class="modal-icon" src="../assets/images/done_mini.png" />
      </div>
      <div class="modal-error">
        <div>预约单号：YY190000145</div>
        <div>审核通过</div>
      </div>
    </div>

    <!-- 拒绝弹窗 -->
    <div class="modal-backdrop" v-if="isShow" >
      <div class="modal-iconback">
        <img class="modal-icon" src="../assets/images/close_mini.png" />
      </div>
      <div class="modal-error">
        <div>预约单号：YY190000145</div>
        <div>审核不通过</div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from '../components/Header';
import Details from '../components/Details.vue';
import utils from '../utils';
export default {
  data () {
    return {
      viaShow: false,
      isShow: false,
      waitAuditList: [
        {
          id: 1,
          name: '李鸿章',
          tel: 15900000001,
          post: '财务总监',
          platenum: '苏E 38A01',
          add: '昆山XXXXX精密仪器股份有限公司'
        },
        {
          id: 2,
          name: '张 扬',
          tel: 15900000001,
          post: '财务总监',
          platenum: '苏E 38A01',
          add: '昆山XXXXX精密仪器股份有限公司'
        },
        {
          id: 3,
          name: '张之洞',
          tel: 15900000001,
          post: '财务总监',
          platenum: '苏E 38A01',
          add: '昆山XXXXX精密仪器股份有限公司'
        },
        {
          id: 4,
          name: '左宗堂',
          tel: 15900000001,
          post: '财务总监',
          platenum: '苏E 38A01',
          add: '昆山XXXXX精密仪器股份有限公司'
        },
      ]
    }
  },
  components: {
    Header,
    Details
  },
  methods: {
    viaModal () {
      this.viaShow = true;
    },
    errorModal () {
      this.isShow = true;
    },
  },
}
</script>

<style lang="less">
.audit-box {
  padding-top: 40px;
  padding-bottom: 50px;
  background: url('../assets/images/back.png') no-repeat;
  background-size: 100% 219px;

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

  .modal-backdrop {
    position: fixed; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .modal-iconback {
      background: #ff0000;
      border-radius: 50%;
      width: 71px;
      height: 71px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.modal-via {
        background: #00A83B;
      }
      .modal-icon {
        width: 23px;
        height: 23px;
      }
    }
    .modal-error {
      margin-top: 15px;
      color: #FFEC00;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>


