<script setup>
import { ref } from 'vue'
import leanbotPart1 from '../assets/images/leanbot/Leanbot_Standard-Components.jpeg'
import leanbotPart2 from '../assets/images/leanbot/Leanbot_Standard-Components_Part2.jpeg'

const activeHotspot = ref(null)
const currentSlide = ref(0)
const totalSlides = 2

// Coordinates exactly mapped from the subagent for Leanbot_Standard-Components.jpeg
const hotspotsPart1 = [
  { id: 'p1_1', name: '1. Arduino Nano Brain', desc: 'Control Board berbasis prosesor ATmega328P (8-bit, 16MHz).', x: 70.00, y: 60.53 },
  { id: 'p1_2t', name: '2. Stepper Motor', desc: 'Differential drive bermodel kinematik dengan kecepatan maksimal ~10 cm/s.', x: 50.80, y: 26.28 },
  { id: 'p1_2b', name: '2. Stepper Motor', desc: 'Differential drive bermodel kinematik dengan kecepatan maksimal ~10 cm/s.', x: 50.80, y: 77.76 },
  { id: 'p1_3t', name: '3. Gripper Motor', desc: 'Grabbing and lifting 2-4 cm objects menggunakan komponen Servo.', x: 28.70, y: 30.08 },
  { id: 'p1_3b', name: '3. Gripper Motor', desc: 'Grabbing and lifting 2-4 cm objects menggunakan komponen Servo.', x: 28.70, y: 77.76 },
  { id: 'p1_4', name: '4. Ultrasonic Sensor', desc: 'Sensor ultrasonik untuk deteksi fisik pada Leanbot.', x: 23.90, y: 48.11 },
  { id: 'p1_5', name: '5. Bluetooth Module', desc: 'Menawarkan fitur Wireless Communication untuk mobilitas.', x: 83.40, y: 44.31 },
  { id: 'p1_6', name: '6. IR Sensor', desc: 'Mencakup 6 sensor pengikut garis (line following) dan 2 sensor dinding.', x: 28.70, y: 88.98 },
  { id: 'p1_7t', name: '7. Touch Sensors', desc: 'Terdiri atas 4 unit sensor yang tersemat pada rangka robot.', x: 49.80, y: 13.06 },
  { id: 'p1_7b', name: '7. Touch Sensors', desc: 'Terdiri atas 4 unit sensor yang tersemat pada rangka robot.', x: 49.80, y: 94.79 },
  { id: 'p1_8', name: '8. RGB LEDs', desc: 'Tersusun dalam tampilan cincin 7-pixel RGB yang dapat membentuk objek warna.', x: 25.80, y: 59.53 },
  { id: 'p1_9', name: '9. IR Remote', desc: 'Penerima sinyal inframerah (IR broadcast) yang tersemat pada LbBase.', x: 73.80, y: 68.14 },
  { id: 'p1_10', name: '10. Buzzer', desc: 'Mini speaker dan output audio yang tertanam di bawah unit Arduino Nano.', x: 73.80, y: 26.28 }
]

// Coordinates exactly mapped from the subagent for Leanbot_Standard-Components_Part2.jpeg
const hotspotsPart2 = [
  { id: 'p2_6', name: '6. IR Sensor', desc: 'Mencakup 6 sensor pengikut garis (line following) dan 2 sensor dinding.', x: 25.30, y: 36.12 },
  { id: 'p2_8', name: '8. RGB LEDs', desc: 'Tersusun dalam tampilan cincin 7-pixel RGB yang dapat membentuk objek warna.', x: 25.30, y: 50.40 },
  { id: 'p2_9', name: '9. IR Remote', desc: 'Penerima sinyal inframerah (IR broadcast) yang tersemat pada LbBase.', x: 74.80, y: 53.97 }
]

const showHotspot = (id) => { activeHotspot.value = id }
const hideHotspot = () => { activeHotspot.value = null }
const toggleHotspot = (id) => {
  activeHotspot.value = activeHotspot.value === id ? null : id
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
  hideHotspot() // Reset hotspot on slide change
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
  hideHotspot() // Reset hotspot on slide change
}
</script>

