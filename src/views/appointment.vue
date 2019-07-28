<template>
  <div class="appoin-wrapper">
    <!-- 预约详情 -->
    <div class="details">
      <div class="yuyueTitle">预约详情</div>
      <div class="visitor">
        <div class="danhao">
          <div class="appoin-oddNum">
            <p>单号：</p>
            <p class="num">{{ draft.ticket_id }}</p>
          </div>
          <div class="appoin-oddNum">
            <p>人数：</p>
            <p class="num">{{ draft.followers.length + 1 }} 人</p>
          </div>
        </div>

          <!-- 到达时间 -->
        <div class="appoint-contbox">
          <div class="appoint-box" @click="openDatePop('start_time')">
            <van-field
              class="appoint-content"
              :value="startTimeText"
              placeholder="到达（必填）" 
              readonly="readonly"
            />
            <img class="appoin-icon" src="../assets/images/calendar.png"  />
          </div>

          <!-- 离开时间 -->
          <div class="appoint-box" @click="openDatePop('end_time')">
            <van-field
              class="appoint-content"
              :value="endTimeText"
              placeholder="离开（必填）" 
              readonly="readonly"
            />
            <img class="appoin-icon" src="../assets/images/calendar.png"  />
          </div>
        </div>
 
          <!-- 接待人和接待人电话 -->
        <div class="appoint-contbox">
          <div class="appoint-box">
            <van-field
              class="appoint-content"
              placeholder="接待人（必填）" 
              v-model="draft.employee_name"
            />
          </div>
          <div class="appoint-box">
            <input 
              v-model="draft.employee_phone" 
              class="appoint-content" 
              type="number"
              oninput="if(value.length>11) value=value.slice(0,11),value=value.replace(/[^\d]/g,'')"
              maxlength="11"
              placeholder="接待人电话（必填）" 
            />
          </div>
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/name.png" />
          <input type="text" placeholder="来访姓名（必填）" v-model="draft.visitor_name" @blur.prevent="saveDraft" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/tel.png" />
          <input
            v-model="draft.visitor_phone"
            type="number"
            oninput="if(value.length>11) value=value.slice(0,11),value=value.replace(/[^\d]/g,'')"
            maxlength="11"
            placeholder="电话（必填）"
            @blur.prevent="saveDraft"
          />

        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/post.png" />
          <input type="text" placeholder="职位（必填）" v-model="draft.visitor_position" @blur.prevent="saveDraft" />
        </div>

        <div class="content">
          <img  class="img-backgro" src="../assets/images/firm.png" />
          <input type="text" placeholder="公司（必填）" v-model="draft.visitor_organization" @blur.prevent="saveDraft" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/car.png" />
          <input type="text" placeholder="车牌（选填）" v-model="draft.visitor_car_number" @blur.prevent="saveDraft" />
        </div>

        <div class="reasons">
          <p>选择来访事由：</p>
          <van-field 
            class="appoin-reasonInfo" 
            type="text" 
            v-model="draft.reason"
            @click="openReason" 
            readonly="readonly" 
          />
        </div>

      </div>
    </div>

    <!-- 随行人员信息 -->
    <div class="details">
      <div class="yuyueTitle" v-if="draft.followers.length">填写随员信息</div>

      <Followers :followers="draft.followers" :saveDraft="saveDraft" />

      <div class="PeopleInfo" :class="draft.followers.length ? '' : 'no-user'" @click="addNewVistor">
        <p>添加随员信息</p>
      </div>
      
    </div>

    <div class="submit">
      <button @click.stop="submit">立即提交</button>
    </div>
    
    <!-- 来访事由弹窗 -->
    <van-popup v-model="showReason" position="bottom" :overlay="true">
      <van-picker show-toolbar :columns="columns" @cancel="closeReason" @confirm="confirmReason" />
    </van-popup>

    <!-- 时间弹窗 -->
    <van-popup v-model="timePopup.visible" position="bottom">
      <van-datetime-picker
        v-model="timePopup.date"
        type="datetime"
        :min-date="timePopup.minDate"
        @cancel="closeDatePop"
        @confirm="confrimDatePop"
      />
    </van-popup>
  </div>
