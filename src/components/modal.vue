<template>
  <div>
    <div class="modal-backdrop">
      <div :class="`modal-iconback ${status}-icon`"></div>
      <div class="modal-info">
        <div>预约单号：{{ orderNo }}</div>
        <div>{{ status === 'pass' ? '审核通过' : '审核不通过' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderNo: {
       type: String
    },
    status: { //'reject' 'pass'
      type: String,
      default: 'error',
    }
  }
}
</script>

<style lang="less">
.modal-backdrop {
  position: fixed; 
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0; 
  background-color: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .modal-iconback {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    &.reject-icon {
      background: #ff0000 url(../assets/images/close_mini.png) no-repeat center / contain;
      background-size: 25px;
    }
    &.pass-icon {
      background: #00A83B url(../assets/images/done_mini.png) no-repeat center / contain;
      background-size: 25px;
    }
  }
  .modal-info {
    margin-top: 15px;
    color: #FFEC00;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
  }
}
</style>

