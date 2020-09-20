# vue-feargadh-form-ui

​		基于Vue2.x的一套好看的表单组件，目前包含了Button按钮、Input输入框、Select选择器、Checkbox复选框、Radio 单选框。

## 下载组件

```powershell
npm i vue-feargadh-form-ui
```



## 实现组件

- [√] Form
- [√] FormItem
- [√] Button
- [√] Input
- [√] Select
- [√] Checkbox
- [√] CheckboxGroup
- [√] Radio



## 使用组件

首先，安装[babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

```powershell
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "vue-feargadh-form-ui",
        "root": "index",
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'vue-feargadh-form-ui';
import App from './App.vue';


Vue.use(Button)
Vue.use(Select)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

如果你希望直接引入全部组件，则在main.js中写入一下内容

```JavaScript
import Vue from 'vue';
import VueFeargadhFormUi from 'vue-feargadh-form-ui';
import App from './App.vue';


Vue.use(VueFeargadhFormUi)

new Vue({
  el: '#app',
  render: h => h(App)
});
```



## 项目文档

制作中.....