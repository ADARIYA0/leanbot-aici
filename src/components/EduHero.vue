<script setup>
// Hero banner untuk halaman Edukasi
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
          Wawasan & Inspirasi
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
          Edukasi Robotika
        </h1>
        <p class="text-lg leading-8 text-gray-300">
          Pelajari lebih dalam tentang peran Leanbot dalam pendidikan STEM, 
          teknologi Digital Twin, dan bagaimana cara kami mempersiapkan siswa untuk 
          masa depan di dunia Metaverse.
        </p>
      </div>

    </div>
  </div>
</template>
