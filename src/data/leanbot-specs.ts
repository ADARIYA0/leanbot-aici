export type ComponentPosition = {
  x: number;
  y: number;
  imageIndex: number;
};

export type ComponentDetail = {
  id: string;
  name: string;
  count: string;
  description: string;
  positions: ComponentPosition[];
};

export type SpecSection = {
  title: string;
  items: { label: string; value: string }[];
};

export type LeanbotVersionData = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  badgeColor: string; // circle color for this version
  images: string[];
  components: ComponentDetail[];
  accessoriesTitle: string;
  accessoriesBadge: string;
  accessories: ComponentDetail[];
  specs: SpecSection[];
};

// ===== STANDARD version components (numbers 1-12) mapped to Standard Image 1 & 2 =====
// Standard Image 1 (Leanbot_Standard-Components.png): 2080×1660
// Standard Image 2 (Leanbot_Standard-Components_Part2.png): 2092×1624

const standardComponents: ComponentDetail[] = [
  {
    id: "1", name: "Arduino Nano Brain", count: "1 pcs",
    description: "USB Type C port",
    positions: [{ x: 72.1, y: 81.9, imageIndex: 0 }]
  },
  {
    id: "2", name: "Stepper Motor", count: "2 pcs",
    description: "Differential drive, 2038 steps/rev, Max ~10 cm/s",
    positions: [
      { x: 45.7, y: 3.9, imageIndex: 0 },
      { x: 57.7, y: 81.9, imageIndex: 0 }
    ]
  },
  {
    id: "3", name: "Servo Motor", count: "2 pcs",
    description: "Grabbing and lifting 2-4 cm objects",
    positions: [{ x: 3.1, y: 34.3, imageIndex: 0 }]
  },
  {
    id: "4", name: "Ultrasonic Sensor", count: "1 pcs",
    description: "Distance measurement",
    positions: [{ x: 6.3, y: 4.2, imageIndex: 0 }]
  },
  {
    id: "5", name: "IR Sensor", count: "8 pcs",
    description: "6 line following, 2 wall following",
    positions: [
      { x: 21.6, y: 4.2, imageIndex: 0 },
      { x: 25.5, y: 81.3, imageIndex: 0 },
      { x: 20.1, y: 46.2, imageIndex: 1 }
    ]
  },
  {
    id: "6", name: "Touch Sensor", count: "4 pcs",
    description: "Embedded into robot frame",
    positions: [
      { x: 36.5, y: 3.9, imageIndex: 0 },
      { x: 39.9, y: 81.9, imageIndex: 0 }
    ]
  },
  {
    id: "7", name: "RGB LED", count: "7 pcs",
    description: "7-pixel circular display, shows colored shapes",
    positions: [
      { x: 6.7, y: 81.3, imageIndex: 0 },
      { x: 64.5, y: 43.1, imageIndex: 1 }
    ]
  },
  {
    id: "8", name: "IR Remote", count: "1 pcs",
    description: "Embedded in LbBase",
    positions: [
      { x: 11.1, y: 14.5, imageIndex: 0 },
      { x: 55.0, y: 3.1, imageIndex: 1 }
    ]
  },
  {
    id: "9", name: "Mini Buzzer", count: "1 pcs",
    description: "Below the Arduino Nano",
    positions: [{ x: 51.9, y: 3.6, imageIndex: 0 }]
  },
  {
    id: "10", name: "Bluetooth Module", count: "1 pcs",
    description: "Wireless communication gateway",
    positions: [{ x: 94.2, y: 28.9, imageIndex: 0 }]
  },
  {
    id: "11a", name: "Power Bank", count: "1 pcs",
    description: "5V operating voltage, Micro-USB charging port",
    positions: [{ x: 9.6, y: 92.4, imageIndex: 1 }]
  },
  {
    id: "11b", name: "Rechargeable Battery", count: "2 pcs",
    description: "18650 Li-ion cells, 3-hour run time",
    positions: [{ x: 21.5, y: 92.4, imageIndex: 1 }]
  },
  {
    id: "12", name: "USB", count: "1 pcs",
    description: "USB cable + adapter",
    positions: [{ x: 64.5, y: 92.4, imageIndex: 1 }]
  },
];

