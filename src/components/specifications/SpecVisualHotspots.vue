<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { LeanbotVersionData, ComponentDetail } from '../../data/leanbot-specs';

const props = defineProps<{
  version: LeanbotVersionData;
}>();

const hoveredComponent = ref<ComponentDetail | null>(null);

const setHover = (comp: ComponentDetail | null) => {
  hoveredComponent.value = comp;
};

watch(() => props.version.id, () => {
  hoveredComponent.value = null;
});

// Build flat list of hotspot markers for the active version
const allHotspots = computed(() => {
  const spots: { comp: ComponentDetail; x: number; y: number; imgIdx: number }[] = [];

  if (props.version.id === 'standard') {
    // Standard: show components 1-12 hotspots on its own images
    props.version.components.forEach(comp => {
      comp.positions.forEach(pos => {
        spots.push({ comp, x: pos.x, y: pos.y, imgIdx: pos.imageIndex });
      });
    });
  } else {
    // Advanced/IoT: ONLY show their exclusive accessories (13-17 or 18-23)
    props.version.accessories.forEach(comp => {
      comp.positions.forEach(pos => {
        spots.push({ comp, x: pos.x, y: pos.y, imgIdx: pos.imageIndex });
      });
    });
  }

  return spots;
});

// Legend: Standard shows 1-12, Advanced/IoT shows only their exclusive accessories
const legendComponents = computed(() => {
  if (props.version.id === 'standard') {
    return props.version.components;
  }
  return props.version.accessories;
});
</script>

<template>
  <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-xl ring-1 ring-gray-900/5 relative overflow-hidden">
    <!-- Version Label -->
    <div class="absolute top-6 left-6 z-10">
      <span
        class="inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-white shadow-sm"
        :style="{ backgroundColor: version.badgeColor }"
      >
        {{ version.name }} View
      </span>
    </div>

    <!-- Image Viewer -->
    <transition name="fade" mode="out-in">
      <div :key="version.id" class="mt-8">
        <div class="space-y-6">
          <!--
            CRITICAL: The image container must be 'relative' with NO flex centering.
            The image fills the container width with 'block w-full h-auto'
            so that percentage-based hotspot positions exactly match the image pixels.
          -->
          <div
            v-for="(image, index) in version.images"
            :key="index"
            class="relative w-full rounded-xl overflow-hidden"
          >
            <img
              :src="image"
              :alt="`Leanbot ${version.name} Component View ${index + 1}`"
              class="block w-full h-auto"
            />

            <!-- Invisible hover targets placed exactly on top of existing image circles -->
            <template v-for="(spot, sIdx) in allHotspots" :key="`${spot.comp.id}-${sIdx}`">
              <div
                v-if="spot.imgIdx === index"
                class="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                :style="{ left: spot.x + '%', top: spot.y + '%' }"
                @mouseenter="setHover(spot.comp)"
                @mouseleave="setHover(null)"
              >
                <!-- Invisible hit area (larger than the circle for easy hover) -->
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200"
                  :class="hoveredComponent?.id === spot.comp.id ? 'ring-3 ring-offset-2' : ''"
                  :style="hoveredComponent?.id === spot.comp.id ? { '--tw-ring-color': version.badgeColor } : {}"
                >
                </div>

                <!-- Tooltip -->
                <div
                  v-if="hoveredComponent?.id === spot.comp.id"
                  class="absolute left-1/2 -translate-x-1/2 -top-22 bg-white w-56 p-3.5 rounded-xl shadow-2xl ring-1 ring-gray-900/5 text-sm z-30 pointer-events-none"
                >
                  <div class="flex items-center gap-2 mb-1.5">
                    <span
                      class="flex-shrink-0 w-6 h-6 rounded-full text-white text-[11px] font-bold flex items-center justify-center shadow-sm"
                      :style="{ backgroundColor: version.badgeColor }"
                    >
                      {{ spot.comp.id }}
                    </span>
                    <p class="font-bold text-gray-900 text-sm leading-tight">{{ spot.comp.name }}</p>
                  </div>
                  <p class="text-xs text-gray-500 pl-8">{{ spot.comp.description }}</p>
                  <div
                    class="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"
                  ></div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>

    <!-- Legend / Component List -->
    <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-6 border-t border-gray-100">
      <div
        v-for="comp in legendComponents"
        :key="comp.id"
        class="text-xs flex items-start space-x-2 py-1.5 px-2 rounded-lg transition-colors duration-200 cursor-pointer"
        :class="hoveredComponent?.id === comp.id ? 'bg-gray-100' : ''"
        @mouseenter="setHover(comp)"
        @mouseleave="setHover(null)"
      >
        <span
          class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors duration-200"
          :style="{
            backgroundColor: hoveredComponent?.id === comp.id ? version.badgeColor : '#f3f4f6',
            color: hoveredComponent?.id === comp.id ? 'white' : '#374151',
          }"
        >
          {{ comp.id }}
        </span>
        <span class="leading-tight text-gray-700">{{ comp.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
