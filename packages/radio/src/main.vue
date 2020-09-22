<template>
  <div>
    <label :class="disable ? 'disable' : ''">
      <input type="radio" :name="name" :value="val" @change="onChange" :disabled="disable" />
      <div class="radioImg" ></div>
      <div class="content">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FgRadio',
  props:{
    name: {
      type: String,
      default: "",
    },
    value:{
      type: String,
      default: "",
    },
    val:{
      type: String,
      default:''
    },
    disable:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    onChange(){
      this.$emit('input', this.val);

      this.$parent.$emit('validate');
    }
  }

}
</script>

<style lang="scss" scoped>
@import './css/style';
</style>