import { StyleButton, Symbol } from "../models/StyleButton"

interface RowButtons {
	type: StyleButton
	value: Symbol
	isLarge?: boolean
}

const firstRowButtons: RowButtons[][] = [
	[
		{
			type: StyleButton.ACTION,
			value: Symbol.AC,
		},
		{
			type: StyleButton.ACTION,
			value: Symbol.EXPRESSION,
		},
		{
			type: StyleButton.ACTION,
			value: Symbol.PERCENT,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.DIVISION,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.SEVEN,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.EIGHT,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.NINE,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.MULTIPLICATION,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.FOUR,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.FIVE,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.SIX,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.MINUS,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.ONE,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.TWO,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.THREE,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.PLUS,
		},
	],
	[
		{
			type: StyleButton.VALUE,
			value: Symbol.ZERO,
			isLarge: true,
		},
		{
			type: StyleButton.VALUE,
			value: Symbol.COMMA,
		},
		{
			type: StyleButton.OPERATION,
			value: Symbol.EQUALS,
		},
	],
]

export { firstRowButtons }
