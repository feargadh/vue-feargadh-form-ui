<template>
  <div>
    <label>
      <input type="radio" :name="name" :value="val" @change="onChange" />
      <div class="radioImg"></div>
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