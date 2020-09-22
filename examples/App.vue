<template>
  <div id="app">
    <fg-form :model="userInfo" :rules="rules" ref="loginForm">
      <fg-form-item label="Username" prop="username">
        <fg-input v-model="userInfo.username" placeholder="Plaese input username"></fg-input>
      </fg-form-item>

      <fg-form-item label="Password" prop="password">
        <fg-input v-model="userInfo.password" type="password" placeholder="Plaese input password"></fg-input>
      </fg-form-item>

      <fg-form-item label="Language" prop="language">
        <fg-select :options="options" v-model="userInfo.language" ></fg-select>
      </fg-form-item>

      <fg-form-item label="Sex" prop="sex">
        <fg-radio name="sex" v-model="userInfo.sex" val="boy">Boy</fg-radio>
        <fg-radio name="sex" v-model="userInfo.sex" val="girl">Girl</fg-radio>
      </fg-form-item>

      <fg-form-item label="IDE" prop="Ide">
        <fg-checkbox-group v-model="userInfo.Ide">
          <fg-checkbox value="IDEA">IDEA</fg-checkbox>
          <fg-checkbox value="MyEclipse">MyEclipse</fg-checkbox>
          <fg-checkbox value="VSCode">VSCode</fg-checkbox>
        </fg-checkbox-group>
      </fg-form-item>
    </fg-form>

    <div class="btn-group">
      <fg-button native-type="reset">default</fg-button>
      <fg-button type="primary" @click.native="login">Login</fg-button>
      <fg-button type="success">success</fg-button>
      <fg-button type="info">Info</fg-button>
      <fg-button type="warning">Warning</fg-button>
      <fg-button type="danger">Danger</fg-button>
      <fg-button size="small">small</fg-button>
      <fg-button size="mini">small</fg-button>
    </div>
    <br>
    <fg-button type="primary" :disable="true" icon="fas fa-search">disable</fg-button>

    <br>
    <fg-input :disable="true"></fg-input>
    <br>
    <fg-select v-model="value" :options="options"></fg-select>
    {{value}}
    <br>
    <fg-checkbox :disable="true">disable</fg-checkbox>
    <br>
    <fg-radio :disable="true">radio</fg-radio>
    <br>
    <input type="radio" >
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
        language: "",
        sex: "",
        Ide: [],
      },
      options: [{
          value: '选项1',
          name: '黄金糕'
        }, {
          value: '选项2',
          name: '双皮奶'
        }, {
          value: '选项3',
          name: '蚵仔煎'
        }, {
          value: '选项4',
          name: '龙须面'
        }, {
          value: '选项5',
          name: '北京烤鸭'
        }],
        value: '',
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [
          { required: true, message: "请输入密码" },
          { type: "string", min: 6, message: "密码长度不能少于6位" },
        ],
        language: [
          { required: true, message: "请选择一门语言", trigger: "change" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        Ide: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个Ide",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((success) => {
        if (success) {
          alert("效验成功");
        } else {
          alert("效验失败");
        }
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .btn-group {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;

    fg-button {
      margin-right: 15px;
    }
  }
}
</style>
