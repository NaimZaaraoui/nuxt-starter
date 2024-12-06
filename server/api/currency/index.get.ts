export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const currencyKey = config.currencyKey;

  const data = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  );

  return data;
});
