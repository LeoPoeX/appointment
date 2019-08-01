<template>
  <div class="index-box">
    <!-- <div class="index-content">
      黑
    </div>

    <div class="index-content">
      黑
    </div>

    <div class="index-content">
      黑
    </div>

    <div class="index-content">
      黑
    </div> -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>

    <div class="index-bottom">
        底部
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>

<style lang="less">
body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.index-box {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  .index-content {
    display: inline-block;
    width: 200px;
    height: 200px;
    background: blue;
    margin: 40px 0;
  }
  .index-bottom {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    background: red;
  }
}

</style>

