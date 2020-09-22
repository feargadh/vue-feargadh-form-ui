<template>
  <div :class="['container',disable ? 'disable' : '']">
    <div :class="[inputBorder, disable ? 'disable' : '']">
      <div class="iconClass" v-if="icon.length > 0">
        <i :class="icon"></i>
      </div>

      <input
        :class="disable ? 'disable' : ''"
        :value="val"
        type="text"
        readonly
        @focus="focusChanged(true)"
        @blur="focusChanged(false)"
        :disabled="disable"
      />

      <button class="selectBtn">∨</button>
    </div>
    <transition name="options">
      <div
        v-show="focusFlag || hoverFlag"
        class="options"
        @mouseenter="hoverFlag = true"
        @mouseleave="hoverFlag = false"
      >
        <li v-for=" (option, index) in options" :key="index">
          <button @click="chooseOption(option)">{{option.name}}</button>
        </li>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FgSelect",
  props: {
    options: {
      type: Array,
      default: Array,
    },
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    disable:{
      type: Boolean,
      default: false
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

    chooseOption(option) {
      this.$emit("input", option.value);

      this.val = option.name

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
@import "./css/style";
</style>