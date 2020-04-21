<template>
  <div id="app">
    <a-index></a-index>
  </div>
</template>
<script>
  import aIndex from '@/views/Home'
  export default {
    name: "App",
    components: {
      aIndex
    }
  }
</script>
<style>
  @import './assets/css/normalize.css';
  html,body,#app{
      height: 100%;
  }
</style>
