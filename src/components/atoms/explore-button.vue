<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<template>
    <button class="explore-button"> {{ text }} </button>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as v; // gets the variables from _variables.scss file.

.explore-button {
    background-color: v.$color-primary;
    color: v.$color-white;
    padding: v.$spacing-md v.$spacing-lg;
    border: none;
    border-radius: v.$radius-md;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: v.$color-secondary;
    }
}
</style>