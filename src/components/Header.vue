<template>
  <mt-header :title="title" class="header">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title']
}
</script>

<style lang="less">
.header {
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12); 
  color: #333333; 
  font-size: 1.7rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

</style>

