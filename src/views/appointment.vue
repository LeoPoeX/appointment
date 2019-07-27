<template>
  <div class="index-box">
    <!-- 预约详情 -->
    
    <div class="details">
      <div class="yuyueTitle">预约详情</div>
      <div class="visitor">
        <div class="danhao">
          <div class="appoin-oddNum">
            <p class="">单号：</p>
            <p class="num">{{ draft.ticket_id }}</p>
          </div>
          <div class="appoin-oddNum">
            <p class="">人数：</p>
            <p class="num">4 人</p>
          </div>
        </div>

        <div class="GoTime">
          <!-- 到达时间 -->
          <div class="appoint-timeBox" @click="openStartTimePop">
            <van-field
              class="time"
              v-model="startTimeText"
              placeholder="到达（必填）" 
              readonly="readonly"
            />
            <img class="appoin-icon" src="../assets/images/calendar.png"  />
          </div>

          <van-popup v-model="showStartTime" position="bottom" >
            <van-datetime-picker
              v-model="draft.start_time"
              type="datetime"
              @cancel="closeStartTimePop"
              @confirm="confirmTime"
            />
          </van-popup>

          <!-- 离开时间 -->
          <div class="appoint-timeBox" @click="openEndTimePop">
            <van-field
              class="time"
              v-model="endTimeText"
              placeholder="离开（必填）" 
              readonly="readonly"
            />
            <img class="appoin-leaveicon" src="../assets/images/calendar.png"  />
          </div>

          <van-popup v-model="showEndTime" position="bottom" >
            <van-datetime-picker
              v-model="draft.end_time"
              type="datetime"
              @cancel="closeEndTimePop"
              @confirm="confirmEndTime"
            />
          </van-popup>

        </div>


        <div class="receiver">
          <input type="text" placeholder="接待人（必填）" v-model="draft.employee_name" />
          <input type='number' pattern="[0-9]*" placeholder="接待人电话（必填）" v-model="draft.employee_phone" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/name.png" />
          <input type="text" placeholder="来访姓名（必填）" v-model="draft.visitor_name" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/tel.png" />
          <input type='number' pattern="[0-9]*" placeholder="电话（必填）" v-model="draft.visitor_phone" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/post.png" />
          <input type="text" placeholder="职位（必填）" v-model="draft.visitor_position" />
        </div>

        <div class="content">
          <img  class="img-backgro" src="../assets/images/firm.png" />
          <input type="text" placeholder="公司（必填）" v-model="draft.visitor_organization" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/car.png" />
          <input type="text" placeholder="车牌（选填）" v-model="draft.visitor_car_number" />
        </div>

        <div class="reasons">
          <p>选择来访事由：</p>
          <van-field class="appoin-reasonInfo" type="text" v-model="draft.reason" @click="openReason" readonly="readonly" />

          <van-popup v-model="showReason" position="bottom" :overlay="true">
            <van-picker show-toolbar :columns="columns" @cancel="closeReason" @confirm="confirmReason" />
          </van-popup>
        </div>

      </div>
    </div>

    <!-- 随行人员信息 -->
    <div class="details">
      <div class="yuyueTitle">填写随员信息</div>

      <div class="visitor" v-for="(user, index) in draft.followers" :key="index">

        <div class="content">
          <img class="img-backgro" src="../assets/images/name.png" />
          <input type="text" placeholder="姓名（必填）" v-model="uer.name" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/tel.png" />
          <input type='number' pattern="[0-9]*" placeholder="电话（必填）" v-model="user.phone" />
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

      <div class="PeopleInfo" @click="addTheObject">
        <p>添加随员信息</p>
      </div>
      
    </div>

    <div class="submit">
      <button @click="submit">立即提交</button>
    </div>

    <van-popup v-model="loading" class="appoin-popup">
      <van-loading />
    </van-popup>
  </div>
</template>


