<template>
  <div class="flex flex-col">
    <NuxtLink to="profile" class="inline-flex items-center gap-4 px-4 py-3 text-left text-[15px]">
      <Icon name="ph:broadcast" class="w-5 h-5 text-muted-foreground"/>
      <span class="truncate">Monitoring</span>
    </NuxtLink>
    <NuxtLink to="profile" class="inline-flex items-center gap-4 px-4 py-3 text-left text-[15px]">
      <Icon name="heroicons:shield-exclamation" class="w-5 h-5 text-muted-foreground"/>
      <span class="truncate">Incidents</span>
    </NuxtLink>
    <NuxtLink to="profile" class="inline-flex items-center gap-4 px-4 py-3 text-left text-[15px]">
      <Icon name="heroicons:presentation-chart-bar" class="w-5 h-5 text-muted-foreground"/>
      <span class="truncate">Status pages</span>
    </NuxtLink>
    <NuxtLink to="profile" class="inline-flex items-center gap-4 px-4 py-3 text-left text-[15px]">
      <Icon name="heroicons:wrench-screwdriver" class="w-5 h-5 text-muted-foreground"/>
      <span class="truncate">Maintenance</span>
    </NuxtLink>
    <NuxtLink to="profile" class="inline-flex items-center gap-4 px-4 py-3 text-left text-[15px]">
      <Icon name="heroicons:rectangle-group" class="w-5 h-5 text-muted-foreground"/>
      <span class="truncate">Integrations</span>
    </NuxtLink>
    <NuxtLink to="profile" class="inline-flex items-center gap-4 px-4 py-3 text-left text-[15px]">
      <Icon name="heroicons:user" class="w-5 h-5 text-muted-foreground"/>
      <span class="truncate">Team</span>
    </NuxtLink>
  </div>
</template>

<script setup>
</script>
