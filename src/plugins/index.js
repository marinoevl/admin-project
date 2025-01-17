/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify';
import { i18n } from '@/plugins/i18n.js'
// import registerPinia from '@/plugins/pinia.js'
// import registerSentrySdk from './sentry.js';

export default function registerPlugins(app) {
  app.use(i18n);
  app.use(vuetify);
  // registerSentrySdk(app);
  // app.use(registerPinia(app))
}
