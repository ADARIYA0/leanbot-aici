import edu1 from '../assets/images/edu-1-hd.jpg';
import edu2 from '../assets/images/edu-2-hd.jpg';
import edu3 from '../assets/images/edu-3-hd.jpg';
import edu4 from '../assets/images/edu-4-hd.jpg';

export const categories = [
  'Semua Artikel',
  'Robotika',
  'Metaverse',
  'Kurikulum K-12',
  'Metodologi'
];

export const articles = [
  {
    id: 1,
    slug: 'pentingnya-integrasi-stem-di-sekolah-dasar',
    title: 'Pentingnya Integrasi STEM di Kurikulum Sekolah Dasar',
    excerpt: 'Mempelajari bagaimana pendekatan sains, teknologi, teknik, dan matematika (STEM) sejak dini mampu meningkatkan pemikiran kritis siswa.',
    date: '14 Mar 2026',
    category: 'Kurikulum K-12',
    image: edu1.src, // Store the resolved string path
    readTime: '5 min read',
    content: `
      <h2>Membangun Pondasi Logika Sejak Dini</h2>
      <p>Pendidikan STEM (Science, Technology, Engineering, and Mathematics) bukan sekadar tren akademis, melainkan kebutuhan esensial di era digital. Memperkenalkan STEM di sekolah dasar membantu anak-anak memahami dunia di sekitar mereka tidak hanya secara teoritis, tetapi juga praktis.</p>
      
      <h2>Mengapa Sekolah Dasar?</h2>
      <p>Anak-anak secara alami memiliki rasa ingin tahu yang tinggi. Mereka suka mengeksplorasi, membongkar, dan mencari tahu bagaimana sesuatu bekerja. Mengintegrasikan STEM pada usia ini berarti menyalurkan rasa ingin tahu alami mereka ke dalam pemikiran yang terstruktur dan kritis.</p>
      <ul>
        <li><strong>Sains:</strong> Memahami fenomena alam dan hukum fisika dasar.</li>
        <li><strong>Teknologi:</strong> Menggunakan alat untuk memecahkan masalah.</li>
        <li><strong>Engineering (Teknik):</strong> Merancang dan membangun solusi fisik (seperti merakit robot Leanbot).</li>
        <li><strong>Matematika:</strong> Menganalisis data, menghitung probabilitas, dan memahami pola.</li>
      </ul>

      <h2>Peran Robotika dalam STEM</h2>
      <p>Robotika adalah pintu masuk yang paling menyenangkan untuk STEM. Daripada mempelajari coding lewat layar kosong, berinteraksi langsung dengan robot fisik seperti Leanbot memberikan umpan balik instan (<em>instant feedback</em>). Saat siswa memprogram robot untuk maju sejauh 10 cm, mereka langsung melihat hasilnya secara nyata, mengukuhkan konsep matematika dan fisika sekaligus.</p>
    `
  },
  {
    id: 2,
    slug: 'mengenal-teknologi-digital-twin-pada-leanbot',
    title: 'Mengenal Teknologi Digital Twin pada Leanbot',
    excerpt: 'Digital twin adalah jembatan antara dunia nyata dan metaverse. Pelajari bagaimana robot virtual Leanbot meniru perilaku aslinya.',
    date: '10 Mar 2026',
    category: 'Metaverse',
    image: edu2.src,
    readTime: '4 min read',
    content: `
      <h2>Apa itu Digital Twin?</h2>
      <p>Secara sederhana, Digital Twin adalah representasi atau replika virtual dari sebuah objek fisik. Dalam konteks Leanbot, setiap robot fisik yang dirakit oleh siswa memiliki "kembaran" identik di dalam dunia virtual (Metaverse).</p>

      <h2>Bagaimana Cara Kerjanya?</h2>
      <p>Saat seorang siswa memprogram Leanbot fisik mereka untuk bergerak melewati labirin di atas meja, instruksi kode yang sama dapat dijalankan pada kembaran virtualnya di layar komputer. Keduanya akan bergerak dengan kecepatan, sudut baca sensor, dan respon yang persis sama.</p>

      <h2>Keuntungan Belajar dengan Digital Twin</h2>
      <p>Banyak sekolah menghadapi kendala tidak memiliki cukup hardware untuk setiap siswa, atau siswa ingin belajar dari rumah di mana mereka tidak bisa membawa pulang peralatan sekolah.</p>
      <p>Dengan teknologi Digital Twin Leanbot, siswa bisa menulis kode, mengujinya, dan melihat simulasi fisik nyata seutuhnya di dalam komputer, sebelum akhirnya mengunggah kode yang sempurna tersebut ke robot fisik di dunia nyata.</p>
    `
  },
  {
    id: 3,
    slug: 'pembelajaran-berbasis-proyek-pbl-robotika',
    title: 'Pembelajaran Berbasis Proyek (PBL) dalam Robotika',
    excerpt: 'Siswa tidak sekadar menghafal, tetapi menciptakan sirkuit, merakit komponen, dan memecahkan tantangan dunia nyata dengan Leanbot.',
    date: '5 Mar 2026',
    category: 'Metodologi',
    image: edu3.src,
    readTime: '7 min read',
    content: `
      <h2>Dari Teori ke Praktik</h2>
      <p>Pendekatan tradisional dalam pendidikan seringkali berfokus pada penghafalan teori tanpa konteks aplikasi yang jelas. Pembelajaran Berbasis Proyek (<em>Project-Based Learning</em> / PBL) membalik paradigma ini: siswa belajar suatu konsep dengan cara membangun sesuatu secara nyata.</p>

      <h2>Studi Kasus: Membangun Sistem Lengan Robot</h2>
      <p>Misalnya, saat mempelajari tentang rasio roda gigi (<em>gear ratio</em>) dan torsi, siswa tidak hanya membaca buku teks fisika. Dengan Leanbot, mereka ditantang untuk membangun lengan capit mekanis yang mampu mengangkat beban spesifik.</p>
      <p>Melalui proses trial and error, diskusi tim, dan revisi desain, konsep abstrak fisika tersebut terinternalisasi secara alami. Mereka mengerti <em>mengapa</em> gigi yang lebih besar menghasilkan torsi lebih besar karena lengan robot mereka berhasil (atau gagal) mengangkat beban tersebut.</p>
    `
  },
  {
    id: 4,
    slug: 'cara-mulai-belajar-coding-dengan-block-programming',
    title: 'Cara Mulai Belajar Coding dengan Block Programming',
    excerpt: 'Panduan langkah demi langkah visual yang ramah anak untuk memperkenalkan logika pemrograman dasar tanpa menulis sintaks.',
    date: '28 Feb 2026',
    category: 'Robotika',
    image: edu4.src,
    readTime: '6 min read',
    content: `
      <h2>Mengapa Block Programming?</h2>
      <p>Bagi anak-anak dan pemula yang sama sekali belum pernah menyentuh baris kode, melihat sintaks berbasis teks seperti C++ atau Python bisa sangat mengintimidasi (dan rentan error pengetikan seperti kurang titik-koma).</p>
      <p><em>Block programming</em> mengatasi hambatan sintaks ini. Layaknya menyusun balok Lego, pengguna hanya perlu menarik dan melepaskan (<em>drag-and-drop</em>) instruksi yang sudah berwujud balok visual.</p>

      <h2>Membangun Logika Tanpa Frustrasi Sintaks</h2>
      <p>Fokus utama block programming adalah mengajarkan <strong>logika berpikir algoritmik</strong> (urutan kejadian, pengulangan/looping, percabangan IF-ELSE). Setelah pondasi logika ini terbangun kuat tanpa rasa takut terhadap pesan error sintaks, transisi mereka menuju bahasa pemrograman teks murni nantinya akan jauh lebih mudah dan intuitif.</p>
    `
  }
];
