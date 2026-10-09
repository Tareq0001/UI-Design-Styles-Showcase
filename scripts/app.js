// UI Design Styles Showcase - Interactive Application Engine

(function () {
  'use strict';

  // Application State
  const state = {
    currentThemeId: 'neo-asiri',
    currentScenario: 'ecommerce',
    currentLang: 'ar',
    isCompareMode: false,
    compareThemeAId: 'neo-asiri',
    compareThemeBId: 'swiss-international',
    sfxEnabled: true,
    qty: 1,
    isPlaying: false,
    sliderVal: 68,
    toggleState: true
  };

  // Web Audio Context for Tactile SFX
  let audioCtx = null;
  function playClickSfx(pitch = 600, type = 'sine') {
    if (!state.sfxEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      // Audio not permitted or supported
    }
  }

  // Waveform Visualizer Animation
  let waveAnimId = null;
  function startWaveformAnim(canvasEl) {
    if (!canvasEl) return;
    const ctx = canvasEl.getContext('2d');
    let phase = 0;

    function renderWave() {
      const w = canvasEl.width = canvasEl.offsetWidth || 300;
      const h = canvasEl.height = 48;
      ctx.clearRect(0, 0, w, h);

      const activeTheme = DESIGN_STYLES.find(s => s.id === state.currentThemeId);
      const accent = activeTheme ? activeTheme.accent : '#6366F1';

      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      const bars = 28;
      const step = w / bars;
      for (let i = 0; i < bars; i++) {
        const x = i * step + step / 2;
        let barH = state.isPlaying 
          ? Math.sin(phase + i * 0.4) * 16 + Math.cos(phase * 1.5 + i * 0.2) * 10 + 12
          : Math.sin(i * 0.5) * 4 + 6;
        barH = Math.max(4, Math.abs(barH));
        ctx.moveTo(x, (h / 2) - barH / 2);
        ctx.lineTo(x, (h / 2) + barH / 2);
      }
      ctx.stroke();

      if (state.isPlaying) phase += 0.08;
      waveAnimId = requestAnimationFrame(renderWave);
    }

    if (waveAnimId) cancelAnimationFrame(waveAnimId);
    renderWave();
  }

  // Toast Notification
  function showToast(message) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    playClickSfx(880, 'triangle');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Copy to Clipboard Utility
  function copyText(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(successMsg);
  }

  // Render Selector Track
  function renderSelectorTrack() {
    const track = document.getElementById('selectorTrack');
    if (!track) return;
    track.innerHTML = '';

    DESIGN_STYLES.forEach((style) => {
      const pill = document.createElement('button');
      pill.className = `selector-pill ${style.id === state.currentThemeId ? 'active' : ''}`;
      pill.setAttribute('data-id', style.id);

      const isAr = state.currentLang === 'ar';
      const name = isAr ? style.nameAr : style.nameEn;

      pill.innerHTML = `
        <span class="pill-dot" style="background-color: ${style.accent};"></span>
        <span class="pill-icon">${style.icon}</span>
        <span>${name}</span>
      `;

      pill.addEventListener('click', () => {
        state.currentThemeId = style.id;
        playClickSfx(520);
        updateAllViews();
      });

      track.appendChild(pill);
    });
  }

  // Render Active Scenario inside a Given Stage Canvas
  function renderScenarioContent(themeId, scenario, containerEl) {
    if (!containerEl) return;
    const theme = DESIGN_STYLES.find(t => t.id === themeId) || DESIGN_STYLES[0];
    const scenarioData = SCENARIOS_CONTENT[themeId] || SCENARIOS_CONTENT['neo-asiri'];
    const isAr = state.currentLang === 'ar';

    let html = '';

    if (scenario === 'ecommerce') {
      const item = scenarioData.ecommerce;
      html = `
        <div class="archetype-card">
          ${themeId === 'neo-asiri' ? '<div class="qatt-ribbon"></div>' : ''}
          <div class="card-header-row">
            <span class="tag-badge">${item.tag}</span>
            <span class="tag-badge" style="opacity: 0.85;">${item.badge}</span>
          </div>
          <div>
            <h2 class="card-title">${item.title}</h2>
            <p class="card-desc">${item.desc}</p>
          </div>
          <div class="card-footer-row">
            <div>
              <div class="price-display">${item.price}</div>
              <div style="font-size: 0.75rem; opacity: 0.8; margin-top: 2px;">${item.status}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div class="qty-stepper">
                <button class="qty-btn" id="qtyMinusBtn">-</button>
                <span class="qty-val" id="qtyDisplay">${state.qty}</span>
                <button class="qty-btn" id="qtyPlusBtn">+</button>
              </div>
              <button class="btn-primary" id="buyActionBtn">
                <span>${isAr ? '🛒 إضافة للسلة' : '🛒 Add to Cart'}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    } else if (scenario === 'saas') {
      const saas = scenarioData.saas;
      html = `
        <div class="archetype-card">
          ${themeId === 'neo-asiri' ? '<div class="qatt-ribbon"></div>' : ''}
          <div class="card-header-row">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #10B981; display: inline-block;"></span>
              <span class="tag-badge">${isAr ? 'حالة المنظومة: نشطة' : 'SYSTEM STATUS: ONLINE'}</span>
            </div>
            <label class="switch-control">
              <input type="checkbox" id="liveToggle" ${state.toggleState ? 'checked' : ''}>
              <span class="switch-slider"></span>
            </label>
          </div>
          <h2 class="card-title">${saas.title}</h2>
          <div class="metrics-grid">
            <div class="metric-box">
              <span class="metric-lbl">${saas.metric1Label}</span>
              <span class="metric-num">${saas.metric1Val}</span>
            </div>
            <div class="metric-box">
              <span class="metric-lbl">${saas.metric2Label}</span>
              <span class="metric-num">${saas.metric2Val}</span>
            </div>
            <div class="metric-box">
              <span class="metric-lbl">${saas.metric3Label}</span>
              <span class="metric-num">${saas.metric3Val}</span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.25rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; opacity: 0.85;">
              <span>${isAr ? 'معدل المعالجة اللحظية' : 'Real-time Processing Throughput'}</span>
              <span>${state.sliderVal}%</span>
            </div>
            <div class="telemetry-progress-track">
              <div class="telemetry-progress-fill" style="width: ${state.sliderVal}%;"></div>
            </div>
          </div>
          <div style="margin-top: 0.5rem; display: flex; justify-content: flex-end;">
            <button class="btn-primary" id="saasActionBtn">
              <span>${saas.actionBtn}</span>
            </button>
          </div>
        </div>
      `;
    } else if (scenario === 'media') {
      const media = scenarioData.media;
      html = `
        <div class="archetype-card">
          ${themeId === 'neo-asiri' ? '<div class="qatt-ribbon"></div>' : ''}
          <div class="player-layout">
            <div class="player-album-art">
              <span>${theme.icon}</span>
            </div>
            <div class="player-track-info">
              <span class="tag-badge" style="align-self: flex-start;">${isAr ? 'المسار الصوتي' : 'CURRENT TRACK'}</span>
              <h2 class="card-title" style="margin: 0; font-size: 1.35rem;">${media.track}</h2>
              <div style="font-size: 0.88rem; opacity: 0.8;">${media.artist}</div>
              <div style="font-size: 0.75rem; opacity: 0.7; font-family: monospace;">${media.time}</div>
            </div>
          </div>
          <div style="margin-top: 0.75rem;">
            <canvas class="waveform-canvas" id="waveformCanvas"></canvas>
          </div>
          <div class="card-footer-row" style="margin-top: 0.25rem;">
            <span style="font-size: 0.8rem; opacity: 0.8;">${isAr ? 'صوت عالي الدقة (Lossless 96kHz)' : 'Lossless Hi-Res Audio'}</span>
            <div class="player-controls">
              <button class="btn-primary" id="playPauseBtn" style="padding: 0.6rem 1.4rem;">
                <span id="playIcon">${state.isPlaying ? (isAr ? '⏸ إيقاف مؤقت' : '⏸ Pause') : (isAr ? '▶ تشغيل' : '▶ Play')}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    containerEl.innerHTML = html;

    // Attach Event Listeners to Scenario Interactive Elements
    const qtyMinus = containerEl.querySelector('#qtyMinusBtn');
    const qtyPlus = containerEl.querySelector('#qtyPlusBtn');
    const qtyDisplay = containerEl.querySelector('#qtyDisplay');
    const buyBtn = containerEl.querySelector('#buyActionBtn');

    if (qtyMinus && qtyPlus && qtyDisplay) {
      qtyMinus.addEventListener('click', () => {
        if (state.qty > 1) {
          state.qty--;
          qtyDisplay.textContent = state.qty;
          playClickSfx(420);
        }
      });
      qtyPlus.addEventListener('click', () => {
        state.qty++;
        qtyDisplay.textContent = state.qty;
        playClickSfx(580);
      });
    }

    if (buyBtn) {
      buyBtn.addEventListener('click', () => {
        playClickSfx(750);
        showToast(isAr ? `✓ تم حجز ${state.qty} من القطعة بنجاح!` : `✓ Successfully added ${state.qty} items!`);
      });
    }

    const saasBtn = containerEl.querySelector('#saasActionBtn');
    const liveToggle = containerEl.querySelector('#liveToggle');
    if (saasBtn) {
      saasBtn.addEventListener('click', () => {
        playClickSfx(840);
        showToast(isAr ? '✓ تم تنفيذ الإجراء وتحديث المقاييس اللحظية!' : '✓ Metrics updated successfully!');
      });
    }
    if (liveToggle) {
      liveToggle.addEventListener('change', (e) => {
        state.toggleState = e.target.checked;
        playClickSfx(state.toggleState ? 640 : 380);
      });
    }

    const playPauseBtn = containerEl.querySelector('#playPauseBtn');
    const waveCanvas = containerEl.querySelector('#waveformCanvas');
    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        state.isPlaying = !state.isPlaying;
        playClickSfx(state.isPlaying ? 700 : 350);
        const iconSpan = playPauseBtn.querySelector('#playIcon');
        if (iconSpan) {
          iconSpan.textContent = state.isPlaying ? (isAr ? '⏸ إيقاف مؤقت' : '⏸ Pause') : (isAr ? '▶ تشغيل' : '▶ Play');
        }
      });
    }
    if (waveCanvas) {
      startWaveformAnim(waveCanvas);
    }
  }

  // Render Architectural Inspector
  function renderInspector(themeId) {
    const theme = DESIGN_STYLES.find(t => t.id === themeId) || DESIGN_STYLES[0];
    const isAr = state.currentLang === 'ar';

    const titleEl = document.getElementById('inspectorTitle');
    const badgeEl = document.getElementById('inspectorBadge');
    const summaryEl = document.getElementById('inspectorSummary');
    const swatchesEl = document.getElementById('swatchesGrid');
    const bestForEl = document.getElementById('bestForBox');
    const avoidEl = document.getElementById('avoidBox');
    const typoEl = document.getElementById('typoDetails');
    const codeEl = document.getElementById('cssSnippetCode');

    if (titleEl) titleEl.textContent = `${theme.icon} ${isAr ? theme.nameAr : theme.nameEn}`;
    if (badgeEl) badgeEl.textContent = isAr ? theme.badge : theme.badgeEn;
    if (summaryEl) summaryEl.textContent = isAr ? theme.summaryAr : theme.summaryEn;

    if (bestForEl) {
      bestForEl.innerHTML = `<strong>${isAr ? '✓ مثالي لـ:' : '✓ Best For:'}</strong> ${isAr ? theme.rules.bestForAr : theme.rules.bestForEn}`;
    }
    if (avoidEl) {
      avoidEl.innerHTML = `<strong>${isAr ? '✕ تجنبه في:' : '✕ Avoid For:'}</strong> ${isAr ? theme.rules.avoidAr : theme.rules.avoidEn}`;
    }

    if (typoEl) {
      typoEl.innerHTML = `
        <div style="font-size: 0.85rem; margin-bottom: 0.25rem;">
          <span style="color: var(--studio-muted);">${isAr ? 'عائلة الخطوط:' : 'Font Family:'}</span>
          <code style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; color: #A5B4FC;">${isAr ? theme.typography.familyAr : theme.typography.familyEn}</code>
        </div>
        <div style="font-size: 0.8rem; color: #CBD5E1;">${isAr ? theme.typography.scale : theme.typography.scaleEn}</div>
      `;
    }

    if (swatchesEl) {
      swatchesEl.innerHTML = '';
      theme.tokens.forEach(tok => {
        const item = document.createElement('div');
        item.className = 'swatch-item';
        item.title = isAr ? 'انقر لنسخ كود اللون' : 'Click to copy HEX code';
        item.innerHTML = `
          <div class="swatch-color-box" style="background-color: ${tok.hex};"></div>
          <div class="swatch-info">
            <div class="swatch-name">${tok.name}</div>
            <div class="swatch-role">${tok.role}</div>
          </div>
          <div class="swatch-hex">${tok.hex}</div>
        `;
        item.addEventListener('click', () => {
          copyText(tok.hex, isAr ? `✓ تم نسخ كود اللون ${tok.hex}` : `✓ Copied HEX ${tok.hex}`);
        });
        swatchesEl.appendChild(item);
      });
    }

    if (codeEl) {
      codeEl.textContent = theme.cssSnippet;
    }
  }

  // Render Micro Components Lab
  function renderMicroLab(themeId) {
    const labContainer = document.getElementById('componentsLab');
    if (!labContainer) return;

    // Apply active theme to the lab or ensure children inherit styles
    const theme = DESIGN_STYLES.find(t => t.id === themeId);
    const isAr = state.currentLang === 'ar';

    const labPrimaryBtn = document.getElementById('labPrimaryBtn');
    const labInput = document.getElementById('labInput');
    const labRange = document.getElementById('labRange');
    const labRangeVal = document.getElementById('labRangeVal');

    if (labPrimaryBtn) {
      labPrimaryBtn.textContent = isAr ? 'زر إجراء حي' : 'Action Button';
      labPrimaryBtn.onclick = () => {
        playClickSfx(620);
        showToast(isAr ? '✓ استجابة نقر متوافقة مع خصائص النمط!' : '✓ Button click registered!');
      };
    }

    if (labRange && labRangeVal) {
      labRange.value = state.sliderVal;
      labRangeVal.textContent = state.sliderVal;
      labRange.oninput = (e) => {
        state.sliderVal = e.target.value;
        labRangeVal.textContent = state.sliderVal;
        // update scenario progress bar if in saas
        const progFill = document.querySelector('.telemetry-progress-fill');
        if (progFill) progFill.style.width = `${state.sliderVal}%`;
      };
    }
  }

  // Update All Views
  function updateAllViews() {
    renderSelectorTrack();

    const stageCanvas = document.getElementById('stageCanvas');
    if (stageCanvas) {
      // Remove all theme classes and add the active one
      DESIGN_STYLES.forEach(s => stageCanvas.classList.remove(`theme-${s.id}`));
      stageCanvas.classList.add(`theme-${state.currentThemeId}`);
      renderScenarioContent(state.currentThemeId, state.currentScenario, stageCanvas);
    }

    renderInspector(state.currentThemeId);
    renderMicroLab(state.currentThemeId);

    // If in compare mode, update both panels
    if (state.isCompareMode) {
      renderCompareMode();
    }
  }

  // Render Compare Mode
  function renderCompareMode() {
    const compareAEl = document.getElementById('compareStageA');
    const compareBEl = document.getElementById('compareStageB');

    if (compareAEl) {
      DESIGN_STYLES.forEach(s => compareAEl.classList.remove(`theme-${s.id}`));
      compareAEl.classList.add(`theme-${state.compareThemeAId}`);
      renderScenarioContent(state.compareThemeAId, state.currentScenario, compareAEl);
    }

    if (compareBEl) {
      DESIGN_STYLES.forEach(s => compareBEl.classList.remove(`theme-${s.id}`));
      compareBEl.classList.add(`theme-${state.compareThemeBId}`);
      renderScenarioContent(state.compareThemeBId, state.currentScenario, compareBEl);
    }
  }

  // Populate Compare Select Dropdowns
  function setupCompareSelects() {
    const selectA = document.getElementById('selectCompareA');
    const selectB = document.getElementById('selectCompareB');
    if (!selectA || !selectB) return;

    selectA.innerHTML = '';
    selectB.innerHTML = '';

    const isAr = state.currentLang === 'ar';

    DESIGN_STYLES.forEach(style => {
      const name = `${style.icon} ${isAr ? style.nameAr : style.nameEn}`;
      const optA = new Option(name, style.id, false, style.id === state.compareThemeAId);
      const optB = new Option(name, style.id, false, style.id === state.compareThemeBId);
      selectA.add(optA);
      selectB.add(optB);
    });

    selectA.onchange = (e) => {
      state.compareThemeAId = e.target.value;
      playClickSfx(480);
      renderCompareMode();
    };

    selectB.onchange = (e) => {
      state.compareThemeBId = e.target.value;
      playClickSfx(540);
      renderCompareMode();
    };
  }

  // Language Switcher Logic
  function setupLanguageToggle() {
    const langBtn = document.getElementById('langToggleBtn');
    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
      state.currentLang = state.currentLang === 'ar' ? 'en' : 'ar';
      document.body.dir = state.currentLang === 'ar' ? 'rtl' : 'ltr';
      langBtn.textContent = state.currentLang === 'ar' ? 'English' : 'عربي';

      // Update static text elements
      updateStaticUIText();
      setupCompareSelects();
      updateAllViews();
      playClickSfx(660);
    });
  }

  function updateStaticUIText() {
    const isAr = state.currentLang === 'ar';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N_DICT[key]) {
        el.textContent = isAr ? I18N_DICT[key].ar : I18N_DICT[key].en;
      }
    });
  }

  const I18N_DICT = {
    appTitle: { ar: 'استوديو أنماط التصميم البصري', en: 'Archetype UI Studio' },
    appBadge: { ar: '12 نموذجاً جذرياً', en: '12 Radical Archetypes' },
    compareModeBtn: { ar: 'مقارنة نمطين جنباً إلى جنب', en: 'Compare Archetypes' },
    studioModeBtn: { ar: 'عرض الاستوديو الفردي', en: 'Studio Workbench' },
    tabEcommerce: { ar: '🛒 بطاقة متجر فاخرة', en: '🛒 E-Commerce Showcase' },
    tabSaas: { ar: '⚡ لوحة تحكم SaaS', en: '⚡ SaaS Action Console' },
    tabMedia: { ar: '🎵 مشغل وسائط تفاعلي', en: '🎵 Haptic Media Player' },
    labTitle: { ar: 'معمل العناصر الدقيقة (Micro-Components Lab)', en: 'Micro-Components Playground' },
    inspectorTitleHeader: { ar: 'التشريح الهندسي والفلسفة البصرية', en: 'Architectural Anatomy & Principles' },
    colorPaletteTitle: { ar: 'لوحة الألوان الأساسية (انقر للنسخ)', en: 'Core Color Palette (Click to Copy)' },
    typographyTitle: { ar: 'التيبوغرافي ونظام الخطوط', en: 'Typography & Geometry System' },
    cssTokensTitle: { ar: 'أكواد CSS المعتمدة للنمط', en: 'Archetype CSS Token System' },
    copyCssBtn: { ar: 'نسخ CSS', en: 'Copy CSS' }
  };

  // Scenario Switcher Setup
  function setupScenarioTabs() {
    document.querySelectorAll('.scenario-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.scenario-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.currentScenario = tab.getAttribute('data-scenario');
        playClickSfx(560);

        const stageCanvas = document.getElementById('stageCanvas');
        if (stageCanvas) {
          renderScenarioContent(state.currentThemeId, state.currentScenario, stageCanvas);
        }
        if (state.isCompareMode) {
          renderCompareMode();
        }
      });
    });
  }

  // Mode Switcher (Studio vs Compare)
  function setupModeSwitcher() {
    const compareBtn = document.getElementById('compareModeBtn');
    const workbenchEl = document.getElementById('studioWorkbench');
    const compareEl = document.getElementById('compareContainer');

    if (!compareBtn || !workbenchEl || !compareEl) return;

    compareBtn.addEventListener('click', () => {
      state.isCompareMode = !state.isCompareMode;
      playClickSfx(720);

      const isAr = state.currentLang === 'ar';
      if (state.isCompareMode) {
        compareBtn.classList.add('active');
        compareBtn.textContent = isAr ? 'العودة للاستوديو' : 'Back to Studio';
        workbenchEl.style.display = 'none';
        compareEl.classList.add('active');
        renderCompareMode();
      } else {
        compareBtn.classList.remove('active');
        compareBtn.textContent = isAr ? 'مقارنة نمطين جنباً إلى جنب' : 'Compare Archetypes';
        workbenchEl.style.display = 'grid';
        compareEl.classList.remove('active');
        updateAllViews();
      }
    });
  }

  // Audio Toggle Button
  function setupAudioToggle() {
    const sfxBtn = document.getElementById('sfxToggleBtn');
    if (!sfxBtn) return;

    sfxBtn.addEventListener('click', () => {
      state.sfxEnabled = !state.sfxEnabled;
      sfxBtn.textContent = state.sfxEnabled ? '🔊 SFX' : '🔇 Muted';
      sfxBtn.style.opacity = state.sfxEnabled ? '1' : '0.6';
      if (state.sfxEnabled) playClickSfx(600);
    });
  }

  // Copy CSS Button
  function setupCopyCss() {
    const btn = document.getElementById('copyCssBtn');
    const codeEl = document.getElementById('cssSnippetCode');
    if (!btn || !codeEl) return;

    btn.addEventListener('click', () => {
      const isAr = state.currentLang === 'ar';
      copyText(codeEl.textContent, isAr ? '✓ تم نسخ كود CSS للنمط بنجاح!' : '✓ Archetype CSS copied to clipboard!');
    });
  }

  // Initialize Application
  window.addEventListener('DOMContentLoaded', () => {
    setupLanguageToggle();
    setupScenarioTabs();
    setupModeSwitcher();
    setupAudioToggle();
    setupCopyCss();
    setupCompareSelects();

    // Initial render
    updateAllViews();
  });

})();
