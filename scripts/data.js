// UI Design Styles Showcase - Archetypes Database
// Master catalog of 12 fundamentally distinct UI design aesthetics

const DESIGN_STYLES = [
  {
    id: "neo-asiri",
    nameAr: "النمط العسيري المعماري (القط التراثي)",
    nameEn: "Neo-Asiri Geometric Heritage",
    era: "تراث عريق مُعاد ابتكاره عمارياً",
    eraEn: "Ancestral Heritage x Modern Tech",
    badge: "تراث سعودي أصيل",
    badgeEn: "Saudi Architectural",
    category: "cultural",
    icon: "🏔️",
    accent: "#D62828",
    bgPreview: "#2C1E16",
    summaryAr: "مستوحى من قصور عسير الحجرية وشرفات الجص البيضاء ونقوش القط العسيري الهندسية البارزة، مع إحساس خشبي دافئ وتفاصيل نحاسية متقنة.",
    summaryEn: "Inspired by the stone towers of Asir, white crenellated plaster friezes, and vibrant geometric Al-Qatt patterns with artisanal tactile textures.",
    tokens: [
      { name: "Asir Earth (طمي عسير)", hex: "#2C1E16", role: "الخلفية العميقة" },
      { name: "Mountain Slate (حجر المرتفعات)", hex: "#423229", role: "أسطح البطاقات" },
      { name: "Ghus Plaster (جص الشرفات)", hex: "#FDFDF8", role: "النصوص والشرفات" },
      { name: "Qatt Red (قرمزي القط)", hex: "#D62828", role: "أزرار التفاعل والإبراز" },
      { name: "Qatt Green (أخضر السرو)", hex: "#16A34A", role: "مؤشرات النجاح والحيوية" },
      { name: "Qatt Sun (أصفر العرعر)", hex: "#F59E0B", role: "التنبيهات والزخرفة" },
      { name: "Abha Indigo (نيلة السودة)", hex: "#1D4ED8", role: "أطر التناغم اللوني" }
    ],
    typography: {
      familyAr: "'Amiri', 'Cairo', serif",
      familyEn: "'Cinzel', 'Playfair Display', serif",
      scale: "أوزان متينة مع فخامة الخط الكلاسيكي والزخرفة المتوازنة",
      scaleEn: "Statuesque classical proportions with artisanal dignity"
    },
    rules: {
      bestForAr: "المنصات الثقافية والتراثية، المبادرات الوطنية، المتاحف والمعارض الإقليمية، والعلامات التجارية الفاخرة ذات الجذور العريقة.",
      bestForEn: "Cultural platforms, national heritage initiatives, regional museums, artisanal luxury products with deep authentic roots.",
      avoidAr: "الواجهات البرمجية البحتة السريعة مثل أدوات المطورين أو شاشات المراقبة المكثفة لبيانات السيرفرات.",
      avoidEn: "Dense developer tooling, minimalist data consoles, or high-frequency finance terminals."
    },
    cssSnippet: `/* النمط العسيري المعماري */
:root {
  --asiri-wall: #2C1E16;
  --asiri-stone: #423229;
  --asiri-plaster: #FDFDF8;
  --asiri-crimson: #D62828;
  --asiri-green: #16A34A;
  --asiri-gold: #F59E0B;
  --asiri-frieze: repeating-linear-gradient(45deg, #D62828, #D62828 10px, #F59E0B 10px, #F59E0B 20px, #16A34A 20px, #16A34A 30px);
}
.asiri-card {
  background: var(--asiri-stone);
  color: var(--asiri-plaster);
  border: 2px solid #5A4739;
  border-top: 6px solid #D62828;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}`
  },
  {
    id: "swiss-international",
    nameAr: "النمط السويسري الصارم (التصميم الدولي)",
    nameEn: "Swiss International Typographic Style",
    era: "حقبة الخمسينات (معهد بازل)",
    eraEn: "1950s Basel & Zurich Movement",
    badge: "رياضي / طباعي دقيق",
    badgeEn: "Strict Mathematical Grid",
    category: "rational",
    icon: "📐",
    accent: "#FF3B00",
    bgPreview: "#FFFFFF",
    summaryAr: "هندسة رياضية صارمة وشبكة أعمدة 1px ظاهرة، تيبوغرافي عملاق عريض غير مذيل، تباين فوري بالأبيض والأسود مع البرتقالي الدولي.",
    summaryEn: "Asymmetric layouts anchored by a rigid 1px column grid, monumental sans-serif typography, extreme white space, and iconic International Orange accents.",
    tokens: [
      { name: "Pure Canvas", hex: "#FFFFFF", role: "المساحة البيضاء المطلقة" },
      { name: "Heavy Ink Black", hex: "#0A0A0A", role: "الكتل الطباعية والحدود" },
      { name: "International Orange", hex: "#FF3B00", role: "الإجراء البصري المحوري" },
      { name: "Basel Grey", hex: "#E5E5E5", role: "خطوط الشبكة الفاصلة 1px" },
      { name: "Muted Typo Grey", hex: "#666666", role: "النصوص الوصفية الثانوية" }
    ],
    typography: {
      familyAr: "'Alexandria', 'IBM Plex Sans Arabic', sans-serif",
      familyEn: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      scale: "تباين حجمي شاهق: 72px مع 12px، محاذاة دقيقة دون أي إمالة أو زخرفة",
      scaleEn: "Extreme typographic contrast: 72px headlines against 12px precise captions"
    },
    rules: {
      bestForAr: "الكتالوجات المعمارية، بوابات التصميم، المجلات الثقافية الحديثة، واستوديوهات الفن والهندسة.",
      bestForEn: "Architectural portals, design institutions, editorial archives, art biennial platforms, structural engineering systems.",
      avoidAr: "تطبيقات الألعاب، شبكات التواصل الترفيهية، والمتاجر المعتمدة على العواطف والتخفيضات العشوائية.",
      avoidEn: "Playful casual apps, gamified youth products, or emotional discount-heavy retail."
    },
    cssSnippet: `/* النمط السويسري الدولي */
:root {
  --swiss-bg: #FFFFFF;
  --swiss-ink: #0A0A0A;
  --swiss-orange: #FF3B00;
  --swiss-grid: 1px solid #0A0A0A;
}
.swiss-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;
  border: var(--swiss-grid);
}
.swiss-block {
  border-right: var(--swiss-grid);
  border-bottom: var(--swiss-grid);
  padding: 2.5rem 1.5rem;
  font-weight: 800;
  border-radius: 0;
}`
  },
  {
    id: "neo-brutalism",
    nameAr: "النيو-بروتاليزم الحسي والمرح",
    nameEn: "Tactile Neo-Brutalism",
    era: "موجة الويب الحديثة (2021-الآن)",
    eraEn: "Modern Web Counter-Culture",
    badge: "حركي / جريء / ميكانيكي",
    badgeEn: "High-Contrast Tactile",
    category: "bold",
    icon: "⚡",
    accent: "#FFE600",
    bgPreview: "#FFFBEA",
    summaryAr: "حدود سوداء غليظة 3px، ظلال مسقطة صلبة ومفرغة بزاوية حادة دون أي تمويه، ألوان فاقعة مشبعة، وتفاعل ميكانيكي ينضغط فيزيائياً.",
    summaryEn: "Thick 3-4px jet-black borders, razor-sharp hard drop shadows with zero blur, electric saturated palettes, sticker tags, and punchy physical tactile clicks.",
    tokens: [
      { name: "Electric Yellow", hex: "#FFE600", role: "البطاقات المميزة والشارات" },
      { name: "Bubblegum Pink", hex: "#FF5E94", role: "الأزرار الرئيسية" },
      { name: "Cyber Cyan", hex: "#00E5FF", role: "عناصر التفاعل والتصفية" },
      { name: "Solid Jet Black", hex: "#000000", role: "الحدود 3.5px والظلال الصلبة" },
      { name: "Canvas Warm Cream", hex: "#FFFDF2", role: "الخلفية العامة المريحة" }
    ],
    typography: {
      familyAr: "'Cairo', 'Alexandria', sans-serif",
      familyEn: "'Space Grotesk', 'Inter', sans-serif",
      scale: "خطوط عريضة جداً Bold 800 مع حروف مشدودة وأرقام بارزة صلبة",
      scaleEn: "Aggressive heavy weights (800-900), raw tracking, unapologetic presence"
    },
    rules: {
      bestForAr: "أدوات الذكاء الاصطناعي للمطورين، منصات الفنتك الشبابية، مجتمعات التقنية المستقلة، والمشاريع الجريئة.",
      bestForEn: "Developer tooling, gen-Z fintech, indie hacker SaaS, dynamic creator portfolios, daring design studios.",
      avoidAr: "المستشفيات والخدمات الطبية، منصات البنوك التقليدية المحافظة، والوثائق القانونية الحكومية.",
      avoidEn: "Corporate legal suites, conservative wealth management, hospital clinical records."
    },
    cssSnippet: `/* النيو-بروتاليزم الحسي */
:root {
  --brutal-black: #000000;
  --brutal-yellow: #FFE600;
  --brutal-pink: #FF5E94;
  --brutal-shadow: 5px 5px 0px #000000;
}
.brutal-button {
  background: var(--brutal-yellow);
  color: #000000;
  font-weight: 800;
  border: 3.5px solid var(--brutal-black);
  box-shadow: var(--brutal-shadow);
  border-radius: 6px;
  transform: translate(0, 0);
  transition: all 0.12s ease;
}
.brutal-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0px #000000;
}
.brutal-button:active {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #000000;
}`
  },
  {
    id: "cyberpunk-hud",
    nameAr: "السايبربانك وشاشات HUD التكتيكية",
    nameEn: "Cyberpunk Tactical HUD",
    era: "الخيال العلمي العسكري المستقبلي",
    eraEn: "Futuristic Tactical Sci-Fi",
    badge: "تكتيكي / رادار نيون",
    badgeEn: "Sci-Fi Military Matrix",
    category: "dark",
    icon: "📟",
    accent: "#00F0FF",
    bgPreview: "#060913",
    summaryAr: "شاشة قمرة قيادة عسكرية مستقبلية: خطوط مسح CRT، زوايا مشطوفة 45 درجة، أرقام سداسية عشرية، مؤشرات ليزر نيون متوهجة ورادار دوار.",
    summaryEn: "Futuristic war-room command interface: 45° chamfered clip-paths, live glowing neon telemetry, CRT horizontal scanlines, and rotating tactical radar feeds.",
    tokens: [
      { name: "Void Darkness", hex: "#060913", role: "الخلفية العميقة وقمرة القيادة" },
      { name: "Tactical HUD Cyan", hex: "#00F0FF", role: "شبكات الليزر والمؤشرات الحية" },
      { name: "Warning Laser Amber", hex: "#FFB703", role: "حالة الطوارئ والإنذارات" },
      { name: "Target Matrix Green", hex: "#00FF66", role: "البيانات المؤكدة والجاهزية" },
      { name: "Breach Threat Crimson", hex: "#FF0055", role: "التهديدات والعمليات الحرجة" }
    ],
    typography: {
      familyAr: "'IBM Plex Sans Arabic', monospace",
      familyEn: "'Orbitron', 'JetBrains Mono', monospace",
      scale: "خطوط تقنية أحادية المسافة Monospace مع أحرف كبيرة Uppercase وتوهج نيون",
      scaleEn: "Military-grade monospace, high-frequency telemetry, letter-spaced labels"
    },
    rules: {
      bestForAr: "مراكز عمليات الأمن السيبراني (SOC)، لوحات تحكم الذكاء الاصطناعي الحربية، ألعاب الفيديو الفضائية، وأنظمة مراقبة الشبكات.",
      bestForEn: "Cybersecurity SOC dashboards, server stress monitors, gaming battle logs, orbital telemetry consoles.",
      avoidAr: "تطبيقات الطهي والوصفات، المتاجر الكلاسيكية للأطفال، ومواقع التأمل والاسترخاء.",
      avoidEn: "Wellness mindfulness apps, kids education, calm organic culinary blogs."
    },
    cssSnippet: `/* سايبربانك تكتيكي HUD */
:root {
  --hud-cyan: #00F0FF;
  --hud-bg: #060913;
  --hud-panel: rgba(8, 16, 32, 0.85);
  --hud-glow: 0 0 15px rgba(0, 240, 255, 0.45);
}
.hud-panel {
  background: var(--hud-panel);
  border: 1px solid var(--hud-cyan);
  clip-path: polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px));
  box-shadow: inset 0 0 20px rgba(0, 240, 255, 0.15), var(--hud-glow);
  position: relative;
}`
  },
  {
    id: "nordic-serene",
    nameAr: "النمط النوردي الهادئ (مينيماليزم دافئ)",
    nameEn: "Nordic Serene / Warm Minimal",
    era: "فلسفة Hygge الإسكندنافية",
    eraEn: "Scandinavian Hygge & Lagom",
    badge: "هدوء / تنفس بصري",
    badgeEn: "Organic Tranquility",
    category: "serene",
    icon: "🌿",
    accent: "#6B7F70",
    bgPreview: "#F7F5F0",
    summaryAr: "فضاء شاسع يتنفس براحة، ألوان خشب البتولا والميرمية الترابية الهادئة، أشكال بيضاوية ناعمة (Pill)، ظلال طبيعية كالضباب، وهدوء ذهني تام.",
    summaryEn: "Generous organic whitespace, muted birch and sage green hues, expansive pill-radius surfaces, and atmospheric featherweight diffused shadows.",
    tokens: [
      { name: "Flax Linen Cream", hex: "#F7F5F0", role: "الخلفية الكتانية الناعمة" },
      { name: "Muted Forest Sage", hex: "#6B7F70", role: "الأزرار وعناصر التركيز الهادئة" },
      { name: "Birch Chalk White", hex: "#FFFFFF", role: "البطاقات العائمة الصافية" },
      { name: "Charcoal Mineral", hex: "#2B2D2F", role: "النصوص الدافئة بدون سواد فاحم" },
      { name: "Warm Clay Ochre", hex: "#C7A689", role: "اللمسات الخشبية المريحة" }
    ],
    typography: {
      familyAr: "'Alexandria', 'Cairo', sans-serif",
      familyEn: "'Plus Jakarta Sans', 'Newsreader', serif",
      scale: "أوزان خفيفة ومتوسطة، مسافات أسطر مريحة للعين، حروف ناعمة بدون صخب",
      scaleEn: "Generous 1.6 line heights, delicate weights (300-500), humanistic serenity"
    },
    rules: {
      bestForAr: "تطبيقات التأمل والهدوء النفسي، منتجات العناية بالصحة، الهندسة المعمارية الداخلية، والمواقع البيئية والمستدامة.",
      bestForEn: "Mindfulness apps, luxury sustainable lifestyle, interior architecture journals, calm productivity suites.",
      avoidAr: "المزادات السريعة الحية، شاشات التداول المزدحمة بالأسهم، وأخبار عاجلة حماسية.",
      avoidEn: "High-frequency stock trading tickers, breaking sensational news, loud flash sale sites."
    },
    cssSnippet: `/* النمط النوردي الهادئ */
:root {
  --nordic-bg: #F7F5F0;
  --nordic-card: #FFFFFF;
  --nordic-sage: #6B7F70;
  --nordic-text: #2B2D2F;
  --nordic-radius: 28px;
  --nordic-shadow: 0 16px 36px -12px rgba(60, 50, 40, 0.06);
}
.nordic-surface {
  background: var(--nordic-card);
  border-radius: var(--nordic-radius);
  padding: 2.5rem;
  box-shadow: var(--nordic-shadow);
  border: 1px solid rgba(0, 0, 0, 0.03);
}`
  },
  {
    id: "liquid-glass-aurora",
    nameAr: "الزجاج السائل والشفق القطبي (أورورا)",
    nameEn: "Liquid Glass & Aurora Mesh",
    era: "موجة الزجاج ثلاثي الأبعاد المتطور",
    eraEn: "Modern Volumetric Glassmorphism",
    badge: "انكسار ضوئي بلوري",
    badgeEn: "Volumetric Refraction",
    category: "futuristic",
    icon: "💎",
    accent: "#8B5CF6",
    bgPreview: "#0B0C1E",
    summaryAr: "ألواح زجاجية حقيقية ذات انكسار ضوئي كثيف (Backdrop Blur 25px)، حدود متوهجة بلمعان مائل، وخلفية شفق قطبي متحركة تفيض بالطاقة اللونية.",
    summaryEn: "Deep refractive frosted glass floating over animated iridescent aurora meshes, accented with prismatic edge highlights and vivid neon depth.",
    tokens: [
      { name: "Cosmic Deep Space", hex: "#0B0C1E", role: "خلفية الفضاء الكوني" },
      { name: "Aurora Violet", hex: "#8B5CF6", role: "التوهج الرئيسي والبلورات" },
      { name: "Glacial Cyan", hex: "#06B6D4", role: "انكسار الضوء السائل" },
      { name: "Nebula Magenta", hex: "#EC4899", role: "نبضات الشفق السفلية" },
      { name: "Liquid Glass Border", hex: "rgba(255, 255, 255, 0.22)", role: "الحواف الكريستالية العاكسة" }
    ],
    typography: {
      familyAr: "'Cairo', 'Alexandria', sans-serif",
      familyEn: "'Plus Jakarta Sans', 'Inter', sans-serif",
      scale: "نصوص ناصعة البياض مع ظلال نصية ناعمة تخترق طبقات الضباب الكريستالي",
      scaleEn: "Crisp white headers with subtle atmospheric drop-shadows on translucent glass"
    },
    rules: {
      bestForAr: "تطبيقات الذكاء الاصطناعي التوليدي، منصات ويب 3 والعملات الرقمية الراقية، واجهات تشغيل الموسيقى الحديثة، ومواقع المنتجات الخارقة.",
      bestForEn: "GenAI applications, premium Web3 & crypto wealth portals, immersive music synthesizers, visionary product launches.",
      avoidAr: "المواقع التي تستهدف أجهزة قديمة جداً ببطء معالجة الجرافيكس (لأن الـ Backdrop-filter يستهلك GPU).",
      avoidEn: "Legacy low-spec browser applications with severe GPU/CPU performance constraints."
    },
    cssSnippet: `/* الزجاج السائل وأورورا */
:root {
  --glass-surface: rgba(255, 255, 255, 0.08);
  --glass-border: 1px solid rgba(255, 255, 255, 0.18);
  --glass-blur: blur(24px) saturate(190%);
  --glass-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.38);
}
.liquid-glass-card {
  background: var(--glass-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: 20px;
  box-shadow: var(--glass-shadow);
  background-image: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 100%);
}`
  },
  {
    id: "skeuomorphism-classic",
    nameAr: "الريترو التجسيدي الكلاسيكي (Aqua 2000)",
    nameEn: "Classic Aqua Skeuomorphism",
    era: "عصر أبل ستيف جوبز (2000 - 2012)",
    eraEn: "Early 2000s Tangible Computing",
    badge: "ملموس / ثلاثي الأبعاد",
    badgeEn: "Hyper-Tangible & Glossy",
    category: "retro",
    icon: "🎛️",
    accent: "#0099DD",
    bgPreview: "#D8DFE8",
    summaryAr: "أزرار جيلية لامعة (Glossy Jelly)، إضاءة علوية حقيقية مع ظلال غائرة ونقوش بلاستيكية ومعدنية تجعلك تشعر برغبة في لمس الشاشة بإصبعك.",
    summaryEn: "Lustrous gel-bubble pills, specular top-half highlights, stitched leather textures, and multi-layered inset bevels simulating real-world physics.",
    tokens: [
      { name: "Aqua Gel Blue", hex: "#0099DD", role: "الأزرار الجيلية الكلاسيكية" },
      { name: "Brushed Aluminum", hex: "#E6E9EE", role: "الأسطح المعدنية المصقولة" },
      { name: "Deep Inset Slate", hex: "#2C3E50", role: "الشاشات الغائرة والحدود" },
      { name: "Gloss Specular White", hex: "#FFFFFF", role: "انعكاس الضوء الكبسولي" },
      { name: "Drop Cast Shadow", hex: "rgba(0,0,0,0.35)", role: "الظلال الفيزيائية الساقطة" }
    ],
    typography: {
      familyAr: "'Cairo', 'Tahoma', sans-serif",
      familyEn: "'Lucida Grande', 'Segoe UI', Arial, sans-serif",
      scale: "نصوص مع ظل خفيف ساقط أو محفور (Letterpress Text Shadow)",
      scaleEn: "Text with subtle embossed white highlights or inset carved shadows"
    },
    rules: {
      bestForAr: "تطبيقات إنتاج الموسيقى (DAW VSTs)، محاكيات الأجهزة الواقعية، لوحات التحكم الصناعية التناظرية، والمشاريع الاسترجاعية.",
      bestForEn: "Audio synthesizer plugins (VSTs), physical hardware simulators, analog industrial dashboards, retro digital archives.",
      avoidAr: "المواقع ذات المحتوى النصي القصير جداً أو شاشات الجوال فائقة البساطة الخالية من الأزرار.",
      avoidEn: "Ultra-clean modern reading platforms, flat text feeds, or hyper-minimal corporate sites."
    },
    cssSnippet: `/* ريترو تجسيدي كلاسيكي Aqua */
.aqua-button {
  background: linear-gradient(to bottom, #4cb8f5 0%, #0099dd 50%, #0077b5 51%, #006096 100%);
  border: 1px solid #005080;
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 3px 6px rgba(0,0,0,0.35);
  color: #FFFFFF;
  text-shadow: 0 -1px 1px rgba(0,0,0,0.6);
  position: relative;
  overflow: hidden;
}
.aqua-button::before {
  content: '';
  position: absolute;
  top: 1px; left: 10%; right: 10%; height: 45%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%);
  border-radius: 999px;
}`
  },
  {
    id: "y2k-cyber-chrome",
    nameAr: "جماليات Y2K والكروم المعدني الفضائي",
    nameEn: "Y2K Cyber Chrome & Gel",
    era: "موجة الألفية والمستقبل المتفائل (1998-2003)",
    eraEn: "Late 90s Millennium Optimism",
    badge: "كروم فضي / نجوم لمعان",
    badgeEn: "Silver Liquid Chrome",
    category: "retro",
    icon: "🪐",
    accent: "#E2E8F0",
    bgPreview: "#0F111A",
    summaryAr: "أسطح كروم معدنية سائلة عاكسة (Liquid Metal Chrome)، نجوم لمعان رباعية فضائية (✦)، فقاعات هلامية وردية وسماوية، وخطوط ممتدة أفقياً.",
    summaryEn: "Molten silver chrome gradients, sparkling 4-pointed galaxy stars (✦), puffy iridescent bubbles, extended cyber typography, and optimistic futurism.",
    tokens: [
      { name: "Liquid Chrome Silver", hex: "#DDE3ED", role: "الأسطح المعدنية العاكسة" },
      { name: "Millennium Violet", hex: "#A855F7", role: "التدرجات الفضائية" },
      { name: "Alien Acid Pink", hex: "#F43F5E", role: "العناصر التفاعلية البارزة" },
      { name: "Glacial Cyber Ice", hex: "#38BDF8", role: "الأطر والحدود المضيئة" },
      { name: "Deep Orbit Black", hex: "#0B0D14", role: "الفضاء الكوني الخلفي" }
    ],
    typography: {
      familyAr: "'Cairo', 'Alexandria', sans-serif",
      familyEn: "'Orbitron', 'Space Grotesk', sans-serif",
      scale: "حروف ممتدة أفقياً (Wide Extended Tracking) مع تأثير تدرج معدني عاكس",
      scaleEn: "Wide-tracked extended geometry, chrome gradient text fills, optimistic tech feel"
    },
    rules: {
      bestForAr: "مواقع الموضة التجريبية، منصات الموسيقى الإلكترونية والدي جي، علامات أزياء الشارع الشبابية، والمهرجانات الفنية.",
      bestForEn: "Streetwear fashion platforms, electronic music festivals, experimental streetwear drops, futuristic art labels.",
      avoidAr: "التقارير السنوية للشركات المساهمة، منصات المحاماة، ومواقع الإحصاءات الرسمية.",
      avoidEn: "Corporate annual filings, conservative legal registries, institutional audit desks."
    },
    cssSnippet: `/* جماليات Y2K والكروم الفضائي */
.y2k-chrome-badge {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 25%, #ffffff 50%, #9ba5b5 75%, #e2e8f0 100%);
  border: 1.5px solid #ffffff;
  color: #1a1a2e;
  border-radius: 50px;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.4), inset 0 2px 4px rgba(255,255,255,0.9);
  font-weight: 900;
  letter-spacing: 2px;
}`
  },
  {
    id: "editorial-luxury",
    nameAr: "التحريري الصحفي الفاخر (مونوكروم)",
    nameEn: "Editorial Luxury / High-Fashion Serif",
    era: "مجلات الموضة والأدب الرفيع (Vogue/Monocle)",
    eraEn: "Haute Couture & Heritage Publications",
    badge: "أرستقراطي / سيريف كلاسيكي",
    badgeEn: "Aristocratic Editorial",
    category: "rational",
    icon: "🏛️",
    accent: "#A38148",
    bgPreview: "#F9F7F2",
    summaryAr: "خطوط سيريف عريضة فاخرة، تباين الأبيض العاجي والأسود الحبري مع لمسات برونزية، خطوط أفقية شعرية فاصلة، وهوامش مريحة لا تزدحم أبداً.",
    summaryEn: "Monumental high-contrast serif typography, generous ivory parchment margins, hairline rules, bespoke bronzed accents, and quiet aristocratic authority.",
    tokens: [
      { name: "Ivory Parchment", hex: "#F9F7F2", role: "الخلفية العاجية الأنيقة" },
      { name: "Obsidian Ink Black", hex: "#141414", role: "النصوص والخطوط الرفيعة" },
      { name: "Atelier Bronze Gold", hex: "#A38148", role: "اللمسات التحريرية والتاريخ" },
      { name: "Warm Ash Grey", hex: "#8A8580", role: "الشروحات والتفاصيل الدقيقة" },
      { name: "Hairline Separator", hex: "#D6D1C7", role: "الخطوط الفاصلة الفائقة الرقة" }
    ],
    typography: {
      familyAr: "'Amiri', serif",
      familyEn: "'Playfair Display', 'Cormorant Garamond', serif",
      scale: "عناوين كبرى ذات نهايات مشذبة وأرقام كلاسيكية متباينة الأطوال",
      scaleEn: "Dramatic contrast in strokes, delicate serifs, drop capitals, italic emphasis"
    },
    rules: {
      bestForAr: "دور النشر الأدبية، المجلات الفكرية، دور المجوهرات والعطور الفاخرة، الفنادق العالمية التاريخية، ومعارض الفنون التشكيلية.",
      bestForEn: "High-end fashion maisons, literary journals, bespoke fragrance & jewelry ateliers, luxury real estate catalogs.",
      avoidAr: "تطبيقات التوصيل السريع ذات العد التنازلي، منصات الألعاب الحركية، ومواقع بيع الإلكترونيات المخفضة.",
      avoidEn: "Rapid delivery on-demand dispatch, high-adrenaline gaming interfaces, discount consumer electronics."
    },
    cssSnippet: `/* التحريري الصحفي الفاخر */
:root {
  --edit-bg: #F9F7F2;
  --edit-ink: #141414;
  --edit-gold: #A38148;
  --edit-rule: 1px solid #D6D1C7;
}
.editorial-title {
  font-family: 'Playfair Display', 'Amiri', serif;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: var(--edit-ink);
  border-bottom: var(--edit-rule);
  padding-bottom: 1.5rem;
}`
  },
  {
    id: "neumorphism-soft",
    nameAr: "النيومورفيزم / التصميم الطيني المنحوت",
    nameEn: "Neumorphism / Soft Extruded Clay",
    era: "موجة الظلال الثنائية (2020)",
    eraEn: "Soft Continuous Plastic Surface",
    badge: "منحوت / ناعم بلاستيكي",
    badgeEn: "Extruded Soft Polymer",
    category: "minimal",
    icon: "🔘",
    accent: "#6366F1",
    bgPreview: "#E0E5EC",
    summaryAr: "العناصر كأنها منحوتة مباشرة في نفس مادة السطح، دون حدود خارجية: ظل ساطع في زاوية الضوء وظل ناعم داكن في الزاوية المقابلة.",
    summaryEn: "Interface components appear seamlessly extruded from a single soft plastic plane via dual directional light and shadow coordinates with zero borders.",
    tokens: [
      { name: "Clay Base Surface", hex: "#E0E5EC", role: "السطح الموحد لكامل الصفحة" },
      { name: "Dark Cast Shadow", hex: "#A3B1C6", role: "الظل المنحوت في الركن المظلم" },
      { name: "Specular Light Halo", hex: "#FFFFFF", role: "انعكاس النور في الركن المضيء" },
      { name: "Accent Inset Blue", hex: "#4D7CFE", role: "المؤشرات والأزرار المفعلة" },
      { name: "Muted Emboss Ink", hex: "#55657E", role: "النصوص المحفورة بلطف" }
    ],
    typography: {
      familyAr: "'Cairo', 'Alexandria', sans-serif",
      familyEn: "'Plus Jakarta Sans', sans-serif",
      scale: "أوزان متوسطة ومريحة، نصوص رمادية داكنة منسجمة مع طين الخلفية",
      scaleEn: "Medium balanced weights, low visual noise, slate typography embedded in clay"
    },
    rules: {
      bestForAr: "أجهزة المنزل الذكي (IoT Home Control)، تطبيقات التحكم بالصوت والحرارة، المحولات والمفاتيح الافتراضية.",
      bestForEn: "Smart home tactile controllers, ambient audio knobs & faders, minimalist IoT switches, concept hardware UIs.",
      avoidAr: "المواقع ذات المحتوى المزدحم أو القوائم الطويلة التي تتطلب تباين وصولية حرجاً جداً (WCAG AAA).",
      avoidEn: "Information-dense portals with severe accessibility/contrast constraints or high sunlight mobile readability."
    },
    cssSnippet: `/* النيومورفيزم الطيني المنحوت */
:root {
  --neu-bg: #E0E5EC;
  --neu-raised: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  --neu-inset: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
}
.neu-card {
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
  border-radius: 20px;
  border: none;
}
.neu-card:active, .neu-inset {
  box-shadow: var(--neu-inset);
}`
  },
  {
    id: "retro-terminal-80s",
    nameAr: "الريترو تيرمينال وشاشات CRT الثمانينات",
    nameEn: "80s Monochrome CRT Terminal",
    era: "حقبة الحواسيب الشخصية الأولى (1982)",
    eraEn: "Early Computing & Green Phosphor",
    badge: "فوسفور أخضر / نصوص نقطية",
    badgeEn: "Green Phosphor Matrix",
    category: "retro",
    icon: "💻",
    accent: "#33FF33",
    bgPreview: "#0B120C",
    summaryAr: "شاشات حواسيب IBM القديمة: إشعاع الفوسفور الأخضر المتوهج، نصوص نقطية Monospace، خطوط مسح CRT، وميض المؤشر الميكانيكي، وإطارات ASCII.",
    summaryEn: "Vintage cathode ray tube glow with radioactive green phosphor, scanline flicker, monospaced ASCII box-drawing borders, and a pulsing mechanical cursor.",
    tokens: [
      { name: "Phosphor Matrix Green", hex: "#33FF33", role: "النصوص والإشعاع الرئيسي" },
      { name: "CRT Pitch Black", hex: "#070C08", role: "الخلفية العميقة للأنبوب الإلكتروني" },
      { name: "Faint Phosphor Glow", hex: "#143618", role: "البطاقات والمناطق النشطة" },
      { name: "Warning Amber Pip", hex: "#FFB000", role: "حالات التنبيه التاريخية" },
      { name: "Scanline Shimmer", hex: "rgba(51, 255, 51, 0.08)", role: "خطوط المسح التلفزيوني" }
    ],
    typography: {
      familyAr: "'Cairo', monospace",
      familyEn: "'VT323', 'JetBrains Mono', 'Courier New', monospace",
      scale: "خط نقطي بيكسلي كلاسيكي مع توهج نصي مستمر وتأثير وميض المؤشر",
      scaleEn: "Classic monospaced terminal glyphs with radioactive text-shadow bloom"
    },
    rules: {
      bestForAr: "أدوات الطرفية وسطور الأوامر (CLI Dashboards)، توثيق المطورين التقني، محاكيات البرمجة، والمشاريع الهكرية المستقلة.",
      bestForEn: "Command-line web shells, sysadmin monitoring consoles, retro indie games, code debugging terminals.",
      avoidAr: "المتاجر الاستهلاكية، المواقع الإخبارية العامة، والخدمات العائلية.",
      avoidEn: "Everyday consumer e-commerce, lifestyle blogs, family service portals."
    },
    cssSnippet: `/* ريترو تيرمينال شاشة CRT */
:root {
  --term-green: #33FF33;
  --term-bg: #070C08;
  --term-glow: 0 0 8px rgba(51, 255, 51, 0.6);
}
.crt-terminal {
  background: var(--term-bg);
  color: var(--term-green);
  font-family: 'JetBrains Mono', monospace;
  text-shadow: var(--term-glow);
  border: 2px solid var(--term-green);
  box-shadow: inset 0 0 20px rgba(51, 255, 51, 0.2), var(--term-glow);
}`
  },
  {
    id: "biophilic-organic",
    nameAr: "البيوفيلي الطبيعي والتقنية العضوية",
    nameEn: "Biophilic Organic Nature-Tech",
    era: "موجة الاستدامة والتصميم الحيوي (2024-الآن)",
    eraEn: "Living Systems & Ecological UI",
    badge: "بيئي / عضوي منساب",
    badgeEn: "Living Organic Flow",
    category: "serene",
    icon: "🌱",
    accent: "#4E8752",
    bgPreview: "#F2EFE9",
    summaryAr: "مستوحى من الطبيعة الحية: زوايا عضوية غير متناظرة (Organic Blobs)، ألوان الغابات والمستنقعات النظيفة، وملمس ترابي هادئ يبث الحياة والاسترخاء.",
    summaryEn: "Living ecology meets digital craft: asymmetrical organic blob radii, earthy terracotta and rainforest chlorophyll, and serene natural breathing space.",
    tokens: [
      { name: "Rainforest Deep Green", hex: "#1C3829", role: "الكتل البصرية والنصوص الرصينة" },
      { name: "Bamboo Sprout Green", hex: "#4E8752", role: "الأزرار وعناصر الحيوية" },
      { name: "Sunbaked Terracotta", hex: "#C86D51", role: "شارات التنبيه والتفاصيل الدافئة" },
      { name: "River Pebble Sand", hex: "#F2EFE9", role: "الخلفية الرملية الناعمة" },
      { name: "Eucalyptus Mist", hex: "#D6DFD5", role: "البطاقات المهدئة للحواس" }
    ],
    typography: {
      familyAr: "'Alexandria', 'Cairo', sans-serif",
      familyEn: "'Plus Jakarta Sans', sans-serif",
      scale: "حروف رشيقة وناعمة تنساب بهدوء وتتناغم مع الخطوط المنحنية للبيئة",
      scaleEn: "Flowing organic sans-serif with natural balance, soothing rhythm"
    },
    rules: {
      bestForAr: "المنصات البيئية ومشاريع الطاقة المتجددة، مبادرات التشجير، العلامات النباتية، وتطبيقات الاستدامة وإعادة التدوير.",
      bestForEn: "Renewable energy dashboards, carbon credit marketplaces, botanical gardens, organic farm collectives, green tech platforms.",
      avoidAr: "المنصات العسكرية، شاشات البورصة عالية التوتر، ومواقع السايبربانك.",
      avoidEn: "High-stress financial trading pits, weapons technology, neon cyberpunk games."
    },
    cssSnippet: `/* البيوفيلي الطبيعي العضوي */
:root {
  --bio-green: #4E8752;
  --bio-deep: #1C3829;
  --bio-clay: #C86D51;
  --bio-bg: #F2EFE9;
}
.bio-card {
  background: #FFFFFF;
  border-radius: 36px 12px 32px 16px;
  padding: 2.5rem;
  box-shadow: 0 14px 30px -10px rgba(28, 56, 41, 0.08);
  border: 1px solid rgba(78, 135, 82, 0.15);
}`
  }
];

