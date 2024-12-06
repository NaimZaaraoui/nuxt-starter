<script setup lang="ts">
  useHead({
    title: "Nuxt App",
    meta: [
      {name: "description", content: "Nuxt app description"}
    ]
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: 300ms ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
