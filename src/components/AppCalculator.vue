<script setup lang="ts">
import AppButton from './AppButton.vue'
import AppLargeButton from './AppLargeButton.vue';
import { StyleButton } from '../models/StyleButton'
import { ref } from 'vue';

const result = ref(new Intl.NumberFormat('br-BR').format(987654321));
</script>

<template>
    <span class="app-calculator__input">{{ result }}</span>
    <div class="app-calculator">
        <AppButton :style-button="StyleButton.OTEHR" symbol="AC" />
        <AppButton :style-button="StyleButton.OTEHR" symbol="+/-" />
        <AppButton :style-button="StyleButton.OTEHR" symbol="%" />
        <AppButton :style-button="StyleButton.OPERATION" symbol="÷" />
    </div>
    <div class="app-calculator">
        <AppButton :style-button="StyleButton.DEFAULT" symbol="7" />
        <AppButton :style-button="StyleButton.DEFAULT" symbol="8" />
        <AppButton :style-button="StyleButton.DEFAULT" symbol="9" />
        <AppButton :style-button="StyleButton.OPERATION" symbol="x" />
    </div>
    <div class="app-calculator">
        <AppButton :style-button="StyleButton.DEFAULT" symbol="4" />
        <AppButton :style-button="StyleButton.DEFAULT" symbol="5" />
        <AppButton :style-button="StyleButton.DEFAULT" symbol="6" />
        <AppButton :style-button="StyleButton.OPERATION" symbol="-" />
    </div>
    <div class="app-calculator">
        <AppButton :style-button="StyleButton.DEFAULT" symbol="1" />
        <AppButton :style-button="StyleButton.DEFAULT" symbol="2" />
        <AppButton :style-button="StyleButton.DEFAULT" symbol="3" />
        <AppButton :style-button="StyleButton.OPERATION" symbol="+" />
    </div>
    <div class="app-calculator">
        <AppLargeButton symbol="0" />
        <AppButton :style-button="StyleButton.DEFAULT" symbol="," />
        <AppButton :style-button="StyleButton.OPERATION" symbol="=" />
    </div>
</template>

<style lang="scss" scoped>
.app-calculator {
    display: flex;
    gap: 0.75rem;
    margin-block: 0.75rem;

    &__input {
        font-size: 3rem;
        color: white;
        display: flex;
        justify-content: flex-end;
        margin: 0 0.5rem 1.5rem 0;
    }
}
</style>
