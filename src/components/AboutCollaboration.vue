<script setup>
import aiciLogo from '../assets/logo/aici/blue/aici.webp';
import leanbotLogo from '../assets/logo/leanbot.png';
</script>

<template>
  <div class="relative bg-surface py-24 sm:py-32 overflow-hidden border-b border-gray-100">

    <!-- Animated background glowing blobs overlaying the section -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full z-0 flex justify-center pointer-events-none opacity-40 mix-blend-multiply">
      <div class="absolute w-[30rem] h-[30rem] bg-aici-blue/20 rounded-full blur-[100px] -left-10 top-0"></div>
      <div class="absolute w-[30rem] h-[20rem] bg-leanbot-red/10 rounded-full blur-[100px] right-10 bottom-0"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Logo Collaboration Header -->
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-leanbot-navy sm:text-4xl text-center">
          Sinergi untuk Masa Depan
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 text-center">
          Menggabungkan ekosistem inovasi AiCI dengan teknologi mutakhir dari Leanbot
          untuk menciptakan pengalaman belajar STEM yang tak tertandingi di Indonesia.
        </p>
      </div>

      <!-- Enhanced Glassmorphism Logo Section -->
      <div class="mx-auto max-w-4xl relative group">

        <!-- Animated glow border behind the glass card -->
        <div
          class="absolute -inset-1 bg-gradient-to-r from-aici-blue to-leanbot-red rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000">
        </div>

        <div
          class="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 rounded-[2rem] bg-white/60 backdrop-blur-2xl px-8 py-16 shadow-xl ring-1 ring-white/80">

          <!-- AiCI Logo -->
          <div class="flex-shrink-0 flex items-center justify-center">
            <img :src="aiciLogo.src" alt="AiCI Logo"
              class="w-48 md:w-56 h-auto object-contain transition-transform duration-500 hover:scale-105 drop-shadow-sm" />
          </div>

          <!-- Divider Cross -->
          <div class="flex items-center justify-center">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 z-10 relative">
              <span class="text-2xl font-light text-gray-400 select-none">✕</span>
            </div>
          </div>

          <!-- Leanbot Logo (Strict width limit to visually match the AiCI logo) -->
          <div class="flex-shrink-0 flex items-center justify-center">
            <img :src="leanbotLogo.src" alt="Leanbot Logo"
              class="w-48 md:w-56 h-auto object-contain transition-transform duration-500 hover:scale-105 drop-shadow-sm" />
          </div>

        </div>
      </div>

      <!-- Collaboration Details -->
      <div class="mx-auto max-w-3xl text-center mt-20">
        <p class="text-base leading-relaxed text-gray-600 mb-6">
          <strong class="text-leanbot-navy font-semibold">Artificial Intelligence Center Indonesia (AiCI)</strong>
          menjalin kemitraan strategis dengan
          <strong class="text-leanbot-red font-semibold">Leanbot</strong> untuk menghadirkan kurikulum K-12 berstandar
          internasional.
          Melalui platform <em>Metaverse Toolkit</em> dari Leanbot, siswa AiCI tidak hanya belajar memprogram robot
          secara fisik,
          tetapi juga berinteraksi dengan <em>Digital Twin</em> di lingkungan virtual yang interaktif.
        </p>
        <p class="text-base leading-relaxed text-gray-600">
          Kolaborasi ini mempercepat adopsi teknologi Revolusi Industri 4.0 di kalangan pelajar dan pendidik,
          menyiapkan talenta-talenta muda yang siap bersaing secara global.
        </p>
      </div>

    </div>
  </div>
</template>
