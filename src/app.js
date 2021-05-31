import Vue from 'vue'
import store from './store'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

const App = new Vue({
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
