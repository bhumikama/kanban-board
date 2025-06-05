import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './style.css';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
createApp(App).use(createPinia()).use(vuetify).mount('#app');
