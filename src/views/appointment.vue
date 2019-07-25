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
          
           <p class="time">{{ this.selectedValue }}</p>
          <img class="appoin-icon" src="../assets/images/calendar.png" @click="selectData" />

          <div class="pickerPop" @touchmove.prevent>
            <!-- 年月日时分选择 -->
            <mt-datetime-picker
              lockScroll="true"
              ref="datePicker"
              class="myPicker"
              type="datetime"
              year-format="{value}"
              month-format="{value}"
              date-format="{value}"
              hour-format="{value}"
              minute-format="{value}"
              second-format="{value}"
              @confirm="dateConfirm()">
            </mt-datetime-picker>
          </div>
          
          <input class="time" type="text" placeholder="离开（必填）" />
          <img class="appoin-leaveicon" src="../assets/images/calendar.png" />
        </div>

        <div class="receiver">
          <input type="text" placeholder="接待人（必填）" />
          <input type="text" placeholder="接待人电话（必填）" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/name.png" />
          <input type="text" placeholder="来访姓名（必填）" />
        </div>

        <div class="content">
          <img class="img-backgro" src="../assets/images/tel.png" />
          <input type="text" placeholder="电话（必填）" />
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

        <div class="reasons">
          <p>选择来访事由：</p>
          <select >
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
          <input type="text" placeholder="电话（必填）" />
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
  daata () {
    return {
      dateVal: '', // 默认是当前日期
      selectedValue: '',
      draft: {}
    }
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
    selectData () { // 打开时间选择器
      // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
      if (this.selectedValue) {
        this.dateVal = this.selectedValue
      } else {
        this.dateVal = new Date()
      }
      this.$refs['datePicker'].open()
    },
    dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
      this.selectedValue = formatDateMin(this.dateVal)
    }

  }
}
</script>


<style lang="less">
.index-box {
  padding-top: 10px;
  background: url('../assets/images/back.png') no-repeat;
  background-size: 100% 219px;
  background-position-y: -22px;

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
        font-size: 14px;

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
                font-size: 0.26rem;
                color: #000!important;
              }
            }
          }
        }

        .time {
          width:49%;
          line-height: 36px;
          border: 0;
          background: #FFFAF5;
          margin-top: 12px;
          margin-left: 2%;
          border-bottom: 0.5px solid #DEDEDE;

          input {
            border: 0;
            background: #FFFAF5;
          }

          &:first-child {
            margin-left: 0;
          }
        }
        .appoin-icon {
          width: 13px;
          position: absolute;
          z-index: 3;
          top:24px;
          left: 120px;
        }
        .appoin-leaveicon {
          width: 13px;
          position: absolute;
          z-index: 3;
          top:24px;
          right: 13px;
        }
      }

      .receiver {
        display: flex;

        input {
          width: 49%;
          line-height: 36px;
          border: 0;
          background: #FFFAF5;
          margin-top: 12px;
          margin-left: 2%;
          border-bottom: 0.5px solid #DEDEDE;

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

