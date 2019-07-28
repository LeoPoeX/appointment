<template>
  <div>
    <div class="visitor followers-info" v-for="(user, index) in followers" :key="index">

      <div class="content">
        <img class="img-backgro" src="../assets/images/name.png" />
        <input type="text" placeholder="姓名（必填）" v-model="user.name" />
      </div>

      <div class="content">
        <img class="img-backgro" src="../assets/images/tel.png" />
        <van-field
          readonly
          clickable
          class="appoin-inp"
          :value="user.phone"
          placeholder="电话（必填）"
          @touchstart.native.stop="showUserPhone = true"
        />
          <!-- 数字键盘 -->
        <van-number-keyboard
          v-model="user.phone"
          :show="showUserPhone"
          :maxlength="11"
          close-button-text="完成"
          @blur="showUserPhone = false"
        />
      </div>

      <div class="content">
        <img class="img-backgro" src="../assets/images/post.png" />
        <input type="text" placeholder="职位（必填）" v-model="user.position" />
      </div>

      <div class="content">
        <img  class="img-backgro" src="../assets/images/firm.png" />
        <input type="text" placeholder="公司（必填）" v-model="user.organization" />
      </div>

      <div class="content">
        <img class="img-backgro" src="../assets/images/car.png" />
        <input type="text" placeholder="车牌（选填）" v-model="user.car_number" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showUserPhone: false,
    }
  },
  props: {
    followers: Array
  }
}
</script>

<style lang="less">
 .followers-info {
  padding:0 15px 12px 15px;
  border-top: 1px solid #ECECEC;

  .content {
    display: flex;
    margin-top: 12px;
    align-items: center;

    .img-backgro {
      width: 20px;
      height: 20px;
      background: #ffffff;
      border-radius: 50%;
    }

    .appoin-inp {
      border: 0;
      padding: 0;
    }

    input {
      width: 100%;
      border: 0;
      margin-left: 5px;
      border-bottom: 0.5px solid #DEDEDE;
      border-radius: 0;
      font-size: 12px;
      line-height: 20px;
      padding: 3px 0;
      &:-ms-input-placeholder {
        color: #999999;
      }
    }
  }

}
</style>

