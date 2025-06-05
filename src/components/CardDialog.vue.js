import { ref, watch } from "vue";
const props = defineProps();
const emit = defineEmits(["update:modelValue", "save"]);
const isOpen = ref(props.modelValue);
watch(() => props.modelValue, (v) => (isOpen.value = v));
const title = ref(props.card?.title || "");
const description = ref(props.card?.description || "");
const form = ref();
function close() {
    emit('update:modelValue', false);
    title.value = '';
    description.value = '';
}
function save() {
    form.value?.validate().then((isValid) => {
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.isOpen),
    maxWidth: "400",
    persistent: true,
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.isOpen),
    maxWidth: "400",
    persistent: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    rounded: "lg",
    elevation: "10",
}));
const __VLS_7 = __VLS_6({
    rounded: "lg",
    elevation: "10",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "d-flex justify-space-between align-center" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "d-flex justify-space-between align-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-h6 font-weight-bold" },
});
(__VLS_ctx.card?.id ? "Edit Task" : "Add Task");
const __VLS_13 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    ...{ 'onClick': {} },
    icon: true,
    variant: "text",
}));
const __VLS_15 = __VLS_14({
    ...{ 'onClick': {} },
    icon: true,
    variant: "text",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onClick: (__VLS_ctx.close)
};
__VLS_16.slots.default;
const __VLS_21 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_24.slots.default;
var __VLS_24;
var __VLS_16;
var __VLS_12;
const __VLS_25 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
const __VLS_29 = {}.VForm;
/** @type {[typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    ...{ 'onSubmit': {} },
    ref: "form",
}));
const __VLS_31 = __VLS_30({
    ...{ 'onSubmit': {} },
    ref: "form",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
let __VLS_33;
let __VLS_34;
let __VLS_35;
const __VLS_36 = {
    onSubmit: (__VLS_ctx.save)
};
/** @type {typeof __VLS_ctx.form} */ ;
var __VLS_37 = {};
__VLS_32.slots.default;
const __VLS_39 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({
    modelValue: (__VLS_ctx.title),
    label: "Name",
    rules: ([(v) => !!v || 'Name is required']),
    outlined: true,
    dense: true,
    ...{ class: "mb-3" },
}));
const __VLS_41 = __VLS_40({
    modelValue: (__VLS_ctx.title),
    label: "Name",
    rules: ([(v) => !!v || 'Name is required']),
    outlined: true,
    dense: true,
    ...{ class: "mb-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
const __VLS_43 = {}.VTextarea;
/** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
    modelValue: (__VLS_ctx.description),
    label: "Description",
    outlined: true,
    rows: "3",
    ...{ class: "mb-2" },
}));
const __VLS_45 = __VLS_44({
    modelValue: (__VLS_ctx.description),
    label: "Description",
    outlined: true,
    rows: "3",
    ...{ class: "mb-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const __VLS_47 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    type: "submit",
    block: true,
    color: "primary",
}));
const __VLS_49 = __VLS_48({
    type: "submit",
    block: true,
    color: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
__VLS_50.slots.default;
var __VLS_50;
var __VLS_32;
var __VLS_28;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
// @ts-ignore
var __VLS_38 = __VLS_37;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isOpen: isOpen,
            title: title,
            description: description,
            form: form,
            close: close,
            save: save,
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
