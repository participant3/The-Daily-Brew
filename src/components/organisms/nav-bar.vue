<template>
    <nav class="nav-bar">
        <h2 class="nav-bar__logo">The Daily Brew.</h2>

        <div class="nav-bar__links">
           <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/menu">Menu</RouterLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as v;
@use '../../styles/mixins' as m;

.nav-bar {
    @include m.flex-between;
    padding: v.$spacing-lg v.$spacing-xl;
    background-color: v.$color-cream;
}

.nav-bar-logo {
    font-size: 24px;
}

.nav-bar__links {
    display: flex;
    gap: v.$spacing-lg;
}


.nav-bar__links a:hover {
    color: v.$color-secondary;
}
</style>