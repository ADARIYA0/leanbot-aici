<script setup>
const features = [
  {
    icon: 'code',
    title: 'Multi-Bahasa Pemrograman',
    description:
      'Dari pemula hingga mahir. Leanbot mendukung pemrograman visual (Blockly) hingga bahasa tingkat lanjut (C++) menggunakan Arduino Programming IDE.',
  },
  {
    icon: 'book',
    title: '50+ Aktivitas di LMS',
    description:
      'Dilengkapi dengan Sistem Manajemen Pembelajaran (LMS) yang menyediakan puluhan aktivitas siap pakai yang diselaraskan dengan standar pendidikan K-12.',
  },
  {
    icon: 'globe',
    title: 'Ekosistem Pythaverse',
    description:
      'Terintegrasi langsung dengan Pythaverse Educational Multiverse, memungkinkan pembelajaran dalam ruang virtual 3D yang interaktif (Digital Twin).',
  },
  {
    icon: 'recycle',
    title: 'Komponen Reusable',
    description:
      'Sebagian besar komponen (Arduino Nano, PowerBank, Motor, Sensor) tersedia di pasaran dan dapat digunakan kembali untuk proyek STEM atau IoT lainnya.',
  },
]
</script>

<template>
  <section class="bg-surface py-20 lg:py-28 relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-leanbot-red">
          Keunggulan Edukasi
        </p>
        <h2 class="mb-4 text-3xl font-bold text-leanbot-navy lg:text-4xl">
          Lebih dari Sekadar Robot Fisik
        </h2>
        <p class="text-lg leading-relaxed text-gray-600">
          Leanbot dirancang sebagai ekosistem pembelajaran STEM yang utuh, mengintegrasikan perangkat keras presisi dengan perangkat lunak interaktif.
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="relative p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-leanbot-red/10 text-leanbot-red">
            <!-- Code icon -->
            <svg v-if="feature.icon === 'code'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <!-- Book icon -->
            <svg v-if="feature.icon === 'book'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <!-- Globe icon -->
            <svg v-if="feature.icon === 'globe'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <!-- Recycle icon -->
            <svg v-if="feature.icon === 'recycle'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <h3 class="mb-3 text-lg font-bold text-leanbot-navy">
            {{ feature.title }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-500">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
