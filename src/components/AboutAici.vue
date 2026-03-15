<script setup>
import abtImage1 from '../assets/images/about-1-hd.jpg';

const programs = [
  {
    title: 'Fun Learning with AI',
    description: 'Kegiatan belajar untuk siswa SD/MI, SMP/MTs dan SMA/MA/SMK demi meningkatkan keterampilan coding dan penalaran logis dalam bidang Artificial Intelligence dan robotika.',
    icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>`,
    colorGroup: 'group-hover:bg-blue-500/10 group-hover:text-blue-600',
  },
  {
    title: 'AI for Education',
    description: 'Program akselerasi implementasi AI khusus untuk Guru dan Dosen. Meningkatkan kemampuan merancang modul pembelajaran masa depan yang komprehensif di dalam kelas kelas.',
    icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
    colorGroup: 'group-hover:bg-red-500/10 group-hover:text-red-600',
  },
  {
    title: 'AI Day & Edu Fair',
    description: 'Kegiatan ekskursi satu hari yang menumbuhkan rasa ingin tahu serta soft skills kolaboratif siswa melalui turnamen mini Metaverse dan hackathon.',
    icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    colorGroup: 'group-hover:bg-purple-500/10 group-hover:text-purple-600',
  }
];
</script>

<template>
  <div class="bg-surface py-24 sm:py-32 border-t border-gray-200 object-cover">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Company Origin Section (Text Heavy) -->
      <div
        class="mx-auto max-w-3xl lg:mx-0 lg:max-w-none mb-20 lg:mb-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div class="lg:w-1/2">
          <h2 class="text-3xl font-bold tracking-tight text-leanbot-navy sm:text-4xl mb-6">
            Lahir dari Kampus, Hadir untuk Bangsa
          </h2>
          <div class="space-y-4 text-base leading-relaxed text-gray-600">
            <p>
              <strong>Artificial Intelligence Center Indonesia (AiCI)</strong> adalah sebuah lembaga bergengsi yang
              didirikan atas kolaborasi strategis antara Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)
              Universitas Indonesia dan UMG IdeaLab Indonesia.
            </p>
            <p>
              Berpusat di Gedung Laboratorium Riset Multidisiplin Pertamina FMIPA UI, Universitas Indonesia, Misi utama
              kami adalah
              membentuk talenta (SDM) Indonesia yang mahir dalam AI dan siap menyambut Revolusi Industri 4.0.
            </p>
          </div>
        </div>

        <!-- UI Graphic / Image placeholder for the university vibe -->
        <div class="w-full lg:w-1/2 relative">
          <div
            class="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gray-100 overflow-hidden shadow-xl border border-white">
            <img :src="abtImage1.src" alt="FMIPA UI AiCI Research Facility" class="w-full h-full object-cover">
            <div class="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-3xl"></div>
          </div>
          <!-- Decorative shapes -->
          <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-leanbot-red rounded-full opacity-20 blur-2xl"></div>
          <div class="absolute -top-8 -left-8 w-40 h-40 bg-aici-blue rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>

      <!-- Core Programs Elegant Typography Grid -->
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="mb-16 text-center lg:text-left">
          <h3 class="text-3xl font-bold tracking-tight text-gray-900">Program Unggulan Kami</h3>
          <p class="mt-4 text-lg text-gray-600">Fokus pada pembinaan usia dini hingga pelatihan profesional pendidik.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <div v-for="(program, index) in programs" :key="index"
            class="group relative p-10 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <!-- Decorative Backing Number -->
            <span
              class="absolute -bottom-6 -right-6 text-[10rem] font-black leading-none text-gray-50 group-hover:text-gray-100/60 transition-colors duration-500 select-none z-0">
              0{{ index + 1 }}
            </span>

            <div class="relative z-10">
              <!-- Icon Container -->
              <div
                class="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors duration-500 shadow-inner"
                :class="program.colorGroup" v-html="program.icon">
              </div>

              <h4 class="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                {{ program.title }}
              </h4>

              <p class="text-gray-600 leading-relaxed">
                {{ program.description }}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
