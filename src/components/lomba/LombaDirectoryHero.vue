<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Portal Lomba Robotika'
  },
  subtitle: {
    type: String,
    default: 'Temukan berbagai kompetisi robotika, STEM, dan inovasi teknologi dari seluruh belahan dunia yang sejalan dengan visi pembelajaran Leanbot AiCI.'
  }
});

function scrollToCompetitions() {
  const element = document.getElementById('competitions-list');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <section class="relative isolate overflow-hidden bg-gradient-to-br from-leanbot-navy via-[#1e274a] to-[#2c1b3f] pt-24 pb-32 sm:py-40 border-b border-gray-800">
    <!-- Abstract background elements -->
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-leanbot-red/20 via-transparent to-transparent opacity-80 mix-blend-screen"></div>
    <div class="absolute -top-24 -left-20 -z-10 h-72 w-72 rounded-full bg-leanbot-red opacity-10 blur-[80px]"></div>
    <div class="absolute bottom-1/2 right-0 -z-10 h-[20rem] w-[20rem] rounded-full bg-aici-blue opacity-10 blur-[80px]"></div>
    
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 -z-10 bg-[url('/img/grid-pattern.svg')] bg-center opacity-[0.05]"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
      <!-- Badge -->
      <div class="mx-auto mb-8 max-w-2xl flex justify-center">
        <div class="inline-flex rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300">
          <span class="text-xs font-bold tracking-widest uppercase text-white drop-shadow-sm flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-leanbot-red opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-leanbot-red"></span>
            </span>
            Informasi Perlombaan Eksternal
          </span>
        </div>
      </div>
      
      <!-- Typography -->
      <h1 class="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg leading-tight">
        {{ props.title }}
      </h1>
      
      <p class="mx-auto mt-6 max-w-2xl text-lg font-medium tracking-wide text-gray-300 sm:text-xl drop-shadow">
        {{ props.subtitle }}
      </p>

      <!-- CTA -->
      <div class="mt-14 flex items-center justify-center gap-x-6">
        <button 
          @click="scrollToCompetitions"
          class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-leanbot-red px-8 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-leanbot-red hover:shadow-[0_0_30px_rgba(226,35,76,0.5)] focus:outline-none focus:ring-2 focus:ring-leanbot-red focus:ring-offset-2 focus:ring-offset-leanbot-navy"
        >
          <span class="mr-2 text-sm z-10">Lihat Daftar Lomba</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
