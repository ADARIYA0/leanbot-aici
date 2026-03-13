<script setup>
defineProps({
  logoSrc: {
    type: String,
    required: true,
  },
})

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Edukasi', href: '/edukasi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Komunitas', href: '/komunitas' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Kontak', href: '/kontak' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/aici.official',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/artificial-intelligence-center-indonesia',
    icon: 'linkedin',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@aici.official',
    icon: 'youtube',
  },
  {
    name: 'Email',
    href: 'mailto:dataaici@gmail.com',
    icon: 'email',
  },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-leanbot-navy">
    <!-- Main Footer Content -->
    <div class="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Column 1: Logo + Description -->
        <div class="space-y-6">
          <a href="/" class="inline-block">
            <img :src="logoSrc" alt="AiCI Logo" class="h-20 w-auto" />
          </a>
          <p class="text-sm leading-relaxed text-gray-400">
            Leanbot adalah robot toolkit edukasi STEM Metaverse pertama di dunia
            yang menggabungkan teknologi Digital Twin untuk pembelajaran robotika
            secara online maupun offline. Dengan desain yang ringkas dan inovatif,
            Leanbot membantu siswa belajar sains, teknologi, teknik, dan matematika
            secara menyenangkan.
          </p>
        </div>

        <!-- Column 2: Pages / Navigation -->
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
            Halaman
          </h3>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.label">
              <a :href="link.href"
                class="inline-flex items-center text-sm text-gray-400 transition-colors duration-300 hover:text-leanbot-red">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Newsletter -->
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
            Berlangganan
          </h3>
          <p class="mb-4 text-sm leading-relaxed text-gray-400">
            Dapatkan update terbaru seputar program edukasi dan penawaran spesial Leanbot.
          </p>
          <form class="space-y-2" @submit.prevent>
            <div class="relative">
              <input
                type="email"
                placeholder="Alamat email Anda"
                class="w-full rounded-lg border border-white/20 bg-white/5 py-2.5 pl-4 pr-12 text-sm text-white placeholder-gray-400 focus:border-leanbot-red focus:outline-none focus:ring-1 focus:ring-leanbot-red"
                required
              />
              <button
                type="submit"
                class="absolute bottom-0 right-0 top-0 flex items-center justify-center rounded-r-lg px-3 text-gray-400 transition-colors hover:text-leanbot-red"
                aria-label="Kirim"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <!-- Column 4: Social Media -->
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
            Sosial Media
          </h3>
          <div class="flex flex-wrap gap-3">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
              rel="noopener noreferrer" :aria-label="social.name"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all duration-300 hover:border-leanbot-red hover:bg-leanbot-red hover:text-white">
              <!-- Instagram -->
              <svg v-if="social.icon === 'instagram'" class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

              <!-- LinkedIn -->
              <svg v-if="social.icon === 'linkedin'" class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>

              <!-- YouTube -->
              <svg v-if="social.icon === 'youtube'" class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>

              <!-- Email -->
              <svg v-if="social.icon === 'email'" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10 bg-leanbot-navy-dark">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-gray-400 sm:flex-row lg:px-8">
        <p>&copy; {{ currentYear }} Leanbot AiCI. All rights reserved.</p>
        <p class="text-gray-600">STEM Metaverse Robot Toolkit</p>
      </div>
    </div>
  </footer>
</template>
