/**
 * Standalone Website Rendering Engine for 300 Design Archetypes
 * UI Design Styles Showcase - Developed for أ. طارق ابوعشي
 * 
 * Architecture:
 * - Bespoke Structural Archetypes (True Retro OS, CRT Terminal, Swiss Poster,
 *   Editorial Magazine, Neo-Brutalist Raw, Neo-Asiri Heritage, Cyberpunk HUD, Bento Platform)
 * - Zero Cloned Templates (Radically Different Layouts per Movement)
 * - 100% Respectful Attributions with Golden Emblem (Zero Random Stock Avatars)
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
      heroImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      showcase: [
        { title: 'إصدار الخريف الفاخر', desc: 'أرشيف العمارة والمقتنيات الرفيعة والأزياء الراقية.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
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

    const isLightBg = isColorLight(c0);
    const textPrimary = isLightBg ? '#0F172A' : '#F8FAFC';
    const textMuted = isLightBg ? '#475569' : '#94A3B8';

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

    customStyleTag.textContent = customCss;

    // Route to the appropriate specialized layout
    renderSiteBody(s);
  }

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

  // 7. ROUTE TO SPECIALIZED BESPOKE LAYOUTS
  function renderSiteBody(s) {
    const container = document.getElementById('siteViewport');
    if (!container) return;

    // A. Vintage Operating System (Windows 95, Macintosh System 7, Retro Desktop)
    if (s.id.includes('win95') || s.id.includes('windows-95') || s.id.includes('retro-desktop') || s.id.includes('macintosh')) {
      container.innerHTML = renderWindows95FullscreenDesktop(s);
      initWin95DesktopScripts(s);
      return;
    }

    // B. Phosphor CRT Terminal (CRT, MS-DOS, Terminal, Pip-Boy, Mainframe)
    if (s.id.includes('terminal') || s.id.includes('crt') || s.id.includes('msdos') || s.id.includes('unix') || s.id.includes('mainframe') || s.id.includes('pipboy')) {
      container.innerHTML = renderCrtFullscreenTerminal(s);
      initCrtTerminalScripts(s);
      return;
    }

    // C. Swiss International Style & Modernist Typography (Swiss, Bauhaus, Constructivism)
    if (s.id.includes('swiss') || s.id.includes('bauhaus') || s.id.includes('constructivism') || s.id.includes('suprematism')) {
      container.innerHTML = renderSwissPosterArchitecture(s);
      return;
    }

    // D. Haute Couture Editorial Magazine (Editorial, Vogue, Publishing, Broadsheet)
    if (s.cat === 'editorial' || s.id.includes('vogue') || s.id.includes('broadsheet') || s.id.includes('magazine')) {
      container.innerHTML = renderEditorialMagazineLayout(s);
      return;
    }

    // E. Neo-Brutalist Raw Developer Platform (Brutalism, Anti-Design, Indie Web)
    if (s.id.includes('brutal') || s.id.includes('anti-design') || s.id.includes('y2k')) {
      container.innerHTML = renderNeoBrutalistRawPlatform(s);
      return;
    }

    // F. Neo-Asiri Heritage Cultural Monument (Asiri, Najdi, Cultural Heritage)
    if (s.id.includes('asiri') || s.id.includes('najdi') || s.cat === 'cultural') {
      container.innerHTML = renderNeoAsiriHeritagePlatform(s);
      return;
    }

    // G. Tactical Cyberpunk & Sci-Fi HUD Console (Cyberpunk, HUD, Sci-Fi)
    if (s.cat === 'sci-fi' || s.id.includes('cyber') || s.id.includes('hud') || s.id.includes('tactical')) {
      container.innerHTML = renderCyberpunkHudPlatform(s);
      initCyberpunkScripts(s);
      return;
    }

    // H. Default High-Fidelity Bento Tech Platform
    container.innerHTML = renderDefaultBentoPlatform(s);
  }

  // =========================================================================
  // TEMPLATE 1: FULLSCREEN VINTAGE OS (WINDOWS 95)
  // =========================================================================
  function renderWindows95FullscreenDesktop(s) {
    return `
      <div class="win95-desktop-fullscreen" id="win95Desktop">
        <!-- Desktop Shortcuts -->
        <div class="win95-icons-column">
          <button class="win95-icon-btn" onclick="alert('محرك الأقراص C: يحتوي على نظام التشغيل وحزمة ملفات نمط ${s.nameAr}')">
            <span class="win95-icon-glyph">💻</span>
            <span>جهاز الكمبيوتر</span>
          </button>
          <button class="win95-icon-btn" onclick="alert('سلة المحذوفات فارغة تماماً.')">
            <span class="win95-icon-glyph">🗑️</span>
            <span>سلة المحذوفات</span>
          </button>
          <button class="win95-icon-btn" onclick="document.getElementById('win95MainWindow').style.display='block'">
            <span class="win95-icon-glyph">📋</span>
            <span>خصائص النمط</span>
          </button>
          <button class="win95-icon-btn" onclick="alert('المفكرة: كود CSS للنمط جاهز للتحرير والنسخ.')">
            <span class="win95-icon-glyph">📝</span>
            <span>المفكرة</span>
          </button>
          <button class="win95-icon-btn" onclick="alert('لعبة كانسة الألغام: 10 ألغام نشطة.')">
            <span class="win95-icon-glyph">💣</span>
            <span>كانسة الألغام</span>
          </button>
        </div>

        <!-- Centered Authentic 3D Window -->
        <div class="win95-main-window" id="win95MainWindow">
          <div class="win95-titlebar" style="cursor: default;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span>🪟</span>
              <span>خصائص النمط: ${s.nameAr} (${s.nameEn}) - [رقم #${s.num}]</span>
            </div>
            <div class="win95-window-btns">
              <button class="win95-btn" onclick="document.getElementById('win95MainWindow').style.display='none'">_</button>
              <button class="win95-btn" onclick="alert('النافذة بأقصى اتساع')">□</button>
              <button class="win95-btn" onclick="document.getElementById('win95MainWindow').style.display='none'">✕</button>
            </div>
          </div>

          <div class="win95-menu-bar">
            <span>ملف(F)</span>
            <span>تحرير(E)</span>
            <span>عرض(V)</span>
            <span>تعليمات(H)</span>
          </div>

          <div class="win95-content-area">
            <div style="border-bottom: 1px solid #808080; padding-bottom: 12px; margin-bottom: 14px;">
              <h3 style="margin: 0 0 6px; font-size: 1.25rem;">${s.nameAr}</h3>
              <div style="color: #444; font-size: 0.85rem;">الحقبة: <strong>${s.era}</strong> | الفئة: <strong>${s.catAr}</strong></div>
            </div>

            <p><strong>البصمة المعمارية:</strong> ${s.traits}</p>
            <p><strong>الخطوط المعتمدة:</strong> <code>${s.font}</code></p>
            <p><strong>المجالات المثالية للتطبيق:</strong> ${s.bestFor}</p>

            <div style="margin: 1rem 0;">
              <strong>باليتة الألوان الخماسية:</strong>
              <div style="display: flex; gap: 8px; margin-top: 6px;">
                ${s.colors.map(hex => `
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                    <div style="width: 38px; height: 38px; background: ${hex}; border: 2px inset #808080;" title="${hex}"></div>
                    <span style="font-size: 0.72rem; font-family: monospace;">${hex}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div style="margin-top: 1rem;">
              <strong>كود CSS الجوهري:</strong>
              <pre style="background: #F4F4F4; border: 1px inset #808080; padding: 10px; font-size: 0.8rem; overflow-x: auto; margin: 6px 0;">${s.css}</pre>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 1.25rem;">
              <button class="win95-btn" style="padding: 4px 18px; font-weight: 700;" onclick="alert('تم اعتماد خصائص النمط في النظام!')">موافق</button>
              <button class="win95-btn" style="padding: 4px 18px;" onclick="document.getElementById('win95MainWindow').style.display='none'">إلغاء الأمر</button>
            </div>
          </div>
        </div>

        <!-- Start Menu Popup -->
        <div class="win95-start-menu-popup" id="win95StartMenu">
          <div class="win95-start-banner">WINDOWS 95</div>
          <button class="win95-menu-item" onclick="document.getElementById('win95MainWindow').style.display='block'; toggleStartMenu();">
            <span>📋</span>
            <span>خصائص النمط</span>
          </button>
          <button class="win95-menu-item" onclick="window.location.href='${rootPrefix}index.html#encyclopediaSection';">
            <span>🏠</span>
            <span>العودة للموسوعة (300 نمط)</span>
          </button>
          <button class="win95-menu-item" onclick="alert('إيقاف تشغيل الكمبيوتر: يمكنك الآن إغلاق حاسوبك بأمان.');">
            <span>🔌</span>
            <span>إيقاف التشغيل...</span>
          </button>
        </div>

        <!-- Fixed Taskbar -->
        <div class="win95-taskbar-fixed">
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="win95-start-btn" id="win95StartBtn" onclick="toggleStartMenu()">
              <span style="font-size: 1.1rem;">🪟</span>
              <span>ابدأ</span>
            </button>
            <button class="win95-btn" style="font-weight: 700; padding: 2px 10px; background: #C0C0C0;" onclick="document.getElementById('win95MainWindow').style.display='block'">
              <span>📋 خصائص النمط</span>
            </button>
          </div>
          <div class="win95-clock" id="win95ClockFixed">12:00 م</div>
        </div>
      </div>
    `;
  }

  function initWin95DesktopScripts(s) {
    window.toggleStartMenu = function () {
      const menu = document.getElementById('win95StartMenu');
      if (menu) menu.classList.toggle('open');
      playBeep(520);
    };

    const clock = document.getElementById('win95ClockFixed');
    if (clock) {
      function tick() {
        const d = new Date();
        clock.textContent = d.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
      }
      tick();
      setInterval(tick, 30000);
    }
  }

  // =========================================================================
  // TEMPLATE 2: FULLSCREEN CRT PHOSPHOR TERMINAL
  // =========================================================================
  function renderCrtFullscreenTerminal(s) {
    return `
      <div class="crt-fullscreen-terminal">
        <div class="crt-scanline-fx"></div>
        <div class="crt-vignette-fx"></div>

        <div class="crt-terminal-content">
          <pre style="margin: 0; font-size: 0.72rem; line-height: 1.2; color: #33FF33;">
███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗    ████████╗███████╗██████╗ ███╗   ███╗
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║       ██║   █████╗  ██████╔╝██╔████╔██║
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║       ██║   ███████╗██║  ██║██║ ╚═╝ ██║
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
          </pre>

          <div style="margin-top: 1.5rem; line-height: 1.6; border-top: 1px dashed #33FF33; border-bottom: 1px dashed #33FF33; padding: 1rem 0;">
            [MAINFRAME STATUS] // READY ON TTY1<br>
            LOADED SPEC: <strong>#${String(s.num).padStart(3, '0')} // ${s.nameEn.toUpperCase()}</strong><br>
            ARABIC NOMENCLATURE: <strong>${s.nameAr}</strong><br>
            CATEGORICAL MATRIX: ${s.catAr} // ERA: ${s.era}<br>
            PHYSICAL SIGNATURE: ${s.traits}<br>
            OPTIMAL DEPLOYMENT: ${s.bestFor}<br>
            COLOR REPOSITORIES: ${s.colors.join(' | ')}
          </div>

          <!-- Quick Action Buttons for Touch/Mobile -->
          <div class="crt-quick-btns">
            <button class="crt-quick-btn" onclick="executeTermCmd('help')">الأوامر [help]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('info')">المواصفات [info]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('colors')">الألوان [colors]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('matrix')">المصفوفة [matrix]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('styles')">نمط عشوائي [styles]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('exit')">الموسوعة [exit]</button>
          </div>

          <!-- Terminal Output Log -->
          <div id="crtOutputLog" style="margin-top: 1rem; line-height: 1.5; min-height: 120px;"></div>

          <!-- Active Prompt -->
          <div class="crt-input-line" style="display: flex; align-items: center; gap: 8px; margin-top: 1.25rem;">
            <span style="color: #33FF33;">root@mainframe:~$</span>
            <input type="text" class="crt-input" id="crtCommandLine" placeholder="اكتب أمراً هنا (help, info, colors, styles, clear)..." autofocus>
          </div>

          <!-- Attributed Seal -->
          <div style="margin-top: 4rem; display: flex; align-items: center; gap: 1rem; border-top: 1px solid rgba(51, 255, 51, 0.3); padding-top: 1.5rem;">
            <div class="author-seal"><span>🏛️</span></div>
            <div>
              <strong style="color: #33FF33; display: block;">أ. طارق ابوعشي</strong>
              <span style="font-size: 0.8rem; opacity: 0.8;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function initCrtTerminalScripts(s) {
    const termInput = document.getElementById('crtCommandLine');
    const termOutput = document.getElementById('crtOutputLog');

    window.executeTermCmd = function(cmd) {
      if (termOutput) handleTermCommand(cmd, termOutput, s);
    };

    if (termInput && termOutput) {
      termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const cmd = termInput.value.trim().toLowerCase();
          termInput.value = '';
          handleTermCommand(cmd, termOutput, s);
        }
      });
    }
  }

  // =========================================================================
  // TEMPLATE 3: SWISS INTERNATIONAL POSTER ARCHITECTURE
  // =========================================================================
  function renderSwissPosterArchitecture(s) {
    return `
      <div class="swiss-poster-layout">
        <div class="swiss-poster-inner">
          <div class="swiss-grid-header">
            <div>
              <div style="font-size: 1rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">
                INTERNATIONAL TYPOGRAPHIC ARCHIVE // BASEL 1957
              </div>
              <h1 style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; margin: 0.5rem 0 0;">
                ${s.nameEn.toUpperCase()}
              </h1>
              <div style="font-size: 1.5rem; font-weight: 800; color: #D90429; margin-top: 0.5rem;">
                ${s.nameAr}
              </div>
            </div>
            <div class="swiss-giant-num">#${String(s.num).padStart(3, '0')}</div>
          </div>

          <div style="margin-bottom: 2rem;">
            <button class="mock-btn" style="background: #D90429; color: #FFF; border-radius: 0; font-weight: 800;" onclick="toggleSwissGridLines()">
              📐 تبديل إظهار خطوط الشبكة الاثني عشرية (Key: G)
            </button>
          </div>

          <div class="swiss-columns-grid">
            <div>
              <h3 style="font-size: 1.35rem; font-weight: 900; margin: 0 0 1rem; border-bottom: 2px solid #000; padding-bottom: 0.5rem;">
                البيان التأسيسي والنظام
              </h3>
              <p style="font-size: 1.05rem; line-height: 1.7; margin: 0;">
                ${s.traits}
              </p>
              <div style="margin-top: 1.5rem; font-size: 0.95rem; border-left: 3px solid #D90429; padding-left: 1rem;">
                <strong>المجال الأمثل:</strong> ${s.bestFor}
              </div>
            </div>

            <div>
              <div class="swiss-photo-frame">
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Swiss Architecture">
              </div>
              <div style="font-size: 0.8rem; font-weight: 700; margin-top: 0.5rem; color: #666;">
                FIG 1.0 // ARCHITECTURAL GEOMETRY & ASYMMETRICAL TENSION
              </div>
            </div>

            <div>
              <h3 style="font-size: 1.35rem; font-weight: 900; margin: 0 0 1rem; border-bottom: 2px solid #000; padding-bottom: 0.5rem;">
                الباليتة المقاسة بدقة
              </h3>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${s.colors.map((hex, i) => `
                  <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #CCC; padding-bottom: 4px;">
                    <span style="font-family: monospace; font-weight: 700;">CHANNEL ${i+1}: ${hex}</span>
                    <div style="width: 24px; height: 24px; background: ${hex}; border: 1px solid #000;"></div>
                  </div>
                `).join('')}
              </div>
              <div style="margin-top: 1.5rem;">
                <div style="font-size: 0.82rem; color: #666;">الخط المعتمد:</div>
                <code style="font-weight: 800; font-size: 1rem;">${s.font}</code>
              </div>
            </div>
          </div>

          <!-- Attributed Seal -->
          <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: center; padding-top: 2rem;">
            <div class="author-seal"><span>🏛️</span></div>
            <div style="text-align: right;">
              <strong style="display: block; font-size: 1.15rem; color: #0A0A0A;">أ. طارق ابوعشي</strong>
              <span style="font-size: 0.85rem; color: #666;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // TEMPLATE 4: HAUTE COUTURE EDITORIAL MAGAZINE
  // =========================================================================
  function renderEditorialMagazineLayout(s) {
    return `
      <div class="editorial-magazine-layout">
        <div class="editorial-inner">
          <header class="editorial-masthead">
            <div class="editorial-issue-line">
              VOLUME IV • ISSUE 08 • AUTUMN / WINTER MONOGRAPH • ARCHETYPE #${s.num}
            </div>
            <h1>CHRONICLE HAUTE</h1>
            <div style="font-size: 1.25rem; font-style: italic; color: #991B1B; margin-top: 0.5rem;">
              ${s.nameAr} — ${s.nameEn}
            </div>
          </header>

          <article class="editorial-hero-spread">
            <div>
              <h2 style="font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 900; line-height: 1.2; margin: 0 0 1.5rem;">
                فلسفة النقاء والترف البصري في صياغة المساحات الرفيعة
              </h2>
              <div class="editorial-drop-cap" style="font-size: 1.15rem; line-height: 1.8; color: #2D2D2D;">
                ${s.traits} يُعد هذا التوجه خياراً استثنائياً لتصميم (${s.bestFor}) حيث تذوب التفاصيل الزائدة لتفسح المجال لسيادة الخط الرفيع والخامة الأصيلة.
              </div>
            </div>

            <div>
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" alt="Editorial Architecture" style="width: 100%; height: 440px; object-fit: cover; border: 1px solid #D4AF37;">
              <div style="font-size: 0.78rem; text-align: center; margin-top: 0.5rem; font-style: italic; color: #777;">
                THE HAUTE COLLECTION // ARCHITECTURAL & TYPOGRAPHIC ARCHIVE
              </div>
            </div>
          </article>

          <div class="editorial-pull-quote">
            "الأناقة الحقيقية ليست لفت الأنظار بالضجيج، بل البقاء في الذاكرة بوقار البساطة وعمق التكوين."
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; margin-top: 3.5rem; border-top: 1px solid #E5E5E5; padding-top: 2.5rem;">
            <div>
              <h4 style="font-size: 1.2rem; margin: 0 0 0.5rem; font-style: italic;">التناغم اللوني</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #555;">باليتة راقية تضم ${s.colors.join('، ')} تتكامل بتدرجات بالغة الرقة والوقار.</p>
            </div>
            <div>
              <h4 style="font-size: 1.2rem; margin: 0 0 0.5rem; font-style: italic;">التيبوغرافي المعتمد</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #555;">خطوط سيريف فاخرة: <code>${s.font}</code> تمنح القارئ تجربة مطالعة أدبية رفيعة.</p>
            </div>
            <div>
              <h4 style="font-size: 1.2rem; margin: 0 0 0.5rem; font-style: italic;">الحقبة والمنشأ</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #555;">${s.era} ضمن مسار ${s.catAr} الخالد في سجلات التصميم العالمي.</p>
            </div>
          </div>

          <!-- Attributed Seal -->
          <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: center; padding-top: 4rem;">
            <div class="author-seal"><span>🏛️</span></div>
            <div style="text-align: right;">
              <strong style="display: block; font-size: 1.15rem; color: #1A1A1A;">أ. طارق ابوعشي</strong>
              <span style="font-size: 0.85rem; color: #777;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // TEMPLATE 5: NEO-BRUTALIST RAW DEVELOPER PLATFORM
  // =========================================================================
  function renderNeoBrutalistRawPlatform(s) {
    return `
      <div class="brutalist-raw-layout">
        <div class="brutal-ticker">
          <div class="ticker-track">
            ★ ${s.nameAr} ★ ${s.nameEn.toUpperCase()} ★ ARCHETYPE #${s.num} ★ 100% UNCOMPROMISING UI ★ HARD SHADOWS ★ TAREQ ABU ASHEE ★
          </div>
        </div>

        <div class="brutal-hero-block">
          <div class="brutal-sticker">NO CORPORATE FLUFF ⚡</div>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4.2rem); font-weight: 900; line-height: 1.1; margin: 0 0 1rem;">
            ${s.nameAr}
          </h1>
          <div style="font-size: 1.2rem; font-weight: 700; color: #000; margin-bottom: 1.5rem;">
            ${s.nameEn} // ${s.era}
          </div>
          <p style="font-size: 1.15rem; font-weight: 600; line-height: 1.6; margin: 0 0 2rem; max-width: 800px;">
            ${s.traits}
          </p>

          <div class="brutal-code-box">
            <div style="color: #FFE600; margin-bottom: 0.5rem;">// CORE CSS PHYSICS:</div>
            <code>${s.css}</code>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="mock-btn" style="background: #000; color: #FFF; border: 3.5px solid #000; box-shadow: 4px 4px 0px #FFF; font-weight: 900; padding: 0.85rem 1.8rem; border-radius: 0;" onclick="alert('انطلق مع نمط: ${s.nameAr}')">
              🚀 ابدأ البناء بهذا النمط
            </button>
            <button class="mock-btn" style="background: #FF5E94; color: #000; border: 3.5px solid #000; box-shadow: 4px 4px 0px #000; font-weight: 900; padding: 0.85rem 1.8rem; border-radius: 0;" onclick="alert('مجال التطبيق: ${s.bestFor}')">
              🎯 مجالات الاستخدام
            </button>
          </div>
        </div>

        <div style="max-width: 1200px; margin: 3rem auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          <div style="background: #00E5FF; border: 3.5px solid #000; box-shadow: 6px 6px 0px #000; padding: 1.75rem;">
            <h3 style="font-weight: 900; font-size: 1.4rem; margin: 0 0 0.5rem;">حدود غليظة 3.5px</h3>
            <p style="font-weight: 600; line-height: 1.5; margin: 0;">تفصل العناصر بوضوح قاطع وبدون أي تدرجات ناعمة مضللة.</p>
          </div>
          <div style="background: #FFE600; border: 3.5px solid #000; box-shadow: 6px 6px 0px #000; padding: 1.75rem;">
            <h3 style="font-weight: 900; font-size: 1.4rem; margin: 0 0 0.5rem;">ظلال 0-Blur صلبة</h3>
            <p style="font-weight: 600; line-height: 1.5; margin: 0;">ظلال مسقطة بزوايا حادة 45 درجة تمنح الأزرار إحساساً ميكانيكياً ملموساً.</p>
          </div>
          <div style="background: #FF5E94; border: 3.5px solid #000; box-shadow: 6px 6px 0px #000; padding: 1.75rem;">
            <h3 style="font-weight: 900; font-size: 1.4rem; margin: 0 0 0.5rem;">ألوان عالية التردد</h3>
            <p style="font-weight: 600; line-height: 1.5; margin: 0;">${s.colors.join(' | ')} تشحن الواجهة بطاقة بصرية استثنائية.</p>
          </div>
        </div>

        <!-- Attributed Seal -->
        <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: center; padding-top: 3rem;">
          <div class="author-seal"><span>🏛️</span></div>
          <div style="text-align: right;">
            <strong style="display: block; font-size: 1.15rem; color: #000;">أ. طارق ابوعشي</strong>
            <span style="font-size: 0.85rem; font-weight: 700; color: #444;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // TEMPLATE 6: NEO-ASIRI HERITAGE CULTURAL PLATFORM
  // =========================================================================
  function renderNeoAsiriHeritagePlatform(s) {
    return `
      <div class="asiri-heritage-layout">
        <div class="asiri-frieze-banner"></div>

        <header class="mock-nav asiri-crenellation">
          <div class="mock-brand">
            <div class="mock-logo-box" style="background: #423229; border: 2px solid #D62828;">🏔️</div>
            <div class="mock-brand-text">
              <h2 style="color: #FDFDF8;">روح عسير | ASEER HERITAGE</h2>
              <span style="color: #F59E0B;">منصة التراث والسياحة الثقافية الفاخرة</span>
            </div>
          </div>
          <div class="mock-nav-actions">
            <button class="mock-btn mock-btn-primary" style="background: #D62828; border: 2px solid #F59E0B;" onclick="alert('حياكم الله في عسير الأصالة والكرم!')">
              حجز تجربة تراثية
            </button>
          </div>
        </header>

        <section class="asiri-hero-tower">
          <div style="display: inline-block; padding: 4px 12px; background: #D62828; color: #FFF; font-weight: 700; font-size: 0.85rem; border-radius: 4px; margin-bottom: 1rem;">
            🇸🇦 تراث وطني أصيل مسجل في اليونسكو
          </div>
          <h1 style="font-size: clamp(2.4rem, 4.5vw, 4rem); font-weight: 900; line-height: 1.2; margin: 0 0 1.25rem; color: #FDFDF8;">
            أصالة القط العسيري وفخامة العمارة الشامخة في قمم السروات
          </h1>
          <p style="font-size: 1.25rem; line-height: 1.8; color: #E5D5C5; max-width: 850px; margin: 0 0 2rem;">
            ${s.traits}
          </p>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 2rem; border-top: 1px solid #5A4739; padding-top: 1.5rem;">
            <div>
              <h3 style="font-size: 2.2rem; color: #F59E0B; margin: 0;">3,000+</h3>
              <div style="font-size: 0.85rem; color: #D5C5B5;">متر فوق سطح البحر</div>
            </div>
            <div>
              <h3 style="font-size: 2.2rem; color: #16A34A; margin: 0;">12</h3>
              <div style="font-size: 0.85rem; color: #D5C5B5;">قرية تراثية موثقة</div>
            </div>
            <div>
              <h3 style="font-size: 2.2rem; color: #D62828; margin: 0;">100%</h3>
              <div style="font-size: 0.85rem; color: #D5C5B5;">نقوش قط أصلية</div>
            </div>
            <div>
              <h3 style="font-size: 2.2rem; color: #1D4ED8; margin: 0;">24/7</h3>
              <div style="font-size: 0.85rem; color: #D5C5B5;">ضيافة وكرم جنوبي</div>
            </div>
          </div>
        </section>

        <!-- Attributed Seal -->
        <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: center; padding-top: 4rem;">
          <div class="author-seal"><span>🏛️</span></div>
          <div style="text-align: right;">
            <strong style="display: block; font-size: 1.15rem; color: #F59E0B;">أ. طارق ابوعشي</strong>
            <span style="font-size: 0.85rem; color: #D5C5B5;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // TEMPLATE 7: TACTICAL CYBERPUNK HUD CONSOLE
  // =========================================================================
  function renderCyberpunkHudPlatform(s) {
    return `
      <div style="min-height: 100vh; background: #05050A; color: #00FFCC; font-family: 'JetBrains Mono', monospace; padding: 2rem;">
        <div class="cyber-scanlines"></div>
        <div class="cyber-crosshair"></div>

        <div style="max-width: 1300px; margin: 0 auto; position: relative; z-index: 10;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #00FFCC; padding-bottom: 1rem; margin-bottom: 2rem;">
            <div>
              <div style="font-size: 0.8rem; color: #FF0055; letter-spacing: 2px;">NEURAL DEFENSE GRID // V4.19</div>
              <h1 style="font-size: 2.5rem; margin: 0.25rem 0 0; text-shadow: 0 0 10px #00FFCC;">${s.nameEn.toUpperCase()}</h1>
              <div style="font-size: 1.2rem; color: #FFF;">${s.nameAr}</div>
            </div>
            <div style="text-align: right;">
              <span style="display: inline-block; padding: 4px 10px; background: rgba(0,255,204,0.1); border: 1px solid #00FFCC; font-size: 0.85rem;">STATUS: OPERATIONAL</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
            <div style="border: 1px solid #00FFCC; padding: 1.5rem; background: rgba(0, 255, 204, 0.03);">
              <div style="color: #FF0055; font-size: 0.85rem; margin-bottom: 0.75rem;">[TACTICAL RADAR FREQUENCY]</div>
              <canvas id="cyberRadarCanvas" width="400" height="200" style="width: 100%; height: 200px; background: #000;"></canvas>
            </div>
            <div style="border: 1px solid #00FFCC; padding: 1.5rem; background: rgba(0, 255, 204, 0.03); line-height: 1.8;">
              <div style="color: #00FFCC; font-weight: 700; margin-bottom: 0.75rem; border-bottom: 1px dashed #00FFCC; padding-bottom: 0.4rem;">
                SYSTEM TELEMETRY LOGS:
              </div>
              <div>> ARCHETYPE_ID: #${s.num} [LOADED]</div>
              <div>> TRAITS: ${s.traits}</div>
              <div>> FIELD_OF_USE: ${s.bestFor}</div>
              <div>> CIPHER_CHANNELS: ${s.colors.join(' | ')}</div>
              <div>> THREAT_INTERCEPT: 0 ACTIVE BREACHES</div>
            </div>
          </div>

          <!-- Attributed Seal -->
          <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: center; padding-top: 3rem; border-top: 1px solid rgba(0,255,204,0.3);">
            <div class="author-seal"><span>🏛️</span></div>
            <div style="text-align: right;">
              <strong style="display: block; font-size: 1.15rem; color: #00FFCC;">أ. طارق ابوعشي</strong>
              <span style="font-size: 0.85rem; color: #94A3B8;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function initCyberpunkScripts(s) {
    const radarCanvas = document.getElementById('cyberRadarCanvas');
    if (radarCanvas) {
      const ctx = radarCanvas.getContext('2d');
      let angle = 0;
      function drawRadar() {
        ctx.fillStyle = 'rgba(0, 5, 10, 0.2)';
        ctx.fillRect(0, 0, radarCanvas.width, radarCanvas.height);

        const cx = radarCanvas.width / 2;
        const cy = radarCanvas.height / 2;
        const r = 70;

        ctx.strokeStyle = '#00FFCC';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.arc(cx, cy, r / 2, 0, Math.PI * 2);
        ctx.stroke();

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

  // =========================================================================
  // TEMPLATE 8: DEFAULT HIGH-FIDELITY BENTO TECH PLATFORM
  // =========================================================================
  function renderDefaultBentoPlatform(s) {
    const cat = s.cat || 'modern-ui';
    const assets = CATEGORY_ASSETS[cat] || CATEGORY_ASSETS['modern-ui'];

    return `
      <header class="mock-nav">
        <a href="#hero" class="mock-brand">
          <div class="mock-logo-box">🏛️</div>
          <div class="mock-brand-text">
            <h2>${s.nameEn.toUpperCase()}</h2>
            <span>${s.nameAr} // #${s.num}</span>
          </div>
        </a>
        <div class="mock-nav-actions">
          <button class="mock-btn mock-btn-primary" onclick="alert('تم تفعيل نمط ${s.nameAr}')">استكشاف المنظومة</button>
        </div>
      </header>

      <section class="mock-hero" id="hero">
        <div class="mock-hero-content">
          <div class="mock-badge">
            <span>✨</span>
            <span>${s.era} // ${s.catAr}</span>
          </div>
          <h1 class="mock-hero-title">${s.nameAr}</h1>
          <p class="mock-hero-subtitle">${s.traits}</p>
          <div class="mock-hero-actions">
            <button class="mock-btn mock-btn-primary" onclick="alert('انطلق مع ${s.nameAr}')">بدء التجربة</button>
            <button class="mock-btn mock-btn-secondary" onclick="alert('مجال الاستخدام: ${s.bestFor}')">مجالات التطبيق</button>
          </div>
        </div>
        <div class="mock-hero-visual">
          <img src="${assets.heroImg}" alt="${s.nameAr}" class="mock-hero-img">
        </div>
      </section>

      <section class="mock-features-section">
        <div class="mock-section-header">
          <h2>المعايير الهندسية والفيزيائية</h2>
          <p>${s.bestFor}</p>
        </div>
        <div class="mock-features-grid">
          <div class="mock-card">
            <div class="mock-card-icon">🔤</div>
            <h3>الخط والتيبوغرافي</h3>
            <p><code>${s.font}</code></p>
          </div>
          <div class="mock-card">
            <div class="mock-card-icon">🎨</div>
            <h3>الباليتة الخماسية</h3>
            <p>${s.colors.join(' | ')}</p>
          </div>
          <div class="mock-card">
            <div class="mock-card-icon">⚙️</div>
            <h3>كود الـ CSS</h3>
            <code style="font-size: 0.8rem;">${s.css}</code>
          </div>
        </div>
      </section>

      <!-- Attributed Seal -->
      <footer style="padding: 4rem 2rem 5rem; text-align: center; border-top: 1px solid var(--theme-border, rgba(255,255,255,0.1));">
        <div class="mock-manifesto-author">
          <div class="author-seal"><span>🏛️</span></div>
          <div style="text-align: right;">
            <strong style="display: block; font-size: 1.15rem; color: var(--theme-accent, #3B82F6);">أ. طارق ابوعشي</strong>
            <span style="font-size: 0.85rem; opacity: 0.85;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
          </div>
        </div>
      </footer>
    `;
  }

  // Terminal Command Logic
  function handleTermCommand(cmd, logEl, s) {
    let response = '';
    switch (cmd) {
      case 'help':
        response = `AVAILABLE COMMANDS:\n- info    : عرض بطاقة النمط\n- colors  : باليتة الألوان بالقيم الست عشرية\n- styles  : التبديل لنمط عشوائي\n- matrix  : كشف مصفوفة الذاكرة\n- clear   : مسح الشاشة\n- exit    : العودة للموسوعة الرئيسية`;
        break;
      case 'info':
        response = `STYLE_SPEC // ID: ${s.id} | NAME: ${s.nameAr} | ERA: ${s.era}\nTRAITS: ${s.traits}\nBEST_FOR: ${s.bestFor}`;
        break;
      case 'colors':
        response = `ACTIVE_PALETTE:\n${s.colors.map((c, i) => `[C${i+1}] ${c}`).join('\n')}`;
        break;
      case 'matrix':
        response = `01000001 01010011 01000101 01000101 01010010\nSYSTEM INTEGRITY: 100% OPERATIONAL // NO FAULTS FOUND.`;
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

  window.toggleSwissGridLines = function () {
    const overlay = document.querySelector('.swiss-grid-overlay');
    if (overlay) {
      const isVisible = overlay.style.display !== 'none';
      overlay.style.display = isVisible ? 'none' : 'grid';
      playBeep(isVisible ? 400 : 800);
    } else {
      alert('تم تطبيق نظام الشبكة الاثني عشرية الصارمة على عناصر المحتوى.');
    }
  };

  // Initial Run
  applyStyleToViewport(currentStyle);
  renderInspectorHud();

})();
