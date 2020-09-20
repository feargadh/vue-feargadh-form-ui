<template>
  <div class="container">
    <div :class="inputBorder">
      <div class="iconClass" v-if="icon.length > 0">
        <i :class="icon"></i>
      </div>

      <input
        :value="value"
        type="text"
        readonly
        @focus="focusChanged(true)"
        @blur="focusChanged(false)"
      />

      <button class="selectBtn">∨</button>
    </div>
    <div
      v-show="focusFlag || hoverFlag"
      class="options"
      @mouseenter="hoverFlag = true"
      @mouseleave="hoverFlag = false"
    >
      <li v-for=" (option, index) in options" :key="index">
        <button @click="chooseOption(option.value)">{{option.name}}</button>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FgSelect',
  props: {
    options: {
      type: Array,
      default: Array,
    },
    value: {
      type: String,
      default: "",
    },
    icon:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      focusFlag: false,
      hoverFlag: false,
      val: "",
    };
  },
  methods: {
    focusChanged(value) {
      this.focusFlag = value;

      this.$parent.$emit("focusChange", value);
    },

    chooseOption(value) {
      this.$emit("input", value);

      this.$parent.$emit("validate");

      this.hoverFlag = false;
    },
  },
  computed: {
    inputBorder() {
      if (this.$parent.err !== undefined && this.$parent.err.length > 0) {
        return "inputError";
      } else if (this.focusFlag) {
        return "inputFocus";
      }

      return "input";
    },
  },
};
</script>

<style lang="scss" scoped>
@import './css/style';
</style>