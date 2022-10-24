<script lang="ts" setup>
const props = defineProps<{
    symbol: string
}>()
</script>

<template>
    <div class="app-large-button">
        {{ props.symbol }}
    </div>
</template>

<style lang="scss" scoped>

.app-large-button {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    height: 4rem;
    width: calc(8.75rem - 1.5rem);
    border-radius: 100px;
    background-color: lighten($color: black, $amount: 30);
    color: white;
    font-size: 2rem;
}

.app-large-button:hover {
    background-color: darken($color: #ffffff, $amount: 50);

}
</style>