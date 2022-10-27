<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { StyleButton, Symbol } from '../models/StyleButton'
import AppButton from './AppButton.vue'

interface RowButtons {
    type: StyleButton,
    value: Symbol,
    isLarge?: boolean
}

const result = ref('0');

const validateValue = ():boolean => {
  if (+result.value > 100) {
    result.value = 'Error'
  }
  const maxLength = 11
  return result.value.length < maxLength
}

const handleOthers = (value: Symbol) => {
  switch (value) {
    case Symbol.AC:
      result.value = '0'
      break
    case Symbol.CLEAR:
      result.value = '0'
      break
    case Symbol.EXPRESSION:
      result.value.includes('-')
        ? result.value = `${result.value.substring(1)}`
        : result.value = `-${result.value}`
      break
    case Symbol.PERCENT:
      result.value = (+result.value / 100).toString()
  }
}

const handleOperation = (value: Symbol) => {
  switch (value) {
    case Symbol.AC || Symbol.CLEAR:
      result.value = '0'
      break
  }
}

const setValue = (value: Symbol, type: StyleButton) => {
  if (!validateValue) {
    return
  }

  if (type === StyleButton.OPERATION) {
    handleOperation(value)
    return
  }

  if (type === StyleButton.OTEHR) {
    handleOthers(value)
    return
  }

  if (result.value === Symbol.ZERO) {
    result.value = value
  } else {
    result.value = `${result.value}${value}`
  }
}

const firstRowButtons = reactive<RowButtons[][]>([
  [
    {
      type: StyleButton.OTEHR,
      value: Symbol.AC
    },
    {
      type: StyleButton.OTEHR,
      value: Symbol.EXPRESSION
    },
    {
      type: StyleButton.OTEHR,
      value: Symbol.PERCENT
    },
    {
      type: StyleButton.OPERATION,
      value: Symbol.DIVISION
    }
  ],
  [
    {
      type: StyleButton.DEFAULT,
      value: Symbol.SEVEN
    },
    {
      type: StyleButton.DEFAULT,
      value: Symbol.EIGHT
    },
    {
      type: StyleButton.DEFAULT,
      value: Symbol.NINE
    },
    {
      type: StyleButton.OPERATION,
      value: Symbol.MULTIPLICATION
    }
  ],
  [
    {
      type: StyleButton.DEFAULT,
      value: Symbol.FOUR
    },
    {
      type: StyleButton.DEFAULT,
      value: Symbol.FIVE
    },
    {
      type: StyleButton.DEFAULT,
      value: Symbol.SIX
    },
    {
      type: StyleButton.OPERATION,
      value: Symbol.MINUS
    }
  ],
  [
    {
      type: StyleButton.DEFAULT,
      value: Symbol.ONE
    },
    {
      type: StyleButton.DEFAULT,
      value: Symbol.TWO
    },
    {
      type: StyleButton.DEFAULT,
      value: Symbol.THREE
    },
    {
      type: StyleButton.OPERATION,
      value: Symbol.PLUS
    }
  ],
  [
    {
      type: StyleButton.DEFAULT,
      value: Symbol.ZERO,
      isLarge: true
    },
    {
      type: StyleButton.DEFAULT,
      value: Symbol.COMMA
    },
    {
      type: StyleButton.OPERATION,
      value: Symbol.EQUALS
    }
  ]
])

watch(() => result.value, (val) => {
  if (!validateValue()) {
    result.value = Number(val).toExponential()
  }

  if (!+val) {
    firstRowButtons[0][0].value = Symbol.AC
  } else if (+val && firstRowButtons[0][0].value !== Symbol.CLEAR) {
    firstRowButtons[0][0].value = Symbol.CLEAR
  }
})
</script>

<template>
  <span class="app-calculator__input">{{ result }}</span>
  <div 
    class="app-calculator"
    v-for="(_, index) in firstRowButtons" 
    :key="index"
  >
    <AppButton 
      v-for="(button, indexBtn) in firstRowButtons[index]" 
      :key="indexBtn"
      :is-large="button.isLarge"
      :style-button="button.type"
      :symbol="button.value"
      @click="setValue(button.value, button.type)"
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
