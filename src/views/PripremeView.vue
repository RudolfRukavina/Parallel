<template>
  <div class="w-full mx-auto max-w-screen-xl p-4 bg-white rounded-lg sm:p-8">
    <div class="flex items-center justify-between m-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 ">Programi priprema</h5>
      <a href="#" class="text-sm font-medium underline px-5">
        Cijena
      </a>
    </div>
    <div class="flow-root rounded-t-lg border bg-gray-50 shadow-xl">
      <ul role="list" class="">
        <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-4 px-5" v-for='item in programiPriprema'>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="../assets/parallelicon.png" alt="">
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ item.ime }}
              </p>
              <p class="text-sm text-gray-500 truncate ">
                {{ item.brojSati }}
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {{ item.cijena }}€
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-between  bg-sky-50 p-4 rounded-b-lg shadow">
      <h5 class="text-xl font-bold leading-none text-gray-900 ">Ukupan iznos:</h5>
      <a href="#" class="text-xl px-5 font-bold">
        1000€
      </a>
    </div>
  </div>

  <div class="w-full mx-auto max-w-screen-xl p-4 bg-white rounded-lg sm:p-8">
    <div class="flex items-center justify-between m-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 ">Ubrzani programi</h5>
      <a href="#" class="text-sm font-medium underline px-5">
        Cijena
      </a>
    </div>
    <div class="flow-root rounded-lg border">
      <ul role="list" class="">
        <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-4 px-5" v-for='item in ubrzaniProgramiPriprema'>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="../assets/parallelicon.png" alt="">
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ item.ime }}
              </p>
              <p class="text-sm text-gray-500 truncate ">
                {{ item.brojSati }}
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {{ item.cijena }}€
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const programiPriprema = ref([
    {
      ime: "Matematika A razina",
      brojSati: "70 školskih sati",
      cijena: 390,
      isActive: false,
    },
    {
      ime: "Matematika B razina",
      brojSati: "50 školskih sati",
      cijena: 280,
      isActive: false,
    },
    {
      ime: "Engleski jezik A razina",
      brojSati: "40 školskih sati",
      cijena: 240,
      isActive: false,
    },
    {
      ime: "Engleski jezik B razina",
      brojSati: "30 školskih sati",
      cijena: 180,
      isActive: false,
    },
    {
      ime: "Hrvatski",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
    {
      ime: "Fizika",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
    {
      ime: "Kemija",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
  ]);

  const ubrzaniProgramiPriprema = ref([
    {
      ime: "Matematika A razina",
      brojSati: "35 školskih sati",
      cijena: 200,
      isActive: false,
    },
    {
      ime: "Fizika",
      brojSati: "30 školskih sati",
      cijena: 180,
      isActive: false,
    },
    {
      ime: "Kemija",
      brojSati: "30 školskih sati",
      cijena: 180,
      isActive: false,
    },
  ]);
</script>
