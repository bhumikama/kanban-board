// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'


// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './style.css'
// Import Vuetify setup
import vuetify from './plugins/vuetify'

// Include Vuetify icon font (optional)
import '@mdi/font/css/materialdesignicons.css'

createApp(App).use(createPinia()).use(vuetify).mount('#app')

  // import { createPinia } from 'pinia'
  // const app = createApp(App)
  // app.use(createPinia()).use(vuetify).mount('#app')
   