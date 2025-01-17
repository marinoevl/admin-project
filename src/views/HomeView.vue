<script setup>

import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <v-container>
    <!-- Header -->
    <v-row>
      <v-col>
        <h2 class="primary--text">{{ t("example.title") }}</h2>
      </v-col>
      <v-col class="text-end">
        <v-btn color="primary" class="white--text">Add New Record</v-btn>
      </v-col>
    </v-row>

    <!-- Search and Filter -->
    <v-row>
      <v-col>
        <v-text-field label="Search" variant="outlined" color="accent"></v-text-field>
      </v-col>
      <v-col>
        <v-btn color="accent" class="white--text">Filter</v-btn>
      </v-col>
    </v-row>

    <!-- Table -->
    <v-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Finance</td>
            <td class="secondary--text">Active</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Marketing</td>
            <td>Inactive</td>
            <td>Edit | Delete</td>
          </tr>
        </tbody>
      </template>
    </v-table>

    <!-- Pagination -->
    <v-row class="justify-center">
      <v-btn icon color="highlight">1</v-btn>
      <v-btn icon class="primary--text">2</v-btn>
      <v-btn icon color="highlight">3</v-btn>
    </v-row>
  </v-container>
</template>

