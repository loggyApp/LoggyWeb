/**
 * Loggy Web - Landing & App Store Optimization (ASO) Engine
 * Designed for Maximum App Downloads & Real-time Supabase Sync
 */

// Supabase Configuration
const SUPABASE_URL = "https://pltjypvxqnjegzjnxxtk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsdGp5cHZ4cW5qZWd6am54eHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNjU0MTcsImV4cCI6MjEwMzg0MTQxN30.0GDybSXcQ2Po80nT6zKSiM0H9yA1TrA_pI706BPO9Bw";
const TMDB_API_KEY = "de401374d1b58b1aec0d6c6bb254d1a6";

// App Store Links
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.ccdevelops.loggy";
const APP_STORE_URL = "https://apps.apple.com/app/loggy/id6742398418";

// Initialize Supabase Client
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Global Landing & App State
const state = {
  currentLang: 'es',
  galleryPlatform: 'android', // 'android' or 'ios'
  currentUser: null,
  currentProfile: null,
  libraryItems: [],
  libraryFilter: 'ALL',
  librarySearch: '',
  librarySort: 'recent',
  searchResults: [],
  activeRating: 4.5,
  isWebAppOpen: false
};

// High-Converting Bilingual Copy (Sentence Case strictly enforced)
const translations = {
  es: {
    meta_title: "Loggy — Tu diario cultural de películas, series y libros | Descarga gratis",
    meta_desc: "La app todo en uno que une Letterboxd, TV Time y Goodreads. Calificaciones con media estrella, ruleta de 30 segundos con amigos, escáner de libros y protección contra spoilers. ¡Descárgala gratis!",
    nav_features: "Funciones",
    nav_compare: "¿Por qué Loggy?",
    nav_gallery: "Capturas",
    nav_testimonials: "Opiniones",
    nav_faq: "Preguntas",
    nav_webapp: "Versión web",
    nav_download: "Descargar gratis",

    // Hero Section
    hero_badge: "🔥 La app cultural nº 1 en 2026 · +4.9 estrellas",
    hero_title_1: "Deja de usar tres apps distintas.",
    hero_title_2: "Películas, series y libros",
    hero_title_3: "en una sola app.",
    hero_subtitle: "Letterboxd, TV Time y Goodreads unificados en una sola experiencia fluida. Registra lo que ves y lees con media estrella, decide qué ver con amigos en 30 segundos con la ruleta y escanea libros al instante.",
    btn_google_play_sub: "DISPONIBLE EN",
    btn_google_play_title: "Google Play",
    btn_app_store_sub: "DESCARGAR EN",
    btn_app_store_title: "App Store",
    hero_trust_rating: "4.9 / 5 estrellas por más de 1.000 cinéfilos y lectores",
    hero_trust_free: "100% Gratuito · Sin publicidad invasiva · Modo offline",

    // Pain point vs Solution (The Hook)
    compare_badge: "¿Por qué necesitas Loggy hoy?",
    compare_title: "Tu entretenimiento no debería estar dividido en tres apps",
    compare_desc: "Mantener listas separadas en tres plataformas lentas es cosa del pasado. Descubre la diferencia de tener toda tu vida cultural en un solo lugar.",
    card_old_title: "La forma antigua (Frustrante)",
    card_old_item1: "Tener tres aplicaciones distintas ocupando espacio en tu teléfono.",
    card_old_item2: "Perder 40 minutos cada noche discutiendo qué película ver en streaming.",
    card_old_item3: "Destripes en redes sociales que arruinan el final de tu serie favorita.",
    card_old_item4: "Teclear títulos de libros y autores a mano cada vez que compras uno.",
    card_old_item5: "Publicidad invasiva y pérdida de datos si no tienes cobertura.",
    card_new_title: "La experiencia Loggy (Todo en uno)",
    card_new_item1: "Un solo perfil impecable para todas tus películas, series y libros.",
    card_new_item2: "La ruleta de 30 segundos: cruza listas con amigos y decidid al instante.",
    card_new_item3: "Spoiler Shield activo: reseñas con destripes desenfocadas automáticamente.",
    card_new_item4: "Escáner por cámara: apunta al código de barras del libro y listo.",
    card_new_item5: "100% Offline first con base de datos nativa de alto rendimiento.",

    // Core Features
    features_badge: "Diseñada para enamorarte",
    features_title: "Herramientas que no encontrarás en ningún otro sitio",
    features_desc: "Cada rincón de Loggy está construido con Compose Multiplatform nativo para darte una velocidad inigualable.",
    
    feat_1_badge: "La solución a las discusiones",
    feat_1_title: "«¿Qué vemos hoy?» + Ruleta de 30 segundos",
    feat_1_desc: "Añade a tu pareja o amigos. Loggy cruza automáticamente vuestras listas de pendientes para mostrar qué tenéis en común y os ayuda a decidir en menos de 30 segundos con la ruleta interactiva. ¡Adiós a 45 minutos buscando en Netflix!",
    
    feat_2_badge: "Tu entretenimiento a salvo",
    feat_2_title: "Spoiler Shield inteligente",
    feat_2_desc: "Protección activa para tu feed social y comunitario. Cualquier reseña con destripes clave se detecta y desenfoca automáticamente para que nadie te arruine el final.",
    feat_2_demo_warning: "⚠️ Esta reseña contiene spoilers clave del capítulo final",
    feat_2_demo_click: "Toca para revelar el destripe",
    feat_2_demo_text: "«¡El giro del minuto 42 cuando descubren quién era el espía es absolutamente brillante! Nunca lo vi venir.»",
    
    feat_3_badge: "Para amantes de la lectura",
    feat_3_title: "Escáner de libros por cámara (ISBN)",
    feat_3_desc: "¿Estás en una librería o biblioteca? Apunta con la cámara al código de barras del libro para agregarlo inmediatamente a tus pendientes, consultar notas y ver qué opinan tus amigos.",
    
    feat_4_badge: "Ahorra tiempo y suscripciones",
    feat_4_title: "Dónde ver en streaming en tu país",
    feat_4_desc: "Consulta de un vistazo si una película o serie está disponible en Netflix, Prime Video, Max, Disney+, Filmin o Apple TV antes de perder el tiempo buscando en cada plataforma.",
    
    feat_5_badge: "Monitorea tus hábitos",
    feat_5_title: "Retos anuales y estadísticas PRO",
    feat_5_desc: "Fija tus metas anuales de libros leídos, horas de cine y temporadas completadas. Disfruta de gráficos de calificaciones con medias estrellas y desglose por directores y autores.",
    
    feat_6_badge: "Tus datos siempre contigo",
    feat_6_title: "100% Offline first y sincronización",
    feat_6_desc: "Base de datos local ultrarrápida. Valora o anota lecturas en un vuelo o en el metro sin cobertura; todo se sincronizará automáticamente con la nube en cuanto recuperes conexión.",

    // Gallery
    gallery_badge: "Vistas reales de la app",
    gallery_title: "Así se ve la experiencia Loggy en tu mano",
    gallery_desc: "Explora las 8 pantallas principales diseñadas al milímetro para una experiencia visual exquisita.",
    gallery_tab_android: "Android",
    gallery_tab_ios: "iPhone (iOS)",
    gallery_scroll_hint: "← Desliza horizontalmente para ver las pantallas →",

    // Testimonials
    testimonials_badge: "Lo que dice la comunidad",
    testimonials_title: "Amada por más de 1.000 cinéfilos y lectores",
    test_1_quote: "«Loggy ha sustituido por completo a Letterboxd y TV Time en mi teléfono. La ruleta de 30 segundos nos salvó las noches de cine con mi pareja.»",
    test_1_author: "Carlos Méndez · Cinéfilo y seriéfilo",
    test_2_quote: "«Poder escanear códigos de barras de libros en la librería con la cámara y tener mis lecturas junto a mis películas favoritas es una maravilla.»",
    test_2_author: "Elena Rivas · Club de lectura",
    test_3_quote: "«El filtro contra spoilers es una genialidad. Por fin puedo leer reseñas de la comunidad sin miedo a que me destripen el final de temporada.»",
    test_3_author: "Marcos S. · Aficionado al anime y sci-fi",

    // FAQ Section
    faq_badge: "Resolvemos tus dudas",
    faq_title: "Preguntas frecuentes",
    faq_q1: "¿Loggy es completamente gratuita?",
    faq_a1: "Sí, puedes descargar Loggy y registrar todas tus películas, series y libros sin pagar absolutamente nada. Ofrecemos una versión PRO opcional para quienes desean apoyar el desarrollo y desbloquear estadísticas avanzadas.",
    faq_q2: "¿Puedo acceder a mis datos desde el ordenador?",
    faq_a2: "¡Por supuesto! Tu cuenta se sincroniza en tiempo real en la nube, por lo que puedes abrir la versión web de Loggy en cualquier navegador para ver o agregar obras a tu diario.",
    faq_q3: "¿Qué diferencia a Loggy de Letterboxd o TV Time?",
    faq_a3: "Loggy une los tres mundos (cine, series y libros) en una sola aplicación con herramientas exclusivas como la ruleta de 30 segundos para amigos, el escáner de códigos de barras ISBN y protección activa contra spoilers.",
    faq_q4: "¿Funciona sin conexión a internet?",
    faq_a4: "Sí. Loggy está construida con arquitectura 'offline first', lo que significa que puedes consultar tu biblioteca y guardar reseñas sin cobertura (en aviones o metro); se sincronizará automáticamente al volver a conectar.",

    // Bottom CTA
    bottom_badge: "Empieza hoy mismo",
    bottom_title: "Transforma tu forma de disfrutar del cine, las series y los libros",
    bottom_desc: "Descarga Loggy gratis en tu teléfono y únete a la comunidad cultural más apasionada.",

    // Sticky Mobile Bar
    sticky_title: "Loggy — Diario cultural",
    sticky_sub: "★ 4.9 · Gratis para Android e iOS",
    sticky_btn: "Instalar gratis",

    // Web App Drawer / Modal
    webapp_modal_title: "Loggy versión web",
    webapp_modal_subtitle: "Accede a tu biblioteca sincronizada desde el navegador.",
    webapp_btn_close: "Cerrar versión web",
    webapp_sync_hint: "Los datos que registres aquí se sincronizan al instante con tu aplicación móvil.",

    footer_rights: "© 2026 Loggy. Todos los derechos reservados.",
    footer_love: "Hecho con amor para amantes del cine, las series y la literatura."
  },
  en: {
    meta_title: "Loggy — Your cultural diary for movies, TV series & books | Free download",
    meta_desc: "The all-in-one app combining Letterboxd, TV Time and Goodreads. Half-star ratings, 30-second friends roulette, ISBN barcode scanner, and smart spoiler shield. Download free today!",
    nav_features: "Features",
    nav_compare: "Why Loggy?",
    nav_gallery: "Screenshots",
    nav_testimonials: "Reviews",
    nav_faq: "FAQ",
    nav_webapp: "Web version",
    nav_download: "Download free",

    // Hero Section
    hero_badge: "🔥 The #1 cultural app in 2026 · +4.9 stars",
    hero_title_1: "Stop using three separate apps.",
    hero_title_2: "Movies, TV series & books",
    hero_title_3: "in one single app.",
    hero_subtitle: "Letterboxd, TV Time and Goodreads united into one seamless native experience. Rate with half-stars, decide what to watch with friends in 30 seconds using the roulette, and scan books instantly.",
    btn_google_play_sub: "GET IT ON",
    btn_google_play_title: "Google Play",
    btn_app_store_sub: "DOWNLOAD ON",
    btn_app_store_title: "App Store",
    hero_trust_rating: "4.9 / 5 stars by over 1,000 film lovers & readers",
    hero_trust_free: "100% Free · Zero intrusive ads · Full offline mode",

    // Pain point vs Solution (The Hook)
    compare_badge: "Why you need Loggy today",
    compare_title: "Your cultural life shouldn't be split across three apps",
    compare_desc: "Managing separate lists across three slow platforms is a thing of the past. Experience the difference of having your entire cultural diary in one single place.",
    card_old_title: "The old way (Frustrating)",
    card_old_item1: "Three separate apps taking up memory and battery on your phone.",
    card_old_item2: "Wasting 40 minutes every evening arguing about what movie to stream.",
    card_old_item3: "Accidental spoilers on social feeds ruining season finales.",
    card_old_item4: "Typing out book titles and authors manually every time you read.",
    card_old_item5: "Intrusive ads and losing data when you have no signal.",
    card_new_title: "The Loggy experience (All in one)",
    card_new_item1: "One polished cultural profile for all your movies, shows, and books.",
    card_new_item2: "The 30-second roulette: match watchlists with friends and decide instantly.",
    card_new_item3: "Active spoiler shield: community reviews with spoilers blurred automatically.",
    card_new_item4: "Camera barcode scanner: point at any book's ISBN and you're set.",
    card_new_item5: "100% Offline first with high-performance native database.",

    // Core Features
    features_badge: "Engineered to delight",
    features_title: "Features you won't find anywhere else",
    features_desc: "Every part of Loggy is built with native Compose Multiplatform for blazing fast performance.",
    
    feat_1_badge: "The end of endless debates",
    feat_1_title: "“What should we watch?” + 30-second roulette",
    feat_1_desc: "Add your partner or friends. Loggy automatically matches your pending watchlists to show common titles and helps you decide in under 30 seconds with an interactive roulette. Say goodbye to 45 minutes browsing Netflix!",
    
    feat_2_badge: "Your entertainment protected",
    feat_2_title: "Smart spoiler shield",
    feat_2_desc: "Active protection for your social and community feed. Key spoilers are detected and blurred out automatically so no one ruins the ending for you.",
    feat_2_demo_warning: "⚠️ This review contains key spoilers for the finale",
    feat_2_demo_click: "Tap to reveal spoiler",
    feat_2_demo_text: "“The twist at minute 42 when they discover who the real spy was is brilliant! Never saw it coming.”",
    
    feat_3_badge: "For book lovers",
    feat_3_title: "Camera book scanner (ISBN)",
    feat_3_desc: "At a bookstore or library? Point your camera at any book's barcode to add it instantly to your reading list, read community reviews, and check notes.",
    
    feat_4_badge: "Save time and subscriptions",
    feat_4_title: "Where to watch in streaming in your country",
    feat_4_desc: "Check at a glance whether a movie or show is available on Netflix, Prime Video, Max, Disney+, or Apple TV before wasting time searching each app.",
    
    feat_5_badge: "Track your habits",
    feat_5_title: "Annual challenges & PRO analytics",
    feat_5_desc: "Set your annual goals for books read, movie hours, and finished seasons. Enjoy rating histograms with half-stars and director/author breakdowns.",
    
    feat_6_badge: "Your data always with you",
    feat_6_title: "100% Offline first & cloud sync",
    feat_6_desc: "Blazing fast local database. Log your reviews or reading sessions on a flight or underground metro; everything syncs to the cloud once you reconnect.",

    // Gallery
    gallery_badge: "Actual app screenshots",
    gallery_title: "See the native Loggy experience in your hand",
    gallery_desc: "Explore the 8 core presentations designed to perfection for cultural lovers.",
    gallery_tab_android: "Android",
    gallery_tab_ios: "iPhone (iOS)",
    gallery_scroll_hint: "← Swipe horizontally to explore the screens →",

    // Testimonials
    testimonials_badge: "Community love",
    testimonials_title: "Loved by over 1,000 film buffs & readers",
    test_1_quote: "“Loggy completely replaced Letterboxd and TV Time on my phone. The 30-second roulette saved movie night with my partner.”",
    test_1_author: "Carlos Méndez · Film & series enthusiast",
    test_2_quote: "“Being able to scan book barcodes in bookstores with my camera and have all my reading logs right next to my films is amazing.”",
    test_2_author: "Elena Rivas · Book club organizer",
    test_3_quote: "“The spoiler shield is pure genius. I can finally browse community reviews without fear of having season endings spoiled.”",
    test_3_author: "Marcos S. · Anime & sci-fi lover",

    // FAQ Section
    faq_badge: "Got questions?",
    faq_title: "Frequently asked questions",
    faq_q1: "Is Loggy completely free?",
    faq_a1: "Yes, you can download Loggy and log all your movies, TV shows, and books without paying a single cent. We offer an optional PRO tier for users who wish to support development and unlock advanced analytics.",
    faq_q2: "Can I access my data from my computer?",
    faq_a2: "Absolutely! Your account syncs in real time with our cloud, so you can open the Loggy web version in any desktop browser to view or add titles to your diary.",
    faq_q3: "How does Loggy compare to Letterboxd or TV Time?",
    faq_a3: "Loggy unites all three domains (movies, series, and books) into one single app with unique features like the 30-second friend roulette, camera ISBN scanner, and active spoiler shield.",
    faq_q4: "Does it work without an internet connection?",
    faq_a4: "Yes. Loggy is built offline-first. You can browse your diary and save reviews without signal (on planes or underground); it will automatically sync when you reconnect.",

    // Bottom CTA
    bottom_badge: "Start today",
    bottom_title: "Transform the way you experience movies, series, and books",
    bottom_desc: "Download Loggy free on your phone and join the most passionate cultural community.",

    // Sticky Mobile Bar
    sticky_title: "Loggy — Cultural diary",
    sticky_sub: "★ 4.9 · Free on Android & iOS",
    sticky_btn: "Install free",

    // Web App Drawer / Modal
    webapp_modal_title: "Loggy web version",
    webapp_modal_subtitle: "Access your synchronized diary directly in your browser.",
    webapp_btn_close: "Close web version",
    webapp_sync_hint: "Anything logged here syncs instantly to your mobile app.",

    footer_rights: "© 2026 Loggy. All rights reserved.",
    footer_love: "Made with love for film, TV & book lovers."
  }
};

