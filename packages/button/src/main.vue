<template>
  <div>
    <button :class="[type,size]">
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