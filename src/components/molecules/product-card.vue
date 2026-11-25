<script setup lang="ts">
defineProps<{
    name: string
    description: string
    price: number
    image: string
}>()
</script>

<template>
    <div class="product-card">
        <img class="product-card-image" :src="image" :alt="name" />

        <div class="product-card-content">
            <h2 class="product-card-name">{{ name }} </h2>
            <p class="product-card-description"> {{ description }} </p>
            <p class="product-card-price"> RM {{ price.toFixed(2) }} </p>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
@use '../../styles/variables' as v;

.product-card {
    width: 100%;
    max-width: 300px;
    background-color: v.$color-white;
    border-radius: v.$radius-lg;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

.product-card-content {
    padding: v.$spacing-lg;
}

.product-card-name {
    font-size: 24px;
    margin-bottom: v.$spacing-sm;
}

.product-card-description {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: v.$spacing-md;
}

.product-card-price {
    color: v.$color-secondary;
    font-size: 18px;
    font-weight: bold;
}
</style>