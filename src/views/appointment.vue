<template>
  <div class="index-box">
    <!-- 预约详情 -->
    <div class="details">
      <div class="yuyueTitle">预约详情</div>
      <div class="visitor">
        <div class="danhao">
          <div>
            <p>单号：</p>
            <p class="num">{{ draft.ticket_id }}</p>
          </div>
          <div class="people">
            <p>人数：</p>
            <p class="num">4 人</p>
          </div>
        </div>

        <div class="GoTime">
          <!-- 到达时间 -->
          <div class="appoint-timeBox" @click="selectData">
            <p class="time">{{ this.selectedValue }}</p>
            <img class="appoin-icon" src="../assets/images/calendar.png"  />
          </div>

          <div class="pickerPop" @touchmove.prevent>
            <!-- 年月日时分选择 -->
            <mt-datetime-picker
              lockScroll="true"
              ref="datePicker"
              class="myPicker"
              type="datetime"
              v-model="arriveVal"
              year-format="{value}"
              month-format="{value}"
              date-format="{value}"
              hour-format="{value}"
              minute-format="{value}"
              @confirm="dateConfirm()">
            </mt-datetime-picker>
          </div>
            <!-- 离开时间 -->
          <div class="appoint-timeBox" @click="selectLeaveData">
            <p class="time">{{ this.selectedLeaveValue }}</p>
            <img class="appoin-leaveicon" src="../assets/images/calendar.png" />
          </div>
          
          <div class="pickerPop" @touchmove.prevent>
            <!-- 年月日时分选择 -->
            <mt-datetime-picker
              lockScroll="true"
              ref="leaveDatePicker"
              class="myPicker"
              type="datetime"
              v-model="leaveVal"
              year-format="{value}"
              month-format="{value}"
              date-format="{value}"
              hour-format="{value}"
              minute-format="{value}"
              @confirm="leaveDateConfirm()">
            </mt-datetime-picker>
          </div>

        </div>

        <div class="receiver">
          <input type="text" placeholder="接待人（必填）" v-model="draft.employee_name" />
          <input type="text" placeholder="接待人电话（必填）" v-model="draft.employee_phone" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/name.png" />
          <input type="text" placeholder="来访姓名（必填）" v-model="draft.visitor_name" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/tel.png" />
          <input type="tel" placeholder="电话（必填）" v-model="draft.visitor_phone" />
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
          <select v-model="draft.reason">
            <option value ="供应商来访">供应商来访</option>
            <option value ="商务交流">商务交流</option>
            <option value="客户来访">客户来访</option>
            <option value="技术交流">技术交流</option>
            <option value="其他">其他</option>
          </select>
        </div>

      </div>
    </div>

    <!-- 随行人员信息 -->
    <div class="details">
      <div class="yuyueTitle">填写随员信息</div>

      <div class="visitor">

        <div class="content">
          <img class="img-backgro" src="../assets/images/name.png" />
          <input type="text" placeholder="姓名（必填）" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/tel.png" />
          <input type="tel" placeholder="电话（必填）" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/post.png" />
          <input type="text" placeholder="职位（必填）" />
        </div>

        <div class="content">
          <img  class="img-backgro" src="../assets/images/firm.png" />
          <input type="text" placeholder="公司（必填）" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/car.png" />
          <input type="text" placeholder="车牌（选填）" />
        </div>

      </div>

      <div class="PeopleInfo">
        <p>添加随员信息</p>
      </div>
      
    </div>

    <div class="submit">
      <button @click="submit">立即提交</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import {formatDateMin} from '../formatdate';
import { Toast } from 'mint-ui';
export default {
  name: 'Appointment',
  data () {
    return {
      arriveVal: '', // 默认是当前日期
      leaveVal: '',
      selectedValue: '到达时间（必填）',
      selectedLeaveValue: '离开时间（必填）',
      draft: {}
    }
  },
  created () {
    this.createDraft()
  },
  methods: {
    // 创建草稿
    createDraft() {
      axios({
        method:'get',
        url: '/api/employee/draft',
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({ data }) => {
        this.draft = data;
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
      }
      return true;
    },
    // 提交
    submit() {
      // 校验不通过，不能提交
      if (!this.validateBeforeSubmit()) return;
      axios({
        method:'post',
        url: '/api/employee/appointment',
        headers: {'X-Token': 'e9c989a9-d920-4133-9157-50059a74a503'},
      }).then(({data}) => {
        this.$router.push('/appointSuccess')
      })
    },
    // 到达时间
    selectData () { // 打开时间选择器
      // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
      if (this.selectedValue) {
        this.arriveVal = this.selectedValue
      } else {
        this.arriveVal = new Date()
      }
      this.$refs['datePicker'].open()
    },
    dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
      this.selectedValue = formatDateMin(this.arriveVal)
    },
    // 离开时间
    selectLeaveData () {
      if (this.selectedLeaveValue) {
        this.leaveVal = this.selectedLeaveValue
      } else {
        this.leaveVal = new Date()
      }
      this.$refs['leaveDatePicker'].open()
    },
    leaveDateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
      this.selectedLeaveValue = formatDateMin(this.leaveVal)
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

        p {
          margin: 0;
          display: inline-block;
        }

        .people {
          margin-left: 48px;
        }

        .num {
          color: #FF8C09;
        }
      }

      .GoTime {
        display: flex;
        position: relative;

        .pickerPop{
          .picker{
            .picker-toolbar{
              background-color: #eee;
              .mint-datetime-action{
                color: #000!important;
              }
            }
          }
        }

        .appoint-timeBox {
          width:49%;
          color: #999999;
          margin-left: 2%;

          .time {
            height: 36px;
            line-height: 36px;
            border: 0;
            background: #FFFAF5;
            margin-top: 12px;
            
            border-bottom: 0.5px solid #DEDEDE;

            &:first-child {
              margin-left: 0;
            }
          }
          .appoin-icon {
            width: 13px;
            position: absolute;
            z-index: 3;
            top:24px;
            left: 41%;
          }
        }
        
        .appoin-leaveicon {
          width: 13px;
          position: absolute;
          z-index: 3;
          top:24px;
          right: 3%;
        }
      }

      .receiver {
        display: flex;
        color: #999999;

        input {
          width: 49%;
          line-height: 36px;
          border: 0;
          background: #FFFAF5;
          margin-top: 12px;
          margin-left: 2%;
          border-bottom: 0.5px solid #DEDEDE;
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
        color: #999999;

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
          margin: 0;
          color: #999999;
          font-size: 14px;
        }

        select {
          border: none;
          outline: none;
          width: 108px;
          border-bottom: 0.5px solid #DEDEDE;
          background: #fff;
          border-radius: 0;
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

}

</style>

