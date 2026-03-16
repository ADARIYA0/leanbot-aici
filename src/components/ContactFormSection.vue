<script setup>
import hdImage from '../assets/images/contact-hd.jpg';
import aiciLogo from '../assets/logo/aici/blue/aici.webp';
import leanbotLogo from '../assets/logo/leanbot.png';
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
           
           <form action="#" method="POST" class="space-y-6">
             <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
               
               <!-- Nama -->
               <div class="sm:col-span-2">
                 <label for="nama" class="block text-sm font-semibold leading-6 text-gray-900">Nama Lengkap</label>
                 <div class="mt-2.5">
                   <input type="text" name="nama" id="nama" autocomplete="name" class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow" placeholder="Hiskia Harun">
                 </div>
               </div>

               <!-- Instansi -->
               <div>
                 <label for="instansi" class="block text-sm font-semibold leading-6 text-gray-900">Asal Instansi/Sekolah</label>
                 <div class="mt-2.5">
                   <input type="text" name="instansi" id="instansi" class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow" placeholder="SDIT Cempaka">
                 </div>
               </div>

               <!-- Email -->
               <div>
                 <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Alamat Email</label>
                 <div class="mt-2.5">
                   <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow" placeholder="hiskia@example.com">
                 </div>
               </div>

               <!-- Subjek -->
               <div class="sm:col-span-2">
                 <label for="subjek" class="block text-sm font-semibold leading-6 text-gray-900">Subjek Pesan</label>
                 <div class="mt-2.5">
                   <input type="text" name="subjek" id="subjek" class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow" placeholder="Penawaran Kerja Sama Edukasi">
                 </div>
               </div>

               <!-- Pesan -->
               <div class="sm:col-span-2">
                 <label for="pesan" class="block text-sm font-semibold leading-6 text-gray-900">Isi Pesan</label>
                 <div class="mt-2.5">
                   <textarea name="pesan" id="pesan" rows="4" class="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-leanbot-red sm:text-sm sm:leading-6 transition-shadow resize-none" placeholder="Tuliskan detail pertanyaan atau pesan Anda di sini..."></textarea>
                 </div>
               </div>
             </div>

             <!-- Button Submit -->
             <div class="mt-8">
               <button type="button" class="group flex w-full items-center justify-center gap-x-2 rounded-xl bg-leanbot-red px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-leanbot-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leanbot-red transition-all shadow-red-500/30">
                 Kirim Pesan Sekarang
                 <svg class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </button>
             </div>
             
           </form>
        </div>

      </div>

    </div>
  </div>
</template>
