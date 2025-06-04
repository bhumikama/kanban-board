<template>
  <v-dialog v-model="isOpen" max-width="400" persistent>
    <v-card rounded="lg" elevation="10">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h6 font-weight-bold">
          {{ card?.id ? "Edit Task" : "Add Task" }}
        </span>
        <v-btn icon @click="close" variant="text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-form ref="form" @submit.prevent="save">
          <v-text-field
            v-model="title"
            label="Name"
            :rules="[(v) => !!v || 'Name is required']"
            outlined
            dense
            class="mb-3"
          />
          <v-textarea
            v-model="description"
            label="Description"
            outlined
            rows="3"
            class="mb-2"
          />
          <v-btn type="submit" block color="primary"> Submit </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Card } from "../types/kanban";

const props = defineProps<{
  modelValue: boolean;
  card?: Card;
}>();
const emit = defineEmits(["update:modelValue", "save"]);

const isOpen = ref(props.modelValue);
watch(
  () => props.modelValue,
  (v) => (isOpen.value = v)
);

const title = ref(props.card?.title || "");
const description = ref(props.card?.description || "");
const form = ref();

function close() {
  emit('update:modelValue', false)
  title.value = ''
  description.value = ''
}


function save() {
  form.value?.validate().then((isValid: boolean) => {
    if (isValid) {
      emit("save", {
        title: title.value,
        description: description.value,
        id: props.card?.id || null,
      });
      close();
    }
  });
}
</script>
