<script lang="ts" setup>
import { StyleButton } from '../models/StyleButton'

const props = defineProps<{
    symbol: string,
    styleButton: StyleButton
}>()

const isDefault = props.styleButton === StyleButton.DEFAULT
const isOther = props.styleButton === StyleButton.OTEHR
const isOperation = props.styleButton === StyleButton.OPERATION

</script>

<template>
    <div 
        class="app-button"
        :class="{ 
            'app-button__default': isDefault,
            'app-button__other': isOther,
            'app-button__operation': isOperation
        }"
    >
        {{ props.symbol }}
    </div>
</template>

<style lang="scss" scoped>

.app-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.4s ease-out;

    &__default {
        background-color: lighten($color: black, $amount: 30);
        color: white;
        font-size: 2rem;
    }

    &__other {
        background-color: darken($color: white, $amount: 30);
        color: black;
        font-size: 1.5rem;
        font-weight: 500;
    }

    &__operation {
        background-color: orange;
        color: white;
        font-size: 2rem;
        font-weight: 700;
    }

    &__default:hover {
        background-color: darken($color: #ffffff, $amount: 50);
    }
    &__other:hover {
        background-color: darken($color: #ffffff, $amount: 10);
    }
    &__operation:hover {
        background-color: white;
        color: orange;
    }
}
</style>