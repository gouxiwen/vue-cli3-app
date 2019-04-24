<template>
  <div class="hello">
    <div class="button">按钮<svg-icon icon-class="xihuan" /></div>
    <div class="buttonBig">大按钮<svg-icon icon-class="yonghu" style="width: 0.5rem"/></div>
    <div>{{name}}</div>
    <div>{{rootName}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      name: state => {
        return state.home.name;
      },
      rootName: state => {
        return state.name;
      }
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello {
  width: 100%;
  height: 100%;
  background: url('../assets/images/timg.jpeg');

  .button, .buttonBig {
    width: 50px;
    margin: 0 auto;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

  .buttonBig {
    width: 200px;
    font-size: 26px;
  }
}
</style>