// ===== ADVANCED version additional accessories (numbers 13-17) =====
// Advanced Image (Leanbot_Advanced-Components.png): 2360×1320

const advancedAccessories: ComponentDetail[] = [
  {
    id: "13", name: "Light, Gesture & Color Sensor", count: "1 pcs",
    description: "APDS9960",
    positions: [{ x: 36.4, y: 12.1, imageIndex: 0 }]
  },
  {
    id: "14", name: "Gyro Sensor", count: "1 pcs",
    description: "MPU6050 3-axis Accel & Gyro",
    positions: [{ x: 7.6, y: 78.8, imageIndex: 0 }]
  },
  {
    id: "15", name: "Microphone", count: "1 pcs",
    description: "MAX4466",
    positions: [{ x: 3.8, y: 4.5, imageIndex: 0 }]
  },
  {
    id: "16", name: "KCX 017 USB Power Meter", count: "1 pcs",
    description: "Power monitoring",
    positions: [{ x: 71.6, y: 7.6, imageIndex: 0 }]
  },
  {
    id: "17", name: "Frame Tool", count: "1 pcs",
    description: "Extensible frame",
    positions: [{ x: 72.9, y: 48.5, imageIndex: 0 }]
  },
];

// ===== IOT version additional accessories (numbers 18-23) =====
// IoT Image (Leanbot_IoT-Components.png): 1924×1900

const iotAccessories: ComponentDetail[] = [
  {
    id: "18", name: "OLED", count: "1 pcs",
    description: "Mini display screen",
    positions: [{ x: 34.3, y: 3.7, imageIndex: 0 }]
  },
  {
    id: "19", name: "Pulse Oximeter & Heart Rate", count: "1 pcs",
    description: "MAX30102",
    positions: [{ x: 46.8, y: 3.7, imageIndex: 0 }]
  },
  {
    id: "20", name: "Humidity & Temp Sensor", count: "1 pcs",
    description: "BME280",
    positions: [{ x: 44.2, y: 56.3, imageIndex: 0 }]
  },
  {
    id: "21", name: "Capacitive Soil Moisture", count: "1 pcs",
    description: "Moisture sensing",
    positions: [{ x: 88.4, y: 22.6, imageIndex: 0 }]
  },
  {
    id: "22", name: "PIR Motion Detector", count: "1 pcs",
    description: "HC-SR501",
    positions: [{ x: 35.3, y: 56.3, imageIndex: 0 }]
  },
  {
    id: "23", name: "Wifi Module", count: "1 pcs",
    description: "IoT connectivity",
    positions: [{ x: 15.1, y: 76.8, imageIndex: 0 }]
  },
];

// ===== Detailed Specs =====

const standardSpecs: SpecSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Berat", value: "400 - 500 gram" },
      { label: "Dimensi", value: "16 cm x 12 cm x 7 cm (termasuk penjepit)" },
      { label: "Status Rakitan", value: "Pra-rakit (Tinggal Pakai)" },
    ],
  },
  {
    title: "Sistem Kontrol",
    items: [
      { label: "Control Board", value: "Arduino Nano atau kompatibel" },
      { label: "Processor", value: "ATmega328P (8-bit, 16MHz)" },
      { label: "Flash / SRAM", value: "32KB / 2KB" },
      { label: "Komunikasi Nirkabel", value: "Bluetooth" },
      { label: "Input / Output", value: "Touch button x4, Reset button / Buzzer" },
    ],
  },
  {
    title: "Motor & Mekanika",
    items: [
      { label: "Drive Motors", value: "2x Stepper motor (28BYJ-48), 1-60 RPM" },
      { label: "Presisi Rotasi", value: "≤ 2°" },
      { label: "Gripper", value: "2x Servo Motor (SG90) untuk grip, hold, lift (2-4 cm)" },
    ],
  },
  {
    title: "Sensor Bawaan",
    items: [
      { label: "Line-following", value: "6 titik" },
      { label: "Wall-following", value: "2 titik" },
      { label: "Ultrasonic", value: "1 modul" },
      { label: "Lainnya", value: "RGB LED, Touch sensor" },
    ],
  },
  {
    title: "Battery & Power",
    items: [
      { label: "Kapasitas & Tipe", value: "1800mAh (Standard 18650 cell x2)" },
      { label: "Runtime", value: "Penyalaan 3 jam nonstop" },
    ],
  },
];

