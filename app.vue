<template>
  <div>
    <!-- Header -->
    <Header />
    <!--Sidebar-->
    <div class="container lg:grid lg:grid-cols-12 lg:gap-10">

    <Sidebar class="hidden lg:col-span-3 lg:block" />
    <!--Main-->

    <main class="py-5 lg:col-span-8">

      <AddMonitor/>
      <!--Status cards -->
      <StatusCard/>
      <!--Period list-->
      <PeriodCard/>
      <!--Sales charts -->


      <!--Recent orders -->

    </main>

    <div>
      <!-- Profile info -->
      <!-- Reminders and notifications -->
    </div>

    </div>
  </div>
</template>
