<template>
  <v-app>
    <v-toolbar flat color="transparent" class="mb-4">
      <v-toolbar-title
        class="w-100 text-center text-h4 font-weight-bold text-blue-darken-2"
        style="letter-spacing: 1px"
      >
        Kanban Board
      </v-toolbar-title>
    </v-toolbar>

    <v-main>
      <v-container fluid>
        <KanbanBoard />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import KanbanBoard from "./components/KanbanBoard.vue";
</script>