function t(key) {
  const lang = state.currentLang;
  return translations[lang]?.[key] || translations['es']?.[key] || key;
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  detectUserPlatform();
  setupGallery();
  setupSpoilerDemo();
  setupFAQAccordion();
  setupStickyBar();
  setupWebAppIntegration();
});

// Detect Android / iOS to highlight the relevant store button
function detectUserPlatform() {
  const ua = (navigator.userAgent || navigator.vendor || window.opera || '').toLowerCase();
  const isAndroid = /android/i.test(ua);
  const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isIOS) {
    state.galleryPlatform = 'ios';
    highlightStoreButton('ios');
  } else {
    state.galleryPlatform = 'android';
    highlightStoreButton('android');
  }
  updateGalleryImages();
}

function highlightStoreButton(platform) {
  const gpBtns = document.querySelectorAll('.btn-cta-googleplay');
  const asBtns = document.querySelectorAll('.btn-cta-appstore');

  if (platform === 'ios') {
    asBtns.forEach(btn => {
      btn.classList.add('ring-2', 'ring-lime-brand', 'scale-[1.02]');
    });
  } else {
    gpBtns.forEach(btn => {
      btn.classList.add('ring-2', 'ring-lime-brand', 'scale-[1.02]');
    });
  }
}

// Language Engine
function initLanguage() {
  const saved = localStorage.getItem('loggy_lang');
  if (saved && (saved === 'es' || saved === 'en')) {
    state.currentLang = saved;
  } else {
    const bLang = (navigator.language || '').toLowerCase();
    state.currentLang = bLang.startsWith('es') ? 'es' : 'en';
  }
  updateLanguageUI();
}

