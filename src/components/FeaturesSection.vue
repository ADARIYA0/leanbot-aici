<script setup>
const features = [
  {
    icon: 'robot',
    title: 'Smart Robot',
    description:
      'Robot edukasi dengan sensor semi-industri dan teknologi Digital Twin yang memungkinkan pembelajaran robotika secara langsung maupun virtual.',
  },
  {
    icon: 'clock',
    title: 'Pembelajaran 24/7',
    description:
      'Akses pembelajaran online kapan saja dengan sistem tutoring dan metode flipped classroom yang interaktif dan personal.',
  },
  {
    icon: 'globe',
    title: 'STEM Metaverse',
    description:
      'Belajar dalam dunia virtual yang gamified bersama teman-teman dari seluruh dunia melalui platform social learning.',
  },
  {
    icon: 'book',
    title: 'Kurikulum K-12',
    description:
      'Kurikulum STEM yang terstruktur dan selaras dengan standar pendidikan nasional untuk jenjang SD hingga SMA.',
  },
]
</script>

<template>
  <section class="bg-surface py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-widest text-leanbot-red"
        >
          Fitur Unggulan
        </p>
        <h2 class="mb-4 text-3xl font-bold text-leanbot-navy lg:text-4xl">
          Mengapa Memilih Leanbot?
        </h2>
        <p class="text-lg leading-relaxed text-gray-600">
          Platform robotika edukasi terlengkap yang dirancang untuk membantu
          siswa menguasai STEM dengan cara yang interaktif dan menyenangkan.
        </p>
      </div>

      <!-- Feature Cards Grid -->
      <div class="grid gap-6 sm:grid-cols-2">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <!-- Icon -->
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-leanbot-red/10 transition-colors duration-300 group-hover:bg-leanbot-red"
          >
            <!-- Robot icon -->
            <svg
              v-if="feature.icon === 'robot'"
              class="h-6 w-6 text-leanbot-red transition-colors duration-300 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M16.5 3v1.5m0 15V21m-9-12h9m-9 3h9m-4.5-6v6"
              />
            </svg>

            <!-- Clock icon -->
            <svg
              v-if="feature.icon === 'clock'"
              class="h-6 w-6 text-leanbot-red transition-colors duration-300 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <!-- Globe icon -->
            <svg
              v-if="feature.icon === 'globe'"
              class="h-6 w-6 text-leanbot-red transition-colors duration-300 group-hover:text-white"
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

            <!-- Book icon -->
            <svg
              v-if="feature.icon === 'book'"
              class="h-6 w-6 text-leanbot-red transition-colors duration-300 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>

          <!-- Title -->
          <h3
            class="mb-3 text-lg font-bold text-leanbot-navy"
          >
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm leading-relaxed text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
