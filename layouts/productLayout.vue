<template>
  <div class="base-layout grail">
    <header
      class="flex"
      data-justify="between">
      <h1 class="h3 text-primary text-uppercase ls-sm">Product Details</h1>
      <nuxtLink
        :to="{ name: 'products' }"
        class="btn"
        data-type="primary"
        >Back To Products</nuxtLink
      >
    </header>
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
  header {
    padding-block: 1em;
  }
</style>
