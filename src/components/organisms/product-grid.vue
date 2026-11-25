<script setup lang="ts">
import ProductCard from '../molecules/product-card.vue'
import CoffeeImage from '../../assets/images/coffee.png'
import CroissantImage from '../../assets/images/croissant.png'
import LatteImage from '../../assets/images/latte.png'
import Muffin from '../../assets/images/muffin.png'
import Matcha from '../../assets/images/matcha.png'

const products = [
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Espresso with milk foam.',
        price: 12,
        image: CoffeeImage
    },
    {
        id: 2,
        name: 'Iced Latte',
        description: 'Espresso with chilled milk.',
        price: 14,
        image: LatteImage
    },
    {
        id: 3,
        name: 'Americano',
        description: 'Rich black coffee.',
        price: 10,
        image: CoffeeImage
    },
    {
        id: 4,
        name: 'Matcha Latte',
        description: 'Matcha with creamy milk.',
        price: 15,
        image: Matcha
    },
    {
        id: 5,
        name: 'Croissant',
        description: 'Freshly baked and buttery.',
        price: 8,
        image: CroissantImage
    },
    {
        id: 6,
        name: 'Chocolate Muffin',
        description: 'Soft and chocolatey.',
        price: 9,
        image: Muffin
    }
]
</script>


<template>
    <section class="menu-section">
        <h1 class="menu-title">Our Menu</h1>
        <div class="product-grid">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :name="product.name"
                :description="product.description"
                :price="product.price"
                :image="product.image"
            />

        </div>

    </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as v;

.menu-section {
    padding: 64px 32px;
}

.menu-title {
    text-align: center;
    font-size: 40px;
    margin-bottom: v.$spacing-xl;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: v.$spacing-xl;
    max-width: 1000px;
    margin: 0 auto;
    justify-items: center;
}

// If the viewport width is 768px or less, display the products in two equal columns.
@media (max-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

// If the viewport width is 480px or less, display the products in a single column.
@media (max-width: 480px) {
    .product-grid {
        grid-template-columns: 1fr;
    }
}
</style>