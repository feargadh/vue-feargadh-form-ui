import Button from './button'
import Input from './input'
import Form from './form'
import FormItem from './formItem'
import Select from './select'
import Radio from './radio'
import Checkbox from './checkbox'
import CheckboxGroup from './checkboxGroup'


const components = [
  Button,
  Input,
  Form,
  FormItem,
  Select,
  Radio,
  Checkbox,
  CheckboxGroup
]

const install = function (Vue) {
  if(install.installed) return

  components.map( component => Vue.component(component.name, component))
}

if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install,
  Input,
  Button,
  Form,
  FormItem,
  Select,
  Radio,
  Checkbox,
  CheckboxGroup
}