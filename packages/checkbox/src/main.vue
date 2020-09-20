<template>
  <div>
    <label class="checkBox">
      
      <input type="checkbox" :value="value" @change="onChange">
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