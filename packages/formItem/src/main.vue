<template>
  <div class="item">
    <label class v-if="label.length > 0" :style="focusFlag ? 'color:#5f27cd' : ''">{{label}}</label>
    <div class="content">
      <slot></slot>
      <span class="errorMsg" v-if="err.length > 0">{{err}}</span>
    </div>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  name:'FgFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "left",
    },
    prop:{
      type: String,
    }
  },
  mounted() {
    this.$on("focusChange", (value) => {
      this.focusChange(value);
    });

    this.$on("validate", (value) => {
      this.validate(value);
    });
  },
  data() {
    return {
      focusFlag: false,
      err: "",
    };
  },
  methods: {
    focusChange(value) {
      this.focusFlag = value;
    },

    validate() {
      if (!this.prop) return;

      // 当前的规则
      const rules = this.form.rules[this.prop];

      // 当前值
      const value = this.form.model[this.prop];

      // 校验描述对象
      const desc = { [this.prop]: rules };

      // 创建Schema实例
      const schema = new Schema(desc);

      // 使用schema对值进行校验
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.err = errors[0].message;
        } else {
          this.err = "";
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './css/style';
</style>