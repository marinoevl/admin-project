/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'; // Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

// Internationalization
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { i18n } from '@/plugins/i18n.js'
import { useI18n } from 'vue-i18n'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,
  directives,
  locale: {
    adapter: createVueI18nAdapter({i18n, useI18n}),
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#0077B6', // Soft Blue
          secondary: '#2D6A4F', // Green
          accent: '#00B4D8', // Teal
          highlight: '#FFC300', // Gold
          background: '#FFFFFF', // White
          surface: '#F1F1F1', // Light Gray
          text: '#333333', // Charcoal Gray
        },
      },
      dark: {
        colors: {
          primary: '#0077B6', // Soft Blue
          secondary: '#2D6A4F', // Green
          accent: '#00B4D8', // Teal
          highlight: '#FFC300', // Gold
          background: '#333333', // Charcoal Gray
          surface: '#444444', // Darker Gray for surfaces
          text: '#FFFFFF', // White text for contrast
        },
      },
    },
    defaultTheme: 'light', // Set 'dark' as default if needed
  },
});
