<template>
  <div class="hello">
    <div class="button">按钮</div>
    <div class="buttonBig">大按钮</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
    width: 100px;
    font-size: 26px;
  }
}
</style>