</template>


<script>
import axios from 'axios';
import { Toast } from 'vant';
import utils from '../utils';
import Followers from '../components/followers';
export default {
  name: 'Appointment',
  data () {
    return {
      timePopup: {
        visible: false,
        minDate: new Date(),
        date: new Date()
      },
      draft: {
        followers: []
      },
      showReason: false,  //显示来访事由弹窗
      columns: ['供应商来访', '商务交流', '客户来访', '技术交流', '其他']
    }
  },
  components: {
    Followers
  },
  created () {
    this.getDraft()
  },
  computed: {
    startTimeText: function() {
      return this.draft.start_time ? utils.parseTime(this.draft.start_time, 'yyyy-MM-dd hh:mm') : ''
    },
    endTimeText: function() {
      return this.draft.end_time ? utils.parseTime(this.draft.end_time, 'yyyy-MM-dd hh:mm') : ''
    }
  },
  methods: {
    getCurrentDate: function() {
      return new Date()
    },
    openDatePop(key = 'start_time') {
      const currentDate = new Date();
      this.timePopup = {
        ...this.timePopup,
        visible: true,
        key,
        date: this.draft[key] || currentDate,
        minDate: currentDate
      }
    },
    closeDatePop() {
      this.timePopup = {
        visible: false,
        minDate: new Date(),
        date: new Date()
      }
    },
    confrimDatePop(value) {
      const key = this.timePopup.key
      this.draft[key] = value.getTime();
      this.closeDatePop();
      this.saveDraft();
    },

    //来访事由
    confirmReason (value) {
      this.draft.reason = value
      this.closeReason();
      this.saveDraft();
    },
    openReason () {
      this.showReason = true
    },
    closeReason () {
      this.showReason = false
    },
    // 暂存预约单
    saveDraft: utils.debounce(function() {
      axios({
        method:'post',
        url: '/api/employee/draft',
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
        data: {
          ...this.draft,
          start_time: this.draft.start_time || null,
          end_time: this.draft.end_time || null
        }
      })
    }),
    // 获取草稿
    getDraft() {
      // 加载数据
      const toast = Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中...'
      });

      axios({
        method:'get',
        url: '/api/employee/draft',
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({ data }) => {
        this.draft = data;
        toast.clear();
      }).catch(() => {
        toast.clear();
        this.$router.back(-1);
        Toast('创建预约信息失败');
      })
    },
    // 提交前校验
    validateBeforeSubmit() {
      var reg = /^1[3456789]\d{9}$/;
      if (!this.draft.start_time) {
        Toast('请输入到达时间');
        return false;
      } else if (!this.draft.end_time) {
        Toast('请输入离开时间');
        return false;
      } else if (!this.draft.employee_name) {
        Toast('请输入接待人姓名');
        return false;
      } else if (!this.draft.employee_phone) {
        Toast('请输入接待人电话');
        return false;
      } else if (!reg.test(this.draft.employee_phone)) {
        Toast('接待人手机号格式不正确');
        return false;
      } else if (!this.draft.visitor_name) {
        Toast('请输入来访者姓名');
        return false;
      } else if (!this.draft.visitor_phone) {
        Toast('请输入来访者电话');
        return false;
      } else if (!reg.test(this.draft.visitor_phone)) {
        Toast('手机号格式不正确');
        return false;
      } else if (!this.draft.visitor_position) {
        Toast('请输入来访者职位');
        return false;
      } else if (!this.draft.visitor_organization) {
        Toast('请输入来访者公司');
        return false;
      } else if (!this.draft.reason) {
        Toast('请输入来访事由');
        return false;
      }

      for (let i = 0; i <this.draft.followers.length; i++) {
        let user = this.draft.followers[i];
        if (!user.name) {
          Toast('请输入随员姓名');
          return false;
        } else if (!user.phone) {
          Toast(`请输入随员${user.name}的电话`);
          return false;
        } else if (!reg.test(user.phone)) {
          Toast(`随员${user.name}的手机号格式不正确`);
          return false;
        } else if (!user.position) {
          Toast(`请输入随员${user.name}的职位`);
          return false;
        } else if (!user.organization) {
          Toast(`请输入随员${user.name}的公司`);
          return false;
        }
      }
      return true;

    },
    // 添加随员信息
    addNewVistor () {
      this.draft.followers.push({});
      this.saveDraft();
    },

    // 提交
    submit() {
      // 校验不通过，不能提交
      if (!this.validateBeforeSubmit()) return;
      axios({
        method:'post',
        url: '/api/employee/appointment',
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
        data: {
          ...this.draft,
          start_time: this.draft.start_time || null,
          end_time: this.draft.end_time || null
        }
      }).then(({ data:info }) => {
        if (info && info.id) {
          this.$router.push({
            path: '/appointSuccess',
            query:{
              id: info.id,
              ticket_id: info.ticket_id,
              visitor_name: info.visitor_name,
              followers: info.followers.length,
              visitor_phone: info.visitor_phone
            }
          })
        }
      }).catch((error) => {
        if (error && error.message) {
          Toast(error.message)
        }
      });
    },

  }
}
</script>


