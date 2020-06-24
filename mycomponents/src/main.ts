import './public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false;
let instance: any = null;
function render(props: any = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


export default instance
export async function bootstrap() {
  console.log('bootstrap')
}
export async function mount(props: any) {
  console.log('mount')
  render(props);
}
export async function unmount() {
  console.log('unmount')
  instance.$destroy()
}
