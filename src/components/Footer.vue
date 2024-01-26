

<template>
  <footer class="bg">
    <div class="mx-auto w-full max-w-screen-xl px-4 pb-6 lg:pb-8">

      <!-- <div class="md:flex md:justify-between">

        <div class="mb-6 md:mb-0">
          <a href="" class="flex items-center">
            <img src="../assets/parallelicon.png" class="h-8 me-3" alt="" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">Poduke Parallel</span>
          </a>
        </div>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span class="font-bold text-xl  uppercase">Svi Programi</span>
          <div class='grid grid-cols-2 text-xs  p-5 rounded-xl'>
            <div class='flex justify-start border rounded-lg p-2 m-1 overflow-hidden items-start'
              v-for='item in programi'>

              <p class=''>{{ item }}</p>
            </div>
          </div>
        </div>

      </div> -->
      <hr class=" py-2 border-gray-200 w-full " />
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Zapratite nas</h2>
          <ul class="text-gray-500 font-medium">
            <li class="mb-4">
              <a href="https://www.facebook.com/poduke.parallel" class="hover:underline ">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/poduke.parallel/" class="hover:underline">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Prava</h2>
          <ul class="text-gray-500  font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Politika Privatnosti</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Uvjeti korištenja</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center ">© 2024 <a href="/" class="hover:underline">Parallel d.o.o.</a>
          Sva prava zadržana.

        </span>
      </div>

    </div>
  </footer>
</template>

<script setup>
  import { ref } from "vue"

  const programi = [
    "Matematika",
    "Fizika",
    "Kemija",
    "Biologija",
    "Hrvatski jezik",
    "Engleski jezik",
    "Informatika",
    "Povijest",
    "Geografija",
    "Tehnička kultura",
    "Statistika",
    "Programiranje",
    "Osnove elektrotehnike",
    "Računalstvo",
    "Mjerenja u elektrotehnici",
    "Uvod u elektroniku",
    "Elektronika",
    "Elektrotehnika",
    "Opća i anorganska kemija",
    "Organska kemija",
    "Analitička kemija",
    "Biokemija",
    "Fizikalna kemija",
    "Mikrobiologija",
    "Stabilnost broda",
    "Poznavanje broda",
    "Rukovanje teretom",
    "Astronomska navigacija",
    "Terestrička navigacija",
    "Elektronička navigacija",
    "Brodski strojevi i uređaji",
    "Tehnička mehanika",
    "Termodinamika",
    "Robotika",
    "Industrijska automatizacija",
    "Regulacija i upravljanje",
  ]
</script>

<style scoped>
.bg {
  background: rgb(1, 236, 154);
  background: linear-gradient(30deg, rgba(90, 211, 255, 0.31) 18%, rgba(193, 255, 127, 0.24) 80%);
}
</style>