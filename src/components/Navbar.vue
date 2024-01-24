
<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/parallelicon.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Poduke Parallel</span>
      </a>
      <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="tel:+385992053344" class="text-sm  text-gray-500 dark:text-white hover:underline">+385 99 205 3344</a>

      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center justify-between">
        <ul class="flex flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Naslovnica</a>
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline">O nama</a>
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline">Kontakt</a>
          </li>

        </ul>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  </nav>
</template>

<script setup>

  import FooterComponent from './FooterComponent.vue';

</script>