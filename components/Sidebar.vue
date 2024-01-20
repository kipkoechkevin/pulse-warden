<template>
  <aside class="sticky top-[65px] h-[calc(100vh-65px)] py-5">
    <div class="flex h-full w-full flex-col overflow-y-auto rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
        <SidebarItem/>
      <div class="mt-auto">
        <HDisclosure v-slot="{open}">
          <HDisclosureButton class="inline-flex items-center justify-between gap-4 px-4 py-3 text-left text-[15px]">
            <div class="flex items-center gap-4">
              <Icon name="heroicons:cog-8-tooth" class="w-5 h-5 text-muted-foreground"/>
              <span class="truncate">Settings</span>
            </div>
            <div>
              <Icon :class="[open && 'rotate-180']" name="heroicons:chevron-up" class="w-5 h-5 text-muted-foreground transition"/>
            </div>
          </HDisclosureButton>
          <TransitionExpand>
            <HDisclosurePanel class="mx-6 flex flex-col border-l px-3">
              <NuxtLink class="rounded-md px-3 py-1.5 text-sm hover:bg-muted" to="somewhere">
              Account details
              </NuxtLink>
              <NuxtLink class="rounded-md px-3 py-1.5 text-sm hover:bg-muted" to="somewhere">
              Billing & Subscription
              </NuxtLink>
              <NuxtLink class="rounded-md px-3 py-1.5 text-sm hover:bg-muted" to="somewhere">
               Invoices
              </NuxtLink>
              <NuxtLink class="rounded-md px-3 py-1.5 text-sm hover:bg-muted" to="somewhere">
              Notifications
              </NuxtLink>
              <NuxtLink class="rounded-md px-3 py-1.5 text-sm hover:bg-muted" to="somewhere">
              Affliate Program
              </NuxtLink>
            </HDisclosurePanel>
          </TransitionExpand>
        </HDisclosure>
      </div>
    </div>
  </aside>
</template>

<script setup>

</script>
