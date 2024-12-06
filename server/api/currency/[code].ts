export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const currencyKey = config.currencyKey;

  const code = getRouterParam(event, "code");

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  const data = await $fetch(uri);

  return data
});
