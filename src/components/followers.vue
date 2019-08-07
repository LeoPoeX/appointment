<template>
  <div>
    
    <div class="follower-info" v-for="(user, index) in followers" :key="index">
      <div class="yuyueTitle">
        <p>随员{{index+1}}</p>
        <img class="follower-img" @click="prune(index)" src="../assets/images/minus.png" />
      </div>

      <div class="follower-detail">
        <div class="content">
          <img class="img-backgro" src="../assets/images/name.png" />
          <input type="text" placeholder="姓名（必填）" v-model="user.name" @blur.prevent="saveDraft" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/tel.png" />
          <input
            v-model="user.phone"
            type="tel"
            oninput="if(value.length>11) value=value.slice(0,11),value=value.replace(/[^\d]/g,'')"
            maxlength="11"
            placeholder="电话"
            @blur.prevent="saveDraft"
            />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/post.png" />
          <input type="text" placeholder="职位" v-model="user.position" @blur.prevent="saveDraft" />
        </div>

        <div class="content">
          <img  class="img-backgro" src="../assets/images/firm.png" />
          <input type="text" placeholder="公司（必填）" v-model="user.organization" @blur.prevent="saveDraft" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/car.png" />
          <input type="text" placeholder="车牌" v-model="user.car_number" @blur.prevent="saveDraft" />
        </div>
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
    followers: {
      type: Array,
      required: true
    },
    saveDraft: {
      type: Function,
      required: true
    },
    prune: {
      type: Function,
      required: true
    },
    people: Number
  }
}
</script>

<style lang="less">
.follower-info {
  margin: 15px;
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  background: #fff;

  .yuyueTitle {
    line-height: 40px;
    padding: 0 12px 0 10px;
    font-size: 14px;
    letter-spacing: 1.56px;
    border-bottom: 1px solid #ECECEC;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .follower-img {
      width: 24px;
      height: 24px;
    }
  }

  .follower-detail {
    padding: 0 12px 15px 12px;
    .content {
      display: flex;
      height: 40px;
      align-items: center;

      .img-backgro {
        width: 20px;
        height: 20px;
        background: #ffffff;
        border-radius: 50%;
      }

      input {
        width: 100%;
        border: 0;
        margin-left: 5px;
        border-bottom: 0.5px solid #ECECEC;
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
  

}
</style>

