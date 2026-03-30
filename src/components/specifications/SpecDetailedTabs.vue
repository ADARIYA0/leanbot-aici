<script setup>
import { ref } from 'vue'

const activeTab = ref('overview')

const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'hardware', name: 'Hardware & Sensor' },
  { id: 'performa', name: 'Performa' },
  { id: 'software', name: 'Software & Ekosistem' },
  { id: 'varian', name: 'Varian & Aksesoris' },
]

const specsData = {
  overview: [
    { label: 'Berat', value: '400 - 500 gram' },
    { label: 'Dimensi', value: '16 cm x 12 cm x 7 cm (termasuk penjepit)' },
    { label: 'Status Rakitan', value: 'Pra-rakit (Tinggal Pakai)' },
    { label: 'Komponen Utama', value: 'Arduino Nano, PowerBank, Stepper Motors, Servo Motors, Sensors' },
  ],
  hardware: [
    { label: 'Control Board', value: 'Arduino Nano (atau kompatibel), ATmega328P (8-bit, 16MHz)' },
    { label: 'Drive Motors', value: 'Stepper motor (28BYJ-48) x 2 (Differential Drive)' },
    { label: 'Servo Motor', value: 'Servo Motor (SG90) x 2 (Grip, hold, lift 2-4cm, shake objects)' },
    { label: 'Line-following Sensor', value: '6 buah sensor' },
    { label: 'Wall-following Sensor', value: '2 buah sensor' },
    { label: 'Ultrasonic Sensor', value: '1 buah sensor' },
    { label: 'Touch Sensor', value: '4 buah (tergabung pada frame robot)' },
    { label: 'Display & Indikator', value: 'RGB LED 7-pixel circular display, Mini Buzzer' },
    { label: 'Komunikasi', value: 'Bluetooth Module, IR Remote (embedded)' },
    { label: 'Plug-in Sockets', value: 'APDS9960, MPU6050, MAX4466, VL53L0X' },
  ],
  performa: [
    { label: 'Kecepatan Maksimal', value: '~10 cm/s' },
    { label: 'Rotasi Kecepatan', value: '1 - 60 RPM' },
    { label: 'Presisi Rotasi', value: '≤ 2° (Accurate turning)' },
    { label: 'Deviasi Bergerak Lurus', value: '≤ 1% deviation (Mendukung instruksi milimeter)' },
    { label: 'Resolusi Stepper', value: '2038 steps per revolution' },
    { label: 'Kapasitas Baterai', value: '1800mAh (Standard 18650 cell x2 Li-ion rechargeable)' },
    { label: 'Waktu Operasional', value: '3 jam penggunaan nonstop (continuous run time)' },
  ],
  software: [
    { label: 'Bahasa Pemrograman', value: 'Blockly dan C++' },
    { label: 'Editor / IDE', value: 'Arduino Programming IDE (mendukung pustaka khusus Leanbot)' },
    { label: 'Aktivitas Belajar', value: '50+ aktivitas di dalam LMS (Learning Management System)' },
    { label: 'Digital Twin', value: 'Terintegrasi langsung dengan Pythaverse Educational Multiverse' },
    { label: 'Platform Tersertifikasi', value: 'Disarankan menggunakan Google Chrome di Windows / Mac / Chromebook' },
  ],
  varian: [
    { label: 'Standard (untuk SD)', value: 'Rp 5.775.000 (Termasuk SWRP Subscription Rp 1.650.000)' },
    { label: 'Advanced (untuk SMP)', value: 'Rp 6.775.000 (Termasuk SWRP Subscription Rp 1.650.000), Tambahan: Light/Color Sensor, Gyro, Mic, Power Meter' },
    { label: 'IoT (untuk SMA)', value: 'Rp 7.425.000 (Termasuk SWRP Subscription Rp 1.650.000), Tambahan: OLED, Heart Rate, Humidity, Soil Moisture, PIR, Wifi Module' },
  ]
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
    <div class="mb-12 text-center md:text-left">
      <h2 class="text-3xl font-bold text-leanbot-navy">Detail Spesifikasi Teknis</h2>
      <p class="mt-4 text-lg text-gray-600">Jelajahi setiap komponen yang mendasari kecerdasan Leanbot.</p>
    </div>

    <!-- Layout Container: Sidebar Tabs + Content Area -->
    <div class="flex flex-col md:flex-row gap-8 lg:gap-12">
      
      <!-- Tabs Navigation (Vertical on Desktop, Horizontal Scroll on Mobile) -->
      <div class="w-full md:w-1/4 lg:w-1/5 shrink-0">
        <ul class="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
          <li v-for="tab in tabs" :key="tab.id" class="shrink-0">
            <button
              @click="activeTab = tab.id"
              :class="[
                'w-full text-left px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-200 border-2',
                activeTab === tab.id
                  ? 'bg-leanbot-navy text-white border-leanbot-navy shadow-lg shadow-leanbot-navy/20'
                  : 'bg-white text-gray-500 border-transparent hover:bg-gray-50 hover:text-leanbot-navy'
              ]"
            >
              {{ tab.name }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Tab Content Area -->
      <div class="w-full md:w-3/4 lg:w-4/5">
        <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[400px]">
          
          <template v-for="tab in tabs" :key="'content-' + tab.id">
            <div v-if="activeTab === tab.id" class="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 class="text-2xl font-bold text-leanbot-navy mb-8 pb-4 border-b border-gray-100">
                Spesifikasi {{ tab.name }}
              </h3>
              
              <dl class="space-y-6">
                <div 
                  v-for="(spec, index) in specsData[tab.id]" 
                  :key="index"
                  class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 group"
                >
                  <dt class="w-full sm:w-1/3 shrink-0 text-sm font-semibold text-gray-900 flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-leanbot-red/30 group-hover:bg-leanbot-red transition-colors"></div>
                    {{ spec.label }}
                  </dt>
                  <dd class="w-full sm:w-2/3 text-sm text-gray-600 leading-relaxed">
                    {{ spec.value }}
                  </dd>
                </div>
              </dl>
            </div>
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for mobile generic browser behavior */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
