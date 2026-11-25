<script setup lang="ts">
import ExploreButton from '../atoms/explore-button.vue'
import CoffeeImage from '../../assets/images/coffee.png'
import { useRouter } from 'vue-router'

const router = useRouter()

function openMenu() {
    router.push('/menu')
}
</script>

<template>
    <section class="intro-section">
        <div class="intro-section-content">
            <p class="intro-section-subtitle">  FRESHLY BREWED EVERY DAY. </p>

            <h1 class="intro-section-title">  Life begins after coffee. </h1>

            <p class="intro-section-description">
                Discover freshly brewed coffee, freshly baked
                pastries and your new favourite daily ritual.
            </p>

            <ExploreButton text="Explore our menu" @click="openMenu"
/>

        </div>
        <img
            class="intro-section-image" :src="CoffeeImage" alt="A freshly brewed cup of coffee"/>
    </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as v;
@use '../../styles/mixins' as m;

.intro-section {
    @include m.flex-between;
    padding: 64px;
    gap: v.$spacing-xl;
    min-height: 80vh;
}

.intro-section-content {
    flex: 1;
}

.intro-section-subtitle {
    color: v.$color-secondary;
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 2px;
    margin-bottom: v.$spacing-md;
}

.intro-section-title {
    font-size: 56px;
    margin-bottom: v.$spacing-lg;
}

.intro-section-description {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: v.$spacing-xl;
}

.intro-section-image {
    width: 45%;
    height: 500px;
    object-fit: cover;
    border-radius: v.$radius-lg;
}
</style>