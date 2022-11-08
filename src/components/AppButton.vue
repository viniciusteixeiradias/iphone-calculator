<script lang="ts" setup>
import { StyleButton, Symbol } from '../models/StyleButton'

const props = defineProps<{
  value: Symbol,
  styleButton: StyleButton,
  isLarge?: boolean
  isActive?: boolean
}>()
const emits = defineEmits<{
  (e: 'value', val: number): void
  (e: 'operation', val: Symbol): void
  (e: 'action', val: Symbol): void
}>()

const isAction = props.styleButton === StyleButton.ACTION
const isValue = props.styleButton === StyleButton.VALUE
const isOperation = props.styleButton === StyleButton.OPERATION

const handleClick = () => {
  if (isAction) {
    emits('action', props.value)
  } else if (isValue) {
    if (props.value !== Symbol.COMMA) {
      emits('value', +props.value)
      return
    }

    emits('action', props.value)
  } else {
    emits('operation', props.value)
  }
}
</script>

<template>
  <div
    v-if="isLarge"
    @click="handleClick"
    class="app-button__large"
  >
    {{ props.value }}
  </div>
  <div 
    v-else
    @click="handleClick"
    class="app-button"
    :class="{ 
      'app-button__action': isAction,
      'app-button__value': isValue,
      'app-button__operation': isOperation,
      'app-button__operation--active': props.isActive
    }"
  >
    {{ props.value }}
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
  user-select: none;

  &__action {
    background-color: darken($color: white, $amount: 30);
    color: black;
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__value {
    background-color: lighten($color: black, $amount: 30);
    color: white;
    font-size: 2rem;
  }

  &__operation {
    background-color: orange;
    color: white;
    font-size: 2rem;
    font-weight: 700;

    &--active {
      background-color: white;
      color: orange; 
    }
  }

  &__action:hover {
    background-color: darken($color: #ffffff, $amount: 10);
  }

  &__value:hover {
    background-color: darken($color: #ffffff, $amount: 50);
  }

  &__operation:hover {
    background-color: white;
    color: orange;
  }
}


.app-button__large {
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  height: 4rem;
  width: calc(8.75rem - 1.5rem);
  border-radius: 100px;
  background-color: lighten($color: black, $amount: 30);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
}

.app-button__large:hover {
  background-color: darken($color: #ffffff, $amount: 50);

}
</style>