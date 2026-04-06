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
  <div class="relative overflow-hidden bg-leanbot-navy pb-16 pt-24 lg:pb-24 lg:pt-32">
    <!-- Dekorasi background -> Pattern ombak melengkung yang sama dengan tema -->
    <div class="absolute inset-0 z-0 opacity-10">
      <svg
        class="absolute left-1/2 top-0 h-[48rem] max-w-none -translate-x-1/2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 1000 1000"
        aria-hidden="true"
      >
        <path
          stroke-width="2"
          d="M0 200 C300 0, 700 400, 1000 200 L1000 1000 L0 1000 Z"
          fill="currentColor"
          stroke="none"
        />
        <circle cx="200" cy="150" r="40" stroke-width="2" />
        <circle cx="800" cy="350" r="100" stroke-width="2" />
        <path stroke-width="2" d="M100 500 L900 500" stroke-dasharray="10 10" />
      </svg>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-8">
      <div class="mx-auto max-w-2xl">
        <p class="text-base font-semibold leading-7 text-leanbot-red uppercase tracking-widest mb-4">
          Informasi Perlombaan Eksternal
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
          {{ props.title }}
        </h1>
        <p class="text-lg leading-8 text-gray-300 mb-10">
          {{ props.subtitle }}
        </p>

        <!-- CTA -->
        <button 
          @click="scrollToCompetitions"
          class="inline-flex w-max items-center justify-center gap-x-2 rounded-full bg-leanbot-red px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-leanbot-red/30 transition-all hover:bg-white hover:text-leanbot-red hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leanbot-red"
        >
          Lihat Daftar Lomba
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
