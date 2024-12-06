<script lang="ts" setup>
  const route = useRoute();
</script>

<template>
  <article>
    {{ route.params }}
  </article>
</template>