// Interactive Scenarios Mock Data for each archetype
const SCENARIOS_CONTENT = {
  "neo-asiri": {
    ecommerce: {
      tag: "قطعة تراثية حصرية",
      title: "مبخرة عسير المنقوشة بماء الذهب",
      desc: "تحفة فنية يدوية مستوحاة من عمارة السودة ورسوم القط العسيري القديمة، صنعت من حجر الجرانيت المشذب.",
      price: "480 ر.س",
      status: "متوفر 3 قطع فقط",
      badge: "صناعة حرفية أصيلة"
    },
    saas: {
      title: "مركز عمليات التراث الرقمي",
      metric1Label: "القطع الموثقة",
      metric1Val: "1,420",
      metric2Label: "نقوش القط النشطة",
      metric2Val: "86%",
      metric3Label: "الزوار اليوم",
      metric3Val: "+34.2%",
      actionBtn: "توليد تقرير التوثيق"
    },
    media: {
      track: "سيمفونية قمم عسير",
      artist: "أوركسترا السودة الوطنية",
      time: "03:45 / 05:20"
    }
  },
  "swiss-international": {
    ecommerce: {
      tag: "INDEX 01 / CATALOGUE",
      title: "CHAIR 606 — REVISED 1957",
      desc: "Mathematical precision seating. Anodized cold-rolled steel frame. Raw wool upholstery. Zero superfluous ornamentation.",
      price: "€ 890.00",
      status: "IN PRODUCTION / ZURICH",
      badge: "EDITION 12/50"
    },
    saas: {
      title: "METRIC RATIO SYSTEM",
      metric1Label: "GRID HARMONY",
      metric1Val: "99.4%",
      metric2Label: "COLUMN DEVIATION",
      metric2Val: "0.00 mm",
      metric3Label: "KERN FACTOR",
      metric3Val: "1.618",
      actionBtn: "EXPORT ARCHIVE"
    },
    media: {
      track: "COMPOSITION NO. 4 IN B MINOR",
      artist: "BASEL ENSEMBLE",
      time: "04:12 / 07:30"
    }
  },
  "neo-brutalism": {
    ecommerce: {
      tag: "DROP #09 🔥",
      title: "HYPER-CLICK MECHANICAL KEYPAD",
      desc: "Ultra-heavy tactile switches. Clacky as hell. CNC-milled aluminum chassis in neon bubblegum yellow. Warning: Loud!",
      price: "$189.99",
      status: "⚡ ALMOST SOLD OUT",
      badge: "BESTSELLER"
    },
    saas: {
      title: "INDIE REVENUE RADAR",
      metric1Label: "MRR VELOCITY",
      metric1Val: "$42,500",
      metric2Label: "CONVERSION CRUSH",
      metric2Val: "14.8%",
      metric3Label: "CHURN SMASHED",
      metric3Val: "0.8%",
      actionBtn: "SHIP FEATURE NOW 🚀"
    },
    media: {
      track: "OVERCLOCKED BASS MACHINE",
      artist: "GLITCH PROTOCOL",
      time: "02:18 / 03:04"
    }
  },
  "cyberpunk-hud": {
    ecommerce: {
      tag: "SECTOR 07 / CYBERNETIC",
      title: "NEURAL BYPASS MODULE V4.2",
      desc: "Sub-dermal optic interface with quantum encryption. Overclocked synaptic throughput for zero-latency combat telemetry.",
      price: "1,250 CREDITS",
      status: "ONLINE // CALIBRATED",
      badge: "MIL-SPEC SECURE"
    },
    saas: {
      title: "TACTICAL THREAT INTERCEPTOR",
      metric1Label: "BREACH ATTEMPTS",
      metric1Val: "0 // BLOCKED",
      metric2Label: "CORE FREQUENCY",
      metric2Val: "4.82 GHz",
      metric3Label: "DEFENSE GRID",
      metric3Val: "100% ARMED",
      actionBtn: "ENGAGE FIREWALL MATRIX"
    },
    media: {
      track: "NEON RAIN OVER SHINJUKU",
      artist: "SYNTH DEFECTOR",
      time: "03:55 / 06:10"
    }
  },
  "nordic-serene": {
    ecommerce: {
      tag: "CRAFTED LIVING",
      title: "Hand-Thrown Ceramic Carafe",
      desc: "Slow-made from Danish wild stoneware. Matte glazed with natural ash. Designed for tranquil morning pour-overs.",
      price: "$95.00",
      status: "Sustainable Batch",
      badge: "Zero Footprint"
    },
    saas: {
      title: "Mindful Space Overview",
      metric1Label: "Focus Clarity",
      metric1Val: "4.8 / 5.0",
      metric2Label: "Restful State",
      metric2Val: "7 hrs 40m",
      metric3Label: "Ambient Noise",
      metric3Val: "24 dB (Calm)",
      actionBtn: "Enter Focus Session"
    },
    media: {
      track: "Morning Dew on Pine Needles",
      artist: "Oslo Acoustic Quartet",
      time: "05:10 / 08:00"
    }
  },
  "liquid-glass-aurora": {
    ecommerce: {
      tag: "GEN-AI HARDWARE",
      title: "Prismatic Neural Lens 01",
      desc: "Holographic optical computing array suspended in refractive liquid quartz crystal. Multimodal perception in real time.",
      price: "$2,400.00",
      status: "Pre-order Wave 2",
      badge: "Quantum Enabled"
    },
    saas: {
      title: "Aurora Quantum Cluster",
      metric1Label: "Tensors Computed",
      metric1Val: "842 TFLOPS",
      metric2Label: "Latency Flux",
      metric2Val: "1.2 ms",
      metric3Label: "Coherence Ratio",
      metric3Val: "99.98%",
      actionBtn: "Deploy Neural Weight"
    },
    media: {
      track: "Bioluminescent Deep Drift",
      artist: "Aurora Borealis AI",
      time: "04:32 / 07:12"
    }
  },
  "skeuomorphism-classic": {
    ecommerce: {
      tag: "VINTAGE AUDIO TECH",
      title: "Analog Valve Tube Amplifier",
      desc: "Hand-wired Class-A triode circuitry. Genuine amber VU meters, solid machined brass volume pot, and real oiled mahogany casing.",
      price: "$1,450.00",
      status: "Bench Tested OK",
      badge: "Real Hardware"
    },
    saas: {
      title: "Analog Telemetry Console",
      metric1Label: "Valve Voltage",
      metric1Val: "240 V",
      metric2Label: "Harmonic Warmth",
      metric2Val: "+4.2 dB",
      metric3Label: "Signal Purity",
      metric3Val: "99.1%",
      actionBtn: "Warm Up Valves"
    },
    media: {
      track: "Warm Vinyl Crackle Session",
      artist: "The Analog Masters",
      time: "03:14 / 04:45"
    }
  },
  "y2k-cyber-chrome": {
    ecommerce: {
      tag: "✦ COSMIC DROP ✦",
      title: "MOLTEN CHROME WRAP SHADES",
      desc: "Full liquid mercury mirror finish. Curvature inspired by alien orbital crafts and late-90s cyber raves. Sparkle guaranteed.",
      price: "$140.00",
      status: "✦ LIMITED VAULT ✦",
      badge: "Y2K CERTIFIED"
    },
    saas: {
      title: "CYBER METRIC MATRIX",
      metric1Label: "✦ GLOSS FACTOR",
      metric1Val: "100%",
      metric2Label: "CHROME FLUX",
      metric2Val: "+88.5%",
      metric3Label: "SPACE TRAFFIC",
      metric3Val: "2.4M HITS",
      actionBtn: "LAUNCH ORBITAL BEAM ✦"
    },
    media: {
      track: "✦ HYPERSPACE DANCEFLOOR ✦",
      artist: "MILLENNIUM GIRL 2000",
      time: "02:45 / 03:30"
    }
  },
  "editorial-luxury": {
    ecommerce: {
      tag: "COLLECTION NO. VIII",
      title: "The Silk Trench in Nocturne Black",
      desc: "Tailored in Como, Italy from triple-weight mulberry raw silk. Unlined structure with horn buttons and a self-tying sash.",
      price: "$2,850.00",
      status: "Atelier Made",
      badge: "Bespoke Cut"
    },
    saas: {
      title: "Atelier Executive Ledger",
      metric1Label: "Global Patronage",
      metric1Val: "380 Patrons",
      metric2Label: "Curated Growth",
      metric2Val: "+24.8%",
      metric3Label: "Exclusivity Index",
      metric3Val: "98.4%",
      actionBtn: "Request Audience"
    },
    media: {
      track: "Sonata in C-Sharp Minor, Op. 27",
      artist: "Vienna Philharmonic Soloist",
      time: "06:12 / 14:00"
    }
  },
  "neumorphism-soft": {
    ecommerce: {
      tag: "SMART TACTILE HOME",
      title: "Sculpted Ambient Climate Dial",
      desc: "Molded from a continuous matte polymer shell. Haptic extruded ring responds seamlessly to soft micro-adjustments.",
      price: "$165.00",
      status: "Connected & Paired",
      badge: "Pure Minimal"
    },
    saas: {
      title: "Tactile Home Environment",
      metric1Label: "Room Comfort",
      metric1Val: "21.5 °C",
      metric2Label: "Humidity Balance",
      metric2Val: "48%",
      metric3Label: "Acoustic Silence",
      metric3Val: "96%",
      actionBtn: "Calibrate Dial"
    },
    media: {
      track: "Soft Polymer Tactile Feedback",
      artist: "Haptic Wave Lab",
      time: "03:00 / 04:20"
    }
  },
  "retro-terminal-80s": {
    ecommerce: {
      tag: "HARDWARE_CATALOG_1982",
      title: "MODEL-64 DISK CONTROLLER",
      desc: "5.25 INCH FLOPPY DRIVE INTERFACE. 64KB DUAL PORTED RAM. PARALLEL CENTRONICS PORT. FULLY SHIELDED BUS CABLE INCLUDED.",
      price: "$249.00 USD",
      status: "[READY_ON_PORT_1]",
      badge: "REV_B_PCB"
    },
    saas: {
      title: "MAINFRAME_SYS_STATUS // V1.04",
      metric1Label: "CORE_MEM_FREE",
      metric1Val: "48.2 KB",
      metric2Label: "INTERRUPTS/SEC",
      metric2Val: "60 HZ",
      metric3Label: "PARITY_ERRORS",
      metric3Val: "0 [CLEAN]",
      actionBtn: "RUN EXEC_BATCH.BAT"
    },
    media: {
      track: "BEEP_BOOP_8BIT_BOOT_SEQUENCE",
      artist: "CHIP_SYNTH_ROM",
      time: "01:45 / 02:15"
    }
  },
  "biophilic-organic": {
    ecommerce: {
      tag: "LIVING BOTANICALS",
      title: "Living Moss Air Purifier Vessel",
      desc: "Handcrafted from terracotta and reclaimed bamboo. Houses living forest bryophytes that naturally filter particulate matter.",
      price: "$130.00",
      status: "Sustainably Harvested",
      badge: "100% Bio-Circular"
    },
    saas: {
      title: "Forest Canopy Ecosystem Feed",
      metric1Label: "Oxygen Output",
      metric1Val: "+18.4 L/day",
      metric2Label: "Soil Microbiome",
      metric2Val: "Optimal Flora",
      metric3Label: "Carbon Offset",
      metric3Val: "142 kg CO2",
      actionBtn: "Nurture Ecosystem"
    },
    media: {
      track: "Rain Dropping on Fern Fronds",
      artist: "Deep Canopy Biosphere",
      time: "04:45 / 09:30"
    }
  }
};
