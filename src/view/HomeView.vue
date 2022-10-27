<script setup lang="ts">
import { ref } from 'vue';
import AppCalculator from '../components/AppCalculator.vue'
// import { useMouse } from '../utils/calculations'

const n1 = ref(0)
const n2 = ref(0)

const handleValue = (val: number) => {
  n1.value = val
}

const handleAction = (action: string) => {
  switch (action) {
    case 'AC': 
      n1.value = 0 
  }
}

const handleOperation = (operation: string) => {
  console.log(operation)
}
</script>

<template>
  <AppCalculator 
    :model-value="n1"
    @value="handleValue"
    @action="handleAction"
    @operation="handleOperation"
  />
</template>
