<template>
<span :class="`tag ${status}-tag`">{{ status === 'audit' ? '待审核' : ( status === 'pass' ? '待放行' : '已放行') }}</span>
</template>

<script>
export default {
  props: {
    status: { // 'audit', 'pass', 'over'
      type: String,
      default: 'audit'
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
  // 待审核标签
  &.audit-tag {
    background: #FF0000;
  }
  // 待放行标签
  &.pass-tag {
    background: #00A83B;
  }
  // 已放行标签
  &.over-tag {
    background: #989898;
  }
}
</style>

