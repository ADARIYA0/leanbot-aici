import blog1 from '../assets/images/blog-1-hd.jpg';
import blog2 from '../assets/images/blog-2-hd.jpg';
import blog3 from '../assets/images/blog-3-hd.jpg';
import blog4 from '../assets/images/blog-4-hd.jpg';
import blog5 from '../assets/images/blog-5-hd.jpg';
import blog6 from '../assets/images/blog-6-hd.jpg';

export const categories = [
  'Semua Artikel',
  'Pengumuman',
  'Teknologi',
  'Komunitas',
  'Event'
];

export const blogs = [
  {
    id: 1,
    slug: 'peluncuran-leanbot-v2-dengan-sensor-ai-baru',
    title: 'Peluncuran Mesin Leanbot V2 dengan Sensor AI Baru',
    excerpt: 'Memperkenalkan generasi terbaru kit robotika kami yang dilengkapi dengan modul penglihatan AI untuk pengenalan warna dan bentuk secara real-time.',
    date: '20 Mar 2026',
    category: 'Pengumuman',
    image: blog1.src,
    readTime: '4 min read',
    content: `
      <h2>Era Baru Robotika Edukasi</h2>
      <p>Kami sangat bangga mengumumkan peluncuran <strong>Leanbot V2</strong>. Pembaruan ini bukanlah sekadar peningkatan perangkat lunak, melainkan perombakan besar-besaran pada arsitektur perangkat keras untuk membawa teknologi kecerdasan buatan (AI) tepat ke genggaman anak-anak.</p>
      
      <h2>Apa yang Baru?</h2>
      <ul>
        <li><strong>Modul Vision AI Kamera:</strong> Memungkinkan robot mengenali marka jalan, membaca rambu warna, dan berinteraksi dengan ekspresi wajah siswa.</li>
        <li><strong>Baterai Tahan Lama:</strong> Peningkatan efisiensi daya hingga 40% (mampu digunakan 6 jam berturut-turut di dalam kelas).</li>
        <li><strong>Sasis Tahan Banting:</strong> Desain plastik injeksi ramah lingkungan yang tahan terhadap benturan keras.</li>
      </ul>

      <h2>Akses ke Digital Twin V2</h2>
      <p>Bersamaan dengan peluncuran model fisik, platform Metaverse Leanbot juga diperbarui untuk mendukung rendering real-time 3D dari sensor modul visi baru ini. Siswa dapat berlatih program Face-Detection secara virtual sebelum mengunggahnya ke Leanbot fisik mereka. Masa depan pembelajaran sudah hadir!</p>
    `
  },
  {
    id: 2,
    slug: 'cara-ai-mengubah-lanskap-pendidikan',
    title: 'Bagaimana AI Mengubah Lanskap Pendidikan di Tahun 2026',
    excerpt: 'Pendidikan tidak lagi statis. Kecerdasan buatan kini mampu menyusun jalur belajar personal untuk menutupi kelemahan setiap siswa.',
    date: '18 Mar 2026',
    category: 'Teknologi',
    image: blog2.src,
    readTime: '6 min read',
    content: `
      <h2>Guru dan Mesin: Bukan Rival, Melainkan Partner</h2>
      <p>Kecemasan bahwa kecerdasan buatan (AI) akan menggantikan peran guru adalah narasi lama yang terbukti tidak tepat sasaran. Pada kenyataannya, di tahun 2026, AI telah bertransformasi menjadi asisten pengajar (Teaching Assistant) paling efektif di kelas.</p>

      <h2>Personalisasi Skala Besar</h2>
      <p>Di kelas konvensional dengan rasio 1 guru untuk 30 siswa, mustahil memberikan perhatian spesifik setiap menitnya. Sistem AI di baliknya, seperti pada platform evaluasi Leanbot, mampu memonitor di titik mana seorang anak sering membuat "bug" dalam kode mereka.</p>
      <p>Sistem ini kemudian merekomendasikan video pendek atau latihan balok visual (Block Programming) tambahan yang spesifik membahas kesalahan konsepsional tersebut, membiarkan guru fokus pada memotivasi dan empati emosional (hal yang tak bisa dilakukan mesin).</p>
    `
  },
  {
    id: 3,
    slug: 'keseruan-kompetisi-leanbot-nasional-2026',
    title: 'Keseruan Kompetisi Leanbot Nasional 2026 di Jakarta',
    excerpt: 'Lebih dari 400 siswa dari seluruh Nusantara berkumpul, memprogram, dan bertanding dalam ajang kompetisi robotika Leanbot Metaverse.',
    date: '15 Mar 2026',
    category: 'Event',
    image: blog3.src,
    readTime: '5 min read',
    content: `
      <h2>Ajang Pembuktian Talenta Muda</h2>
      <p>Akhir pekan lalu, Balai Sidang Jakarta Convention Center beralih fungsi menjadi arena adu pintar mesin cilik. "Kompetisi Leanbot Nasional 2026" berhasil menarik perhatian ribuan penonton dan mempertemukan pelajar SD hingga SMP terbaik dari berbagai provinsi.</p>

      <h2>Dua Kategori Tantangan</h2>
      <p>Tahun ini, kompetisi dibagi menjadi dua kategori yang menuntut presisi dan logika tingkat tinggi:</p>
      <ul>
        <li><strong>Labyrinth Meta-Solve:</strong> Siswa memprogram Leanbot Virtual menggunakan Digital Twin di Metaverse untuk mencari jalan tercepat di labirin acak yang digenerate oleh AI.</li>
        <li><strong>Real-World Rescue:</strong> Robot fisik harus mengambil "korban" jembatan runtuh (blok simulasi) secara otomatis menggunakan Sensor Jarak Ultrasonik tanpa kendali manual remote.</li>
      </ul>

      <p>Selamat kepada tim SDK Tunas Bangsa yang berhasil membawa pulang piala bergilir presiden! Sampai jumpa di turnamen regional tahun depan.</p>
    `
  },
  {
    id: 4,
    slug: 'bergabung-bersama-komunitas-guru-leanbot',
    title: 'Panggilan Pendidik: Bergabunglah di Komunitas Guru Leanbot',
    excerpt: 'Dapatkan akses ke materi ajar eksklusif, webinar mingguan, dan bergabung bersama ribuan guru inovatif lainnya membangun ekosistem STEM.',
    date: '10 Mar 2026',
    category: 'Komunitas',
    image: blog4.src,
    readTime: '3 min read',
    content: `
      <h2>Lebih Kuat Bersama</h2>
      <p>Transisi menuju pendidikan abad 21 yang ditopang kurikulum STEM bisa terasa menakutkan apabila dilakukan sendirian. Mengajarkan hal-hal yang tidak ada di generasi kita (seperti IoT, Metaverse, dan AI) adalah tugas berat seorang pendidik.</p>
      
      <h2>Apa itu Komunitas Guru Leanbot?</h2>
      <p>Kami membentuk forum tertutup, berisikan tenaga pengajar profesional dan pemerhati pendidikan yang memiliki kesamaan visi. Di forum ini, tidak ada pertanyaan yang "terlalu bodoh".</p>
      <p><strong>Fasilitas Anggota:</strong></p>
      <ul>
        <li>Akses RPP (Rencana Pelaksanaan Pembelajaran) spesifik robotika K-12.</li>
        <li>Sesi tanya jawab bulanan bersama Master Trainers dari AiCI.</li>
        <li>Sertifikat kepelatihan digital (EdTech Certification).</li>
      </ul>
      <p>Pendaftaran gelombang ketiga saat ini telah dibuka tanpa pungutan biaya. Mari kita ciptakan kelas yang membahagiakan bersama-sama.</p>
    `
  },
  {
    id: 5,
    slug: 'update-software-leanbot-space-ui-ux',
    title: 'Pembaruan UI/UX Leanbot Space: Lebih Ringan, Lebih Cepat',
    excerpt: 'Tim developer kami baru saja merilis antarmuka baru untuk platform Leanbot Space. Rasakan sensasi platform edukasi yang super mulus.',
    date: '5 Mar 2026',
    category: 'Teknologi',
    image: blog5.src,
    readTime: '4 min read',
    content: `
      <h2>Optimalisasi Kinerja Secara Masif</h2>
      <p>Kami mendengar keluhan pengguna mengenai lambatnya waktu memuat (loading time) Metaverse di perangkat dengan spesifikasi rendah seperti Chromebook. Tim engineering kami telah bekerja keras menulis ulang mesin rendering.</p>
      
      <h2>Transisi ke Arsitektur Micro-Frontends</h2>
      <p>Bagi yang tertarik dengan sisi teknis, pembaruan besar ini dimungkinkan oleh peralihan kami menggunakan <strong>Astro JS dan Vue 3 Composition API</strong>. Dengan fitur Partial Hydration, Leanbot Space kini 60% lebih cepat memuat interaksi canvas 3D.</p>
    `
  },
  {
    id: 6,
    slug: 'tips-menjaga-semangat-siswa-belajar-daring',
    title: 'Tips Menjaga Antusiasme Siswa Belajar Daring',
    excerpt: 'Kelelahan layar (Zoom Fatigue) adalah ancaman nyata. Berikut 5 cara membuat kelas pemrograman berjalan interaktif.',
    date: '1 Mar 2026',
    category: 'Komunitas',
    image: blog6.src,
    readTime: '5 min read',
    content: `
      <h2>Mengalahkan "Zoom Fatigue"</h2>
      <p>Bahkan pembelajaran yang paling menarik seperti Robotika bisa terasa hambar jika hanya disampaikan lewat slide presentasi di video call. Bagaimana cara solusinya?</p>
      <h2>Beri Mereka Kendali</h2>
      <p>Gunakan fitur kolaborasi pada Leanbot IDE (Integrated Development Environment). Arahkan siswa untuk secara bergantian masuk ke sesi "Live Pair Programming", di mana teman sekelas di layar bisa melihat dan ikut memperbaiki balok kode temannya yang salah.</p>
    `
  }
];
