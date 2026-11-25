# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


## The Daily Brew
A simple coffee shop website built using Vue 3, TypeScript and SCSS. 

## SCSS styling 
SCSS is used to maintain consistent and reusable styling throughout the application.
_variables.scss — Shared colours, typography, spacing and border radii.
_mixins.scss — Reusable Flexbox layouts.
main.scss — Global application styling.


## Getting started
Install the project dependencies: npm install 
Start the development: npm run dev


## Project Architecture
coffee-shop/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── atoms/
|   |   |   |──explore-button.vue
│   │   ├── molecules/
|   |   |   |──product-card.vue
│   │   └── organisms/
|   |       |──intro-section.vue
|   |       |──nav-bar.vue
|   |       |──product-grid.vue
|   | 
│   ├── pages/
|   |   |──home-page.vue
|   |   |──page.vue
|   | 
│   ├── router/
|   |   |──index.ts
|   | 
│   ├── styles/
|   |   |──_mixins.scss
|   |   |──_variables.scss
|   |   |──_main.scss
|   | 
│   ├── App.vue
│   └── main.ts
|   
├── package.json
├── package-lock.json
├── vite.config.ts
└── README.md