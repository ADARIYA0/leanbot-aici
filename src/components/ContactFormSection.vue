<script setup>
import { ref, reactive } from 'vue';
import hdImage from '../assets/images/contact-hd.jpg';
import aiciLogo from '../assets/logo/aici/blue/aici.webp';
import leanbotLogo from '../assets/logo/leanbot.png';

// Web3Forms Access Key — replace with your own from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

// Form state
const form = reactive({
  nama: '',
  instansi: '',
  email: '',
  subjek: '',
  pesan: '',
});

const isSubmitting = ref(false);
const submitStatus = ref('idle'); // 'idle' | 'success' | 'error'
const statusMessage = ref('');

// Validation
const errors = reactive({
  nama: '',
  email: '',
  subjek: '',
  pesan: '',
});

const validate = () => {
  let isValid = true;
  
  // Reset errors
  errors.nama = '';
  errors.email = '';
  errors.subjek = '';
  errors.pesan = '';

  if (!form.nama.trim()) {
    errors.nama = 'Nama lengkap wajib diisi';
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Alamat email wajib diisi';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Format email tidak valid';
    isValid = false;
  }

  if (!form.subjek.trim()) {
    errors.subjek = 'Subjek pesan wajib diisi';
    isValid = false;
  }

  if (!form.pesan.trim()) {
    errors.pesan = 'Isi pesan wajib diisi';
    isValid = false;
  } else if (form.pesan.trim().length < 10) {
    errors.pesan = 'Pesan minimal 10 karakter';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validate()) return;

  isSubmitting.value = true;
  submitStatus.value = 'idle';
  statusMessage.value = '';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `[AiCI Contact] ${form.subjek}`,
        from_name: 'AiCI Leanbot Website',
        name: form.nama,
        email: form.email,
        instansi: form.instansi || '-',
        subjek: form.subjek,
        message: form.pesan,
        // Anti-spam honeypot
        botcheck: '',
      }),
    });

    const data = await response.json();

    if (data.success) {
      submitStatus.value = 'success';
      statusMessage.value = 'Pesan Anda berhasil terkirim! Kami akan segera menghubungi Anda.';
      // Reset form
      form.nama = '';
      form.instansi = '';
      form.email = '';
      form.subjek = '';
      form.pesan = '';
    } else {
      throw new Error(data.message || 'Terjadi kesalahan saat mengirim pesan.');
    }
  } catch (err) {
    submitStatus.value = 'error';
    statusMessage.value = err.message || 'Gagal mengirim pesan. Silakan coba lagi atau hubungi kami melalui email langsung.';
  } finally {
    isSubmitting.value = false;
  }
};

const resetStatus = () => {
  submitStatus.value = 'idle';
  statusMessage.value = '';
};
</script>

