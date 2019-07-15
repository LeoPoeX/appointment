<template>
  <div class="audit-box">
    <!-- 头部 -->
    <Header title="待审核申请"/>

    <!-- 内容 -->
    <Details />
  </div>
</template>

<script>
import Header from '../components/Header';
import Details from "../components/Details.vue";
import utils from "../utils";
export default {
  components: {
    Header,
    Details
  }
}
</script>

<style lang="less">
.audit-box {
  padding-top: 40px;

  .audit-header {
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12); 
    color: #333333; 
    font-size: 1.7rem;
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>


