<script setup>
const contactMethods = [
  {
    name: 'Email Kami',
    description: 'Kami akan membalas secepat mungkin (1x24 Jam).',
    value: 'dataaici@gmail.com',
    link: 'mailto:dataaici@gmail.com',
    icon: `<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    bgColor: 'bg-aici-blue'
  },
  {
    name: 'Lokasi Kantor',
    description: 'Mari berdiskusi langsung dengan tim edukasi kami.',
    value: 'Gedung Lab Riset Multidisiplin Pertamina FMIPA UI',
    link: 'https://maps.google.com/?q=Gedung+Laboratorium+Riset+Multidisiplin+Pertamina+FMIPA+UI',
    icon: `<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    bgColor: 'bg-leanbot-red'
  },
  {
    name: 'Sosial Media',
    description: 'Ikuti pembaruan seputar event dan program kami.',
    value: '@aici.official',
    link: 'https://www.instagram.com/aici.official',
    icon: `<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>`,
    bgColor: 'bg-leanbot-navy'
  }
];
</script>

<template>
  <!-- Wrapper with negative margin to pull the cards up over the hero backdrop -->
  <div class="relative z-20 mx-auto -mt-24 max-w-7xl px-6 lg:px-8 mb-24">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div 
          v-for="method in contactMethods" 
          :key="method.name"
          class="flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <!-- Icon Circle -->
          <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm" :class="method.bgColor" v-html="method.icon"></div>
          
          <h3 class="text-xl font-bold text-gray-900">{{ method.name }}</h3>
          <p class="mt-4 text-base leading-relaxed text-gray-600 flex-grow">{{ method.description }}</p>
          
          <div class="mt-6 pt-6 border-t border-gray-100">
             <a :href="method.link" target="_blank" rel="noopener noreferrer" class="font-semibold text-leanbot-red hover:text-leanbot-navy transition-colors flex items-center gap-2">
               <span class="truncate">{{ method.value }}</span>
               <svg class="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
