<script setup>
import { ref } from 'vue'

const props = defineProps({
  logoSrc: {
    type: String,
    required: true
  },
  currentPath: {
    type: String,
    default: '/'
  }
})

const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Edukasi', href: '/edukasi' },
  { label: 'Lomba', href: '/lomba' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Kontak', href: '/kontak' },
]

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function isActive(path) {
  if (path === '/') return props.currentPath === '/' || props.currentPath === ''
  // Handle trailing slashes in Astro (e.g., /edukasi and /edukasi/)
  return props.currentPath.startsWith(path)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-md"
  >
    <nav class="mx-auto flex h-16 max-w-7xl items-center px-6 lg:px-8">
      <!-- Logo -->
      <a href="/" class="flex shrink-0 items-center">
        <img
          :src="logoSrc"
          alt="AiCI Logo"
          class="h-7 w-auto"
        />
      </a>

      <!-- Desktop Navigation Links -->
      <div class="ml-16 hidden items-center gap-8 lg:flex">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          :class="[
            'nav-link text-xs font-medium uppercase tracking-widest transition-colors duration-300',
            isActive(link.href) ? 'text-leanbot-red' : 'text-gray-700 hover:text-leanbot-red'
          ]"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Desktop CTA Button -->
      <div class="hidden lg:flex">
        <a
          href="https://aici-umg.com"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button inline-flex items-center rounded-lg bg-leanbot-red px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-leanbot-navy"
        >
          Kunjungi AiCI
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        type="button"
        class="inline-flex items-center justify-center text-gray-700 lg:hidden"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <svg
          v-if="!isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="border-t border-gray-200/60 bg-white lg:hidden"
      >
        <div class="space-y-1 px-6 pb-6 pt-4">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            :class="[
              'block py-2.5 text-xs font-medium uppercase tracking-widest transition-colors duration-300',
              isActive(link.href) ? 'text-leanbot-red' : 'text-gray-700 hover:text-leanbot-red'
            ]"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </a>
          <div class="pt-4">
            <a
              href="https://aici-umg.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center rounded-lg bg-leanbot-red px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-leanbot-navy"
            >
              Kunjungi AiCI
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Mobile menu slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
