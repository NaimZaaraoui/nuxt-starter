<script lang="ts" setup>
  import type { ApiResponseModel } from "~/models/ApiModel";
  import type { ProductModel } from "~/models/ProductModel";

      const { data } = await useFetch("https://fakestoreapi.com/products?limit=5");

  const products = data.value as ProductModel[];
</script>

<template>
  <Head>
    <Title>Nuxt App | Products</Title>
  </Head>
  <section class="section flow flow-lg">
    <h1>Our Products</h1>
    <div class="products-wrapper | grid-auto">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card | grid">
        <img
          :src="product.image"
          :alt="product.title"
          height="200" />
        <h3 class="h4">
          <NuxtLink :to="{name: 'products-id', params: {id: product.id}}">{{ product.title }}</NuxtLink>
        </h3>
        <p>{{ product.description.slice(0, 100) }}...</p>
        <strong class="h3">${{ product.price }}</strong>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .products-wrapper {
    grid-template-rows: repeat(4, auto);

    > * {
      grid-row: span 4;
      grid-template-rows: subgrid;
    }
  }

  .product-card {
    padding: 1em;
    background-color: var(--clr-base);
  }

  img {
    height: 15rem;
    width: 100%;
  }
</style>
