<template>
  <div id="app">
    <Index msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script>
import Index from './components/Index.vue';

export default {
  name: 'app',
  components: {
    Index
  },
  methods() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100%;
}
</style>