// ===== VERSION DEFINITIONS =====

export const leanbotVersions: LeanbotVersionData[] = [
  {
    id: "standard",
    name: "Standard",
    tagline: "Dasar Pembelajaran Robotik & STEM",
    description: "Versi Standard dilengkapi dengan sensor yang komprehensif, servo, motor presisi, dan gripper inovatif. Dirancang untuk lingkungan cyber-physical dan Digital Twin melalui integrasi platform Blockly/C++.",
    badge: "ESSENTIAL",
    badgeColor: "#2B4C8C", // dark blue matching image circles
    images: [
      "/src/assets/images/leanbot/detailed-specs/Leanbot_Standard-Components.png",
      "/src/assets/images/leanbot/detailed-specs/Leanbot_Standard-Components_Part2.png",
    ],
    components: standardComponents,
    accessoriesTitle: "Komponen Utama",
    accessoriesBadge: "",
    accessories: [],
    specs: standardSpecs,
  },
  {
    id: "advanced",
    name: "Advanced",
    tagline: "Konektivitas & Sensor Lingkungan",
    description: "Versi Advanced menawarkan kemampuan yang lebih luas untuk eksperimen dengan sensor tingkat lanjut, mencakup deteksi gestur, cahaya, hingga pemrosesan suara dasar untuk mendukung integrasi hardware-software kompleks.",
    badge: "UPGRADE",
    badgeColor: "#F08080", // coral/salmon matching image circles
    images: [
      "/src/assets/images/leanbot/detailed-specs/Leanbot_Advanced-Components.png",
    ],
    components: standardComponents,
    accessoriesTitle: "Additional Accessories (Advanced)",
    accessoriesBadge: "Advanced Exclusive",
    accessories: advancedAccessories,
    specs: [
      ...standardSpecs.slice(0, 3),
      {
        title: "Sensor & Modul Advanced",
        items: [
          { label: "Light & Gesture", value: "APDS9960 Sensor" },
          { label: "Accelerasi & Orientasi", value: "MPU6050 3-axis Accelerometer & Gyroscope" },
          { label: "Audio", value: "MAX4466 Microphone Sensor" },
          { label: "Power Monitoring", value: "KCX 017 USB Power Meter" },
        ]
      },
      ...standardSpecs.slice(4)
    ],
  },
  {
    id: "iot",
    name: "IoT",
    tagline: "Eksperimen Lanjutan & Sensor Lengkap",
    description: "Seri tertinggi yang dilengkapi sensor lingkungan ekstensif dan konektivitas Internet of Things. Mengintegrasikan Leanbot ke cloud, memungkinkan pengumpulan data secara real-time dan sistem terdistribusi pintar.",
    badge: "EXCLUSIVE",
    badgeColor: "#5BB5B5", // teal matching image circles
    images: [
      "/src/assets/images/leanbot/detailed-specs/Leanbot_IoT-Components.png",
    ],
    components: standardComponents,
    accessoriesTitle: "Additional Accessories (IoT)",
    accessoriesBadge: "IoT Exclusive",
    accessories: iotAccessories,
    specs: [
      ...standardSpecs.slice(0, 3),
      {
        title: "Sensor & Modul IoT",
        items: [
          { label: "Konektivitas", value: "Wifi Module" },
          { label: "Lingkungan", value: "BME280 (Humidity & Temp), Capacitive Soil Moisture" },
          { label: "Kehadiran", value: "PIR Motion Detector (HC-SR501)" },
          { label: "Kesehatan Terapan", value: "Pulse Oximeter & Heart Rate (MAX30102)" },
          { label: "Tampilan Ekstra", value: "Mini OLED Screen" }
        ]
      },
      ...standardSpecs.slice(4)
    ],
  }
];
