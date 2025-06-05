import { computed } from "vue";
import KanbanCard from "./KanbanCard.vue";
import draggable from "vuedraggable";
import { useKanbanStore } from "../store/kanbanStore";
const props = defineProps();
const emit = defineEmits(["add", "edit", "delete"]);
const store = useKanbanStore();
function onDragEnd(event) {
    const card = event.item.__vue__.card;
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pa-2" },
});
const __VLS_0 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "d-flex flex-column pa-2 elevation-2" },
    outlined: true,
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "d-flex flex-column pa-2 elevation-2" },
    outlined: true,
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ class: "py-2 px-3 d-flex justify-space-between align-center text-white" },
    ...{ class: (__VLS_ctx.colorClass) },
    ...{ style: {} },
}));
const __VLS_6 = __VLS_5({
    ...{ class: "py-2 px-3 d-flex justify-space-between align-center text-white" },
    ...{ class: (__VLS_ctx.colorClass) },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-h6 font-weight-medium" },
});
(__VLS_ctx.column.title);
const __VLS_8 = {}.VTooltip;
/** @type {[typeof __VLS_components.VTooltip, typeof __VLS_components.vTooltip, typeof __VLS_components.VTooltip, typeof __VLS_components.vTooltip, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    text: "Add card",
    location: "top",
}));
const __VLS_10 = __VLS_9({
    text: "Add card",
    location: "top",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
{
    const { activator: __VLS_thisSlot } = __VLS_11.slots;
    const [{ props }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_12 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ 'onClick': {} },
        icon: true,
        size: "small",
        color: "white",
        ...{ class: "elevation-1" },
        ...(props),
    }));
    const __VLS_14 = __VLS_13({
        ...{ 'onClick': {} },
        icon: true,
        size: "small",
        color: "white",
        ...{ class: "elevation-1" },
        ...(props),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_16;
    let __VLS_17;
    let __VLS_18;
    const __VLS_19 = {
        onClick: (...[$event]) => {
            __VLS_ctx.$emit('add', __VLS_ctx.column.id);
        }
    };
    __VLS_15.slots.default;
    const __VLS_20 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        color: "black",
    }));
    const __VLS_22 = __VLS_21({
        color: "black",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    var __VLS_23;
    var __VLS_15;
}
var __VLS_11;
var __VLS_7;
const __VLS_24 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.draggable;
/** @type {[typeof __VLS_components.Draggable, typeof __VLS_components.draggable, typeof __VLS_components.Draggable, typeof __VLS_components.draggable, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ 'onEnd': {} },
    list: (__VLS_ctx.column.cards),
    group: "kanban",
    itemKey: "id",
}));
const __VLS_30 = __VLS_29({
    ...{ 'onEnd': {} },
    list: (__VLS_ctx.column.cards),
    group: "kanban",
    itemKey: "id",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
let __VLS_32;
let __VLS_33;
let __VLS_34;
const __VLS_35 = {
    onEnd: (__VLS_ctx.onDragEnd)
};
__VLS_31.slots.default;
{
    const { item: __VLS_thisSlot } = __VLS_31.slots;
    const [{ element }] = __VLS_getSlotParams(__VLS_thisSlot);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "p-2 mt-2" },
    });
    /** @type {[typeof KanbanCard, ]} */ ;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(KanbanCard, new KanbanCard({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        card: (element),
    }));
    const __VLS_37 = __VLS_36({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        card: (element),
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    let __VLS_39;
    let __VLS_40;
    let __VLS_41;
    const __VLS_42 = {
        onEdit: (...[$event]) => {
            __VLS_ctx.$emit('edit', element);
        }
    };
    const __VLS_43 = {
        onDelete: (...[$event]) => {
            __VLS_ctx.$emit('delete', element.id, __VLS_ctx.column.id);
        }
    };
    var __VLS_38;
}
var __VLS_31;
var __VLS_27;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['pa-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-2']} */ ;
/** @type {__VLS_StyleScopedClasses['elevation-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['elevation-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            KanbanCard: KanbanCard,
            draggable: draggable,
            onDragEnd: onDragEnd,
            colorClass: colorClass,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
