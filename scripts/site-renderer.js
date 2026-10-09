/**
 * Standalone Website Rendering Engine for 300 Design Archetypes
 * UI Design Styles Showcase - Developed for أ. طارق ابوعشي
 * 
 * 16 Radically Distinct Architectural Paradigms:
 * 1. Windows 95 Vintage OS (Interactive Virtual Desktop)
 * 2. Phosphor CRT Terminal (Interactive Mainframe CLI)
 * 3. Swiss International Typographic Archive (12-Col Rigor)
 * 4. Haute Couture Editorial Magazine (Drop-Caps & Masthead)
 * 5. Neo-Brutalist Raw Developer Platform (Marquee & 0-Blur)
 * 6. Neo-Asiri Heritage Cultural Monument (Qatt Friezes & Towers)
 * 7. Islamic & Andalusian Palace Architecture (Lattice & Arches)
 * 8. Art Deco Luxury Salon (Sunburst & Ziggurat)
 * 9. Bauhaus Dessau Workshop (Primary Geometries & Tension)
 * 10. Memphis Milano 80s Postmodern (Squiggles & Confetti)
 * 11. Japanese Wabi-Sabi Zen Sanctuary (Vertical & Ensō)
 * 12. Technical Blueprint CAD Drafting (Cyan Grid & Specs)
 * 13. Dieter Rams / Braun Functional Industrial (Dials & Grilles)
 * 14. Steampunk & Victorian Clockwork (Gears & Parchment)
 * 15. Y2K Cyber Chrome Pop (Liquid Mercury & Stars)
 * 16. Pixel Art & 8-Bit Retro Arcade (Stepped Pixels & CRT)
 * 
 * 100% Respectful Attributions:
 * - Golden Emblem Seal (🏛️) for Tareq Abu Ashee (Zero stock photo avatars)
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

  // =========================================================================
  // 7. MASTER ARCHITECTURAL ROUTER (16 DISTINCT VISUAL PARADIGMS)
  // =========================================================================
  function renderSiteBody(s) {
    const container = document.getElementById('siteViewport');
    if (!container) return;

    const id = s.id.toLowerCase();
    const cat = (s.cat || '').toLowerCase();

    // 1. Vintage Operating System (Windows 95, Macintosh, System 7)
    if (id.includes('win95') || id.includes('windows') || id.includes('macintosh') || id.includes('retro-desktop')) {
      container.innerHTML = renderWindows95FullscreenDesktop(s);
      initWin95DesktopScripts(s);
      return;
    }

    // 2. Phosphor CRT Terminal (CRT, Terminal, MS-DOS, Pip-Boy, Unix)
    if (id.includes('terminal') || id.includes('crt') || id.includes('msdos') || id.includes('unix') || id.includes('pipboy') || id.includes('mainframe') || id.includes('teletext')) {
      container.innerHTML = renderCrtFullscreenTerminal(s);
      initCrtTerminalScripts(s);
      return;
    }

    // 3. Swiss International Typographic Archive (Swiss, International, Grid)
    if (id.includes('swiss') || id.includes('helvetica') || id.includes('international-strict')) {
      container.innerHTML = renderSwissPosterArchitecture(s);
      return;
    }

    // 4. Bauhaus Dessau Workshop (Bauhaus, Constructivism, Suprematism, De Stijl)
    if (id.includes('bauhaus') || id.includes('constructiv') || id.includes('supremat') || id.includes('de-stijl') || id.includes('malevich')) {
      container.innerHTML = renderBauhausWorkshopPlatform(s);
      return;
    }

    // 5. Islamic & Andalusian Palace Architecture (Andalusian, Moorish, Islamic, Zellige, Ottoman, Persian)
    if (id.includes('andalus') || id.includes('islamic') || id.includes('zellige') || id.includes('moroccan') || id.includes('ottoman') || id.includes('persian') || id.includes('arabesque')) {
      container.innerHTML = renderAndalusianPalacePlatform(s);
      return;
    }

    // 6. Neo-Asiri Heritage Cultural Monument (Asiri, Najdi, Saudi Heritage)
    if (id.includes('asiri') || id.includes('najdi') || id.includes('farasan') || id.includes('yamani') || (cat === 'cultural' && id.includes('saudi'))) {
      container.innerHTML = renderNeoAsiriHeritagePlatform(s);
      return;
    }

    // 7. Art Deco Luxury Salon (Art Deco, Gatsby, Roaring 20s, Luxury Gold)
    if (id.includes('art-deco') || id.includes('deco') || id.includes('gatsby') || id.includes('broadway') || id.includes('roaring') || (cat === 'luxury' && id.includes('gold'))) {
      container.innerHTML = renderArtDecoSalonPlatform(s);
      return;
    }

    // 8. Memphis Milano 80s Postmodern Studio (Memphis, 80s Pop, Milano, Postmodern)
    if (id.includes('memphis') || id.includes('milano') || id.includes('postmodern-irony') || id.includes('80s-pop')) {
      container.innerHTML = renderMemphisMilanoStudio(s);
      return;
    }

    // 9. Japanese Wabi-Sabi Zen Sanctuary (Zen, Wabi-Sabi, Muji, Ukiyo-e, Origami)
    if (id.includes('zen') || id.includes('wabi') || id.includes('muji') || id.includes('ukiyo') || id.includes('origami') || id.includes('japanese')) {
      container.innerHTML = renderJapaneseZenSanctuary(s);
      return;
    }

    // 10. Technical Blueprint CAD Drafting (Blueprint, Schematic, PCB, Engineering)
    if (id.includes('blueprint') || id.includes('schematic') || id.includes('cad') || id.includes('circuit') || id.includes('pcb') || id.includes('drafting')) {
      container.innerHTML = renderTechnicalBlueprintCad(s);
      return;
    }

    // 11. Dieter Rams / Braun Functional Industrial (Dieter Rams, Braun, German Industrial)
    if (id.includes('dieter') || id.includes('rams') || id.includes('braun') || id.includes('sony-walkman') || id.includes('siemens')) {
      container.innerHTML = renderDieterRamsBraunConsole(s);
      return;
    }

    // 12. Steampunk & Victorian Clockwork (Steampunk, Victorian, Brass, Clockwork)
    if (id.includes('steampunk') || id.includes('victorian') || id.includes('clockwork') || id.includes('brass')) {
      container.innerHTML = renderSteampunkClockworkAtelier(s);
      return;
    }

    // 13. Y2K Cyber Chrome Pop (Y2K, Chrome, Metallic, Cyber-Pop, Liquid Metal)
    if (id.includes('y2k') || id.includes('chrome') || id.includes('vaporwave') || id.includes('synthwave') || id.includes('liquid-metal')) {
      container.innerHTML = renderY2kCyberChromePop(s);
      return;
    }

    // 14. Pixel Art & Retro Arcade (Pixel, 8-Bit, 16-Bit, Arcade, Gameboy, Tamagotchi)
    if (id.includes('pixel') || id.includes('8bit') || id.includes('16bit') || id.includes('arcade') || id.includes('tamagotchi') || id.includes('gameboy')) {
      container.innerHTML = renderPixelArtRetroArcade(s);
      return;
    }

    // 15. Haute Couture Editorial Magazine (Editorial, Vogue, Publishing, Broadsheet, Tabloid)
    if (cat === 'editorial' || id.includes('vogue') || id.includes('editorial') || id.includes('broadsheet') || id.includes('magazine') || id.includes('oxford') || id.includes('monograph')) {
      container.innerHTML = renderEditorialMagazineLayout(s);
      return;
    }

    // 16. Tactical Cyberpunk & Sci-Fi HUD (Cyberpunk, Sci-Fi, HUD, Matrix, Space)
    if (cat === 'sci-fi' || id.includes('cyber') || id.includes('hud') || id.includes('tactical') || id.includes('matrix') || id.includes('radar') || id.includes('space')) {
      container.innerHTML = renderCyberpunkHudPlatform(s);
      initCyberpunkScripts(s);
      return;
    }

    // 17. Biophilic Organic Sanctuary (Biophilic, Solarpunk, Botanical, Nature, Rainforest)
    if (cat === 'nature' || id.includes('biophilic') || id.includes('solarpunk') || id.includes('botanical') || id.includes('organic') || id.includes('rainforest')) {
      container.innerHTML = renderBiophilicVoronoiSanctuary(s);
      return;
    }

    // 18. Neo-Brutalist Raw Developer Platform (Default Modern UI)
    container.innerHTML = renderNeoBrutalistRawPlatform(s);
  }

  // Author Seal HTML Component (Dignified Golden Seal, Zero Stock Photo Avatars)
  function getAuthorSealHtml() {
    return `
      <div style="display: flex; align-items: center; gap: 1.25rem; justify-content: center; padding-top: 3.5rem;">
        <div class="author-seal"><span>🏛️</span></div>
        <div style="text-align: right;">
          <strong style="display: block; font-size: 1.15rem; color: var(--theme-accent, #3B82F6);">أ. طارق ابوعشي</strong>
          <span style="font-size: 0.85rem; opacity: 0.85;">مبتكر ومصمم استوديو أنماط التصميم البصري</span>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 1: WINDOWS 95 RETRO OS
  // =========================================================================
  function renderWindows95FullscreenDesktop(s) {
    return `
      <div class="win95-desktop-fullscreen" id="win95Desktop">
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
  // PARADIGM 2: PHOSPHOR CRT TERMINAL
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

          <div class="crt-quick-btns">
            <button class="crt-quick-btn" onclick="executeTermCmd('help')">الأوامر [help]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('info')">المواصفات [info]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('colors')">الألوان [colors]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('matrix')">المصفوفة [matrix]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('styles')">نمط عشوائي [styles]</button>
            <button class="crt-quick-btn" onclick="executeTermCmd('exit')">الموسوعة [exit]</button>
          </div>

          <div id="crtOutputLog" style="margin-top: 1rem; line-height: 1.5; min-height: 120px;"></div>

          <div class="crt-input-line" style="display: flex; align-items: center; gap: 8px; margin-top: 1.25rem;">
            <span style="color: #33FF33;">root@mainframe:~$</span>
            <input type="text" class="crt-input" id="crtCommandLine" placeholder="اكتب أمراً هنا (help, info, colors, styles, clear)..." autofocus>
          </div>

          ${getAuthorSealHtml()}
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
  // PARADIGM 3: SWISS INTERNATIONAL POSTER
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

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 4: ISLAMIC & ANDALUSIAN PALACE ARCHITECTURE
  // =========================================================================
  function renderAndalusianPalacePlatform(s) {
    return `
      <div class="andalusian-palace-layout">
        <svg class="andalusian-lattice-svg" viewBox="0 0 100 100">
          <pattern id="islamicStar" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25 0 L32 18 L50 25 L32 32 L25 50 L18 32 L0 25 L18 18 Z" fill="none" stroke="#C59B27" stroke-width="1"/>
            <circle cx="25" cy="25" r="7" fill="none" stroke="#C59B27" stroke-width="0.8"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#islamicStar)"/>
        </svg>

        <header style="max-width: 1200px; margin: 0 auto; padding: 2rem; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border: 2px solid #C59B27; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🕌</div>
            <div>
              <h2 style="margin: 0; font-size: 1.35rem; color: #C59B27;">ديوان العمارة الأندلسية والإسلامية</h2>
              <span style="font-size: 0.8rem; opacity: 0.8;">${s.nameEn} // #${s.num}</span>
            </div>
          </div>
          <button class="mock-btn" style="background: #C59B27; color: #0B252C; font-weight: 800; border-radius: 4px;" onclick="alert('استكشف روائع القصور والمقرنصات الأندلسية')">استكشاف الزخارف</button>
        </header>

        <div class="andalusian-arch-frame">
          <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
            <div style="display: inline-block; padding: 4px 16px; border: 1px solid #C59B27; color: #C59B27; border-radius: 20px; font-size: 0.85rem; margin-bottom: 1rem;">
              قوس حدوة الحصان والمقرنصات الخالدة
            </div>
            <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; margin: 0 0 1rem; color: #F8F5EE; line-height: 1.2;">
              ${s.nameAr}
            </h1>
            <p style="font-size: 1.25rem; line-height: 1.9; color: #D5E2E6; margin: 0;">
              ${s.traits}
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; border-top: 1px solid rgba(197, 155, 39, 0.3); padding-top: 2.5rem;">
            <div style="border: 1px solid #C59B27; padding: 1.75rem; border-radius: 8px; background: rgba(11, 37, 44, 0.6);">
              <h3 style="color: #C59B27; margin: 0 0 0.5rem; font-size: 1.2rem;">التناغم اللوني والزليج</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; opacity: 0.85;">${s.colors.join(' • ')} تعكس خضرة الرياض وذهب القباب وفيروز الخزف.</p>
            </div>
            <div style="border: 1px solid #C59B27; padding: 1.75rem; border-radius: 8px; background: rgba(11, 37, 44, 0.6);">
              <h3 style="color: #C59B27; margin: 0 0 0.5rem; font-size: 1.2rem;">الخط العربي الأصيل</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; opacity: 0.85;">يعتمد خط <code>${s.font}</code> المتناسق مع رونق النقوش الكوفية والأندلسية.</p>
            </div>
            <div style="border: 1px solid #C59B27; padding: 1.75rem; border-radius: 8px; background: rgba(11, 37, 44, 0.6);">
              <h3 style="color: #C59B27; margin: 0 0 0.5rem; font-size: 1.2rem;">المجال الأمثل للتطبيق</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; opacity: 0.85;">${s.bestFor}</p>
            </div>
          </div>
        </div>

        ${getAuthorSealHtml()}
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 5: NEO-ASIRI HERITAGE CULTURAL MONUMENT
  // =========================================================================
  function renderNeoAsiriHeritagePlatform(s) {
    return `
      <div class="asiri-heritage-layout">
        <!-- SVG Al-Qatt Al-Asiri Traditional Frieze (Sawtooth Triangles & Chevrons) -->
        <svg style="width: 100%; height: 24px; display: block;" viewBox="0 0 800 24" preserveAspectRatio="none">
          <pattern id="qattFrieze" width="48" height="24" patternUnits="userSpaceOnUse">
            <polygon points="0,24 24,0 48,24" fill="#D62828"/>
            <polygon points="6,24 24,6 42,24" fill="#F59E0B"/>
            <polygon points="12,24 24,12 36,24" fill="#16A34A"/>
            <polygon points="18,24 24,18 30,24" fill="#1D4ED8"/>
            <circle cx="24" cy="21" r="2" fill="#FDFDF8"/>
          </pattern>
          <rect width="100%" height="24" fill="url(#qattFrieze)"/>
        </svg>

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

        ${getAuthorSealHtml()}
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 6: ART DECO LUXURY SALON
  // =========================================================================
  function renderArtDecoSalonPlatform(s) {
    return `
      <div class="artdeco-salon-layout">
        <div class="artdeco-card-stepped">
          <div class="artdeco-corner-accent artdeco-tl"></div>
          <div class="artdeco-corner-accent artdeco-tr"></div>
          <div class="artdeco-corner-accent artdeco-bl"></div>
          <div class="artdeco-corner-accent artdeco-br"></div>

          <div style="text-align: center; margin-bottom: 2.5rem;">
            <!-- Radiating Art Deco Sunburst SVG -->
            <svg style="width: 140px; height: 70px; margin: 0 auto 1.5rem;" viewBox="0 0 140 70">
              <path d="M70 70 L0 10 M70 70 L20 0 M70 70 L50 0 M70 70 L70 0 M70 70 L90 0 M70 70 L120 0 M70 70 L140 10" stroke="#D4AF37" stroke-width="1.5"/>
              <polygon points="55,70 70,45 85,70" fill="#D4AF37"/>
            </svg>

            <div style="font-size: 0.85rem; letter-spacing: 4px; color: #D4AF37; text-transform: uppercase;">
              EXPOSITION INTERNATIONALE DES ARTS DÉCORATIFS // PARIS 1925
            </div>
            <h1 style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; margin: 0.5rem 0; color: #F3EBD8; letter-spacing: 2px;">
              ${s.nameEn.toUpperCase()}
            </h1>
            <div style="font-size: 1.5rem; color: #D4AF37; font-style: italic;">
              ${s.nameAr} — [نمط #${s.num}]
            </div>
          </div>

          <div style="border-top: 1px solid #D4AF37; border-bottom: 1px solid #D4AF37; padding: 2rem 0; margin: 2rem 0; text-align: center;">
            <p style="font-size: 1.25rem; line-height: 1.9; max-width: 820px; margin: 0 auto; color: #E8DEC8;">
              "${s.traits}"
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center;">
            <div style="border: 1px solid #D4AF37; padding: 1.5rem; background: rgba(212, 175, 55, 0.04);">
              <div style="color: #D4AF37; font-size: 0.8rem; letter-spacing: 2px;">PALETTE D'OR</div>
              <div style="font-size: 1rem; margin-top: 0.5rem;">${s.colors.join(' • ')}</div>
            </div>
            <div style="border: 1px solid #D4AF37; padding: 1.5rem; background: rgba(212, 175, 55, 0.04);">
              <div style="color: #D4AF37; font-size: 0.8rem; letter-spacing: 2px;">TYPOGRAPHIE</div>
              <div style="font-size: 1rem; margin-top: 0.5rem;"><code>${s.font}</code></div>
            </div>
            <div style="border: 1px solid #D4AF37; padding: 1.5rem; background: rgba(212, 175, 55, 0.04);">
              <div style="color: #D4AF37; font-size: 0.8rem; letter-spacing: 2px;">DOMAINE D'ÉLITE</div>
              <div style="font-size: 0.95rem; margin-top: 0.5rem;">${s.bestFor}</div>
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 7: BAUHAUS DESSAU WORKSHOP
  // =========================================================================
  function renderBauhausWorkshopPlatform(s) {
    return `
      <div class="bauhaus-workshop-layout">
        <div style="max-width: 1200px; margin: 0 auto;">
          <div style="border-bottom: 6px solid #1A1A1A; padding-bottom: 1.5rem; margin-bottom: 2.5rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap;">
            <div>
              <div style="font-size: 0.9rem; font-weight: 900; letter-spacing: 3px;">STAATLICHES BAUHAUS // WEIMAR & DESSAU</div>
              <h1 style="font-size: clamp(2.5rem, 5vw, 4.2rem); font-weight: 900; margin: 0.5rem 0 0; line-height: 1;">
                ${s.nameEn.toUpperCase()}
              </h1>
              <div style="font-size: 1.4rem; font-weight: 800; color: #E63946; margin-top: 0.5rem;">
                ${s.nameAr}
              </div>
            </div>
            <div class="bauhaus-primary-shapes">
              <div class="bauhaus-square" title="Square (الأحمر)"></div>
              <div class="bauhaus-triangle" title="Triangle (الأصفر)"></div>
              <div class="bauhaus-circle" title="Circle (الأزرق)"></div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 3rem; align-items: center;">
            <div style="background: #1A1A1A; color: #F2EFE9; padding: 3rem; border-left: 12px solid #E63946;">
              <h3 style="font-size: 1.5rem; font-weight: 900; margin: 0 0 1rem; color: #F4A261;">
                الشكل يتبع الوظيفة (Form Follows Function)
              </h3>
              <p style="font-size: 1.15rem; line-height: 1.7; margin: 0;">
                ${s.traits}
              </p>
              <div style="margin-top: 2rem; font-size: 0.95rem; border-top: 1px solid #444; padding-top: 1rem;">
                <strong>المجال الأمثل للتطبيق:</strong> ${s.bestFor}
              </div>
            </div>

            <div style="border: 4px solid #1A1A1A; padding: 2rem; background: #FFF;">
              <h4 style="font-size: 1.2rem; font-weight: 900; margin: 0 0 1rem;">الألوان الأولية المعتمدة:</h4>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${s.colors.map(hex => `
                  <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #1A1A1A; padding-bottom: 4px;">
                    <span style="font-family: monospace; font-weight: 700;">${hex}</span>
                    <div style="width: 28px; height: 28px; background: ${hex}; border: 2px solid #1A1A1A;"></div>
                  </div>
                `).join('')}
              </div>
              <div style="margin-top: 1.5rem;">
                <strong>الخط:</strong> <code>${s.font}</code>
              </div>
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 8: MEMPHIS MILANO 80s POSTMODERN
  // =========================================================================
  function renderMemphisMilanoStudio(s) {
    return `
      <div class="memphis-milano-layout">
        <div style="max-width: 1150px; margin: 0 auto;">
          <div class="memphis-card">
            <!-- Memphis Squiggle SVG Header -->
            <svg style="width: 100%; height: 20px; margin-bottom: 1.5rem;" viewBox="0 0 400 20">
              <path d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10 T100 10 T120 10 T140 10 T160 10 T180 10 T200 10 T220 10 T240 10 T260 10 T280 10 T300 10 T320 10 T340 10 T360 10 T380 10 T400 10" fill="none" stroke="#000" stroke-width="4"/>
            </svg>

            <div style="display: inline-block; background: #FF5E94; color: #FFF; border: 3px solid #000; padding: 4px 14px; font-weight: 900; font-size: 0.9rem; transform: rotate(-2deg); margin-bottom: 1rem;">
              ETTORE SOTTSASS // MILANO 1981
            </div>

            <h1 style="font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 900; margin: 0 0 0.5rem; line-height: 1.1;">
              ${s.nameAr}
            </h1>
            <div style="font-size: 1.3rem; font-weight: 800; color: #6366F1; margin-bottom: 1.5rem;">
              ${s.nameEn}
            </div>

            <p style="font-size: 1.2rem; font-weight: 600; line-height: 1.7; margin: 0 0 2rem;">
              ${s.traits}
            </p>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
              <div style="background: #00E5FF; border: 3px solid #000; box-shadow: 5px 5px 0px #000; padding: 1.25rem;">
                <h4 style="margin: 0 0 0.5rem; font-weight: 900;">الباليتة المرحة</h4>
                <div>${s.colors.join(' • ')}</div>
              </div>
              <div style="background: #FFE600; border: 3px solid #000; box-shadow: 5px 5px 0px #000; padding: 1.25rem;">
                <h4 style="margin: 0 0 0.5rem; font-weight: 900;">الخط المعتمد</h4>
                <code>${s.font}</code>
              </div>
              <div style="background: #FF5E94; color: #FFF; border: 3px solid #000; box-shadow: 5px 5px 0px #000; padding: 1.25rem;">
                <h4 style="margin: 0 0 0.5rem; font-weight: 900;">الاستخدام</h4>
                <div style="font-size: 0.9rem;">${s.bestFor}</div>
              </div>
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 9: JAPANESE WABI-SABI ZEN SANCTUARY
  // =========================================================================
  function renderJapaneseZenSanctuary(s) {
    return `
      <div class="japanese-zen-layout">
        <div class="zen-inner-box">
          <!-- Ensō Brush Circle SVG -->
          <svg class="zen-enso-circle" viewBox="0 0 100 100">
            <path d="M50 10 A40 40 0 1 0 85 30" fill="none" stroke="#2B2A27" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
          </svg>

          <div style="text-align: center; max-width: 650px; margin: 0 auto;">
            <div style="font-size: 0.85rem; letter-spacing: 4px; color: #8C8275; margin-bottom: 0.75rem;">
              MA (間) // THE BEAUTY OF IMPERFECTION & STILLNESS
            </div>
            <h1 style="font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; margin: 0 0 1rem; color: #2B2A27; line-height: 1.3;">
              ${s.nameAr}
            </h1>
            <div style="font-size: 1.1rem; color: #8C8275; font-style: italic; margin-bottom: 2rem;">
              ${s.nameEn}
            </div>

            <p style="font-size: 1.15rem; line-height: 2; color: #4A463F; margin: 0 0 3rem;">
              "${s.traits}"
            </p>

            <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 2.5rem;">
              ${s.colors.map(hex => `
                <div style="width: 22px; height: 22px; border-radius: 50%; background: ${hex}; border: 1px solid #D5CFC2;" title="${hex}"></div>
              `).join('')}
            </div>

            <div style="font-size: 0.9rem; color: #8C8275;">
              <strong>المجال الأمثل:</strong> ${s.bestFor}
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 10: TECHNICAL BLUEPRINT CAD DRAFTING
  // =========================================================================
  function renderTechnicalBlueprintCad(s) {
    return `
      <div class="blueprint-cad-layout">
        <div class="blueprint-sheet-border">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid #00D4FF; padding-bottom: 1rem; margin-bottom: 2rem;">
            <div>
              <span style="font-size: 0.8rem; letter-spacing: 2px;">MIL-SPEC // CAD DRAFTING SHEET REF #300-${s.num}</span>
              <h1 style="font-size: 2.5rem; margin: 0.25rem 0 0; color: #FFF;">${s.nameEn.toUpperCase()}</h1>
              <div style="color: #00D4FF; font-size: 1.1rem;">${s.nameAr}</div>
            </div>
            <div style="text-align: right; border: 1px solid #00D4FF; padding: 6px 12px;">
              SCALE: 1:1<br>TOLERANCE: ±0.05mm
            </div>
          </div>

          <!-- Isometric Technical Schematic Wireframe SVG -->
          <div style="border: 1px dashed rgba(0, 212, 255, 0.4); padding: 2rem; margin-bottom: 2rem; background: rgba(0, 212, 255, 0.02);">
            <svg style="width: 100%; height: 180px;" viewBox="0 0 600 180">
              <polygon points="300,20 450,70 300,120 150,70" fill="none" stroke="#00D4FF" stroke-width="1.5"/>
              <line x1="150" y1="70" x2="150" y2="130" stroke="#00D4FF" stroke-width="1.5"/>
              <line x1="450" y1="70" x2="450" y2="130" stroke="#00D4FF" stroke-width="1.5"/>
              <line x1="300" y1="120" x2="300" y2="180" stroke="#00D4FF" stroke-width="1.5"/>
              <polygon points="300,180 450,130 450,70 300,120" fill="rgba(0, 212, 255, 0.05)" stroke="#00D4FF" stroke-width="1.5"/>
              <polygon points="300,180 150,130 150,70 300,120" fill="rgba(0, 212, 255, 0.08)" stroke="#00D4FF" stroke-width="1.5"/>
              <!-- Dimension markers -->
              <text x="310" y="50" fill="#00D4FF" font-size="10" font-family="monospace">DIM A: 240.5mm</text>
              <text x="160" y="150" fill="#00D4FF" font-size="10" font-family="monospace">THICKNESS: 3.5mm</text>
            </svg>
          </div>

          <div style="margin-bottom: 1.5rem; line-height: 1.7;">
            <strong>المواصفة الهندسية:</strong> ${s.traits}<br>
            <strong>مجال الاستخدام:</strong> ${s.bestFor}
          </div>

          <div class="blueprint-title-block">
            <div>
              <strong>DRAWING TITLE:</strong> ${s.nameAr}<br>
              <strong>CSS RULESET:</strong> <code>${s.css}</code>
            </div>
            <div>
              <strong>FONT:</strong> ${s.font}<br>
              <strong>ERA:</strong> ${s.era}
            </div>
            <div>
              <strong>CHANNELS:</strong><br>${s.colors.join(' ')}
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 11: DIETER RAMS / BRAUN FUNCTIONAL INDUSTRIAL
  // =========================================================================
  function renderDieterRamsBraunConsole(s) {
    return `
      <div class="dieter-rams-layout">
        <div class="rams-chassis">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #D0D0CE; padding-bottom: 1.5rem; margin-bottom: 2rem;">
            <div>
              <div style="font-size: 0.82rem; font-weight: 700; color: #888; letter-spacing: 2px;">BRAUN DESIGN // LESS, BUT BETTER</div>
              <h1 style="font-size: 2.2rem; margin: 0.35rem 0 0; font-weight: 800; color: #1A1A1A;">${s.nameEn}</h1>
              <div style="font-size: 1.15rem; color: #555; margin-top: 0.25rem;">${s.nameAr}</div>
            </div>
            <button style="width: 28px; height: 28px; border-radius: 50%; background: #FF6B00; border: none; cursor: pointer; box-shadow: 0 2px 6px rgba(255,107,0,0.4);" title="زر التشغيل البرتقالي الكلاسيكي"></button>
          </div>

          <!-- Perforated Speaker Grille -->
          <div class="rams-speaker-grille">
            ${Array(70).fill('<div class="rams-grille-dot"></div>').join('')}
          </div>

          <!-- Knurled Rotary Dial Widget -->
          <div style="margin: 2.5rem 0; text-align: center;">
            <div class="rams-dial-knob" title="مقبض الراديو الدوار المصنوع من الألمنيوم المطفي">
              <div style="width: 6px; height: 24px; background: #FF6B00; border-radius: 3px;"></div>
            </div>
            <div style="font-size: 0.78rem; font-weight: 700; color: #888; margin-top: 0.75rem;">ROTARY FREQUENCY TUNER</div>
          </div>

          <div style="background: #FFF; border: 1px solid #D0D0CE; border-radius: 8px; padding: 2rem; margin-top: 2rem;">
            <p style="font-size: 1.1rem; line-height: 1.7; margin: 0 0 1.25rem; color: #333;">
              ${s.traits}
            </p>
            <div style="font-size: 0.9rem; color: #666;">
              <strong>المجال المعتمد:</strong> ${s.bestFor}
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 12: STEAMPUNK & VICTORIAN CLOCKWORK
  // =========================================================================
  function renderSteampunkClockworkAtelier(s) {
    return `
      <div class="steampunk-clockwork-layout">
        <div class="steampunk-brass-box">
          <div style="text-align: center; margin-bottom: 2.5rem;">
            <!-- Interlocking Brass Clockwork Gears SVG -->
            <svg style="width: 120px; height: 120px; margin: 0 auto 1.5rem;" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#C88D42" stroke-width="8" stroke-dasharray="8 4"/>
              <circle cx="50" cy="50" r="14" fill="#C88D42"/>
              <circle cx="50" cy="50" r="6" fill="#251710"/>
            </svg>

            <div style="font-size: 0.85rem; letter-spacing: 3px; color: #C88D42;">VICTORIAN HOROLOGICAL WORKSHOP // LONDON 1888</div>
            <h1 style="font-size: clamp(2.4rem, 4.5vw, 4rem); font-weight: 900; margin: 0.5rem 0; color: #E6C894;">
              ${s.nameAr}
            </h1>
            <div style="font-size: 1.25rem; font-style: italic; color: #C88D42;">${s.nameEn}</div>
          </div>

          <div style="border-top: 2px solid #C88D42; border-bottom: 2px solid #C88D42; padding: 2rem 0; margin: 2rem 0; text-align: center;">
            <p style="font-size: 1.2rem; line-height: 1.9; color: #F0DFC0; margin: 0;">
              ${s.traits}
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; text-align: center;">
            <div style="border: 1px solid #C88D42; padding: 1.25rem; background: rgba(200, 141, 66, 0.08);">
              <div style="color: #C88D42; font-size: 0.85rem;">خامات النحاس والبرونز</div>
              <div style="margin-top: 0.5rem;">${s.colors.join(' • ')}</div>
            </div>
            <div style="border: 1px solid #C88D42; padding: 1.25rem; background: rgba(200, 141, 66, 0.08);">
              <div style="color: #C88D42; font-size: 0.85rem;">خط المحارير الكلاسيكية</div>
              <div style="margin-top: 0.5rem;"><code>${s.font}</code></div>
            </div>
            <div style="border: 1px solid #C88D42; padding: 1.25rem; background: rgba(200, 141, 66, 0.08);">
              <div style="color: #C88D42; font-size: 0.85rem;">المجال التطبيقي</div>
              <div style="margin-top: 0.5rem; font-size: 0.9rem;">${s.bestFor}</div>
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 13: Y2K CYBER CHROME POP
  // =========================================================================
  function renderY2kCyberChromePop(s) {
    return `
      <div class="y2k-cyber-pop-layout">
        <div style="max-width: 1100px; margin: 0 auto; text-align: center;">
          <div style="display: inline-block; background: #0A0F29; color: #00FFCC; padding: 4px 14px; border-radius: 20px; font-weight: 800; font-size: 0.85rem; margin-bottom: 1.5rem;">
            ✦ MILLENNIUM CYBER-POP 2000 ✦
          </div>

          <h1 class="y2k-chrome-title">${s.nameEn}</h1>
          <div style="font-size: 1.7rem; font-weight: 900; color: #2563EB; margin-bottom: 2rem;">
            ${s.nameAr}
          </div>

          <div style="background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); border: 2px solid #FFF; border-radius: 24px; padding: 3rem; box-shadow: 0 15px 40px rgba(0,0,0,0.1); margin-bottom: 3rem;">
            <p style="font-size: 1.25rem; line-height: 1.8; color: #1E293B; margin: 0 0 2rem;">
              ${s.traits}
            </p>

            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <button class="mock-btn" style="background: linear-gradient(135deg, #00E5FF, #6366F1); color: #FFF; border-radius: 30px; font-weight: 800; padding: 0.85rem 2rem; border: none;" onclick="alert('انطلق مع نمط الألفية!')">
                💿 تشغيل مشغل الوسائط
              </button>
              <button class="mock-btn" style="background: #FFF; color: #0A0F29; border-radius: 30px; font-weight: 800; padding: 0.85rem 2rem; border: 1px solid #CBD5E1;" onclick="alert('المجال: ${s.bestFor}')">
                ✨ مواصفات النمط
              </button>
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 14: PIXEL ART & RETRO ARCADE
  // =========================================================================
  function renderPixelArtRetroArcade(s) {
    return `
      <div class="pixel-art-arcade-layout">
        <div class="pixel-card-step">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #00FFCC; padding-bottom: 1rem; margin-bottom: 2rem;">
            <div>
              <div style="font-size: 1.1rem; color: #FF0077;">INSERT COIN TO PLAY [CREDITS: 02]</div>
              <h1 style="font-size: 2.8rem; margin: 0.25rem 0 0; color: #FFE600;">${s.nameEn.toUpperCase()}</h1>
              <div style="font-size: 1.4rem; color: #00FFCC;">${s.nameAr}</div>
            </div>
            <div style="font-size: 1.5rem;">❤️❤️❤️</div>
          </div>

          <p style="font-size: 1.35rem; line-height: 1.7; color: #FFF; margin: 0 0 2rem;">
            ${s.traits}
          </p>

          <div style="border: 2px dashed #00FFCC; padding: 1.5rem; margin-bottom: 2rem; background: rgba(0, 255, 204, 0.05); font-size: 1.15rem;">
            <div>SCORE MULTIPLIER: 10X</div>
            <div>COLORS: ${s.colors.join(' | ')}</div>
            <div>BEST_FOR: ${s.bestFor}</div>
          </div>

          <button class="mock-btn" style="background: #FF0077; color: #FFF; font-size: 1.2rem; font-weight: 900; border-radius: 0; padding: 0.75rem 2rem; border: 3px solid #FFE600;" onclick="alert('START GAME!')">
            🕹️ PRESS START BUTTON
          </button>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 15: HAUTE COUTURE EDITORIAL MAGAZINE
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

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 16: TACTICAL CYBERPUNK HUD CONSOLE
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
            </div>
          </div>

          ${getAuthorSealHtml()}
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
  // PARADIGM 17: BIOPHILIC ORGANIC SANCTUARY
  // =========================================================================
  function renderBiophilicVoronoiSanctuary(s) {
    return `
      <div class="biophilic-voronoi-layout">
        <div class="biophilic-blob-card">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <span style="font-size: 2rem;">🌿</span>
            <div>
              <span style="font-size: 0.85rem; letter-spacing: 2px; color: #86EFAC;">REGENERATIVE BIO-ARCHITECTURE LABS</span>
              <h1 style="font-size: clamp(2.2rem, 4vw, 3.8rem); font-weight: 900; margin: 0.25rem 0 0; color: #FFF;">${s.nameAr}</h1>
              <div style="font-size: 1.15rem; color: #86EFAC;">${s.nameEn}</div>
            </div>
          </div>

          <p style="font-size: 1.25rem; line-height: 1.9; color: #D1E7DD; margin: 0 0 2.5rem;">
            ${s.traits}
          </p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: rgba(0,0,0,0.25); border: 1px solid #3F6D54; border-radius: 16px; padding: 1.5rem;">
              <h3 style="color: #86EFAC; font-size: 2rem; margin: 0;">98.4%</h3>
              <div style="font-size: 0.85rem; color: #C2D9CD;">مؤشر نقاء الهواء الحيوي</div>
            </div>
            <div style="background: rgba(0,0,0,0.25); border: 1px solid #3F6D54; border-radius: 16px; padding: 1.5rem;">
              <h3 style="color: #86EFAC; font-size: 2rem; margin: 0;">420 kg</h3>
              <div style="font-size: 0.85rem; color: #C2D9CD;">امتصاص الكربون السنوي</div>
            </div>
            <div style="background: rgba(0,0,0,0.25); border: 1px solid #3F6D54; border-radius: 16px; padding: 1.5rem;">
              <h3 style="color: #86EFAC; font-size: 2rem; margin: 0;">88%</h3>
              <div style="font-size: 0.85rem; color: #C2D9CD;">غطاء نباتي طبيعي مدمج</div>
            </div>
          </div>

          ${getAuthorSealHtml()}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // PARADIGM 18: NEO-BRUTALIST RAW DEVELOPER PLATFORM
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
          <div class="brutal-sticker">RAW CODE & UNAPOLOGETIC UI ⚡</div>
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

        ${getAuthorSealHtml()}
      </div>
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
