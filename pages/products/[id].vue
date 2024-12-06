<script setup lang="ts">
  import { routes } from "vue-router/auto-routes";
  import type { ProductModel } from "~/models/ProductModel";

  const route = useRoute();
  const { id } = route.params;

  const { data, error } = await useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const product: ProductModel = data.value as ProductModel;

  if (error.value || !product || +id > 5) {
    throw createError({ statusCode: 404, statusMessage: "Product not found" });
  }

  definePageMeta({
    layout: "product-layout",
  });

  useSeoMeta({
    title: `Nuxt App | ${product.title}`,
    description: product.description
  });
</script>

<template>
  <section class="product-wrapper | section even-columns gap-lg">
    <VImg
      :src="product.image"
      :alt="product.title" />
    <div class="product-details | grid gap-md">
      <h1 class="h2">{{ product.title }}</h1>
      <strong>${{ product.price }}</strong>
      <p>{{ product.description }}</p>
      <button class="btn" data-type="primary">
        Add To Cart
        <Icon name="mdi:cart"/>
      </button>
    </div>
  </section>
</template>

<style scoped>
  .product-details {
    align-content: start;
  }
</style>
