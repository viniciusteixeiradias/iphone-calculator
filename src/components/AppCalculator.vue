<script setup lang="ts">
import AppButton from './AppButton.vue'
import type { RowButtons } from '../utils/button-list'

const props = defineProps<{
  modelValue: number,
  buttonsList: RowButtons[][]
}>()
</script>

<template>
  <span class="app-calculator__input">{{ props.modelValue }}</span>
  <div 
    class="app-calculator"
    v-for="(_, index) in props.buttonsList" 
    :key="index"
  >
    <AppButton 
      v-for="(button, indexBtn) in props.buttonsList[index]" 
      :key="indexBtn"
      :is-active="button.active"
      :is-large="button.isLarge"
      :style-button="button.type"
      :value="button.value"
      v-bind="$attrs"
    />
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
