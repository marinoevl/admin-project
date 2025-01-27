import { createI18n } from 'vue-i18n'
import { en as vuetifyEn, es as vuetifyEs } from 'vuetify/locale'
import en from '@/locales/en.js'
import es from '@/locales/es.js'

//todo: finding better location for this variable
const messages = {
  en: {
    $vuetify: {
      ...vuetifyEn,
      dataIterator: {
        rowsPerPageText: 'Items per page',
        pageText: '{0}-{1} of {2}',
      },
    },
    ...en,
  },
  es: {
    $vuetify: {
      ...vuetifyEs,
      dataIterator: {
        rowsPerPageText: 'Elementos por página.',
        pageText: '{0}-{1} de {2}',
      },
    },
    ...es
  }
}



export const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'es',
  messages,
})
