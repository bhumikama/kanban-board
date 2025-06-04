<template>
  <v-card
    class="d-flex flex-column elevation-1 rounded"
    outlined
    style="min-height: 120px; padding: 16px"
  >
    <!-- Header row -->
    <div class="d-flex justify-space-between align-center mb-2">
      <div class="text-subtitle-1 font-weight-medium" style="line-height: 1.3">
        {{ card.title }}
      </div>
      <div class="d-flex align-center" style="gap: 8px">
        <v-btn icon size="small" class="ma-0 pa-0" @click="$emit('edit', card)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          icon
          size="small"
          class="ma-0 pa-0"
          @click="$emit('delete', card.id)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Description -->
    <div class="text-body-2 text-start" style="line-height: 1.4">
      {{ card.description }}
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { Card } from "../types/kanban";

defineProps<{ card: Card }>();
defineEmits(["edit", "delete"]);
</script>
