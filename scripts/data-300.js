// Master Catalog of 300 Distinct Design Archetypes & UI Paradigms
// Handcrafted Reference for Tareq Abu Ashee (أ. طارق ابوعشي)

const STYLES_CATALOG_300 = [
  {
    "id": "neo-brutalism",
    "num": 1,
    "nameAr": "النيو-بروتاليزم الحسي",
    "nameEn": "Tactile Neo-Brutalism",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2021 - الآن",
    "colors": [
      "#FFE600",
      "#FF5E94",
      "#00E5FF",
      "#000000",
      "#FFFDF0"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "حدود سوداء غليظة 3.5px، ظلال مسقطة صلبة 0-blur، ألوان مشبعة، شارات مائلة، تفاعل ميكانيكي صلب.",
    "css": "border: 3.5px solid #000; box-shadow: 5px 5px 0px #000; border-radius: 6px;",
    "bestFor": "أدوات المطورين، شركات الفنتك الشبابية، مجتمعات التقنية المستقلة."
  },
  {
    "id": "glassmorphism-modern",
    "num": 2,
    "nameAr": "الزجاج البلوري الحديث",
    "nameEn": "Modern Glassmorphism",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2020 - الآن",
    "colors": [
      "#8B5CF6",
      "#06B6D4",
      "#EC4899",
      "rgba(255,255,255,0.15)",
      "#0B0C1E"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "انكسار ضوئي كثيف، backdrop-filter blur، لمعان حواف متدرج، ألوان شفق قطبي متحركة بالخلفية.",
    "css": "background: rgba(255,255,255,0.08); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.2);",
    "bestFor": "تطبيقات الذكاء الاصطناعي، منصات Web3، واجهات الموسيقى الرقمية."
  },
  {
    "id": "neumorphism-soft",
    "num": 3,
    "nameAr": "النيومورفيزم الطيني المنحوت",
    "nameEn": "Soft Extruded Neumorphism",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2019 - 2021",
    "colors": [
      "#E0E5EC",
      "#B8BFC9",
      "#FFFFFF",
      "#4D7CFE",
      "#4A5568"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "عناصر منحوتة في نفس مادة السطح بدون حدود خارجية، ظلال مزدوجة متقابلة بزاوية الضوء.",
    "css": "box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; border-radius: 20px;",
    "bestFor": "أجهزة المنزل الذكي IoT، وحدات التحكم بالصوت، المفاتيح اللمسية الافتراضية."
  },
  {
    "id": "claymorphism-3d",
    "num": 4,
    "nameAr": "الكلايمورفيزم الصلصالي ثلاثي الأبعاد",
    "nameEn": "Claymorphism 3D Soft",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#FF8E72",
      "#6C5CE7",
      "#00CEC9",
      "#FFEAA7",
      "#F0F3F8"
    ],
    "font": "Fredoka, Cairo",
    "traits": "مجسمات صلصالية منتفخة، زوايا دائرية فائقة، ظلال داخلية وخارجية مزدوجة ناعمة تمنح عمقاً كرتونياً.",
    "css": "box-shadow: 12px 12px 24px rgba(0,0,0,0.1), inset -6px -6px 12px rgba(0,0,0,0.1), inset 6px 6px 12px #fff; border-radius: 30px;",
    "bestFor": "تطبيقات التعليم التفاعلي، ألعاب المتصفح، تطبيقات الأطفال، العملات الترفيهية."
  },
  {
    "id": "aurora-gradient-mesh",
    "num": 5,
    "nameAr": "الشفق الشبكي المتدرج",
    "nameEn": "Aurora Gradient Mesh",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2021 - الآن",
    "colors": [
      "#4F46E5",
      "#06B6D4",
      "#F43F5E",
      "#10B981",
      "#030712"
    ],
    "font": "Inter, Alexandria",
    "traits": "تدرجات لونية معقدة ومتحركة تشبه الأضواء القطبية، كتل ضوئية عائمة ناعمة خلف النصوص البيضاء الناصعة.",
    "css": "background: radial-gradient(at 10% 20%, #4f46e5 0px, transparent 50%), radial-gradient(at 90% 80%, #06b6d4 0px, transparent 50%);",
    "bestFor": "صفحات الهبوط للشركات الناشئة SaaS، بوابات الذكاء الاصطناعي."
  },
  {
    "id": "bento-grid-box",
    "num": 6,
    "nameAr": "شبكة بينتو اليابانية",
    "nameEn": "Bento Grid Layout",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2023 - الآن",
    "colors": [
      "#111827",
      "#1F2937",
      "#3B82F6",
      "#9CA3AF",
      "#F9FAFB"
    ],
    "font": "SF Pro, Inter, Cairo",
    "traits": "مربعات ومستطيلات متباينة الأحجام مصفوفة بتناسق شديد كعلبة البينتو اليابانية، كل بطاقة تحتوي على فكرة مستقلة.",
    "css": "display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; border-radius: 24px;",
    "bestFor": "استعراض مزايا المنتجات، بورتفوليو المصممين، لوحات التحكم التنفيذية."
  },
  {
    "id": "dark-saas-enterprise",
    "num": 7,
    "nameAr": "الـ SaaS الداكن الاحترافي",
    "nameEn": "Dark Linear SaaS Minimal",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#000000",
      "#111111",
      "#222222",
      "#5E6AD2",
      "#EDEDED"
    ],
    "font": "Inter, Geist, Cairo",
    "traits": "سواد فاحم، حدود فائقة النحافة 1px شبه شفافة، خطوط واضحة، لمعات خفيفة مركزة على زر الإجراء الرئيسي.",
    "css": "background: #000; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 0 0 1px rgba(255,255,255,0.05);",
    "bestFor": "أدوات هندسة البرمجيات، منصات إدارة المشاريع الحديثة، بنية السحابة."
  },
  {
    "id": "pill-ui-warm",
    "num": 8,
    "nameAr": "الكبسولات الناعمة الدافئة",
    "nameEn": "Warm Pill Rounded UI",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2023 - الآن",
    "colors": [
      "#FAF8F5",
      "#EDE8E1",
      "#D97706",
      "#292524",
      "#78716C"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "كبسولات دائرية كاملة border-radius: 999px، ألوان بيج وترابية ناعمة، مسافات واسعة، إحساس بالود والهدوء.",
    "css": "border-radius: 999px; background: #EDE8E1; color: #292524; padding: 10px 24px;",
    "bestFor": "تطبيقات الصحة النفسية، حجز الرحلات الهادئة، أسلوب الحياة اليومي."
  },
  {
    "id": "spatial-vision-os",
    "num": 9,
    "nameAr": "الحوسبة المكانية (VisionOS)",
    "nameEn": "Spatial Computing VisionOS",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2024 - الآن",
    "colors": [
      "rgba(255,255,255,0.22)",
      "rgba(0,0,0,0.4)",
      "#FFFFFF",
      "#0A84FF",
      "#30D158"
    ],
    "font": "SF Pro Display, Alexandria",
    "traits": "ألواح زجاجية عائمة في الفضاء ثلاثي الأبعاد، استجابة ديناميكية لضوء الغرفة الافتراضي، ظلال واقعية ساقطة في العمق.",
    "css": "backdrop-filter: blur(40px) brightness(1.2); background: rgba(255,255,255,0.18); border: 0.5px solid rgba(255,255,255,0.3);",
    "bestFor": "واجهات الواقع المعزز AR/VR، صالات العرض التفاعلية الافتراضية."
  },
  {
    "id": "minimal-monoline",
    "num": 10,
    "nameAr": "المونو-لاين الخطي الرفيع",
    "nameEn": "Monoline Wireframe Minimal",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2020 - الآن",
    "colors": [
      "#FFFFFF",
      "#000000",
      "#737373",
      "#E5E5E5",
      "#F5F5F5"
    ],
    "font": "Space Mono, Cairo",
    "traits": "خطوط مفردة بسماكة موحدة 1px، أيقونات خطية مجردة، غياب كامل للتدرجات والظلال، تركيز على التخطيط الهيكلي.",
    "css": "border: 1px solid #000; background: transparent; border-radius: 0; box-shadow: none;",
    "bestFor": "بوابات الفنون التشكيلية، معارض الهندسة المعمارية، المخططات التقنية."
  },
  {
    "id": "kinetic-typography-ui",
    "num": 11,
    "nameAr": "التيبوغرافي الكينماتيكي الحركي",
    "nameEn": "Kinetic Typography Expressive",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#000000",
      "#FFFFFF",
      "#E11D48",
      "#FBBF24",
      "#3B82F6"
    ],
    "font": "Syne, Alexandria, Cairo",
    "traits": "حروف متغيرة الأوزان تتمدد وتتقلص بالحركة، نصوص عملاقة تملأ كامل عرض الشاشة، العناوين هي العناصر البصرية الأساسية.",
    "css": "font-size: clamp(3rem, 10vw, 8rem); font-weight: 900; letter-spacing: -2px; line-height: 0.9;",
    "bestFor": "المهرجانات الموسيقية، أسبوع الموضة، وكالات الإبداع والإعلان الرقمي."
  },
  {
    "id": "dynamic-island-morph",
    "num": 12,
    "nameAr": "الجزيرة التفاعلية المتمددة",
    "nameEn": "Dynamic Island Compact HUD",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#000000",
      "#1C1C1E",
      "#30D158",
      "#FF9F0A",
      "#FFFFFF"
    ],
    "font": "SF Pro Text, Cairo",
    "traits": "كبسولة سوداء صغيرة تتمدد بسلاسة لتكشف تفاصيل معقدة مع إشعارات مصغرة حية، زوايا كروية فائقة النعومة.",
    "css": "background: #000; border-radius: 40px; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);",
    "bestFor": "شاشات الإشعارات الحية، مشغلات الموسيقى المدمجة، تتبع الطلبات المباشر."
  },
  {
    "id": "grainy-gradient-retro-tech",
    "num": 13,
    "nameAr": "التدرجات الحبيبية التقنية",
    "nameEn": "Grainy Noise Gradient Tech",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2021 - الآن",
    "colors": [
      "#1E1B4B",
      "#6366F1",
      "#A855F7",
      "#EC4899",
      "#F8FAFC"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "تدرجات لونية مشبعة مدمجة مع طبقة ضجيج حبيبي (SVG Noise/Grain) لإعطاء ملمس ورقي مطبوع وفخم.",
    "css": "background: linear-gradient(135deg, #1e1b4b, #6366f1); filter: contrast(110%); position: relative;",
    "bestFor": "مؤتمرات التقنية الكبرى، بودكاست المطورين، بطاقات الاشتراكات المميزة."
  },
  {
    "id": "material-3-expressive",
    "num": 14,
    "nameAr": "ماتيريال يو المتكيف (Material 3)",
    "nameEn": "Material You Dynamic M3",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2021 - الآن",
    "colors": [
      "#E8DEF8",
      "#6750A4",
      "#7D5260",
      "#FFD8E4",
      "#1D1B20"
    ],
    "font": "Roboto Flex, Cairo",
    "traits": "ألوان مستخرجة ديناميكياً من خلفية المستخدم، أشكال بيضاوية غير منتظمة، أزرار ومفاتيح عريضة مريحة للمس.",
    "css": "border-radius: 28px; background: #E8DEF8; color: #1D1B20; padding: 16px 24px;",
    "bestFor": "تطبيقات نظام أندرويد، المنصات الإنتاجية، أدوات تدوين الملاحظات الشخصية."
  },
  {
    "id": "skeuomorphism-2-tactile",
    "num": 15,
    "nameAr": "التجسيم الرقمي المحدث 2.0",
    "nameEn": "Skeuomorphism 2.0 Tactile",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2023 - الآن",
    "colors": [
      "#2C3038",
      "#1E2025",
      "#FF764A",
      "#E4E8F0",
      "#3E4450"
    ],
    "font": "Inter, Cairo",
    "traits": "عودة الأزرار الملموسة ولكن بتبسيط هندسي حديث، إضاءة جانبية واقعية، أسطح ألمنيوم وبلاستيك غير لامع.",
    "css": "background: linear-gradient(180deg, #363c46 0%, #242830 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 6px 12px rgba(0,0,0,0.4);",
    "bestFor": "لوحات التحكم في أجهزة الصوت الاحترافية، أجهزة المكسر، محاكيات الطيران."
  },
  {
    "id": "cyber-glass-neon",
    "num": 16,
    "nameAr": "الزجاج السيبراني النيون",
    "nameEn": "Cyber Glass Neon Edge",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2023 - الآن",
    "colors": [
      "#050811",
      "#00F0FF",
      "#7928CA",
      "#FF0080",
      "#E2E8F0"
    ],
    "font": "Orbitron, Cairo",
    "traits": "ألواح زجاجية داكنة بحواف نيون ساطعة كأنها مشحونة بالكهرباء، توهج خارجي كثيف يعكس في الظلام.",
    "css": "background: rgba(10, 16, 30, 0.7); border: 1px solid #00F0FF; box-shadow: 0 0 20px rgba(0,240,255,0.4);",
    "bestFor": "ألعاب الرياضات الإلكترونية (Esports)، بطاقات التشفير، عتاد الحاسوب."
  },
  {
    "id": "origami-paper-craft",
    "num": 17,
    "nameAr": "الأوريغامي والورق المطوي",
    "nameEn": "Origami Folded Paper UI",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2020 - الآن",
    "colors": [
      "#FDFBF7",
      "#EFE9DE",
      "#E28743",
      "#1B1B1B",
      "#C5B8A5"
    ],
    "font": "Lora, Alexandria",
    "traits": "تأثيرات الطيات والقصاصات الورقية، طبقات متراكبة بظلال تحاكي ثني الورق الطبيعي 45 درجة.",
    "css": "box-shadow: 0 15px 10px -10px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.1); border-bottom: 2px solid #EFE9DE;",
    "bestFor": "تطبيقات تدوين المذكرات والمذكرات الشخصية، بطاقات الهدايا الرقمية، دعوات الزفاف."
  },
  {
    "id": "brutalist-anti-design",
    "num": 18,
    "nameAr": "مناهضة التصميم الفوضوي (Anti-Design)",
    "nameEn": "Brutalist Anti-Design Web",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2018 - الآن",
    "colors": [
      "#FFFF00",
      "#FF00FF",
      "#0000FF",
      "#00FF00",
      "#000000"
    ],
    "font": "Courier New, Times New Roman, Tahoma",
    "traits": "كسر مقصود لكل قواعد التناسق والهوامش، خطوط افتراضية غير متطابقة، ألوان متضاربة عمداً لجذب الانتباه.",
    "css": "transform: rotate(2deg); border: 4px dashed #FF00FF; background: #FFFF00; color: #000;",
    "bestFor": "معارض الأزياء التجريبية المستقلة، مهرجانات الفن الطليعي، ملصقات النوادي الليلية."
  },
  {
    "id": "soft-shadow-depth",
    "num": 19,
    "nameAr": "العمق الناعم متعدد الطبقات",
    "nameEn": "Layered Soft Shadow Depth",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2021 - الآن",
    "colors": [
      "#FFFFFF",
      "#F8FAFC",
      "#64748B",
      "#0F172A",
      "#3B82F6"
    ],
    "font": "Inter, Cairo",
    "traits": "طبقات عائمة تستخدم 3-4 مستويات من الظلال المتدرجة الشفافة للغاية لتوليد عمق ثلاثي الأبعاد دون أي حدود صريحة.",
    "css": "box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 10px 25px -5px rgba(0,0,0,0.05), 0 20px 48px -10px rgba(0,0,0,0.05);",
    "bestFor": "بوابات التحليلات المتقدمة، برامج المحاسبة السحابية الحديثة، واجهات العمل اليومية."
  },
  {
    "id": "monochrome-brutal",
    "num": 20,
    "nameAr": "البروتاليزم أحادي اللون",
    "nameEn": "High-Contrast Monochrome Brutal",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#000000",
      "#FFFFFF",
      "#171717",
      "#EDEDED",
      "#737373"
    ],
    "font": "Space Grotesk, IBM Plex Sans Arabic",
    "traits": "أبيض وأسود خالص 100% بدون أي ألوان ثانوية، تباين حاد جداً، حدود مستقيمة صلبة، نصوص عملاقة.",
    "css": "background: #000; color: #fff; border: 2px solid #fff; border-radius: 0;",
    "bestFor": "استوديوهات العمارة الحديثة، بورتفوليو المصورين الفوتوغرافيين، شركات الأزياء الراقية."
  },
  {
    "id": "holographic-foil-ui",
    "num": 21,
    "nameAr": "الرقاقة الهولوغرافية اللامعة",
    "nameEn": "Iridescent Holographic Foil",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#FF80BF",
      "#9580FF",
      "#80FFEA",
      "#FFFF80",
      "#181A20"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "انعكاسات قوس قزح اللامعة مع حركة الماوس، بطاقات تشبه بطاقات البوكيمون الهولوغرافية النادرة.",
    "css": "background: linear-gradient(135deg, #ff80bf, #9580ff, #80ffea, #ffff80); -webkit-background-clip: text;",
    "bestFor": "بطاقات العضوية الحصرية VIP، تذاكر الفعاليات الفاخرة، المقتنيات الرقمية."
  },
  {
    "id": "frosted-matte-nordic",
    "num": 22,
    "nameAr": "الزجاج الثلجي غير اللامع",
    "nameEn": "Nordic Frosted Matte Glass",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#F3F4F6",
      "#E5E7EB",
      "#4B5563",
      "#111827",
      "#10B981"
    ],
    "font": "Inter, Alexandria",
    "traits": "تعتيم بلوري بدون أي لمعان فاقع، ألوان رمادية ثلجية هادئة، زوايا ناعمة جداً، إحساس بالسكينة.",
    "css": "background: rgba(243, 244, 246, 0.85); backdrop-filter: blur(16px); border: 1px solid #E5E7EB;",
    "bestFor": "تطبيقات التوثيق والويكي الداخلي للشركات، برامج قراءة الكتب الرقمية."
  },
  {
    "id": "vector-flat-vibrant",
    "num": 23,
    "nameAr": "الفلات الفاقع الحديث (Flat 2.0)",
    "nameEn": "Vibrant Modern Flat 2.0",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2018 - الآن",
    "colors": [
      "#4F46E5",
      "#06B6D4",
      "#F59E0B",
      "#10B981",
      "#F8FAFC"
    ],
    "font": "Cairo, Inter",
    "traits": "تسطيح مريح بدون تعقيد مع إضافة ظلال خفيفة جداً لتمييز العناصر القابلة للنقر، ألوان زاهية وودودة.",
    "css": "background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);",
    "bestFor": "التطبيقات المصرفية الاستهلاكية، بوابات التجارة الإلكترونية السريعة."
  },
  {
    "id": "isometric-3d-grid",
    "num": 24,
    "nameAr": "الشبكة الآيزومترية ثلاثية الأبعاد",
    "nameEn": "Isometric 3D Architecture UI",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2020 - الآن",
    "colors": [
      "#1E293B",
      "#38BDF8",
      "#818CF8",
      "#F1F5F9",
      "#0F172A"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "رسم هندسي متساوي القياس بزاوية 30 درجة، عناصر شبكية ثلاثية الأبعاد تظهر العمق الهندسي بدقة.",
    "css": "transform: rotateX(60deg) rotateZ(-45deg); box-shadow: -20px 20px 40px rgba(0,0,0,0.3);",
    "bestFor": "مخططات إدارة المستودعات، محاكاة المدن الذكية، لوحات تتبع الخوادم السحابية."
  },
  {
    "id": "fluid-organic-blobs",
    "num": 25,
    "nameAr": "الأشكال العضوية السائلة (Blobs)",
    "nameEn": "Fluid Organic Blobs UI",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2021 - الآن",
    "colors": [
      "#EC4899",
      "#8B5CF6",
      "#3B82F6",
      "#FEF08A",
      "#FFFFFF"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "حواف منحنية حرة تتغير ديناميكياً (border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%)، انسيابية تشبه الماء.",
    "css": "border-radius: 64% 36% 47% 53% / 41% 44% 56% 59%; background: linear-gradient(135deg, #ec4899, #8b5cf6);",
    "bestFor": "تطبيقات الإبداع الموسيقي، صانعي المحتوى، علامات مستحضرات التجميل المبتكرة."
  },
  {
    "id": "glow-dark-minimal",
    "num": 26,
    "nameAr": "التوهج الخافت في الظلام",
    "nameEn": "Subtle Dark Glow Minimal",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2023 - الآن",
    "colors": [
      "#090A0F",
      "#131722",
      "#6366F1",
      "#A5B4FC",
      "#F8FAFC"
    ],
    "font": "Inter, Cairo",
    "traits": "واجهة داكنة مريحة جدا للعين في الليل، هالات توهج ناعمة جداً تضيء فقط عند تمرير الماوس فوق البطاقات.",
    "css": "background: #131722; border: 1px solid rgba(99,102,241,0.2); box-shadow: 0 0 25px rgba(99,102,241,0.15);",
    "bestFor": "محررات الأكواد، منصات قراءة المقالات التقنية الطويلة، منصات الذكاء الاصطناعي."
  },
  {
    "id": "glass-morphism-dark-frosted",
    "num": 27,
    "nameAr": "الزجاج الداكن المصنفر",
    "nameEn": "Dark Frosted Smoked Glass",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#000000",
      "rgba(20,20,25,0.7)",
      "#60A5FA",
      "#94A3B8",
      "#FFFFFF"
    ],
    "font": "Geist, Cairo",
    "traits": "زجاج مدخن داكن يمتص الأضواء الخلفية، حدود رمادية رفيعة، انعكاسات ضوئية باردة بدون تشتيت.",
    "css": "background: rgba(18, 18, 24, 0.75); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1);",
    "bestFor": "لوحات التداول المالي الليلي، محطات المراقبة الأمنية، تطبيقات الاستثمار الخاصة."
  },
  {
    "id": "duotone-bold-contrast",
    "num": 28,
    "nameAr": "ثنائي اللون عالي التباين (Duotone)",
    "nameEn": "Bold Duotone Contrast",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2019 - الآن",
    "colors": [
      "#1E1B4B",
      "#F43F5E",
      "#FFFFFF",
      "#312E81",
      "#FDA4AF"
    ],
    "font": "Syne, Alexandria",
    "traits": "الاعتماد الصارم على لونين متناقضين رئيسيين فقط لكامل الموقع، كل الصور والأيقونات معالجة كـ Duotone.",
    "css": "background: #1E1B4B; color: #F43F5E; border: 2px solid #F43F5E;",
    "bestFor": "حملات العلامات التجارية الجريئة، منصات الموسيقى المستقلة (Spotify campaigns)."
  },
  {
    "id": "neumorphic-dark-carved",
    "num": 29,
    "nameAr": "النيومورفيزم الليلي المحفور",
    "nameEn": "Dark Carved Obsidian Neumorphism",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2021 - الآن",
    "colors": [
      "#1A1C20",
      "#141619",
      "#24282D",
      "#00F0FF",
      "#8A94A6"
    ],
    "font": "Inter, Cairo",
    "traits": "أسطح حجر الأوبسيديان الأسود اللامع مع حفر ونحت بارز عبر ظلال متطابقة، إضاءة زرقاء دقيقة.",
    "css": "background: #1A1C20; box-shadow: 6px 6px 12px #101214, -6px -6px 12px #24262c; border-radius: 16px;",
    "bestFor": "أنظمة ترفيه السيارات الفاخرة (Tesla/Porsche dash)، كونسول التحكم المنزلي المتقدم."
  },
  {
    "id": "card-stack-carousel-ui",
    "num": 30,
    "nameAr": "حزم البطاقات المكدسة ثلاثية الأبعاد",
    "nameEn": "3D Floating Card Stacks",
    "cat": "modern-ui",
    "catAr": "واجهات الويب المعاصرة",
    "era": "2022 - الآن",
    "colors": [
      "#FFFFFF",
      "#F1F5F9",
      "#6366F1",
      "#0F172A",
      "#E2E8F0"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "بطاقات متراكبة فيزيائياً تظهر الحافة العلوية لكل بطاقة سفلية، سحب وتدوير تلقائي عند التمرير.",
    "css": "transform: translateY(-8px) scale(0.98); box-shadow: 0 20px 30px rgba(0,0,0,0.1);",
    "bestFor": "تطبيقات التوظيف، منصات مقارنة الأسعار، بطاقات الدفع الافتراضية."
  },
  {
    "id": "bauhaus-functional",
    "num": 31,
    "nameAr": "مدرسة الباوهاوس الوظيفية",
    "nameEn": "Bauhaus Functionalist Form",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1919 - 1933",
    "colors": [
      "#E63946",
      "#F1FAEE",
      "#A8DADC",
      "#457B9D",
      "#1D3557"
    ],
    "font": "Futura, Alexandria",
    "traits": "الشكل يتبع الوظيفة، أشكال هندسية أولية (دائرة، مثلث، مربع)، ألوان أساسية نقية، غياب الزخرفة الزائفة.",
    "css": "border-radius: 0; border: 3px solid #1D3557; background: #F1FAEE;",
    "bestFor": "التصميم الصناعي، المعارض المعمارية، مدارس الفنون والتصميم."
  },
  {
    "id": "de-stijl-mondrian",
    "num": 32,
    "nameAr": "مجموعة دي ستايل (موندريان)",
    "nameEn": "De Stijl Neoplasticism",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1917 - 1931",
    "colors": [
      "#DE3831",
      "#002B7F",
      "#FEE12B",
      "#FFFFFF",
      "#000000"
    ],
    "font": "Arial, Cairo",
    "traits": "خطوط أفقية ورأسية سوداء سميكة تشكل شبكة غير متناظرة مملوءة بمربعات من الألوان الأساسية فقط.",
    "css": "border: 4px solid #000; box-shadow: none; display: grid;",
    "bestFor": "المشاريع المفاهيمية، استوديوهات التصميم التجريبي، منصات الفن المعاصر."
  },
  {
    "id": "art-deco-streamline",
    "num": 33,
    "nameAr": "الآرت ديكو الفاخر",
    "nameEn": "Art Deco Geometric Luxury",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1920 - 1939",
    "colors": [
      "#D4AF37",
      "#1A1A1A",
      "#0D2538",
      "#EAE6DF",
      "#997D3D"
    ],
    "font": "Cinzel, Amiri",
    "traits": "خطوط ذهبية متوازية، تماثل صارم، أشكال مدرجة زقورية (Ziggurat)، لمعان الأسطح المصقولة والرخام.",
    "css": "border: 2px solid #D4AF37; box-shadow: 0 0 15px rgba(212,175,55,0.2); background: #1A1A1A;",
    "bestFor": "الفنادق التاريخية الفخمة، حفلات الجوائز، دور المجوهرات الكبرى."
  },
  {
    "id": "art-nouveau-floral",
    "num": 34,
    "nameAr": "الآرت نوفو النباتي الملتوي",
    "nameEn": "Art Nouveau Floral Organic",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1890 - 1910",
    "colors": [
      "#3D5A45",
      "#D8B168",
      "#8B4513",
      "#F5EBE6",
      "#4A6B6C"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "خطوط منحنية عضوية مستوحاة من سيقان النباتات والزهور وشعر النساء، إحساس حالم وغير متناظر.",
    "css": "border-radius: 20px 4px 20px 4px; border: 1.5px solid #D8B168; background: #F5EBE6;",
    "bestFor": "العطور الطبيعية، منتجات العناية بالبشرة العضوية، صالونات الشاي الكلاسيكية."
  },
  {
    "id": "constructivism-russian",
    "num": 35,
    "nameAr": "البنائية الروسية الثورية",
    "nameEn": "Russian Constructivism",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1915 - 1935",
    "colors": [
      "#CC0000",
      "#000000",
      "#FFFFFF",
      "#FFCC00",
      "#333333"
    ],
    "font": "Impact, Alexandria",
    "traits": "كتل مائلة ديناميكية بزاوية 45 درجة، حروف ضخمة داكنة، استخدام تقنيات الكولاج الفوتوغرافي الحاد.",
    "css": "transform: skew(-3deg); border: 4px solid #000; background: #CC0000; color: #FFF;",
    "bestFor": "الملصقات الاحتجاجية، الحملات التوعوية الثورية، أغلفة المجلات الفكرية."
  },
  {
    "id": "dadaism-collage",
    "num": 36,
    "nameAr": "الدادائية والقصاصات المتمردة",
    "nameEn": "Dadaism Anti-Art Collage",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1916 - 1924",
    "colors": [
      "#111111",
      "#E6E2D3",
      "#D92027",
      "#8A8D91",
      "#FFD700"
    ],
    "font": "Courier New, Amiri",
    "traits": "قصاصات جرائد عشوائية، نصوص متنافرة الأحجام، كسر مقصود للمنطق للاعتراض على عبثية الواقع.",
    "css": "transform: rotate(-1.5deg); border: 2px dashed #000; background: #E6E2D3;",
    "bestFor": "المعارض الفنية المستقلة، مجلات الزين (Zines)، فعاليات الشعر الحديث."
  },
  {
    "id": "surrealism-dreamscape",
    "num": 37,
    "nameAr": "السريالية الحالمة",
    "nameEn": "Surrealist Dreamscape",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1924 - 1966",
    "colors": [
      "#2B1B54",
      "#D49B58",
      "#5B8FB9",
      "#0B0C10",
      "#E1D9D1"
    ],
    "font": "Cinzel, Amiri",
    "traits": "جمع بين عناصر غير متجانسة في مشهد حالم، آفاق لا نهائية، ظلال طويلة دراماتيكية، تشوهات فيزيائية.",
    "css": "backdrop-filter: blur(8px); box-shadow: 20px 20px 60px rgba(43,27,84,0.6);",
    "bestFor": "المعارض الفلسفية، تطبيقات الكتابة الإبداعية، الروايات الخيالية."
  },
  {
    "id": "pop-art-warhol",
    "num": 38,
    "nameAr": "البوب آرت (آندي وارهول)",
    "nameEn": "Pop Art Screenprint Halftone",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1950s - 1970s",
    "colors": [
      "#FF1493",
      "#00FFFF",
      "#FFFF00",
      "#000000",
      "#FFFFFF"
    ],
    "font": "Bebas Neue, Cairo",
    "traits": "نقاط طباعة الهاف تون (Ben-Day dots)، ألوان نيون فاقعة مكررة في شبكات متجاورة، احتفاء بالثقافة الاستهلاكية.",
    "css": "background-image: radial-gradient(#000 20%, transparent 20%); background-size: 8px 8px;",
    "bestFor": "المتاجر الشبابية، فعاليات ثقافة البوب، منصات بيع البوسترات والملصقات."
  },
  {
    "id": "futurism-italian",
    "num": 39,
    "nameAr": "المستقبلية الإيطالية والحركة",
    "nameEn": "Italian Futurism Speed",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1909 - 1944",
    "colors": [
      "#D62246",
      "#4B1D3F",
      "#E9C46A",
      "#1D3557",
      "#FFFFFF"
    ],
    "font": "Oswald, Alexandria",
    "traits": "خطوط متلاشية تعبر عن السرعة الفائقة والآلات والمحركات والضوء، تراكب ديناميكي متفجر.",
    "css": "transform: skewX(-12deg); border-left: 8px solid #D62246;",
    "bestFor": "رياضات السيارات، ملبوسات الجري، منصات الأخبار الرياضية الحية."
  },
  {
    "id": "suprematism-malevich",
    "num": 40,
    "nameAr": "السوبرماتية والمربع الأسود",
    "nameEn": "Suprematism Pure Geometry",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1915 - 1920s",
    "colors": [
      "#000000",
      "#D00000",
      "#FFFFFF",
      "#3A86FF",
      "#FFBE0B"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "سيادة الإحساس الخالص بالفن، أشكال هندسية مجردة تطفو في فراغ أبيض شاسع، تحرر تام من الواقعية.",
    "css": "border: none; background: #FFFFFF; box-shadow: none;",
    "bestFor": "معارض النحت التجريدي، المنصات الفكرية، التصاميم المفاهيمية الحرة."
  },
  {
    "id": "memphis-milano-80s",
    "num": 41,
    "nameAr": "مجموعة ممفيس الإيطالية الصاخبة",
    "nameEn": "Memphis Milano Radical 80s",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1981 - 1987",
    "colors": [
      "#FF6B6B",
      "#4ECDC4",
      "#FFE66D",
      "#292F36",
      "#FF9F1C"
    ],
    "font": "Fredoka, Cairo",
    "traits": "نقوش متعرجة (Squiggles)، أشكال هندسية غير متناسقة، نقوش حيوانية ملونة، مرح طفولي متمرد.",
    "css": "background-image: radial-gradient(#292F36 15%, transparent 16%), radial-gradient(#292F36 15%, transparent 16%);",
    "bestFor": "تطبيقات الألعاب التفاعلية، أزياء الثمانينات، منصات التصميم الإبداعي المرحة."
  },
  {
    "id": "mid-century-modern-60s",
    "num": 42,
    "nameAr": "حداثة منتصف القرن (الستينات)",
    "nameEn": "Mid-Century Modern Organic",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1945 - 1969",
    "colors": [
      "#D97706",
      "#047857",
      "#4338CA",
      "#FEF3C7",
      "#78350F"
    ],
    "font": "Outfit, Alexandria",
    "traits": "خشب الساج الدافئ، أشكال كلوية وبيضوية منحنية، ألوان خردلية وزيتونية هادئة، وظائفية رشيقة.",
    "css": "border-radius: 40px 10px 40px 10px; background: #FEF3C7; color: #78350F;",
    "bestFor": "متاجر الأثاث الكلاسيكي، مجلات العمارة الداخلية، المقاهي التخصصية."
  },
  {
    "id": "victorian-engraving",
    "num": 43,
    "nameAr": "النقوش الفيكتورية المعقدة",
    "nameEn": "Victorian Ornate Engraving",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1837 - 1901",
    "colors": [
      "#2B1B17",
      "#8B0000",
      "#D4AF37",
      "#FBF6E9",
      "#4A3B32"
    ],
    "font": "Cinzel, Amiri",
    "traits": "زخارف حلزونية محفورة، إطارات نباتية معقدة، خطوط كلاسيكية مذيلة، فخامة الطباعة الملكية البريطانية.",
    "css": "border: 3px double #D4AF37; outline: 1px solid #2B1B17; background: #FBF6E9;",
    "bestFor": "دور النشر التراثية، علامات الشاي والقهوة الفاخرة، المتاحف الملكية."
  },
  {
    "id": "gothic-revival-dark",
    "num": 44,
    "nameAr": "الإحياء القوطي المظلم",
    "nameEn": "Gothic Revival Vaulted Arch",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1840 - 1900",
    "colors": [
      "#0D0D0D",
      "#4A0E17",
      "#B8860B",
      "#2F3E46",
      "#E0DDCF"
    ],
    "font": "Cinzel Decorative, Amiri",
    "traits": "أقواس قوطية مدببة، نوافذ وردية مزخرفة، سواد درامي مع لمسات عنابية وذهبية باهتة.",
    "css": "clip-path: polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%); background: #0D0D0D;",
    "bestFor": "موسيقى الميتال، الروايات القوطية المرعبة، العلامات الفلسفية الغامضة."
  },
  {
    "id": "baroque-filigree",
    "num": 45,
    "nameAr": "الباروك الملكي المذهب",
    "nameEn": "Baroque Gilded Filigree",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1600 - 1750",
    "colors": [
      "#1C160C",
      "#D4AF37",
      "#7A1C1C",
      "#F4ECD8",
      "#B8860B"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "زخارف ذهبية مكثفة، منحنيات لولبية حادة، دراما بصرية تعبر عن الجلال والقوة والرهبة الدينية.",
    "css": "border: 2px solid #D4AF37; box-shadow: inset 0 0 20px rgba(212,175,55,0.4);",
    "bestFor": "دور الأوبرا العالمية، القصور والمتاحف الملكية، الحفلات السيمفونية."
  },
  {
    "id": "rococo-pastel-grace",
    "num": 46,
    "nameAr": "الروكوكو الباستيلي الرقيق",
    "nameEn": "Rococo Pastel Lightness",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1730 - 1770",
    "colors": [
      "#FCE4EC",
      "#E1F5FE",
      "#FFF9C4",
      "#D7CCC8",
      "#880E4F"
    ],
    "font": "Cormorant Garamond, Amiri",
    "traits": "ألوان باستيلية أنثوية رقيقة (وردي ناعم، سماوي فاتح)، انحناءات على شكل حرف C و S، غياب الظلال القاسية.",
    "css": "border-radius: 24px; background: #FCE4EC; border: 1px solid #FFF9C4;",
    "bestFor": "صالونات التجميل الفاخرة، صانعو الحلويات الفرنسية، الأزياء المخملية."
  },
  {
    "id": "romanticism-sublime",
    "num": 47,
    "nameAr": "الرومانسية والطبيعة الجليلة",
    "nameEn": "Romanticism The Sublime",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1780 - 1850",
    "colors": [
      "#1A2530",
      "#5C3D2E",
      "#C7B198",
      "#F0ECE2",
      "#845460"
    ],
    "font": "Amiri, Playfair Display",
    "traits": "مشاعر جياشة، مناظر ضبابية عاصفة، احتفاء بعظمة الطبيعة أمام ضآلة الإنسان، إضاءة شمعية خافتة.",
    "css": "background: radial-gradient(circle, #5C3D2E 0%, #1A2530 100%); color: #F0ECE2;",
    "bestFor": "المجموعات الشعرية، معارض الرسم الزيتي، منصات الأدب الإنساني."
  },
  {
    "id": "impressionism-light",
    "num": 48,
    "nameAr": "الانطباعية وتماوج الضوء",
    "nameEn": "Impressionist Dappled Light",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1860s - 1880s",
    "colors": [
      "#708090",
      "#ADD8E6",
      "#FFFACD",
      "#E6E6FA",
      "#2F4F4F"
    ],
    "font": "Newsreader, Alexandria",
    "traits": "ضربات فرشاة سريعة ومرئية، دراسة تأثير الضوء الطبيعي المتغير في الهواء الطلق، غياب الأسود الصافي.",
    "css": "backdrop-filter: blur(4px); background: rgba(255, 250, 205, 0.4); border-radius: 12px;",
    "bestFor": "المعارض الفنية الخارجية، مزارع العنب الريفية، مهرجانات الرسم الحر."
  },
  {
    "id": "expressionism-raw",
    "num": 49,
    "nameAr": "التعبيرية الخام الصارخة",
    "nameEn": "Expressionist Raw Emotion",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1905 - 1920",
    "colors": [
      "#8B0000",
      "#FF4500",
      "#2F4F4F",
      "#000000",
      "#FFE4B5"
    ],
    "font": "Syne, Cairo",
    "traits": "تشويه الخطوط والألوان عمداً للتعبير عن القلق والألم الداخلي والنفس البشرية، زوايا قاسية ومتشنجة.",
    "css": "transform: skew(-2deg, 1deg); border: 3px solid #8B0000; background: #FFE4B5;",
    "bestFor": "المسرح الدرامي المستقل، الروايات الوجودية، معارض علم النفس."
  },
  {
    "id": "cubism-analytic",
    "num": 50,
    "nameAr": "التكعيبية التحليلية (بيكاسو)",
    "nameEn": "Analytic Cubism Fractured",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1907 - 1919",
    "colors": [
      "#5A4D41",
      "#8C7A6B",
      "#C2B29F",
      "#2A241F",
      "#E6DDD0"
    ],
    "font": "Space Grotesk, Alexandria",
    "traits": "تفكيك العنصر إلى أوجه ومساقط هندسية متعددة وإعادة تركيبها على سطح ثنائي الأبعاد في آن واحد.",
    "css": "clip-path: polygon(0 0, 100% 10%, 90% 100%, 10% 90%); background: #C2B29F;",
    "bestFor": "معارض الفن الطليعي، المهرجانات المعمارية، التطبيقات الهندسية التفكيكية."
  },
  {
    "id": "op-art-kinetic-illusion",
    "num": 51,
    "nameAr": "فن الخداع البصري (Op Art)",
    "nameEn": "Op Art Optical Illusion",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1960s",
    "colors": [
      "#000000",
      "#FFFFFF",
      "#FF0000",
      "#0000FF",
      "#333333"
    ],
    "font": "Inter, Space Mono",
    "traits": "خطوط متوازية متموجة تولد إيهاماً حركياً بالدوران أو التذبذب عند النظر إليها، دقة هندسية رياضية.",
    "css": "background: repeating-linear-gradient(45deg, #000, #000 10px, #fff 10px, #fff 20px);",
    "bestFor": "أغلفة الألبومات الإلكترونية، أزياء الخداع البصري، الهويات البصرية الصادمة."
  },
  {
    "id": "psychedelic-60s-rock",
    "num": 52,
    "nameAr": "السايكدلك والموجة الهيبية",
    "nameEn": "Psychedelic 60s Hippie Fluid",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1965 - 1972",
    "colors": [
      "#FF007F",
      "#7F00FF",
      "#00FF7F",
      "#FF7F00",
      "#FFFF00"
    ],
    "font": "Shrikhand, Cairo",
    "traits": "حروف ذائبة ومتموجة كالسوائل، ألوان قوس قزح مشبعة بصرخة بصرية، إلغاء الحدود المستقيمة.",
    "css": "border-radius: 50% 20% / 10% 40%; background: linear-gradient(45deg, #FF007F, #7F00FF, #00FF7F);",
    "bestFor": "مهرجانات الروك الكلاسيكية، حركة الهيبيز، الملصقات الموسيقية الحرة."
  },
  {
    "id": "brutalist-architecture-concrete",
    "num": 53,
    "nameAr": "عمارة الخرسانة المسلحة (Brutalism)",
    "nameEn": "Raw Concrete Architecture",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1950 - 1975",
    "colors": [
      "#5A5D64",
      "#8C929D",
      "#35383E",
      "#D1D5DB",
      "#1A1C1E"
    ],
    "font": "JetBrains Mono, Alexandria",
    "traits": "أسطح خرسانية غير معالجة تظهر آثار ألواح الخشب، كتل ضخمة مهيبة، رفض كامل للطلاء والزخرفة.",
    "css": "background: #5A5D64; border: 4px solid #35383E; box-shadow: 10px 10px 0px #1A1C1E;",
    "bestFor": "بوابات الهندسة المدنية، المعاهد الأكاديمية الحكومية، مشاريع التوثيق المدني."
  },
  {
    "id": "arts-and-crafts-morris",
    "num": 54,
    "nameAr": "حركة الفنون والحرف (وليام موريس)",
    "nameEn": "Arts and Crafts Movement",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1880 - 1920",
    "colors": [
      "#2B4C3F",
      "#C99A52",
      "#8A3324",
      "#EADBC8",
      "#3E2723"
    ],
    "font": "Amiri, Cinzel",
    "traits": "رد فعل ضد الإنتاج الصناعي الرخيص، عودة للحرفية اليدوية ونقوش النباتات الطبيعية والأخشاب الأصيلة.",
    "css": "border: 2px solid #C99A52; background: #EADBC8; color: #3E2723;",
    "bestFor": "المنتجات الخشبية اليدوية، السيراميك الحرفي، المفروشات المنسوجة يدوياً."
  },
  {
    "id": "ukiyo-e-woodblock",
    "num": 55,
    "nameAr": "طباعة الخشب اليابانية (أوكييو-إه)",
    "nameEn": "Ukiyo-e Japanese Woodblock",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1603 - 1867",
    "colors": [
      "#1C2D42",
      "#C84B31",
      "#EADCA6",
      "#34626C",
      "#0F111A"
    ],
    "font": "Noto Serif JP, Amiri",
    "traits": "خطوط خارجية انسيابية، مساحات لونية مسطحة مأخوذة من الأصباغ الطبيعية، مشاهد الأمواج والجبال والمدن.",
    "css": "border-top: 4px solid #C84B31; background: #EADCA6; color: #1C2D42;",
    "bestFor": "المطاعم اليابانية الأصيلة، معارض الفنون الشرقية، الشاي التقليدي."
  },
  {
    "id": "wiener-werkstatte",
    "num": 56,
    "nameAr": "ورش عمل فيينا الفنية",
    "nameEn": "Wiener Werkstatte Geometric",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1903 - 1932",
    "colors": [
      "#1A1A1A",
      "#FFFFFF",
      "#C5A059",
      "#4A6B82",
      "#8C2D19"
    ],
    "font": "Cinzel, Alexandria",
    "traits": "شبكات المربعات البيضاء والسوداء المتقاطعة، تطعيم هندسي دقيق، دمج الحرف اليدوية مع النقاء المعماري.",
    "css": "border: 2px solid #000; background: #FFF; box-shadow: 4px 4px 0 #C5A059;",
    "bestFor": "صالات المزادات الفنية، استوديوهات التصميم النمساوي، المعارض الهندسية."
  },
  {
    "id": "precisionism-industry",
    "num": 57,
    "nameAr": "الدقّية الصناعية الأمريكية",
    "nameEn": "Precisionism Industrial Order",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1920s - 1930s",
    "colors": [
      "#3E4A56",
      "#7C8D99",
      "#C49A45",
      "#D8DFE2",
      "#1F2428"
    ],
    "font": "Oswald, Cairo",
    "traits": "تصوير المصانع والصوامع والجسور بخطوط هندسية قاطعة ودقيقة خالية من أي تفاصيل عاطفية أو ضبابية.",
    "css": "border-radius: 0; border: 1.5px solid #3E4A56; background: #D8DFE2;",
    "bestFor": "شركات التصنيع الثقيل، شركات اللوجستيات والموانئ، التقارير الهندسية."
  },
  {
    "id": "vorticism-dynamism",
    "num": 58,
    "nameAr": "الدوامية الهندسية (Vorticism)",
    "nameEn": "Vorticism Hard-Edged Vortex",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1914 - 1919",
    "colors": [
      "#E63946",
      "#F1FAEE",
      "#1D3557",
      "#000000",
      "#FFB703"
    ],
    "font": "Space Grotesk, Alexandria",
    "traits": "دوامة طاقة حركية قاسية تجمع التكعيبية والمستقبلية بخطوط حادة كالسكين تعبر عن صدمة العصر الصناعي.",
    "css": "clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%); background: #1D3557; color: #FFF;",
    "bestFor": "الفرق الموسيقية التجريبية، ملصقات فنون الدفاع عن النفس، الفعاليات الطليعية."
  },
  {
    "id": "deconstructivism-flux",
    "num": 59,
    "nameAr": "التفكيكية المعمارية (زها حديد)",
    "nameEn": "Deconstructivism Non-Linear",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1988 - الآن",
    "colors": [
      "#111111",
      "#8E9AA0",
      "#C8D1D5",
      "#D32F2F",
      "#F5F5F5"
    ],
    "font": "Space Grotesk, Alexandria",
    "traits": "تفكيك الأسطح، غياب التوازي والزوايا القائمة، أشكال انسيابية حرة تتحدى الجاذبية الأرضية.",
    "css": "transform: perspective(600px) rotateY(4deg) rotateX(2deg); background: #111; color: #FFF;",
    "bestFor": "المشاريع المعمارية الأيقونية، متاحف الفن المستقبلي، بورتفوليو النحت الرقمي."
  },
  {
    "id": "plakatstil-poster",
    "num": 60,
    "nameAr": "نمط الملصق الألماني التجاري",
    "nameEn": "Plakatstil German Poster Art",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1905 - 1915",
    "colors": [
      "#D90429",
      "#2B2D42",
      "#8D99AE",
      "#EDF2F4",
      "#EF233C"
    ],
    "font": "Bebas Neue, Cairo",
    "traits": "تصوير المنتج بحجم ضخم مع اسمه فقط بخط عريض وبدون أي نصوص ثانوية، كفاءة ترويجية قصوى.",
    "css": "font-size: 2.5rem; font-weight: 900; background: #2B2D42; color: #EDF2F4;",
    "bestFor": "إعلانات المنتجات الاستهلاكية الفورية، ملصقات الشوارع، الهويات التجارية البسيطة."
  },
  {
    "id": "postmodern-irony-80s",
    "num": 61,
    "nameAr": "ما بعد الحداثة الساخرة",
    "nameEn": "Postmodern Playful Irony",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1975 - 1995",
    "colors": [
      "#FF70A6",
      "#FF9770",
      "#FFD670",
      "#E9FF70",
      "#70D6FF"
    ],
    "font": "Comic Neue, Cairo",
    "traits": "اقتباس عناصر من التاريخ وإعادة استخدامها بسخرية ومرح، ألوان باستيلية غير متوقعة، كسر هيبة الحداثة.",
    "css": "border: 3px dotted #FF70A6; border-radius: 20px 0 20px 0; background: #FFD670;",
    "bestFor": "مهرجانات الكوميديا، المنتجات الترفيهية العائلية، مجلات الفكاهة الساخرة."
  },
  {
    "id": "renaissance-proportion",
    "num": 62,
    "nameAr": "تناغم عصر النهضة والنسبة الذهبية",
    "nameEn": "Renaissance Golden Proportion",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1400 - 1600",
    "colors": [
      "#3D2B1F",
      "#8C6239",
      "#C5A059",
      "#F7F2E7",
      "#1A110B"
    ],
    "font": "Amiri, Cinzel",
    "traits": "تناسق هندسي رياضي محكوم بالنسبة الذهبية 1.618، إضاءة الكياروسكورو (تدرج الضوء والظل)، كمال بصري متزن.",
    "css": "width: 61.8%; margin: 0 auto; border: 1px solid #C5A059; background: #F7F2E7;",
    "bestFor": "المؤسسات الأكاديمية العريقة، الموسوعات العلمية، دور المخطوطات."
  },
  {
    "id": "mannerism-tension",
    "num": 63,
    "nameAr": "التكلفية (مانيريزم) والدراما الملتوية",
    "nameEn": "Mannerism Dramatic Tension",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1520 - 1600",
    "colors": [
      "#4A1525",
      "#1B3B36",
      "#D4AF37",
      "#EAD8C0",
      "#211018"
    ],
    "font": "Amiri, Cormorant Garamond",
    "traits": "تمديد مبالغ فيه للأبعاد والنسب، ألوان متوترة وغريبة، تعبير عن الاضطراب والتعقيد الفكري.",
    "css": "transform: scaleY(1.08); background: #4A1525; color: #EAD8C0;",
    "bestFor": "المسرحيات التراجيدية، أوبرا الباروك المظلمة، المعارض الفلسفية المعقدة."
  },
  {
    "id": "fauvism-wild-color",
    "num": 64,
    "nameAr": "الوحشية وتحرير الألوان (ماتيس)",
    "nameEn": "Fauvism Wild Pure Pigment",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1905 - 1910",
    "colors": [
      "#D90429",
      "#FF9F1C",
      "#2EC4B6",
      "#011627",
      "#E71D36"
    ],
    "font": "Syne, Cairo",
    "traits": "استخدام الألوان النقية مباشرة من أنبوب الطلاء دون خلط، الشجرة يمكن أن تكون حمراء والسماء برتقالية.",
    "css": "background: linear-gradient(120deg, #D90429, #FF9F1C, #2EC4B6); color: #FFF;",
    "bestFor": "مدارس تعليم الفنون للأطفال، المهرجانات الصيفية، الحملات الإعلانية المبهجة."
  },
  {
    "id": "abstract-expressionism-pollock",
    "num": 65,
    "nameAr": "التعبيرية التجريدية والسكب اللوني",
    "nameEn": "Abstract Expressionist Drip",
    "cat": "art-history",
    "catAr": "المدارس الفنية والتاريخية",
    "era": "1940s - 1950s",
    "colors": [
      "#111111",
      "#DEDEDE",
      "#C70039",
      "#FFC300",
      "#1A5276"
    ],
    "font": "Permanent Marker, Cairo",
    "traits": "طاقة جسدية حرة في سكب ورشق الطلاء على القماش، تعبير عن اللاوعي بدون أي عناصر تمثيلية واقعية.",
    "css": "background-image: radial-gradient(#C70039 10%, transparent 11%), radial-gradient(#FFC300 15%, transparent 16%);",
    "bestFor": "مهرجانات الموسيقى الحرة، منصات الفن الارتجالي، معارض الجداريات الحديثة."
  },
  {
    "id": "y2k-cyber-chrome",
    "num": 66,
    "nameAr": "جماليات Y2K والكروم الفضائي",
    "nameEn": "Y2K Cyber Chrome & Gel",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1998 - 2003",
    "colors": [
      "#DDE3ED",
      "#A855F7",
      "#F43F5E",
      "#38BDF8",
      "#0B0D14"
    ],
    "font": "Orbitron, Space Grotesk",
    "traits": "أسطح كروم معدنية سائلة عاكسة، نجوم لمعان فضائية رباعية (✦)، فقاعات هلامية، وحروف ممتدة أفقياً.",
    "css": "background: linear-gradient(135deg, #eee 0%, #aaa 25%, #fff 50%, #777 75%, #ccc 100%); border-radius: 50px;",
    "bestFor": "مواقع الموضة التجريبية، منصات أزياء الشارع الشبابية، المهرجانات الفنية."
  },
  {
    "id": "frutiger-aero-nature",
    "num": 67,
    "nameAr": "فروتجر آيرو (طبيعة وزجاج)",
    "nameEn": "Frutiger Aero Glossy Water",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2004 - 2013",
    "colors": [
      "#00A8E8",
      "#00C49F",
      "#FFFFFF",
      "#70D6FF",
      "#E8F8FF"
    ],
    "font": "Segoe UI, Cairo",
    "traits": "سماء زرقاء صافية، عشب أخضر ندي، فقاعات ماء لامعة، أزرار زجاجية أيروديناميكية، تفاؤل رقمي نقي.",
    "css": "background: linear-gradient(to bottom, #70D6FF 0%, #FFFFFF 100%); border: 2px solid #00A8E8; border-radius: 16px;",
    "bestFor": "البرمجيات البيئية، أنظمة تشغيل الأجهزة الذكية، تطبيقات الطقس والصحة."
  },
  {
    "id": "windows-95-classic",
    "num": 68,
    "nameAr": "ويندوز 95 الكلاسيكي",
    "nameEn": "Windows 95 Classic Desktop",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1995 - 1998",
    "colors": [
      "#008080",
      "#C0C0C0",
      "#000080",
      "#FFFFFF",
      "#000000"
    ],
    "font": "MS Sans Serif, Tahoma, Cairo",
    "traits": "لون سطح المكتب الفيروزي (#008080)، أزرار بارزة بحدود رمادية وبيضاء وثنائية الظل، شريط مهام كلاسيكي.",
    "css": "background: #C0C0C0; border-top: 2px solid #FFF; border-left: 2px solid #FFF; border-right: 2px solid #808080; border-bottom: 2px solid #808080;",
    "bestFor": "المحاكيات الرجعية، أرشيفات البرمجيات القديمة، أدوات المطورين المرحة."
  },
  {
    "id": "macintosh-system-7",
    "num": 69,
    "nameAr": "ماكنتوش كلاسيك (System 7)",
    "nameEn": "Macintosh System 7 Mono",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1991 - 1997",
    "colors": [
      "#FFFFFF",
      "#000000",
      "#CCCCCC",
      "#666666",
      "#999999"
    ],
    "font": "Chicago, Courier, Cairo",
    "traits": "نقوش البيكسل بالأبيض والأسود، خط شيكاغو الكلاسيكي، شريط خطوط أفقية في شريط العنوان، مربعات الإغلاق.",
    "css": "border: 2px solid #000; box-shadow: 2px 2px 0px #000; background: #FFF;",
    "bestFor": "مواقع التدوين الشخصي للهاكرز، تطبيقات الإنتاجية البسيطة، بورتفوليو المطورين."
  },
  {
    "id": "crt-terminal-phosphor",
    "num": 70,
    "nameAr": "تيرمينال CRT الفوسفوري الأخضر",
    "nameEn": "Green Phosphor CRT Terminal",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1978 - 1985",
    "colors": [
      "#33FF33",
      "#070C08",
      "#143618",
      "#FFB000",
      "#0B120C"
    ],
    "font": "VT323, JetBrains Mono",
    "traits": "إشعاع الفوسفور الأخضر المتوهج، خطوط مسح CRT، إطارات ASCII، وميض المؤشر الميكانيكي المستمر.",
    "css": "background: #070C08; color: #33FF33; text-shadow: 0 0 8px rgba(51,255,51,0.6); border: 2px solid #33FF33;",
    "bestFor": "واجهات موجه الأوامر CLI، مراقبة السيرفرات، ألعاب الهاكينغ والأنظمة."
  },
  {
    "id": "amber-crt-terminal",
    "num": 71,
    "nameAr": "تيرمينال CRT الكهرماني الدافئ",
    "nameEn": "Amber Monochrome Terminal",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1980 - 1987",
    "colors": [
      "#FFB000",
      "#1A0F00",
      "#331E00",
      "#FFE066",
      "#0D0800"
    ],
    "font": "VT323, Courier New",
    "traits": "شاشات الحواسيب القديمة ذات اللون البرتقالي الكهرماني الدافئ، توهج ذهبي على خلفية بنية داكنة.",
    "css": "background: #1A0F00; color: #FFB000; text-shadow: 0 0 10px rgba(255,176,0,0.7);",
    "bestFor": "أنظمة الاتصالات القديمة، أدوات فك التشفير، الروايات التفاعلية النصية."
  },
  {
    "id": "commodore-64-16col",
    "num": 72,
    "nameAr": "كومودور 64 (16 لوناً)",
    "nameEn": "Commodore 64 Palette",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1982 - 1994",
    "colors": [
      "#40318D",
      "#8B3F96",
      "#55A049",
      "#A7F070",
      "#000000"
    ],
    "font": "Press Start 2P, Cairo",
    "traits": "لوحة الألوان الشهيرة الـ 16 الخاصة بجهاز C64، خط بيكسلي عريض، حدود زرقاء داكنة تحيط بالشاشة.",
    "css": "border: 16px solid #40318D; background: #8B3F96; color: #A7F070;",
    "bestFor": "ألعاب الريترو القديمة، موسيقى الشيب تيون (Chiptune)، نوادي البرمجة الكلاسيكية."
  },
  {
    "id": "vaporwave-aesthetic",
    "num": 73,
    "nameAr": "الفيبوروويف والمول التجاري 95",
    "nameEn": "Vaporwave Pastel Nostalgia",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2011 - 2016",
    "colors": [
      "#FF71CE",
      "#01CDFE",
      "#05FFA1",
      "#B967FF",
      "#FFFB96"
    ],
    "font": "MS PGothic, Cairo",
    "traits": "تماثيل إغريقية، أشجار نخيل، برامج ويندوز 95، خطوط يابانية، ألوان وردية وسماوية حالمة وبطيئة.",
    "css": "background: linear-gradient(135deg, #FF71CE, #01CDFE); text-shadow: 2px 2px #B967FF;",
    "bestFor": "قنوات الموسيقى المحيطة (Lofi / Vaporwave)، متاجر الملابس الفنية، المقاهي العصرية."
  },
  {
    "id": "synthwave-outrun-80s",
    "num": 74,
    "nameAr": "السينث ويف وشمس الغروب (Outrun)",
    "nameEn": "Synthwave Outrun Neon Grid",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2013 - الآن",
    "colors": [
      "#F72585",
      "#7209B7",
      "#3A0CA3",
      "#4361EE",
      "#4CC9F0"
    ],
    "font": "Orbitron, Cairo",
    "traits": "شبكة ليزر بنفسجية تمتد إلى الأفق، شمس نيون برتقالية مقطعة، سيارات رياضية في طريق ليلي سريع.",
    "css": "background: #0B001A; border: 2px solid #F72585; box-shadow: 0 0 20px #F72585, inset 0 0 10px #4CC9F0;",
    "bestFor": "ألعاب سباق السيارات الليلية، محطات راديو الموسيقى الإلكترونية، واجهات المشغل الصوتي."
  },
  {
    "id": "steampunk-brass-clockwork",
    "num": 75,
    "nameAr": "الستيم بانك والتروس النحاسية",
    "nameEn": "Steampunk Victorian Brass",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1980s - الآن",
    "colors": [
      "#B87333",
      "#CD7F32",
      "#4A2E18",
      "#E6C280",
      "#1C140D"
    ],
    "font": "Cinzel, Amiri",
    "traits": "تروس نحاسية متحركة، مقاييس ضغط بخاري دائرية، مسامير برشام، جلد بني معتق، أنابيب نحاسية.",
    "css": "border: 4px solid #B87333; box-shadow: inset 0 0 12px #4A2E18, 0 4px 10px rgba(0,0,0,0.5); background: #1C140D;",
    "bestFor": "روايات الخيال العلمي البخاري، ألعاب الألغاز الميكانيكية، المتاجر الحرفية القديمة."
  },
  {
    "id": "cyberpunk-2077-hud",
    "num": 76,
    "nameAr": "السايبربانك وشاشات HUD التكتيكية",
    "nameEn": "Cyberpunk Tactical Combat HUD",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2020 - الآن",
    "colors": [
      "#00F0FF",
      "#FFE600",
      "#FF003C",
      "#00FF66",
      "#060913"
    ],
    "font": "Orbitron, JetBrains Mono",
    "traits": "زوايا مشطوفة 45 درجة، أرقام سداسية عشرية، مؤشرات ليزر متوهجة، وميض تحذيري باللون الأحمر والأصفر.",
    "css": "clip-path: polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px)); border: 1px solid #00F0FF;",
    "bestFor": "مراكز عمليات الأمن السيبراني، ألعاب القتال الفضائية، منصات مراقبة السيرفرات."
  },
  {
    "id": "cassette-futurism-70s",
    "num": 77,
    "nameAr": "مستقبلية أشرطة الكاسيت (Alien 1979)",
    "nameEn": "Cassette Futurism Retro-Tech",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1975 - 1984",
    "colors": [
      "#D4A373",
      "#CCD5AE",
      "#E9EDC9",
      "#FAEDCD",
      "#2B2D42"
    ],
    "font": "Space Mono, Cairo",
    "traits": "أزرار بلاستيكية ضخمة تصدر صوتاً ميكانيكياً (Clack)، شاشات مونوكروم صغيرة، أشرطة ممغنطة، طلاء بيج صناعي.",
    "css": "border: 3px solid #2B2D42; background: #FAEDCD; border-radius: 4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);",
    "bestFor": "محاكيات الرحلات الفضائية الكلاسيكية، أجهزة التسجيل التناظرية، أدوات الأرشفة."
  },
  {
    "id": "pixel-art-8bit-nes",
    "num": 78,
    "nameAr": "بيكسل آرت 8-بت (Nintendo NES)",
    "nameEn": "8-Bit Retro NES Pixel Art",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1983 - 1990",
    "colors": [
      "#FC3800",
      "#00A800",
      "#0058F8",
      "#FCE0A8",
      "#000000"
    ],
    "font": "Press Start 2P, Cairo",
    "traits": "مربعات بكسل واضحة جداً بحجم 8×8، حواف متعرجة صلبة بدون أي تنعيم، خطوط ألعاب الأركيد القديمة.",
    "css": "image-rendering: pixelated; border: 4px solid #000; box-shadow: 4px 4px 0 #0058F8;",
    "bestFor": "ألعاب الإندي الرجعية، بطاقات التهنئة بالبيكسل، استوديوهات مطوري الألعاب."
  },
  {
    "id": "pixel-art-16bit-snes",
    "num": 79,
    "nameAr": "بيكسل آرت 16-بت (Super Nintendo)",
    "nameEn": "16-Bit SNES Rich Pixel",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1990 - 1996",
    "colors": [
      "#2A1A4E",
      "#5B3A82",
      "#E86A7C",
      "#F4B266",
      "#FAF0D7"
    ],
    "font": "Silkscreen, Cairo",
    "traits": "تدرجات لونية غنية بالبيكسل، تظليل دقيق، عمق بصري محسوب، شخصيات مفصلة تشبه ألعاب RPG اليابانية.",
    "css": "border: 3px solid #2A1A4E; background: #FAF0D7; box-shadow: inset 0 0 0 2px #E86A7C;",
    "bestFor": "ألعاب تقمص الأدوار (RPG)، الميمات الفنية، منصات مجتمعات اللاعبين."
  },
  {
    "id": "game-boy-4shade-olive",
    "num": 80,
    "nameAr": "شاشة الجيم بوي الرباعية الزيتونية",
    "nameEn": "Game Boy 4-Shade Olive LCD",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1989 - 1998",
    "colors": [
      "#0F380F",
      "#306230",
      "#8BAC0F",
      "#9BBC0F",
      "#051A05"
    ],
    "font": "Press Start 2P, Cairo",
    "traits": "أربعة تدرجات فقط من اللون الأخضر الزيتوني الشاحب لشاشات LCD بدون إضاءة خلفية، طابع أسطوري لا ينسى.",
    "css": "background: #9BBC0F; color: #0F380F; border: 4px solid #0F380F;",
    "bestFor": "محاكيات الجيم بوي، البورتفوليو الشخصي للمطورين، الألعاب المصغرة."
  },
  {
    "id": "teletext-ceefax-broadcast",
    "num": 81,
    "nameAr": "التيليتيكست وشاشات التلفاز القديمة",
    "nameEn": "Teletext Broadcast Ceefax",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1974 - 2000s",
    "colors": [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#000000"
    ],
    "font": "VT323, Courier New",
    "traits": "شبكة نصوص نقطية 40×24 حرفاً، رسوم بيانية مبنية من مربعات الفسيفساء، سرعة خيالية في تصفح الأخبار والنتائج.",
    "css": "background: #000; color: #00FF00; font-family: monospace; letter-spacing: 2px;",
    "bestFor": "جداول نتائج المباريات السريعة، أسعار العملات الفورية، شاشات الأخبار العاجلة."
  },
  {
    "id": "ascii-bbs-ansi-art",
    "num": 82,
    "nameAr": "فن الآسكي واللوحات الإخبارية BBS",
    "nameEn": "ASCII ANSI Art Underground",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1980s - 1990s",
    "colors": [
      "#C0C0C0",
      "#0000AA",
      "#AA0000",
      "#00AA00",
      "#000000"
    ],
    "font": "Courier New, Cairo",
    "traits": "رسومات كاملة مرسومة برموز الحروف والرموز (+ - | / \\ @ #)، خطوط عريضة ملونة بنظام ANSI.",
    "css": "background: #000; color: #C0C0C0; font-family: monospace; white-space: pre;",
    "bestFor": "مجتمعات لينكس والمبرمجين، أرشيفات الإنترنت القديم، بوابات التوثيق التقنية."
  },
  {
    "id": "glitch-art-vhs-corruption",
    "num": 83,
    "nameAr": "فن الخلل وتلف أشرطة VHS",
    "nameEn": "Glitch Art VHS Corruption",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1990s - الآن",
    "colors": [
      "#00FFFF",
      "#FF00FF",
      "#FFFF00",
      "#000000",
      "#FFFFFF"
    ],
    "font": "Space Mono, Cairo",
    "traits": "تفكك لوني RGB Chromatic Aberration، خطوط تشويش أفقية، تشوه في الإشارة، ضياع الإطارات التناظرية.",
    "css": "text-shadow: -2px 0 #00FFFF, 2px 0 #FF00FF; filter: contrast(120%);",
    "bestFor": "الفيديوهات الموسيقية التجريبية، أزياء السايبربانك البديل، منصات الفن الرقمي."
  },
  {
    "id": "low-poly-ps1-retro-3d",
    "num": 84,
    "nameAr": "البوليجون المنخفض (PlayStation 1)",
    "nameEn": "PS1 Low-Poly 3D Retro",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1994 - 2000",
    "colors": [
      "#3D3A45",
      "#706E7B",
      "#A8A5B2",
      "#E87A5D",
      "#1C1B20"
    ],
    "font": "Silkscreen, Cairo",
    "traits": "مجسمات ثلاثية الأبعاد بأسطح مضلعة قليلة، خامات غير منقاة (Affine Texture Warping)، ضباب رمادي كلاسيكي.",
    "css": "box-shadow: inset 0 0 0 2px #A8A5B2, 4px 4px 0 #1C1B20; background: #3D3A45; color: #FFF;",
    "bestFor": "ألعاب الرعب الكلاسيكية، المحاكيات الفنية ثلاثية الأبعاد، تجارب الألعاب المستقلة."
  },
  {
    "id": "early-web-geocities-90s",
    "num": 85,
    "nameAr": "ويب 1.0 ومواقع جيوسيتيز",
    "nameEn": "Early Web 1.0 GeoCities",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1994 - 2001",
    "colors": [
      "#0000FF",
      "#FF0000",
      "#FFFF00",
      "#00FF00",
      "#C0C0C0"
    ],
    "font": "Times New Roman, Comic Sans",
    "traits": "جداول HTML سلكية، نصوص وامضة (<blink>)، خلفيات نجوم متكررة، شارات 'موقع تحت الإنشاء' بأشرطة صفراء.",
    "css": "border: 3px ridge #C0C0C0; background: #000080; color: #FFFF00;",
    "bestFor": "مشاريع الحنين الرقمي، مجتمعات الإنترنت البديل، المعارض الفكاهية."
  },
  {
    "id": "ios-6-classic-linen",
    "num": 86,
    "nameAr": "نظام iOS 6 والتجسيم الكلاسيكي",
    "nameEn": "iOS 6 Skeuomorphic Linen",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2007 - 2012",
    "colors": [
      "#3B4149",
      "#4F5965",
      "#007AFF",
      "#FFFFFF",
      "#24272C"
    ],
    "font": "Helvetica Neue, Cairo",
    "traits": "خلفية القماش الكتاني الرمادي الداكن المنسوج (Linen texture)، أزرار فضية لامعة بزوايا مستديرة دقيقة.",
    "css": "background: radial-gradient(#3B4149 15%, #24272C 100%); border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);",
    "bestFor": "محاكيات الآيفون الكلاسيكي، تطبيقات الأدوات الواقعية، الآلات الحاسبة الملموسة."
  },
  {
    "id": "windows-phone-metro-tile",
    "num": 87,
    "nameAr": "ويندوز فون والبلاطات الحية (Metro)",
    "nameEn": "Windows Phone Metro UI",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2010 - 2015",
    "colors": [
      "#00A4EF",
      "#7FBA00",
      "#F25022",
      "#FFB900",
      "#000000"
    ],
    "font": "Segoe UI Light, Alexandria",
    "traits": "بلاطات حية مربعة ومستطيلة خالية تماماً من التدرجات والظلال، خط كبير واضح، حركة دوران وانقلاب ثلاثي الأبعاد.",
    "css": "border: none; border-radius: 0; background: #00A4EF; color: #FFF; box-shadow: none;",
    "bestFor": "لوحات المتابعة السريعة، شاشات الأكشاك التفاعلية (Kiosk)، أجهزة التحكم الذكية."
  },
  {
    "id": "neocities-indie-webcore",
    "num": 88,
    "nameAr": "الويب كور المستقل (Neocities)",
    "nameEn": "Neocities Webcore Personal Web",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2015 - الآن",
    "colors": [
      "#FFB6C1",
      "#E6E6FA",
      "#B0E0E6",
      "#FFF0F5",
      "#2F4F4F"
    ],
    "font": "MS Gothic, Tahoma, Cairo",
    "traits": "عودة لصفحات الإنترنت الشخصية المصنوعة يدوياً بكود HTML بسيط، تزيين بالملصقات اللامعة، حرية تعبير غير تجارية.",
    "css": "border: 2px dashed #FFB6C1; background: #FFF0F5; border-radius: 12px;",
    "bestFor": "المدونات الشخصية المستقلة، اليوميات الرقمية، أندية القراءة الإلكترونية."
  },
  {
    "id": "dieselpunk-art-deco-industrial",
    "num": 89,
    "nameAr": "الديزل بانك والقاطرات الفولاذية",
    "nameEn": "Dieselpunk Art Deco Heavy",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1920s - 1950s",
    "colors": [
      "#2B2D2F",
      "#5C6166",
      "#C59B27",
      "#8C1D1D",
      "#0F1011"
    ],
    "font": "Oswald, Cairo",
    "traits": "فولاذ مصمت ثقيل، قاطرات بخارية وديزل عملاقة، مراوح طائرات معدنية، خطوط آرت ديكو صناعية قاسية.",
    "css": "border: 3px solid #5C6166; background: #2B2D2F; box-shadow: inset 0 0 15px #0F1011;",
    "bestFor": "ألعاب الحروب الاستراتيجية، محاكيات القطارات الكلاسيكية، نوادي الطيران."
  },
  {
    "id": "ataripunk-woodgrain-console",
    "num": 90,
    "nameAr": "أتاري 2600 والخشب البلاستيكي",
    "nameEn": "Atari 2600 Woodgrain Console",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1977 - 1982",
    "colors": [
      "#5A3825",
      "#8C5835",
      "#D89955",
      "#1A1A1A",
      "#E67E22"
    ],
    "font": "Press Start 2P, Cairo",
    "traits": "شريط خشبي كلاسيكي في الواجهة مع مفاتيح معدنية فضية تقلب للأعلى وللأسفل، بلاستيك أسود مضلع.",
    "css": "border-top: 8px solid #5A3825; background: #1A1A1A; color: #D89955;",
    "bestFor": "ألعاب الأتاري الرجعية، مشغلات الموسيقى الكلاسيكية، المحاكيات التاريخية."
  },
  {
    "id": "chiptune-game-music-neon",
    "num": 91,
    "nameAr": "موسيقى الشيب تيون النيون",
    "nameEn": "Chiptune 8-Bit Synth Neon",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1990s - الآن",
    "colors": [
      "#00F5D4",
      "#7B2CBF",
      "#F72585",
      "#3F37C9",
      "#03071E"
    ],
    "font": "Press Start 2P, Orbitron",
    "traits": "متخيل موجات صوتية مربع ومسنن (Square Wave)، ألوان فسفورية حية تتراقص مع نغمات المعالجات الصوتية القديمة.",
    "css": "border: 2px solid #00F5D4; box-shadow: 0 0 10px #00F5D4; background: #03071E;",
    "bestFor": "مشغلات موسيقى 8-بت، إذاعات الراديو الرقمية البديلة، بطولات ألعاب الفيديو."
  },
  {
    "id": "vhs-camcorder-osd",
    "num": 92,
    "nameAr": "كاميرات الفيديو المنزلية OSD",
    "nameEn": "VHS Camcorder Tape OSD",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1985 - 1998",
    "colors": [
      "#FFFFFF",
      "#00FF00",
      "#FF0000",
      "#0000FF",
      "#000000"
    ],
    "font": "VT323, Arial",
    "traits": "نصوص التاريخ والوقت باللون الأبيض بحواف سوداء في الزاوية، مؤشر بطارية يومض، كلمة [PLAY ▶] أو [REC ●].",
    "css": "color: #FFF; text-shadow: 1px 1px 0 #000, -1px -1px 0 #000; font-family: monospace;",
    "bestFor": "تطبيقات تسجيل وتعديل الفيديو، المؤثرات البصرية السينمائية، الذكريات المصورة."
  },
  {
    "id": "90s-grunge-zine",
    "num": 93,
    "nameAr": "مجلات الغرنج والتصوير الفوضوي",
    "nameEn": "90s Grunge Raygun Magazine",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1991 - 1998",
    "colors": [
      "#1C1B18",
      "#E6DFD3",
      "#8C271E",
      "#3A4035",
      "#C2B490"
    ],
    "font": "Special Elite, Impact",
    "traits": "طباعة ماكينات التصوير الرديئة، نصوص مكسورة وممزقة، خطوط مائلة بلا هوامش، روح فرقة نيرفانا والروك البديل.",
    "css": "transform: rotate(-1deg); filter: contrast(150%) grayscale(30%); background: #E6DFD3;",
    "bestFor": "مجلات الموسيقى المستقلة، فعاليات التزلج (Skateboard)، معارض الفنون المتمردة."
  },
  {
    "id": "acid-house-90s-smiley",
    "num": 94,
    "nameAr": "الأسيد هاوس والابتسامة الصفراء",
    "nameEn": "Acid House 90s Rave Culture",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1988 - 1993",
    "colors": [
      "#FFE600",
      "#000000",
      "#FF0055",
      "#00F0FF",
      "#39FF14"
    ],
    "font": "Druk, Cairo",
    "traits": "الوجه الضاحك الأصفر الأيقوني، ألوان فوسفورية تعمي الأبصار، نصوص نيون عريضة، حيوية احتفالية لا تهدأ.",
    "css": "background: #FFE600; color: #000; border: 4px solid #000; border-radius: 50px;",
    "bestFor": "حفلات الموسيقى الإلكترونية، ملصقات النوادي الليلية، علامات أزياء الشارع."
  },
  {
    "id": "flash-animation-2000s",
    "num": 95,
    "nameAr": "رسوم الفلاش التفاعلية 2000s",
    "nameEn": "Macromedia Flash 2000s UI",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "2000 - 2008",
    "colors": [
      "#FF6600",
      "#0066CC",
      "#FFCC00",
      "#FFFFFF",
      "#333333"
    ],
    "font": "Trebuchet MS, Cairo",
    "traits": "أزرار تفاعلية تصدر صوتاً مع حركة الماوس، تدرجات شعاعية ناعمة، رسوم كرتونية متجهية خفيفة الوزن.",
    "css": "border-radius: 12px; background: linear-gradient(to bottom, #FFCC00 0%, #FF6600 100%); color: #FFF;",
    "bestFor": "ألعاب المتصفح المصغرة، العروض التعليمية التفاعلية للأطفال، الرسوم المتحركة."
  },
  {
    "id": "amiga-workbench-blue",
    "num": 96,
    "nameAr": "نظام أميغا (Amiga Workbench)",
    "nameEn": "Commodore Amiga Workbench 1.3",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1985 - 1992",
    "colors": [
      "#0055AA",
      "#FFAA00",
      "#FFFFFF",
      "#000000",
      "#AAAAAA"
    ],
    "font": "Topaz, Cairo",
    "traits": "الأزرق النيلي والبرتقالي الصارخ والأبيض، أيقونات الدرج والأقراص المرنة المصممة باحترافية عريقة.",
    "css": "background: #0055AA; color: #FFAA00; border: 2px solid #FFAA00;",
    "bestFor": "نوادي عشاق الكومودور، برامج الموسيقى والتعقب (Trackers)، التاريخ التقني."
  },
  {
    "id": "msdos-command-prompt",
    "num": 97,
    "nameAr": "موجه أوامر الدوس (MS-DOS)",
    "nameEn": "MS-DOS 6.22 Command Prompt",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1981 - 1995",
    "colors": [
      "#AAAAAA",
      "#000000",
      "#FFFFFF",
      "#00AAAA",
      "#AA0000"
    ],
    "font": "Consolas, Courier New",
    "traits": "شاشة سوداء بالكامل، نصوص رمادية صافية بدون أي ظلال، مؤشر C:\\> ينتظر أمر المستخدم.",
    "css": "background: #000; color: #AAAAAA; font-family: 'Courier New', monospace; padding: 16px;",
    "bestFor": "أدوات البرمجة الصامتة، محاكيات بيئة الدوس، ألعاب المغامرات النصية القديمة."
  },
  {
    "id": "sony-walkman-industrial",
    "num": 98,
    "nameAr": "ووكمان سوني الرياضي (Sports)",
    "nameEn": "Sony Walkman Yellow Sports",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1984 - 1995",
    "colors": [
      "#FFD000",
      "#222222",
      "#444444",
      "#E63946",
      "#FFFFFF"
    ],
    "font": "Helvetica Black, Cairo",
    "traits": "بلاستيك أصفر متين مضاد للصدمات والماء، أزرار ميكانيكية ضخمة ببروزات مطاطية سوداء، متانة رياضية.",
    "css": "border: 4px solid #222; background: #FFD000; color: #222; border-radius: 18px;",
    "bestFor": "مشغلات الموسيقى المحمولة، منتجات التدريب البدني، الأجهزة الإلكترونية القوية."
  },
  {
    "id": "vcr-blue-screen-osd",
    "num": 99,
    "nameAr": "شاشة الفيديو الزرقاء الصامتة",
    "nameEn": "VCR Blue Screen Blank Tape",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1980s - 1990s",
    "colors": [
      "#0000AA",
      "#FFFFFF",
      "#FFFF00",
      "#00FF00",
      "#000000"
    ],
    "font": "VT323, Consolas",
    "traits": "اللون الأزرق السادة النقي عندما يكون شريط الفيديو فارغاً أو متوقفاً، نصوص بيضاء عريضة تومض في الأعلى.",
    "css": "background: #0000AA; color: #FFF; font-family: monospace; font-size: 1.4rem;",
    "bestFor": "عروض السينما المستقلة، شاشات التوقف الفنية، المعارض البصرية التناظرية."
  },
  {
    "id": "neon-noir-detective",
    "num": 100,
    "nameAr": "النيون نوار والتحقيق الليلي",
    "nameEn": "Neon Noir Rain-Slicked City",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1980s - الآن",
    "colors": [
      "#0A0A10",
      "#FF0055",
      "#00E5FF",
      "#FFE600",
      "#7928CA"
    ],
    "font": "Cinzel, Cairo",
    "traits": "شوارع مبتلة بالأمطار تعكس لافتات النيون الصاخبة، ظلال معاطف المحققين، غموض سينمائي جذاب.",
    "css": "background: #0A0A10; border: 1.5px solid #FF0055; box-shadow: 0 0 25px rgba(255,0,85,0.4); color: #FFF;",
    "bestFor": "روايات الغموض والجريمة، ألعاب التحقيق الجنائي، السهرات السينمائية الليلية."
  },
  {
    "id": "cyberspace-vr-90s-wireframe",
    "num": 101,
    "nameAr": "الفضاء السيبراني السلكي 90s",
    "nameEn": "90s Cyberspace Virtual Reality",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1992 - 1999",
    "colors": [
      "#00FF66",
      "#000000",
      "#003311",
      "#33FF99",
      "#001105"
    ],
    "font": "Courier New, Cairo",
    "traits": "مضلعات سلكية خضراء ثلاثية الأبعاد بدون تظليل تطفو في فراغ أسود مطلق، رؤية فيلم Lawnmower Man للمستقبل.",
    "css": "border: 1px solid #00FF66; background: rgba(0,255,102,0.05); color: #00FF66;",
    "bestFor": "مختبرات الذكاء الاصطناعي التجريبية، منصات التشفير، ألعاب الواقع الافتراضي القديمة."
  },
  {
    "id": "cdrom-multimedia-1995",
    "num": 102,
    "nameAr": "موسوعات الأقراص المدمجة CD-ROM",
    "nameEn": "Encarta 95 CD-ROM Multimedia",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1993 - 1999",
    "colors": [
      "#1E3A5F",
      "#E9ECEF",
      "#D4AF37",
      "#495057",
      "#FFFFFF"
    ],
    "font": "Arial, Times New Roman, Cairo",
    "traits": "أزرار وسائط زرقاء وذهبية، مربعات فيديو صغيرة محاطة بإطارات رمادية، أشرطة تنقل موسوعية غنية بالمعلومات.",
    "css": "border: 2px solid #D4AF37; background: #1E3A5F; color: #FFF; border-radius: 6px;",
    "bestFor": "الموسوعات المعرفية التفاعلية، المناهج التعليمية الرقمية، الأرشيفات العلمية."
  },
  {
    "id": "polaroid-instant-frame",
    "num": 103,
    "nameAr": "إطار البولارويد الأبيض الفوري",
    "nameEn": "Polaroid Instant Film Frame",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1972 - الآن",
    "colors": [
      "#FFFFFF",
      "#F5F5F0",
      "#111111",
      "#E63946",
      "#FFB703"
    ],
    "font": "Caveat, Cairo",
    "traits": "إطار ورقي أبيض سميك مع مساحة كتابة عريضة بالأسفل بخط اليد، صورة ذات ألوان دافئة باهتة قليلاً.",
    "css": "background: #FFF; padding: 16px 16px 40px 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); border-radius: 2px;",
    "bestFor": "معارض الصور التذكارية، يوميات السفر والرحلات، بطاقات الهدايا الشخصية."
  },
  {
    "id": "tamagotchi-lcd-virtual-pet",
    "num": 104,
    "nameAr": "شاشة التاماجوتشي والمخلوق الرقمي",
    "nameEn": "Tamagotchi Egg LCD Pixel",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1996 - 2002",
    "colors": [
      "#8BA870",
      "#2D4024",
      "#FF69B4",
      "#FFF8DC",
      "#1A2615"
    ],
    "font": "Press Start 2P, Cairo",
    "traits": "شاشة LCD بيضاوية صغيرة بنقاط بيكسل سوداء غليظة محاطة بهيكل بلاستيكي وردي أو أصفر لامع وثلاثة أزرار مطاطية.",
    "css": "background: #8BA870; color: #2D4024; border: 8px solid #FF69B4; border-radius: 50px;",
    "bestFor": "ألعاب الحيوانات الافتراضية، الإشعارات الطريفة، أدوات العادات اليومية المرحة."
  },
  {
    "id": "dreamcast-spiral-futurism",
    "num": 105,
    "nameAr": "دريم كاست واللولب البرتقالي",
    "nameEn": "Sega Dreamcast Spiral 1999",
    "cat": "retro-digital",
    "catAr": "الحنين الرقمي والريترو",
    "era": "1998 - 2001",
    "colors": [
      "#FF6600",
      "#002B7F",
      "#FFFFFF",
      "#E6E6E6",
      "#1A1A1A"
    ],
    "font": "Eurostile, Cairo",
    "traits": "اللولب البرتقالي الأيقوني، هياكل بلاستيكية بيضاء نقية مع خطوط مستقبلية منسابة تنبض بالحماس والمرح.",
    "css": "border-top: 4px solid #FF6600; background: #FFFFFF; color: #1A1A1A; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);",
    "bestFor": "منصات ألعاب الأركيد، فعاليات التحديات التنافسية، استعراض المنتجات اليابانية."
  },
  {
    "id": "neo-asiri",
    "num": 106,
    "nameAr": "النمط العسيري المعماري (القط التراثي)",
    "nameEn": "Neo-Asiri Geometric Heritage",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث متجدد",
    "colors": [
      "#D62828",
      "#F59E0B",
      "#16A34A",
      "#1D4ED8",
      "#2C1E16"
    ],
    "font": "Amiri, Cairo",
    "traits": "مستوحى من قصور عسير الحجرية وشرفات الجص البيضاء ونقوش القط العسيري الهندسية البارزة.",
    "css": "border: 2px solid #6B5243; border-top: 6px solid #D62828; background: #36261E; color: #FDFDF8;",
    "bestFor": "المنصات الثقافية والتراثية، المبادرات الوطنية السعودية، المتاحف والمعارض الإقليمية."
  },
  {
    "id": "andalusian-moorish",
    "num": 107,
    "nameAr": "الأندلسي الإسلامي (المقرنصات)",
    "nameEn": "Andalusian Moorish Arabesque",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "711 - 1492",
    "colors": [
      "#1B4332",
      "#D4AF37",
      "#0077B6",
      "#FAF5EF",
      "#8B1E0F"
    ],
    "font": "Amiri, Scheherazade New",
    "traits": "أقواس حدوة الفرس الأندلسية، فسيفساء الزليج المتناظرة، مقرنصات جبسية، ألوان الفيروز والذهب والأخضر.",
    "css": "border: 2px solid #D4AF37; background: #FAF5EF; color: #1B4332; border-radius: 16px 16px 0 0;",
    "bestFor": "المؤسسات الثقافية، معارض الخط العربي، المنتجات التراثية الفاخرة."
  },
  {
    "id": "hijazi-rawasheen",
    "num": 108,
    "nameAr": "الرواشين الحجازية وخشب المانجور",
    "nameEn": "Hijazi Rawasheen Lattice",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث حجازي عريق",
    "colors": [
      "#4A2E1B",
      "#C68B59",
      "#1E3D59",
      "#F5F0E1",
      "#D35400"
    ],
    "font": "Amiri, Cairo",
    "traits": "شبكات خشبية مفرغة تسمح بدخول الهواء والضوء مع حفظ الخصوصية، تفاصيل نجارة خشبية معقدة ودافئة.",
    "css": "border: 2px solid #4A2E1B; background: #F5F0E1; color: #4A2E1B; box-shadow: inset 0 0 10px rgba(74,46,27,0.1);",
    "bestFor": "مشاريع جدة التاريخية، فنادق الضيافة التراثية، المعارض الفنية المكية."
  },
  {
    "id": "najdi-adobe-triangle",
    "num": 109,
    "nameAr": "المعماري النجدي والمثلثات الطينية",
    "nameEn": "Najdi Adobe Mudbrick Minimal",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث نجد العريق",
    "colors": [
      "#A66E38",
      "#D4A373",
      "#E3D5CA",
      "#F5EBE0",
      "#5C3D2E"
    ],
    "font": "Amiri, Cairo",
    "traits": "جدران طينية سميكة، فتحات تهوية مثلثة متكررة مفرغة في الجدران، أبواب خشبية ملونة بنقوش نجدية فطرية.",
    "css": "border: 3px solid #A66E38; background: #F5EBE0; color: #5C3D2E; border-radius: 4px;",
    "bestFor": "مشاريع الدرعية التراثية، الفعاليات الوطنية، المطاعم الشعبية الراقية."
  },
  {
    "id": "japanese-wabi-sabi",
    "num": 110,
    "nameAr": "الوابي سابي والجمال الناقص",
    "nameEn": "Japanese Wabi-Sabi Imperfect",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "فلسفة يابانية قديمة",
    "colors": [
      "#3D3A37",
      "#7A7671",
      "#C4BFB6",
      "#EBE8E1",
      "#8C6D58"
    ],
    "font": "Noto Serif JP, Amiri",
    "traits": "احتفاء بالجمال في الأشياء العتيقة والناقصة والمكسورة، ألوان الخزف الحجري الطبيعي، هدوء تأملي مطلق.",
    "css": "border: 1px solid rgba(61,58,55,0.15); background: #EBE8E1; color: #3D3A37; box-shadow: none;",
    "bestFor": "استوديوهات الفخار، معارض التأمل واليوغا، منتجات العناية بالبشرة الشاي الأخضر."
  },
  {
    "id": "japanese-zen-muji",
    "num": 111,
    "nameAr": "الزن الياباني والمينيمال الخشبي (Muji)",
    "nameEn": "Japanese Zen Minimal Living",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "معاصر",
    "colors": [
      "#FFFFFF",
      "#2B2B2B",
      "#C8B6A6",
      "#8D7B68",
      "#F7F5F2"
    ],
    "font": "Noto Sans JP, Inter",
    "traits": "غياب تام للشعارات والزخارف، خشب البلوط الطبيعي الفاتح، بساطة وظيفية تمنح مساحة ذهنية صافية.",
    "css": "border: 1px solid #E0DCD5; background: #FFFFFF; color: #2B2B2B; border-radius: 4px;",
    "bestFor": "العلامات التجارية المينيمالية، متاجر الأدوات المنزلية، تطبيقات التركيز والإنتاجية."
  },
  {
    "id": "japanese-kawaii-pastel",
    "num": 112,
    "nameAr": "الكواي الياباني والباستيل اللطيف",
    "nameEn": "Japanese Kawaii Soft Pastel",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "1970s - الآن",
    "colors": [
      "#FFB7B2",
      "#FFDAC1",
      "#E2F0CB",
      "#B5EAD7",
      "#C7CEEA"
    ],
    "font": "Mochiy Pop One, Cairo",
    "traits": "شخصيات لطيفة بعيون واسعة، ألوان حلوى قطنية ناعمة، زوايا كروية مبهجة تزرع الابتسامة فوراً.",
    "css": "border: 3px solid #FFB7B2; background: #FFF8F8; border-radius: 30px; box-shadow: 0 8px 16px rgba(255,183,178,0.3);",
    "bestFor": "ألعاب الأطفال، تطبيقات الهوايات، متاجر الأطعمة اللطيفة، مجتمعات الإنمي."
  },
  {
    "id": "scandinavian-hygge",
    "num": 113,
    "nameAr": "السكندنافي الدافئ (Hygge)",
    "nameEn": "Nordic Hygge Warm Coziness",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "معاصر",
    "colors": [
      "#F7F5F0",
      "#6B7F70",
      "#2B2D2F",
      "#D8CFC4",
      "#FAF8F5"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "دفء الشتاء، إضاءة الشموع الخافتة، صوف طبيعي، مساحات بيضاء واسعة، هدوء عائلي وسكينة روحية.",
    "css": "border-radius: 28px; background: #FFFFFF; color: #2B2D2F; box-shadow: 0 16px 36px -12px rgba(60,50,40,0.06);",
    "bestFor": "تطبيقات التأمل والهدوء النفسي، الديكور المنزلي، ملابس الصوف الطبيعي."
  },
  {
    "id": "nordic-forest-deep",
    "num": 114,
    "nameAr": "الغابة النوردية والمياه الجليدية",
    "nameEn": "Nordic Forest & Fjord Deep",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "معاصر",
    "colors": [
      "#1B3B2B",
      "#3A6351",
      "#E2DED0",
      "#A2A8D3",
      "#0E1C15"
    ],
    "font": "Newsreader, Cairo",
    "traits": "أشجار الصنوبر العميقة، مضائق مائية جليدية زرقاء، خشب البتولا، هواء نقي منعش ينعكس في التصميم.",
    "css": "background: #1B3B2B; color: #E2DED0; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;",
    "bestFor": "شركات الاستكشاف البيئي، ملابس التخييم الاسكندنافية، منتجات الطاقة النظيفة."
  },
  {
    "id": "mexican-barragan-vibrant",
    "num": 115,
    "nameAr": "المكسيكي المعماري (لويس باراغان)",
    "nameEn": "Mexican Barragan Color Walls",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "1940s - الآن",
    "colors": [
      "#E63946",
      "#FF007F",
      "#F1A208",
      "#0077B6",
      "#FFFFFF"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "جدران خرسانية شاهقة مطلية بألوان مشبعة دافئة (وردي مكسيكي، أصفر شمسي)، ضوء طبيعي يغير الظلال.",
    "css": "background: #FF007F; color: #FFF; border: none; box-shadow: 12px 12px 0px #F1A208;",
    "bestFor": "المعارض المعمارية اللاتينية، المهرجانات الثقافية، المطاعم المكسيكية الراقية."
  },
  {
    "id": "greek-cycladic-white",
    "num": 116,
    "nameAr": "السيكلادي اليوناني والأزرق الإيجي",
    "nameEn": "Greek Cycladic Aegean Blue",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث بحر إيجة",
    "colors": [
      "#FFFFFF",
      "#0D5C9E",
      "#F0F4F8",
      "#D9E2EC",
      "#063256"
    ],
    "font": "Alexandria, Inter",
    "traits": "منازل بيضاء مستديرة الزوايا مغسولة بالجير، قباب زرقاء ساطعة بلون البحر الأبيض المتوسط، صفاء صيفي.",
    "css": "background: #FFFFFF; border: 2px solid #0D5C9E; border-radius: 32px 8px 32px 8px; color: #063256;",
    "bestFor": "منتجعات الجزر اليونانية، شركات الرحلات البحرية، علامات الأزياء الصيفية."
  },
  {
    "id": "moroccan-zellige-mosaic",
    "num": 117,
    "nameAr": "الزليج المغربي والهندسة الخالدة",
    "nameEn": "Moroccan Zellige Mosaic Tiles",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث مغربي عريق",
    "colors": [
      "#023E8A",
      "#0077B6",
      "#0096C7",
      "#D4AF37",
      "#FAF0CA"
    ],
    "font": "Amiri, Cairo",
    "traits": "بلاطات هندسية معقدة مقطوعة يدوياً، تراكيب نجمية لا متناهية تعبر عن الخلود الإلهي والتناسق الكوني.",
    "css": "border: 3px solid #D4AF37; background: #FAF0CA; color: #023E8A;",
    "bestFor": "الرياض المغربية الفاخرة، الحمامات التقليدية، صناعة الفخار اليدوي."
  },
  {
    "id": "indian-mughal-filigree",
    "num": 118,
    "nameAr": "المغولي الهندي والرخام المطعّم",
    "nameEn": "Mughal Marble Pietra Dura",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "1526 - 1857",
    "colors": [
      "#FDFBF7",
      "#C99700",
      "#7A1C1C",
      "#1E4D2B",
      "#2B1A09"
    ],
    "font": "Rozha One, Amiri",
    "traits": "رخام أبيض نقي مطعم بأحجار كريمة ملونة (لازورد، عقيق، يشم)، أقواس مروحية نباتية شديدة الرقة.",
    "css": "border: 2px solid #C99700; background: #FDFBF7; color: #2B1A09; border-radius: 12px;",
    "bestFor": "دور المجوهرات الهندية الفاخرة، القصور الملكية في راجستان، العطور التراثية."
  },
  {
    "id": "chinese-cyber-tang",
    "num": 119,
    "nameAr": "الصيني المستقبلي (سلالة تانغ نيون)",
    "nameEn": "Cyber Tang Neo-Chinoiserie",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث صيني حديث",
    "colors": [
      "#DE2910",
      "#FFDE00",
      "#0B0C10",
      "#00F0FF",
      "#F4F4F4"
    ],
    "font": "Noto Serif SC, Cairo",
    "traits": "الخط الصيني التقليدي بفرشاة الحبر الأسود مدمج مع شبكات نيون حمراء وذهبية ومبانٍ خشبية متعددة الطوابق.",
    "css": "border: 2px solid #DE2910; background: #0B0C10; color: #FFDE00; box-shadow: 0 0 15px rgba(222,41,16,0.4);",
    "bestFor": "أفلام الأكشن الصينية، احتفالات رأس السنة القمرية، ألعاب القتال التراثية."
  },
  {
    "id": "persian-miniature-arabesque",
    "num": 120,
    "nameAr": "المنمنمات الفارسية والحدائق الفردوسية",
    "nameEn": "Persian Miniature Garden",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث فارسي عريق",
    "colors": [
      "#005F73",
      "#0A9396",
      "#EE9B00",
      "#CA6702",
      "#9B2226"
    ],
    "font": "Amiri, Scheherazade New",
    "traits": "تفاصيل فائقة الدقة مرسومة بشعرة واحدة، تصوير الطيور والأشجار المورقة والقصور، ألوان ناصعة لا تبهت.",
    "css": "border: 2px solid #EE9B00; background: #FAF6ED; color: #005F73;",
    "bestFor": "معارض السجاد اليدوي، المتاحف الفنية الشرقية، دواوين الشعر الكلاسيكية."
  },
  {
    "id": "african-ankara-wax-print",
    "num": 121,
    "nameAr": "أقمشة أنكارا الشمعية الإفريقية",
    "nameEn": "African Ankara Wax Patterns",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث إفريقي نابض",
    "colors": [
      "#FFB703",
      "#FB8500",
      "#023047",
      "#219EBC",
      "#8E001C"
    ],
    "font": "Syne, Cairo",
    "traits": "أنماط شمعية متفجرة بالحيوية والطاقة الإنسانية، ألوان متضاربة بجرأة تعبر عن الفرح والاحتفال بالحياة.",
    "css": "background: linear-gradient(45deg, #FB8500, #FFB703); color: #023047; border: 3px solid #023047;",
    "bestFor": "المهرجانات الإفريقية، علامات الأزياء الجريئة، منصات الموسيقى الإفريقية الحديثة."
  },
  {
    "id": "swiss-alpine-chalet",
    "num": 122,
    "nameAr": "الشاليه الألبي السويسري والخشب",
    "nameEn": "Swiss Alpine Timber Chalet",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث جبال الألب",
    "colors": [
      "#4A3728",
      "#8B5A2B",
      "#F5EBE6",
      "#C84B31",
      "#2E4057"
    ],
    "font": "Cinzel, Cairo",
    "traits": "أخشاب داكنة سميكة منحوتة، شرفات زهور إبرة الراعي الحمراء، مدفأة حجرية، إحساس بالدفء وسط ثلوج الألب.",
    "css": "border: 3px solid #4A3728; background: #F5EBE6; color: #4A3728; border-radius: 6px;",
    "bestFor": "منتجعات التزلج الألبية، الجبن والشوكولاتة السويسرية، السياحة الجبلية."
  },
  {
    "id": "italian-futurismo-espresso",
    "num": 123,
    "nameAr": "الإسبريسو الإيطالي والكروم المصقول",
    "nameEn": "Italian Espresso Bar Chrome",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "1950s - الآن",
    "colors": [
      "#8B0000",
      "#D3D3D3",
      "#FFFFFF",
      "#1A1A1A",
      "#C5A059"
    ],
    "font": "Bodoni MT, Alexandria",
    "traits": "ماكينات قهوة لامعة من الفولاذ المقاوم للصدأ، رخام كرارا أبيض، شريط بار أحمر، نكهة إيطالية سريعة وأنيقة.",
    "css": "background: linear-gradient(180deg, #FFFFFF 0%, #D3D3D3 100%); border: 2px solid #8B0000; color: #1A1A1A;",
    "bestFor": "المقاهي الإيطالية، أجهزة المطبخ الفاخرة، سيارات فيات وفسبا الكلاسيكية."
  },
  {
    "id": "french-haute-couture-atelier",
    "num": 124,
    "nameAr": "الأتيلييه الفرنسي والأزياء الراقية",
    "nameEn": "French Haute Couture Atelier",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "باريس الخالدة",
    "colors": [
      "#141414",
      "#F7F5F0",
      "#C5A880",
      "#E0DBD1",
      "#8C827A"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "قماش التول والحرير الخام، خياطة يدوية دقيقة، بساطة أرستقراطية بالغة، خلفيات عاجية وأسود باريسي عميق.",
    "css": "border-bottom: 1px solid #141414; background: #F7F5F0; color: #141414; font-style: italic;",
    "bestFor": "دور الأزياء الباريسية، العطور النيش النادرة، مجلات الموضة الراقية."
  },
  {
    "id": "british-heritage-gentleman",
    "num": 125,
    "nameAr": "النادي البريطاني والجلد الإنجليزي",
    "nameEn": "British Heritage Club Chesterfield",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث بريطاني كلاسيكي",
    "colors": [
      "#1B3022",
      "#4A2E18",
      "#D4AF37",
      "#EDE6D6",
      "#0D1811"
    ],
    "font": "Cinzel, Amiri",
    "traits": "أرائك جلد تشيسترفيلد معنقدة بأزرار، خشب الجوز الداكن، قماش التويد المنقوش، رفوف كتب تاريخية.",
    "css": "border: 2px solid #D4AF37; background: #1B3022; color: #EDE6D6; box-shadow: inset 0 0 10px #0D1811;",
    "bestFor": "نوادي السادة الخاصة، الخياطة الإنجليزية (Savile Row)، المقتنيات النادرة."
  },
  {
    "id": "brazilian-tropicalia-60s",
    "num": 126,
    "nameAr": "التروبيكاليا البرازيلية الملونة",
    "nameEn": "Brazilian Tropicalia Movement",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "1967 - 1972",
    "colors": [
      "#009C3B",
      "#FFDF00",
      "#002776",
      "#FF5E7E",
      "#F8F9FA"
    ],
    "font": "Syne, Cairo",
    "traits": "حركة تمرد ثقافية برازيلية تدمج البوسا نوفا والموسيقى الإفريقية وألوان الغابات الاستوائية والبهجة الصاخبة.",
    "css": "background: linear-gradient(135deg, #009C3B, #FFDF00); color: #002776; border: 3px solid #002776;",
    "bestFor": "مهرجانات السامبا، المشروبات الاستوائية المنعشة، المعارض الفنية اللاتينية."
  },
  {
    "id": "korean-dancheong-palace",
    "num": 127,
    "nameAr": "الدانشيونغ الكوري والقصور الملكية",
    "nameEn": "Korean Royal Dancheong Palace",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "سلالة جوسون",
    "colors": [
      "#005792",
      "#D83A56",
      "#FFE600",
      "#1E6F5C",
      "#2B2E4A"
    ],
    "font": "Noto Serif KR, Amiri",
    "traits": "خمسة ألوان رمزية تزين أخشاب المعابد والقصور لمنع التآكل والأرواح الشريرة، تناغم كوني دقيق.",
    "css": "border-top: 6px solid #D83A56; border-bottom: 6px solid #005792; background: #FAF9F6; color: #2B2E4A;",
    "bestFor": "الدراما التاريخية الكورية، السياحة الثقافية في سيول، المطبخ الملكي الكوري."
  },
  {
    "id": "celtic-knotwork-folklore",
    "num": 128,
    "nameAr": "العقد السلتية والفولكلور الأيرلندي",
    "nameEn": "Celtic Infinite Knotwork",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "التراث السلتي القديم",
    "colors": [
      "#0D3B2E",
      "#C29B38",
      "#5A3825",
      "#E8DFD0",
      "#172A22"
    ],
    "font": "Cinzel Decorative, Amiri",
    "traits": "حبال وشبكات لا نهائية ملتفة حول بعضها بلا بداية أو نهاية، ترمز للخلود وترابط الطبيعة والحياة.",
    "css": "border: 3px solid #C29B38; background: #E8DFD0; color: #0D3B2E;",
    "bestFor": "الأدب الخيالي السلتي، المجوهرات الفضية التراثية، الفعاليات الأيرلندية."
  },
  {
    "id": "navajo-geometric-weaving",
    "num": 129,
    "nameAr": "النسيج الهندسي لقبائل النافاهو",
    "nameEn": "Navajo Geometric Loom Weaving",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث السكان الأصليين",
    "colors": [
      "#A83232",
      "#D4A373",
      "#2B2D42",
      "#E9D8A6",
      "#1D3557"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "خطوط متعرجة (Zig-Zag) ومعينات هندسية جريئة منسوجة من صوف الأغنام بالأصباغ الطبيعية الصحراوية.",
    "css": "border: 4px solid #A83232; background: #E9D8A6; color: #2B2D42;",
    "bestFor": "المصنوعات الصوفية اليدوية، السجاد القبلي الأصيل، المتاحف الأنثروبولوجية."
  },
  {
    "id": "australian-aboriginal-dot",
    "num": 130,
    "nameAr": "فن التنقيط الأسترالي الأصلي",
    "nameEn": "Australian Aboriginal Dot Art",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "أقدم فن مستمر في التاريخ",
    "colors": [
      "#8C2D19",
      "#D97724",
      "#F4C430",
      "#3E2723",
      "#000000"
    ],
    "font": "Amiri, Cairo",
    "traits": "آلاف النقاط الدقيقة الملونة بمغرة الأرض تشكل خريطة مقدسة لقصص 'زمن الحلم' ومسارات المياه الصحراوية.",
    "css": "background-image: radial-gradient(#F4C430 20%, transparent 20%); background-size: 10px 10px; background-color: #3E2723;",
    "bestFor": "المعارض البيئية، الفنون الأصلية المعاصرة، المراكز الثقافية الأسترالية."
  },
  {
    "id": "tibetan-mandala-gold",
    "num": 131,
    "nameAr": "الماندالا التبتية والرمال الملونة",
    "nameEn": "Tibetan Sand Mandala Sacred",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث الهيمالايا",
    "colors": [
      "#8B0000",
      "#FFD700",
      "#1E3F66",
      "#FF8C00",
      "#0D0D0D"
    ],
    "font": "Cinzel, Amiri",
    "traits": "دوائر مقدسة هندسية مرسومة بحبات الرمل الملونة بدقة متناهية، ترمز للكون ورحلة الروح نحو الاستنارة.",
    "css": "border: 2px solid #FFD700; border-radius: 50%; width: 280px; height: 280px; margin: 0 auto; background: #0D0D0D;",
    "bestFor": "مراكز التأمل البوذي، كتب الحكمة القديمة، الفعاليات الروحية."
  },
  {
    "id": "ottoman-iznik-ceramic",
    "num": 132,
    "nameAr": "الخزف الإزنيقي العثماني",
    "nameEn": "Ottoman Iznik Ceramic Floral",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "1450 - 1700",
    "colors": [
      "#005B94",
      "#1D8A99",
      "#C1292E",
      "#FDFDFD",
      "#1C2D37"
    ],
    "font": "Amiri, Scheherazade New",
    "traits": "أزهار الخزامى والقرنفل الإزنيقية باللون الأزرق الكوبالتي والأحمر القرمزي على خلفية بيضاء براقة كالحجر الصيني.",
    "css": "border: 2px solid #005B94; background: #FDFDFD; color: #1C2D37; box-shadow: 0 4px 12px rgba(0,91,148,0.2);",
    "bestFor": "المساجد والقصور العثمانية، منتجات البورسلين الفاخر، التحف التاريخية."
  },
  {
    "id": "baltic-amber-folk",
    "num": 133,
    "nameAr": "الكهرمان البلطيقي والغابات الساحلية",
    "nameEn": "Baltic Amber Stone Folk",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث بحر البلطيق",
    "colors": [
      "#D97706",
      "#B45309",
      "#FEF3C7",
      "#78350F",
      "#1E293B"
    ],
    "font": "Playfair Display, Alexandria",
    "traits": "راتنج الأشجار المتحجر عبر ملايين السنين بلونه الذهبي الدافئ الذي يحبس النور بداخله، هدوء ريفي وقور.",
    "css": "background: linear-gradient(135deg, #FEF3C7, #D97706); border: 2px solid #B45309; color: #78350F;",
    "bestFor": "مجوهرات الكهرمان، منتجات السبا والعناية، الحكايات الشعبية البلطيقية."
  },
  {
    "id": "mediterranean-terracotta",
    "num": 134,
    "nameAr": "التراكوتا المتوسطية والتربة الحمراء",
    "nameEn": "Mediterranean Baked Terracotta",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث البحر المتوسط",
    "colors": [
      "#C86D51",
      "#8C3A27",
      "#F4EAE1",
      "#5C2417",
      "#E09F67"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "فخار طيني محروق تحت أشعة الشمس، جدران بيضاء دافئة، أشجار زيتون عتيقة، استرخاء صيفي بطيء.",
    "css": "background: #F4EAE1; border: 2px solid #C86D51; color: #5C2417; border-radius: 20px;",
    "bestFor": "أواني الطهي الفخارية، زيت الزيتون البكر، منتجعات الاسترخاء الريفية."
  },
  {
    "id": "egyptian-pharaonic-lotus",
    "num": 135,
    "nameAr": "الفرعوني المصري وزهرة اللوتس",
    "nameEn": "Ancient Egyptian Papyrus Gold",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "3100 ق.م - 30 ق.م",
    "colors": [
      "#D4AF37",
      "#0055A5",
      "#8A1C14",
      "#F4ECD8",
      "#111111"
    ],
    "font": "Cinzel Decorative, Amiri",
    "traits": "ذهب خالص، حجر اللازورد الأزرق الملكي، زهور البردي واللوتس، تماثل أسطوري وهيبة الفراعنة الخالدة.",
    "css": "border: 3px solid #D4AF37; background: #F4ECD8; color: #111111; box-shadow: 0 0 15px rgba(212,175,55,0.3);",
    "bestFor": "المتاحف المصرية العالمية، معارض الآثار القديمة، الوثائقيات التاريخية."
  },
  {
    "id": "mesopotamian-cuneiform",
    "num": 136,
    "nameAr": "الرافديني والمسمارية البابلية",
    "nameEn": "Mesopotamian Ishtar Gate Lapis",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "حضارة سومر وبابل",
    "colors": [
      "#0038A8",
      "#E5A93C",
      "#5C3A21",
      "#F5EBE1",
      "#1B263B"
    ],
    "font": "Amiri, Cinzel",
    "traits": "بوابة عشتار الشهيرة بآجرها الأزرق اللامع وأسودها الذهبية البارزة، ألواح الطين المكتوبة بالمسمارية.",
    "css": "border: 3px solid #E5A93C; background: #0038A8; color: #F5EBE1; box-shadow: inset 0 0 15px #1B263B;",
    "bestFor": "متاحف الشرق الأدنى القديم، معارض الآثار العراقية، الدراسات اللغوية التاريخية."
  },
  {
    "id": "scottish-tartan-plaid",
    "num": 137,
    "nameAr": "التارتان الإسكتلندي والصوف الملكي",
    "nameEn": "Scottish Clan Tartan Plaid",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث المرتفعات الإسكتلندية",
    "colors": [
      "#1C3F60",
      "#2D5A27",
      "#8B0000",
      "#FFD700",
      "#111111"
    ],
    "font": "Cinzel, Alexandria",
    "traits": "شبكة خطوط أفقية وعمودية متقاطعة من الصوف الصافي تحدد هوية كل عشيرة إسكتلندية عبر القرون.",
    "css": "background: repeating-linear-gradient(45deg, #1C3F60, #1C3F60 15px, #2D5A27 15px, #2D5A27 30px); color: #FFF;",
    "bestFor": "الأقمشة الصوفية الفاخرة، احتفالات المرتفعات الإسكتلندية، المشروبات العتيقة."
  },
  {
    "id": "hawaiian-tiki-tropical",
    "num": 138,
    "nameAr": "التيكي الهاواي ونحت الخشب الاستوائي",
    "nameEn": "Hawaiian Tiki Polynesian Wood",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث بولينيزيا",
    "colors": [
      "#5A3825",
      "#E07A5F",
      "#81B29A",
      "#F2CC8F",
      "#3D405B"
    ],
    "font": "Caveat, Cairo",
    "traits": "أقنعة خشبية منحوتة باليد، مشاعل نار شاطئية، أوراق نخيل وموز عملاقة، موسيقى القيثارة الهاواية (أوكوليلي).",
    "css": "border: 4px solid #5A3825; background: #F2CC8F; color: #5A3825; border-radius: 14px;",
    "bestFor": "مطاعم الشاطئ الاستوائية، المهرجانات الصيفية، منتجات ركوب الأمواج (Surfing)."
  },
  {
    "id": "arctic-inuit-minimal",
    "num": 139,
    "nameAr": "الإنويت القطبي وجلود الفقمة",
    "nameEn": "Inuit Arctic Minimal Soapstone",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث القطب الشمالي",
    "colors": [
      "#E0F2FE",
      "#0369A1",
      "#0F172A",
      "#F8FAFC",
      "#94A3B8"
    ],
    "font": "Inter, Alexandria",
    "traits": "منحوتات حجر الصابون الأبيض والرمادي الناعم، سكون الجليد اللانهائي، وظائفية قاسية تضمن النجاة.",
    "css": "background: #F8FAFC; border: 1px solid #E0F2FE; color: #0F172A; border-radius: 8px;",
    "bestFor": "الأبحاث القطبية، الرحلات الجليدية، الأدب الجغرافي المعاصر."
  },
  {
    "id": "bedouin-tent-indigo-wool",
    "num": 140,
    "nameAr": "بيت الشعر البدوي والصوف الأسود",
    "nameEn": "Bedouin Desert Tent Indigo",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث البادية العربية",
    "colors": [
      "#1A1715",
      "#3D2E24",
      "#8B1E0F",
      "#C89D7C",
      "#1D2A44"
    ],
    "font": "Amiri, Cairo",
    "traits": "صوف الماعز الأسود المغزول يدوياً، حبال متينة تشد الخيمة ضد عواصف الصحراء، جلسات النار النجدية.",
    "css": "border: 2px solid #8B1E0F; background: #1A1715; color: #C89D7C; box-shadow: 0 4px 15px rgba(0,0,0,0.6);",
    "bestFor": "سياحة التخييم الصحراوي الفاخر، القهوة السعودية الأصيلة، فعاليات الإبل والبادية."
  },
  {
    "id": "nasa-apollo-instrumentation",
    "num": 141,
    "nameAr": "أجهزة تحكم رحلات أبولو (NASA)",
    "nameEn": "NASA Apollo Cockpit Console",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1969",
    "colors": [
      "#E6E6E6",
      "#2B2D42",
      "#D90429",
      "#0077B6",
      "#111111"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "مفاتيح تقليب فيزيائية معدنية، شاشات أرقام رقمية مقسمة بـ 7 شرائح (7-Segment)، بطاقات تعليمات مطبوعة.",
    "css": "border: 2px solid #2B2D42; background: #E6E6E6; color: #111; font-family: monospace;",
    "bestFor": "لوحات الإطلاق الفضائية، محاكيات الطيران، أدوات مراقبة الأنظمة الصارمة."
  },
  {
    "id": "nuclear-scada-control",
    "num": 142,
    "nameAr": "غرف التحكم بالمفاعلات النووية (SCADA)",
    "nameEn": "Nuclear Power SCADA Grid",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1980s - الآن",
    "colors": [
      "#0D1117",
      "#00FF66",
      "#FF0033",
      "#FFCC00",
      "#161B22"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "شاشات مراقبة شبكات الجهد العالي والضغط، ألوان قياسية للأمان (أخضر=طبيعي، أحمر=حرج، أصفر=تحذير).",
    "css": "background: #0D1117; border: 1px solid #30363D; color: #00FF66; font-family: monospace;",
    "bestFor": "أنظمة إدارة البنية التحتية، شبكات الكهرباء الوطنية، مراكز العمليات الصناعية."
  },
  {
    "id": "aviation-glass-cockpit",
    "num": 143,
    "nameAr": "قمرة قيادة الطيران النفاث الحديث",
    "nameEn": "Aviation Modern Glass Cockpit",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "2000s - الآن",
    "colors": [
      "#000000",
      "#00E5FF",
      "#39FF14",
      "#FF0055",
      "#9E9E9E"
    ],
    "font": "Orbitron, Cairo",
    "traits": "شاشات عرض الأفق الاصطناعي (Artificial Horizon)، خطوط توجيه مسار الرحلة، مؤشرات السرعة والارتفاع.",
    "css": "border: 1px solid #00E5FF; background: #000; color: #00E5FF; box-shadow: inset 0 0 10px rgba(0,229,255,0.2);",
    "bestFor": "تطبيقات الطيران والملاحة، تتبع الرحلات الجوية الحية، محاكيات الرادار."
  },
  {
    "id": "medical-telemetry-monitor",
    "num": 144,
    "nameAr": "شاشات القياسات الحيوية الطبية",
    "nameEn": "Hospital ICU Telemetry Monitor",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#000000",
      "#00FF41",
      "#00FFFF",
      "#FF3366",
      "#FFFF00"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "موجات نبضات القلب ECG الخضراء الحية، نسبة الأكسجين في الدم SpO2، أرقام واضحة جداً للقراءة من مسافة بعيدة.",
    "css": "background: #000; color: #00FF41; border: 1px solid #00FF41; font-family: monospace;",
    "bestFor": "تطبيقات الصحة ومراقبة المرضى، الساعات الذكية، منصات الرعاية الطبية الحثيثة."
  },
  {
    "id": "braun-dieter-rams",
    "num": 145,
    "nameAr": "وظيفية براون (ديتر رامز)",
    "nameEn": "Braun Dieter Rams Functionalism",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1955 - 1995",
    "colors": [
      "#FFFFFF",
      "#E5E5E5",
      "#111111",
      "#FF5500",
      "#737373"
    ],
    "font": "Akzidenz-Grotesk, Inter, Cairo",
    "traits": "عشرة مبادئ للتصميم الجيد: التصميم الجيد غير ملحوظ، بسيط وصادق، مفاتيح دائرية مريحة، رمادي وأبيض ناصع.",
    "css": "border: 1px solid #E5E5E5; background: #FFF; color: #111; border-radius: 8px; box-shadow: none;",
    "bestFor": "الأجهزة الإلكترونية الاستهلاكية، أدوات التدوين النقية، التطبيقات الوظيفية الخالصة."
  },
  {
    "id": "siemens-plc-industrial",
    "num": 146,
    "nameAr": "أتمتة المصانع ولوحات PLC",
    "nameEn": "Siemens S7 Industrial Automation",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#00646E",
      "#009999",
      "#E6E6E6",
      "#333333",
      "#D9534F"
    ],
    "font": "Inter, Cairo",
    "traits": "ألوان الفيروز الصناعي المعتمد لسيمنز، رموز الصمامات والمحركات، أزرار إيقاف الطوارئ الحمراء الضخمة.",
    "css": "border-top: 4px solid #00646E; background: #E6E6E6; color: #333;",
    "bestFor": "لوحات تحكم خطوط الإنتاج، مراقبة المصانع الذكية، مستودعات التبريد الضخمة."
  },
  {
    "id": "bloomberg-terminal-finance",
    "num": 147,
    "nameAr": "محطة بلومبرغ للمال والأسهم",
    "nameEn": "Bloomberg Financial Terminal",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1982 - الآن",
    "colors": [
      "#000000",
      "#FF8000",
      "#FFA500",
      "#00FF00",
      "#FFFFFF"
    ],
    "font": "Consolas, Courier New",
    "traits": "شاشة سوداء ذات خطوط برتقالية وبيضاء، تيار حي ومتدفق لأسعار السندات والأسهم والسلع بدون أي فراغ مهدور.",
    "css": "background: #000; color: #FF8000; font-family: monospace; border: 1px solid #333;",
    "bestFor": "منصات التداول المالي عالي التردد، غرف الأخبار الاقتصادية، تحليلات الفوركس."
  },
  {
    "id": "radar-sonar-sweeper",
    "num": 148,
    "nameAr": "الرادار البحري والسونار الدوار",
    "nameEn": "Naval Submarine Sonar Sweep",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1940s - الآن",
    "colors": [
      "#021B1A",
      "#00FFCC",
      "#007A66",
      "#FF0033",
      "#00332B"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "دوائر متحدة المركز، خط أخضر دوار يرسم نقاط التماس (Blips)، مسافات بالأميال البحرية، إحساس بالترقب.",
    "css": "border-radius: 50%; border: 2px solid #00FFCC; background: #021B1A; color: #00FFCC;",
    "bestFor": "مراقبة الموانئ البحرية، استكشاف الأعماق، الرادارات الجوية."
  },
  {
    "id": "architectural-cyan-blueprint",
    "num": 149,
    "nameAr": "المخطط المعماري الأزرق (Blueprint)",
    "nameEn": "Architectural Cyan Blueprint",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1842 - 1980s",
    "colors": [
      "#0A2540",
      "#00D4FF",
      "#FFFFFF",
      "#1E40AF",
      "#60A5FA"
    ],
    "font": "Space Mono, Cairo",
    "traits": "ورق كيميائي أزرق داكن مع خطوط بيضاء وسماوية دقيقة، أبعاد بالسنتيمتر، شبكة مربعات خفيفة.",
    "css": "background: #0A2540; border: 1.5px solid #00D4FF; color: #FFFFFF; font-family: monospace;",
    "bestFor": "مواقع شركات الهندسة المعمارية، بوابات التشييد، المخططات التقنية المفتوحة."
  },
  {
    "id": "schematic-circuit-pcb",
    "num": 150,
    "nameAr": "لوحة الدوائر المطبوعة (PCB)",
    "nameEn": "Green Solder Mask Circuit Board",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#0D472B",
      "#1B8A4D",
      "#D4AF37",
      "#E0E0E0",
      "#062415"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "خلفية اللوح الأخضر، مسارات نحاسية وذهبية متعرجة، ثقوب لحام فضية دائرية، أرقام المكونات (R1, C4, U2).",
    "css": "background: #0D472B; border: 2px solid #D4AF37; color: #E0E0E0; font-family: monospace;",
    "bestFor": "مواقع قطع الهاردوير، مشاريع إنترنت الأشياء، مجتمعات الإلكترونيات والهواة."
  },
  {
    "id": "gis-satellite-topographic",
    "num": 151,
    "nameAr": "الخرائط الطبوغرافية بالأقمار الصناعية",
    "nameEn": "GIS Topographic Elevation Contour",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#111827",
      "#10B981",
      "#3B82F6",
      "#F59E0B",
      "#F3F4F6"
    ],
    "font": "Inter, Cairo",
    "traits": "خطوط الكنتور الرفيعة التي تعبر عن الارتفاعات، خرائط حرارية ثلاثية الأبعاد، إحداثيات GPS بالدرجات والدقائق.",
    "css": "border: 1px solid #10B981; background: #111827; color: #F3F4F6;",
    "bestFor": "منصات الطوارئ والدفاع المدني، دراسات البيئة والمناخ، رحلات الاستكشاف الجبلي."
  },
  {
    "id": "particle-physics-collider",
    "num": 152,
    "nameAr": "مصادم الجسيمات (CERN)",
    "nameEn": "Large Hadron Collider CERN",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#0B0E14",
      "#38BDF8",
      "#818CF8",
      "#F43F5E",
      "#E2E8F0"
    ],
    "font": "JetBrains Mono, Alexandria",
    "traits": "مسارات تصادم الجسيمات دون الذرية المنحنية في حقل مغناطيسي، مستويات الطاقة بالإلكترون فولت (GeV).",
    "css": "background: #0B0E14; border: 1px solid #38BDF8; color: #E2E8F0; box-shadow: 0 0 15px rgba(56,189,248,0.2);",
    "bestFor": "مختبرات الفيزياء النووية، الأبحاث الفلكية، محاكاة النمذجة الرياضية المعقدة."
  },
  {
    "id": "laboratory-cleanroom-iso",
    "num": 153,
    "nameAr": "غرفة أشباه الموصلات المعقمة (ISO 1)",
    "nameEn": "Cleanroom Semiconductor Fab",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#FFFFFF",
      "#F0F4F8",
      "#0284C7",
      "#E0F2FE",
      "#0F172A"
    ],
    "font": "Inter, Cairo",
    "traits": "نقاء مطلق، غياب تام لأي شوائب، ألوان بيضاء وسماوية باردة، فلاتر هواء وتنبيهات لنسبة الجسيمات في الهواء.",
    "css": "background: #FFFFFF; border: 1px solid #0284C7; color: #0F172A; box-shadow: 0 4px 20px rgba(2,132,199,0.08);",
    "bestFor": "صناعة الرقائق الإلكترونية، المختبرات البيولوجية المتقدمة، الأدوية والمستلزمات الطبية."
  },
  {
    "id": "submarine-periscope-grid",
    "num": 154,
    "nameAr": "منظار الغواصة وشبكة الاستهداف",
    "nameEn": "Submarine Periscope Crosshair",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "تكتيكي",
    "colors": [
      "#0A120A",
      "#00FF66",
      "#003314",
      "#FF3333",
      "#040804"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "إطار دائري مظلم مع شبكة تقاطع أفقية وعمودية مرقمة، مؤشر زاوية البوصلة في الأعلى، مسافة الهدف بالياردة.",
    "css": "border-radius: 50%; border: 3px solid #00FF66; background: #0A120A; color: #00FF66;",
    "bestFor": "ألعاب المحاكاة التكتيكية، التدريبات العسكرية، أنظمة التوجيه البصري."
  },
  {
    "id": "heavy-machinery-caterpillar",
    "num": 155,
    "nameAr": "المعدات الثقيلة وعلامات التحذير",
    "nameEn": "Caterpillar Heavy Machinery Yellow",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "صناعي",
    "colors": [
      "#FFCC00",
      "#000000",
      "#333333",
      "#E63946",
      "#FFFFFF"
    ],
    "font": "Impact, Cairo",
    "traits": "أصفر التحذير الصريح، خطوط سوداء مائلة (Hazard Stripes)، فولاذ سميك يتحمل الأوحال ومواقع البناء الشاقة.",
    "css": "border: 4px solid #000; background: #FFCC00; color: #000; font-weight: 900;",
    "bestFor": "معدات الحفر والتعدين، منصات السلامة المهنية، مشاريع البنية التحتية الكبرى."
  },
  {
    "id": "cnc-milling-gcode",
    "num": 156,
    "nameAr": "واجهة ماكينات CNC وأكواد G-Code",
    "nameEn": "CNC Milling Precision G-Code",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "صناعي",
    "colors": [
      "#1E222A",
      "#61AFEF",
      "#98C379",
      "#E5C07B",
      "#ABB2BF"
    ],
    "font": "Fira Code, Cairo",
    "traits": "إحداثيات المحاور الثلاثة (X, Y, Z) بدقة الميكرون، سرعة دوران المغزل RPM، تيار سطر الأوامر G01 X10.5 Y20.2.",
    "css": "background: #1E222A; border: 1px solid #61AFEF; color: #ABB2BF; font-family: monospace;",
    "bestFor": "ورش التصنيع الرقمي، معامل الطباعة ثلاثية الأبعاد، ماكينات قطع الليزر."
  },
  {
    "id": "oscilloscope-green-vector",
    "num": 157,
    "nameAr": "راسم الإشارة المتجهي (Oscilloscope)",
    "nameEn": "Cathode Ray Oscilloscope Vector",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1960s - الآن",
    "colors": [
      "#051008",
      "#00FF44",
      "#004D15",
      "#80FF9F",
      "#020804"
    ],
    "font": "Share Tech Mono, Cairo",
    "traits": "خط أخضر رفيع وسريع جداً يرسم موجات الجهد الكهربائي الحية (Sine / Sawtooth / Square)، شبكة قياس مدرجة.",
    "css": "background: #051008; border: 2px solid #00FF44; color: #00FF44; text-shadow: 0 0 6px #00FF44;",
    "bestFor": "معامل هندسة الإلكترونيات، فحص إشارات الصوت، صيانة الراديو والأجهزة."
  },
  {
    "id": "geiger-counter-radiation",
    "num": 158,
    "nameAr": "عداد غايغر التناظري للإشعاع",
    "nameEn": "Analog Geiger Counter CPM",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1950s - الآن",
    "colors": [
      "#C8B88A",
      "#2B2D2F",
      "#D90429",
      "#FFB703",
      "#111111"
    ],
    "font": "Courier New, Cairo",
    "traits": "مؤشر إبرة تناظرية تتذبذب مع كل نقرة إشعاعية، عداد ميكانيكي بالأرقام المتدحرجة، علامة الخطر الثلاثية.",
    "css": "border: 3px solid #2B2D2F; background: #C8B88A; color: #111; font-family: monospace;",
    "bestFor": "مراقبة البيئة الإشعاعية، ألعاب البقاء بعد الكوارث، أجهزة الدفاع المدني."
  },
  {
    "id": "seismic-earthquake-recorder",
    "num": 159,
    "nameAr": "راسم الزلازل والورق الأسطواني",
    "nameEn": "Seismograph Drum Recorder",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "1890s - الآن",
    "colors": [
      "#FBFBFB",
      "#111111",
      "#D62828",
      "#4A5568",
      "#E2E8F0"
    ],
    "font": "Special Elite, Cairo",
    "traits": "إبرة حبر ترسم خطوطاً متموجة حادة على أسطوانة ورقية دوارة، خط مستقيم يتحول فجأة لاهتزازات عنيفة.",
    "css": "border-bottom: 2px solid #D62828; background: #FBFBFB; color: #111;",
    "bestFor": "مراكز رصد الزلازل والبراكين، الدراسات الجيولوجية، تقارير الكوارث الطبيعية."
  },
  {
    "id": "space-station-airlock-hud",
    "num": 160,
    "nameAr": "شاشة بوابة الضغط لمحطة الفضاء",
    "nameEn": "Space Station Airlock Pressure",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#070B12",
      "#00F0FF",
      "#38BDF8",
      "#EF4444",
      "#E0F2FE"
    ],
    "font": "Orbitron, Cairo",
    "traits": "مستوى الضغط الجوي (PSI)، نسبة الأكسجين والنيتروجين، قفل الباب الهيدروليكي، تنبيهات فك الضغط الطارئ.",
    "css": "clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px); background: #070B12; border: 1px solid #00F0FF; color: #E0F2FE;",
    "bestFor": "أفلام الفضاء العلمي، تدريب رواد الفضاء، المحاكيات العلمية المتقدمة."
  },
  {
    "id": "air-traffic-control-atc",
    "num": 161,
    "nameAr": "شاشة برج المراقبة الجوية (ATC)",
    "nameEn": "Air Traffic Control Vector Display",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#001100",
      "#00FF33",
      "#006611",
      "#FF9900",
      "#002200"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "أيقونات الطائرات مع خطوط اتجاه الرحلة، رمز الرحلة والارتفاع والسرعة (SV102 340 450KTS)، دوائر الاقتراب.",
    "css": "background: #001100; border: 1px solid #00FF33; color: #00FF33; font-family: monospace;",
    "bestFor": "أنظمة الملاحة الجوية الدولية، محاكيات الطيران لبرج المراقبة."
  },
  {
    "id": "formula1-telemetry-f1",
    "num": 162,
    "nameAr": "تيليمتري سباقات الفورمولا 1",
    "nameEn": "Formula 1 Real-time Telemetry",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#15151E",
      "#E10600",
      "#FFFFFF",
      "#00D2BE",
      "#FFF500"
    ],
    "font": "Titillium Web, Cairo",
    "traits": "سرعة السيارة، رقم الغيار الحالي، دواسة الوقود والمكابح (Throttle/Brake %)، زمن اللفة بالملي ثانية.",
    "css": "border-left: 5px solid #E10600; background: #15151E; color: #FFF;",
    "bestFor": "بث سباقات السيارات، نوادي المحاكاة الاحترافية، إحصاءات الأداء الرياضي."
  },
  {
    "id": "deep-sea-bathyscaphe",
    "num": 163,
    "nameAr": "غواصة الأعماق السحيقة (خندق ماريانا)",
    "nameEn": "Deep Sea Mariana Bathyscaphe",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "استكشافي",
    "colors": [
      "#020813",
      "#00B4D8",
      "#0077B6",
      "#90E0EF",
      "#03045E"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "مقياس عمق شاهق بالآلاف من الأمتار، كشافات ضوئية تخترق العتمة، درجة برودة الماء، كائنات الأعماق المضيئة.",
    "css": "background: #020813; border: 2px solid #00B4D8; color: #90E0EF;",
    "bestFor": "أفلام وثائقيات المحيطات، منصات علوم البحار، الرحلات الاستكشافية الغامضة."
  },
  {
    "id": "radio-spectrum-analyzer",
    "num": 164,
    "nameAr": "محلل الطيف اللاسلكي وشلال الترددات",
    "nameEn": "Radio Spectrum Waterfall Display",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "لاسلكي",
    "colors": [
      "#000000",
      "#FF00FF",
      "#00FFFF",
      "#00FF00",
      "#FFFF00"
    ],
    "font": "Share Tech Mono, Cairo",
    "traits": "رسم شلال الترددات الملون (Waterfall) يوضح قوة الإشارة على نطاق MHz، اكتشاف إشارات الراديو الفضائية.",
    "css": "background: #000; border: 1px solid #00FFFF; color: #00FFFF; font-family: monospace;",
    "bestFor": "هواة اللاسلكي (Ham Radio)، المراقبة الطيفية، أجهزة الاتصالات العسكرية."
  },
  {
    "id": "space-telescope-spectrum",
    "num": 165,
    "nameAr": "مطياف التلسكوب الفضائي (James Webb)",
    "nameEn": "James Webb Infrared Spectroscopy",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "فلكي",
    "colors": [
      "#060709",
      "#E5A93C",
      "#E05A47",
      "#8A4F7D",
      "#E2E8F0"
    ],
    "font": "Space Grotesk, Alexandria",
    "traits": "أطياف الأشعة تحت الحمراء للنجوم والمجرات البعيدة، كيمياء الغلاف الجوي للكواكب الخارجية، ذهب كوزميك.",
    "css": "border: 1.5px solid #E5A93C; background: #060709; color: #E2E8F0;",
    "bestFor": "المراصد الفلكية، وكالات الفضاء، المجلات العلمية المتخصصة."
  },
  {
    "id": "clean-energy-smart-grid",
    "num": 166,
    "nameAr": "الشبكة الذكية للطاقة النظيفة",
    "nameEn": "Clean Energy Smart Grid Flow",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#0A192F",
      "#64FFDA",
      "#00B4D8",
      "#F3F4F6",
      "#1E3A8A"
    ],
    "font": "Inter, Cairo",
    "traits": "توليد الطاقة اللحظي من الألواح الشمسية وتوربينات الرياح، سعة البطاريات الضخمة، كفاءة الاستهلاك بالكيلوواط.",
    "css": "background: #0A192F; border: 1px solid #64FFDA; color: #64FFDA; border-radius: 12px;",
    "bestFor": "مشاريع الطاقة المتجددة، إدارة المباني الذكية الخضراء، شركات الكهرباء."
  },
  {
    "id": "weather-doppler-radar",
    "num": 167,
    "nameAr": "رادار دوبلر للأرصاد والأعاصير",
    "nameEn": "Doppler Weather Radar Storm",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#0B132B",
      "#48CAE4",
      "#00B4D8",
      "#FF006E",
      "#FB5607"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "كتل العواصف الملونة بالأحمر والبنفسجي، اتجاه وسرعة الرياح عبر إزاحة دوبلر، مسار المنخفضات الجوية.",
    "css": "background: #0B132B; border: 2px solid #48CAE4; color: #FFFFFF;",
    "bestFor": "تطبيقات الطقس الاحترافية، الإنذار المبكر للأعاصير، الملاحة البحرية والجوية."
  },
  {
    "id": "quantum-state-bloch-sphere",
    "num": 168,
    "nameAr": "كرة بلوخ وحالات الكيوبت الكمومي",
    "nameEn": "Quantum Computing Bloch Sphere",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "كمومي",
    "colors": [
      "#070A14",
      "#A855F7",
      "#06B6D4",
      "#F43F5E",
      "#E2E8F0"
    ],
    "font": "Space Grotesk, Alexandria",
    "traits": "احتمالية تراكب الحالات الكمومية |0⟩ و |1⟩، بوابات هادامارد، استقرار التماسك الكمومي بالنانوثانية.",
    "css": "background: #070A14; border: 1px solid #A855F7; box-shadow: 0 0 20px rgba(168,85,247,0.3); color: #E2E8F0;",
    "bestFor": "مختبرات الحوسبة الكمومية، التشفير الكمي، أبحاث الذكاء الاصطناعي الكمومي."
  },
  {
    "id": "microchip-silicon-die-macro",
    "num": 169,
    "nameAr": "شريحة السيليكون تحت المجهر",
    "nameEn": "Silicon Wafer Die Macro Circuit",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "صناعي",
    "colors": [
      "#1F1A24",
      "#9B5DE5",
      "#F15BB5",
      "#00BBF9",
      "#FEE440"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "ملايين الترانزستورات المنمنمة المصفوفة بدقة النانومتر، ألوان قوس قزح الناتجة عن حيود الضوء على السيليكون.",
    "css": "background: #1F1A24; border: 2px solid #00BBF9; color: #FEE440;",
    "bestFor": "شركات تصنيع الرقائق، مجلات التكنولوجيا المتقدمة، معارض عتاد الكمبيوتر."
  },
  {
    "id": "cryogenic-chamber-hud",
    "num": 170,
    "nameAr": "غرفة التجميد العلمي فائق البرودة",
    "nameEn": "Cryogenic Deep Freeze Chamber",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "مستقبلي",
    "colors": [
      "#030F19",
      "#A5F3FC",
      "#38BDF8",
      "#0284C7",
      "#F0FDF4"
    ],
    "font": "Orbitron, Cairo",
    "traits": "درجة الحرارة القريبة من الصفر المطلق (-273.15 °C)، تدفق النيتروجين السائل، استقرار المؤشرات الحيوية المجمدة.",
    "css": "background: #030F19; border: 1px solid #A5F3FC; box-shadow: 0 0 15px rgba(165,243,252,0.3); color: #A5F3FC;",
    "bestFor": "أبحاث الحفظ الحيوي، الخيال العلمي، مراكز الأبحاث الطبية المتقدمة."
  },
  {
    "id": "cryptographic-hash-matrix",
    "num": 171,
    "nameAr": "مصفوفة التشفير والأرقام الهاش",
    "nameEn": "Cryptographic SHA-256 Ledger",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#000000",
      "#10B981",
      "#3B82F6",
      "#6EE7B7",
      "#111827"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "سلاسل البلوكات المشفرة (Hexadecimal Hashes)، صعوبة التعدين، التوقيع الرقمي بالمفتاح العام والخاص.",
    "css": "background: #000; border: 1px solid #10B981; color: #6EE7B7; font-family: monospace;",
    "bestFor": "منصات البلوكشين، أدوات التحقق الأمني، التوقيع الإلكتروني المعتمد."
  },
  {
    "id": "robotics-kinematics-arm",
    "num": 172,
    "nameAr": "الذراع الروبوتية والحركة الحركية",
    "nameEn": "Robotics 6-Axis Kinematics Arm",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "صناعي",
    "colors": [
      "#18181B",
      "#FAFAFA",
      "#E11D48",
      "#22C55E",
      "#3F3F46"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "زوايا مفاصل الذراع الروبوتية الستة (J1 - J6)، مسار نقطة النهاية (TCP)، عزم الدوران وحمولة الكيلوغرام.",
    "css": "background: #18181B; border: 1.5px solid #3F3F46; color: #FAFAFA; border-left: 4px solid #E11D48;",
    "bestFor": "مصانع تجميع السيارات، المستودعات المؤتمتة، الجراحة الروبوتية الدقيقة."
  },
  {
    "id": "military-stencil-mil-spec",
    "num": 173,
    "nameAr": "الترميز العسكري واستنسل الصناديق",
    "nameEn": "Mil-Spec Stencil Supply Crate",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "عسكري",
    "colors": [
      "#283618",
      "#606C38",
      "#DDA15E",
      "#BC6C25",
      "#FEFAE0"
    ],
    "font": "Black Ops One, Cairo",
    "traits": "حروف مقطعة ومطبوعة بالبخاخ (Stencil) على صناديق الذخيرة الخضراء الزيتونية، أرقام تسلسلية رسمية صارمة.",
    "css": "background: #283618; border: 3px solid #606C38; color: #FEFAE0; text-transform: uppercase;",
    "bestFor": "معدات التكتيك والمغامرة، ألعاب الحروب، المنصات اللوجستية العسكرية."
  },
  {
    "id": "supercomputer-rack-cluster",
    "num": 174,
    "nameAr": "مصفوفات الحواسيب العملاقة المبردة",
    "nameEn": "Supercomputer HPC Liquid Cooled",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "معاصر",
    "colors": [
      "#0A0F1D",
      "#00F0FF",
      "#3B82F6",
      "#10B981",
      "#E2E8F0"
    ],
    "font": "JetBrains Mono, Alexandria",
    "traits": "مؤشرات عمل آلاف المعالجات المتوازية (GPUs)، حرارة سائل التبريد المباشر، سرعة تبادل البيانات بـ Terabits/sec.",
    "css": "background: #0A0F1D; border: 1px solid rgba(0,240,255,0.3); color: #E2E8F0;",
    "bestFor": "مراكز الحوسبة الفائقة، تدريب نماذج الذكاء الاصطناعي العملاقة، محاكاة الطقس العالمي."
  },
  {
    "id": "analog-synthesizer-modular",
    "num": 175,
    "nameAr": "المولد الصوتي التناظري والكابلات",
    "nameEn": "Modular Analog Synthesizer Eurorack",
    "cat": "industrial-tech",
    "catAr": "الأنظمة الصناعية والتكتيكية",
    "era": "موسيقي",
    "colors": [
      "#2A2B2E",
      "#E0E2EC",
      "#F43F5E",
      "#FBBF24",
      "#38BDF8"
    ],
    "font": "Space Mono, Cairo",
    "traits": "مقابض تحكم دائرية مصمتة، مقابس كابلات ملونة تربط بين وحدات التردد والمذبذبات، مرشحات صوتية دافئة.",
    "css": "background: #2A2B2E; border: 2px solid #E0E2EC; color: #E0E2EC; border-radius: 4px;",
    "bestFor": "استوديوهات إنتاج الموسيقى الإلكترونية، تصميم المؤثرات الصوتية، محاكيات السينث."
  },
  {
    "id": "swiss-international-strict",
    "num": 176,
    "nameAr": "النمط السويسري الصارم (التصميم الدولي)",
    "nameEn": "Swiss International Typographic",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1950s - الآن",
    "colors": [
      "#FFFFFF",
      "#0A0A0A",
      "#FF3B00",
      "#E5E5E5",
      "#666666"
    ],
    "font": "Inter, Alexandria",
    "traits": "شبكة أعمدة صلبة 1px ظاهرة، تيبوغرافي عملاق عريض غير مذيل، تباين أبيض وأسود مع البرتقالي الدولي.",
    "css": "border: 2px solid #0A0A0A; background: #FFFFFF; color: #0A0A0A; border-radius: 0;",
    "bestFor": "الكتالوجات المعمارية، بوابات التصميم، المجلات الثقافية الحديثة، استوديوهات الفن والهندسة."
  },
  {
    "id": "editorial-luxury-vogue",
    "num": 177,
    "nameAr": "التحريري الصحفي الفاخر (مونوكروم)",
    "nameEn": "Editorial Luxury High-Fashion",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "معاصر",
    "colors": [
      "#F9F7F2",
      "#141414",
      "#A38148",
      "#8A8580",
      "#D6D1C7"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "خطوط سيريف عريضة فاخرة، تباين الأبيض العاجي والأسود الحبري والبرونز، خطوط أفقية شعرية فاصلة.",
    "css": "background: #F9F7F2; color: #141414; border: 1px solid #141414; border-radius: 0;",
    "bestFor": "دور النشر الأدبية، المجلات الفكرية، دور المجوهرات والعطور الفاخرة، الفنادق العالمية."
  },
  {
    "id": "broadside-woodtype-poster",
    "num": 178,
    "nameAr": "ملصقات حروف الخشب الضخمة (Woodtype)",
    "nameEn": "Broadside Vintage Woodtype",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1830s - 1900s",
    "colors": [
      "#1C160E",
      "#F4EBD9",
      "#C1292E",
      "#4A3B32",
      "#E8D5B5"
    ],
    "font": "Abril Fatface, Cairo",
    "traits": "حروف خشبية محفورة يدوياً بأحجام متفاوتة تملأ كامل الصفحة بدون مسافات، طابع إعلانات السيرك والمهرجانات القديمة.",
    "css": "border: 4px solid #1C160E; background: #F4EBD9; color: #1C160E; text-transform: uppercase;",
    "bestFor": "ملصقات الحفلات الموسيقية الحية، المطاعم الريفية القديمة، التذكارات التاريخية."
  },
  {
    "id": "new-yorker-monocle-satire",
    "num": 179,
    "nameAr": "مجلة النيويوركر والأناقة الهادئة",
    "nameEn": "The New Yorker Literary Sophistication",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1925 - الآن",
    "colors": [
      "#FFFFFF",
      "#222222",
      "#E84A5F",
      "#F7F7F7",
      "#888888"
    ],
    "font": "Adobe Caslon, Amiri",
    "traits": "أعمدة نصية رشيقة، رسوم كاريكاتيرية خطية بالغة الذكاء، عناوين بنمط خط إيرفين (Irvin)، وقار صحفي خالد.",
    "css": "border-top: 3px solid #222; background: #FFF; color: #222; font-family: serif;",
    "bestFor": "المقالات الثقافية الطويلة، التحليلات السياسية العميقة، المراجعات الأدبية."
  },
  {
    "id": "penguin-classics-paperback",
    "num": 180,
    "nameAr": "سلسلة بنغوين الكلاسيكية البرتقالية",
    "nameEn": "Penguin Classics Tri-Band",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1935 - الآن",
    "colors": [
      "#FF6600",
      "#FFFFFF",
      "#111111",
      "#005544",
      "#8B1E0F"
    ],
    "font": "Gill Sans, Alexandria",
    "traits": "تصميم الأشرطة الثلاثة الشهير: شريط ملون علوي وسفلي مع شريط أبيض عريض في المنتصف يحمل العنوان والمؤلف.",
    "css": "border-top: 24px solid #FF6600; border-bottom: 24px solid #FF6600; background: #FFF; color: #111;",
    "bestFor": "نشر الكتب والروايات، السلاسل الأكاديمية، ملخصات الكتب، المدونات الفكرية."
  },
  {
    "id": "manifesto-typographic-bold",
    "num": 181,
    "nameAr": "البيان الثوري التيبوغرافي (Manifesto)",
    "nameEn": "Typographic Political Manifesto",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "طليعي",
    "colors": [
      "#D90429",
      "#000000",
      "#FFFFFF",
      "#EDF2F4",
      "#2B2D42"
    ],
    "font": "Impact, Space Grotesk, Cairo",
    "traits": "نصوص قاطعة تدعو للتحرك، كلمات مفتاحية ضخمة تكسر الأسطر، شجاعة في الطرح، تباين درامي أحمر وأسود.",
    "css": "background: #D90429; color: #FFF; font-weight: 900; padding: 24px;",
    "bestFor": "البيانات التأسيسية للشركات الناشئة، المبادرات المجتمعية، الحملات الفكرية."
  },
  {
    "id": "typewriter-manuscript-draft",
    "num": 182,
    "nameAr": "مسودة الآلة الكاتبة والأوراق الصفراء",
    "nameEn": "Vintage Typewriter Manuscript",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1870s - 1980s",
    "colors": [
      "#2D2B28",
      "#FAF7EE",
      "#A83232",
      "#8C857B",
      "#E3DCС8"
    ],
    "font": "Courier Prime, Amiri",
    "traits": "خط آلة كاتبة بمحاذاة غير مكتملة، شريط حبر أسود باهت، ملاحظات مصححة بحبر أحمر على الهامش.",
    "css": "background: #FAF7EE; color: #2D2B28; font-family: 'Courier Prime', monospace;",
    "bestFor": "مدونات الكتاب والمؤلفين، الملاحظات الشخصية، السير الذاتية، المسودات الأدبية."
  },
  {
    "id": "bodoni-extreme-contrast",
    "num": 183,
    "nameAr": "خط بودوني والتباين العمودي الحاد",
    "nameEn": "Bodoni Modern High-Contrast Serif",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1798 - الآن",
    "colors": [
      "#000000",
      "#FFFFFF",
      "#C5A059",
      "#4A4A4A",
      "#F5F5F5"
    ],
    "font": "Bodoni Moda, Amiri",
    "traits": "سيقان حروف سميكة جداً تقابلها خطوط أفقية شعرية فائقة الرقة (Hairline)، ذروة الأناقة الإيطالية الكلاسيكية.",
    "css": "font-family: 'Bodoni Moda', serif; font-weight: 900; letter-spacing: -1px; color: #000;",
    "bestFor": "مجلات الأزياء العالمية، دور العطور الراقية، الملصقات السينمائية الأرستقراطية."
  },
  {
    "id": "drop-cap-illuminated",
    "num": 184,
    "nameAr": "الحرف الاستهلالي المذهب (Drop Cap)",
    "nameEn": "Illuminated Medieval Drop Cap",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "عصور وسطى",
    "colors": [
      "#1B263B",
      "#D4AF37",
      "#8B0000",
      "#FBF7EE",
      "#3D2B1F"
    ],
    "font": "Amiri, Cinzel Decorative",
    "traits": "أول حرف في الصفحة مرسوم بحجم هائل ومحاط بزخارف ونباتات ذهبية وملونة، موروث المخطوطات القديمة.",
    "css": "border: 1px solid #D4AF37; background: #FBF7EE; color: #1B263B;",
    "bestFor": "المجموعات القصصية الكلاسيكية، التاريخ والأنساب، المجلدات التراثية الفاخرة."
  },
  {
    "id": "diwani-arabic-calligraphy",
    "num": 185,
    "nameAr": "الخط الديواني العثماني وانسياب الحروف",
    "nameEn": "Ottoman Diwani Calligraphy Fluid",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "تراث خطي عربي",
    "colors": [
      "#1A1412",
      "#C5A059",
      "#78281F",
      "#F5EFE6",
      "#3E3835"
    ],
    "font": "Amiri, Aref Ruqaa",
    "traits": "حروف ملتفة متداخلة بانسيابية كالأمواج، جمالية التناغم الخطي العربي المعجز، لا توجد زوايا حادة.",
    "css": "font-family: 'Amiri', serif; background: #F5EFE6; color: #1A1412; border: 1.5px solid #C5A059;",
    "bestFor": "الشهادات والوثائق الرسمية، بطاقات التهنئة الملكية، شعارات المؤسسات التراثية."
  },
  {
    "id": "split-screen-editorial",
    "num": 186,
    "nameAr": "الشاشة التحريرية المنقسمة عمودياً",
    "nameEn": "Split-Screen Editorial Layout",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "معاصر",
    "colors": [
      "#0F172A",
      "#FFFFFF",
      "#38BDF8",
      "#F1F5F9",
      "#64748B"
    ],
    "font": "Playfair Display, Inter",
    "traits": "نصف الشاشة صورة فوتوغرافية ثابتة بدقة عالية، والنصف الآخر نص تحريري ينساب بسلاسة عند التمرير.",
    "css": "display: grid; grid-template-columns: 1fr 1fr; border: 1px solid #E2E8F0;",
    "bestFor": "مقالات السفر المصورة، المجلات المعمارية، إعلانات السيارات الفارهة."
  },
  {
    "id": "yellow-journalism-headline",
    "num": 187,
    "nameAr": "المانشيت الصحفي الصاخب (العنوان العريض)",
    "nameEn": "Yellow Journalism Sensationalist",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1890s",
    "colors": [
      "#111111",
      "#FFF9D2",
      "#CC0000",
      "#555555",
      "#E8E0C5"
    ],
    "font": "Impact, Bebas Neue, Cairo",
    "traits": "عناوين بحجم الغلاف بالكامل، استخدام علامات التعجب والخطوط العريضة الصادمة لجذب فضول القارئ فوراً.",
    "css": "background: #FFF9D2; color: #111; font-weight: 900; border-bottom: 4px solid #CC0000;",
    "bestFor": "مواقع الأخبار الحصرية، استعراض الترندات، المنصات الاستقصائية الجريئة."
  },
  {
    "id": "oxford-scholarly-monograph",
    "num": 188,
    "nameAr": "المونوغراف الأكاديمي لجامعة أكسفورد",
    "nameEn": "Oxford University Scholarly Press",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "أكاديمي عريق",
    "colors": [
      "#002147",
      "#FFFFFF",
      "#333333",
      "#F4F5F7",
      "#8C1D40"
    ],
    "font": "EB Garamond, Amiri",
    "traits": "هوامش سفلية مرقمة بدقة، مراجع أكاديمية، رصانة علمية محايدة، غياب أي استعراض بصري مضلل.",
    "css": "background: #FFF; color: #333; border-top: 4px solid #002147; font-family: 'EB Garamond', serif;",
    "bestFor": "الأبحاث والدوريات المحكمة، الرسائل الجامعية، المنصات الأكاديمية."
  },
  {
    "id": "baseline-grid-modular",
    "num": 189,
    "nameAr": "الشبكة السطرية الموحدة (Baseline Grid)",
    "nameEn": "Baseline Modular Typographic Grid",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "معاصر",
    "colors": [
      "#FFFFFF",
      "#0A0A0A",
      "#4F46E5",
      "#F3F4F6",
      "#9CA3AF"
    ],
    "font": "Inter, Cairo",
    "traits": "كل عنصر وكل سطر نصي وارتفاع صورة مثبت رياضياً على مضاعفات خط الأساس (8px أو 12px) بتناغم سيمفوني.",
    "css": "line-height: 24px; border: 1px solid #E5E7EB; background: #FFF;",
    "bestFor": "أنظمة التصميم المؤسسية (Design Systems)، قواميس المصطلحات، البوابات البرمجية."
  },
  {
    "id": "concrete-poetry-shape",
    "num": 190,
    "nameAr": "الشعر البصري والمجسم بالكلمات",
    "nameEn": "Concrete Visual Poetry Layout",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1950s - الآن",
    "colors": [
      "#000000",
      "#FFFFFF",
      "#FF3B00",
      "#E5E5E5",
      "#333333"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "الكلمات نفسها تُرتب هندسياً لتشكل صورة المعنى (قصيدة عن المطر ترتب كلماتها كقطرات متساقطة).",
    "css": "text-align: justify; word-break: break-all; background: #FFF; color: #000;",
    "bestFor": "الأمسيات الأدبية، الأغلفة الفنية، المنصات الثقافية التجريبية."
  },
  {
    "id": "archival-library-microfiche",
    "num": 191,
    "nameAr": "أرشيف الميكروفيش والبطاقات الفهرسية",
    "nameEn": "Archival Library Catalog Card",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1880s - 1990s",
    "colors": [
      "#FAF6EE",
      "#3D3830",
      "#8A7D6B",
      "#C43D27",
      "#1E1C18"
    ],
    "font": "Special Elite, Amiri",
    "traits": "بطاقات ديوي العشرية الورقية مع ثقب القفل السفلي، حواف متآكلة قليلاً، دقة تصنيف معرفي ممتدة عبر القرون.",
    "css": "background: #FAF6EE; border: 1px solid #8A7D6B; box-shadow: 2px 2px 6px rgba(0,0,0,0.1); color: #3D3830;",
    "bestFor": "فهارس المتاحف والمكتبات، الأرشيفات الرقمية، توثيق التراث المكتوب."
  },
  {
    "id": "fashion-lookbook-spacing",
    "num": 192,
    "nameAr": "كتالوج الموضة والهوامش الرحبة",
    "nameEn": "Minimal Fashion Lookbook",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "معاصر",
    "colors": [
      "#FAFAFA",
      "#18181B",
      "#71717A",
      "#E4E4E7",
      "#FFFFFF"
    ],
    "font": "Cormorant Garamond, Inter",
    "traits": "هوامش فارغة تشغل 70% من الصفحة، الصورة في المنتصف كقطعة فنية، نص وصفي وحيد بخط 10px رقيق جداً.",
    "css": "padding: 60px 40px; background: #FAFAFA; color: #18181B; border: none;",
    "bestFor": "مجموعات دور الأزياء الموسمية، معارض المجوهرات، الكتالوجات المعمارية."
  },
  {
    "id": "dutch-experimental-type",
    "num": 193,
    "nameAr": "التيبوغرافي الهولندي التجريبي",
    "nameEn": "Dutch Radical Experimental Type",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1970s - الآن",
    "colors": [
      "#000000",
      "#FF4400",
      "#0055FF",
      "#FFFFFF",
      "#FFFF00"
    ],
    "font": "Syne, Space Grotesk",
    "traits": "تفكيك الكلمات، تكبير غير متجانس للحروف داخل الكلمة الواحدة، شجاعة ثورية تميز بها مصممو هولندا.",
    "css": "letter-spacing: -3px; transform: scale(1.05); color: #FF4400; background: #000;",
    "bestFor": "مهرجانات الفن والتصميم في أمستردام، المجلات المستقلة، هوية المعاهد الفنية."
  },
  {
    "id": "japanese-vertical-tate",
    "num": 194,
    "nameAr": "الكتابة اليابانية العمودية (تاتي-شو)",
    "nameEn": "Japanese Vertical Typography",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "تقليدي ومعاصر",
    "colors": [
      "#111111",
      "#F7F5F0",
      "#C84B31",
      "#E0DBD1",
      "#333333"
    ],
    "font": "Noto Serif JP, Amiri",
    "traits": "قراءة النصوص من الأعلى إلى الأسفل ومن اليمين إلى اليسار، إيقاع عمودي مهيب يمنح راحة تأملية للقارئ.",
    "css": "writing-mode: vertical-rl; background: #F7F5F0; color: #111; padding: 20px;",
    "bestFor": "الشعر الياباني (الهايكو)، قوائم المطاعم الراقية، الملصقات الشرقية."
  },
  {
    "id": "ransom-note-collage",
    "num": 195,
    "nameAr": "رسائل التهديد والقصاصات المجمعة",
    "nameEn": "Ransom Note Cutout Collage",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "فوضوي / بانك",
    "colors": [
      "#000000",
      "#FFFFFF",
      "#FF0000",
      "#FFFF00",
      "#00FF00"
    ],
    "font": "Impact, Times, Arial",
    "traits": "كل حرف مأخوذ من جريدة مختلفة بلون وحجم وخلفية مستقلة، طابع ملصقات فرق البانك البريطانية (Sex Pistols).",
    "css": "display: inline-block; padding: 2px 6px; background: #000; color: #FFF; transform: rotate(3deg);",
    "bestFor": "ألبومات البانك والروك، ألعاب الهروب والغموض، الفعاليات المتمردة."
  },
  {
    "id": "dictionary-lexicon-columns",
    "num": 196,
    "nameAr": "المعجم اللغوي والأعمدة الثلاثية",
    "nameEn": "Classic Lexicon Multi-Column",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "تاريخي",
    "colors": [
      "#FFFFFF",
      "#1E1E1E",
      "#0055AA",
      "#888888",
      "#F9F9F9"
    ],
    "font": "Amiri, Times New Roman",
    "traits": "أعمدة نصية ضيقة ومكثفة، كلمات رئيسية بالخط العريض متبوعة بالنطق الصوتي والاشتقاق والمعاني المرقمة.",
    "css": "column-count: 3; column-gap: 20px; font-size: 0.85rem; background: #FFF;",
    "bestFor": "القواميس الإلكترونية، بوابات التوثيق القانوني واللغوي، دوائر المعارف."
  },
  {
    "id": "minimalist-haiku-whitespace",
    "num": 197,
    "nameAr": "شعر الهايكو وفضاء الصمت",
    "nameEn": "Minimalist Zen Haiku Whitespace",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "تأملي",
    "colors": [
      "#FAF9F6",
      "#2B2D2F",
      "#8C92AC",
      "#FFFFFF",
      "#E8E6E1"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "ثلاثة أسطر قصيرة فقط في وسط مساحة بيضاء هائلة، تركيز مطلق على المعنى العميق والسكينة المحيطة.",
    "css": "margin: 80px auto; max-width: 400px; text-align: center; background: #FAF9F6; color: #2B2D2F;",
    "bestFor": "تطبيقات التأمل اليومي، حكمة الصباح، المنصات الشعرية النخبوية."
  },
  {
    "id": "legal-parchment-contract",
    "num": 198,
    "nameAr": "الوثيقة القانونية والختم الأحمر",
    "nameEn": "Formal Legal Parchment Deed",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "رسمي",
    "colors": [
      "#FBF8EE",
      "#1A1A1A",
      "#8B0000",
      "#D4AF37",
      "#4A4036"
    ],
    "font": "Amiri, Times New Roman",
    "traits": "خطوط رسمية رصينة، هوامش مرقمة بالفقرات (1.1, 1.2)، أختام شمعية حمراء، لغة حاسمة وواضحة.",
    "css": "border: 1px solid #D4AF37; background: #FBF8EE; color: #1A1A1A; padding: 30px;",
    "bestFor": "العقود والاتفاقيات الرقمية، منصات التوثيق العدلي، الأختام المعتمدة."
  },
  {
    "id": "financial-prospectus-mono",
    "num": 199,
    "nameAr": "نشرة الاكتتاب المالي الصارمة",
    "nameEn": "Institutional Financial Prospectus",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "مالي مؤسسي",
    "colors": [
      "#FFFFFF",
      "#0B132B",
      "#4A5568",
      "#E2E8F0",
      "#1C2541"
    ],
    "font": "Inter, Consolas",
    "traits": "جداول مالية دقيقة، أرقام بالآلاف مع فواصل عشرية منسقة بدقة، نصوص إخلاء المسؤولية القانونية الرصينة.",
    "css": "border: 1px solid #E2E8F0; background: #FFF; color: #0B132B;",
    "bestFor": "تقارير الاكتتابات العامة IPO، إفصاحات السوق المالية، تدقيق الحسابات."
  },
  {
    "id": "tabloid-bold-sensational",
    "num": 200,
    "nameAr": "صحف الفضائح الصفراء (التابلويد)",
    "nameEn": "Tabloid Gossip Sensational",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "إعلامي",
    "colors": [
      "#CC0000",
      "#000000",
      "#FFFF00",
      "#FFFFFF",
      "#333333"
    ],
    "font": "Impact, Arial Black",
    "traits": "خطوط حمراء وسوداء عملاقة، صور مقتصة بحدة، نصوص مشوقة تثير الفضول والدهشة الفورية.",
    "css": "border: 3px solid #CC0000; background: #FFF; color: #000;",
    "bestFor": "مجلات المشاهير، منصات الترفيه السريع، قنوات اليوتيوب الصاخبة."
  },
  {
    "id": "comic-halftone-dots",
    "num": 201,
    "nameAr": "القصص المصورة ونقاط الهاف تون",
    "nameEn": "Classic Comic Book Ben-Day Dots",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "1930s - 1980s",
    "colors": [
      "#FFDD00",
      "#EE1111",
      "#0066CC",
      "#000000",
      "#FFFFFF"
    ],
    "font": "Bangers, Cairo",
    "traits": "فقاعات حوار بيضاوية ذات ذيول، مؤثرات صوتية مرسومة (POW! BAM!)، شبكة نقاط الطباعة الملونة بالخلفية.",
    "css": "border: 3px solid #000; box-shadow: 4px 4px 0 #000; background: #FFDD00; font-family: 'Bangers', cursive;",
    "bestFor": "مجلات الكوميكس، ألعاب المغامرات الكرتونية، الفعاليات الترفيهية الشبابية."
  },
  {
    "id": "illuminated-gospel-gold",
    "num": 202,
    "nameAr": "المخطوطات الإنجيلية المذهبة",
    "nameEn": "Kells Illuminated Gospel Manuscript",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "عصور وسطى",
    "colors": [
      "#1B3B2B",
      "#C5A059",
      "#8B1E0F",
      "#F7F2E4",
      "#0C1811"
    ],
    "font": "Cinzel Decorative, Amiri",
    "traits": "ورق الرق الطبيعي المعتق، تفاصيل منمنمة من الذهب الخالص والأصباغ النباتية المعدنية المستخرجة من الجبال.",
    "css": "border: 4px double #C5A059; background: #F7F2E4; color: #1B3B2B;",
    "bestFor": "المتاحف المسيحية والإسلامية للمخطوطات، توثيق العصور الوسطى، المعارض التاريخية."
  },
  {
    "id": "lowercase-modern-bauhaus",
    "num": 203,
    "nameAr": "الحداثة التيبوغرافية بالأحرف الصغيرة",
    "nameEn": "Bayer Lowercase Universal Type",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "باوهاوس 1925",
    "colors": [
      "#FFFFFF",
      "#111111",
      "#D90429",
      "#E5E5E5",
      "#4B5563"
    ],
    "font": "Inter, Alexandria",
    "traits": "فكرة هربرت باير بإلغاء الحروف الكبيرة (Capital letters) تماماً لتوفير الوقت وتوحيد الصوت البصري.",
    "css": "text-transform: lowercase; font-weight: 700; color: #111; background: #FFF;",
    "bestFor": "الشركات التقنية الثورية، المنصات الفلسفية المعاصرة، الهويات المستقلة."
  },
  {
    "id": "typographic-index-catalog",
    "num": 204,
    "nameAr": "الفهرس التيبوغرافي ومصفوفة العينات",
    "nameEn": "Specimen Book Type Catalog",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "تاريخي ومعاصر",
    "colors": [
      "#FFFFFF",
      "#0A0A0A",
      "#6366F1",
      "#F1F5F9",
      "#94A3B8"
    ],
    "font": "Playfair, Inter, Space Grotesk",
    "traits": "استعراض حروف الأبجدية بأحجام وأوزان مختلفة (Aa Bb Cc 123)، أرقام البونت، مقارنة فنية بين عائلات الخطوط.",
    "css": "border: 1px solid #E2E8F0; background: #FFF; padding: 24px;",
    "bestFor": "شركات إنتاج وتصميم الخطوط الرقمية، معارض الجرافيك ديزاين، أدوات المطورين."
  },
  {
    "id": "broadsheet-le-monde-intellect",
    "num": 205,
    "nameAr": "جريدة لوموند الفرنسية الفكرية",
    "nameEn": "Le Monde Intellectual Broadsheet",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "صحافة فرنسية",
    "colors": [
      "#F4EFE6",
      "#141414",
      "#8B263E",
      "#D8D2C2",
      "#3E3B32"
    ],
    "font": "Amiri, Georgia",
    "traits": "أعمدة صحفية رصينة بدون أي صور على الصفحة الأولى أحياناً، سيادة تامة للنص والتحليل الفلسفي الرصين.",
    "css": "background: #F4EFE6; color: #141414; border-top: 2px solid #8B263E;",
    "bestFor": "المجلات السياسية والتحليلية، مراكز الأبحاث والدراسات، الصحافة الاستقصائية الرفيعة."
  },
  {
    "id": "biophilic-organic-tech",
    "num": 206,
    "nameAr": "البيوفيلي الطبيعي والتقنية العضوية",
    "nameEn": "Biophilic Organic Nature-Tech",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "2024 - الآن",
    "colors": [
      "#4E8752",
      "#1C3829",
      "#C86D51",
      "#F2EFE9",
      "#EAF2E9"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "زوايا عضوية غير متناظرة (Organic Blobs)، ألوان الغابات والمستنقعات النظيفة، وملمس ترابي هادئ ومستدام.",
    "css": "background: #F2EFE9; border: 2px solid rgba(78,135,82,0.2); border-radius: 36px 14px 32px 18px; color: #1C3829;",
    "bestFor": "المنصات البيئية ومشاريع الطاقة المتجددة، مبادرات التشجير، العلامات النباتية."
  },
  {
    "id": "forest-moss-canopy",
    "num": 207,
    "nameAr": "طحالب الغابات والمظلة الخضراء",
    "nameEn": "Forest Moss Canopy Deep",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "بيئي",
    "colors": [
      "#1E3F20",
      "#3E6B39",
      "#87A96B",
      "#D0E1D4",
      "#0D1B0E"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "تدرجات خضراء رطبة تحاكي طبقات الطحالب العميقة على جذوع الأشجار القديمة في الغابات المطيرة.",
    "css": "background: #1E3F20; color: #D0E1D4; border: 1px solid #3E6B39; border-radius: 20px;",
    "bestFor": "حدائق النباتات الوطنية، منتجات الاستدامة وإعادة التدوير، مستحضرات الأعشاب الطبيعية."
  },
  {
    "id": "desert-sand-dunes",
    "num": 208,
    "nameAr": "الكثبان الرملية والرياح الصحراوية",
    "nameEn": "Desert Sand Dunes Warm Wave",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "طبيعي صحراوي",
    "colors": [
      "#C49A45",
      "#E3C07B",
      "#F5EBE1",
      "#8C5823",
      "#3D2411"
    ],
    "font": "Alexandria, Cairo",
    "traits": "منحنيات تموجات الرياح على الرمال الناعمة، تدرجات ذهبية وبرتقالية دافئة تعكس حرارة وشمس الصحراء.",
    "css": "background: linear-gradient(135deg, #E3C07B 0%, #C49A45 100%); color: #3D2411; border-radius: 40px 10px;",
    "bestFor": "منتجعات الصحراء الفاخرة، رحلات السفاري والاستكشاف، المنتجات التراثية الرملية."
  },
  {
    "id": "deep-ocean-abyssal",
    "num": 209,
    "nameAr": "أعماق المحيط السحيقة والكائنات المضيئة",
    "nameEn": "Abyssal Ocean Bioluminescence",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "طبيعي بحري",
    "colors": [
      "#03071E",
      "#0A192F",
      "#00B4D8",
      "#64FFDA",
      "#F8FAFC"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "ظلام دامس يخترقه وميض أزرق وسماوي لكائنات الأعماق المضيئة ذاتياً، هدوء بحري مهيب.",
    "css": "background: #0A192F; border: 1px solid #00B4D8; box-shadow: 0 0 20px rgba(0,180,216,0.3); color: #F8FAFC;",
    "bestFor": "منصات حماية المحيطات، واجهات الغوص والرحلات البحرية، الألعاب الاستكشافية المائية."
  },
  {
    "id": "volcanic-basalt-lava",
    "num": 210,
    "nameAr": "البازلت البركاني والحمم المتوهجة",
    "nameEn": "Volcanic Basalt & Glowing Lava",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "جيولوجي",
    "colors": [
      "#121214",
      "#26262B",
      "#FF3B00",
      "#FF8500",
      "#E2E8F0"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "حجر بركاني أسود رمادي ملمسه خشن تتخلله شقوق مضيئة باللون البرتقالي الناري المتدفق.",
    "css": "background: #121214; border: 2px solid #FF3B00; box-shadow: 0 0 15px rgba(255,59,0,0.3); color: #E2E8F0;",
    "bestFor": "ملابس المغامرات وتسلق البراكين، الدراجات الرياضية القوية، مشروبات الطاقة الحارة."
  },
  {
    "id": "arctic-glacial-ice-shelf",
    "num": 211,
    "nameAr": "الجروف الجليدية القطبية والمياه الزرقاء",
    "nameEn": "Glacial Ice Shelf Arctic Pure",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "قطبي",
    "colors": [
      "#E0F2FE",
      "#BAE6FD",
      "#0284C7",
      "#0F172A",
      "#FFFFFF"
    ],
    "font": "Inter, Alexandria",
    "traits": "كتل جليدية نقية بلون أزرق سماوي صافٍ، برودة منعشة تعكس نقاء المياه القطبية غير الملوثة.",
    "css": "background: rgba(224,242,254,0.7); backdrop-filter: blur(12px); border: 1px solid #BAE6FD; color: #0F172A;",
    "bestFor": "علامات المياه المعدنية النقية، أجهزة التبريد وتكييف الهواء، العناية بالبشرة الثلجية."
  },
  {
    "id": "autumn-fallen-foliage",
    "num": 212,
    "nameAr": "أوراق الخريف المتساقطة الدافئة",
    "nameEn": "Autumn Foliage Maple Leaves",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "موسمي",
    "colors": [
      "#8B263E",
      "#D9531E",
      "#F29C38",
      "#4A1C0E",
      "#F7EFE2"
    ],
    "font": "Playfair Display, Cairo",
    "traits": "ألوان أوراق القيقب المتدرجة من العنابي الداكن إلى البرتقالي المحروق والأصفر الذهبي الدافئ.",
    "css": "background: #F7EFE2; border: 2px solid #D9531E; color: #4A1C0E; border-radius: 16px;",
    "bestFor": "المقاهي الموسمية، الروايات الدافئة، مهرجانات الحصاد والمأكولات الخريفية."
  },
  {
    "id": "bamboo-grove-mist",
    "num": 213,
    "nameAr": "حقول الخيزران والضباب الصباحي",
    "nameEn": "Misty Bamboo Forest Zen",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "آسيوي طبيعي",
    "colors": [
      "#283618",
      "#606C38",
      "#DDA15E",
      "#E9EDC9",
      "#1B2A10"
    ],
    "font": "Noto Serif JP, Amiri",
    "traits": "سيقان الخيزران المستقيمة الشاهقة المحاطة بضباب الصباح البارد، إحساس بالنقاء والمرونة التي لا تنكسر.",
    "css": "background: #E9EDC9; border-left: 6px solid #283618; color: #1B2A10; padding: 20px;",
    "bestFor": "منتجعات السبا والاستجمام، الشاي الأخضر العضوي، فنون الدفاع عن النفس التأملية."
  },
  {
    "id": "mineral-geode-crystal",
    "num": 214,
    "nameAr": "البلورات الكريستالية وجيود الكوارتز",
    "nameEn": "Amethyst Geode Crystal Facet",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "معدني طبيعي",
    "colors": [
      "#241442",
      "#6B2D8C",
      "#C084FC",
      "#F3E8FF",
      "#0F0721"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "أسطح بلورية متعددة الأوجه تعكس الضوء ببريق بنفسجي وزهري ساحر كأحجار الجمشت الطبيعية.",
    "css": "background: #241442; border: 1px solid #C084FC; box-shadow: 0 0 20px rgba(192,132,252,0.4); color: #F3E8FF;",
    "bestFor": "المجوهرات الكريستالية، العلاج بالطاقة والأحجار الكريمة، منتجات الرفاهية والاسترخاء."
  },
  {
    "id": "coral-reef-biodiversity",
    "num": 215,
    "nameAr": "الشعب المرجانية وحياة البحار الملونة",
    "nameEn": "Coral Reef Marine Diversity",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "بحري استوائي",
    "colors": [
      "#FF6F59",
      "#254441",
      "#43AA8B",
      "#B2B09B",
      "#FFFFFF"
    ],
    "font": "Fredoka, Cairo",
    "traits": "ألوان المرجان الحي المتنوعة، شقائق النعمان البحرية، سلاحف وأسماك استوائية تسبح ببهجة وحرية.",
    "css": "background: #FFFFFF; border: 3px solid #FF6F59; color: #254441; border-radius: 24px;",
    "bestFor": "أحواض السمك العالمية (Aquarium)، جمعيات حماية الحياة البحرية، السياحة الاستوائية."
  },
  {
    "id": "botanical-herbarium-pressed",
    "num": 216,
    "nameAr": "معشبة النباتات المضغوطة المجففة",
    "nameEn": "Pressed Botanical Herbarium",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "علمي نباتي",
    "colors": [
      "#F4EBD9",
      "#4A5D4E",
      "#8C6D58",
      "#1E2922",
      "#D6C7B2"
    ],
    "font": "Amiri, Newsreader",
    "traits": "أوراق وأزهار مجففة ومثبتة بخيوط رفيعة على ورق مقوى مع بطاقة تصنيف لاتينية مكتوبة باليد.",
    "css": "border: 1px solid #8C6D58; background: #F4EBD9; color: #1E2922; font-family: serif; padding: 24px;",
    "bestFor": "متاحف التاريخ الطبيعي، العطور المستخلصة يدوياً، الصيدليات العشبية التاريخية."
  },
  {
    "id": "cloud-stratus-fog-grey",
    "num": 217,
    "nameAr": "غيوم الضباب الرمادي العائم",
    "nameEn": "Misty Stratus Cloud Atmosphere",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "جوي طبيعي",
    "colors": [
      "#F1F5F9",
      "#CBD5E1",
      "#64748B",
      "#334155",
      "#FFFFFF"
    ],
    "font": "Inter, Alexandria",
    "traits": "طبقات ضبابية ناعمة تحجب الرؤية بلطف وتمنح عزلة هادئة عن العالم الخارجي الصاخب.",
    "css": "background: rgba(241,245,249,0.85); backdrop-filter: blur(16px); color: #334155; border-radius: 20px;",
    "bestFor": "تطبيقات النوم المريح، أصوات الضوضاء البيضاء (White Noise)، الملاذات الجبلية."
  },
  {
    "id": "fungi-mushroom-spore-earth",
    "num": 218,
    "nameAr": "فطريات الغابات والتربة الحية",
    "nameEn": "Mycelium Fungi Forest Floor",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "بيولوجي",
    "colors": [
      "#3E2723",
      "#6D4C41",
      "#D7CCC8",
      "#8D6E63",
      "#F5F5F5"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "شبكات المايسيليوم الفطرية المتشعبة تحت الأرض، ألوان القبعات الفطرية الترابية، تحلل وبناء حيوي مستمر.",
    "css": "background: #D7CCC8; border: 2px solid #6D4C41; color: #3E2723; border-radius: 12px;",
    "bestFor": "تقنيات التغليف الحيوي البديل للبلاستيك، المنتجات العضوية، الأبحاث الفطرية."
  },
  {
    "id": "river-pebble-water-smooth",
    "num": 219,
    "nameAr": "حصى النهر المصقول بالماء",
    "nameEn": "Smooth River Pebble Stone",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "مائي طبيعي",
    "colors": [
      "#E2E8F0",
      "#94A3B8",
      "#475569",
      "#1E293B",
      "#FFFFFF"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "أحجار ملساء بيضوية صقلها تيار الماء الجاري عبر آلاف السنين، خالية تماماً من الحواف الحادة.",
    "css": "border-radius: 999px; background: #E2E8F0; color: #1E293B; border: none; padding: 12px 28px;",
    "bestFor": "منتجعات المساج بالأحجار الساخنة، أحواض السباحة الفاخرة، الهندسة المعمارية المائية."
  },
  {
    "id": "wildflower-meadow-spring",
    "num": 220,
    "nameAr": "حقول الزهور البرية وربيع الجبال",
    "nameEn": "Alpine Wildflower Meadow",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "نباتي ربيعي",
    "colors": [
      "#FEE2E2",
      "#FEF3C7",
      "#D1FAE5",
      "#E0E7FF",
      "#1F2937"
    ],
    "font": "Alexandria, Cairo",
    "traits": "زهور برية ملونة تنمو عشوائياً بحرية كاملة بين الأعشاب الخضراء، هواء جبلي طلق ونسمات عليلة.",
    "css": "background: #FFFFFF; border: 2px solid #D1FAE5; color: #1F2937; border-radius: 18px;",
    "bestFor": "العسل الجبلي الطبيعي، مزارع السياحة الريفية، منتجات الأعشاب البرية."
  },
  {
    "id": "solar-flare-sunburst-gold",
    "num": 221,
    "nameAr": "التوهج الشمسي والأشعة الذهبية",
    "nameEn": "Solar Flare Sunburst Radiance",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "كوني طبيعي",
    "colors": [
      "#FFB703",
      "#FB8500",
      "#D00000",
      "#FFF3B0",
      "#03071E"
    ],
    "font": "Syne, Cairo",
    "traits": "انفجارات طاقة شمسية هائلة، ألسنة لهب ذهبية تمتد في الفضاء، مصدر كل طاقة وحياة على الأرض.",
    "css": "background: radial-gradient(circle, #FFB703 0%, #FB8500 70%, #03071E 100%); color: #FFF;",
    "bestFor": "محطات الطاقة الشمسية، المهرجانات الصيفية، الحملات الترويجية المشرقة."
  },
  {
    "id": "amber-tree-resin-golden",
    "num": 222,
    "nameAr": "صمغ الأشجار الذهبي المتحجر",
    "nameEn": "Golden Tree Resin Drops",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "عضوي",
    "colors": [
      "#D97706",
      "#F59E0B",
      "#FEF3C7",
      "#78350F",
      "#451A03"
    ],
    "font": "Playfair Display, Cairo",
    "traits": "قطرات صمغ عنبرية شفافة تسيل ببطء على لحاء الشجر، تعكس الضوء كالعسل النقي الصافي.",
    "css": "background: rgba(245,158,11,0.15); border: 2px solid #F59E0B; color: #78350F; border-radius: 20px;",
    "bestFor": "العطور الطبيعية المركزة، البخور واللبان الأصيل، الأثاث الخشبي المعالج."
  },
  {
    "id": "wood-grain-timber-walnut",
    "num": 223,
    "nameAr": "خشب الجوز الداكن والتعريقات الطبيعية",
    "nameEn": "Natural Walnut Wood Grain",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "مادي طبيعي",
    "colors": [
      "#3E2723",
      "#5D4037",
      "#8D6E63",
      "#D7CCC8",
      "#EFEBE9"
    ],
    "font": "Amiri, Cairo",
    "traits": "تعريقات الخشب الطبيعية الحية التي تروي قصة نمو الشجرة وحلقات عمرها، دفء وأصالة لا تموت.",
    "css": "background: #5D4037; border: 2px solid #3E2723; color: #EFEBE9; box-shadow: inset 0 0 10px rgba(0,0,0,0.4);",
    "bestFor": "صناعة الأثاث الفاخر، الآلات الموسيقية الوترية (العود والكمان)، اليخوت الخشبية."
  },
  {
    "id": "raindrop-glass-ripple",
    "num": 224,
    "nameAr": "قطرات المطر وتموجات الماء",
    "nameEn": "Raindrops on Glass Ripple",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "مائي",
    "colors": [
      "#F0F9FF",
      "#BAE6FD",
      "#0284C7",
      "#0369A1",
      "#0C4A6E"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "انزلاق قطرات المطر العذبة على زجاج النافذة، تموجات دائرية متداخلة عند ملامسة الماء للسطح.",
    "css": "background: rgba(240,249,255,0.8); backdrop-filter: blur(10px); border: 1px solid #BAE6FD; color: #0C4A6E;",
    "bestFor": "المقاهي الهادئة في أيام الشتاء، تطبيقات الاسترخاء والاستماع للمطر، مظلات المطر."
  },
  {
    "id": "soil-rhizosphere-earth",
    "num": 225,
    "nameAr": "التربة الزراعية الخصبة وجذور النباتات",
    "nameEn": "Living Soil Rhizosphere Earth",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "بيولوجي أرضي",
    "colors": [
      "#2B1B17",
      "#4E3629",
      "#8D6E63",
      "#C5A880",
      "#F5F0EB"
    ],
    "font": "Cairo, Alexandria",
    "traits": "تربة سوداء غنية بالمغذيات والمعادن الطبيعية، شبكة جذور بيضاء دقيقة تمتص الحياة وتغذي النبات.",
    "css": "background: #F5F0EB; border-left: 6px solid #4E3629; color: #2B1B17; padding: 20px;",
    "bestFor": "الزراعة التجديدية المستدامة، المشاتل الزراعية، تقارير الأمن الغذائي والبيئي."
  },
  {
    "id": "tropical-rainforest-palm",
    "num": 226,
    "nameAr": "سعف النخيل الاستوائي والرطوبة",
    "nameEn": "Tropical Rainforest Palm Fronds",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "استوائي",
    "colors": [
      "#0D3B2E",
      "#155D46",
      "#52B788",
      "#D8F3DC",
      "#081C15"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "أوراق نخيل مروحية عريضة تغسلها أمطار استوائية غزيرة، خضرة نضرة تفيض بالحيوية والأكسجين النقي.",
    "css": "background: #0D3B2E; border: 1px solid #52B788; color: #D8F3DC; border-radius: 20px;",
    "bestFor": "السياحة البيئية الاستوائية، الفنادق الخضراء الصديقة للبيئة، منتجات جوز الهند الطبيعية."
  },
  {
    "id": "canyon-red-rock-strata",
    "num": 227,
    "nameAr": "طبقات صخور الأخاديد الحمراء",
    "nameEn": "Red Rock Canyon Geological Strata",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "جيولوجي",
    "colors": [
      "#9C3826",
      "#C15C3D",
      "#E0876A",
      "#F3D1C1",
      "#4A180E"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "طبقات الصخور الرسوبية الملونة المتراكمة عبر ملايين السنين، خطوط أفقية تحكي تاريخ الكوكب الجيولوجي.",
    "css": "background: linear-gradient(180deg, #9C3826 0%, #C15C3D 50%, #E0876A 100%); color: #FFF; border-radius: 8px;",
    "bestFor": "المتنزهات الجيولوجية الوطنية، رحلات تسلق الصخور، سيارات الدفع الرباعي الصحراوية."
  },
  {
    "id": "morning-dew-grass-blade",
    "num": 228,
    "nameAr": "قطرات الندى على نصل العشب",
    "nameEn": "Morning Dew on Fresh Grass",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "نباتي صباحي",
    "colors": [
      "#134E4A",
      "#0D9488",
      "#5EEAD4",
      "#CCFBF1",
      "#042F2E"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "بريق قطرة الندى الصباحية الصافية المنعكسة في أول خيوط الشمس الذهبية على حافة ورقة العشب الأخضر.",
    "css": "background: #CCFBF1; border: 1.5px solid #0D9488; color: #042F2E; border-radius: 999px; padding: 8px 24px;",
    "bestFor": "المنتجات المنعشة الصباحية، العصائر الطبيعية الطازجة، تطبيقات الاستيقاظ الهادئ."
  },
  {
    "id": "salt-flat-salar-uyuni",
    "num": 229,
    "nameAr": "صحراء الملح والمرآة الكونية",
    "nameEn": "Salar de Uyuni Salt Flat Mirror",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "طبيعي كوني",
    "colors": [
      "#FFFFFF",
      "#F1F5F9",
      "#CBD5E1",
      "#38BDF8",
      "#0F172A"
    ],
    "font": "Inter, Alexandria",
    "traits": "مسطحات ملحية بيضاء لا نهائية مغطاة بطبقة ماء رقيقة تعكس السماء والغيوم كمرآة عملاقة تحبس الأنفاس.",
    "css": "background: #FFFFFF; border: 1px solid #E2E8F0; color: #0F172A; box-shadow: 0 10px 30px rgba(0,0,0,0.05);",
    "bestFor": "السياحة الاستكشافية الفاخرة، معارض التصوير الفوتوغرافي، ماركات السيارات المبتكرة."
  },
  {
    "id": "pine-cone-fibonacci-spiral",
    "num": 230,
    "nameAr": "مخروط الصنوبر ومتتالية فيبوناتشي",
    "nameEn": "Pine Cone Fibonacci Golden Spiral",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "رياضي طبيعي",
    "colors": [
      "#4A3525",
      "#785338",
      "#A77B57",
      "#EFE6DD",
      "#261A11"
    ],
    "font": "Cinzel, Cairo",
    "traits": "حراشف مخروط الصنوبر المرتبة وفق النسبة الذهبية ومتتالية فيبوناتشي الرياضية، هندسة الخلق الإعجازية.",
    "css": "border: 2px solid #785338; background: #EFE6DD; color: #261A11; border-radius: 12px;",
    "bestFor": "أكاديميات الرياضيات والعلوم، العمارة البيوميمتيكية (محاكاة الطبيعة)، معاهد التصميم."
  },
  {
    "id": "aurora-borealis-polar-night",
    "num": 231,
    "nameAr": "الشفق القطبي في سماء الليل",
    "nameEn": "Aurora Borealis Polar Sky",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "كوني جوي",
    "colors": [
      "#020617",
      "#10B981",
      "#06B6D4",
      "#8B5CF6",
      "#F8FAFC"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "ستائر ضوئية خضراء وبنفسجية تتموج في السماء القطبية المظلمة بفعل الرياح الشمسية والمجال المغناطيسي للأرض.",
    "css": "background: radial-gradient(circle at 50% 0%, #10B981 0%, #8B5CF6 50%, #020617 100%); color: #FFF;",
    "bestFor": "الرحلات السياحية لمشاهدة الشفق، المراصد الفلكية، الفنادق الزجاجية القطبية."
  },
  {
    "id": "bioluminescent-plankton-beach",
    "num": 232,
    "nameAr": "العوالق البحرية المضيئة على الشاطئ",
    "nameEn": "Bioluminescent Plankton Wave Glow",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "بحري ساحر",
    "colors": [
      "#050814",
      "#00F0FF",
      "#0077B6",
      "#48CAE4",
      "#E0F7FA"
    ],
    "font": "Orbitron, Cairo",
    "traits": "أمواج الشاطئ الليلية التي تضيء بلون أزرق نيون ساطع مع كل حركة مائية بفعل العوالق البحرية الحية.",
    "css": "background: #050814; border: 1.5px solid #00F0FF; box-shadow: 0 0 15px rgba(0,240,255,0.4); color: #E0F7FA;",
    "bestFor": "الرحلات البحرية الليلية، الفنادق الشاطئية الخاصة، الروايات الخيالية الحالمة."
  },
  {
    "id": "tundra-permafrost-lichen",
    "num": 233,
    "nameAr": "أشنات التندرا والتربة المتجمدة",
    "nameEn": "Arctic Tundra Lichen & Stone",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "قطبي نباتي",
    "colors": [
      "#4B5563",
      "#9CA3AF",
      "#D1D5DB",
      "#84CC16",
      "#111827"
    ],
    "font": "Inter, Cairo",
    "traits": "نباتات الأشنات المتناهية الصغر التي تنجح في النمو فوق الصخور الجليدية في أقسى بقاع الأرض برودة.",
    "css": "background: #F3F4F6; border: 2px solid #9CA3AF; color: #111827; border-radius: 6px;",
    "bestFor": "أبحاث التكيف البيئي، الألبسة الحرارية للظروف القاسية، الرحلات الجيولوجية."
  },
  {
    "id": "savanna-acacia-sunset",
    "num": 234,
    "nameAr": "شمس السافانا وظلال أشجار الأكاسيا",
    "nameEn": "African Savanna Sunset Acacia",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "إفريقي طبيعي",
    "colors": [
      "#1A0C02",
      "#802200",
      "#D9531E",
      "#FFB703",
      "#FFE5B4"
    ],
    "font": "Syne, Cairo",
    "traits": "قرص شمس برتقالي ضخم يغيب خلف الأفق الممتد، وتبرز ظلال أشجار الأكاسيا الإفريقية المسطحة كسيلويت أسود مهيب.",
    "css": "background: linear-gradient(180deg, #D9531E 0%, #FFB703 100%); color: #1A0C02; border-radius: 12px;",
    "bestFor": "محميات الحياة البرية، رحلات التصوير المفتوحة (Safari)، الفنادق المعلقة في الأشجار."
  },
  {
    "id": "mangrove-wetlands-roots",
    "num": 235,
    "nameAr": "غابات المانجروف والمياه المالحة",
    "nameEn": "Coastal Mangrove Roots Sanctuary",
    "cat": "nature-organic",
    "catAr": "الطبيعة والبيئة والمواد الخام",
    "era": "بيئي ساحلي",
    "colors": [
      "#1B4332",
      "#2D6A4F",
      "#52B788",
      "#B7E4C7",
      "#081C15"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "جذور المانجروف المتشابكة التي تحمي الشواطئ من التآكل وتوفر حضانة طبيعية لآلاف الأسماك والطيور البحرية.",
    "css": "background: #B7E4C7; border: 2px solid #2D6A4F; color: #081C15; border-radius: 20px;",
    "bestFor": "مشاريع استزراع المانجروف، مبادرات خفض الانبعاثات الكربونية، المحميات البحرية."
  },
  {
    "id": "old-money-quiet-luxury",
    "num": 236,
    "nameAr": "الأولد موني والفخامة الهادئة",
    "nameEn": "Old Money Quiet Luxury",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "كلاسيكي خالد",
    "colors": [
      "#1C2526",
      "#F5F2EB",
      "#4A3B32",
      "#C2B29F",
      "#0E1314"
    ],
    "font": "Playfair Display, Alexandria",
    "traits": "فخامة بلا شعارات استعراضية، صوف الكشمير الإيطالي، خشب الماهوجني المعتق، تدرجات الكتان والبيج الأرستقراطي.",
    "css": "background: #F5F2EB; color: #1C2526; border: 1px solid #C2B29F; border-radius: 4px; box-shadow: none;",
    "bestFor": "العائلات الاستثمارية الخاصة، اليخوت الفاخرة، الفنادق التاريخية المعزولة."
  },
  {
    "id": "black-tie-velvet-tuxedo",
    "num": 237,
    "nameAr": "البلاك تاي والتوكسيدو المخملي",
    "nameEn": "Black Tie Midnight Velvet",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "حفلات النخبة",
    "colors": [
      "#0B0B0E",
      "#1B1B22",
      "#D4AF37",
      "#FFFFFF",
      "#4A4A5A"
    ],
    "font": "Cinzel, Cairo",
    "traits": "سواد مخملي يمتص الضوء، طوق حريري لامع، أزرار أكمام ذهبية مصقولة، تباين الأبيض والأسود في أعلى درجاته الرسمية.",
    "css": "background: #0B0B0E; border: 1px solid #D4AF37; color: #FFF; box-shadow: 0 10px 30px rgba(0,0,0,0.8);",
    "bestFor": "حفلات الجوائز السينمائية (الأوسكار)، الحفلات الخيرية الكبرى، عشاء السفراء الدبلوماسي."
  },
  {
    "id": "champagne-silk-pearl",
    "num": 238,
    "nameAr": "حرير الشمبانيا واللؤلؤ الطبيعي",
    "nameEn": "Champagne Silk & Natural Pearl",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "أنثوي فاخر",
    "colors": [
      "#FAF6F0",
      "#F3EAD8",
      "#D4AF37",
      "#6B5B4D",
      "#FFFFFF"
    ],
    "font": "Cormorant Garamond, Amiri",
    "traits": "انسيابية قماش الحرير الطبيعي بلون الشمبانيا، بريق حبات اللؤلؤ الخليجي الدائري الناعم، رقة أنثوية بالغة السحر.",
    "css": "background: #F3EAD8; border: 1px solid rgba(212,175,55,0.4); color: #6B5B4D; border-radius: 16px;",
    "bestFor": "فساتين الزفاف الراقية، مستحضرات التجميل الملكية، المجوهرات الكلاسيكية النادرة."
  },
  {
    "id": "dark-academia-gothic-library",
    "num": 239,
    "nameAr": "الدارك أكاديميا والمكتبات القوطية",
    "nameEn": "Dark Academia Gothic Archive",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "فكري غامض",
    "colors": [
      "#1C1612",
      "#3D2B1F",
      "#8C6847",
      "#D4C5B9",
      "#0A0806"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "رفوف كتب خشبية شاهقة تصعد إليها السلالم الحلزونية، أوراق شاي ساخنة، معاطف الصوف الداكنة، سحر المعرفة الغامضة.",
    "css": "background: #1C1612; border: 1px solid #8C6847; color: #D4C5B9; font-family: serif;",
    "bestFor": "أندية الروايات الفلسفية، المتاحف الأدبية، منتجات القهوة والتدوين الأكاديمي."
  },
  {
    "id": "light-academia-sculpture",
    "num": 240,
    "nameAr": "اللايت أكاديميا وتماثيل الرخام",
    "nameEn": "Light Academia Classical Marble",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "كلاسيكي ناصع",
    "colors": [
      "#FAF8F5",
      "#E8E2D8",
      "#A89B8C",
      "#4A4238",
      "#FFFFFF"
    ],
    "font": "Newsreader, Alexandria",
    "traits": "تماثيل رخامية إغريقية في شمس الصباح، دفاتر مذكرات بأوراق قطنية، ألوان القهوة بالحليب والكتان النقي.",
    "css": "background: #FAF8F5; border: 1px solid #E8E2D8; color: #4A4238; border-radius: 8px;",
    "bestFor": "معارض النحت الكلاسيكي، بوابات الفلسفة الإنسانية، العطور النهارية الهادئة."
  },
  {
    "id": "royal-palace-gilded-gold",
    "num": 241,
    "nameAr": "القصور الملكية والذهب المصقول",
    "nameEn": "Royal Palace Versailles Gilded",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "ملكي مهيب",
    "colors": [
      "#0A0A0A",
      "#D4AF37",
      "#7A1C1C",
      "#FAF6EE",
      "#2E1A1A"
    ],
    "font": "Cinzel Decorative, Amiri",
    "traits": "مستوحى من قاعة المرايا في فرساي، أسقف مرسومة بأساطير السماء، أوراق ذهبية مطعمة على الأثاث، فخامة مطلقة.",
    "css": "border: 2px solid #D4AF37; background: #0A0A0A; color: #D4AF37; box-shadow: 0 0 25px rgba(212,175,55,0.3);",
    "bestFor": "الضيافة الملكية البروتوكولية، المعارض التراثية السيادية، مقتنيات الملوك."
  },
  {
    "id": "art-deco-gatsby-glamour",
    "num": 242,
    "nameAr": "حفلات غاتسبي والآرت ديكو البراق",
    "nameEn": "The Great Gatsby 1920s Glamour",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "1920s نيويورك",
    "colors": [
      "#0D0D0D",
      "#C5A059",
      "#E5C583",
      "#1A1A1A",
      "#FFFFFF"
    ],
    "font": "Cinzel, Cairo",
    "traits": "أكواب الكريستال المتلألئة، أضواء الحفلات الصاخبة في لونغ آيلاند، خطوط هندسية ذهبية متوازية على خلفية سوداء.",
    "css": "background: #0D0D0D; border: 2px solid #C5A059; color: #E5C583; letter-spacing: 2px;",
    "bestFor": "الحفلات التنكرية الراقية، الفعاليات السنوية لشركات الاستثمار، الفنادق التاريخية."
  },
  {
    "id": "italian-carrara-marble",
    "num": 243,
    "nameAr": "رخام كرارا الإيطالي والنحاس",
    "nameEn": "Italian Carrara Marble & Brushed Brass",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "معماري فاخر",
    "colors": [
      "#FFFFFF",
      "#F0F0F2",
      "#C8B273",
      "#1E1E24",
      "#92929E"
    ],
    "font": "Bodoni Moda, Alexandria",
    "traits": "عروق رمادية طبيعية تسبح في بحر من الرخام الأبيض الإيطالي المصقول، فواصل نحاسية مطفأة فائقة الرقي.",
    "css": "background: #FFFFFF; border: 1.5px solid #C8B273; color: #1E1E24; box-shadow: 0 8px 24px rgba(0,0,0,0.06);",
    "bestFor": "المطابخ المعمارية الفارهة، الفلل الحديثة، دور السيراميك والرخام العالمية."
  },
  {
    "id": "bespoke-leather-saddlery",
    "num": 244,
    "nameAr": "الجلود المدبوغة وسروج الخيل",
    "nameEn": "Bespoke Equestrian Saddlery",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "حرفي راقٍ",
    "colors": [
      "#3D2314",
      "#6B3E26",
      "#C48A54",
      "#F4EBE2",
      "#1C0F08"
    ],
    "font": "Cinzel, Amiri",
    "traits": "جلد طبيعي مدبوغ بمستخلصات لحاء الشجر، درزات خياطة بيضاء يدوية مائلة وسميكة، إبزيم نحاسي لامع، رائحة الأصالة.",
    "css": "border: 2px solid #6B3E26; background: #F4EBE2; color: #3D2314; box-shadow: inset 0 0 8px rgba(61,35,20,0.15);",
    "bestFor": "نوادي الفروسية وسباقات الخيل، الحقائب الجلدية المصنوعة يدوياً (Hermès style)."
  },
  {
    "id": "swiss-horology-watchmaker",
    "num": 245,
    "nameAr": "صناعة الساعات السويسرية الرفيعة",
    "nameEn": "Haute Horlogerie Swiss Complication",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "سويسري عريق",
    "colors": [
      "#0B0E14",
      "#D4AF37",
      "#C0C0C0",
      "#1C2333",
      "#FFFFFF"
    ],
    "font": "Cinzel, JetBrains Mono",
    "traits": "تروس وموازين حركة الساعات الميكانيكية المعقدة (Tourbillon)، نقوش كوت دو جنيف (Côtes de Genève)، زجاج ياقوتي.",
    "css": "background: #0B0E14; border: 1.5px solid #D4AF37; color: #FFFFFF; font-family: 'Cinzel', serif;",
    "bestFor": "دور صناعة الساعات المستقلة، المعارض السويسرية السنوية، المزادات العالمية للساعات."
  },
  {
    "id": "french-perfumery-crystal",
    "num": 246,
    "nameAr": "العطور الفرنسية والزجاج الكريستالي",
    "nameEn": "French Haute Parfumerie Flacon",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "باريس / غراس",
    "colors": [
      "#FBF8F5",
      "#CBB592",
      "#7A6855",
      "#E8DFD5",
      "#1C1712"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "قوارير زجاجية ثقيلة ذات أوجه هندسية مصقولة، سدادات كريستالية، ألوان السوائل العطرية الزيتية الكهرمانية النقية.",
    "css": "background: #FBF8F5; border: 1px solid #CBB592; color: #1C1712; font-style: italic;",
    "bestFor": "دور العطور النادرة، صانعو الزيوت العطرية، متاجر مستحضرات التجميل الفارهة."
  },
  {
    "id": "smoked-glass-walnut-credenza",
    "num": 247,
    "nameAr": "الزجاج المدخن وخشب الجوز الأمريكي",
    "nameEn": "Mid-Century Smoked Glass & Walnut",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "1960s فاخر",
    "colors": [
      "#231F20",
      "#3E2723",
      "#C5A059",
      "#D7CCC8",
      "#121011"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "ألواح زجاجية بلون الشاي الداكن تكشف ببراعة عن أرفف خشب الجوز المعالج بالزيوت الطبيعية، إحساس بالعمق والدفء.",
    "css": "background: rgba(35,31,32,0.85); backdrop-filter: blur(12px); border: 1px solid #C5A059; color: #D7CCC8;",
    "bestFor": "صالات كبار الشخصيات بالمطارات، المكاتب التنفيذية، شقق البنتهاوس الحديثة."
  },
  {
    "id": "high-jewelry-diamond-facets",
    "num": 248,
    "nameAr": "المجوهرات الرفيعة وبريق الألماس",
    "nameEn": "High Jewelry Solitaire Diamond",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "ألماس عالمي",
    "colors": [
      "#050811",
      "#E2E8F0",
      "#38BDF8",
      "#F8FAFC",
      "#1E293B"
    ],
    "font": "Cinzel, Alexandria",
    "traits": "قطع الألماس البريانت (Brilliant Cut) بـ 58 وجهاً يعكس الضوء الأبيض كشعلة من النار المتلألئة، خلفية ليلية مظلمة.",
    "css": "background: #050811; border: 1px solid #38BDF8; box-shadow: 0 0 25px rgba(56,189,248,0.3); color: #F8FAFC;",
    "bestFor": "دور المجوهرات الأيقونية (Cartier, Tiffany)، مزادات الأحجار الكريمة، حفلات الخطوبة الملكية."
  },
  {
    "id": "yacht-club-monaco-navy",
    "num": 249,
    "nameAr": "نادي موناكو لليخوت والأزرق البحري",
    "nameEn": "Monaco Yacht Club Marine Navy",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "ريفييرا",
    "colors": [
      "#0A192F",
      "#FFFFFF",
      "#C5A059",
      "#E2E8F0",
      "#8892B0"
    ],
    "font": "Playfair Display, Alexandria",
    "traits": "أزرق كحلي ملكي (Navy)، خشب الساج البحري الملمع، حبال قطنية بيضاء، أزرار ذهبية، أسلوب حياة الريفييرا الفرنسية.",
    "css": "background: #0A192F; border: 2px solid #C5A059; color: #FFFFFF; border-radius: 8px;",
    "bestFor": "معارض اليخوت السنوية في موناكو، النوادي البحرية الحصرية، الموضة الساحلية الصيفية."
  },
  {
    "id": "private-banking-swiss-vault",
    "num": 250,
    "nameAr": "خزائن البنوك السويسرية الخاصة",
    "nameEn": "Swiss Private Wealth Vault",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "مالي خاص",
    "colors": [
      "#10141D",
      "#232B3E",
      "#D4AF37",
      "#E2E8F0",
      "#080A0F"
    ],
    "font": "Cinzel, Inter",
    "traits": "أبواب فولاذية تزن أطنان محفورة بدقة متناهية، ثقة مالية تمتد عبر قرون من الحياد، أرقام حسابات مشفرة وسرية مطلقة.",
    "css": "background: #10141D; border: 1px solid #D4AF37; color: #E2E8F0; box-shadow: inset 0 0 15px rgba(0,0,0,0.8);",
    "bestFor": "إدارة الثروات العائلية، المكاتب المالية العائلية (Family Offices)، الخزائن المؤمنة."
  },
  {
    "id": "monastic-silence-zen-luxury",
    "num": 251,
    "nameAr": "الصمت الرهباني والبساطة المطلقة",
    "nameEn": "Monastic Silence Ultra-Minimal",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "تأملي فاخر",
    "colors": [
      "#F7F4EE",
      "#33312E",
      "#D1C7BD",
      "#8C857B",
      "#FFFFFF"
    ],
    "font": "Newsreader, Alexandria",
    "traits": "جدران حجرية صامتة، ضوء شمس وحيد ينساب من نافذة علوية، لا توجد زخرفة واحدة، ترف الفضاء والسكينة.",
    "css": "background: #F7F4EE; color: #33312E; border: none; padding: 40px; box-shadow: none;",
    "bestFor": "المنتجعات الصحية التأملية، العمارة الصامتة، دور التصميم المفاهيمي."
  },
  {
    "id": "royal-opera-velvet-drape",
    "num": 252,
    "nameAr": "دار الأوبرا والستائر المخملية الحمراء",
    "nameEn": "Royal Opera House Crimson Velvet",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "فني مسرحي",
    "colors": [
      "#4A0E17",
      "#7A1C28",
      "#D4AF37",
      "#FBF7EE",
      "#1C0508"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "ستائر مخملية عنابية كثيفة مذهبة الحواف تفتح لتكشف عن خشبة المسرح العظيم، ثريات كريستال عملاقة متدلية.",
    "css": "background: #4A0E17; border: 2px solid #D4AF37; color: #FBF7EE; box-shadow: 0 10px 40px rgba(74,14,23,0.6);",
    "bestFor": "دور الأوبرا الوطنية، عروض الباليه الكلاسيكي، مهرجانات الموسيقى السمفونية."
  },
  {
    "id": "vintage-wine-cellar-oak",
    "num": 253,
    "nameAr": "أقبية المشروبات العتيقة وخشب البلوط",
    "nameEn": "Vintage Oak Barrel Cellar",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "بوردو فرنسا",
    "colors": [
      "#2A1810",
      "#4A2818",
      "#7A1C28",
      "#D4AF37",
      "#EAD8C0"
    ],
    "font": "Cinzel, Amiri",
    "traits": "براميل خشب البلوط الفرنسي المصنوعة يدوياً، حجر رطب بارد في أعماق القبو، قوارير مغطاة بالغبار منذ عقود.",
    "css": "background: #2A1810; border: 1.5px solid #D4AF37; color: #EAD8C0; border-radius: 8px;",
    "bestFor": "مزارع العنب التاريخية في بوردو، أندية التذوق الراقية، المطاعم الحاصلة على نجوم ميشلان."
  },
  {
    "id": "aristocratic-monogram-crest",
    "num": 254,
    "nameAr": "الدرع الأرستقراطي والشعار العائلي",
    "nameEn": "Aristocratic Heritage Monogram Crest",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "أنساب ملكية",
    "colors": [
      "#1B263B",
      "#C5A059",
      "#415A77",
      "#F7F5F0",
      "#0D1B2A"
    ],
    "font": "Cinzel Decorative, Amiri",
    "traits": "حروف اسم العائلة متشابكة داخل درع متوج بزخارف نباتية متناظرة، ختم النبالة والفروسية الأصيل.",
    "css": "border: 2px solid #C5A059; background: #F7F5F0; color: #1B263B; padding: 24px;",
    "bestFor": "العائلات العريقة، منتجات الجلد والورق المخصصة، الفنادق القلاعية التاريخية."
  },
  {
    "id": "velvet-midnight-blue",
    "num": 255,
    "nameAr": "المخمل الأزرق الليلي والنجوم الذهبية",
    "nameEn": "Midnight Blue Velvet Constellation",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "رومانسي فاخر",
    "colors": [
      "#070B19",
      "#0F1A36",
      "#D4AF37",
      "#F0F4F8",
      "#1E293B"
    ],
    "font": "Cinzel, Alexandria",
    "traits": "أزرق ليلي عميق كستائر المساء الصافية، تتلألأ فوقه نقاط وخطوط ذهبية دقيقة ترسم مسارات الأبراج السماوية.",
    "css": "background: #070B19; border: 1.5px solid #D4AF37; box-shadow: 0 0 20px rgba(212,175,55,0.25); color: #F0F4F8;",
    "bestFor": "الحفلات الفلكية، العطور الليلية، علامات الأزياء الساحرة."
  },
  {
    "id": "platinum-onyx-art-deco",
    "num": 256,
    "nameAr": "البلاتين وحجر العقيق الأسود (Onyx)",
    "nameEn": "Platinum & Black Onyx Geometry",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "1930s باريس",
    "colors": [
      "#000000",
      "#E5E5E5",
      "#C0C0C0",
      "#4A4A4A",
      "#FFFFFF"
    ],
    "font": "Cinzel, Inter",
    "traits": "حجر أونيكس أسود مصقول كمرآة تحيط به حواف من معدن البلاتين الفضي النقي في أشكال هندسية قاطعة لا تخطئها العين.",
    "css": "background: #000; border: 2px solid #E5E5E5; color: #FFF; box-shadow: 0 4px 15px rgba(255,255,255,0.1);",
    "bestFor": "ساعات اليد الفاخرة للرجال، أزرار القمصان الملكية، الهندسة المعمارية في باريس."
  },
  {
    "id": "cashmere-soft-ivory",
    "num": 257,
    "nameAr": "الكشمير المنغولي والعاج الدافئ",
    "nameEn": "Mongolian Cashmere Soft Ivory",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "دافئ فاخر",
    "colors": [
      "#FAF8F5",
      "#F2EDE4",
      "#D8CEBE",
      "#5A4E42",
      "#8C7B6B"
    ],
    "font": "Newsreader, Cairo",
    "traits": "نعومة فائقة لا تضاهى، صوف ماعز الهيمالايا الأبيض النقي المغزول برقة متناهية، دفء وخفة وانعدام للوزن.",
    "css": "background: #F2EDE4; border: 1px solid #D8CEBE; color: #5A4E42; border-radius: 24px; padding: 24px;",
    "bestFor": "أوشحة وملابس الكشمير الفاخرة، مفروشات الأسرّة الملكية، منتجات الدفء المنزلي."
  },
  {
    "id": "caviar-mother-of-pearl",
    "num": 258,
    "nameAr": "الكافيار الإمبراطوري وصدف اللؤلؤ",
    "nameEn": "Imperial Caviar & Mother of Pearl",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "طعام ملكي",
    "colors": [
      "#0B0E14",
      "#1E2430",
      "#EAE6DF",
      "#D4AF37",
      "#8C92A4"
    ],
    "font": "Playfair Display, Alexandria",
    "traits": "حبات كافيار سوداء وبنية لامعة تقدم في أوانٍ من صدف اللؤلؤ الطبيعي للحفاظ على نكهتها الخالصة بدون معادن.",
    "css": "background: #0B0E14; border: 1px solid #EAE6DF; color: #EAE6DF; box-shadow: 0 4px 20px rgba(0,0,0,0.5);",
    "bestFor": "المطاعم الحاصلة على نجوم ميشلان، صالات الدرجة الأولى بالطيران، الحفلات الدبلوماسية."
  },
  {
    "id": "grand-hotel-concierge-brass",
    "num": 259,
    "nameAr": "كونسيرج الفندق العريق والمفاتيح النحاسية",
    "nameEn": "Grand Hotel Concierge Key Rack",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "ضيافة كلاسيكية",
    "colors": [
      "#1B263B",
      "#C5A059",
      "#415A77",
      "#F4EBD9",
      "#0D1B2A"
    ],
    "font": "Cinzel, Amiri",
    "traits": "مفاتيح نحاسية ثقيلة معلقة خلف مكتب الاستقبال الخشبي، أجراس نحاسية رنانة، خدمة شخصية لا تشوبها شائبة.",
    "css": "border: 2px solid #C5A059; background: #1B263B; color: #F4EBD9; border-radius: 6px;",
    "bestFor": "الفنادق التاريخية (The Ritz, Claridge's)، خدمات الكونسيرج الفاخرة، النوادي الحصرية."
  },
  {
    "id": "silk-brocade-damask-tapestry",
    "num": 260,
    "nameAr": "الحرير الدمشقي والبروكار المنسوج",
    "nameEn": "Damascene Silk Brocade Tapestry",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "نسيج دمشقي عريق",
    "colors": [
      "#7A1C28",
      "#C5A059",
      "#1E3F20",
      "#FAF2E4",
      "#3D0E14"
    ],
    "font": "Amiri, Cinzel Decorative",
    "traits": "أقمشة دمشقية تاريخية منسوجة بخيوط الحرير والذهب بأشكال أزهار وزخارف نافرة ومتباينة مع الضوء.",
    "css": "background: #7A1C28; border: 3px double #C5A059; color: #FAF2E4; padding: 24px;",
    "bestFor": "المفروشات الملكية التراثية، الأزياء التقليدية الراقية، المعارض النسيجية العالمية."
  },
  {
    "id": "florentine-marbled-paper",
    "num": 261,
    "nameAr": "الورق الرخامي الفلورنسي اليدوي",
    "nameEn": "Florentine Hand-Marbled Paper",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "فلورنسا إيطاليا",
    "colors": [
      "#8B0000",
      "#1C3F60",
      "#C5A059",
      "#2D5A27",
      "#F5EFE6"
    ],
    "font": "Cinzel, Amiri",
    "traits": "ألوان زيتية تعوم فوق الماء وتُمشط بأمشاط دقيقة لتشكل أمواجاً رخامية مبهرة تُطبع على الورق القطني.",
    "css": "border: 2px solid #C5A059; background: #F5EFE6; color: #1C3F60; border-radius: 4px;",
    "bestFor": "تجليد الكتب الفاخرة يدوياً، أدوات القرطاسية الملكية، الهدايا التذكارية الفلورنسية."
  },
  {
    "id": "english-conservatory-glass",
    "num": 262,
    "nameAr": "الحديقة الشتوية والزجاج الإنجليزي",
    "nameEn": "English Victorian Conservatory",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "عمارة نباتية",
    "colors": [
      "#1B3B2B",
      "#F5F2EB",
      "#4A5D4E",
      "#D4AF37",
      "#FFFFFF"
    ],
    "font": "Playfair Display, Alexandria",
    "traits": "هيكل حديدي أخضر أو أبيض مزجج بالكامل بالزجاج الشفاف، يضم نباتات استوائية نادرة وسط برد إنجلترا الشتوي.",
    "css": "background: rgba(245,242,235,0.85); backdrop-filter: blur(8px); border: 2px solid #1B3B2B; color: #1B3B2B;",
    "bestFor": "صالات الشاي بعد الظهر (Afternoon Tea)، حفلات الزفاف الحدائقية، البيوت الزجاجية الملكية."
  },
  {
    "id": "venetian-murano-glass-blown",
    "num": 263,
    "nameAr": "زجاج مورانو الفينيسي المنفوخ",
    "nameEn": "Venetian Murano Blown Glass",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "فينيسيا إيطاليا",
    "colors": [
      "#C81D25",
      "#0B3C5D",
      "#F4A261",
      "#E76F51",
      "#FFFFFF"
    ],
    "font": "Cinzel, Alexandria",
    "traits": "زجاج ملون ناري ينفخه حرفيو جزيرة مورانو في فينيسيا، رقائق ذهب عائمة داخل الزجاج، ألوان مشعة كالياقوت.",
    "css": "background: linear-gradient(135deg, rgba(200,29,37,0.85), rgba(11,60,93,0.85)); color: #FFF; border-radius: 16px;",
    "bestFor": "الثريات والتحف الزجاجية العالمية، المعارض الفنية الفينيسية، المقتنيات النادرة."
  },
  {
    "id": "equestrian-leather-tweed",
    "num": 264,
    "nameAr": "الفروسية الإنجليزية وقماش التويد",
    "nameEn": "Equestrian Tweed & Bridle Leather",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "أرستقراطي ريفي",
    "colors": [
      "#2F3E46",
      "#354F52",
      "#52796F",
      "#84A98C",
      "#CAD2C5"
    ],
    "font": "Cinzel, Cairo",
    "traits": "سترات صوف التويد الإسكتلندي السميك مع رقع جلدية على المرفقين، خيول أصيلة في مروج خضراء واسعة وضباب صباحي.",
    "css": "border: 2px solid #52796F; background: #CAD2C5; color: #2F3E46; border-radius: 8px;",
    "bestFor": "نوادي الصيد والفروسية، الملابس البريطانية الريفية الفاخرة، سيارات لاند روفر الكلاسيكية."
  },
  {
    "id": "royal-botanical-orangery",
    "num": 265,
    "nameAr": "بستان البرتقال الملكي (Orangerie)",
    "nameEn": "Royal Orangery Citrus Terrace",
    "cat": "luxury-culture",
    "catAr": "الفخامة والنوادي والأرستقراطية",
    "era": "فرنسا الملكية",
    "colors": [
      "#2B4C3F",
      "#E76F51",
      "#F4A261",
      "#E9C46A",
      "#FAF6EE"
    ],
    "font": "Playfair Display, Alexandria",
    "traits": "أشجار البرتقال والحمضيات المزروعة في أحواض خشبية متنقلة تدخل القصر شتاء وتخرج للتراس صيفاً، بهجة أرستقراطية.",
    "css": "background: #FAF6EE; border: 2px solid #2B4C3F; color: #2B4C3F; border-radius: 12px;",
    "bestFor": "المطاعم الفاخرة في الهواء الطلق، احتفالات الحدائق الصيفية، العلامات العطرية الحمضية."
  },
  {
    "id": "solarpunk-green-eco-city",
    "num": 266,
    "nameAr": "السولاربانك والمدن البيئية المشرقة",
    "nameEn": "Solarpunk Optimistic Green Future",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي متفائل",
    "colors": [
      "#059669",
      "#FBBF24",
      "#34D399",
      "#F0FDF4",
      "#1F2937"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "تفاؤل مستقبلي، ناطحات سحاب مكسوة بالأشجار المورقة وألواح الطاقة الشمسية ذات الزجاج الملون، عمارة عضوية دافئة.",
    "css": "background: #F0FDF4; border: 2px solid #059669; color: #1F2937; border-radius: 24px 6px 24px 6px;",
    "bestFor": "مشاريع المدن المستدامة، مبادرات التكنولوجيا الخضراء، الروايات الخيالية المتفائلة."
  },
  {
    "id": "lunarpunk-dark-crystal-privacy",
    "num": 267,
    "nameAr": "اللوناربانك والتشفير القمري الخفي",
    "nameEn": "Lunarpunk Dark Zero-Knowledge",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي تشفيري",
    "colors": [
      "#09090B",
      "#18181B",
      "#A855F7",
      "#38BDF8",
      "#F4F4F5"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "الوجه الليلي للتكنولوجيا: تشفير تام (Zero-Knowledge)، زهور مضيئة في الليل، حماية الخصوصية المطلقة، طابع قمري ساحر.",
    "css": "background: #09090B; border: 1px solid #A855F7; box-shadow: 0 0 20px rgba(168,85,247,0.3); color: #F4F4F5;",
    "bestFor": "بروتوكولات التشفير والخصوصية، شبكات Tor اللامركزية، أمان البيانات المستقلة."
  },
  {
    "id": "biopunk-genetic-helix-code",
    "num": 268,
    "nameAr": "البيوبانك وشفرات الهندسة الوراثية",
    "nameEn": "Biopunk Genetic Helix Engineering",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي حيوي",
    "colors": [
      "#061E14",
      "#00FF66",
      "#10B981",
      "#059669",
      "#D1FAE5"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "تسلسل الحمض النووي (A, T, C, G)، خلايا متوهجة تحت المجهر الفلوري، هندسة حيوية متقدمة تعدل الكائنات.",
    "css": "background: #061E14; border: 1.5px solid #00FF66; color: #00FF66; font-family: monospace;",
    "bestFor": "شركات التقنية الحيوية، أبحاث التعديل الجيني، الروايات المستقبلية الحيوية."
  },
  {
    "id": "cybernetic-prosthetic-titanium",
    "num": 269,
    "nameAr": "الأطراف السيبرانية والتيتانيوم",
    "nameEn": "Cybernetic Titanium Prosthetics",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي سايبر",
    "colors": [
      "#18181B",
      "#71717A",
      "#00F0FF",
      "#E4E4E7",
      "#09090B"
    ],
    "font": "Orbitron, Space Grotesk",
    "traits": "تيتانيوم رمادي خفيف الوزن، محركات هيدروليكية دقيقة، ألياف كربونية سوداء، وميض أزرق يعبر عن الاتصال العصبي.",
    "css": "border: 2px solid #00F0FF; background: #18181B; color: #E4E4E7; border-radius: 4px;",
    "bestFor": "واجهات الدماغ والحاسوب (BCI)، الرعاية الصحية التأهيلية المتقدمة، ألعاب السايبورغ."
  },
  {
    "id": "holographic-volumetric-array",
    "num": 270,
    "nameAr": "المصفوفة الهولوغرافية ثلاثية الأبعاد",
    "nameEn": "Volumetric Hologram Lightfield",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي ضوئي",
    "colors": [
      "#050814",
      "#00F0FF",
      "#8B5CF6",
      "#EC4899",
      "#E0F7FF"
    ],
    "font": "Plus Jakarta Sans, Orbitron",
    "traits": "أجسام مجسمة من الضوء الخالص تطفو في الهواء بدون شاشات مادية، خطوط مسح ليزرية رقيقة، شفافية بلورية.",
    "css": "background: rgba(0,240,255,0.06); border: 1px dashed #00F0FF; box-shadow: 0 0 25px rgba(0,240,255,0.4); color: #E0F7FF;",
    "bestFor": "صالات العرض الهولوغرافية، المحادثات ثلاثية الأبعاد عن بعد، شاشات الميتافيرس."
  },
  {
    "id": "dyson-sphere-mega-structure",
    "num": 271,
    "nameAr": "كرة دايسون والهياكل النجمية العملاقة",
    "nameEn": "Dyson Sphere Megastructure",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "كوزميك فضائي",
    "colors": [
      "#030712",
      "#F59E0B",
      "#D97706",
      "#3B82F6",
      "#F9FAFB"
    ],
    "font": "Orbitron, Space Grotesk",
    "traits": "مصفوفة ألواح شمسية فضائية عملاقة تحيط بنجم بأكمله لامتصاص كامل طاقته، حضارة من النوع الثاني بمقياس كارداشيف.",
    "css": "background: #030712; border: 1px solid #F59E0B; box-shadow: inset 0 0 30px rgba(245,158,11,0.2); color: #F9FAFB;",
    "bestFor": "ألعاب استراتيجية الفضاء السحيق، روايات الخيال العلمي الكوزميك، أبحاث الطاقة المستقبلية."
  },
  {
    "id": "warp-drive-chrono-interface",
    "num": 272,
    "nameAr": "محرك الالتواء والقفز الفضائي السريع",
    "nameEn": "Warp Drive FTL Space Horizon",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "خيال علمي",
    "colors": [
      "#000000",
      "#38BDF8",
      "#818CF8",
      "#C084FC",
      "#FFFFFF"
    ],
    "font": "Orbitron, Cairo",
    "traits": "انحناء الزمكان، تمدد النجوم إلى خطوط ضوئية متصلة عند تجاوز سرعة الضوء، أزرق كوزميك متوهج.",
    "css": "background: radial-gradient(circle, #38BDF8 0%, #818CF8 50%, #000 100%); color: #FFF; border-radius: 12px;",
    "bestFor": "ألعاب استكشاف المجرات، محاكيات الطيران الفضائي، أفلام الخيال العلمي."
  },
  {
    "id": "quantum-entanglement-ripple",
    "num": 273,
    "nameAr": "التشابك الكمومي والتأثير اللحظي",
    "nameEn": "Quantum Entanglement Ripple Pair",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "فيزياء كمومية",
    "colors": [
      "#0A0612",
      "#C084FC",
      "#EC4899",
      "#06B6D4",
      "#FDF4FF"
    ],
    "font": "Space Grotesk, Cairo",
    "traits": "جسيمان مرتبطان يتأثران في نفس اللحظة عبر ملايين السنين الضوئية، تموجات أثيرية تربط بين طرفي الشاشة.",
    "css": "background: #0A0612; border: 1px solid #EC4899; box-shadow: 0 0 20px rgba(236,72,153,0.3); color: #FDF4FF;",
    "bestFor": "شبكات الإنترنت الكمومي فائق الأمان، التشفير اللحظي، الفيزياء النظرية المتقدمة."
  },
  {
    "id": "deep-space-void-obsidian",
    "num": 274,
    "nameAr": "الفراغ السحيق وحجر الأوبسيديان",
    "nameEn": "Deep Space Infinite Void",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "كوزميك غامض",
    "colors": [
      "#000000",
      "#0B0C10",
      "#1F2833",
      "#C5C6C7",
      "#66FCF1"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "سواد فاحم يبتلع كل الضوء، نجوم بعيدة متناهية الصغر، صمت مطلق يمنح تركيزاً ذهنياً لا حدود له.",
    "css": "background: #000000; border: 1px solid #1F2833; color: #66FCF1; font-family: monospace;",
    "bestFor": "منصات البرمجة الليلية، أدوات الكتابة الخالية من أي تشتيت، تلسكوبات الفضاء العميق."
  },
  {
    "id": "terraform-mars-red-dust",
    "num": 275,
    "nameAr": "استصلاح كوكب المريخ والقبة الزجاجية",
    "nameEn": "Terraform Mars Red Planet Bio-Dome",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي فضائي",
    "colors": [
      "#9C3826",
      "#D97706",
      "#059669",
      "#F3D1C1",
      "#1C0A06"
    ],
    "font": "Orbitron, Cairo",
    "traits": "رمال المريخ الحمراء العاصفة خارج القبة الزجاجية الضخمة، بينما تنمو بداخلها مروج خضراء وأنهار جارية.",
    "css": "background: #1C0A06; border: 2px solid #9C3826; color: #F3D1C1; border-radius: 16px;",
    "bestFor": "مشاريع استكشاف المريخ، محاكيات استعمار الفضاء، تقنيات العيش المغلق المستقل."
  },
  {
    "id": "cyber-shinto-neon-shrine",
    "num": 276,
    "nameAr": "السايبر شنتو والمعابد المستقبلية",
    "nameEn": "Cyber Shinto Neon Torii Gate",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "نيو-طوكيو",
    "colors": [
      "#FF0055",
      "#00F0FF",
      "#0D0D15",
      "#FFE600",
      "#FFFFFF"
    ],
    "font": "Noto Sans JP, Orbitron",
    "traits": "بوابات توري الخشبية المقدسة مضاءة بليزر أحمر متوهج في وسط طوكيو المستقبلية، تعايش الروحانيات مع الرقائق.",
    "css": "border: 2px solid #FF0055; background: #0D0D15; color: #FFF; box-shadow: 0 0 15px rgba(255,0,85,0.4);",
    "bestFor": "ألعاب الخيال العلمي اليابانية، الموسيقى الإلكترونية المستقلة، الروايات المصورة."
  },
  {
    "id": "post-apocalyptic-rust-rebar",
    "num": 277,
    "nameAr": "ما بعد نهاية العالم والحديد الصدئ",
    "nameEn": "Post-Apocalyptic Rust & Rebar",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "دستوبيا",
    "colors": [
      "#2B1E16",
      "#5C3A21",
      "#8C5835",
      "#C48A54",
      "#120B07"
    ],
    "font": "Special Elite, Impact",
    "traits": "صفيح حديدي صدئ، شبكات خرسانية مكسورة، أشرطة لاصقة رمادية ترقع الشاشات، صراع قاسٍ من أجل البقاء.",
    "css": "border: 3px solid #8C5835; background: #2B1E16; color: #C48A54; box-shadow: inset 0 0 10px #120B07;",
    "bestFor": "ألعاب النجاة بعد الحرب النووية (Fallout style)، الروايات الدستوبية، نوادي السيارات المعدلة."
  },
  {
    "id": "transhumanist-neural-link",
    "num": 278,
    "nameAr": "الترانسهيومانيزم والاتصال العصبي",
    "nameEn": "Transhumanist Neural Sync Link",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي بيولوجي",
    "colors": [
      "#070A12",
      "#00F0FF",
      "#818CF8",
      "#F43F5E",
      "#F8FAFC"
    ],
    "font": "Orbitron, Cairo",
    "traits": "ترقية القدرات العقلية وربط الدماغ بسحابة الذكاء الاصطناعي مباشرة، رسوم بيانية لنبضات السينابس العصبية.",
    "css": "background: #070A12; border: 1px solid #818CF8; box-shadow: 0 0 20px rgba(129,140,248,0.3); color: #F8FAFC;",
    "bestFor": "واجهات الأجهزة الطبية الذكية، الذكاء الاصطناعي الفائق، الفلسفة المستقبلية."
  },
  {
    "id": "nanotech-swarm-cloud",
    "num": 279,
    "nameAr": "سرب الروبوتات النانوية (Nanotech)",
    "nameEn": "Nanotech Self-Assembling Swarm",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "نانوتكنولوجي",
    "colors": [
      "#0C1017",
      "#38BDF8",
      "#94A3B8",
      "#0284C7",
      "#F0F9FF"
    ],
    "font": "JetBrains Mono, Cairo",
    "traits": "ملايين الروبوتات المجهرية تتجمع وتتفرق لتشكل أي مادة أو أداة مطلوبة في ثوانٍ معدودة كأسراب الطيور.",
    "css": "background: #0C1017; border: 1px dotted #38BDF8; color: #F0F9FF; font-family: monospace;",
    "bestFor": "التطبيقات الطبية الدقيقة، تصنيع المواد الذكية، الخيال العلمي المتقدم."
  },
  {
    "id": "xenomorph-alien-hive-biomech",
    "num": 280,
    "nameAr": "البيوميكانيكي والكائنات الفضائية (Giger)",
    "nameEn": "Biomechanical Alien Hive HR Giger",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "خيال علمي مظلم",
    "colors": [
      "#0A0D0B",
      "#1C241E",
      "#3A4A3E",
      "#7A9482",
      "#030504"
    ],
    "font": "Cinzel, JetBrains Mono",
    "traits": "كابلات وأنابيب عضوية تمتزج بهياكل عظمية فضائية مظلمة، طابع الفنان هانس غيغر في فيلم ألين (Alien).",
    "css": "background: #0A0D0B; border: 1px solid #3A4A3E; color: #7A9482; box-shadow: inset 0 0 20px #030504;",
    "bestFor": "أفلام الرعب الفضائي، ألعاب الوحوش الكوزميك، الفنون التشكيلية المظلمة."
  },
  {
    "id": "zero-gravity-fluid-orbit",
    "num": 281,
    "nameAr": "السوائل في انعدام الجاذبية الأرضية",
    "nameEn": "Zero-Gravity Floating Fluid",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "فضائي حركي",
    "colors": [
      "#0A1128",
      "#001F54",
      "#034078",
      "#1282A2",
      "#FEFCFB"
    ],
    "font": "Plus Jakarta Sans, Alexandria",
    "traits": "قطرات ماء كروية تطفو بحرية كاملة في كابينة المحطة الفضائية وتتراقص عند لمسها بدون أن تسقط.",
    "css": "border-radius: 50%; background: radial-gradient(circle, #1282A2 0%, #034078 100%); color: #FEFCFB; border: none;",
    "bestFor": "محاكيات الطيران الفضائي، التطبيقات العلمية للأطفال، التجارب الفيزيائية التفاعلية."
  },
  {
    "id": "antimatter-plasma-reactor",
    "num": 282,
    "nameAr": "مفاعل المادة المضادة والبلازما",
    "nameEn": "Antimatter Plasma Containment",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "طاقة مستقبلية",
    "colors": [
      "#02040A",
      "#8B5CF6",
      "#EC4899",
      "#3B82F6",
      "#FFFFFF"
    ],
    "font": "Orbitron, Cairo",
    "traits": "حلقة بلازما مشحونة تدور بسرعة البرق محبوسة في حقل كهرومغناطيسي قوي لمنع ملامستها للمادة العادية.",
    "css": "border-radius: 50%; border: 3px solid #8B5CF6; box-shadow: 0 0 30px #EC4899; background: #02040A; color: #FFF;",
    "bestFor": "أنظمة توليد طاقة السفن النجمية، محاكيات الاندماج النووي، الخيال العلمي."
  },
  {
    "id": "cyber-geisha-neon-future",
    "num": 283,
    "nameAr": "السايبر غيشا والمستقبل الحريري",
    "nameEn": "Cyber Geisha Synthetic Silk",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "نيو-آسيوي",
    "colors": [
      "#0F0814",
      "#FF007F",
      "#FFFFFF",
      "#7928CA",
      "#FFE600"
    ],
    "font": "Noto Serif JP, Orbitron",
    "traits": "أقنعة بورسلين بيضاء ناصعة تخفي دوائر إلكترونية ذهبية، كيمونو حريري تتخلله ألياف ضوئية مضيئة.",
    "css": "border: 2px solid #FF007F; background: #0F0814; color: #FFF; box-shadow: 0 0 15px rgba(255,0,127,0.4);",
    "bestFor": "العروض المسرحية المستقبلية، عروض أزياء السايبر، شخصيات الألعاب الافتراضية."
  },
  {
    "id": "exoplanet-atmospheric-sky",
    "num": 284,
    "nameAr": "سماء الكواكب الخارجية وسديم الفضاء",
    "nameEn": "Exoplanet Twin-Sun Sunset",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "فلكي استكشافي",
    "colors": [
      "#13091B",
      "#6B2D8C",
      "#E05A47",
      "#FBBF24",
      "#FDF4FF"
    ],
    "font": "Plus Jakarta Sans, Cairo",
    "traits": "غروب شمسين في آن واحد فوق سماء كوكب فضائي بكر بلون بنفسجي، جبال بلورية وكثبان غريبة لم تطأها قدم بشرية.",
    "css": "background: linear-gradient(135deg, #13091B 0%, #6B2D8C 50%, #E05A47 100%); color: #FFF; border-radius: 14px;",
    "bestFor": "ألعاب استكشاف العوالم المفتوحة، كتب الفلك والمجرات، اللوحات الفنية الكوزميك."
  },
  {
    "id": "dyson-swarm-energy-grid",
    "num": 285,
    "nameAr": "سرب دايسون وحصاد طاقة النجوم",
    "nameEn": "Dyson Swarm Orbital Collectors",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "فضائي كوزميك",
    "colors": [
      "#050811",
      "#F59E0B",
      "#10B981",
      "#38BDF8",
      "#FFFFFF"
    ],
    "font": "Orbitron, Space Grotesk",
    "traits": "ملايين المرايا الفضائية الخفيفة تطفو في مدارات منسقة حول النجم لترسل الطاقة عبر حزم الميكروويف إلى الأرض.",
    "css": "background: #050811; border: 1.5px solid #F59E0B; color: #FFFFFF; box-shadow: 0 0 15px rgba(245,158,11,0.25);",
    "bestFor": "مشاريع استيطان النظام الشمسي، النمذجة الاقتصادية الكوزميك، ألعاب الخيال العلمي."
  },
  {
    "id": "stellar-cartography-starmap",
    "num": 286,
    "nameAr": "أطلس الملاحة النجمية وخرائط المجرة",
    "nameEn": "Stellar Cartography Galactic Map",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "ملاحة فضائية",
    "colors": [
      "#02040A",
      "#38BDF8",
      "#818CF8",
      "#F43F5E",
      "#E2E8F0"
    ],
    "font": "JetBrains Mono, Orbitron",
    "traits": "إحداثيات ثلاثية الأبعاد لملايين النجوم وطرق التجارة الفضائية الآمنة، بوابات القفز النجمي ومناطق الخطر الأسود.",
    "css": "background: #02040A; border: 1px solid #38BDF8; color: #E2E8F0; font-family: monospace;",
    "bestFor": "محاكيات قيادة الأساطيل الفضائية، ألعاب التجارة بين الكواكب، الخرائط الفلكية."
  },
  {
    "id": "time-travel-dial-paradox",
    "num": 287,
    "nameAr": "قرص السفر عبر الزمن والمفارقة التاريخية",
    "nameEn": "Chrono-Dial Time Dilation Portal",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "زمني خيالي",
    "colors": [
      "#1A130B",
      "#C5A059",
      "#00F0FF",
      "#3E2723",
      "#F5EBE6"
    ],
    "font": "Cinzel, Orbitron",
    "traits": "تروس نحاسية قديمة مدمجة مع حلقات ليزر زرقاء تدور بسرعات متناقضة لتحديد السنة واليوم في شريان الزمن.",
    "css": "border-radius: 50%; border: 3px solid #C5A059; background: #1A130B; color: #00F0FF; box-shadow: 0 0 20px #00F0FF;",
    "bestFor": "روايات السفر عبر الزمن، ألعاب الألغاز الزمنية، المسلسلات الخيالية التاريخية."
  },
  {
    "id": "bio-luminescent-cybernetics",
    "num": 288,
    "nameAr": "السيبرنتك العضوي والجلد الحيوي المضيء",
    "nameEn": "Bioluminescent Living Cyber-Skin",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "مستقبلي عضوي",
    "colors": [
      "#050B14",
      "#00FFB2",
      "#0066FF",
      "#9900FF",
      "#E6FFF9"
    ],
    "font": "Plus Jakarta Sans, Orbitron",
    "traits": "أنسجة اصطناعية تحاكي الجلد البشري تضيء بخطوط فسفورية خضراء وسماوية عند التفكير أو انفعال المشاعر.",
    "css": "background: #050B14; border: 1px solid #00FFB2; box-shadow: 0 0 18px rgba(0,255,178,0.35); color: #E6FFF9;",
    "bestFor": "الشخصيات الافتراضية الذكية، أزياء الحفلات الإلكترونية المستقبلية، روبوتات المحاكاة البشرية."
  },
  {
    "id": "hyper-dimensional-tesseract",
    "num": 289,
    "nameAr": "التيسراكت والمكعب رباعي الأبعاد (4D)",
    "nameEn": "4D Hypercube Tesseract Projection",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "رياضي كوزميك",
    "colors": [
      "#000000",
      "#FF007F",
      "#00F0FF",
      "#FFE600",
      "#FFFFFF"
    ],
    "font": "Space Grotesk, Orbitron",
    "traits": "إسقاط هندسي لمكعب ذي أربعة أبعاد يدور داخل نفسه في فراغ ثلاثي الأبعاد، تحدي للخيال البشري وإدراك الحواس.",
    "css": "border: 2px solid #00F0FF; background: #000; box-shadow: 0 0 25px rgba(255,0,127,0.5); color: #FFF;",
    "bestFor": "البرمجيات الرياضية المتقدمة، معارض الفنون التوليدية، المحاضرات الفيزيائية الكونية."
  },
  {
    "id": "monolith-2001-space-odyssey",
    "num": 290,
    "nameAr": "المونوليث الأسود (أوديسا الفضاء 2001)",
    "nameEn": "The Black Monolith 2001 Cosmic",
    "cat": "sci-fi-cyber",
    "catAr": "الخيال العلمي والمستقبل والسايبر",
    "era": "أيقوني كوزميك",
    "colors": [
      "#000000",
      "#050505",
      "#111111",
      "#FFFFFF",
      "#FF3B00"
    ],
    "font": "Arial, Helvetica, Cairo",
    "traits": "كتلة أوبسيديان سوداء مصمتة بنسب أبعاد هندسية خارقة 1 : 4 : 9 خالية من أي برغي أو خطأ، رمز الذكاء الفائق.",
    "css": "width: 120px; height: 270px; margin: 0 auto; background: #000; border: 1px solid #111; box-shadow: 0 20px 50px rgba(0,0,0,0.9);",
    "bestFor": "المشاريع الفلسفية الكبرى، معارض الذكاء الاصطناعي العام (AGI)، الرموز الفكرية الخالدة."
  },
  {
    "id": "saudi-farasan-coral",
    "nameAr": "عمارة جزر فرسان والحجر المنقبي المرجاني",
    "nameEn": "Farasan Coral Stone Heritage",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث بحري سعودي",
    "colors": [
      "#FAF6EE",
      "#007791",
      "#D4AF37",
      "#4A3E38",
      "#2F4F4F"
    ],
    "font": "Amiri, Cairo",
    "traits": "قصور التجار في جزر فرسان المشيدة بحجر المرجان المنقوش بنقوش شرقية وزخارف جصية بيضاء ناصعة.",
    "css": "border: 2px solid #D4AF37; background: #FAF6EE; color: #4A3E38;",
    "bestFor": "المحميات البحرية، السياحة الجزرية الفاخرة، المتاحف التراثية البحرية.",
    "num": 291
  },
  {
    "id": "yamani-sanaani-stained-glass",
    "nameAr": "القمريات الصنعانية والزجاج الملون",
    "nameEn": "Yemeni Qamariya Stained Glass",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث صنعاء القديمة",
    "colors": [
      "#8B1E0F",
      "#C5A059",
      "#005F73",
      "#F5EBE6",
      "#1D2D44"
    ],
    "font": "Amiri, Cairo",
    "traits": "نوافذ قمرية نصف دائرية من الجص الأبيض محفورة بزجاج ملون يرسل أضواء قوس قزح داخل الغرف الطينية الشاهقة.",
    "css": "border-top: 6px solid #8B1E0F; background: #F5EBE6; color: #1D2D44; border-radius: 20px 20px 0 0;",
    "bestFor": "المؤسسات الثقافية، معارض الحرف اليدوية، المعمار اليمني التراثي.",
    "num": 292
  },
  {
    "id": "andalusian-albayzin-white",
    "nameAr": "حي البيازين الغرناطي والفل الأبيض",
    "nameEn": "Granada Albayzin White Patio",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث غرناطة",
    "colors": [
      "#FFFFFF",
      "#0A3641",
      "#8C6D46",
      "#F2ECE1",
      "#D64527"
    ],
    "font": "Playfair Display, Amiri",
    "traits": "باحات غرناطية داخلية مرصوفة بحصى النهر الأسود والأبيض، نوافير ماء عذبة، أشجار الرمان والياسمين المتسلقة.",
    "css": "background: #FFFFFF; border: 1.5px solid #0A3641; color: #0A3641; border-radius: 12px;",
    "bestFor": "الضيافة الأندلسية، صالونات الأدب والشعر، الفنادق البوتيكية.",
    "num": 293
  },
  {
    "id": "al-hasa-oasis-mudbrick",
    "nameAr": "واحة الأحساء وحصون النخيل",
    "nameEn": "Al-Ahsa Oasis Heritage Mudbrick",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث الأحساء العالمي",
    "colors": [
      "#785338",
      "#2D5A27",
      "#D4A373",
      "#FAF4ED",
      "#3E2723"
    ],
    "font": "Amiri, Cairo",
    "traits": "أكبر واحة نخيل في العالم، قنوات الري العذبة (العيون)، حصون طينية صفراء دافئة مثل قصر إبراهيم.",
    "css": "border: 2px solid #785338; background: #FAF4ED; color: #3E2723;",
    "bestFor": "مشاريع الواحات الزراعية، مهرجانات التمور، السياحة الثقافية المسجلة باليونسكو.",
    "num": 294
  },
  {
    "id": "al-ula-nabataean-tomb",
    "nameAr": "العلا ومدائن صالح والنحت الصخري",
    "nameEn": "AlUla Nabataean Hegra Monolith",
    "cat": "cultural-heritage",
    "catAr": "الثقافات الإقليمية والتراث",
    "era": "تراث نبطي عالمي",
    "colors": [
      "#C48A54",
      "#3D2411",
      "#EAD8C0",
      "#8C4F27",
      "#F7EFE5"
    ],
    "font": "Cinzel, Amiri",
    "traits": "واجهات صخرية مهيبة منحوتة مباشرة في جبال الحجر الرملي الوردي، نقوش نسور نبطية، تماثل معماري أسطوري.",
    "css": "border: 2px solid #C48A54; background: #EAD8C0; color: #3D2411; box-shadow: 0 4px 20px rgba(61,36,17,0.3);",
    "bestFor": "مشاريع العلا العالمية، الفنون الصخرية المعاصرة، استكشاف الآثار والتراث النبطي.",
    "num": 295
  },
  {
    "id": "broadsheet-wall-street-ruling",
    "nameAr": "صحيفة وول ستريت وجداول الأسهم",
    "nameEn": "Wall Street Journal Financial Columns",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "صحافة مالية",
    "colors": [
      "#FFFFFF",
      "#111111",
      "#003366",
      "#E5E5E5",
      "#333333"
    ],
    "font": "Escrow, Inter, Cairo",
    "traits": "أعمدة نصية رصينة تفصلها خطوط عمودية 0.5px، غياب الصور الملونة والاعتماد على رسوم التنقيط (Hedcut) الشهيرة.",
    "css": "border: 1px solid #003366; background: #FFF; color: #111; column-count: 2;",
    "bestFor": "التقارير المالية التنفيذية، رسائل المستثمرين الدورية، التحليلات الاقتصادية.",
    "num": 296
  },
  {
    "id": "botanical-encyclopedia-plate",
    "nameAr": "الموسوعة النباتية واللوحات الملونة",
    "nameEn": "Linnaeus Botanical Taxonomy Plate",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "موسوعي كلاسيكي",
    "colors": [
      "#FAF7EE",
      "#2D5A27",
      "#8C5A36",
      "#D4AF37",
      "#1A2518"
    ],
    "font": "EB Garamond, Amiri",
    "traits": "تصنيف لينيوس الثنائي، لوحة محفورة تظهر تفاصيل الزهرة والجذور والبذور بدقة ميكروسكوبية ملونة يدوياً.",
    "css": "border: 2px double #8C5A36; background: #FAF7EE; color: #1A2518;",
    "bestFor": "الموسوعات الزراعية، تصنيف النباتات، التوثيق الأكاديمي الطبيعي.",
    "num": 297
  },
  {
    "id": "literary-review-serif-pamphlet",
    "nameAr": "الكتيب الأدبي والورق الخشن",
    "nameEn": "Paris Review Literary Pamphlet",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "أدبي نخبي",
    "colors": [
      "#FAF6F0",
      "#212121",
      "#C73838",
      "#E6DFC8",
      "#4A4A4A"
    ],
    "font": "Amiri, Georgia",
    "traits": "حوارات مطولة مع كبار الأدباء، مقاطع شعرية مقتبسة، ورق قطني خشن غير مصقول، حبر أسود مطفأ مريح للعين.",
    "css": "background: #FAF6F0; border-left: 4px solid #C73838; color: #212121; padding: 24px;",
    "bestFor": "المجلات الأدبية الفصلية، دور النشر المستقلة، مراجعات الروايات العالمية.",
    "num": 298
  },
  {
    "id": "fashion-runway-lookbook-bold",
    "nameAr": "كتالوج عروض الأزياء العالمية (Runway)",
    "nameEn": "High-Fashion Runway Bold Lookbook",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "أزياء عالمية",
    "colors": [
      "#000000",
      "#FFFFFF",
      "#E11D48",
      "#171717",
      "#737373"
    ],
    "font": "Syne, Alexandria",
    "traits": "أرقام إطلالات العرض (Look 01, Look 02) بخطوط ضخمة، صور طولية تمتد من الحافة للحافة، تفاصيل الأقمشة بالمليمتر.",
    "css": "background: #000; color: #FFF; border: 1px solid #333; text-transform: uppercase;",
    "bestFor": "منصات أسابيع الموضة، متاجر الملابس الفاخرة، المصممون العالميون.",
    "num": 299
  },
  {
    "id": "minimalist-manifesto-black-white",
    "nameAr": "بيان المينيماليزم الصارم الأبيض والأسود",
    "nameEn": "Minimalist Radical White Manifesto",
    "cat": "editorial-type",
    "catAr": "الصحافة والتيبوغرافي والنشر",
    "era": "حداثي صارم",
    "colors": [
      "#FFFFFF",
      "#000000",
      "#737373",
      "#FAFAFA",
      "#E5E5E5"
    ],
    "font": "Inter, Cairo",
    "traits": "لا توجد أي ألوان نهائياً، لا توجد أي خطوط زخرفية، فقط الكلمة الصادمة في وسط بياض قاطع يعيد تعريف الوجود.",
    "css": "background: #FFF; color: #000; border: none; font-size: 1.5rem; font-weight: 800; padding: 40px;",
    "bestFor": "البيانات الفلسفية المعاصرة، الإعلانات المينيمالية الصادمة، المتاحف التجريدية.",
  }
];

if (typeof window !== 'undefined') {
  window.STYLES_CATALOG_300 = STYLES_CATALOG_300;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = STYLES_CATALOG_300;
}
