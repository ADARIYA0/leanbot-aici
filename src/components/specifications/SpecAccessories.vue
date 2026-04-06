<script setup lang="ts">
import type { LeanbotVersionData } from '../../data/leanbot-specs';
import { computed } from 'vue';

const props = defineProps<{
  version: LeanbotVersionData;
}>();

// Menambahkan pengecekan versi untuk menunjukkan Standard vs Advanced diffs
const isStandard = computed(() => props.version.id === 'standard');

</script>

<template>
  <div class="h-full flex flex-col">
    <transition name="slide-up" mode="out-in">
      <div :key="version.id" class="bg-white rounded-3xl p-6 lg:p-8 shadow-xl ring-1 ring-gray-900/5 h-full flex flex-col">
        
        <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 class="text-xl font-bold text-gray-900 flex items-center gap-3">
            <svg class="h-6 w-6 text-leanbot-red" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
            </svg>
            {{ version.accessoriesTitle }}
          </h3>
          <span v-if="version.accessoriesBadge" class="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-leanbot-red ring-1 ring-inset ring-red-600/10">
            {{ version.accessoriesBadge }}
          </span>
        </div>

        <div v-if="isStandard" class="flex-1 flex items-center justify-center py-12">
           <div class="text-center">
             <div class="bg-gray-50 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m0 0l5.667-5.667m-5.667 5.667L5.17 5.17a2.652 2.652 0 00-3.75 3.75l5.83 5.83m0 0l-5.667 5.667" />
                </svg>
             </div>
             <p class="text-sm font-medium text-gray-900">Termasuk Komponen Esensial</p>
             <p class="text-sm text-gray-500 mt-1 max-w-xs mx-auto">Versi Standard mencakup semua sensor dasar untuk line-following, rintangan, dan interaksi fisik (gripper).</p>
           </div>
        </div>

        <div v-else class="flex-1 overflow-hidden">
          <ul class="divide-y divide-gray-100">
            <li v-for="acc in version.accessories" :key="acc.id" class="flex items-start gap-4 py-4 first:pt-0 group">
               <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-leanbot-navy/5 text-leanbot-navy font-bold text-xs ring-1 ring-inset ring-gray-900/5 group-hover:bg-leanbot-navy group-hover:text-white transition-colors">
                 {{ acc.id }}
               </div>
               <div class="min-w-0 flex-1">
                 <p class="text-sm font-semibold text-gray-900">
                   {{ acc.name }}
                 </p>
                 <p class="text-sm text-gray-500 truncate mt-0.5">
                   {{ acc.description }}
                 </p>
               </div>
               <div class="flex-shrink-0 text-sm text-gray-500 text-right font-medium">
                 {{ acc.count }}
               </div>
            </li>
          </ul>

          <div class="mt-6 rounded-lg bg-blue-50 p-4 border border-blue-100">
             <div class="flex items-start">
              <div class="shrink-0">
                <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3 flex-1 md:flex md:justify-between">
                <p class="text-sm text-blue-700">Versi ini juga termasuk seluruh komponen <b>Standard</b> (nomor 1-12) yang terpasang di Main Body.</p>
              </div>
             </div>
          </div>
        </div>

      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