<style lang="less">
.appoin-wrapper {
  padding-top: 10px;
  background: url('../assets/images/back.png') no-repeat;
  background-size: 100% 219px;
  background-position-y: -22px;
  font-size: 12px;

  .details {
    margin: 24px 15px 15px 15px;
    border: 1px solid #D6D6D6;
    border-radius: 10px;
    background: #ffffff;
    
    .yuyueTitle {
      line-height: 48px;
      padding-left: 12px;
      font-size: 14px;
      letter-spacing: 1.56px;
      border-bottom: 1px solid #ECECEC;
    }

    .visitor {
      padding: 12px 15px;

      .danhao {
        background: #FFFAF5;
        display: flex;
        line-height: 36px;
        font-size: 12px;

        .appoin-oddNum {
          width: 50%;
          display: flex;
          &:last-child {
            margin-left: 2%;
          }

          p {
            &:first-child {
              padding-left: 4px;
            }
          }
        }

        .num {
          color: #FF8C09;
        }
      }

      .appoint-contbox {
        display: flex;
        position: relative;

        .appoint-box {
          width:49%;
          margin-left: 2%;
          margin-top: 12px;
          position: relative;
          &:first-child {
            margin-left: 0;
          }

          .appoint-content {
            height: 36px;
            line-height: 36px;
            border: 0;
            border-radius: 0;
            background: #FFFAF5;
            border-bottom: 0.5px solid #DEDEDE;
            font-size: 12px;
            padding: 0;
            padding-left: 4px;
          }
          .appoin-icon {
            width: 10px;
            position: absolute;
            z-index: 10;
            top: 13px;
            right: 6px;
          }
        }
      }

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

      .reasons {
        display: flex;
        margin-top: 18px;
        margin-bottom: 6px;

        p {
          margin-top: 2px;
          color: #999999;
          font-size: 12px;
        }

        .appoin-reasonInfo {
          width: 108px;
          padding: 0;
        }

        input {
          border: none;
          outline: none;
          width: 108px;
          border-bottom: 0.5px solid #DEDEDE;
          background: #fff;
          border-radius: 0;
          appearance:none;
          background: url("../assets/images/arrow_down.png") no-repeat scroll right center transparent;
          background-size: 10px 5px;
          padding-left: 4px;
        }
      }
    
    }

    .PeopleInfo {
      line-height: 36px;
      text-align: center;
      background: #FFFAF5;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      &.no-user {
        border-radius: 10px;
      }
      p {
        margin: 0;
        color: #999999;
      }
    }

  }

  .submit {
    text-align: center;
    margin: 18px 0;
    font-size: 13px;
    color: #835B02;

    button {
      width: 300px;
      height: 36px;
      border: 0;
      border-radius: 36px;
      background-image: linear-gradient(1deg, #FACE83 0%, #F6AE3A 100%);
    }
  }
}

</style>