function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;
  state.currentLang = lang;
  localStorage.setItem('loggy_lang', lang);
  document.documentElement.lang = lang;
  updateLanguageUI();
  updateGalleryImages();
}

function updateLanguageUI() {
  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnEs && btnEn) {
    if (state.currentLang === 'es') {
      btnEs.className = 'px-2.5 py-1 rounded-lg text-dark-950 bg-lime-brand font-bold shadow-sm transition';
      btnEn.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition';
    } else {
      btnEn.className = 'px-2.5 py-1 rounded-lg text-dark-950 bg-lime-brand font-bold shadow-sm transition';
      btnEs.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition';
    }
  }

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Update HTML title & meta description
  document.title = t('meta_title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', t('meta_desc'));
  }
}

// ==================== GALLERY PLATFORM & IMAGES ====================

function setGalleryPlatform(platform) {
  if (platform !== 'android' && platform !== 'ios') return;
  state.galleryPlatform = platform;

  const btnAndroid = document.getElementById('gallery-tab-android');
  const btnIos = document.getElementById('gallery-tab-ios');

  if (platform === 'android') {
    btnAndroid?.classList.add('bg-lime-brand', 'text-dark-950', 'shadow-glow-lime');
    btnAndroid?.classList.remove('text-slate-400', 'bg-dark-850');
    btnIos?.classList.remove('bg-lime-brand', 'text-dark-950', 'shadow-glow-lime');
    btnIos?.classList.add('text-slate-400', 'bg-dark-850');
  } else {
    btnIos?.classList.add('bg-lime-brand', 'text-dark-950', 'shadow-glow-lime');
    btnIos?.classList.remove('text-slate-400', 'bg-dark-850');
    btnAndroid?.classList.remove('bg-lime-brand', 'text-dark-950', 'shadow-glow-lime');
    btnAndroid?.classList.add('text-slate-400', 'bg-dark-850');
  }

  updateGalleryImages();
}

