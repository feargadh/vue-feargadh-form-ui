<template>
  <div :class="[inputBorder, disable ? 'disable' : '']">
    <div class="iconClass" v-if="icon.length > 0">
      <i :class="icon"></i>
    </div>

    <input
      :value="value"
      :type="typeComputer"
      @focus="focusChanged(true)"
      @blur="focusChanged(false)"
      :placeholder="placeholder"
      :disabled="disable"
      :class="disable ? 'disable' : ''"
      @input="onInput"
      required="true"
    />

    <svg
      v-if=" type === 'password'"
      :class="['rightBtn', 'eye', isHide ? 'hide' : '']"
      viewBox="0 0 20 20"
      @click="showPassword"
    >
      <path
        stroke="#576574"
        fill="none"
        stroke-linecap="round"
        stroke-width="2"
        d="M2,10 Q10,2 18,10"
        class="eye-top"
      />
      <path
        stroke="#576574"
        fill="none"
        stroke-linecap="round"
        stroke-width="2"
        d="M2,10 Q10,18 18,10"
        class="eye-bottom"
      />
      <circle
        fill="none"
        stroke="#576574"
        stroke-width="2"
        cx="10"
        cy="10"
        r="3"
        stroke-linecap="round"
        class="eye-ball"
        transform="rotate(18 10 10)"
      />
    </svg>
    <button v-else class="rightBtn" @click="clear">╳</button>
  </div>
</template>

<script>
export default {
  name:'FgInput',
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    value : {
      type: Boolean|Number|String,
    },
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      focusFlag: false,

      inputWidth: 200,
      fontSize: 16,
      redBorder: false,
      passwordFlag: false,
      isHide: true
    };
  },
  methods: {
    clear() {
      this.$emit("input", "");
    },
    focusChanged(value) {
      this.focusFlag = value;

      this.$parent.$emit("focusChange", value);
    },

    onInput(e) {
      this.$emit("input", e.target.value);

      this.$parent.$emit("validate");
    },
    showPassword() {
      this.isHide = !this.isHide;


    },
  },
  watch:{
    isHide(){
      setTimeout(() => {
        this.passwordFlag = !this.passwordFlag
      },200)
    }
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
    typeComputer() {
      if (this.type === "password" && this.passwordFlag) {
        return "text";
      }
      return this.type;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './css/style'
</style>