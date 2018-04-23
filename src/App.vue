<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
