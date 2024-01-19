<template>
  <header class="sticky top-0 border-b bg-background/80 backdrop-blur">

    <div class="container flex h-16 items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">

        <img src="/logo.svg" alt="logo" class="w-8 h-8 mr-2">
        <NuxtLink to="/" class="text-xl font-bold">PulseMonitor</NuxtLink>

      </div>

      <!-- Profile and Dark Mode -->
      <div class="flex items-center gap-5">

        <button @click="toggleMode" aria-label="Toggle Mode"
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background">
          <Icon name="heroicons:sun" class="w-5 h-5"/>
        </button>

        <button class="flex items-center gap-2">
          <Icon name="heroicons:user" class="w-5 h-5" />
          <span class="text-sm font-semibold">John Dough</span>
        </button>

      </div>

    </div>

  </header>
</template>

<script setup>

const mode = useColorMode();

const toggleMode = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light';
}

</script> 