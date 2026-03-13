<script setup>
defineProps({
  robotImageSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="bg-white py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-widest text-leanbot-red"
        >
          Tentang Kami
        </p>
        <h2 class="mb-4 text-3xl font-bold text-leanbot-navy lg:text-4xl">
          Kolaborasi AiCI &times; Leanbot
        </h2>
      </div>

      <!-- Content Grid -->
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Left: Text -->
        <div>
          <p class="mb-6 text-lg leading-relaxed text-gray-600">
            <strong class="text-leanbot-navy"
              >Artificial Intelligence Center Indonesia (AiCI)</strong
            >
            bekerja sama dengan
            <strong class="text-leanbot-navy">Leanbot</strong> menghadirkan
            solusi edukasi STEM yang inovatif dan terjangkau untuk siswa di
            seluruh Indonesia.
          </p>
          <p class="mb-8 text-lg leading-relaxed text-gray-600">
            Melalui program
            <em>Fun Learning with AI</em>, siswa dari jenjang SD hingga SMA
            dapat belajar robotika, kecerdasan buatan, dan teknologi mutakhir
            lainnya dengan pendekatan yang menyenangkan dan berbasis proyek.
          </p>

          <!-- Feature Tags -->
          <div class="mb-8 flex flex-wrap gap-3">
            <span
              class="rounded-full bg-leanbot-red/10 px-4 py-2 text-sm font-medium text-leanbot-red"
            >
              AI for Education
            </span>
            <span
              class="rounded-full bg-leanbot-blue/10 px-4 py-2 text-sm font-medium text-leanbot-blue"
            >
              STEM Robotics
            </span>
            <span
              class="rounded-full bg-aici-blue/10 px-4 py-2 text-sm font-medium text-aici-blue"
            >
              Digital Twin
            </span>
          </div>

          <a
            href="https://aici-umg.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm font-semibold text-leanbot-red transition-colors duration-300 hover:text-leanbot-navy"
          >
            Kunjungi AiCI-UMG
            <svg
              class="ml-1.5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        <!-- Right: Robot Image -->
        <div class="flex justify-center">
          <div
            class="relative overflow-hidden rounded-3xl bg-surface p-8"
          >
            <img
              :src="robotImageSrc"
              alt="Leanbot STEM Robot — tampilan samping"
              class="h-auto w-full max-w-sm drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
