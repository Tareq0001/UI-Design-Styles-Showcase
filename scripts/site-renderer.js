/**
 * Standalone Website Rendering Engine for 300 Design Archetypes
 * UI Design Styles Showcase - Developed for أ. طارق ابوعشي
 */

(function () {
  'use strict';

  // 1. Resolve Catalog
  const catalog = (typeof window.STYLES_CATALOG_300 !== 'undefined' && window.STYLES_CATALOG_300.length)
    ? window.STYLES_CATALOG_300
    : (typeof STYLES_CATALOG_300 !== 'undefined' ? STYLES_CATALOG_300 : []);

  if (!catalog || catalog.length === 0) {
    console.error('STYLES_CATALOG_300 not loaded!');
    return;
  }

  // 2. Determine Current Style ID from URL parameter, filename, or hash
  const urlParams = new URLSearchParams(window.location.search);
  let pathnameId = window.location.pathname.split('/').pop().replace('.html', '');
  if (['site', 'index', ''].includes(pathnameId)) pathnameId = '';
  let requestedId = urlParams.get('id') || pathnameId || window.location.hash.replace('#', '') || 'neo-asiri';

  let currentStyleIndex = catalog.findIndex(s => s.id === requestedId);
  if (currentStyleIndex === -1) {
    currentStyleIndex = 0; // Default to first style
  }
  let currentStyle = catalog[currentStyleIndex];

  const isInPagesDir = window.location.pathname.includes('/pages/');
  const rootPrefix = isInPagesDir ? '../' : './';

  // Curated High-Resolution Photography Sets by Category
  const CATEGORY_ASSETS = {
    'modern-ui': {
      heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'لوحة التحكم الفورية', desc: 'معالجة آنية لبيانات السحاب وتدفق المعاملات.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
        { title: 'واجهة التفاعل السلسة', desc: 'نظام تصميم مدمج يدعم كافة الشاشات والأنظمة.', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80' },
        { title: 'منظومة الأمان والتوثيق', desc: 'تشفير فائق وحماية متكاملة للبنية التحتية.', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'art-history': {
      heroImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'أرشيف العمارة البنائية', desc: 'توثيق الحركات الهندسية والخطوط الحداثية العالمية.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
        { title: 'معرض التيبوغرافي الدولي', desc: 'أوزان الخط المجردة ونظم الشبكات الصارمة.', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80' },
        { title: 'البيان التأسيسي للفن', desc: 'فلسفة الوظيفة قبل الشكل وتكامل الخامات.', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'retro-digital': {
      heroImg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'محطة العمل الكلاسيكية', desc: 'أنظمة تشغيل التسعينات وبروتوكولات الويب الأولى.', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
        { title: 'ألعاب الأركيد 8-Bit', desc: 'بصريات البيكسل والموسيقى التوليدية الرقمية.', img: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80' },
        { title: 'أجهزة التخزين المغناطيسي', desc: 'نوستالجيا الأقراص المرنة وشاشات الأشعة المهبطية.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'cultural': {
      heroImg: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'حصون وقلاع السراة', desc: 'عمارة حجرية تاريخية شامخة في قمم جبال عسير.', img: 'https://images.unsplash.com/photo-1590483256080-60b64f9cb2eb?auto=format&fit=crop&w=600&q=80' },
        { title: 'فن القط العسيري الأصيل', desc: 'زخارف هندسية نسائية مسجلة في التراث العالمي (اليونسكو).', img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80' },
        { title: 'تقاليد الكرم والضيافة', desc: 'القهوة السعودية الفاخرة وروح الترحاب الجنوبي الأصيل.', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'industrial': {
      heroImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'المخططات الهندسية الدقيقة', desc: 'أنظمة قياس تكتيكية ومسارات الملاحة الجوية.', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
        { title: 'أجهزة التحكم الوعرة', desc: 'صممت لتحمل أقسى الظروف الميدانية والبيئية.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
        { title: 'محطات القياس والـ Telemetry', desc: 'مراقبة فورية للترددات والضغوط والمحركات الصناعية.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'editorial': {
      heroImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'إصدار الخريف الفاخر', desc: 'أزياء الهوت كوتور وتغطيات منصات العروض العالمية.', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80' },
        { title: 'مقالات التحقيق الثقافي', desc: 'نصوص تحريرية عميقة مصفوفة بخطوط سيريف راقية.', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80' },
        { title: 'أرشيف التصوير الصحفي', desc: 'لقطات أيقونية توثق تحولات الموضة والهندسة البصرية.', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'nature': {
      heroImg: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'المحميات النباتية الحيوية', desc: 'عمارة مستدامة تتكامل عضوياً مع الغابات والأشجار.', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
        { title: 'المواد الحيوية المتجددة', desc: 'خامات خشبية وطينية تعيد التوازن للكوكب.', img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80' },
        { title: 'منظومات تنقية الهواء الحية', desc: 'جدران نباتية ذكية تمتص الكربون وتطلق الأكسجين.', img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'luxury': {
      heroImg: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'الساعات الفلكية التوربيون', desc: 'دقة سويسرية متوارثة بتعقيدات ميكانيكية استثنائية.', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80' },
        { title: 'المجوهرات الرفيعة Haute Joaillerie', desc: 'أحجار كريمة نادرة مصوغة بأيدي أمهر الحرفيين.', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80' },
        { title: 'الصالون الخاص والمقتنيات النادرة', desc: 'خدمة كونسيرج حصرية لصفوة رواد الفخامة حول العالم.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    'sci-fi': {
      heroImg: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'المصفوفة العصبية الكمومية', desc: 'شبكات بيانات فوتونية بسرعة الضوء وذكاء فائق.', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80' },
        { title: 'مركبات الاستكشاف النجمي', desc: 'دفع أيوني متقدم ورادارات مسح المجرات البعيدة.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' },
        { title: 'الواجهات الهولوغرافية ثلاثية الأبعاد', desc: 'تفاعل فضائي بصري يتجاوز حدود الشاشات الفيزيائية.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' }
      ]
    }
  };

  // 3. Audio Feedback Synthesizer
  let audioCtx = null;
  function playBeep(freq = 600, type = 'sine', duration = 0.08) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // 4. Render Inspector Top HUD
  function renderInspectorHud() {
    let hud = document.getElementById('siteInspectorHud');
    if (!hud) {
      hud = document.createElement('aside');
      hud.id = 'siteInspectorHud';
      hud.className = 'site-inspector-hud';
      document.body.prepend(hud);
    }

    const s = currentStyle;
    const cat = s.cat || 'modern-ui';
    const c = s.colors || ['#6366F1', '#4F46E5', '#10B981', '#F59E0B', '#EF4444'];
    const formattedNum = String(s.num || 1).padStart(3, '0');

    hud.innerHTML = `
      <div class="hud-inner">
        <div class="hud-left">
          <a href="${rootPrefix}index.html#encyclopediaSection" class="hud-back-btn" title="العودة للموسوعة الكاملة (300 نمط)">
            <span>🏠 الموسوعة الرئيسية</span>
          </a>
          <div class="hud-style-info">
            <span class="hud-num-pill">#${formattedNum}</span>
            <span class="hud-title-ar">${s.nameAr}</span>
            <span class="hud-title-en">(${s.nameEn})</span>
            <span class="hud-tag">${s.catAr || cat}</span>
            <span class="hud-tag">${s.era || 'معاصر'}</span>
          </div>
        </div>

        <div class="hud-center">
          <div class="hud-swatches" title="باليتة الألوان الخماسية للنمط (انقر للنسخ)">
            ${c.map(hex => `<div class="hud-swatch" style="background-color: ${hex}" data-hex="${hex}" title="${hex}"></div>`).join('')}
          </div>
        </div>

        <div class="hud-right">
          <button class="hud-btn" id="hudPrevBtn" title="النمط السابق (السهم الأيسر)">⬅️ السابق</button>
          <button class="hud-btn" id="hudNextBtn" title="النمط التالي (السهم الأيمن)">التالي ➡️</button>
          <button class="hud-btn" id="hudRandomBtn" title="استكشف نمطاً عشوائياً">🎲 عشوائي</button>
          <button class="hud-btn" id="hudCopyCssBtn" title="نسخ كود CSS للنمط">📋 كود CSS</button>
          <button class="hud-btn" id="hudCollapseBtn" title="إخفاء الشريط لتصفح الموقع بحرية">👁️ إخفاء</button>
        </div>
      </div>
    `;

    // Collapsed Pill Button
    let expandPill = document.getElementById('hudExpandPill');
    if (!expandPill) {
      expandPill = document.createElement('button');
      expandPill.id = 'hudExpandPill';
      expandPill.className = 'hud-expand-pill';
      expandPill.innerHTML = `<span>👁️ إظهار شريط الفحص (#${formattedNum})</span>`;
      document.body.appendChild(expandPill);
    } else {
      expandPill.innerHTML = `<span>👁️ إظهار شريط الفحص (#${formattedNum})</span>`;
    }

    // Attach Event Handlers
    document.getElementById('hudCollapseBtn').onclick = () => {
      hud.classList.add('collapsed');
      expandPill.classList.add('visible');
      document.body.classList.remove('has-hud');
      playBeep(450);
    };

    expandPill.onclick = () => {
      hud.classList.remove('collapsed');
      expandPill.classList.remove('visible');
      document.body.classList.add('has-hud');
      playBeep(700);
    };

    document.getElementById('hudPrevBtn').onclick = () => navigateStyle(-1);
    document.getElementById('hudNextBtn').onclick = () => navigateStyle(1);
    document.getElementById('hudRandomBtn').onclick = () => {
      const randIdx = Math.floor(Math.random() * catalog.length);
      switchStyleByIndex(randIdx);
    };

    document.getElementById('hudCopyCssBtn').onclick = () => {
      const code = s.css || `/* ${s.nameAr} */\n/* Colors: ${s.colors.join(', ')} */`;
      navigator.clipboard.writeText(code).then(() => {
        alert(`✓ تم نسخ كود الـ CSS لنمط: ${s.nameAr}`);
      });
    };

    hud.querySelectorAll('.hud-swatch').forEach(sw => {
      sw.onclick = () => {
        const hex = sw.getAttribute('data-hex');
        navigator.clipboard.writeText(hex).then(() => {
          playBeep(880);
          sw.style.transform = 'scale(1.4)';
          setTimeout(() => sw.style.transform = '', 200);
        });
      };
    });

    document.body.classList.add('has-hud');
  }

  // 5. Navigate between styles
  function navigateStyle(delta) {
    let nextIdx = (currentStyleIndex + delta + catalog.length) % catalog.length;
    switchStyleByIndex(nextIdx);
  }

  function switchStyleByIndex(idx) {
    currentStyleIndex = idx;
    currentStyle = catalog[idx];
    playBeep(650);

    if (isInPagesDir) {
      window.location.href = `${currentStyle.id}.html`;
      return;
    }

    // Update URL without reload
    const newUrl = `${window.location.pathname}?id=${currentStyle.id}`;
    window.history.pushState({ id: currentStyle.id }, '', newUrl);

    applyStyleToViewport(currentStyle);
    renderInspectorHud();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const id = (e.state && e.state.id) || new URLSearchParams(window.location.search).get('id') || catalog[0].id;
    const foundIdx = catalog.findIndex(s => s.id === id);
    if (foundIdx !== -1) {
      currentStyleIndex = foundIdx;
      currentStyle = catalog[foundIdx];
      applyStyleToViewport(currentStyle);
      renderInspectorHud();
    }
  });

  // Keyboard navigation (ArrowLeft / ArrowRight)
  window.addEventListener('keydown', (e) => {
    if (e.target && ['input', 'textarea'].includes(e.target.tagName.toLowerCase())) return;
    if (e.key === 'ArrowLeft') {
      navigateStyle(-1);
    } else if (e.key === 'ArrowRight') {
      navigateStyle(1);
    }
  });

  // 6. Generate and Apply CSS Variables for the Style
  function applyStyleToViewport(s) {
    document.title = `${s.nameAr} | موقع متكامل للنمط (#${String(s.num).padStart(3, '0')})`;

    const colors = s.colors || ['#0F172A', '#1E293B', '#334155', '#3B82F6', '#F8FAFC'];
    const c0 = colors[0] || '#0F172A';
    const c1 = colors[1] || '#1E293B';
    const c2 = colors[2] || '#334155';
    const c3 = colors[3] || '#3B82F6';
    const c4 = colors[4] || '#F8FAFC';

    let customStyleTag = document.getElementById('dynamicSiteThemeVars');
    if (!customStyleTag) {
      customStyleTag = document.createElement('style');
      customStyleTag.id = 'dynamicSiteThemeVars';
      document.head.appendChild(customStyleTag);
    }

    // Determine dark vs light orientation
    const isLightBg = isColorLight(c0);
    const textPrimary = isLightBg ? '#0F172A' : '#F8FAFC';
    const textMuted = isLightBg ? '#475569' : '#94A3B8';

    // Build specific archetype variables
    let customCss = `
      :root {
        --theme-bg: ${c0};
        --theme-surface: ${c1};
        --theme-surface-2: ${c2};
        --theme-accent: ${c3};
        --theme-text: ${textPrimary};
        --theme-text-muted: ${textMuted};
        --theme-border: ${c2};
        --theme-font: ${s.font || "'Cairo', sans-serif"};
      }
    `;

    // Apply specific physics per archetype
    if (s.id.includes('brutal') || s.cat === 'modern-ui' && s.id.includes('neo')) {
      customCss += `
        :root {
          --theme-radius: 4px;
          --theme-shadow: 6px 6px 0px #000;
          --theme-btn-shadow: 4px 4px 0px #000;
          --theme-btn-border: 3px solid #000;
          --theme-btn-hover-transform: translate(-3px, -3px);
          --theme-card-hover-transform: translate(-4px, -4px);
        }
      `;
    } else if (s.id.includes('clay')) {
      customCss += `
        :root {
          --theme-radius: 28px;
          --theme-shadow: 14px 14px 28px rgba(0,0,0,0.15), inset -8px -8px 16px rgba(0,0,0,0.06), inset 8px 8px 16px rgba(255,255,255,0.7);
          --theme-btn-shadow: 8px 8px 16px rgba(0,0,0,0.12), inset -4px -4px 8px rgba(0,0,0,0.05), inset 4px 4px 8px rgba(255,255,255,0.8);
        }
      `;
    } else if (s.id.includes('glass')) {
      customCss += `
        :root {
          --theme-radius: 20px;
          --theme-surface: rgba(255, 255, 255, 0.08);
          --theme-border: rgba(255, 255, 255, 0.2);
          --theme-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .mock-card, .mock-hero-visual, .mock-manifesto-box {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
      `;
    } else if (s.id.includes('swiss')) {
      customCss += `
        :root {
          --theme-radius: 0px;
          --theme-shadow: none;
          --theme-border: 1px solid ${c3};
        }
      `;
    } else if (s.id.includes('asiri')) {
      customCss += `
        :root {
          --theme-radius: 4px;
          --theme-border: 2px solid ${c2};
          --theme-shadow: 0 12px 30px rgba(0,0,0,0.45);
        }
      `;
    }

    customStyleTag.textContent = customCss;

    // Render the complete Website
    renderSiteBody(s);
  }

  // Color brightness helper
  function isColorLight(hex) {
    if (!hex || hex.length < 6) return false;
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(h => h + h).join('');
    const r = parseInt(hex.substr(0, 2), 16) || 0;
    const g = parseInt(hex.substr(2, 2), 16) || 0;
    const b = parseInt(hex.substr(4, 2), 16) || 0;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  }

  // 7. Render Complete Bespoke Website Content
  function renderSiteBody(s) {
    const container = document.getElementById('siteViewport');
    if (!container) return;

    const cat = s.cat || 'modern-ui';
    const assets = CATEGORY_ASSETS[cat] || CATEGORY_ASSETS['modern-ui'];

    // Generate Tailored Brand Name & Persona based on style
    const brand = getBrandIdentity(s);

    container.innerHTML = `
      <!-- SPECIAL ARCHETYPE OVERLAYS -->
      ${s.id.includes('asiri') ? '<div class="asiri-frieze-banner"></div>' : ''}
      ${s.id.includes('swiss') ? '<div class="swiss-grid-overlay"><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div><div class="swiss-grid-col"></div></div>' : ''}
      ${s.id.includes('cyber') ? '<div class="cyber-scanlines"></div><div class="cyber-crosshair"></div>' : ''}
      ${s.id.includes('brutal') ? `
        <div class="brutal-ticker">
          <div class="ticker-track">
            ★ ${s.nameAr} ★ ${s.nameEn} ★ DESIGN ARCHETYPE #${s.num} ★ 100% UNCOMPROMISING UI ★ TAREQ ABU ASHEE ★ ${s.bestFor} ★
          </div>
        </div>
      ` : ''}

      <!-- MOCK WEBSITE NAVBAR -->
      <header class="mock-nav ${s.id.includes('asiri') ? 'asiri-crenellation' : ''}">
        <a href="#hero" class="mock-brand">
          <div class="mock-logo-box">${brand.icon}</div>
          <div class="mock-brand-text">
            <h2>${brand.title}</h2>
            <span>${brand.subtitle}</span>
          </div>
        </a>

        <ul class="mock-nav-links">
          <li><a href="#hero">الرئيسية</a></li>
          <li><a href="#features">الميزات</a></li>
          <li><a href="#interactive">المعمل التفاعلي</a></li>
          <li><a href="#showcase">المعرض</a></li>
          <li><a href="#manifesto">الفلسفة</a></li>
        </ul>

        <div class="mock-nav-actions">
          <button class="mock-btn mock-btn-secondary" onclick="alert('تفعيل التجربة المباشرة لنظام: ${brand.title}')">استكشاف</button>
          <button class="mock-btn mock-btn-primary" onclick="alert('شكراً لاهتمامك بنمط: ${s.nameAr}')">${brand.ctaText}</button>
        </div>
      </header>

      <!-- MOCK WEBSITE HERO -->
      <section class="mock-hero" id="hero">
        <div class="mock-hero-content">
          <div class="mock-badge">
            <span>${brand.badgeIcon}</span>
            <span>${s.era || 'نمط تصميمي متقن'} // ${s.catAr || cat}</span>
          </div>

          <h1 class="mock-hero-title">${brand.headline}</h1>

          <p class="mock-hero-subtitle">
            ${brand.leadParagraph}
          </p>

          <div class="mock-hero-actions">
            <button class="mock-btn mock-btn-primary" onclick="alert('انطلق مع ${brand.title}')">
              <span>🚀 ${brand.ctaText}</span>
            </button>
            <button class="mock-btn mock-btn-secondary" onclick="document.getElementById('interactive').scrollIntoView({behavior:'smooth'})">
              <span>🕹️ تجربة المعمل التفاعلي</span>
            </button>
          </div>
        </div>

        <div class="mock-hero-visual">
          <img src="${assets.heroImg}" alt="${s.nameAr}" class="mock-hero-img">
          <div class="mock-hero-overlay">
            <div>
              <strong>${s.nameAr}</strong>
              <div style="font-size: 0.8rem; opacity: 0.8;">${s.traits.slice(0, 50)}...</div>
            </div>
            <div style="font-size: 1.5rem;">${brand.icon}</div>
          </div>
        </div>
      </section>

      <!-- MOCK STATS RIBBON -->
      <section class="mock-stats-ribbon">
        <div class="mock-stats-grid">
          <div class="mock-stat-item">
            <h3>${brand.stats[0].val}</h3>
            <p>${brand.stats[0].label}</p>
          </div>
          <div class="mock-stat-item">
            <h3>${brand.stats[1].val}</h3>
            <p>${brand.stats[1].label}</p>
          </div>
          <div class="mock-stat-item">
            <h3>${brand.stats[2].val}</h3>
            <p>${brand.stats[2].label}</p>
          </div>
          <div class="mock-stat-item">
            <h3>${brand.stats[3].val}</h3>
            <p>${brand.stats[3].label}</p>
          </div>
        </div>
      </section>

      <!-- MOCK FEATURES SECTION -->
      <section class="mock-features-section" id="features">
        <div class="mock-section-header">
          <h2>الركائز التصميمية والوظيفية</h2>
          <p>${s.traits}</p>
        </div>

        <div class="mock-features-grid">
          <div class="mock-card">
            <div class="mock-card-icon">⚡</div>
            <h3>الهوية والتيبوغرافي</h3>
            <p>يعتمد النمط خط <strong>${s.font}</strong> ليعكس الأصالة البصرية والتسلسل الهرمي الصارم.</p>
          </div>

          <div class="mock-card">
            <div class="mock-card-icon">🎨</div>
            <h3>الباليتة الخماسية المتكاملة</h3>
            <p>تناغم بصري محكم يجمع بين (${s.colors.join('، ')}) لتشكيل تجربة مستخدم لا تُنسى.</p>
          </div>

          <div class="mock-card">
            <div class="mock-card-icon">🎯</div>
            <h3>الملاءمة والتطبيق العملي</h3>
            <p><strong>المجال الأنسب:</strong> ${s.bestFor}</p>
          </div>
        </div>
      </section>

      <!-- BESPOKE INTERACTIVE ARCHETYPE WIDGET -->
      <section class="mock-interactive-section" id="interactive">
        <div class="mock-section-header">
          <h2>المعمل التفاعلي الحي للنمط</h2>
          <p>تفاعل مع المكونات الفيزيائية الخاصة بهذا الأسلوب المعماري مباشرة في المتصفح</p>
        </div>

        ${renderInteractiveWidget(s)}
      </section>

      <!-- SHOWCASE / GALLERY SECTION -->
      <section class="mock-features-section" id="showcase">
        <div class="mock-section-header">
          <h2>معرض المكونات والأعمال</h2>
          <p>استعراض حي لكيفية توظيف هذا النمط في بيئات الاستخدام الواقعية والمنتجات الرقمية</p>
        </div>

        <div class="mock-showcase-grid">
          ${assets.showcase.map(item => `
            <div class="mock-showcase-card">
              <img src="${item.img}" alt="${item.title}">
              <div class="mock-showcase-body">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <button class="mock-btn mock-btn-secondary" style="width: 100%; padding: 0.5rem;" onclick="alert('استعراض: ${item.title}')">معاينة النموذج</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- PHILOSOPHY & MANIFESTO -->
      <section class="mock-features-section" id="manifesto">
        <div class="mock-manifesto-box">
          <p class="mock-manifesto-quote">
            "${brand.manifestoQuote}"
          </p>
          <div class="mock-manifesto-author">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Author" class="mock-manifesto-avatar">
            <div style="text-align: right;">
              <strong style="display: block;">${brand.authorName}</strong>
              <span style="font-size: 0.8rem; opacity: 0.75;">${brand.authorTitle}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- MOCK WEBSITE FOOTER -->
      <footer class="mock-footer">
        <div class="mock-footer-grid">
          <div class="mock-footer-col">
            <div class="mock-brand" style="margin-bottom: 1rem;">
              <div class="mock-logo-box">${brand.icon}</div>
              <div class="mock-brand-text">
                <h2>${brand.title}</h2>
                <span>${brand.subtitle}</span>
              </div>
            </div>
            <p style="font-size: 0.88rem; opacity: 0.75; line-height: 1.6;">
              موقع تجريبي متكامل مبني ومصمم 100% بنمط <strong>${s.nameAr} (${s.nameEn})</strong> ليكون مرجعاً بصرياً وتطبيقياً واقعياً.
            </p>
          </div>

          <div class="mock-footer-col">
            <h4>روابط المنصة</h4>
            <ul>
              <li><a href="#hero">الرئيسية</a></li>
              <li><a href="#features">الركائز التصميمية</a></li>
              <li><a href="#interactive">المعمل التفاعلي</a></li>
              <li><a href="#showcase">معرض الأعمال</a></li>
            </ul>
          </div>

          <div class="mock-footer-col">
            <h4>المواصفات التقنية</h4>
            <ul>
              <li><a href="javascript:void(0)" onclick="alert('خط النمط: ${s.font}')">الخط: ${s.font}</a></li>
              <li><a href="javascript:void(0)" onclick="alert('الحقبة: ${s.era}')">الحقبة: ${s.era}</a></li>
              <li><a href="javascript:void(0)" onclick="alert('الفئة: ${s.catAr}')">الفئة: ${s.catAr}</a></li>
              <li><a href="javascript:void(0)" onclick="alert('الرقم: #${s.num}')">رقم النمط: #${s.num}</a></li>
            </ul>
          </div>

          <div class="mock-footer-col">
            <h4>النشرة الإخبارية</h4>
            <p style="font-size: 0.85rem; opacity: 0.75;">اشترك لتصلك أحدث تصاميم ومراجع واجهات الويب.</p>
            <div style="display: flex; gap: 6px; margin-top: 0.75rem;">
              <input type="email" placeholder="بريدك الإلكتروني" style="padding: 0.5rem; border-radius: var(--theme-radius, 6px); border: 1px solid var(--theme-border, #444); background: var(--theme-surface, #222); color: inherit; flex: 1;">
              <button class="mock-btn mock-btn-primary" style="padding: 0.5rem 0.85rem;" onclick="alert('تم الاشتراك بنجاح!')">انضم</button>
            </div>
          </div>
        </div>

        <div class="mock-footer-bottom">
          <div>استوديو أنماط التصميم البصري — تطوير وهندسة <strong>أ. طارق ابوعشي</strong></div>
          <div>المرجع الشامل لـ 300 نمط تصميمي لواجهات الويب وتطبيقات العصر</div>
        </div>
      </footer>
    `;

    // Initialize custom interactive logic if any
    initWidgetScripts(s);
  }

  // 8. Generate Specific Brand Personas based on Style
  function getBrandIdentity(s) {
    if (s.id.includes('asiri')) {
      return {
        icon: '🏔️',
        badgeIcon: '🇸🇦 تراث وطني أصيل',
        title: 'روح عسير | ASEER HERITAGE',
        subtitle: 'منصة التراث والسياحة الثقافية الفاخرة بمنطقة عسير',
        headline: 'أصالة القط العسيري وفخامة العمارة الشامخة في قمم السروات',
        leadParagraph: 'نحتفي بتراث قصور عسير الحجرية وشرفات الجص الناصعة ونقوش القط الهندسية المسجلة في اليونسكو، لنقدم تجربة سياحية وثقافية غامرة تجمع بين عراقة الأجداد وطموح المستقبل.',
        ctaText: 'حجز تجربة تراثية',
        stats: [
          { val: '3,000+', label: 'متر فوق سطح البحر' },
          { val: '12', label: 'قرية تراثية موثقة' },
          { val: '100%', label: 'نقوش قط أصلية' },
          { val: '24/7', label: 'ضيافة سعودية فاخرة' }
        ],
        manifestoQuote: 'عمارة عسير ليست مجرد أحجار متراصة، بل هي قصيدة لونية نقشتها أنامل الأمهات على جدران الصخور لتتحدى الزمن والغيوم.',
        authorName: 'د. سارة الألمعي',
        authorTitle: 'مؤرخة العمارة التقليدية الجنوبية'
      };
    }

    if (s.id.includes('swiss')) {
      return {
        icon: '📐',
        badgeIcon: '🇨🇭 النمط السويسري الدولي',
        title: 'KUNSTHALLE BASEL',
        subtitle: 'International Typographic Archive & Architecture Biennale',
        headline: 'النظام والوضوح التام: شبكات رياضية تُعيد صياغة المشهد البصري',
        leadParagraph: 'لا زخرفة بلا وظيفة. نتبنى الفلسفة السويسرية الصارمة ذات الشبكة الاثني عشرية، والتسلسل الهرمي الدقيق لخط Helvetica، حيث يتنفس المحتوى في فراغ معماري محسوب.',
        ctaText: 'استكشاف الأرشيف',
        stats: [
          { val: '12', label: 'أعمدة شبكية متوازنة' },
          { val: '1957', label: 'عام ولادة المعيار' },
          { val: '0px', label: 'زخارف غير وظيفية' },
          { val: '100%', label: 'تباين بصري مطلق' }
        ],
        manifestoQuote: 'التصميم الجيد هو إزالة كل ما هو غير جوهري، حتى يتبقى الهيكل النقي الذي يوصل الرسالة بأعلى درجات الصدق والمباشرة.',
        authorName: 'جوزيف مولر بروكمان',
        authorTitle: 'رائد مدرسة زيورخ للتصميم الجرافيكي'
      };
    }

    if (s.id.includes('brutal')) {
      return {
        icon: '⚡',
        badgeIcon: '🔨 النيو-بروتاليزم الحسي',
        title: 'BRUTAL.IO',
        subtitle: 'The Fearless Developer Infrastructure',
        headline: 'واجهات صلبة، ظلال حادة، وألوان تفجر الشاشة بالطاقة الحركية',
        leadParagraph: 'وداعاً للتدرجات الباهتة والحدود الناعمة المملة! هنا نعيد للأزرار هيبتها الميكانيكية بحدود 3.5px سوداء صلبة وظلال مسقطة بزاوية 45 درجة بدون أي تمويه (0-blur).',
        ctaText: 'ابدأ البناء فوراً',
        stats: [
          { val: '3.5px', label: 'سماكة الحدود الصلبة' },
          { val: '0-Blur', label: 'ظلال مسقطة بزوايا حادة' },
          { val: '99.9%', label: 'جاهزية خوادم الكود' },
          { val: '10x', label: 'سرعة تفاعل المستخدم' }
        ],
        manifestoQuote: 'لماذا نخفي الآلات خلف زجاج ناعم؟ دع المستخدم يشعر بصلابة الأزرار وضخامة الخطوط وقوة الألوان الصارخة.',
        authorName: 'أليكس مورجان',
        authorTitle: 'كبير مهندسي واجهات الويب المستقلة'
      };
    }

    if (s.id.includes('cyber')) {
      return {
        icon: '🛰️',
        badgeIcon: '🧬 السايبربانك العسكري',
        title: 'NEURAL_DEFENSE // V4',
        subtitle: 'Tactical Cybernetic Grid & Threat Interceptor',
        headline: 'رادارات مصفوفة، خطوط مسح ليزرية، وتشفير كمومي يتصدى للاختراقات',
        leadParagraph: 'واجهة تشغيلية تكتيكية فائقة التطور مستوحاة من لوحات قيادة سفن الفضاء وأنظمة الحماية السيبرانية المعقدة، مع خطوط مسح CRT وتنبيهات بصرية باللون النيوني المتوهج.',
        ctaText: 'تشغيل المصفوفة',
        stats: [
          { val: '10 Gbps', label: 'معدل تدفق البيانات' },
          { val: '0.02 ms', label: 'زمن الاستجابة التكتيكي' },
          { val: '99.99%', label: 'حماية الدرع الكمومي' },
          { val: '4,096', label: 'عقدة عصبية متصلة' }
        ],
        manifestoQuote: 'في فضاء السايبر، السرعة هي البقاء، والواجهة ليست مجرد شاشة بل هي امتداد عصبي مباشر بين إدراك الإنسان وآلات المستقبل.',
        authorName: 'كابتن ريكس هارلان',
        authorTitle: 'قائد عمليات الدفاع السيبراني التكتيكي'
      };
    }

    if (s.id.includes('win95') || s.id.includes('windows')) {
      return {
        icon: '💾',
        badgeIcon: '🖥️ ريترو التسعينات',
        title: 'RETRO-OS 95',
        subtitle: 'Interactive 32-Bit Graphical Desktop Environment',
        headline: 'نوستالجيا نظام التشغيل الأسطوري: نوافذ ثلاثية الأبعاد وزر ابدأ الكلاسيكي',
        leadParagraph: 'استرجع سحر حوسبة التسعينات الذهبية؛ رمادي الحواف المشطوفة، النقر الميكانيكي، شريط المهام في الأسفل، والأيقونات الرمزية التي علمت العالم مفهوم النوافذ الرقمية.',
        ctaText: 'ابدأ البرامج',
        stats: [
          { val: '32-Bit', label: 'معمارية المعالجة' },
          { val: '640x480', label: 'دقة العرض الأصلية' },
          { val: '1995', label: 'سنة الإطلاق التاريخي' },
          { val: '100%', label: 'نوستالجيا حقيقية' }
        ],
        manifestoQuote: 'النوافذ التي غيرت مجرى تاريخ البشرية وقربت عالم الحواسيب لكل مكتب ومنزل حول العالم.',
        authorName: 'بيل ف.',
        authorTitle: 'مؤسس ثورة الحوسبة الشخصية'
      };
    }

    // Default High-Fidelity Persona for all other styles
    return {
      icon: getCategoryIcon(s.cat),
      badgeIcon: `✨ ${s.catAr || 'نمط تصميمي متكامل'}`,
      title: `${s.nameEn.toUpperCase()}`,
      subtitle: `منصة حية مصممة بنمط ${s.nameAr}`,
      headline: `تجسيد حي لمعايير ${s.nameAr}: توازن مثالي بين الشكل والأداء`,
      leadParagraph: `${s.traits} صُممت هذه الواجهة خصيصاً لتناسب مجالات (${s.bestFor}) مع إبراز الشخصية المعمارية الفريدة للنمط.`,
      ctaText: 'استكشاف المنظومة',
      stats: [
        { val: `#${s.num}`, label: 'رقم النمط في الموسوعة' },
        { val: '5', label: 'ألوان باليتة منتقاة' },
        { val: '100%', label: 'تطابق فيزيائي وتصميمي' },
        { val: '4K', label: 'دقة العرض والتجاوب' }
      ],
      manifestoQuote: `كل عنصر في هذا الموقع وُضع ليبرهن أن ${s.nameAr} ليس مجرد ألوان عابرة، بل فلسفة معمارية متكاملة تصنع فارقاً جوهرياً في تجربة المستخدم.`,
      authorName: 'أ. طارق ابوعشي',
      authorTitle: 'مبتكر ومصمم استوديو أنماط التصميم البصري'
    };
  }

  function getCategoryIcon(cat) {
    const map = {
      'modern-ui': '📱',
      'art-history': '🏛️',
      'retro-digital': '🕹️',
      'cultural': '🕌',
      'industrial': '⚙️',
      'editorial': '📰',
      'nature': '🌿',
      'luxury': '💎',
      'sci-fi': '🚀'
    };
    return map[cat] || '✨';
  }

  // 9. Render Bespoke Interactive Widgets per Archetype
  function renderInteractiveWidget(s) {
    // A. Windows 95 Desktop Simulator
    if (s.id.includes('win95') || s.id.includes('windows')) {
      return `
        <div class="win95-desktop" id="win95Desktop">
          <div class="win95-icons-grid">
            <div class="win95-icon" onclick="alert('فتح جهاز الكمبيوتر (Drive C: 1.2 GB Free)')">
              <div class="win95-icon-img">💻</div>
              <div>جهاز الكمبيوتر</div>
            </div>
            <div class="win95-icon" onclick="alert('سلة المحذوفات فارغة')">
              <div class="win95-icon-img">🗑️</div>
              <div>سلة المحذوفات</div>
            </div>
            <div class="win95-icon" onclick="alert('برنامج المفكرة جاهز للتدوين')">
              <div class="win95-icon-img">📝</div>
              <div>المفكرة</div>
            </div>
            <div class="win95-icon" onclick="alert('تشغيل لعبة كانسة الألغام')">
              <div class="win95-icon-img">💣</div>
              <div>الألغام</div>
            </div>
          </div>

          <div class="win95-window" id="win95Window">
            <div class="win95-titlebar" id="win95Titlebar">
              <span>📋 خصائص النمط - ${s.nameAr}</span>
              <div class="win95-window-btns">
                <button class="win95-btn">_</button>
                <button class="win95-btn">□</button>
                <button class="win95-btn" onclick="document.getElementById('win95Window').style.display='none'">✕</button>
              </div>
            </div>
            <div class="win95-body">
              <p><strong>اسم النمط:</strong> ${s.nameAr} (${s.nameEn})</p>
              <p><strong>الحقبة الزمنية:</strong> ${s.era}</p>
              <p><strong>الخط المعتمد:</strong> ${s.font}</p>
              <p><strong>الاستخدام الأنسب:</strong> ${s.bestFor}</p>
              <hr style="border: 1px inset #FFF; margin: 10px 0;">
              <button class="win95-btn" style="padding: 4px 12px;" onclick="alert('تم حفظ إعدادات النمط بنجاح!')">موافق</button>
              <button class="win95-btn" style="padding: 4px 12px;" onclick="document.getElementById('win95Window').style.display='none'">إلغاء الأمر</button>
            </div>
          </div>

          <div class="win95-taskbar">
            <button class="win95-start-btn" onclick="alert('قائمة ابدأ (Start Menu): استكشف برامج التسعينات الكلاسيكية!')">
              <span style="font-size: 1.1rem;">🪟</span>
              <span>ابدأ</span>
            </button>
            <div style="font-size: 0.8rem; font-weight: 700; padding: 2px 8px; border: 1px inset #808080; background: #FFF;">
              خصائص النمط
            </div>
            <div class="win95-clock" id="win95Clock">12:00 م</div>
          </div>
        </div>
      `;
    }

    // B. CRT Terminal Console with interactive command prompt
    if (s.id.includes('terminal') || s.id.includes('crt') || s.cat === 'retro-digital' && s.id.includes('console')) {
      return `
        <div class="crt-terminal-box">
          <pre style="margin: 0; font-size: 0.75rem; color: #33FF33; line-height: 1.2;">
 ██████╗██████╗ ████████╗    ████████╗███████╗██████╗ ███╗   ███╗
██╔════╝██╔══██╗╚══██╔══╝    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║
██║     ██████╔╝   ██║          ██║   █████╗  ██████╔╝██╔████╔██║
██║     ██╔══██╗   ██║          ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║
╚██████╗██║  ██║   ██║          ██║   ███████╗██║  ██║██║ ╚═╝ ██║
 ╚═════╝╚═╝  ╚═╝   ╚═╝          ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
          </pre>
          <div style="margin-top: 1rem;">
            [SYSTEM BOOT SUCCESSFUL] // MAINFRAME OS v4.19<br>
            LOADED ARCHETYPE: <strong>${s.nameEn.toUpperCase()} (#${s.num})</strong><br>
            PALETTE_CHANNELS: ${s.colors.join(' | ')}<br>
            READY FOR COMMANDS. اكتب (help, info, colors, styles, clear) ثم اضغط Enter:
          </div>
          <div id="crtOutputLog" style="margin-top: 0.5rem; line-height: 1.4;"></div>
          <div class="crt-input-line">
            <span>root@mainframe:~$</span>
            <input type="text" class="crt-input" id="crtCommandLine" placeholder="اكتب أمراً هنا..." autofocus>
          </div>
        </div>
      `;
    }

    // C. Swiss 12-Column Grid Interactive Studio
    if (s.id.includes('swiss')) {
      return `
        <div style="background: #FFF; color: #000; padding: 2.5rem; border: 2px solid #000; font-family: 'Space Grotesk', sans-serif;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 1rem; margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.5rem; font-weight: 900; margin: 0;">INTERNATIONAL TYPOGRAPHIC POSTER GENERATOR</h3>
            <button class="mock-btn" style="background: #D90429; color: #FFF; border-radius: 0;" onclick="toggleSwissGridLines()">تبديل إظهار خطوط الشبكة الاثني عشرية (Key: G)</button>
          </div>
          <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 2rem;">
            <div>
              <span style="font-size: 5rem; font-weight: 900; line-height: 0.9; color: #D90429; display: block;">BASEL<br>1957</span>
              <p style="font-size: 1.1rem; line-height: 1.5; margin-top: 1rem;">
                الشبكة ليست قيداً يحد الإبداع، بل هي السقالة الرياضية التي تمنح الفوضى معنىً وهندسة.
              </p>
            </div>
            <div style="border-left: 1px solid #000; padding-left: 1.5rem;">
              <h4 style="font-weight: 800; margin: 0 0 0.5rem;">قواعد النظام:</h4>
              <ul style="padding-right: 1.2rem; font-size: 0.9rem; line-height: 1.6;">
                <li>محاذاة كاملة لليسار دون ضبط أطراف.</li>
                <li>تدرج تيبوغرافي منضبط (8pt, 16pt, 32pt, 64pt).</li>
                <li>استخدام الأحمر السويسري #D90429 كنقطة ارتكاز بصرية وحيدة.</li>
              </ul>
            </div>
            <div style="background: #F1F1F1; padding: 1.5rem; border: 1px solid #CCC;">
              <span style="font-size: 2.5rem; font-weight: 900; color: #000;">#002</span>
              <div style="font-weight: 700; margin-top: 0.5rem;">الهوية المعيارية الدولية</div>
              <div style="font-size: 0.8rem; color: #666; margin-top: 0.25rem;">معهد بازل للفنون التطبيقية</div>
            </div>
          </div>
        </div>
      `;
    }

    // D. Cyberpunk Netrunner Threat Matrix
    if (s.id.includes('cyber') || s.cat === 'sci-fi') {
      return `
        <div class="cyberpunk-console" style="padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #00FFCC; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="width: 12px; height: 12px; border-radius: 50%; background: #00FFCC; box-shadow: 0 0 10px #00FFCC; display: inline-block;"></span>
              <strong style="letter-spacing: 1px;">CYBERNETIC THREAT RADAR // LIVE TELEMETRY</strong>
            </div>
            <button class="mock-btn" style="background: #FF0055; color: #FFF; border-radius: 2px;" onclick="alert('تم تفعيل صفارة الإنذار التكتيكية! اختراق في القطاع 07')">🚨 محاكاة اختراق فوري</button>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div style="border: 1px solid rgba(0, 255, 204, 0.3); padding: 1rem; background: rgba(0, 255, 204, 0.03);">
              <div style="font-size: 0.8rem; color: #FF0055; margin-bottom: 0.5rem;">[RADAR FREQUENCY GRAPH]</div>
              <canvas id="cyberRadarCanvas" width="400" height="150" style="width: 100%; height: 150px; background: #000;"></canvas>
            </div>
            <div style="border: 1px solid rgba(0, 255, 204, 0.3); padding: 1rem; background: rgba(0, 255, 204, 0.03); font-size: 0.85rem; line-height: 1.7;">
              <div style="color: #00FFCC; font-weight: 700; margin-bottom: 0.5rem;">سجل العمليات المشفرة:</div>
              <div>> SYNAPSE_NODE_01: ONLINE (LATENCY: 0.4ms)</div>
              <div>> FIREWALL_LAYER_7: ACTIVE (BLOCKED: 1,482 INTRUSIONS)</div>
              <div>> ENCRYPTION_CIPHER: QUANTUM_SHA3_512</div>
              <div>> SYSTEM_INTEGRITY: 99.98% OPTIMAL</div>
            </div>
          </div>
        </div>
      `;
    }

    // E. General Interactive Style Playground for all other styles
    return `
      <div class="mock-card" style="padding: 2.5rem; text-align: center;">
        <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem;">لوحة اختبار المكونات الفيزيائية (UI Sandbox)</h3>
        <p style="max-width: 650px; margin: 0 auto 2rem; opacity: 0.85;">
          جرب التفاعل المباشر مع أزرار الإجراء، المدخلات، ومؤشرات الحالة المصممة بخصائص <strong>${s.nameAr}</strong>:
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
          <button class="mock-btn mock-btn-primary" onclick="alert('نقرت على زر الإجراء الرئيسي بنمط ${s.nameAr}')">زر الإجراء الأساسي</button>
          <button class="mock-btn mock-btn-secondary" onclick="alert('نقرت على الزر الثانوي')">زر الإجراء الثانوي</button>
          <button class="mock-btn" style="background: transparent; border: 2px dashed var(--theme-accent, #3B82F6); color: inherit;" onclick="alert('زر الحدود المتقطعة')">زر محدد بنقاط</button>
        </div>
        <div style="display: flex; justify-content: center; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <input type="text" placeholder="حقل إدخال مجرب..." style="padding: 0.65rem 1rem; border-radius: var(--theme-radius, 8px); border: 1px solid var(--theme-border, #444); background: var(--theme-surface, #222); color: inherit; width: 260px;">
          <button class="mock-btn mock-btn-primary" onclick="alert('تم إرسال البيانات!')">إرسال</button>
        </div>
      </div>
    `;
  }

  // 10. Initialize dynamic widget scripts (Canvas radar, Win95 clock, Terminal commands)
  function initWidgetScripts(s) {
    // A. Win95 Clock
    const clockEl = document.getElementById('win95Clock');
    if (clockEl) {
      function updateClock() {
        const d = new Date();
        clockEl.textContent = d.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
      }
      updateClock();
      setInterval(updateClock, 30000);
    }

    // B. Terminal Command Prompt Engine
    const termInput = document.getElementById('crtCommandLine');
    const termOutput = document.getElementById('crtOutputLog');
    if (termInput && termOutput) {
      termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const cmd = termInput.value.trim().toLowerCase();
          termInput.value = '';
          handleTermCommand(cmd, termOutput, s);
        }
      });
    }

    // C. Cyberpunk Radar Canvas
    const radarCanvas = document.getElementById('cyberRadarCanvas');
    if (radarCanvas) {
      const ctx = radarCanvas.getContext('2d');
      let angle = 0;
      function drawRadar() {
        ctx.fillStyle = 'rgba(0, 5, 10, 0.2)';
        ctx.fillRect(0, 0, radarCanvas.width, radarCanvas.height);

        const cx = radarCanvas.width / 2;
        const cy = radarCanvas.height / 2;
        const r = 60;

        // Draw circles
        ctx.strokeStyle = '#00FFCC';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.arc(cx, cy, r / 2, 0, Math.PI * 2);
        ctx.stroke();

        // Draw sweep line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
        ctx.strokeStyle = '#FF0055';
        ctx.lineWidth = 2;
        ctx.stroke();

        angle += 0.05;
        requestAnimationFrame(drawRadar);
      }
      drawRadar();
    }
  }

  // Terminal Command Logic
  function handleTermCommand(cmd, logEl, s) {
    let response = '';
    switch (cmd) {
      case 'help':
        response = `AVAILABLE COMMANDS:\n- info    : عرض بطاقة النمط\n- colors  : باليتة الألوان بالقيم الست عشرية\n- styles  : التبديل لنمط عشوائي\n- clear   : مسح الشاشة\n- exit    : العودة للموسوعة الرئيسية`;
        break;
      case 'info':
        response = `STYLE_SPEC // ID: ${s.id} | NAME: ${s.nameAr} | ERA: ${s.era}\nTRAITS: ${s.traits}\nBEST_FOR: ${s.bestFor}`;
        break;
      case 'colors':
        response = `ACTIVE_PALETTE:\n${s.colors.map((c, i) => `[C${i+1}] ${c}`).join('\n')}`;
        break;
      case 'styles':
        response = `[SWITCHING TO RANDOM STYLE...]`;
        setTimeout(() => {
          const rIdx = Math.floor(Math.random() * catalog.length);
          switchStyleByIndex(rIdx);
        }, 600);
        break;
      case 'clear':
        logEl.innerHTML = '';
        return;
      case 'exit':
        window.location.href = `${rootPrefix}index.html#encyclopediaSection`;
        return;
      default:
        response = `COMMAND NOT RECOGNIZED: "${cmd}". اكتب "help" لعرض الأوامر.`;
    }

    const item = document.createElement('div');
    item.style.marginBottom = '6px';
    item.innerHTML = `<span style="color: #FFF;">> ${cmd}</span><br><span style="color: #33FF33; white-space: pre-line;">${response}</span>`;
    logEl.appendChild(item);
    logEl.scrollTop = logEl.scrollHeight;
  }

  // Global toggle for Swiss Grid Lines
  window.toggleSwissGridLines = function () {
    const overlay = document.querySelector('.swiss-grid-overlay');
    if (overlay) {
      const isVisible = overlay.style.display !== 'none';
      overlay.style.display = isVisible ? 'none' : 'grid';
      playBeep(isVisible ? 400 : 800);
    }
  };

  // 11. Initial Run
  applyStyleToViewport(currentStyle);
  renderInspectorHud();

})();
