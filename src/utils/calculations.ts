import { Ref } from "vue"

const handleExpression = (num: number): number => {
	return num * -1
}

const handleEquals = (n1: Ref<number>, n2: number) => {
	if (n1.value && n2) {
		n1.value += n2
	}
}

export { handleExpression, handleEquals }
