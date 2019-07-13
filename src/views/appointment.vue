<template>
  <div class="index-box">
    <mt-header title="我要预约" style="background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12); color: #333333;">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>


  </div>
</template>


<script>
export default {
  
}
</script>


<style lang="less">
.index-box {

  // 顶部
  .title {
  width: 100%;
  height: 3.6rem;
  text-align: center;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
  box-shadow: 0  0.1rem 0.1rem 0 rgba(0,0,0,0.12);
  position: fixed;
  top: 0;
  z-index: 10;

    .arrow {
      width: 2.2rem;
      height: 2.2rem;
      position: absolute;
      left: 1.4rem;
      margin-top: 0.6rem;
    }

    p {
      margin: 0;
      font-size: 1.8rem;
      display: inline-block;
      line-height: 3.6rem;
    }
  }

}

</style>

