<script setup>

import LeftSidebar from "../Navigation/LeftSidebar.vue";
import TopNavbar from "../Navigation/TopNavbar.vue";
</script>

<template>
  <section class="flex space-x-4 ">
    <div class="w-[240px] h-screen py-16 flex justify-center">

      <LeftSidebar></LeftSidebar>
    </div>
    <main class="bg-[#EFF3F8] flex flex-col space-y-10 w-full px-10 py-16">
      <div>
        <TopNavbar> </TopNavbar>
      </div>
      <div>
        <slot></slot>
      </div>
    </main>
  </section>

</template>

<style scoped>
</style>
