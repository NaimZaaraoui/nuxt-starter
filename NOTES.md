# NUXT JS

--> Framework based on Vue.js that allows you to build fully fledged server-rendered applications
Comes wth added features

- File-based routing: pages/ directory
- SSR: The initial request is handled by the server using vue, the page is rendered by the server then sent static to the client with a js bundle that initializes a process called Hydration to implement interactivity the the page content, then it behaves like a typical SPA
  --> SSR for initial request, then CSR when navigating between routes => Universal Rendering: Better for SEO, Faster browser loading time, still get all benefits of SPA
- Auto-imports
- Data fetching utilities
- Zero-config Typescript support
- Configured build tools: vite, HMR

## Configuration

nuxt.config.ts
app.vue -> Root Component

## Pages & Routes

pages/ -> A route is created for each page
index.vue --> /
about.vue --> /about
To display the current page: <NuxtPage />

Route name will be the name of the page file you create

## Public

Use the public/ directory for static files that don't need to be optimized
robots.txt, favicon.ico, ...

## Plugins

Use the plugins/ directory for vue plugins, nuxt read automatically these files and loads them at the creation of the vue app

## Composables

Use the composables/ directory to auto import your composables
composables/useCounter.ts => Available as useCounter()

## Assets

Use assets/ folder for all assets that need to be processed by the build tool: stylesheets, images, fonts, etc

## Content

Use content/ folder to create a file-based CMS for your app

## Layouts

For app layouts
Enabled by using a <NuxtLayout> in app.vue

- To use a layout:

1. layout prop in definePageMeta
2. name prop of <NuxtLayout>

If no layout is specified, layouts/default.vue will be used

## Utils

Create a utils/ folder to auto-import your utility functions
utils/format-date.ts or formatDate.ts
=> Will be available as formatDate()

## Dynamic Routes

blogs/
[slug].vue /blogs/:slug
const {slug} = useRoute().params

<!-- $route.params -->

## Nested Routes

Use <NuxtPage> in a parent component to display a child component
pages/
parent/child.vue
parent.vue

## Page metadata

use definePageMetadata({...})
To access it: useRoute().meta.title

## Client-only pages

page.client.vue => Will not be rendered on the server

## Server-only pages

page.server.vue

## Layouts & Components

layouts/
default.vue
<NuxtLayout></NuxtLayout>

components/
Can use components without importing them, auto-imported by Nuxt

## NuxtLink

<NuxtLink :to="{name: 'index'}"></NuxtLink>
router-link-active router-link-exact-active

## Assets

CSS files in assets/

nuxt.config.ts
css: ["@/assets/style.css"]

public/fonts/
/fonts/....ttf

## SEO

<head> metadata
1. <Head>
    <Title>
    <Meta name="" content="" />
2. nuxt.config.ts
app: {
    head: {
        meta: [
            {
                name: "description",
                content: ""
            }
        ]
    }
}

3. With composition
   useHead({
   title: "...",
   meta: [
   {
   name: "description",
   content: "..."
   }
   ]
   })

useSeoMeta({
title: "...",
description: "...",
keywords: "..."
})

## Page Transitions

nuxt.config.ts
app: {
pageTransition: {
name: "page", mode: "in-out"
}
}

.page-enter-active,
.page-leave-active {
transition: ...
}

.page-enter-from,
.page-leave-to {
transform: ...
}

## Plugins & Custom Layout

plugins/vuetify.ts
Any plugin that is placed in this folder will be automatically loaded by Nuxt at startup.
Can make a cutsom layout:
definePageMeta({
layout: ""
})

## 404 page

error.vue
error prop

## Fetching Data

await useFetch()

## Middlewares

Run code before navigating to a particular route.
definePageMeta({middleware: [(to, from) => {}]})
middleware/auth.ts auth.global.ts

## Cookies

useCookie(name, options {expires: date in ms new Date(), maxAge: time in seconds}).value

## Server Routes

Nuxt uses Nitro as Backend server
Use server routes for any code you don't want to expose to the frontend, when using third party api that uses a private key

The server/ directory is used for APIs and server handlers.
api/ routes/ middleware/

server/api/auth.ts -> "/api/auth"
server/routes/auth.ts -> "/auth"(without prefix)

Each file: export defineEventHandler()
Server middleware will run on every request before any other server route

defineEventHandler((event) => {
getQuery(event) -> Query params
await readBody(event) -> Body handling
})

/api/db/index.[method].ts

When fetching on the server side use $fetch() instead of useFetch()

## Environment Variables

.env/
To expose config and environment variables to the rest of the application:
nuxt.config.ts:
runtimeConfig: {
<!-- Private keys that are only available on the server -->
privateKey: process.env.PRIVATE_KEY

    <!-- Public keys that are exposed to the client -->
    public: {
        publicKey: process.env.PUBLIC_KEY
    }

}

To use env variables:
const config = useRuntimeConfig()
config.privateKey
config.public.publicKey

To type env variables:
index.d.ts
declare module "nuxt/schema" {
interface RuntimeConfig {
...
}
}

## Dynamic Server Routes

api/currency/[code].ts
To get a matched route param by name:
const code = getRouterParam(event, "code")
