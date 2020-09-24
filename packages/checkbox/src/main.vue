<template>
  <div>
    <label :class="['checkBox', disable ? 'disable' : '']">
      
      <input type="checkbox" @input="onInput" :value="value" :disabled="disable" :checked="checked">
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
  model: {
    prop: 'checked',
    event: 'change'
  },
  props:{
    value : {
      type: Boolean|Number|String,
    },
    disable:{
      type: Boolean,
      default: false
    },
    checked:{
      type: Boolean,
    },
  },
  methods:{
    onInput(e){
      this.$parent.$emit('getChecked', e.target.value);

      this.$emit('change',e.target.checked);

      this.$parent.$emit('validate');

      
    }
  }

}
</script>

<style lang="scss" scoped>
@import './css/style'
</style>