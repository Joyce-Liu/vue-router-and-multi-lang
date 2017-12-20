// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import LangEn from '../static/lang/en'
import LangZhCHS from '../static/lang/zhCHS'
import LangZhCHT from '../static/lang/zhCHT'

Vue.config.productionTip = false
Vue.use(VueI18n)

// const messages = {
//   en: {
//     message: {
//       hello: 'hello',
//       about: 'about'
//     }
//   },
//   zhCHS: {
//     message: {
//       hello: '你好',
//       about: '关于'
//     }
//   },
//   zhCHT: {
//     message: {
//       hello: '妳好',
//       about: '關於'
//     }
//   }
// }

const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages:{
    'en': LangEn,
    'zhCHS': LangZhCHS,
    'zhCHT': LangZhCHT
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})