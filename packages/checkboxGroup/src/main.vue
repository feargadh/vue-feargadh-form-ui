<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'FgCheckboxGroup',
  mounted(){
    this.$on('getChecked', (value) =>{
      this.getChecked(value);
    })
  },
  props:{
    
  },
  data(){
    return{
      val:[]
    }
  },
  methods:{
    getChecked(value){
      const index = this.val.indexOf(value);
      if( index === -1){
        this.val.push(value);
      }else{
        this.val.splice(index,1);
      }

      this.$emit('input', this.val);

      this.$parent.$emit('validate');
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>