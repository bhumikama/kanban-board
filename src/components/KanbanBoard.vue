<template>
  <v-app>
    <CardDialog v-model="dialog" :card="activeCard" @save="handleSaveCard" />
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6 font-weight-bold"
          >Confirm Deletion</v-card-title
        >
        <v-card-text>Are you sure you want to delete this card?</v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="red" @click="confirmDeleteCard">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-main>
      <div style="overflow-x: auto">
        <div class="d-flex px-6 py-6" style="gap: 16px">
          <KanbanColumn
            v-for="column in columns"
            :key="column.id"
            :column="column"
            @add="onAddCard"
            @edit="onEditCard"
            @delete="onDeleteCard"
          />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KanbanColumn from "./KanbanColumn.vue";
import type { Column } from "../types/kanban";
import { v4 as uuid } from "uuid";
import CardDialog from "./CardDialog.vue";
import type { Card } from "../types/kanban";

const deleteDialog = ref(false);
const cardToDelete = ref<{ cardId: string; columnId: string } | null>(null);

const columns = ref<Column[]>([
  {
    id: "todo",
    title: "To Do",
    cards: [],
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [],
  },
  {
    id: "done",
    title: "Done",
    cards: [],
  },
]);

const dialog = ref(false);
const activeCard = ref<Card | null>(null);
const currentColumnId = ref<string | null>(null);

function onAddCard(columnId: string) {
  currentColumnId.value = columnId;
  activeCard.value = null;
  dialog.value = true;
}

function onEditCard(card: Card) {
  activeCard.value = card;
  dialog.value = true;
}

function onDeleteCard(cardId: string, columnId: string) {
  cardToDelete.value = { cardId, columnId };
  deleteDialog.value = true;
}

function handleSaveCard(card: {
  id: string | null;
  title: string;
  description: string;
}) {
  if (card.id) {
    // Update existing card
    for (const col of columns.value) {
      const c = col.cards.find((cc) => cc.id === card.id);
      if (c) {
        c.title = card.title;
        c.description = card.description;
        break;
      }
    }
  } else if (currentColumnId.value) {
    // Add new card
    const column = columns.value.find(
      (column) => column.id === currentColumnId.value
    );
    if (column) {
      column.cards.push({
        id: uuid(),
        title: card.title,
        description: card.description,
      });
    }
  }
}

function confirmDeleteCard() {
  if (!cardToDelete.value) return;
  const { cardId, columnId } = cardToDelete.value;
  const column = columns.value.find((col) => col.id === columnId);
  if (column) {
    column.cards = column.cards.filter((card) => card.id !== cardId);
  }

  deleteDialog.value = false;
  cardToDelete.value = null;
}
</script>
