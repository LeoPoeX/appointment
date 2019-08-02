<template>
<span :class="`tag ${auditStatus[state].tag}-tag`">{{ auditStatus[state].name }}</span>
</template>

<script>
export default {
  props: {
    state: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      auditStatus: {
        1: {
          tag: 'audit',
          name: '待审核'
        },
        2: {
          tag: 'refuse',
          name: '已拒绝'
        },
        3: {
          tag: 'pass',
          name: '待放行'
        },
        4: {
          tag: 'over',
          name: '已完成'
        }
      }
    }
  }
}
</script>

<style lang="less">
.tag {
  width: 48px;
  height: 20px;
  line-height: 20px;
  border-radius: 0 0 4px 4px;
  text-align: center;
  color: #FFFFFF;
  display: inline-block;
  text-align: center;
  margin-left: 20px;
  font-size: 12px;
  position: absolute;
  top: 0;
  // 待审核标签
  &.audit-tag {
    background: #FF9000;
  }
  // 已拒绝标签
  &.refuse-tag {
    background: #FF0000;
  }
  // 待放行标签
  &.pass-tag {
    background: #00A83B;
  }
  // 已完成标签
  &.over-tag {
    background: #989898;
  }
}
</style>

