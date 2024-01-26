<template>
  <section class="bg m-1 rounded-xl min-h-[99vh]">
    <div class="max-w-screen-xl px-4 py-2 mx-auto">
      <div class="flex items-center justify-evenly">
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

        <FooterComponent></FooterComponent>

      </div>
      <div class='text-center text-[10px]'>Riva 20, Rijeka</div>
    </div>
    <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h2
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-100 drop-shadow-xl [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)] md:text-4xl lg:text-5xl ">
        Pripreme za državnu maturu</h2>
      <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 ">
        Uspješno savladajte gradivo neophodno za polaganje državne mature!
      </p>
      <div class=" mb-6 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-0 bs rounded-xl">
        <div class="w-full mx-auto max-w-screen-xl p-1 bg-light rounded-xl shadow-2xl sm:p-2">

          <div class="flow-root rounded-t-lg bg-light shadow-xl">

            <div class=''>
              <ul role="list" class="shadow  border m-1 rounded-xl mb-6 bg-green-400">
                <div
                  class="flex items-center justify-center  bg-green-50 p-4 rounded-xl m-1 border-green-200 border-4 bs">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Matematika</h5>
                </div>
                <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-1 px-5  bg-white bs " v-for='item in matematika'>
                  <div class="flex items-center justify-between">
                    <div class="flex-shrink-0">
                      <img class="w-6 h-6 rounded-full" src="../assets/parallelicon.png" alt="">
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-lg text-start text-gray-800 font-semibold ">
                        {{ item.fast }}
                      </p>
                      <p class="text-xl text-start font-medium text-gray-900 truncate">
                        {{ item.ime }}
                      </p>

                      <p class="text-lg text-start  text-gray-500 truncate ">
                        {{ item.brojSati }}
                      </p>

                    </div>
                    <div class="  text-lg text-end font-semibold text-gray-900 dark:text-white">
                      {{ item.cijena }}€
                    </div>
                  </div>
                </li>
              </ul>
              <ul role="list" class="shadow  border m-1 rounded-xl mb-6 bg-green-400">
                <div
                  class="flex items-center justify-center  bg-green-50 p-4 rounded-xl m-1 border-green-200 border-4 bs">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Engleski</h5>
                </div>
                <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-1 px-5  bg-white bs " v-for='item in engleski'>
                  <div class="flex items-center justify-between">
                    <div class="flex-shrink-0">
                      <img class="w-6 h-6 rounded-full" src="../assets/parallelicon.png" alt="">
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-lg text-start text-gray-800 font-semibold ">
                        {{ item.fast }}
                      </p>
                      <p class="text-xl text-start font-medium text-gray-900 truncate">
                        {{ item.ime }}
                      </p>

                      <p class="text-lg text-start  text-gray-500 truncate ">
                        {{ item.brojSati }}
                      </p>

                    </div>
                    <div class="  text-lg text-end font-semibold text-gray-900 dark:text-white">
                      {{ item.cijena }}€
                    </div>
                  </div>
                </li>
              </ul>
              <ul role="list" class="shadow  border m-1 rounded-xl mb-6 bg-green-400">
                <div
                  class="flex items-center justify-center  bg-green-50 p-4 rounded-xl m-1 border-green-200 border-4 bs">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Hrvatski</h5>
                </div>
                <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-1 px-5  bg-white bs " v-for='item in hrvatski'>
                  <div class="flex items-center justify-between">
                    <div class="flex-shrink-0">
                      <img class="w-6 h-6 rounded-full" src="../assets/parallelicon.png" alt="">
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-lg text-start text-gray-800 font-semibold ">
                        {{ item.fast }}
                      </p>
                      <p class="text-xl text-start font-medium text-gray-900 truncate">
                        {{ item.ime }}
                      </p>

                      <p class="text-lg text-start  text-gray-500 truncate ">
                        {{ item.brojSati }}
                      </p>

                    </div>
                    <div class="  text-lg text-end font-semibold text-gray-900 dark:text-white">
                      {{ item.cijena }}€
                    </div>
                  </div>
                </li>
              </ul>
              <ul role="list" class="shadow  border m-1 rounded-xl mb-6 bg-green-400">
                <div
                  class="flex items-center justify-center  bg-green-50 p-4 rounded-xl m-1 border-green-200 border-4 bs">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Fizika</h5>
                </div>
                <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-1 px-5  bg-white bs " v-for='item in fizika'>
                  <div class="flex items-center justify-between">
                    <div class="flex-shrink-0">
                      <img class="w-6 h-6 rounded-full" src="../assets/parallelicon.png" alt="">
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-md text-start text-gray-800 font-semibold ">
                        {{ item.fast }}
                      </p>
                      <p class="text-xl text-start font-medium text-gray-900 truncate">
                        {{ item.ime }}
                      </p>

                      <p class="text-lg text-start  text-gray-500 truncate ">
                        {{ item.brojSati }}
                      </p>

                    </div>
                    <div class="  text-lg text-end font-semibold text-gray-900 dark:text-white">
                      {{ item.cijena }}€
                    </div>
                  </div>
                </li>
              </ul>
              <ul role="list" class="shadow  border m-1 rounded-xl mb-6 bg-green-400">
                <div
                  class="flex items-center justify-center  bg-green-50 p-4 rounded-xl m-1 border-green-200 border-4 bs">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Kemija</h5>
                </div>
                <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-1 px-5  bg-white bs " v-for='item in kemija'>
                  <div class="flex items-center justify-between">
                    <div class="flex-shrink-0">
                      <img class="w-6 h-6 rounded-full" src="../assets/parallelicon.png" alt="">
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-md text-start text-gray-800 font-semibold ">
                        {{ item.fast }}
                      </p>
                      <p class="text-xl text-start font-medium text-gray-900 truncate">
                        {{ item.ime }}
                      </p>

                      <p class="text-lg text-start  text-gray-500 truncate ">
                        {{ item.brojSati }}
                      </p>

                    </div>
                    <div class="  text-lg text-end font-semibold text-gray-900 dark:text-white">
                      {{ item.cijena }}€
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <ul role="list" class=" grid grid-cols-2">

              <li class="py-3 sm:py-4 hover:bg-gray-200 rounded-lg m-1 px-5 " :class='item.style'
                v-for='item in  programiPriprema '>
                <div class="flex items-center">

                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm  font-medium text-gray-900 truncate">
                      {{ item.ime }}
                    </p>
                    <p class="text-sm  text-gray-500 truncate ">
                      {{ item.fast }}
                    </p>
                    <p class="text-sm  text-gray-500 truncate ">
                      {{ item.brojSati }}
                    </p>
                    <div class="  text-lg font-semibold text-gray-900 dark:text-white">
                      {{ item.cijena }}€
                    </div>
                  </div>

                </div>
              </li>
            </ul> -->
          </div>
          <div class="flex items-center justify-between  bg-sky-50 p-4 rounded-b-lg shadow">
            <h5 class="text-xl font-bold leading-none text-gray-900 ">Ukupan iznos:</h5>
            <a href="#" class="text-xl px-5 font-bold">
              1000€
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
  <Footer></Footer>
  <!-- <div class="w-full mx-auto max-w-screen-xl p-4 bg-white rounded-lg sm:p-8">
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
  </div> -->
