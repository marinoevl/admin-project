<script setup>

import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n({})

const setLocale = (language) => {
  locale.value = language
}

</script>

<template>
<v-menu>
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" variant="text">
      <v-icon>mdi-translate</v-icon>
      <label class="ms-1">{{ locale }}</label>
    </v-btn>
  </template>
  <v-list>
    <v-list-item
      v-for="(language, index) in availableLocales"
      :key="index"
      :value="index"
      >
      <v-list-item-title
        @click="setLocale(language)"
        class="text-uppercase">
        {{ language }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</template>

<style scoped>

</style>
