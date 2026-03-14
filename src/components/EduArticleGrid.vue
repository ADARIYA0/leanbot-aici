<script setup>
import { ref, computed } from 'vue';
import { articles, categories } from '../data/articles';

// State untuk filter kategori aktif
const activeCategory = ref('Semua Artikel');

// Fungsi untuk filter artikel
const filteredArticles = computed(() => {
  if (activeCategory.value === 'Semua Artikel') {
    return articles;
  }
  return articles.filter(article => article.category === activeCategory.value);
});
</script>

<template>
  <div class="bg-surface py-12 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <!-- Filter Tabs (Kategori) -> Dipindah ke sini agar bisa mengontrol grid -->
      <div class="mb-12 flex flex-wrap items-center justify-center gap-3">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
            activeCategory === category
              ? 'bg-leanbot-red text-white shadow-md'
              : 'bg-white text-gray-600 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Grid Artikel -->
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <TransitionGroup name="list">
          <!-- Modifikasi desain: Artikel pertama (index 0) dibuat membentang penuh 2 kolom jika di 'Semua Artikel' agar terlihat seperti Featured Article -->
          <article
            v-for="(article, index) in filteredArticles"
            :key="article.id"
            :class="[
              'relative flex flex-col items-start justify-between rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300',
              index === 0 && activeCategory === 'Semua Artikel' ? 'lg:col-span-2 lg:flex-row' : 'p-6'
            ]"
          >
            <!-- Konfigurasi Layout Khusus untuk "Featured Article" (index 0) -->
            
            <!-- Gambar Artikel -->
            <div 
              :class="[
                'relative w-full overflow-hidden',
                index === 0 && activeCategory === 'Semua Artikel' ? 'lg:w-1/2 lg:rounded-l-2xl lg:rounded-r-none rounded-t-2xl' : 'rounded-xl'
              ]"
            >
              <div 
                :class="[
                  'block w-full overflow-hidden',
                  index === 0 && activeCategory === 'Semua Artikel' ? 'h-full min-h-[300px]' : 'pb-[56.25%]'
                ]"
              >
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                />
              </div>
              <div class="absolute inset-0 ring-1 ring-inset ring-gray-900/10"
                   :class="index === 0 && activeCategory === 'Semua Artikel' ? 'lg:rounded-l-2xl rounded-t-2xl' : 'rounded-xl'"></div>
            </div>

            <!-- Konten Artikel -->
            <div 
              :class="[
                'w-full flex flex-col justify-between',
                index === 0 && activeCategory === 'Semua Artikel' ? 'lg:w-1/2 p-8 lg:p-12 h-full' : 'mt-0' // mt-0 karena p-6 sudah di level <article> parent
              ]"
            >
              <div>
                <!-- Meta Data (Kategori & Waktu) -->
                <div class="mt-2 flex items-center gap-x-4 text-xs">
                  <time class="text-gray-500">{{ article.date }}</time>
                  <div class="h-1 w-1 rounded-full bg-gray-400"></div>
                  <span class="text-gray-500">{{ article.readTime }}</span>
                  <span
                    class="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-aici-blue"
                  >
                    {{ article.category }}
                  </span>
                </div>

                <!-- Judul & Excerpt (Diperbaiki Link href-nya) -->
                <div class="group relative">
                  <h3 
                    :class="[
                      'mt-4 font-semibold text-gray-900 transition-colors hover:text-leanbot-red',
                      index === 0 && activeCategory === 'Semua Artikel' ? 'text-2xl leading-8 lg:text-3xl lg:leading-10' : 'text-xl leading-6'
                    ]"
                  >
                    <!-- Mengarahkan link ke /edukasi/[slug] -->
                    <a :href="'/edukasi/' + article.slug">
                      {{ article.title }}
                    </a>
                  </h3>
                  <p 
                    class="mt-4 text-gray-600 leading-relaxed"
                    :class="index === 0 && activeCategory === 'Semua Artikel' ? 'line-clamp-4 text-base' : 'line-clamp-3 text-sm'"
                  >
                    {{ article.excerpt }}
                  </p>
                </div>
              </div>

              <!-- Footer Card (Baca Selengkapnya link) -->
              <div class="mt-8">
                <a :href="'/edukasi/' + article.slug" class="group inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-leanbot-red hover:underline">
                  Baca selengkapnya
                  <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </TransitionGroup>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Transisi mulus saat filter kategori digunakan */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.list-leave-active {
  position: absolute;
}
</style>
