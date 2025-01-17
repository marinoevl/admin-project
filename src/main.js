import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'

// Plugins
import registerPlugins from '@/plugins';

const app = createApp(App)

registerPlugins(app);

app.use(router)

app.mount('#app')
