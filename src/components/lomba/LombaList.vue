<script setup lang="ts">
interface Competition {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  organizer: string | null;
  category: string | null;
  registration_start: string | null;
  registration_end: string | null;
  location_mode: string | null;
  location_text: string | null;
  source_url: string | null;
  status: string;
}

const props = defineProps<{
  competitions: Competition[];
}>();

const getStatusLabel = (comp: Competition): string => {
  if (!comp.registration_start && !comp.registration_end) return 'Info';
  const now = new Date();
  const start = comp.registration_start ? new Date(comp.registration_start) : null;
  const end = comp.registration_end ? new Date(comp.registration_end) : null;

  if (start && now < start) return 'Segera Hadir';
  if (end && now > end) return 'Ditutup';
  return 'Pendaftaran Dibuka';
};

const getStatusColor = (label: string) => {
  switch (label) {
    case 'Pendaftaran Dibuka':
      return 'bg-green-100 text-green-800 ring-green-600/20';
    case 'Segera Hadir':
      return 'bg-blue-100 text-blue-800 ring-blue-600/20';
    case 'Ditutup':
      return 'bg-gray-100 text-gray-600 ring-gray-500/20';
    default:
      return 'bg-amber-100 text-amber-800 ring-amber-600/20';
  }
};

const formatDate = (dateStr: string | null): string => {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};

const formatDateRange = (comp: Competition): string => {
  const start = formatDate(comp.registration_start);
  const end = formatDate(comp.registration_end);
  if (start === '—' && end === '—') return '—';
  if (start === '—') return `s/d ${end}`;
  if (end === '—') return `${start} — ...`;
  return `${start} — ${end}`;
};

/**
 * Location display logic:
 * - offline → show location_text directly (e.g. "Doha, Qatar")
 * - online  → show "Online"
 * - both    → show "Online & Offline"
 */
const getLocationDisplay = (comp: Competition): string => {
  if (comp.location_mode === 'online') return 'Sepenuhnya Online';
  if (comp.location_mode === 'both') return 'Online & Offline';
  // offline → show the actual location text
  return comp.location_text || '—';
};

const getCategoryTags = (category: string | null): string[] => {
  if (!category) return [];
  return category.split(',').map(t => t.trim()).filter(Boolean);
};
</script>

<template>
  <section id="competitions-list" class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-xs font-bold uppercase tracking-widest text-leanbot-red">Daftar Kompetisi</h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-leanbot-navy sm:text-4xl">Kompetisi & Event Terkait</p>
        <p class="mt-4 text-base text-gray-600">Klik tautan pendaftaran untuk menuju syarat, ketentuan, dan pendaftaran resmi pada situs web tiap penyelenggara.</p>
      </div>

      <div v-if="props.competitions.length === 0" class="text-center py-20">
        <p class="text-4xl mb-4">🏆</p>
        <h4 class="text-xl font-bold text-leanbot-navy mb-2">Belum ada kompetisi tersedia</h4>
        <p class="text-gray-500">Informasi kompetisi akan segera ditampilkan.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <article 
          v-for="comp in props.competitions" 
          :key="comp.id"
          class="flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-leanbot-red/30"
        >
          <div class="flex items-center gap-x-4 w-full justify-between">
            <time class="text-sm font-semibold tracking-widest uppercase text-aici-blue">
              {{ formatDateRange(comp) }}
            </time>
            <span :class="['inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset', getStatusColor(getStatusLabel(comp))]">
              {{ getStatusLabel(comp) }}
            </span>
          </div>

          <div class="group relative mt-6">
            <h3 class="text-2xl font-bold leading-tight text-leanbot-navy group-hover:text-leanbot-red transition-colors duration-200">
              <a :href="comp.source_url || '#'" target="_blank" rel="noopener noreferrer">
                <span class="absolute inset-0"></span>
                {{ comp.title }}
              </a>
            </h3>
            <p v-if="comp.organizer" class="mt-2 text-sm text-gray-500 font-medium tracking-wide">Penyelenggara: <span class="font-bold text-gray-700">{{ comp.organizer }}</span></p>
            <p v-if="comp.excerpt" class="mt-4 line-clamp-3 text-base leading-relaxed text-gray-600">{{ comp.excerpt }}</p>
          </div>

          <!-- Tags -->
          <div v-if="getCategoryTags(comp.category).length" class="mt-6 flex flex-wrap gap-2">
            <span v-for="tag in getCategoryTags(comp.category)" :key="tag" class="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {{ tag }}
            </span>
          </div>

          <div class="mt-8 flex items-center justify-between w-full border-t border-gray-100 pt-6">
            <div class="flex items-center gap-x-2 text-sm text-gray-500 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ getLocationDisplay(comp) }}
            </div>
            
            <a 
              v-if="comp.source_url"
              :href="comp.source_url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="relative z-10 inline-flex items-center gap-x-2 rounded-lg bg-leanbot-navy px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-leanbot-red"
            >
              Kunjungi Web
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
