<template>
  <nav px6 py4 text-lg border="b base" flex="~ gap-2 items-center">
    <NuxtLink to="/">
      <div i-logos-nuxt-icon text-xl />
    </NuxtLink>
    <span text-xl>
      Playground
    </span>
    <div flex-auto />

    <ColorSchemeToggle />
    <NuxtLink
      p2 rounded
      hover="bg-active"
      href="https://github.com/nuxt/learn.nuxt.com" target="_blank"
    >
      <div i-carbon-logo-github text-2xl />
    </NuxtLink>
  </nav>
</template>
