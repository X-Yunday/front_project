<template>
  <img alt="Vue logo" src="./assets/redhat.png">
  <HelloWorld :msg='msg' @update-value="updateValue"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
   data() {
    return {
      msg: "你好，世界！"
    };
  },
  methods: {
    updateValue(newValue) {
      this.msg = newValue;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
