declare module "nuxt/schema" {
  interface RuntimeConfig {
    currencyKey: string;
  }

  interface PublicRuntimeConfig {
    publicKey: string;
  }
}

export {};
