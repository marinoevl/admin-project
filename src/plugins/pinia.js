import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { markRaw } from 'vue'
import router from '@/router/index.js'

export default function registerPinia(app) {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  pinia.use(({ store }) => {
    store.router = markRaw(router);
  });

  app.use(pinia);
}
