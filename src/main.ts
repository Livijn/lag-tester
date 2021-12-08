import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue'

import '@ionic/vue/css/core.css';
import "@ionic/vue/css/structure.css";

import './theme/app.scss';

const app = createApp(App)
  .use(IonicVue, { mode: 'ios' })
  .use(router)

router.isReady().then(() => {
  app.mount('#app');
});
