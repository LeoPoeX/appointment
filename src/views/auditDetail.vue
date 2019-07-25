<template>
  <div class="audit-box">
    <!-- 内容 -->
    <Details :info="detailInfo" />

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
import Details from '../components/details';
import Modal from '../components/modal';
import axios from 'axios';
export default {
  data () {
    return {
      viaShow: false,
      isShow: false,
      detailInfo: {},
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
    Details,
    Modal
  },
  created() {
    this.getList();
  },
  methods: {
    getList () {
      const { params } = this.$route;
      if (!params.id) return;

      axios({
        method:'get',
        url: `/api/employee/appointment/${params.id}`,
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({data}) => {
        this.detailInfo = data
        this.detailInfo.start_time = new Date(+new Date(this.detailInfo.start_time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        this.detailInfo.end_time = new Date(+new Date(this.detailInfo.end_time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
      })
    },
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


