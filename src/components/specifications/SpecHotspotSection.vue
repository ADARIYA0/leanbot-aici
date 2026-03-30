<script setup>
import { ref } from 'vue'
import leanbotImg from '../../assets/images/Leanbot-nobg-2.png'

const activeHotspot = ref(null)

const hotspots = [
  { id: 1, name: 'Arduino Nano Brain', desc: 'Otak operasi utama robot berbasis ATmega328P.', x: 60, y: 40 },
  { id: 2, name: 'Stepper Motor', desc: 'Motor penggerak roda yang sangat stabil dan presisi tinggi.', x: 75, y: 75 },
  { id: 3, name: 'Servo Motor', desc: 'Sistem penggerak untuk mekanisme capit dan lengan angkat.', x: 22, y: 65 },
  { id: 4, name: 'Ultrasonic Sensor', desc: 'Sensor andal untuk deteksi jarak dan halangan di depan.', x: 45, y: 40 },
  { id: 5, name: 'IR Sensor', desc: 'Sensor pelacak garis (line follower) dan dinding.', x: 30, y: 85 },
  { id: 6, name: 'Touch Sensor', desc: 'Sensor pendeteksi benturan dan sentuhan fisik pada robot.', x: 40, y: 75 },
  { id: 7, name: 'RGB LED', desc: 'Layar cincin 7-pixel RGB untuk indikator sinyal visual.', x: 55, y: 55 },
  { id: 8, name: 'IR Remote', desc: 'Penerima sinyal remote infra-merah untuk kendali manual.', x: 70, y: 25 },
  { id: 9, name: 'Mini Buzzer', desc: 'Mini speaker penghasil suara dan nada umpan balik.', x: 50, y: 50 },
  { id: 10, name: 'Bluetooth Module', desc: 'Modul komunikasi nirkabel untuk transfer data ke platform eksternal.', x: 80, y: 25 }
]

const toggleHotspot = (id) => {
  if (activeHotspot.value === id) {
    activeHotspot.value = null
  } else {
    activeHotspot.value = id
  }
}

const showHotspot = (id) => {
  activeHotspot.value = id
}

const hideHotspot = () => {
  activeHotspot.value = null
}
</script>

<template>
  <section class="bg-white py-20 lg:py-28 relative overflow-hidden shrink-0">
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
      
      <!-- Text & CTA Content -->
      <div class="w-full lg:w-1/3 text-center lg:text-left">
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-leanbot-red">
          Ringkasan Spesifikasi
        </p>
        <h2 class="mb-4 text-3xl font-bold text-leanbot-navy lg:text-4xl">
          Kekuatan di Balik Leanbot
        </h2>
        <p class="text-lg leading-relaxed text-gray-600 mb-8">
          Jelajahi anatomi canggih Leanbot secara interaktif. Arahkan kursor atau sentuh elemen bernomor pada gambar untuk melihat ringkasan singkat fitur komponen utama standard.
        </p>

        <a 
          href="/spesifikasi" 
          class="inline-flex items-center gap-x-2 rounded-full bg-leanbot-red px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-leanbot-red/30 transition-all hover:bg-leanbot-navy hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leanbot-red"
        >
          Lihat Spesifikasi Lengkap
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <!-- Interactive Hotspot Image Wrapper -->
      <div class="w-full lg:w-2/3 max-w-3xl mx-auto mt-8 lg:mt-0 relative group select-none">
        
        <!-- Base Leanbot Image -->
        <div class="relative w-full overflow-visible rounded-3xl p-4 lg:p-8 bg-surface border border-gray-100 shadow-sm" @mouseleave="hideHotspot">
            <div class="relative w-full mx-auto" style="max-width: 600px;">
              <img 
                :src="leanbotImg.src" 
                alt="Leanbot Anatomy" 
                class="w-full h-auto drop-shadow-2xl"
                draggable="false"
              />

              <!-- Hotspot Markers (Absolute Positioned by Percentage) -->
              <div 
                v-for="spot in hotspots" 
                :key="spot.id"
                class="absolute z-20"
                :style="{ top: spot.y + '%', left: spot.x + '%', transform: 'translate(-50%, -50%)' }"
              >
                <!-- Marker Button -->
                <button
                  type="button"
                  @mouseenter="showHotspot(spot.id)"
                  @click.prevent="toggleHotspot(spot.id)"
                  class="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-leanbot-red text-white font-bold text-sm sm:text-base shadow-lg ring-4 ring-white transition-all duration-300 transform outline-none"
                  :class="activeHotspot === spot.id ? 'scale-125 z-30 bg-leanbot-navy ring-leanbot-red/30 focus:ring-4 hover:scale-125' : 'hover:scale-110'"
                >
                  <span class="absolute inset-0 rounded-full bg-leanbot-red animate-ping opacity-30"></span>
                  <span class="relative z-10 drop-shadow-md">{{ spot.id }}</span>
                </button>

                <!-- Tooltip Popup -->
                <div 
                  v-if="activeHotspot === spot.id"
                  class="absolute w-64 max-w-[85vw] p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 z-50 pointer-events-none fade-in slide-in-from-bottom-2"
                  :class="[
                    spot.x > 50 ? 'right-0 lg:right-auto lg:left-14' : 'left-0 lg:left-auto lg:left-14',
                    spot.y > 60 ? 'bottom-14' : 'top-12 lg:-top-6'
                  ]"
                >
                    <div class="flex items-center gap-2 mb-1.5">
                        <span class="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-leanbot-red/10 text-leanbot-red text-xs font-bold">{{ spot.id }}</span>
                        <h4 class="font-bold text-gray-900 text-sm leading-tight">{{ spot.name }}</h4>
                    </div>
                    <p class="text-xs text-gray-600 leading-relaxed">{{ spot.desc }}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Minor animation fixes */
.fade-in { animation: fadeIn 0.3s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.slide-in-from-bottom-2 { transform: translateY(8px); animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes slideIn { to { transform: translateY(0); } }
</style>
