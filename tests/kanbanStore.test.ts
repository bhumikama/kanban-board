import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useKanbanStore } from "../src/store/KanbanStore";

describe("Kanban Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear()
  });

  it("adds a card to the correct column", () => {
    const store = useKanbanStore();
    store.addCard("todo", "New Task", "Task description");

    const todoColumn = store.columns.find((c) => c.id === "todo");
    expect(todoColumn?.cards.length).toBe(1);
    expect(todoColumn?.cards[0].title).toBe("New Task");
  });

  it("edits a card", () => {
    const store = useKanbanStore();
    store.addCard("todo", "Old Title", "Old Desc");
    const card = store.columns[0].cards[0];

    // Simulate edit
    card.title = "New Title";
    card.description = "New Description";

    expect(store.columns[0].cards[0].title).toBe("New Title");
    expect(store.columns[0].cards[0].description).toBe("New Description");
  });
  

  it('moves a card from one column to another', () => {
    const store = useKanbanStore()

    // Add a card to 'todo'
    store.addCard('todo', 'Task to Move', 'Move me please')
    const card = store.columns.find(c => c.id === 'todo')!.cards[0]

    // Move to 'done'
    store.moveCard(card, 'done', 0)

    const todoCards = store.columns.find(c => c.id === 'todo')!.cards
    const doneCards = store.columns.find(c => c.id === 'done')!.cards

    // Assertions
    expect(todoCards.length).toBe(0)
    expect(doneCards.length).toBe(1)
    expect(doneCards[0].id).toBe(card.id)
  });
});
