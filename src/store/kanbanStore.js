import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { v4 as uuid } from 'uuid';
const STORAGE_KEY = 'kanban-columns';
function loadFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [
        { id: 'todo', title: 'To Do', cards: [] },
        { id: 'in-progress', title: 'In Progress', cards: [] },
        { id: 'done', title: 'Done', cards: [] },
    ];
}
export const useKanbanStore = defineStore('kanban', () => {
    const columns = ref(loadFromStorage());
    function addCard(columnId, title, description) {
        const column = columns.value.find(c => c.id === columnId);
        if (column) {
            column.cards.push({ id: uuid(), title, description });
        }
    }
    function editCard(cardId, title, description) {
        for (const column of columns.value) {
            const card = column.cards.find(c => c.id === cardId);
            if (card) {
                card.title = title;
                card.description = description;
                break;
            }
        }
    }
    function deleteCard(cardId) {
        columns.value.forEach(column => {
            column.cards = column.cards.filter(card => card.id !== cardId);
        });
    }
    function moveCard(card, toColumnId, newIndex) {
        // Remove from old column
        for (const column of columns.value) {
            const idx = column.cards.findIndex(c => c.id === card.id);
            if (idx !== -1) {
                column.cards.splice(idx, 1);
                break;
            }
        }
        // Add to new column at the specified index
        const targetColumn = columns.value.find(c => c.id === toColumnId);
        if (targetColumn) {
            targetColumn.cards.splice(newIndex, 0, card);
        }
    }
    watch(columns, (newVal) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal));
    }, { deep: true });
    return { columns, addCard, editCard, deleteCard, moveCard };
});
