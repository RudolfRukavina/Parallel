<template>
  <section class="bg-slate-100">
    <div class="py-16 px-4 mx-auto max-w-screen-xl text-center lg:pb-0 lg:px-12">
      <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        Instrukcije
      </h1>

      <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div>
          <RouterLink to="/osnovna"
            class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
            role="alert">
            <span class="text-md px-5 py-1 font-bold">Osnovna škola</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/srednja"
            class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
            role="alert">
            <span class="text-md px-5 py-1 font-bold">Srednja škola</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/fakultet"
            class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
            role="alert">
            <span class="text-md px-5 py-1 font-bold">Fakultet</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <footer class="bg-white">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="" class="flex items-center">
            <img src="../assets/parallelicon.png" class="h-8 me-3" alt="" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Poduke Parallel</span>
          </a>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Zapratite nas
          </h2>
          <ul class="text-gray-500 font-medium">
            <li class="mb-4">
              <a href="https://github.com/themesberg/flowbite" class="hover:underline">Facebook</a>
            </li>
            <li>
              <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Prava
          </h2>
          <ul class="text-gray-500 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Politika Privatnosti</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Uvjeti korištenja</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">© 2024
          <a href="https://flowbite.com/" class="hover:underline">Parallel d.o.o.</a>
          Sva prava zadržana.
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { RouterLink } from "vue-router";
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
