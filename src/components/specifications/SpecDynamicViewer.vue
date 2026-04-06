<script setup lang="ts">
import { ref, computed } from 'vue';
import { leanbotVersions, type LeanbotVersionData } from '../../data/leanbot-specs';
import SpecVisualHotspots from './SpecVisualHotspots.vue';
import SpecAccessories from './SpecAccessories.vue';
import SpecDetailedInfo from './SpecDetailedInfo.vue';

// State
const activeVersionId = ref(leanbotVersions[0].id);

// Computeds
const activeVersion = computed<LeanbotVersionData>(() => {
  return leanbotVersions.find((v) => v.id === activeVersionId.value) || leanbotVersions[0];
});

// Methods
const setVersion = (id: string) => {
  activeVersionId.value = id;
};
</script>

<template>
  <div class="bg-gray-50 pb-24 pt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Version Carousel / Selector -->
      <div class="mb-12 flex justify-center">
        <div class="inline-flex rounded-full bg-white p-1.5 shadow-sm ring-1 ring-gray-200">
          <button
            v-for="version in leanbotVersions"
            :key="version.id"
            @click="setVersion(version.id)"
            class="relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none"
            :class="[
              activeVersionId === version.id
                ? 'bg-leanbot-navy text-white shadow-md'
                : 'text-gray-500 hover:text-leanbot-navy hover:bg-gray-100'
            ]"
          >
            {{ version.name }}
          </button>
        </div>
      </div>

      <!-- Version Header Info with Transition -->
      <transition name="fade-slide" mode="out-in">
        <div :key="activeVersion.id" class="text-center mb-16 max-w-3xl mx-auto">
          <div class="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-leanbot-red ring-1 ring-inset ring-red-600/10 mb-4">
            {{ activeVersion.badge }}
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Leanbot {{ activeVersion.name }}
          </h2>
          <p class="text-xl font-medium text-leanbot-navy mb-4">
            {{ activeVersion.tagline }}
          </p>
          <p class="text-lg text-gray-600">
            {{ activeVersion.description }}
          </p>
        </div>
      </transition>

      <!-- Main Visual and Additional Parts -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
        <!-- Visual Hotspots Viewer -->
        <div class="lg:col-span-7">
          <SpecVisualHotspots :version="activeVersion" />
        </div>

        <!-- Additional Accessories & Highlights -->
        <div class="lg:col-span-5">
           <SpecAccessories :version="activeVersion" />
        </div>
      </div>

      <!-- Detailed Specs Tabs -->
      <div class="mt-24">
        <SpecDetailedInfo :version="activeVersion" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
