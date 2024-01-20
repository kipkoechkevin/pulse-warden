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

        <HMenu as="div" class="relative">
          <HMenuButton class="flex h-9 w-9 shrink-0 items-center overflow-hidden justify-center rounded-full border bg-background">
              <img src="https://randomuser.me/api/portraits/med/men/34.jpg" class="w-full h-full" alt="Random User Image" />
          </HMenuButton>
          <TransitionScale :scale="0.8" origin="top right">
            <HMenuItems class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <div class="border-b px-3 py-1.5 text-sm">
                <p class="font-semibold">Hello John Doe</p>
                <a href="mailto:john@example.com" class="text-muted-foreground leading-none">
                  johndoe@example.com
                </a>
              </div>
              <div class="p-1">
                <template v-for="(profile, i) in profileMenuOptions" :key="i">
                  <HMenuItem v-if="!profile.divider" v-slot="{ active }">
                    <NuxtLink :to="profile.url"
                              :class="[active && 'bg-muted']"
                              class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium">
                      {{ profile.title }}
                    </NuxtLink>
                  </HMenuItem>
                  <hr v-if="profile.divider" class="my-1">
                </template>
              </div>
            </HMenuItems>

          </TransitionScale>

        </HMenu>

      </div>

    </div>

  </header>
</template>

<script setup>

const mode = useColorMode();

const toggleMode = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light';
}

const profileMenuOptions = [
  {title: "Profile", url: "/profile"},
  {title: "Billing", url: "/billing"},
  {title: "Settings", url: "/settings"},
  {title: "Team Members", url: "/team-members"},
  {divider: true},
  {title: "Sign Out", url: "/sign-out"},

]

</script> 