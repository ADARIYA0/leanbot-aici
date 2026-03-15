<script setup>
import { ref, computed } from 'vue';
import { blogs, categories } from '../data/blogs';

// State untuk filter kategori aktif
const activeCategory = ref('Semua Artikel');

// Fungsi untuk filter artikel
const filteredBlogs = computed(() => {
  if (activeCategory.value === 'Semua Artikel') {
    return blogs;
  }
  return blogs.filter(blog => blog.category === activeCategory.value);
});
</script>

<template>
  <div class="bg-surface py-12 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <!-- Filter Tabs (Kategori) -->
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

      <!-- Grid Artikel Khusus Blog (3 Kolom d Desktop) -->
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <TransitionGroup name="list">
          <article
            v-for="blog in filteredBlogs"
            :key="blog.id"
            class="relative flex flex-col items-start justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
          >
            <!-- Gambar Artikel -->
            <div class="relative w-full overflow-hidden rounded-xl">
              <!-- Aspect Ratio 16:9 box -->
              <div class="block w-full overflow-hidden pb-[56.25%] bg-gray-100">
                <img
                  :src="blog.image"
                  :alt="blog.title"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                />
              </div>
              <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>

            <div class="w-full flex flex-col justify-between h-full mt-4">
              <div>
                <!-- Meta Data (Kategori & Waktu) -->
                <div class="flex items-center gap-x-4 text-xs mt-2">
                  <time class="text-gray-500">{{ blog.date }}</time>
                  <div class="h-1 w-1 rounded-full bg-gray-400"></div>
                  <span class="text-gray-500">{{ blog.readTime }}</span>
                </div>
                <!-- Kategori Tag -->
                <div class="mt-3">
                  <span
                    class="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-aici-blue"
                  >
                    {{ blog.category }}
                  </span>
                </div>

                <!-- Judul & Excerpt -->
                <div class="group relative mt-4">
                  <h3 class="text-lg font-semibold leading-6 text-gray-900 transition-colors hover:text-leanbot-red">
                    <a :href="'/blog/' + blog.slug">
                      {{ blog.title }}
                    </a>
                  </h3>
                  <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {{ blog.excerpt }}
                  </p>
                </div>
              </div>

              <!-- Footer Card (Baca Selengkapnya link) -->
              <div class="mt-6">
                <!-- Hover effect ONLY on this element specifically -->
                <a :href="'/blog/' + blog.slug" class="group inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-leanbot-red hover:underline">
                  Baca artikel
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
