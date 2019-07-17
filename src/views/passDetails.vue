<template>
  <div class="pass-box">
    <!-- 头部 -->
    <Header title="待放行申请"/>

    <!-- 内容 -->
    <Details :list="passList" status="pass" />

  </div>
</template>

<script>
import Header from '../components/Header';
import Details from "../components/Details.vue";
export default {
  data () {
    return {
      passList: [
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
  }
}
</script>

<style lang="less">
.pass-box {
  padding-top: 40px;
  padding-bottom: 10px;
  background: url('../assets/images/back.png') no-repeat;
  background-size: 100% 219px;
}

</style>


