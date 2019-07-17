<template>
  <div>
    <div class="modal-backdrop" v-for="(item, id) in list" :key="id">
      <div :class="`modal-iconback ${status}-modal`">
        <div v-if="status==='error'">
          <img class="modal-icon" src="../assets/images/close_mini.png" />
        </div>
        <div v-else>
          <img class="modal-icon" src="../assets/images/done_mini.png" />
        </div>
      </div>
      <div class="modal-error">
        <div>{{ item.oddnum }}</div>
        <div>{{ item.YorN }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    status: { //'error' 'via'
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
    width: 71px;
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.error-modal {
      background: #ff0000;
    }
    &.via-modal {
      background: #00A83B;
    }
    .modal-icon {
      width: 23px;
      height: 23px;
    }
  }
  .modal-error {
    margin-top: 15px;
    color: #FFEC00;
    font-size: 16px;
    text-align: center;
  }
}
</style>

