<script setup lang="ts">
</script>

<template>
  <header
    class="flex"
    data-justify="between">
    <NuxtLink :to="{ name: 'index' }" class="h3">Logo</NuxtLink>

    <nav>
      <ul class="nav-list | flex">
        <li>
          <NuxtLink
            :to="{ name: 'index' }"
            class="text-uppercase ls-sm fw-semibold h5"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="{ name: 'blog' }"
            class="text-uppercase ls-sm fw-semibold h5"
            >Blog</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="{ name: 'products' }"
            class="text-uppercase ls-sm fw-semibold h5"
            >Products</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="{ name: 'profile' }"
            class="text-uppercase ls-sm fw-semibold h5"
            >Profile</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  header {
    padding-block: 1em;
  }

  .nav-list .router-link-active.router-link-exact-active {
    color: var(--clr-secondary);
  }
</style>