function updateGalleryImages() {
  const lang = state.currentLang;
  const platform = state.galleryPlatform;
  
  let basePath = 'assets/store/es';
  if (platform === 'android') {
    basePath = lang === 'en' ? 'assets/store/en' : 'assets/store/es';
  } else {
    basePath = lang === 'en' ? 'assets/store/ios_en' : 'assets/store/ios_es';
  }

  const files = [
    '01-device-bottom.png',
    '02-device-bottom.png',
    '03-two-devices.png',
    '04-device-bottom.png',
    '05-device-bottom.png',
    '06-device-bottom.png',
    '07-device-bottom.png',
    '08-device-bottom.png'
  ];

  files.forEach((file, index) => {
    const img = document.getElementById(`gallery-img-${index + 1}`);
    if (img) {
      img.src = `${basePath}/${file}`;
    }
  });

  // Hero main phone image
  const heroImg = document.getElementById('hero-device-img');
  if (heroImg) {
    heroImg.src = `${basePath}/01-device-bottom.png`;
  }
}

function setupGallery() {
  const btnAndroid = document.getElementById('gallery-tab-android');
  const btnIos = document.getElementById('gallery-tab-ios');

  if (btnAndroid) btnAndroid.addEventListener('click', () => setGalleryPlatform('android'));
  if (btnIos) btnIos.addEventListener('click', () => setGalleryPlatform('ios'));

  updateGalleryImages();
}