</template>

<script setup>
  import Footer from "@/components/Footer.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  import { ref } from "vue";

  const matematika = ref([
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
      ime: "Matematika A razina",
      brojSati: "35 školskih sati",
      fast: "Ubrzani program",
      cijena: 200,
      isActive: false,
    },
  ])

  const engleski = ref([
    {
      ime: "Engleski A razina",
      brojSati: "40 školskih sati",
      cijena: 240,
      isActive: false,
    },
    {
      ime: "Engleski B razina",
      brojSati: "30 školskih sati",
      cijena: 180,
      isActive: false,
    },
  ])

  const hrvatski = ref([
    {
      ime: "Hrvatski",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
  ])

  const fizika = ref([
    {
      ime: "Fizika",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
    {
      ime: "Fizika",
      brojSati: "30 školskih sati",
      fast: "Ubrzani program",
      cijena: 180,
      isActive: false,
    },
  ])

  const kemija = ref([
    {
      ime: "Kemija",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
    {
      ime: "Kemija",
      brojSati: "30 školskih sati",
      fast: "Ubrzani program",
      cijena: 180,
      isActive: false,
    },
  ])

  const programiPripremas = ref([
    {
      ime: "A razina",
      brojSati: "70 školskih sati",
      cijena: 390,
      isActive: false,
    },
    {
      ime: "B razina",
      brojSati: "50 školskih sati",
      cijena: 280,
      isActive: false,
    },
    {
      ime: " A razina - Ubrzani program",
      brojSati: "35 školskih sati",
      fast: "Ubrzani program",
      cijena: 200,
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
    {
      ime: "Kemija",
      brojSati: "30 školskih sati",
      fast: "Ubrzani program",
      cijena: 180,
      isActive: false,
    },
    {
      ime: "Fizika",
      brojSati: "30 školskih sati",
      fast: "Ubrzani program",
      cijena: 180,
      isActive: false,
    },

  ]);

  const ubrzaniProgramiPripremas = ref([
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

<style scoped>
.bg {
  background: rgb(1, 236, 154);
  background: linear-gradient(180deg, rgb(90, 211, 255) 18%, rgba(193, 255, 127, 0.574) 80%);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}

.bs {
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}

.bg-light {
  background: rgb(1, 236, 154);
  background: linear-gradient(3600deg, rgb(90, 211, 255) 18%, rgba(193, 255, 127, 0.574) 80%);
}
</style>