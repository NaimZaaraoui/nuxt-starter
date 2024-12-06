<script setup lang="ts">
  import type { NuxtError } from "#app";

  interface Props {
    error: NuxtError;
  }

  const { error } = defineProps<Props>();
</script>

<template>
  <Head>
    <Title>Nuxt App | 404</Title>
  </Head>
  <section class="section grid" data-place-center>
    <div class="grid text-center" data-place-center>
      <span class="h1 fw-bold lh-heading">{{error.statusCode}}</span>
      <h1 class="h3 text-uppercase ls-sm">{{ error.statusMessage }}</h1>
      <NuxtLink
        :to="{ name: 'index' }" class="btn" data-type="primary">Back Home</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 80dvh;
}
</style>
