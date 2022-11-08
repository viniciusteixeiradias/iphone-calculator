<script setup lang="ts">
import AppCalculator from '../components/AppCalculator.vue'
import { Symbol } from '../models/StyleButton';
import * as InsideMath from '../utils/calculations' 
import { firstRowButtons, setActive } from '../utils/button-list'

let n1 = $ref(0)
let n2 = $ref(0)

const handleValue = (val: number) => {
  if (!n1) {
    n1 = val
    return
  }
  
  n1 = +`${n1.toString()}${val.toString()}`
}

const handleAction = (action: string) => {
  switch (action) {
    case Symbol.AC: 
      n1 = 0
      n2 = 0
    case Symbol.EXPRESSION:
      n1 = InsideMath.handleExpression(n1)
  }
}

const handleOperation = (operation: Symbol) => {
  setActive(operation)
  if (!n2) {
    n2 = n1
    n1 = 0
  }

  switch (operation) {
    case Symbol.EQUALS:
      InsideMath.handleEquals($$(n1), n2)
  }
}
</script>

<template>
  <AppCalculator 
    :model-value="n1"
    :buttons-list="firstRowButtons"
    @value="handleValue"
    @action="handleAction"
    @operation="handleOperation"
  />
</template>
