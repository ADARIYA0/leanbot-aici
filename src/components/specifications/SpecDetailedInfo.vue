<script setup lang="ts">
import type { LeanbotVersionData } from '../../data/leanbot-specs';

const props = defineProps<{
  version: LeanbotVersionData;
}>();
</script>

<template>
  <div class="bg-white rounded-3xl p-6 lg:p-12 shadow-xl ring-1 ring-gray-900/5">
    <div class="mb-10 border-b border-gray-200 pb-5">
      <h3 class="text-2xl font-bold leading-6 text-gray-900">
        Spesifikasi Detail: {{ version.name }}
      </h3>
      <p class="mt-2 max-w-4xl text-sm text-gray-500">
        Jelajahi setiap komponen teknis yang mendasari kecerdasan sistem pada versi ini.
      </p>
    </div>

    <transition name="fade-slide" mode="out-in">
      <div :key="version.id" class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        
        <div v-for="(specSection, sIdx) in version.specs" :key="sIdx" class="relative">
          <h4 class="text-lg font-semibold text-leanbot-navy flex items-center mb-6">
            <span class="bg-gray-100 rounded-lg p-2 mr-3 text-leanbot-red">
               <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
            </span>
            {{ specSection.title }}
          </h4>
          <dl class="divide-y divide-gray-100 border-t border-gray-200">
            <div v-for="(item, iIdx) in specSection.items" :key="iIdx" class="py-3.5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-900">{{ item.label }}</dt>
              <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{{ item.value }}</dd>
            </div>
          </dl>
        </div>

      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
