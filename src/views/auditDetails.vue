<template>
  <div class="audit-box">
    <!-- 头部 -->
    <Header title="待审核申请"/>

    <!-- 内容 -->
    <Details :list="waitAuditList" status="audit" />

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
    <Modal v-if="viaShow" :list="viaList" status="via" />

    <!-- 拒绝弹窗 -->
    <Modal v-if="isShow" :list="errorList" status="error" />

  </div>
</template>

<script>
import Header from '../components/Header';
import Details from '../components/Details';
import Modal from '../components/Modal';
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
      ],
      // 通过弹窗显示
      viaList: [{
        oddnum: '预约单号：YY190000145',
        YorN: '审核通过',
      }],
      // 拒绝弹窗显示
      errorList: [{
        oddnum: '预约单号：YY190000145',
        YorN: '审核不通过',
      }]
    }
  },
  components: {
    Header,
    Details,
    Modal
  },
  methods: {
    viaModal () {
      this.viaShow = true;
      document.body.style.overflow="hidden";
    },
    errorModal () {
      this.isShow = true;
      document.body.style.overflow="hidden";
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

  
}
</style>


