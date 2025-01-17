<script setup>
import { useTheme } from 'vuetify'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const theme = useTheme()
const { locale, availableLocales } = useI18n({})

const matchMedia = ref()
const toggleThemeActive = ref(false)

const toggleTheme = () => {
  toggleThemeActive.value = !toggleThemeActive.value
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const themeModeEvent = (e) => {
  if (e.matches) {
    theme.global.name.value = 'dark'
  } else {
    theme.global.name.value = 'light'
  }
}

onMounted(() => {
  matchMedia.value = window.matchMedia('(prefers-color-scheme: dark)')
  themeModeEvent(matchMedia.value)
  matchMedia.value.addEventListener('change', themeModeEvent)
})

onUnmounted(() => {
  matchMedia.value.removeListener(themeModeEvent)
})
</script>

<!--<template>-->
<!--  <v-app>-->
<!--    <v-container>-->
<!--      <v-btn @click="toggleTheme" color="primary">-->
<!--        Switch to {{ theme.global.current.value.dark ? 'Light' : 'Dark' }} Mode-->
<!--      </v-btn>-->
<!--    </v-container>-->

<!--    <RouterView />-->
<!--  </v-app>-->
<!--</template>-->

<!--<template>-->
<!--  <v-app>-->
<!--    &lt;!&ndash; Header Bar &ndash;&gt;-->
<!--    <v-app-bar app>-->
<!--      <v-row align="center" justify="space-between" class="w-100">-->
<!--        &lt;!&ndash; Logo &ndash;&gt;-->
<!--        <v-col cols="auto">-->
<!--          <v-btn icon>-->
<!--            <v-icon>mdi-menu</v-icon>-->
<!--          </v-btn>-->
<!--          <v-img-->
<!--            src="https://via.placeholder.com/120x40?text=Logo"-->
<!--            alt="Logo"-->
<!--            max-height="40"-->
<!--            contain-->
<!--          />-->
<!--        </v-col>-->

<!--        &lt;!&ndash; Profile Button &ndash;&gt;-->
<!--        <v-col cols="auto">-->
<!--          <v-btn icon>-->
<!--            <v-icon>mdi-bell</v-icon>-->
<!--          </v-btn>-->
<!--          <v-btn icon>-->
<!--            <v-icon>mdi-account-circle</v-icon>-->
<!--          </v-btn>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-app-bar>-->

<!--    &lt;!&ndash; Main Layout &ndash;&gt;-->
<!--    <v-container fluid>-->
<!--      <v-row>-->
<!--        &lt;!&ndash; Left Lateral Menu &ndash;&gt;-->
<!--        <v-col cols="3" class="menu-container">-->
<!--          <v-navigation-drawer app permanent>-->
<!--            <v-list>-->
<!--              <v-list-item-group>-->
<!--                <v-list-item>-->
<!--                  <v-list-item-icon>-->
<!--                    <v-icon>mdi-home</v-icon>-->
<!--                  </v-list-item-icon>-->
<!--                  <v-list-item-title>Home</v-list-item-title>-->
<!--                </v-list-item>-->
<!--                <v-list-item>-->
<!--                  <v-list-item-icon>-->
<!--                    <v-icon>mdi-account</v-icon>-->
<!--                  </v-list-item-icon>-->
<!--                  <v-list-item-title>Profile</v-list-item-title>-->
<!--                </v-list-item>-->
<!--                <v-list-item>-->
<!--                  <v-list-item-icon>-->
<!--                    <v-icon>mdi-settings</v-icon>-->
<!--                  </v-list-item-icon>-->
<!--                  <v-list-item-title>Settings</v-list-item-title>-->
<!--                </v-list-item>-->
<!--              </v-list-item-group>-->
<!--            </v-list>-->
<!--          </v-navigation-drawer>-->
<!--        </v-col>-->

<!--        &lt;!&ndash; Main Content &ndash;&gt;-->
<!--        <v-col cols="9" class="content-container">-->
<!--          <v-card class="pa-4">-->
<!--            <v-card-title>Main Content</v-card-title>-->
<!--            <v-card-text>-->
<!--              <RouterView />-->
<!--            </v-card-text>-->
<!--          </v-card>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->
<!--  </v-app>-->
<!--</template>-->

<template>
  <v-app class="rounded rounded-md">
    <!--    <v-system-bar color="grey-darken-3"></v-system-bar>-->

    <!--    <v-navigation-drawer-->
    <!--      color="grey-darken-2"-->
    <!--      width="72"-->
    <!--      permanent-->
    <!--    ></v-navigation-drawer>-->

    <v-navigation-drawer color="grey-darken-1" permanent></v-navigation-drawer>

    <v-app-bar app>
      <v-row align="center" justify="space-between" class="w-100">
        <!-- Logo -->
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <!--          <v-img-->
          <!--            src="@/assets/logo.svg"-->
          <!--            alt="Logo"-->
          <!--            max-height="10"-->
          <!--            contain-->
          <!--          />-->
        </v-col>

        <!-- Profile Button -->
        <v-col cols="auto" class="d-flex align-center">
          <v-select density="compact" v-model="locale" :items="availableLocales" />
          <v-btn :active="toggleThemeActive" icon @click="toggleTheme">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-bell</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      color="grey-lighten-1"
      location="right"
      width="190"
      permanent
    ></v-navigation-drawer>

    <v-app-bar color="grey-lighten-2" height="48" location="bottom" flat></v-app-bar>

    <v-main class="d-flex align-start justify-center" style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.menu-container {
  background-color: #f5f5f5;
  min-height: 100vh;
}

.content-container {
  padding: 16px;
}
</style>