// ==================== INTERACTIVE SPOILER DEMO ====================

function setupSpoilerDemo() {
  const demoOverlay = document.getElementById('spoiler-demo-overlay');
  const demoText = document.getElementById('spoiler-demo-text');

  if (demoOverlay && demoText) {
    demoOverlay.addEventListener('click', () => {
      demoOverlay.classList.add('hidden');
      demoText.classList.remove('blur-md', 'select-none');
    });
  }
}

// ==================== FAQ ACCORDION ====================

function setupFAQAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

        if (!isOpen) {
          answer.classList.remove('hidden');
          icon?.classList.add('rotate-180');
        }
      });
    }
  });
}

// ==================== STICKY MOBILE CTA BAR ====================

function setupStickyBar() {
  const stickyBar = document.getElementById('sticky-mobile-cta');
  if (!stickyBar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      stickyBar.classList.remove('translate-y-full', 'opacity-0');
      stickyBar.classList.add('translate-y-0', 'opacity-100');
    } else {
      stickyBar.classList.add('translate-y-full', 'opacity-0');
      stickyBar.classList.remove('translate-y-0', 'opacity-100');
    }
  }, { passive: true });
}

// ==================== WEB APP DRAWER / INTEGRATION ====================

function setupWebAppIntegration() {
  const openBtn = document.getElementById('btn-open-webapp');
  const closeBtn = document.getElementById('btn-close-webapp');
  const modal = document.getElementById('webapp-modal-container');

  if (openBtn && modal) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      state.isWebAppOpen = true;
      initWebAppSession();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      state.isWebAppOpen = false;
    });
  }
}

