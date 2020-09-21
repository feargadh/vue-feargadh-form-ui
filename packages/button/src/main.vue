<template>
  <div :class="size" :style="long ? 'width: 100%': ''">
    <button :class="[type, disable ? 'disable' : '']" :disabled="disable" :type="nativeType">
      <div class="iconClass" v-if="icon.length > 0">
        <i :class="icon"></i>
      </div>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FgButton',
  props:{
    type:{
      type: String,
      default: 'default'
    },
    size:{
      type: String,
      default: 'medium'
    },
    disable:{
      type: Boolean,
      default: false
    },
    long:{
      type: Boolean,
      default: false
    },
    icon:{
      type: String,
      default: ''
    },
    nativeType:{
      type: String,
      default: 'button'
    }
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import './css/style';
</style>