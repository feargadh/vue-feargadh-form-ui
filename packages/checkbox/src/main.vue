<template>
  <div>
    <label :class="['checkBox', disable ? 'disable' : '']">
      
      <input type="checkbox" :value="value" @change="onChange" :disabled="disable">
      <div class="checkBoxImg">
        ✔
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FgCheckbox',
  props:{
    value : {
      type: String,
      default: ''
    },
    disable:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    onChange(e){
      this.$parent.$emit('getChecked',e.target.value);
    }
  }

}
</script>

<style lang="scss" scoped>
@import './css/style'
</style>