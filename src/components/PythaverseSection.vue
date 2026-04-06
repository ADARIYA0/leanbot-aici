<template>
  <section class="relative overflow-hidden bg-white py-20 lg:py-28">
    <!-- Decorative bg elements -->
    <div
      class="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-leanbot-blue/5 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-leanbot-red/5 blur-3xl"
    ></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-widest text-leanbot-red"
        >
          Platform Pemrograman
        </p>
        <h2 class="mb-4 text-3xl font-bold text-leanbot-navy lg:text-4xl">
          Program & Kendalikan Leanbot Anda
        </h2>
        <p class="text-lg leading-relaxed text-gray-600">
          Punya robot Leanbot? Mulai kendalikan dan programnya langsung dari
          browser Anda melalui <strong class="text-leanbot-navy">Pythaverse</strong> —
          platform edukasi interaktif berbasis cloud.
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Left: Visual Card -->
        <div class="flex justify-center">
          <div
            class="group relative w-full max-w-lg overflow-hidden rounded-3xl bg-leanbot-navy p-10 lg:p-12 shadow-2xl"
          >
            <!-- Decorative elements inside card -->
            <div
              class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-leanbot-red/20 blur-2xl"
            ></div>
            <div
              class="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-leanbot-blue/20 blur-2xl"
            ></div>

            <!-- Grid pattern decoration -->
            <div class="pointer-events-none absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="grid"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="white"
                      stroke-width="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div class="relative z-10">
              <!-- Pythaverse Logo/Icon -->
              <div
                class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm"
              >
                <svg
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>

              <h3 class="mb-3 text-2xl font-bold text-white lg:text-3xl">
                Pythaverse
              </h3>
              <p class="mb-2 text-sm font-medium text-leanbot-red/80">
                pythaverse.space
              </p>
              <p class="mb-8 text-base leading-relaxed text-gray-300">
                Lingkungan pemrograman berbasis cloud yang mendukung Blockly dan
                C++ untuk mengendalikan robot Leanbot secara langsung — baik robot
                fisik maupun simulasi Digital Twin.
              </p>

              <!-- CTA Button -->
              <a
                href="https://pythaverse.space"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-lg bg-leanbot-red px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-leanbot-red/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-leanbot-navy hover:shadow-white/25"
              >
                Buka Pythaverse
                <svg
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Feature List -->
        <div>
          <div class="space-y-6">
            <!-- Feature 1 -->
            <div
              class="group flex gap-5 rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-leanbot-red/10 transition-colors duration-300 group-hover:bg-leanbot-red"
              >
                <svg
                  class="h-6 w-6 text-leanbot-red transition-colors duration-300 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <div>
                <h4 class="mb-1 text-base font-bold text-leanbot-navy">
                  Blockly & C++ Programming
                </h4>
                <p class="text-sm leading-relaxed text-gray-600">
                  Pilih antara pemrograman blok visual (Blockly) untuk pemula
                  atau bahasa C++ untuk pelajar tingkat lanjut.
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div
              class="group flex gap-5 rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-leanbot-blue/10 transition-colors duration-300 group-hover:bg-leanbot-blue"
              >
                <svg
                  class="h-6 w-6 text-leanbot-blue transition-colors duration-300 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <div>
                <h4 class="mb-1 text-base font-bold text-leanbot-navy">
                  Lintas Platform & Cloud
                </h4>
                <p class="text-sm leading-relaxed text-gray-600">
                  Berjalan langsung di browser — cukup buka di Google Chrome
                  (Windows, Mac, Chromebook) tanpa install apapun.
                </p>
              </div>
            </div>

            <!-- Feature 3 -->
            <div
              class="group flex gap-5 rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-aici-blue/10 transition-colors duration-300 group-hover:bg-aici-blue"
              >
                <svg
                  class="h-6 w-6 text-aici-blue transition-colors duration-300 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="mb-1 text-base font-bold text-leanbot-navy">
                  Digital Twin & 50+ Aktivitas
                </h4>
                <p class="text-sm leading-relaxed text-gray-600">
                  Akses lebih dari 50 aktivitas pembelajaran siap pakai di LMS,
                  lengkap dengan simulasi virtual dan sinkronisasi robot fisik secara
                  real-time.
                </p>
              </div>
            </div>

            <!-- Feature 4 -->
            <div
              class="group flex gap-5 rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-leanbot-red/10 transition-colors duration-300 group-hover:bg-leanbot-red"
              >
                <svg
                  class="h-6 w-6 text-leanbot-red transition-colors duration-300 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="mb-1 text-base font-bold text-leanbot-navy">
                  Koneksi Bluetooth Aman
                </h4>
                <p class="text-sm leading-relaxed text-gray-600">
                  Hubungkan robot Leanbot ke Pythaverse secara nirkabel melalui
                  Bluetooth-Mobile Gateway yang aman dan stabil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
