
<template>
  <nav class="  bg-white border ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/parallelicon.png" class="h-8" alt="Parallel" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap ">Poduke Parallel</span>
      </a>
      <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a target='_blank' href="https://maps.app.goo.gl/9Foq18Dgfi4VU9pG7"
          class="text-sm  text-gray-500  hover:underline">Riva 20,
          Rijeka</a>
      </div>
    </div>
  </nav>

  <nav class="bg-gray-50 sticky top-0 shadow-lg">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center justify-between">
        <ul class="flex flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
          <li>
            <RouterLink to='/' :class="$route.path === '/' ? 'font-bold' : ''" class="text-gray-900  hover:underline"
              aria-current="page">Naslovnica</RouterLink>
          </li>
          <li>
            <RouterLink to='/onama' :class="$route.path === '/onama' ? 'font-bold' : ''"
              class="text-gray-900 hover:underline">
              O nama</RouterLink>
          </li>

        </ul>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import FooterComponent from './FooterComponent.vue';

</script>