<script>
import axios from 'axios';
import utils from '../utils';
import { Toast } from 'vant';
export default {
  name: 'Appointment',
  data () {
    return {
      showStartTime: false,
      showEndTime: false,
      startTimeText: '',
      endTimeText: '',
      draft: {},
      showReason: false,
      loading: true,
      columns: ['供应商来访', '商务交流', '客户来访', '技术交流', '其他']
    }
  },
  created () {
    this.createDraft()
  },
  methods: {
    // 到达时间
      confirmTime(value) {
        this.start_time = value;
        this.startTimeText = utils.parseTime(value, 'yyyy-MM-dd hh:mm');
        this.closeStartTimePop();
      },
      openStartTimePop() {
        this.showStartTime = true;
      },
      closeStartTimePop() {
        this.showStartTime = false;
      },

    // 离开时间
      confirmEndTime(value) {
        this.end_time = value;
        this.endTimeText = utils.parseTime(value, 'yyyy-MM-dd hh:mm');
        this.closeEndTimePop();
      },
      openEndTimePop() {
        this.showEndTime = true;
      },
      closeEndTimePop() {
        this.showEndTime = false;
      },
    //来访事由
    openReason () {
      this.showReason = true
    },
      // 确定
    confirmReason (value) {
      this.draft.reason = value
      this.closeReason()
    },
      // 取消
    closeReason () {
      this.showReason = false
    },

    // 创建草稿
    createDraft() {
      axios({
        method:'get',
        url: '/api/employee/draft',
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({ data }) => {
        this.draft = {
          ...data,
          start_time: data.start_time ? new Date(data.start_time) : new Date(),
          end_time: data.end_time ? new Date(data.end_time) : new Date(),
        };
        this.loading = false
      })
    },
    // 提交前校验
    validateBeforeSubmit() {
      if (!this.draft.visitor_name) {
        Toast('请输入来访者姓名');
        return false;
      } else if (!this.draft.visitor_phone) {
        Toast('请输入来访者电话');
        return false;
      } else if (!this.draft.visitor_position) {
        Toast('请输入来访者职位');
        return false;
      } else if (!this.draft.visitor_organization) {
        Toast('请输入来访者公司');
        return false;
      } else if (!this.user.name) {
        Toast('请输入随从名字');
        return false;
      } else if (!this.user.phone) {
        Toast('请输入随从电话');
        return false;
      } else if (!this.user.position) {
        Toast('请输入随从职位');
        return false;
      } else if (!this.user.organization) {
        Toast('请输入随从公司');
        return false;
      }
      return true;
    },
    // 添加随员信息
    addTheObject () {

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
          start_time: this.selectedValue,
          end_time: this.selectedLeaveValue,
          visitor_name: this.draft.visitor_name,
          visitor_phone: this.draft.visitor_phone,
          visitor_position: this.draft.visitor_position,
          visitor_organization: this.draft.visitor_organization,
          visitor_car_number: this.draft.visitor_car_number

        }
      }).then(() => {
        this.$router.push('/appointSuccess')
      })
    },

  }
}
</script>


<style lang="less">
.index-box {
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

      .GoTime {
        display: flex;
        position: relative;

        .appoint-timeBox {
          width:49%;
          color: #999999;
          margin-left: 2%;
          margin-top: 12px;
          position: relative;
          &:first-child {
            margin-left: 0;
          }

          .time {
            height: 36px;
            line-height: 36px;
            border: 0;
            background: #FFFAF5;
            border-bottom: 0.5px solid #DEDEDE;
            font-size: 12px;
            padding: 0;
            padding-left: 4px;

          }
          .appoin-icon {
            width: 10px;
            position: absolute;
            z-index: 3;
            top: 13px;
            right: 6px;
          }
        }
        
        .appoin-leaveicon {
          width: 10px;
          position: absolute;
          z-index: 3;
          top: 13px;
          right: 6px;
        }
      }

      .receiver {
        display: flex;

        input {
          width: 49%;
          line-height: 36px;
          border: 0;
          background: #FFFAF5;
          border-radius: 0;
          margin-top: 12px;
          margin-left: 2%;
          border-bottom: 0.5px solid #DEDEDE;
          font-size: 12px;
          padding-left: 4px;
          &:-ms-input-placeholder {
            color: #999999;
          }

          &:first-child {
            margin-left: 0;
          }
        }
      }

      .content {
        display: flex;
        margin-top: 12px;

        .img-backgro {
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 50%;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          border: 0;
          margin-left: 5px;
          border-bottom: 0.5px solid #DEDEDE;
          border-radius: 0;
          font-size: 12px;
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

  .appoin-popup {
    background: 0;
  }

}

</style>

