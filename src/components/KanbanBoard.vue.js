import { ref } from "vue";
import KanbanColumn from "./KanbanColumn.vue";
import { v4 as uuid } from "uuid";
import CardDialog from "./CardDialog.vue";
const deleteDialog = ref(false);
const cardToDelete = ref(null);
const columns = ref([
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
const activeCard = ref(undefined);
const currentColumnId = ref(null);
function onAddCard(columnId) {
    currentColumnId.value = columnId;
    activeCard.value = undefined;
    dialog.value = true;
}
function onEditCard(card) {
    activeCard.value = card;
    dialog.value = true;
}
function onDeleteCard(cardId, columnId) {
    cardToDelete.value = { cardId, columnId };
    deleteDialog.value = true;
}
function handleSaveCard(card) {
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
    }
    else if (currentColumnId.value) {
        // Add new card
        const column = columns.value.find((column) => column.id === currentColumnId.value);
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
    if (!cardToDelete.value)
        return;
    const { cardId, columnId } = cardToDelete.value;
    const column = columns.value.find((col) => col.id === columnId);
    if (column) {
        column.cards = column.cards.filter((card) => card.id !== cardId);
    }
    deleteDialog.value = false;
    cardToDelete.value = null;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VApp;
/** @type {[typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
/** @type {[typeof CardDialog, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(CardDialog, new CardDialog({
    ...{ 'onSave': {} },
    modelValue: (__VLS_ctx.dialog),
    card: (__VLS_ctx.activeCard),
}));
const __VLS_6 = __VLS_5({
    ...{ 'onSave': {} },
    modelValue: (__VLS_ctx.dialog),
    card: (__VLS_ctx.activeCard),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onSave: (__VLS_ctx.handleSaveCard)
};
var __VLS_7;
const __VLS_12 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    modelValue: (__VLS_ctx.deleteDialog),
    maxWidth: "400",
}));
const __VLS_14 = __VLS_13({
    modelValue: (__VLS_ctx.deleteDialog),
    maxWidth: "400",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    ...{ class: "text-h6 font-weight-bold" },
}));
const __VLS_22 = __VLS_21({
    ...{ class: "text-h6 font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
var __VLS_23;
const __VLS_24 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
var __VLS_27;
const __VLS_28 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ class: "justify-end" },
}));
const __VLS_30 = __VLS_29({
    ...{ class: "justify-end" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ 'onClick': {} },
    text: true,
}));
const __VLS_34 = __VLS_33({
    ...{ 'onClick': {} },
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onClick: (...[$event]) => {
        __VLS_ctx.deleteDialog = false;
    }
};
__VLS_35.slots.default;
var __VLS_35;
const __VLS_40 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    ...{ 'onClick': {} },
    color: "red",
}));
const __VLS_42 = __VLS_41({
    ...{ 'onClick': {} },
    color: "red",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
let __VLS_44;
let __VLS_45;
let __VLS_46;
const __VLS_47 = {
    onClick: (__VLS_ctx.confirmDeleteCard)
};
__VLS_43.slots.default;
var __VLS_43;
var __VLS_31;
var __VLS_19;
var __VLS_15;
const __VLS_48 = {}.VMain;
/** @type {[typeof __VLS_components.VMain, typeof __VLS_components.vMain, typeof __VLS_components.VMain, typeof __VLS_components.vMain, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex px-6 py-6" },
    ...{ style: {} },
});
for (const [column] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    /** @type {[typeof KanbanColumn, ]} */ ;
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(KanbanColumn, new KanbanColumn({
        ...{ 'onAdd': {} },
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        key: (column.id),
        column: (column),
    }));
    const __VLS_53 = __VLS_52({
        ...{ 'onAdd': {} },
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        key: (column.id),
        column: (column),
    }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    let __VLS_55;
    let __VLS_56;
    let __VLS_57;
    const __VLS_58 = {
        onAdd: (__VLS_ctx.onAddCard)
    };
    const __VLS_59 = {
        onEdit: (__VLS_ctx.onEditCard)
    };
    const __VLS_60 = {
        onDelete: (__VLS_ctx.onDeleteCard)
    };
    var __VLS_54;
}
var __VLS_51;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            KanbanColumn: KanbanColumn,
            CardDialog: CardDialog,
            deleteDialog: deleteDialog,
            columns: columns,
            dialog: dialog,
            activeCard: activeCard,
            onAddCard: onAddCard,
            onEditCard: onEditCard,
            onDeleteCard: onDeleteCard,
            handleSaveCard: handleSaveCard,
            confirmDeleteCard: confirmDeleteCard,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
