<script setup lang="ts">
// Dummy data for external competitions
const competitions = [
  {
    id: 1,
    title: 'World Robot Olympiad (WRO) 2026',
    organizer: 'WRO Association',
    description: 'Kompetisi robotika global untuk anak muda dengan berbagai kategori tantangan inovatif.',
    date: '10 - 15 November 2026',
    location: 'Doha, Qatar',
    isOnline: false,
    status: 'Pendaftaran Dibuka',
    url: 'https://wro-association.org',
    tags: ['Lego', 'Maze Solving', 'Inovasi']
  },
  {
    id: 2,
    title: 'ASEAN Makerthon Challenge',
    organizer: 'ASEAN Secretariat & Partners',
    description: 'Ajang kompetisi membuat solusi Internet of Things (IoT) berbasis mikrokontroler untuk pelajar se-Asia Tenggara.',
    date: '5 September 2026',
    location: 'Hybrid (Online / Jakarta)',
    isOnline: true,
    status: 'Segera Hadir',
    url: 'https://asean.org',
    tags: ['IoT', 'Microcontroller', 'Smart City']
  },
  {
    id: 3,
    title: 'National STEM Innovation Fair',
    organizer: 'Kementerian Pendidikan',
    description: 'Pameran dan kompetisi tingkat nasional untuk proyek-proyek STEM tingkat SD hingga SMA.',
    date: '20 Agustus 2026',
    location: 'Jakarta, Indonesia',
    isOnline: false,
    status: 'Pendaftaran Dibuka',
    url: 'https://kemdikbud.go.id',
    tags: ['STEM', 'Science', 'SD/SMP/SMA']
  },
  {
    id: 4,
    title: 'RoboCup Junior Virtual Rescue',
    organizer: 'RoboCup Federation',
    description: 'Bawa robot virtual Anda melewati simulasi jalur penyelamatan di ajang simulasi digital tersulit.',
    date: '15 Desember 2026',
    location: 'Sepenuhnya Online',
    isOnline: true,
    status: 'Sedang Berlangsung',
    url: 'https://junior.robocup.org',
    tags: ['Virtual', 'Digital Twin', 'Coding']
  }
];

// Helper for status badge colors
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pendaftaran Dibuka':
      return 'bg-green-100 text-green-800 ring-green-600/20';
    case 'Segera Hadir':
      return 'bg-blue-100 text-blue-800 ring-blue-600/20';
    case 'Sedang Berlangsung':
      return 'bg-amber-100 text-amber-800 ring-amber-600/20';
    default:
      return 'bg-gray-100 text-gray-800 ring-gray-600/20';
  }
};
</script>

<template>
  <section id="competitions-list" class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-leanbot-red">Daftar Kompetisi</h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-leanbot-navy sm:text-4xl">Kompetisi & Event Terkait</p>
        <p class="mt-4 text-base text-gray-600">Klik tautan pendaftaran untuk menuju syarat, ketentuan, dan pendaftaran resmi pada situs web tiap penyelenggara.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <article 
          v-for="comp in competitions" 
          :key="comp.id"
          class="flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-leanbot-red/30"
        >
          <div class="flex items-center gap-x-4 w-full justify-between">
            <time :datetime="comp.date" class="text-sm font-semibold tracking-widest uppercase text-aici-blue">
              {{ comp.date }}
            </time>
            <span :class="['inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset', getStatusColor(comp.status)]">
              {{ comp.status }}
            </span>
          </div>

          <div class="group relative mt-6">
            <h3 class="text-2xl font-bold leading-tight text-leanbot-navy group-hover:text-leanbot-red transition-colors duration-200">
              <a :href="comp.url" target="_blank" rel="noopener noreferrer">
                <span class="absolute inset-0"></span>
                {{ comp.title }}
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500 font-medium tracking-wide">Penyelenggara: <span class="font-bold text-gray-700">{{ comp.organizer }}</span></p>
            <p class="mt-4 line-clamp-3 text-base leading-relaxed text-gray-600">{{ comp.description }}</p>
          </div>

          <!-- Tags -->
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tag in comp.tags" :key="tag" class="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {{ tag }}
            </span>
          </div>

          <div class="mt-8 flex items-center justify-between w-full border-t border-gray-100 pt-6">
            <div class="flex items-center gap-x-2 text-sm text-gray-500 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ comp.location }}
            </div>
            
            <a 
              :href="comp.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="relative z-10 hidden sm:inline-flex items-center gap-x-2 rounded-lg bg-leanbot-navy px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-leanbot-red"
            >
              Kunjungi Web
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
