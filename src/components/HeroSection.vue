<script setup>
defineProps({
  robotImageSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="relative overflow-hidden bg-white py-20 lg:py-28">
    <!-- Subtle gradient accent -->
    <div
      class="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-leanbot-red/5 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-leanbot-blue/5 blur-3xl"
    ></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Left: Text Content -->
        <div class="order-2 lg:order-1">
          <p
            class="mb-4 text-xs font-semibold uppercase tracking-widest text-leanbot-red"
          >
            STEM Metaverse Robot Toolkit
          </p>
          <h1
            class="mb-6 text-4xl font-bold leading-tight text-leanbot-navy lg:text-5xl xl:text-6xl"
          >
            Belajar Robotika &amp; STEM dengan Cara yang
            <span class="text-leanbot-red">Menyenangkan</span>
          </h1>
          <p class="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
            Leanbot adalah robot toolkit edukasi STEM pertama di dunia yang
            menggabungkan teknologi Digital Twin untuk pembelajaran robotika
            secara online maupun offline.
          </p>

          <!-- CTA Buttons -->
          <div class="mb-10 flex flex-wrap gap-4">
            <a
              href="/edukasi"
              class="inline-flex items-center rounded-lg bg-leanbot-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-leanbot-red/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-leanbot-navy hover:shadow-leanbot-navy/25"
            >
              Mulai Belajar
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="/tentang-kami"
              class="inline-flex items-center rounded-lg border-2 border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-leanbot-blue hover:text-leanbot-blue"
            >
              Tentang Leanbot
            </a>
          </div>

          <!-- Stats Row -->
          <div
            class="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500"
          >
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-leanbot-red"></div>
              24/7 Learning
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-leanbot-blue"></div>
              Digital Twin
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-aici-blue"></div>
              K-12 Curriculum
            </div>
          </div>
        </div>

        <!-- Right: Robot Image -->
        <div class="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div class="relative">
            <!-- Decorative ring -->
            <div
              class="absolute -inset-6 rounded-full border-2 border-dashed border-gray-200/60"
            ></div>
            <img
              :src="robotImageSrc"
              alt="Leanbot STEM Robot"
              class="relative z-10 h-auto w-full max-w-md drop-shadow-2xl lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
