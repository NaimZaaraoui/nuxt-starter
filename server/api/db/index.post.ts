export default defineEventHandler(async (event) => {
  const { name, age } = await readBody(event);

  return { name: name, age: age + 5 };
});
