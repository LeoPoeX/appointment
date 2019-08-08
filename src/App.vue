<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
}

body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  -webkit-tap-highlight-color:transparent;
  -webkit-font-smoothing: antialiased;
  outline: none;
}

html, body {
  height: 100%;
}

body {
  box-sizing: content-box;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

</style>
