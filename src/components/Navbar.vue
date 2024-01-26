
<template>
  <!-- <nav class="bg-gray-50   bg z-20">
    <div class="max-w-screen-xl px-4 py-2 mx-auto">
      <div class="flex items-center justify-between">
        <img src="../assets/parallelicon.png" class="h-8" alt="Parallel" /> -->
  <!-- <ul class="flex flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
          <li>
            <RouterLink to='/' :class="$route.path === '/' ? 'font-bold' : ''" class="text-gray-900  hover:underline"
              aria-current="page">Naslovnica</RouterLink>
          </li>
          <li>
            <RouterLink to='/onama' :class="$route.path === '/onama' ? 'font-bold' : ''"
              class="text-gray-900 hover:underline">
              O nama</RouterLink>
          </li>

        </ul> -->

  <!-- <FooterComponent></FooterComponent>
      </div>
    </div>
  </nav> -->


  <!-- Breadcrumb -->
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import FooterComponent from './FooterComponent.vue';

</script>

<style scoped>
.bg {
  background: rgb(1, 236, 154);
  background: linear-gradient(30deg, rgb(138, 226, 255) 18%, rgb(201, 255, 237) 80%);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}
</style>