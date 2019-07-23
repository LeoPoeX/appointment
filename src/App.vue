<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="less">
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  -webkit-tap-highlight-color:transparent;
  -webkit-font-smoothing: antialiased;
  outline: none;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}
input, textarea {
  -webkit-appearance: none;
}
</style>
