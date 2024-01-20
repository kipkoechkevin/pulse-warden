<template>
  <section class="grid gap-5 md:grid-cols-2">
    <div class="rounded-lg border bg-card p-6">
        <div class="flex items-center justify-between">
            <p class="text-sm font-medium">Current Status</p>
            <span class="shrink-0">
            <Icon name="heroicons:arrow-trending-up" class="w-4 h-4 text-green-500"/>
            </span>
        </div>

        <p class="mt-1.5 text-xl font-extrabold text-green-500">Uptime</p>
        <p class="text-sm text-muted-foreground">Currently up for 7h 19m 12s</p>
    </div>
    <div class="rounded-lg border bg-card p-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium">Last Check</p>
        <span class="shrink-0">
            <Icon name="heroicons:eye-solid" class="w-4 h-4 text-green-500"/>
        </span>
      </div>

      <p class="mt-1.5 text-xl font-extrabold text-muted-foreground">Coming Soon</p>
      <p class="text-sm text-muted-foreground">Checked every 1 minute</p>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>