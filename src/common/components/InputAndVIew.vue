<template>
  <div class="inputAndView">
    <el-button type="text" v-if="inputStatus === 'view'">{{ viewContent }}</el-button>
     <el-input type="password" v-model="inputContent" v-if="inputStatus === 'edit'"></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component
export default class inputAndView extends Vue {
  @Prop({ type: String })
  inputStatus = 'view'
  @Prop({ type: String })
  viewContent = ''

  inputContent = ''

  @Watch('inputContent')
  chanageInputContent(value) {
    this.$emit('input:inputContent', value)
  }
}
</script>

<style scoped>
.inputAndView {
  width: 217px;
}
</style>