<template>
  <section class="bg-white py-20 lg:py-28 relative overflow-hidden shrink-0">
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
    
    <!-- Modifikasi 1: Menggunakan max-w yang lebih lebar untuk memberikan ruang proporsional pada gambar -->
    <div class="mx-auto max-w-[90rem] px-6 lg:px-12 relative z-10 w-full">
      
      <!-- Modifikasi 2: Mengubah proporsi grid layout menjadi lg:col-span-4 / lg:col-span-8 
           agar area gambar mendapatkan space dua kali lebih besar dari teks secara visual -->
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Text & Content (Left) -->
        <div class="lg:col-span-4 flex flex-col justify-center text-center lg:text-left">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C1121F]">
            Ringkasan Spesifikasi
          </p>
          <h2 class="mb-5 text-3xl font-extrabold text-[#003049] lg:text-5xl tracking-tight leading-tight">
            Komponen Leanbot
          </h2>
          <p class="text-base lg:text-lg leading-relaxed text-gray-600 mb-8 font-medium">
            Jelajahi anatomi canggih Leanbot secara interaktif. Arahkan kursor atau sentuh elemen bernomor pada gambar untuk melihat fungsi singkat tiap komponen. 
            Gambar digeser untuk melihat perspektif lain.
          </p>
          
          <div class="mt-2 text-center lg:text-left">
            <a 
              href="/spesifikasi" 
              class="group inline-flex w-max items-center justify-center gap-x-3 rounded-full bg-[#C1121F] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C1121F]/20 transition-all duration-300 hover:bg-[#003049] hover:shadow-2xl hover:shadow-[#003049]/30 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C1121F]"
            >
              <span>Lihat Spesifikasi Lengkap</span>
              <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Carousel (Right) -->
        <!-- Modifikasi 3: Area gambar mendapatkan span-8. Padding/margin dikurangi agar gambar fully pop out dan dominan -->
        <div class="lg:col-span-8 relative w-full overflow-hidden rounded-[2.5rem] bg-gray-50 border-[1.5px] border-gray-100 shadow-2xl shadow-slate-200/50 group" @mouseleave="hideHotspot">
          
          <!-- Slider Track -->
          <div 
            class="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-full" 
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            
            <!-- Slide 0: Part 1 -->
            <!-- Modifikasi 4: Padding wrapper gambar diperkecil sehingga gambar dapat tampil lebih makismal -->
            <div class="w-full shrink-0 relative flex items-center justify-center px-2 py-6 sm:px-6 sm:py-10 h-full select-none">
              <div class="relative w-full max-w-full">
                <!-- Gambar Leanbot menjadi lebih dominan di dalam card -->
                <img 
                  :src="leanbotPart1.src" 
                  alt="Leanbot Standard Components Part 1" 
                  class="w-full h-auto drop-shadow-[0_15px_45px_rgba(0,0,0,0.12)] object-contain mix-blend-multiply mix-blend-normal"
                  draggable="false"
                />

                <!-- Hotspots for Part 1 -->
                <div 
                  v-for="spot in hotspotsPart1" 
                  :key="spot.id"
                  class="absolute z-20"
                  :style="{ top: spot.y + '%', left: spot.x + '%' }"
                >
                  <button
                    type="button"
                    @mouseenter="showHotspot(spot.id)"
                    @click.prevent="toggleHotspot(spot.id)"
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C1121F] text-white flex items-center justify-center font-bold text-[0.65rem] sm:text-xs md:text-sm leading-none text-nowrap rounded-md font-sans transition-all duration-300 outline-none opacity-0 hover:z-30 lg:px-4 lg:py-1.5 md:px-3 md:py-1 sm:px-2.5 sm:py-1 px-2 py-1 transform-gpu"
                    :class="activeHotspot === spot.id ? 'opacity-100 scale-[1.15] shadow-[0_0_20px_rgba(193,18,31,0.5)] z-30 ring-2 ring-white' : 'hover:opacity-100 hover:scale-[1.1] hover:shadow-xl'"
                  >
                    {{ spot.name }}
                  </button>

                  <!-- Tooltip Box -->
                  <div 
                    v-if="activeHotspot === spot.id"
                    class="absolute w-56 sm:w-72 max-w-[80vw] p-4 sm:p-5 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 z-50 pointer-events-none fade-in transform-gpu"
                    style="top: 100%; left: 50%; transform: translateX(-50%) translateY(14px);"
                  >
                    <div class="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 border-t border-l border-gray-900/5"></div>
                    <h4 class="relative z-10 font-bold text-[#003049] text-sm sm:text-base mb-2 line-clamp-2 border-b border-gray-100 pb-2 leading-tight">{{ spot.name }}</h4>
                    <p class="relative z-10 text-xs sm:text-sm text-gray-600 leading-relaxed mt-2 font-medium">{{ spot.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 1: Part 2 -->
            <div class="w-full shrink-0 relative flex items-center justify-center px-2 py-6 sm:px-6 sm:py-10 h-full select-none">
              <div class="relative w-full max-w-full">
                <!-- Gambar Leanbot menjadi lebih dominan di dalam card -->
                <img 
                  :src="leanbotPart2.src" 
                  alt="Leanbot Standard Components Part 2" 
                  class="w-full h-auto drop-shadow-[0_15px_45px_rgba(0,0,0,0.12)] object-contain mix-blend-normal"
                  draggable="false"
                />

                <!-- Hotspots for Part 2 -->
                <div 
                  v-for="spot in hotspotsPart2" 
                  :key="spot.id"
                  class="absolute z-20"
                  :style="{ top: spot.y + '%', left: spot.x + '%' }"
                >
                  <button
                    type="button"
                    @mouseenter="showHotspot(spot.id)"
                    @click.prevent="toggleHotspot(spot.id)"
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C1121F] text-white flex items-center justify-center font-bold text-[0.65rem] sm:text-xs md:text-sm leading-none text-nowrap rounded-md font-sans transition-all duration-300 outline-none opacity-0 hover:z-30 lg:px-4 lg:py-1.5 md:px-3 md:py-1 sm:px-2.5 sm:py-1 px-2 py-1 transform-gpu"
                    :class="activeHotspot === spot.id ? 'opacity-100 scale-[1.15] shadow-[0_0_20px_rgba(193,18,31,0.5)] z-30 ring-2 ring-white' : 'hover:opacity-100 hover:scale-[1.1] hover:shadow-xl'"
                  >
                    {{ spot.name }}
                  </button>

                  <div 
                    v-if="activeHotspot === spot.id"
                    class="absolute w-56 sm:w-72 max-w-[80vw] p-4 sm:p-5 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 z-50 pointer-events-none fade-in transform-gpu"
                    style="top: 100%; left: 50%; transform: translateX(-50%) translateY(14px);"
                  >
                    <div class="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 border-t border-l border-gray-900/5"></div>
                    <h4 class="relative z-10 font-bold text-[#003049] text-sm sm:text-base mb-2 line-clamp-2 border-b border-gray-100 pb-2 leading-tight">{{ spot.name }}</h4>
                    <p class="relative z-10 text-xs sm:text-sm text-gray-600 leading-relaxed mt-2 font-medium">{{ spot.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Carousel Controls -->
          <button 
            @click.prevent="prevSlide" 
            class="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-md text-[#003049] hover:text-[#C1121F] hover:bg-white hover:scale-110 transition-all duration-300 outline-none z-40 opacity-0 group-hover:opacity-100 border border-gray-100"
            aria-label="Previous Slide"
          >
            <svg class="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click.prevent="nextSlide" 
            class="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-md text-[#003049] hover:text-[#C1121F] hover:bg-white hover:scale-110 transition-all duration-300 outline-none z-40 opacity-0 group-hover:opacity-100 border border-gray-100"
            aria-label="Next Slide"
          >
            <svg class="h-6 w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Carousel Indicators -->
          <div class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40">
            <button 
              v-for="idx in totalSlides" :key="idx" 
              @click.prevent="currentSlide = idx - 1"
              class="h-2 sm:h-2.5 rounded-full transition-all duration-500 outline-none"
              :class="currentSlide === idx - 1 ? 'w-10 sm:w-12 bg-[#C1121F] shadow-[0_0_12px_rgba(193,18,31,0.5)]' : 'w-2.5 sm:w-3 bg-gray-300/80 hover:bg-gray-400'"
              :aria-label="`Go to slide ${idx}`"
            ></button>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-in { animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes fadeIn { 
  from { opacity: 0; transform: translateX(-50%) translateY(5px) scale(0.95); } 
  to { opacity: 1; transform: translateX(-50%) translateY(14px) scale(1); } 
}
</style>
