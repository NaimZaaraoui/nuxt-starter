<script lang="ts" setup>
  //   const { data } = await useFetch("/api/db?name=Naim");
  //   const { message } = data.value as { message: string };

  //   const { data } = await useFetch("/api/db", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: { name: "Naim", age: 25 },
  //   });

  //   const { name, age } = data.value as { name: string; age: number };

  const { data } = await useFetch("/api/currency/TND");

  const config = useRuntimeConfig();
  const { publicKey } = config.public;
</script>

<template>
  <section class="section flow flow-lg">
    <h1>Blogs</h1>
    <!-- <p>{{ message }}</p> -->
    <!-- <p>My name is {{ name }} and I am {{ age }}</p> -->
    <p>{{ data }}</p>
    <p>{{ publicKey }}</p>
  </section>
</template>
