import { ref, shallowRef } from "vue"
import { StyleButton, Symbol } from "../models/StyleButton"

interface RowButtons {
	type: StyleButton
	value: Symbol
	active: boolean
	isLarge?: boolean
}

const firstRowButtons = ref<RowButtons[][]>([
	[
		{
			type: StyleButton.ACTION,
			value: Symbol.AC,
			active: false,
		},
		{
			type: StyleButton.ACTION,
			value: Symbol.EXPRESSION,
			active: false,
		},
		{
			type: StyleButton.ACTION,
			value: Symbol.PERCENT,
			active: false,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.DIVISION,
			active: false,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.SEVEN,
			active: false,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.EIGHT,
			active: false,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.NINE,
			active: false,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.MULTIPLICATION,
			active: false,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.FOUR,
			active: false,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.FIVE,
			active: false,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.SIX,
			active: false,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.MINUS,
			active: false,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.ONE,
			active: false,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.TWO,
			active: false,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.THREE,
			active: false,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.PLUS,
			active: false,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.ZERO,
			active: false,
			isLarge: true,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.COMMA,
			active: false,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.EQUALS,
			active: false,
		},
	],
])

const setActive = (value: Symbol) => {
	for (let i = 0; i < firstRowButtons.value.length; i++) {
		for (let x = 0; x < firstRowButtons.value[i].length; x++) {
			if (firstRowButtons.value[i][x].value === value) {
				firstRowButtons.value[i][x].active = true
			} else {
				firstRowButtons.value[i][x].active = false
			}

			if (!firstRowButtons.value[i][x].active) {
				continue
			}
		}
	}
}

export { firstRowButtons, setActive, type RowButtons }
