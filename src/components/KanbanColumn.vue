<template>
  <div class="pa-2">
    <v-card
      class="d-flex flex-column pa-2 elevation-2"
      outlined
      style="
        min-width: 300px;
        max-width: 320px;
        height: 600px;
        border-radius: 12px;
      "
    >
      <v-card-title
        class="py-2 px-3 d-flex justify-space-between align-center text-white"
        :class="colorClass"
        style="border-top-left-radius: 12px; border-top-right-radius: 12px"
      >
        <span class="text-h6 font-weight-medium">{{ column.title }}</span>
        <v-tooltip text="Add card" location="top">
          <template #activator="{ props }">
            <v-btn
              icon
              size="small"
              @click="$emit('add', column.id)"
              v-bind="props"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </v-card-title>

      <v-card-text>
        <draggable
          :list="column.cards"
          group="kanban"
          item-key="id"
          @end="onDragEnd"
        >
          <template #item="{ element }">
            <div class="p-2 mt-2">
              <KanbanCard
                :card="element"
                @edit="$emit('edit', element)"
                @delete="$emit('delete', element.id, column.id)"
              />
            </div>
          </template>
        </draggable>
      </v-card-text>
      <!-- <v-card-actions>
      <v-btn block @click="$emit('add', column.id)">Add Card</v-btn>
    </v-card-actions> -->
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import KanbanCard from "./KanbanCard.vue";
import type { Column, Card } from "../types/kanban";
import draggable from "vuedraggable";
import { useKanbanStore } from "../store/kanbanStore";

const props = defineProps<{ column: Column }>();
const emit = defineEmits(["add", "edit", "delete"]);
const store = useKanbanStore();

function onDragEnd(event: any) {
  const card: Card = event.item.__vue__.card;
  const toColumnId = props.column.id;
  const newIndex = event.newIndex;
  store.moveCard(card, toColumnId, newIndex);
}
const colorClass = computed(() => {
  switch (props.column.id) {
    case "todo":
      return "bg-blue-darken-2";
    case "in-progress":
      return "bg-amber-darken-2";
    case "done":
      return "bg-green-darken-2";
    default:
      return "bg-grey-lighten-2";
  }
});
</script>