// Minimal Web App Session handler inside modal
async function initWebAppSession() {
  if (!supabase) return;
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      state.currentUser = session.user;
      loadUserWebLibrary();
    } else {
      renderWebAuthPrompt();
    }
  } catch (err) {
    console.error("Session check error:", err);
  }
}

async function loadUserWebLibrary() {
  if (!supabase || !state.currentUser) return;
  const container = document.getElementById('webapp-library-content');
  if (!container) return;

  container.innerHTML = `
    <div class="py-12 text-center">
      <div class="w-8 h-8 border-4 border-lime-brand/20 border-t-lime-brand rounded-full animate-spin mx-auto mb-3"></div>
      <p class="text-xs text-slate-400">Sincronizando con tu app móvil...</p>
    </div>
  `;

  try {
    const { data, error } = await supabase
      .from('cloud_reviews')
      .select('*')
      .eq('user_id', state.currentUser.id)
      .order('completed_at', { ascending: false });

    if (error) throw error;
    state.libraryItems = data || [];

    if (state.libraryItems.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center text-slate-400 text-xs">
          Aún no tienes obras registradas en tu diario. Abre la app móvil o usa el buscador para agregar títulos.
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        ${state.libraryItems.map(item => `
          <div class="p-2.5 rounded-xl bg-dark-850 border border-dark-700 flex flex-col justify-between">
            <div class="aspect-[2/3] w-full rounded-lg overflow-hidden bg-dark-800 mb-2">
              ${item.cover_url ? `<img src="${item.cover_url}" class="w-full h-full object-cover">` : '<div class="w-full h-full flex items-center justify-center text-xl">🎬</div>'}
            </div>
            <h5 class="text-xs font-bold text-white truncate">${item.title}</h5>
            <span class="text-[11px] text-amber-400 font-bold">★ ${item.rating ? item.rating.toFixed(1) : '5.0'}</span>
          </div>
        `).join('')}
      </div>
    `;
  } catch (e) {
    container.innerHTML = `<p class="text-xs text-red-400 text-center py-8">Error al sincronizar datos.</p>`;
  }
}

function renderWebAuthPrompt() {
  const container = document.getElementById('webapp-library-content');
  if (!container) return;

  container.innerHTML = `
    <div class="max-w-sm mx-auto py-8 text-center">
      <div class="w-12 h-12 bg-dark-850 rounded-xl border border-dark-700 flex items-center justify-center text-2xl mx-auto mb-3">
        🔐
      </div>
      <h4 class="text-sm font-bold text-white mb-1">Inicia sesión para sincronizar</h4>
      <p class="text-xs text-slate-400 mb-4 leading-relaxed">
        Usa la misma cuenta de Loggy de tu móvil para acceder a tus calificaciones y biblioteca.
      </p>
      <form id="webapp-quick-login" class="space-y-2.5 text-left">
        <input id="quick-email" type="email" placeholder="tu@email.com" required class="w-full px-3 py-2 rounded-xl bg-dark-850 border border-dark-700 text-xs text-white focus:outline-none focus:border-lime-brand">
        <input id="quick-password" type="password" placeholder="Contraseña" required class="w-full px-3 py-2 rounded-xl bg-dark-850 border border-dark-700 text-xs text-white focus:outline-none focus:border-lime-brand">
        <button type="submit" class="w-full py-2.5 rounded-xl bg-lime-brand text-dark-950 font-bold text-xs shadow-glow-lime hover:bg-lime-hover transition">
          Iniciar sesión
        </button>
      </form>
    </div>
  `;

  document.getElementById('webapp-quick-login')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('quick-email').value;
    const password = document.getElementById('quick-password').value;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      state.currentUser = data.user;
      loadUserWebLibrary();
    } catch (err) {
      alert("Error al iniciar sesión: " + err.message);
    }
  });
}
