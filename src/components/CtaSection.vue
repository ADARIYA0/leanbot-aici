<template>
  <section class="relative overflow-hidden bg-leanbot-navy py-20 lg:py-24">
    <!-- Decorative gradient -->
    <div
      class="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-leanbot-red/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-leanbot-blue/10 blur-3xl"
    ></div>

    <div class="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
      <h2
        class="mb-6 text-3xl font-bold leading-tight text-white lg:text-4xl"
      >
        Siap Memulai Perjalanan <span class="text-leanbot-red">STEM</span>
        Anda?
      </h2>
      <p class="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-300">
        Bergabunglah dengan ribuan siswa yang telah merasakan serunya belajar
        robotika dan teknologi bersama Leanbot.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="/kontak"
          class="inline-flex items-center rounded-lg bg-leanbot-red px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-leanbot-red/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-leanbot-navy hover:shadow-white/25"
        >
          Hubungi Kami
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
          href="/edukasi"
          class="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          Jelajahi Program
        </a>
      </div>
    </div>
  </section>
</template>