<template>
  <div class="bg-surface py-20 sm:py-24 overflow-hidden border-t border-gray-100">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="flex flex-col lg:flex-row bg-white rounded-[2.5rem] shadow-2xl ring-1 ring-gray-200 overflow-hidden">
        
        <!-- Left Side: Interactive Branding Image -->
        <div class="relative w-full lg:w-5/12 min-h-[400px] lg:min-h-full">
           <img :src="hdImage.src" alt="Tim Support AiCI x Leanbot" class="absolute inset-0 w-full h-full object-cover">
           
           <!-- Vibrant gradient overlay -->
           <div class="absolute inset-0 bg-gradient-to-br from-leanbot-navy/80 to-leanbot-red/80 mix-blend-multiply"></div>
           
           <!-- Content on image -->
           <div class="absolute inset-0 p-12 flex flex-col justify-end">
              
              <!-- Glassmorphism Badge -->
              <div class="mb-8 px-6 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl inline-flex flex-row self-start items-center justify-center gap-6">
                 <img :src="aiciLogo.src" alt="AiCI" class="h-10 lg:h-12 w-auto brightness-0 invert opacity-100 drop-shadow-md">
                 <div class="h-10 lg:h-12 w-px bg-white/40"></div>
                 <img :src="leanbotLogo.src" alt="Leanbot" class="h-5 lg:h-6 w-auto brightness-0 invert opacity-100 drop-shadow-md">
              </div>

              <h2 class="text-3xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
                Mari Berkolaborasi
              </h2>
              <p class="text-lg text-white/90 leading-relaxed font-light drop-shadow">
                Titik awal untuk diskusi mendalam mengenai implementasi teknologi AI dan program pengayaan STEM di institusi Anda.
              </p>
           </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="w-full lg:w-7/12 p-8 sm:p-12 lg:p-16">
           <h3 class="text-2xl font-bold tracking-tight text-gray-900 mb-8">Kirim Pesan Langsung</h3>
           
           <!-- Success State -->
           <transition name="fade" mode="out-in">
             <div v-if="submitStatus === 'success'" key="success" class="flex flex-col items-center justify-center py-12 text-center">
               <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                 <svg class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h4 class="text-xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h4>
               <p class="text-gray-600 mb-8 max-w-sm">{{ statusMessage }}</p>
               <button
                 @click="resetStatus"
                 class="inline-flex items-center gap-x-2 rounded-xl bg-leanbot-navy px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-leanbot-navy/90 transition-all"
               >
                 <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                 </svg>
                 Kirim Pesan Lagi
               </button>
             </div>
           </transition>

           <!-- Form -->
           <transition name="fade" mode="out-in">
             <form
               v-if="submitStatus !== 'success'"
               key="form"
               @submit.prevent="handleSubmit"
               class="space-y-6"
             >
               <!-- Hidden honeypot for anti-spam -->
               <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

               <!-- Error Banner -->
               <div
                 v-if="submitStatus === 'error'"
                 class="rounded-xl bg-red-50 p-4 ring-1 ring-inset ring-red-200"
               >
                 <div class="flex items-start">
                   <svg class="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                   </svg>
                   <div class="ml-3">
                     <p class="text-sm font-medium text-red-800">{{ statusMessage }}</p>
                   </div>
                 </div>
               </div>

               <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                 
                 <!-- Nama -->
                 <div class="sm:col-span-2">
                   <label for="nama" class="block text-sm font-semibold leading-6 text-gray-900">Nama Lengkap <span class="text-leanbot-red">*</span></label>
                   <div class="mt-2.5">
                     <input
                       v-model="form.nama"
                       type="text"
                       name="nama"
                       id="nama"
                       autocomplete="name"
                       class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow"
                       :class="errors.nama ? 'ring-red-300' : 'ring-gray-300'"
                       placeholder="Hiskia Harun"
                       @input="errors.nama = ''"
                     >
                     <p v-if="errors.nama" class="mt-1.5 text-xs text-red-500">{{ errors.nama }}</p>
                   </div>
                 </div>

                 <!-- Instansi -->
                 <div>
                   <label for="instansi" class="block text-sm font-semibold leading-6 text-gray-900">Asal Instansi/Sekolah</label>
                   <div class="mt-2.5">
                     <input
                       v-model="form.instansi"
                       type="text"
                       name="instansi"
                       id="instansi"
                       class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow"
                       placeholder="SDIT Cempaka"
                     >
                   </div>
                 </div>

                 <!-- Email -->
                 <div>
                   <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Alamat Email <span class="text-leanbot-red">*</span></label>
                   <div class="mt-2.5">
                     <input
                       v-model="form.email"
                       type="email"
                       name="email"
                       id="email"
                       autocomplete="email"
                       class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow"
                       :class="errors.email ? 'ring-red-300' : 'ring-gray-300'"
                       placeholder="hiskia@example.com"
                       @input="errors.email = ''"
                     >
                     <p v-if="errors.email" class="mt-1.5 text-xs text-red-500">{{ errors.email }}</p>
                   </div>
                 </div>

                 <!-- Subjek -->
                 <div class="sm:col-span-2">
                   <label for="subjek" class="block text-sm font-semibold leading-6 text-gray-900">Subjek Pesan <span class="text-leanbot-red">*</span></label>
                   <div class="mt-2.5">
                     <input
                       v-model="form.subjek"
                       type="text"
                       name="subjek"
                       id="subjek"
                       class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow"
                       :class="errors.subjek ? 'ring-red-300' : 'ring-gray-300'"
                       placeholder="Penawaran Kerja Sama Edukasi"
                       @input="errors.subjek = ''"
                     >
                     <p v-if="errors.subjek" class="mt-1.5 text-xs text-red-500">{{ errors.subjek }}</p>
                   </div>
                 </div>

                 <!-- Pesan -->
                 <div class="sm:col-span-2">
                   <label for="pesan" class="block text-sm font-semibold leading-6 text-gray-900">Isi Pesan <span class="text-leanbot-red">*</span></label>
                   <div class="mt-2.5">
                     <textarea
                       v-model="form.pesan"
                       name="pesan"
                       id="pesan"
                       rows="4"
                       class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow resize-none"
                       :class="errors.pesan ? 'ring-red-300' : 'ring-gray-300'"
                       placeholder="Tuliskan detail pertanyaan atau pesan Anda di sini..."
                       @input="errors.pesan = ''"
                     ></textarea>
                     <p v-if="errors.pesan" class="mt-1.5 text-xs text-red-500">{{ errors.pesan }}</p>
                   </div>
                 </div>
               </div>

               <!-- Button Submit -->
               <div class="mt-8">
                 <button
                   type="submit"
                   :disabled="isSubmitting"
                   class="group flex w-full items-center justify-center gap-x-2 rounded-xl bg-leanbot-red px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-leanbot-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leanbot-red transition-all shadow-red-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                 >
                   <!-- Loading spinner -->
                   <svg
                     v-if="isSubmitting"
                     class="h-5 w-5 animate-spin"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                   >
                     <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                     <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>

                   <span v-if="isSubmitting">Mengirim...</span>
                   <template v-else>
                     Kirim Pesan Sekarang
                     <svg class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   </template>
                 </button>
               </div>
               
             </form>
           </transition>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
