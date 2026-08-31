(function () {
  'use strict';

  const FRAME = { width: 1280, height: 820 };
  const subtypeDetails = {
    '中式服装': { copy: '以衣料、轮廓和穿着动作记录中式服装的气质变化。', photoCount: 4 },
    '中式海报': { copy: '把人物放进中式海报的构图与版式里，观察留白如何改变观看距离。', photoCount: 3 },
    '东方材质': { copy: '从纸张、织物与器物表面提取东方材质的触感线索。', photoCount: 2 },
    '面部特写': { copy: '将镜头收近面部，记录身份、目光与细微表情。', photoCount: 3 },
    '目光练习': { copy: '用不同方向的目光建立人物与观看者之间的距离。', photoCount: 2 },
    '身份肖像': { copy: '以稳定的肖像语气确认人物身份，并保留后续变化的空间。', photoCount: 2 },
    '生活片段': { copy: '从生活片段中截取轻微动作，让日常保持连续的呼吸。', photoCount: 3 },
    '安静时刻': { copy: '降低场景音量，把停顿和留白变成影像的一部分。', photoCount: 2 },
    '步伐': { copy: '记录身体移动时的重心、节拍和方向变化。', photoCount: 3 },
    '动作特效': { copy: '让动作留下可见轨迹，观察真实身体与视觉特效的交界。', photoCount: 4 },
    '视线变化': { copy: '通过视线转移改变画面的叙事重心。', photoCount: 3 },
    '光线练习': { copy: '测试光线从侧面、背面和近距离进入人物的方式。', photoCount: 3 },
    '近景': { copy: '缩短镜头与人物之间的距离，让情绪停留在画面前景。', photoCount: 2 },
    '慢动作': { copy: '放慢动作发生的过程，保留身体变化的连续帧。', photoCount: 4 },
    '提示词': { copy: '把提示词作为视觉草图，记录语言如何生成画面方向。', photoCount: 3 },
    '模型测试': { copy: '比较不同模型对人物、材质和光线的回应。', photoCount: 3 },
    '生成过程': { copy: '保留生成过程中的偏差与偶然，让实验本身成为内容。', photoCount: 2 },
    '品牌影像': { copy: '为品牌叙事建立人物影像入口，保持识别度与开放性。', photoCount: 3 },
    '视觉合作': { copy: '记录人物与设计、空间及其他创作媒介的合作关系。', photoCount: 2 },
    '待补充': { copy: '这一分类暂时保留为空位，等待下一组影像进入。', photoCount: 1 },
    '下一组作品': { copy: '把下一组作品的线索先放在这里，等待正式展开。', photoCount: 1 }
  };
  const withSubtypeDetails = (card) => ({ ...card, subtypeDetails: card.subtypes.map((name) => ({ name, ...(subtypeDetails[name] || { copy: `${name} · 这一分类的影像记录。`, photoCount: 1 }) })) });
  const linCards = [
    withSubtypeDetails({ label: '肖像研究', title: '面部与目光', type: '人物肖像', category: '人物肖像', subtypes: ['面部特写', '目光练习', '身份肖像'], color: '#e5527a', copy: '以人物身份为中心的第一组影像。这里将承载最终肖像、拍摄说明与本组作品的视觉语气。' }),
    withSubtypeDetails({ label: '安静档案', title: '安静的档案', type: '日常档案', category: '日常档案', subtypes: ['生活片段', '安静时刻'], color: '#d8d2c8', copy: '用日常姿态和留白保存人物的连续性，让一组照片像一本仍在写作的书。' }),
    withSubtypeDetails({ label: '动态研究', title: '身体在场', type: '动态影像', category: '动态影像', subtypes: ['步伐', '动作特效', '视线变化'], color: '#b5c1c5', copy: '动态、步伐和视线组成一段可被反复进入的动作研究。' }),
    withSubtypeDetails({ label: '东方造型', title: '东方造型', type: '中式', category: '中式', subtypes: ['中式服装', '中式海报', '东方材质'], color: '#c8b8a7', copy: '服装、材质和轮廓为人物提供另一种叙事，不替人物定义，只让她被看见。' }),
    withSubtypeDetails({ label: '电影片段', title: '电影感片段', type: '电影影像', category: '电影影像', subtypes: ['光线练习', '近景', '慢动作'], color: '#31363b', copy: '更暗、更近、更慢的影像章节，记录光线如何改变人物的距离。' }),
    withSubtypeDetails({ label: '生成实验', title: '生成实验', type: 'AI 影像', category: 'AI 影像', subtypes: ['提示词', '模型测试', '生成过程'], color: '#d8e3de', copy: '把模型、提示词与偶然性放入同一张工作台，展示生成过程留下的痕迹。' }),
    withSubtypeDetails({ label: '合作入口', title: '合作入口', type: '合作项目', category: '合作项目', subtypes: ['品牌影像', '视觉合作'], color: '#e1c2ca', copy: '为品牌、影像和其他创作留下清晰入口。联系方式将在素材与项目确认后接入。' }),
    withSubtypeDetails({ label: '下一帧', title: '下一帧', type: '后续计划', category: '后续计划', subtypes: ['待补充', '下一组作品'], color: '#e8e3da', copy: '这里不是结尾，而是下一组人物影像的空位。' })
  ];
  const suOverrides = [
    { title: '苏念安 / 面部与目光', copy: '以苏念安的面部、目光与身份气质为中心的第一组影像。' },
    { title: '苏念安 / 安静档案', copy: '用日常姿态和留白保存苏念安的连续性，让影像保持呼吸。' },
    { title: '苏念安 / 身体在场', copy: '动作、步伐和视线组成苏念安的动态研究。' },
    { title: '苏念安 / 东方造型', copy: '服装、材质和轮廓为苏念安打开另一种叙事。' },
    { title: '苏念安 / 电影片段', copy: '更暗、更近、更慢的影像章节，记录光线与苏念安的距离。' },
    { title: '苏念安 / 生成实验', copy: '把模型、提示词与偶然性放入苏念安的生成工作台。' },
    { title: '苏念安 / 合作入口', copy: '为苏念安的品牌影像、视觉合作和人物项目留下入口。' },
    { title: '苏念安 / 下一帧', copy: '这里不是结尾，而是苏念安下一组人物影像的空位。' }
  ];
  const suCards = linCards.map((card, index) => ({ ...card, ...suOverrides[index], color: ['#cdb7d8', '#d8d2c8', '#b5c1c5', '#c8b8a7', '#31363b', '#d8e3de', '#e1c2ca', '#e8e3da'][index] }));
  const defaultPeople = {
    lin: { id: 'lin', code: 'LIN / JQ', name: '林见秋', englishName: 'LIN JIANQIU', mode: 'IN MOTION', note: '一个持续生长的人物视觉世界。<br />每一帧都是下一次进入的入口。', footer: '© 2026 林见秋', cards: linCards },
    su: { id: 'su', code: 'SU / NA', name: '苏念安', englishName: 'SU NIANAN', mode: 'IN MOTION', note: '一段持续生成的人物视觉记录。<br />每一帧都留下新的进入方式。', footer: '© 2026 苏念安', cards: suCards }
  };

  function clonePeople(source) {
    return JSON.parse(JSON.stringify(source));
  }

  function applyContentOverrides(source, content) {
    const result = clonePeople(source);
    Object.entries(content?.people || {}).forEach(([personId, personOverride]) => {
      const person = result[personId];
      if (!person) return;
      ['englishName', 'mode', 'note', 'footer', 'code'].forEach((key) => {
        if (typeof personOverride[key] === 'string') person[key] = personOverride[key];
      });
      Object.entries(personOverride.cards || {}).forEach(([cardKey, cardOverride]) => {
        const cardIndex = Number(cardKey);
        const card = Number.isInteger(cardIndex) ? person.cards[cardIndex] : person.cards.find((item) => item.label === cardKey || item.title === cardKey);
        if (!card || !cardOverride) return;
        ['label', 'title', 'type', 'category', 'color', 'copy', 'image'].forEach((key) => {
          if (typeof cardOverride[key] === 'string') card[key] = cardOverride[key];
        });
        if (cardOverride.imagePosition && typeof cardOverride.imagePosition === 'object') {
          card.imagePosition = {
            x: Number.isFinite(Number(cardOverride.imagePosition.x)) ? Number(cardOverride.imagePosition.x) : 50,
            y: Number.isFinite(Number(cardOverride.imagePosition.y)) ? Number(cardOverride.imagePosition.y) : 50
          };
        }
        if (cardOverride.subtypes && typeof cardOverride.subtypes === 'object') {
          const subtypeEntries = Object.entries(cardOverride.subtypes);
          card.subtypes = subtypeEntries.map(([name]) => name);
          card.subtypeDetails = subtypeEntries.map(([name, detail]) => {
            const base = subtypeDetails[name] || { copy: `${name} · 这一分类的影像记录。`, photoCount: 0 };
            const photos = Array.isArray(detail?.photos) ? detail.photos : [];
            return { ...base, ...detail, name, photos, photoCount: photos.length };
          });
        }
        if (!card.image) {
          const firstPhoto = card.subtypeDetails?.[0]?.photos?.[0];
          const firstPhotoSource = typeof firstPhoto === 'string' ? firstPhoto : firstPhoto?.src;
          if (firstPhotoSource) card.image = firstPhotoSource;
        }
      });
    });
    return result;
  }

  const people = applyContentOverrides(defaultPeople, window.LIN_GALLERY_DATA);
  let activePersonId = 'lin';
  let cards = people[activePersonId].cards;
  const AUTO_RESUME_DELAY = 2000;
  // Keep the outer cards inside the fixed WebGL viewport so the desktop frame
  // never exposes a hard clipping seam at the left or right edge.
  const ORBIT_RADIUS = 3.65;
  const PHOTO_CAROUSEL_INTERVAL = 4200;
  const ANTIGRAVITY_CONFIG = Object.freeze({
    count: 360,
    color: 0xb73559,
    size: 0.048,
    spreadX: 11.5,
    spreadY: 7.2,
    depth: 2.8,
    opacity: 0.64
  });
  const SILK_VERTEX_SHADER = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const SILK_FRAGMENT_SHADER = `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uHorizonColor;
    uniform vec3 uHighlightColor;
    uniform vec3 uShadowColor;
    uniform float uSpeed;
    uniform float uScale;
    uniform float uRotation;
    uniform float uIntensity;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
    }
    vec2 rotateUv(vec2 uv, float angle) {
      float c = cos(angle); float s = sin(angle);
      return mat2(c, -s, s, c) * uv;
    }
    void main() {
      vec2 uv = rotateUv((vUv - 0.5) * uScale, uRotation);
      float t = uTime * uSpeed;
      float n = noise(uv * 2.4 + vec2(t * .12, -t * .08));
      float waveA = sin(uv.x * 4.4 + uv.y * 2.1 + sin(uv.y * 3.2 + t) * 1.4 + t);
      float waveB = sin(uv.x * 2.2 - uv.y * 5.1 + cos(uv.x * 2.6 - t * .7) * 1.2 - t * .58);
      float wave = waveA * .62 + waveB * .38 + (n - .5) * .55;
      float ridge = smoothstep(.18, .92, abs(wave));
      float highlight = smoothstep(.56, .98, wave) * ridge;
      float shadow = smoothstep(.52, 1.0, -wave) * ridge;
      vec3 color = mix(uHorizonColor, uShadowColor, shadow * .94);
      color = mix(color, uHighlightColor, highlight * .88);
      color = mix(uHorizonColor, color, clamp(uIntensity, 0.0, 1.0));
      color += (n - .5) * .035;
      gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }
  `;
  let autoResumeTimer = null;
  let photoCarouselTimer = null;
  let photoTransitionTimer = null;
  let photoImageCleanupTimer = null;
  let heroIntroTimeline = null;
  let heroIdleTimeline = null;
  let inlineHistory = [];
  const localEditorHost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
  let editorKey = localEditorHost ? (sessionStorage.getItem('lin-gallery-edit-key') || '') : '';
  const editorRequested = localEditorHost && new URLSearchParams(window.location.search).get('edit') === '1';
  let developerMode = false;

  const frame = document.getElementById('desktop-frame');
  const shell = document.querySelector('.gallery-shell');
  const canvas = document.getElementById('gallery-canvas');
  const loading = document.querySelector('[data-loading]');
  const fallback = document.querySelector('[data-fallback]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const state = { progress: 0, target: 0, velocity: 0, last: performance.now(), down: false, pointerX: 0, pointerStartX: 0, pointerStartY: 0, pointerHitIndex: -1, dragScale: 1, dragSensitivity: .008, hoveredIndex: -1, cursorNdcX: 0, cursorNdcY: 0, particlePointerX: 0, particlePointerY: 0, particleTargetX: 0, particleTargetY: 0, auto: !reducedMotion.matches, activePanel: null, opener: null, switchProgress: 1, statusIndex: -1, closingPanel: false, panelTimeline: null, detailCardIndex: -1, detailSubtypeIndex: 0, detailPhotoIndex: 0, detailDrag: null, coverDrag: null, activeCardIndex: -1 };
  const sceneState = { camera: null, cardGroup: null, raycaster: null, pointer: null, THREE: null, antigravity: null, renderer: null, floor: null, silk: null };
  const ui = {
    title: document.querySelector('[data-current-title]'), count: document.querySelector('[data-current-count]'), mediaStatus: document.querySelector('[data-current-media-status]'), edgeIndex: document.querySelector('[data-edge-index]'), edgeRange: document.querySelector('[data-edge-range]'), menuPanel: document.querySelector('[data-menu-panel]'), menuButton: document.querySelector('[data-open-menu]'), menuList: document.querySelector('[data-menu-list]'), detailPanel: document.querySelector('[data-detail-panel]'), detailAurora: document.querySelector('[data-detail-aurora]'), aboutPanel: document.querySelector('[data-about-panel]'), contactPanel: document.querySelector('[data-contact-panel]'), personPanel: document.querySelector('[data-person-panel]'), personButton: document.querySelector('[data-open-person]'), personList: document.querySelector('[data-person-list]'), personCode: document.querySelector('[data-current-person-code]'), personName: document.querySelector('[data-current-person-name]'), personFooter: document.querySelector('[data-current-person-footer]'), heroCopy: document.querySelector('.hero-copy'), heroRail: document.querySelector('.hero-rail'), heroIndex: document.querySelector('[data-hero-index]'), heroName: document.querySelector('[data-hero-name]'), heroMode: document.querySelector('[data-hero-mode]'), heroNote: document.querySelector('[data-hero-note]'), detailVisual: document.querySelector('.detail-visual'), detailSlot: document.querySelector('[data-detail-slot]'), detailPhotoRail: document.querySelector('[data-detail-photo-rail]'), detailPhotoIndex: document.querySelector('[data-detail-photo-index]'), detailLabel: document.querySelector('[data-detail-label]'), detailTitle: document.querySelector('[data-detail-title]'), detailDescription: document.querySelector('[data-detail-description]'), detailType: document.querySelector('[data-detail-type]'), detailStatus: document.querySelector('[data-detail-status]'), detailSubtypes: document.querySelector('[data-detail-subtypes]'), detailSlotTitle: document.querySelector('[data-detail-slot-title]'), detailSlotNote: document.querySelector('[data-detail-slot-note]'), detailEditHint: document.querySelector('[data-detail-edit-hint]'), detailMediaActions: document.querySelector('[data-detail-media-actions]'), detailReplace: document.querySelector('[data-detail-replace]'), detailReplaceFile: document.querySelector('[data-detail-replace-file]'), inlineEditor: document.querySelector('[data-inline-editor]'), inlineEditorTrigger: document.querySelector('[data-open-inline-editor]'), inlineEditorClose: document.querySelector('[data-close-inline-editor]'), inlineSubtypeName: document.querySelector('[data-inline-subtype-name]'), inlineCardTitle: document.querySelector('[data-inline-card-title]'), inlineCardLabel: document.querySelector('[data-inline-card-label]'), inlineCardCategory: document.querySelector('[data-inline-card-category]'), inlineCardCopy: document.querySelector('[data-inline-card-copy]'), inlineSubtypeCopy: document.querySelector('[data-inline-subtype-copy]'), inlineCardImage: document.querySelector('[data-inline-card-image]'), inlineCoverPreview: document.querySelector('[data-inline-cover-preview]'), inlineDropzone: document.querySelector('[data-inline-dropzone]'), inlineFile: document.querySelector('[data-inline-file]'), inlinePhotoList: document.querySelector('[data-inline-photo-list]'), inlineEmpty: document.querySelector('[data-inline-empty]'), inlineStatus: document.querySelector('[data-inline-status]'), inlineUndo: document.querySelector('[data-inline-undo]'), inlineSave: document.querySelector('[data-inline-save]'), themeToggle: document.querySelector('[data-theme-toggle]'), backgroundEditor: document.querySelector('[data-background-editor]'), backgroundOpen: document.querySelector('[data-open-background-editor]'), backgroundOpenButtons: [...document.querySelectorAll('[data-open-background-editor]')], backgroundClose: document.querySelector('[data-close-background-editor]'), backgroundReset: document.querySelector('[data-reset-background]'), auroraReset: document.querySelector('[data-reset-aurora]'), bgColor1: document.querySelector('[data-bg-color1]'), bgColor2: document.querySelector('[data-bg-color2]'), bgColor3: document.querySelector('[data-bg-color3]'), bgMouseForce: document.querySelector('[data-bg-mouse-force]'), bgCursorSize: document.querySelector('[data-bg-cursor-size]'), bgResolution: document.querySelector('[data-bg-resolution]'), bgAutoSpeed: document.querySelector('[data-bg-auto-speed]'), bgAutoIntensity: document.querySelector('[data-bg-auto-intensity]'), bgPressure: document.querySelector('[data-bg-pressure]'), bgBounce: document.querySelector('[data-bg-bounce]'), bgAutoAnimate: document.querySelector('[data-bg-auto-animate]'), bgViscous: document.querySelector('[data-bg-viscous]'), bgViscousCoef: document.querySelector('[data-bg-viscous-coef]'), bgViscousIterations: document.querySelector('[data-bg-viscous-iterations]'), auroraColor1: document.querySelector('[data-aurora-color1]'), auroraColor2: document.querySelector('[data-aurora-color2]'), auroraColor3: document.querySelector('[data-aurora-color3]'), auroraSpeed: document.querySelector('[data-aurora-speed]'), auroraAmplitude: document.querySelector('[data-aurora-amplitude]'), auroraBlend: document.querySelector('[data-aurora-blend]'), auroraLightMode: document.querySelector('[data-aurora-light-mode]')
  };
  let inlineDraft = null;
  let inlineUploadCount = 0;
  const BACKGROUND_DEFAULTS = {
    light: { color1: '#5227FF', color2: '#FF9FFC', color3: '#B497CF', mouseForce: 20, cursorSize: 100, resolution: .5, autoSpeed: .5, autoIntensity: 2.2, pressure: 32, bounceEdges: false, autoAnimate: true, viscousEnabled: true, viscousCoef: 30, viscousIterations: 32, dt: .014, bfecc: true, backgroundColor: '#eeeae3', lightMode: true },
    dark: { color1: '#5227FF', color2: '#FF9FFC', color3: '#B497CF', mouseForce: 20, cursorSize: 100, resolution: .5, autoSpeed: .5, autoIntensity: 2.2, pressure: 32, bounceEdges: false, autoAnimate: true, viscousEnabled: true, viscousCoef: 30, viscousIterations: 32, dt: .014, bfecc: true, backgroundColor: '#120f17', lightMode: false }
  };
  let backgroundPalettes = (() => {
    try {
      const saved = JSON.parse(localStorage.getItem('lin-gallery-background') || 'null');
      return { light: { ...BACKGROUND_DEFAULTS.light, ...(saved?.light || {}) }, dark: { ...BACKGROUND_DEFAULTS.dark, ...(saved?.dark || {}) } };
    } catch (_) { return JSON.parse(JSON.stringify(BACKGROUND_DEFAULTS)); }
  })();
  const AURORA_DEFAULTS = {
    light: { colorStops: ['#7CFF67', '#B497CF', '#5227FF'], speed: 1, amplitude: 1, blend: .5, lightMode: true },
    dark: { colorStops: ['#5227FF', '#7CFF67', '#B497CF'], speed: 1, amplitude: 1, blend: .5, lightMode: false }
  };
  let auroraPalettes = (() => {
    try {
      const saved = JSON.parse(localStorage.getItem('lin-gallery-aurora') || 'null');
      return { light: { ...AURORA_DEFAULTS.light, ...(saved?.light || {}), colorStops: [...(saved?.light?.colorStops || AURORA_DEFAULTS.light.colorStops)] }, dark: { ...AURORA_DEFAULTS.dark, ...(saved?.dark || {}), colorStops: [...(saved?.dark?.colorStops || AURORA_DEFAULTS.dark.colorStops)] } };
    } catch (_) { return JSON.parse(JSON.stringify(AURORA_DEFAULTS)); }
  })();
  function activeAuroraPalette() { return auroraPalettes[isDarkTheme() ? 'dark' : 'light']; }
  function applyAuroraPalette() {
    const palette = activeAuroraPalette();
    [[ui.auroraColor1, palette.colorStops[0]], [ui.auroraColor2, palette.colorStops[1]], [ui.auroraColor3, palette.colorStops[2]]].forEach(([input, value]) => { if (input) input.value = value; });
    [['auroraSpeed', 'speed'], ['auroraAmplitude', 'amplitude'], ['auroraBlend', 'blend']].forEach(([control, key]) => { if (ui[control] && palette[key] != null) ui[control].value = palette[key]; const output = document.querySelector(`[data-${control.replace(/^aurora/, 'aurora-')}-value]`); if (output && ui[control]) output.textContent = Number(ui[control].value).toFixed(2); });
    if (ui.auroraLightMode) ui.auroraLightMode.checked = palette.lightMode === true;
    window.linAuroraBackground?.update({ colorStops: palette.colorStops, speed: palette.speed, amplitude: palette.amplitude, blend: palette.blend, lightMode: palette.lightMode });
  }
  function activeBackgroundPalette() { return backgroundPalettes[isDarkTheme() ? 'dark' : 'light']; }
  function applyBackgroundPalette() {
    const palette = activeBackgroundPalette();
    document.documentElement.style.setProperty('--bg-horizon', palette.color1);
    document.documentElement.style.setProperty('--bg-highlight', palette.color2);
    document.documentElement.style.setProperty('--bg-shadow', palette.color3);
    document.documentElement.style.setProperty('--liquid-a', palette.color1);
    document.documentElement.style.setProperty('--liquid-b', palette.color2);
    document.documentElement.style.setProperty('--liquid-c', palette.color3);
    const hex = (value) => String(value || '').replace('#', '');
    const rgb = hex(palette.backgroundColor).match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    const luminance = rgb ? (0.2126 * parseInt(rgb[1], 16) + 0.7152 * parseInt(rgb[2], 16) + 0.0722 * parseInt(rgb[3], 16)) / 255 : .8;
    document.documentElement.style.setProperty('--ui-ink', luminance < .48 ? '#f6f1ea' : '#151515');
    document.documentElement.style.setProperty('--ui-muted', luminance < .48 ? '#d4cbd7' : '#69655f');
    [[ui.bgColor1, 'color1'], [ui.bgColor2, 'color2'], [ui.bgColor3, 'color3']].forEach(([input, key]) => { if (input) input.value = palette[key]; });
    const controls = [['bgMouseForce','mouseForce'],['bgCursorSize','cursorSize'],['bgResolution','resolution'],['bgAutoSpeed','autoSpeed'],['bgAutoIntensity','autoIntensity'],['bgPressure','pressure'],['bgViscousCoef','viscousCoef'],['bgViscousIterations','viscousIterations']];
    controls.forEach(([control, key]) => { if (ui[control] && palette[key] != null) ui[control].value = palette[key]; const output = document.querySelector(`[data-${control.replace(/^bg/, 'bg-')}-value]`); if (output && ui[control]) output.textContent = Number(ui[control].value).toFixed(Number(ui[control].step) < .1 ? 2 : 1); });
    if (ui.bgBounce) ui.bgBounce.checked = palette.bounceEdges === true;
    if (ui.bgAutoAnimate) ui.bgAutoAnimate.checked = palette.autoAnimate !== false;
    if (ui.bgViscous) ui.bgViscous.checked = palette.viscousEnabled !== false;
    window.linGradientWaves?.update({ colors: [palette.color1, palette.color2, palette.color3], mouseForce: palette.mouseForce, cursorSize: palette.cursorSize, resolution: palette.resolution, autoSpeed: palette.autoSpeed, autoIntensity: palette.autoIntensity, pressure: palette.pressure, bounceEdges: palette.bounceEdges, autoAnimate: palette.autoAnimate, viscousEnabled: palette.viscousEnabled, viscousCoef: palette.viscousCoef, viscousIterations: palette.viscousIterations, dt: palette.dt, BFECC: palette.bfecc, backgroundColor: palette.backgroundColor, lightMode: palette.lightMode });
    applyAuroraPalette();
  }

  function isDarkTheme() { return document.documentElement.dataset.theme === 'dark'; }
  function applyTheme(theme, persist = true) {
    const nextTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    if (persist) localStorage.setItem('lin-gallery-theme', nextTheme);
    const dark = nextTheme === 'dark';
    if (ui.themeToggle) {
      ui.themeToggle.setAttribute('aria-pressed', String(dark));
      ui.themeToggle.setAttribute('title', dark ? '切换到浅色主题' : '切换到深色主题');
      ui.themeToggle.classList.remove('is-switching');
      requestAnimationFrame(() => ui.themeToggle.classList.add('is-switching'));
      window.setTimeout(() => ui.themeToggle.classList.remove('is-switching'), 520);
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', dark ? '#171717' : '#eeeae3');
    if (sceneState.renderer && sceneState.THREE) sceneState.renderer.setClearColor(0x000000, 0);
    if (sceneState.floor?.material?.color) sceneState.floor.material.color.setHex(dark ? 0x2a2a2a : 0xded9d0);
    applyBackgroundPalette();
    if (sceneState.cardGroup && sceneState.THREE) sceneState.cardGroup.children.forEach((mesh, index) => {
      mesh.material.map?.dispose();
      mesh.material.map = canvasTexture(sceneState.THREE, cards[index], index);
      mesh.material.needsUpdate = true;
      if (mesh.userData.backing?.material) { mesh.userData.backing.material.color.set(isDarkTheme() ? '#393939' : '#fffaf2'); mesh.userData.backing.material.opacity = 0; }
    });
  }

  function setScale() {
    const isMobile = window.innerWidth < 700;
    const isWideDesktop = window.innerWidth >= 900 && window.innerWidth / Math.max(window.innerHeight, 1) > 1.35;
    const containScale = Math.min(1, window.innerWidth / FRAME.width, window.innerHeight / FRAME.height);
    const mobileBreathingRoom = window.innerHeight < 560 ? 36 : 72;
    const mobileHeightScale = (window.innerHeight - mobileBreathingRoom) / FRAME.height;
    const scale = isMobile
      ? Math.min(.94, Math.max(.38, mobileHeightScale))
      : (isWideDesktop ? Math.min(window.innerWidth / FRAME.width, window.innerHeight / FRAME.height) : containScale);
    const frameLeft = isMobile ? (window.innerWidth - FRAME.width * scale) / 2 : Math.max(0, (window.innerWidth - FRAME.width * scale) / 2);
    const frameTop = isMobile
      ? Math.max(window.innerHeight < 560 ? 18 : 28, (window.innerHeight - FRAME.height * scale) / 2)
      : Math.max(0, (window.innerHeight - FRAME.height * scale) / 2);
    frame.style.setProperty('--scale', scale.toFixed(4));
    frame.style.setProperty('--frame-left', `${frameLeft.toFixed(2)}px`);
    frame.style.setProperty('--frame-top', `${frameTop.toFixed(2)}px`);
    shell?.style.setProperty('--scale', scale.toFixed(4));
    shell?.style.setProperty('--frame-left', `${frameLeft.toFixed(2)}px`);
    shell?.style.setProperty('--frame-top', `${frameTop.toFixed(2)}px`);
    frame.dataset.wide = String(isWideDesktop);
    frame.dataset.mobile = String(isMobile);
  }

  function wrap(index) { return ((index % cards.length) + cards.length) % cards.length; }
  function currentIndex() { return wrap(Math.round(state.target)); }
  function currentPerson() { return people[activePersonId]; }
  function setDeveloperMode(enabled) {
    developerMode = Boolean(enabled);
    document.documentElement.dataset.developerMode = String(developerMode);
    if (ui.detailEditHint) ui.detailEditHint.hidden = !developerMode;
    if (ui.detailMediaActions) ui.detailMediaActions.hidden = !developerMode;
    document.querySelectorAll('[data-build-mode]').forEach((item) => { item.textContent = developerMode ? '开发者编辑版' : (editorRequested ? '开发者编辑版（未授权）' : '预览版'); });
  }
  function editorRequestHeaders(extra = {}) {
    const headers = { ...extra };
    if (editorKey) headers['X-Gallery-Edit-Key'] = editorKey;
    return headers;
  }
  async function authorizeDeveloperMode() {
    if (!editorRequested) return;
    if (localEditorHost && !editorKey) {
      try {
        const localResponse = await fetch('api/gallery-auth', { cache: 'no-store' });
        if (localResponse.ok) { setDeveloperMode(true); return; }
      } catch (_) { /* continue to the key prompt */ }
    }
    const key = editorKey || window.prompt('请输入开发者访问密钥');
    if (!key) return;
    try {
      const response = await fetch('api/gallery-auth', { headers: { 'X-Gallery-Edit-Key': key }, cache: 'no-store' });
      if (!response.ok) throw new Error('denied');
      editorKey = key; sessionStorage.setItem('lin-gallery-edit-key', key); setDeveloperMode(true);
    } catch (_) { sessionStorage.removeItem('lin-gallery-edit-key'); editorKey = ''; setDeveloperMode(false); }
  }
  function countCardPhotos(card) {
    const subtypePhotos = (card.subtypeDetails || []).reduce((total, detail) => total + (Array.isArray(detail.photos) ? detail.photos.length : 0), 0);
    return subtypePhotos || (card.image ? 1 : 0);
  }
  function updateStatus() {
    const index = currentIndex();
    const card = cards[index];
    ui.title.textContent = card.label;
    ui.count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    if (ui.heroIndex) ui.heroIndex.textContent = `${String(index + 1).padStart(2, '0')} - ${String(cards.length).padStart(2, '0')}`;
    if (ui.edgeIndex) ui.edgeIndex.textContent = `INDEX ${String(index + 1).padStart(2, '0')}`;
    if (ui.edgeRange) ui.edgeRange.textContent = `${String(index + 1).padStart(2, '0')}—${String(cards.length).padStart(2, '0')}`;
    if (ui.mediaStatus) {
      const photoCount = countCardPhotos(card);
      ui.mediaStatus.textContent = photoCount ? `${photoCount} 张照片已接入` : '待加入照片 · 0 张';
      ui.mediaStatus.dataset.hasMedia = String(photoCount > 0);
    }
    state.statusIndex = index;
  }
  function normalizeOrbitProgress() {
    if (!cards.length || !Number.isFinite(state.progress)) return;
    const cycles = Math.floor(state.progress / cards.length);
    if (!cycles) return;
    state.progress -= cycles * cards.length;
    state.target -= cycles * cards.length;
    updateStatus();
  }

  function step(amount) { state.target += amount; scheduleAutoResume(); updateStatus(); }

  function scheduleAutoResume() {
    state.auto = false;
    canvas.dataset.auto = 'false';
    window.clearTimeout(autoResumeTimer);
    autoResumeTimer = window.setTimeout(() => {
      autoResumeTimer = null;
      if (!reducedMotion.matches && !state.down && !state.activePanel) { state.auto = true; canvas.dataset.auto = 'true'; }
    }, AUTO_RESUME_DELAY);
  }

  function splitHeroLetters(element) {
    const text = element.textContent || '';
    element.setAttribute('aria-label', text);
    element.replaceChildren(...[...text].map((character) => {
      const span = document.createElement('span');
      span.className = 'hero-letter';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = character === ' ' ? '\u00a0' : character;
      return span;
    }));
  }

  function animateHeroCopy() {
    if (!ui.heroCopy) return;
    const gsap = window.gsap;
    heroIntroTimeline?.kill(); heroIntroTimeline = null;
    heroIdleTimeline?.kill(); heroIdleTimeline = null;
    ui.heroCopy.classList.remove('is-idle');
    if (reducedMotion.matches) { ui.heroCopy.classList.remove('is-animating', 'gsap-ready'); return; }
    if (!gsap) {
      ui.heroCopy.classList.remove('gsap-ready');
      ui.heroCopy.classList.remove('is-animating');
      void ui.heroCopy.offsetWidth;
      ui.heroCopy.classList.add('is-animating');
      window.setTimeout(() => ui.heroCopy.classList.remove('is-animating'), 1300);
      return;
    }
    ui.heroCopy.classList.remove('is-animating');
    ui.heroCopy.classList.add('gsap-ready');
    splitHeroLetters(ui.heroName);
    splitHeroLetters(ui.heroMode);
    const letters = [...ui.heroCopy.querySelectorAll('.hero-letter')];
    const noteLines = [...ui.heroNote.querySelectorAll('span')];
    gsap.killTweensOf([...letters, ...noteLines]);
    if (ui.heroRail) gsap.fromTo(ui.heroRail, { y: -8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .45, ease: 'power3.out' });
    const evenLetters = letters.filter((_, index) => index % 2 === 0);
    const oddLetters = letters.filter((_, index) => index % 2 === 1);
    heroIntroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: () => {
      const accentLetters = letters.filter((letter, index) => index % 5 === 2 && letter.textContent.trim());
      accentLetters.forEach((letter) => letter.classList.add('hero-accent-letter'));
      ui.heroCopy.classList.add('is-idle');
      gsap.set(accentLetters, { filter: 'brightness(1)', backgroundPosition: '50% 0%', textShadow: '0 2px 0 rgba(183,53,89,.08), 0 8px 18px rgba(183,53,89,.12)' });
      heroIdleTimeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: .58, defaults: { ease: 'sine.inOut', overwrite: 'auto' } })
        .to(letters, { y: -2.4, scaleY: 1.02, scaleX: 1.007, duration: 1.38, stagger: { each: .075, from: 'center' } })
        .to(accentLetters, { backgroundPosition: '50% 100%', textShadow: '0 7px 18px rgba(183,53,89,.24)', duration: 1.16, stagger: { each: .07, from: 'center' } }, .18);
    } })
      .fromTo(noteLines, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .42, stagger: .08 }, 0)
      .fromTo(evenLetters, { y: 34, autoAlpha: 0, rotationX: -42, filter: 'blur(6px)' }, { y: 0, autoAlpha: 1, rotationX: 0, filter: 'blur(0px)', duration: .68, stagger: .038, transformOrigin: '50% 100%', transformPerspective: 800 }, .07)
      .fromTo(oddLetters, { y: 18, autoAlpha: 0, rotationY: 16, rotation: 2, filter: 'blur(3px)' }, { y: 0, autoAlpha: 1, rotationY: 0, rotation: 0, filter: 'blur(0px)', duration: .58, stagger: .052, transformOrigin: '50% 100%', transformPerspective: 800 }, .02);
  }

  function updateHeroParallax(clientX, clientY) {
    if (!ui.heroCopy) return;
    const rect = frame.getBoundingClientRect();
    if (!rect.width || !rect.height || clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
      ui.heroCopy.style.setProperty('--hero-shift-x', '0px');
      ui.heroCopy.style.setProperty('--hero-shift-y', '0px');
      ui.heroCopy.style.setProperty('--hero-tilt', '0deg');
      return;
    }
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;
    ui.heroCopy.style.setProperty('--hero-shift-x', `${(x * 12).toFixed(2)}px`);
    ui.heroCopy.style.setProperty('--hero-shift-y', `${(y * 7).toFixed(2)}px`);
    ui.heroCopy.style.setProperty('--hero-tilt', `${(x * .42).toFixed(3)}deg`);
  }

  function updatePersonUI() {
    const person = currentPerson();
    ui.personCode.textContent = person.code;
    ui.personName.textContent = person.name;
    ui.personFooter.textContent = person.footer;
    ui.heroName.textContent = person.englishName;
    ui.heroMode.textContent = person.mode;
    const noteLines = person.note.replace(/<br\s*\/?>/gi, '\n').split('\n');
    ui.heroNote.replaceChildren(...noteLines.map((line) => { const span = document.createElement('span'); span.textContent = line; return span; }));
    ui.personButton.setAttribute('aria-label', `切换人物，当前为${person.name}`);
    document.querySelector('.gallery-shell').setAttribute('aria-label', `${person.name}人物影像展廊`);
    document.title = `${person.name} / In Motion`;
    ui.personList.querySelectorAll('.person-option').forEach((button) => {
      const selected = button.dataset.personId === person.id;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    updateStatus();
  }

  function canvasTexture(THREE, card, index) {
    const person = currentPerson();
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 720; textureCanvas.height = 1080;
    const ctx = textureCanvas.getContext('2d');
    const applyCardMask = () => {
      const radius = 56;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-in';
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') ctx.roundRect(0, 0, textureCanvas.width, textureCanvas.height, radius);
      else { ctx.rect(0, 0, textureCanvas.width, textureCanvas.height); }
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.restore();
    };
    const imageRegion = { x: 0, y: 0, width: 720, height: 1080 };
    const darkTheme = isDarkTheme();
    const cardBackground = card.image ? '#d9d4cc' : (darkTheme ? '#3a3a3a' : (card.color || '#d9d4cc'));
    const cardInk = darkTheme ? '#f3f0ea' : (index === 4 ? '#f4f1eb' : '#161616');
    ctx.fillStyle = cardBackground; ctx.fillRect(0, 0, 720, 1080);
    ctx.fillStyle = cardInk;
    ctx.font = '500 20px "Microsoft YaHei", sans-serif'; ctx.letterSpacing = '2px'; ctx.fillText(`${person.code} - ${String(index + 1).padStart(2, '0')}`, 24, 34);
    if (!card.image) {
      ctx.fillStyle = cardInk; ctx.font = '700 40px "Microsoft YaHei", sans-serif'; ctx.fillText(card.label, 54, 548);
      ctx.font = '500 17px "Microsoft YaHei", sans-serif'; ctx.globalAlpha = .7; ctx.fillText('点击进入合集', 56, 548); ctx.globalAlpha = 1;
      ctx.font = '500 22px "Microsoft YaHei", sans-serif'; ctx.fillText(card.type, 24, 1012);
      ctx.fillText('↗', 650, 1044);
      applyCardMask();
    }
    const texture = new THREE.CanvasTexture(textureCanvas);
    if ('colorSpace' in texture && THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
    if (card.image) {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.onload = () => {
        const scale = Math.max(imageRegion.width / image.naturalWidth, imageRegion.height / image.naturalHeight);
        const width = image.naturalWidth * scale;
        const height = image.naturalHeight * scale;
        ctx.save();
        ctx.beginPath();
        ctx.rect(imageRegion.x, imageRegion.y, imageRegion.width, imageRegion.height);
        ctx.clip();
        const position = card.imagePosition || {};
        const positionX = Number.isFinite(Number(position.x)) ? Number(position.x) : 50;
        const positionY = Number.isFinite(Number(position.y)) ? Number(position.y) : 50;
        ctx.drawImage(image, imageRegion.x + (imageRegion.width - width) * (positionX / 100), imageRegion.y + (imageRegion.height - height) * (positionY / 100), width, height);
        ctx.restore();
        const overlay = ctx.createLinearGradient(0, 680, 0, 1080);
        overlay.addColorStop(0, 'rgba(17,17,17,0)');
        overlay.addColorStop(1, 'rgba(17,17,17,.82)');
        ctx.fillStyle = overlay; ctx.fillRect(0, 0, 720, 1080);
        ctx.fillStyle = '#fffaf2';
        ctx.font = '500 20px "Microsoft YaHei", sans-serif'; ctx.fillText(`${person.code} - ${String(index + 1).padStart(2, '0')}`, 24, 34);
        ctx.font = '500 22px "Microsoft YaHei", sans-serif'; ctx.fillText(card.label, 24, 1012);
        ctx.font = '500 16px "Microsoft YaHei", sans-serif'; ctx.fillText(card.type, 24, 1044);
        ctx.fillStyle = '#f0b4c3'; ctx.font = '500 22px sans-serif'; ctx.fillText('↗', 650, 1045);
        applyCardMask();
        texture.needsUpdate = true;
      };
      image.src = card.image;
    }
    return texture;
  }

  function createAntigravity(THREE, scene) {
    const count = reducedMotion.matches ? Math.round(ANTIGRAVITY_CONFIG.count * .65) : ANTIGRAVITY_CONFIG.count;
    const geometry = new THREE.TetrahedronGeometry(ANTIGRAVITY_CONFIG.size, 0);
    const material = new THREE.MeshBasicMaterial({
      color: ANTIGRAVITY_CONFIG.color,
      transparent: true,
      opacity: ANTIGRAVITY_CONFIG.opacity,
      depthWrite: false
    });
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.frustumCulled = false;
    mesh.renderOrder = -1;
    scene.add(mesh);

    const particles = Array.from({ length: count }, (_, index) => {
      const seed = index + 1;
      const spread = ((seed * 37) % 1000) / 1000;
      const vertical = ((seed * 71) % 1000) / 1000;
      const depth = ((seed * 53) % 1000) / 1000;
      return {
        x: (spread - .5) * ANTIGRAVITY_CONFIG.spreadX,
        y: (vertical - .5) * ANTIGRAVITY_CONFIG.spreadY - .35,
        z: -2.2 - depth * ANTIGRAVITY_CONFIG.depth,
        phase: seed * .37,
        drift: .55 + ((seed * 17) % 100) / 100,
        scale: .5 + ((seed * 29) % 100) / 150
      };
    });
    const dummy = new THREE.Object3D();
    return { mesh, particles, dummy };
  }

  // A restrained particle field gives the archive a living atmosphere without competing with the photographs.
  function updateAntigravity(effect, now) {
    if (!effect) return;
    const time = now * .00024;
    state.particlePointerX += (state.particleTargetX - state.particlePointerX) * .12;
    state.particlePointerY += (state.particleTargetY - state.particlePointerY) * .12;
    const pointerX = state.particlePointerX * 5.2;
    const pointerY = -state.particlePointerY * 3.65 - .35;
    effect.particles.forEach((particle, index) => {
      const driftX = Math.sin(time * particle.drift + particle.phase) * .18;
      const driftY = Math.cos(time * particle.drift * .82 + particle.phase) * .16;
      let x = particle.x + driftX;
      let y = particle.y + driftY;
      const dx = x - pointerX;
      const dy = y - pointerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (!reducedMotion.matches && distance < 2.25) {
        const force = (1 - distance / 2.25) * 1.15;
        const safeDistance = Math.max(distance, .001);
        x += (dx / safeDistance) * force;
        y += (dy / safeDistance) * force;
      }
      effect.dummy.position.set(x, y, particle.z + Math.sin(time * .65 + particle.phase) * .08);
      effect.dummy.rotation.set(time * particle.drift + index, time * .7 + particle.phase, time * .45 + index * .2);
      effect.dummy.scale.setScalar(particle.scale * (1 + Math.sin(time * 1.4 + particle.phase) * .16));
      effect.dummy.updateMatrix();
      effect.mesh.setMatrixAt(index, effect.dummy.matrix);
    });
    effect.mesh.instanceMatrix.needsUpdate = true;
  }

  function createSilkBackground(THREE, scene) {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uHorizonColor: { value: new THREE.Color() },
        uHighlightColor: { value: new THREE.Color() },
        uShadowColor: { value: new THREE.Color() },
        uSpeed: { value: 0.32 },
        uScale: { value: 1.05 },
        uRotation: { value: 0.18 },
        uIntensity: { value: 1 }
      },
      vertexShader: SILK_VERTEX_SHADER,
      fragmentShader: SILK_FRAGMENT_SHADER,
      transparent: false,
      opacity: 1,
      depthWrite: false,
      depthTest: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(24, 16), material);
    mesh.position.set(0, 0, -6.2);
    mesh.renderOrder = -2;
    mesh.frustumCulled = false;
    scene.add(mesh);
    applyBackgroundPalette();
    return mesh;
  }

  function updateSilkBackground(mesh, now) {
    if (mesh?.material?.uniforms?.uTime) mesh.material.uniforms.uTime.value = now * 0.001;
  }

  function createScene(THREE) {
    sceneState.THREE = THREE;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    sceneState.renderer = renderer;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(31, FRAME.width / FRAME.height, .1, 100);
    camera.position.set(0, 0.25, 10.6);
    const ambient = new THREE.AmbientLight(0xffffff, 2.2); scene.add(ambient);
    const backgroundHost = document.querySelector('[data-gradient-waves]');
    const palette = activeBackgroundPalette();
    window.linGradientWaves?.init(backgroundHost, { colors: [palette.color1, palette.color2, palette.color3], mouseForce: palette.mouseForce, cursorSize: palette.cursorSize, resolution: palette.resolution, autoSpeed: palette.autoSpeed, autoIntensity: palette.autoIntensity, pressure: palette.pressure, bounceEdges: palette.bounceEdges, autoAnimate: palette.autoAnimate, viscousEnabled: palette.viscousEnabled, viscousCoef: palette.viscousCoef, viscousIterations: palette.viscousIterations, dt: palette.dt, BFECC: palette.bfecc, backgroundColor: palette.backgroundColor, lightMode: palette.lightMode }, THREE).catch(() => {});
    const group = new THREE.Group(); group.position.y = -.62; scene.add(group);
    const cardGroup = new THREE.Group(); group.add(cardGroup);
    sceneState.camera = camera;
    sceneState.cardGroup = cardGroup;
    sceneState.raycaster = new THREE.Raycaster();
    sceneState.pointer = new THREE.Vector2();
    const resizeScene = () => {
      const width = Math.max(1, window.innerWidth);
      const height = Math.max(1, window.innerHeight);
      const mobile = width < 700;
      renderer.setSize(mobile ? FRAME.width : width, mobile ? FRAME.height : height, false);
      camera.aspect = mobile ? FRAME.width / FRAME.height : width / height;
      camera.updateProjectionMatrix();
    };
    resizeScene();
    window.addEventListener('resize', resizeScene, { passive: true });
    const cardWidth = 2.36;
    const cardHeight = 3.54;
    const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
    const roundedShape = new THREE.Shape();
    const backingWidth = cardWidth + .06; const backingHeight = cardHeight + .06; const corner = .24;
    roundedShape.moveTo(-backingWidth / 2 + corner, -backingHeight / 2);
    roundedShape.lineTo(backingWidth / 2 - corner, -backingHeight / 2); roundedShape.quadraticCurveTo(backingWidth / 2, -backingHeight / 2, backingWidth / 2, -backingHeight / 2 + corner);
    roundedShape.lineTo(backingWidth / 2, backingHeight / 2 - corner); roundedShape.quadraticCurveTo(backingWidth / 2, backingHeight / 2, backingWidth / 2 - corner, backingHeight / 2);
    roundedShape.lineTo(-backingWidth / 2 + corner, backingHeight / 2); roundedShape.quadraticCurveTo(-backingWidth / 2, backingHeight / 2, -backingWidth / 2, backingHeight / 2 - corner);
    roundedShape.lineTo(-backingWidth / 2, -backingHeight / 2 + corner); roundedShape.quadraticCurveTo(-backingWidth / 2, -backingHeight / 2, -backingWidth / 2 + corner, -backingHeight / 2);
    const backingGeometry = new THREE.ShapeGeometry(roundedShape);
    const outlineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-cardWidth / 2, -cardHeight / 2, .018),
      new THREE.Vector3(cardWidth / 2, -cardHeight / 2, .018),
      new THREE.Vector3(cardWidth / 2, cardHeight / 2, .018),
      new THREE.Vector3(-cardWidth / 2, cardHeight / 2, .018)
    ]);
    const cornerLength = .32;
    const halfWidth = cardWidth / 2;
    const halfHeight = cardHeight / 2;
    const focusPoints = [];
    [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([sx, sy]) => {
      const x = sx * halfWidth;
      const y = sy * halfHeight;
      focusPoints.push(
        new THREE.Vector3(x, y, .042),
        new THREE.Vector3(x - sx * cornerLength, y, .042),
        new THREE.Vector3(x, y, .042),
        new THREE.Vector3(x, y - sy * cornerLength, .042)
      );
    });
    const focusGeometry = new THREE.BufferGeometry().setFromPoints(focusPoints);
    cards.forEach((card, index) => {
      const material = new THREE.MeshBasicMaterial({ map: canvasTexture(THREE, card, index), side: THREE.FrontSide, transparent: true, alphaTest: .01, depthWrite: true, depthTest: true });
      const mesh = new THREE.Mesh(geometry, material); mesh.userData.index = index;
      const backing = new THREE.Mesh(backingGeometry, new THREE.MeshBasicMaterial({ color: isDarkTheme() ? '#393939' : '#fffaf2', side: THREE.FrontSide, transparent: true, opacity: 0, depthWrite: false, depthTest: true }));
      backing.position.set(.008, -.008, -.05);
      mesh.add(backing);
      const outline = new THREE.LineLoop(outlineGeometry, new THREE.LineBasicMaterial({ color: 0x4d4a45, transparent: true, opacity: 0, depthWrite: false }));
      const focusFrame = new THREE.LineSegments(focusGeometry, new THREE.LineBasicMaterial({ color: index % 2 ? 0xb73559 : 0xc9643b, transparent: true, opacity: 0, depthTest: false, depthWrite: false }));
      mesh.add(outline, focusFrame);
      mesh.userData.outline = outline;
      mesh.userData.backing = backing;
      mesh.userData.focusFrame = focusFrame;
      cardGroup.add(mesh);
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 8), new THREE.MeshBasicMaterial({ color: isDarkTheme() ? 0x2a2a2a : 0xded9d0, transparent: true, opacity: 0 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -3.22; floor.position.z = -1.3; scene.add(floor);
    sceneState.floor = floor;

    function render(now) {
      const dt = Math.min((now - state.last) / 1000, .05); state.last = now;
      if (state.auto && !state.down && !state.activePanel) state.target += dt * .11;
      normalizeOrbitProgress();
      const delta = state.target - state.progress; state.velocity = state.velocity * .84 + delta * 4.8 * dt; state.progress += state.velocity;
      if (currentIndex() !== state.statusIndex) updateStatus();
      state.switchProgress = Math.min(1, state.switchProgress + dt * (reducedMotion.matches ? 12 : 3.4));
      const switchWave = Math.sin(state.switchProgress * Math.PI);
      cardGroup.rotation.y = switchWave * 0.045;
      group.position.y = -.62 + switchWave * 0.08;
      const orbitPhase = (state.progress / cards.length) * Math.PI * 2;
      if (ui.heroCopy) ui.heroCopy.style.setProperty('--hero-drift-x', `${(Math.sin(orbitPhase) * 3.5).toFixed(2)}px`);
      cards.forEach((_, index) => {
        const mesh = cardGroup.children[index];
        const angle = (index - state.progress) * Math.PI * 2 / cards.length;
        const wrappedAngle = Math.atan2(Math.sin(angle), Math.cos(angle));
        const x = Math.sin(angle) * ORBIT_RADIUS; const z = Math.cos(angle) * 1.5 - 1.25; const depth = (Math.cos(angle) + 1) / 2;
        const hoverTarget = state.hoveredIndex === index ? 1 : 0;
        mesh.userData.hover = (mesh.userData.hover || 0) + (hoverTarget - (mesh.userData.hover || 0)) * Math.min(1, dt * 11);
        const hover = mesh.userData.hover;
        mesh.position.set(x, Math.sin(angle * 2) * .22 + hover * .08, z + hover * .28);
        mesh.rotation.y = -wrappedAngle * .48 + hover * (.035 + state.cursorNdcX * .12); mesh.rotation.x = hover * state.cursorNdcY * -.12;
        const press = mesh.userData.press || 0;
        mesh.userData.press = press + (state.activeCardIndex === index ? 1 - press : -press) * Math.min(1, dt * 18);
        mesh.rotation.z = Math.sin(angle) * -.07 + mesh.userData.press * .03;
        const scale = (.62 + depth * .30) * (1 + hover * .08 - mesh.userData.press * .05); mesh.scale.setScalar(scale);
        const pulse = .5 + Math.sin(now * .0011 + index * .8) * .5;
        const shade = (.66 + depth * .34) * (.72 + state.switchProgress * .28);
        if (mesh.material.color) mesh.material.color.setRGB(shade, shade, shade);
        if (mesh.userData.backing) {
          mesh.userData.backing.position.x = .008 + hover * .018;
          mesh.userData.backing.position.y = -.008 - hover * .018;
        }
        if (mesh.userData.outline) {
          mesh.userData.outline.material.opacity = 0;
          mesh.userData.outline.material.color.setHex(hover > .02 ? 0xb73559 : 0x4d4a45);
        }
        if (mesh.userData.focusFrame) {
          mesh.userData.focusFrame.material.opacity = 0;
          mesh.userData.focusFrame.scale.setScalar(1 + hover * .055);
        }
      });
      group.rotation.x = Math.sin(orbitPhase) * .012;
      renderer.render(scene, camera); requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    loading.classList.add('is-ready'); updatePersonUI(); animateHeroCopy(); canvas.dataset.auto = String(state.auto);
  }

  function pickCard(event) {
    if (!sceneState.camera || !sceneState.cardGroup || !sceneState.raycaster || !sceneState.pointer) return null;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    sceneState.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    sceneState.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    sceneState.raycaster.setFromCamera(sceneState.pointer, sceneState.camera);
    return sceneState.raycaster.intersectObjects(sceneState.cardGroup.children, false)[0]?.object || null;
  }

  function setPanel(panel, open) { panel.classList.toggle('is-open', open); panel.setAttribute('aria-hidden', String(!open)); panel.inert = !open; if (panel === ui.detailPanel && frame) { frame.dataset.detailOpen = String(open); if (shell) shell.dataset.detailOpen = String(open); window.linAuroraBackground?.setVisible(open); ui.backgroundEditor?.classList.toggle('is-detail-open', Boolean(open && !ui.backgroundEditor.hidden)); } }
  function setBackgroundEditorOpen(open) {
    if (!ui.backgroundEditor) return;
    const nextOpen = Boolean(open);
    ui.backgroundEditor.hidden = !nextOpen;
    ui.backgroundEditor.classList.toggle('is-detail-open', nextOpen && ui.detailPanel?.classList.contains('is-open'));
    ui.backgroundOpenButtons.forEach((button) => button.setAttribute('aria-expanded', String(nextOpen)));
  }
  function toggleBackgroundEditor() {
    if (!ui.backgroundEditor) return;
    const willOpen = ui.backgroundEditor.hidden;
    if (willOpen) applyBackgroundPalette();
    setBackgroundEditorOpen(willOpen);
  }
  function bindHoverCardInteraction(element) {
    if (!element || element.dataset.hoverCardBound === 'true') return;
    element.dataset.hoverCardBound = 'true';
    const reset = () => {
      element.style.setProperty('--card-rx', '0deg');
      element.style.setProperty('--card-ry', '0deg');
      element.style.setProperty('--card-gx', '50%');
      element.style.setProperty('--card-gy', '50%');
    };
    element.addEventListener('pointermove', (event) => {
      if (reducedMotion.matches) return;
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      element.style.setProperty('--card-rx', `${((.5 - y) * 10).toFixed(2)}deg`);
      element.style.setProperty('--card-ry', `${((x - .5) * 12).toFixed(2)}deg`);
      element.style.setProperty('--card-gx', `${(x * 100).toFixed(1)}%`);
      element.style.setProperty('--card-gy', `${(y * 100).toFixed(1)}%`);
    });
    element.addEventListener('pointerleave', reset);
    element.addEventListener('blur', reset);
    reducedMotion.addEventListener?.('change', reset);
  }
  function panelAnimatedTargets(panel) {
    const selectors = panel === ui.detailPanel
      ? ['.detail-head', '.detail-grid']
      : panel === ui.menuPanel
        ? ['.menu-panel-head', 'nav', '.menu-panel-note']
        : panel === ui.personPanel
          ? ['.person-panel-head', '.person-options', '.person-panel-note']
          : panel === ui.aboutPanel
            ? ['.detail-head', '.about-title', '.about-copy']
            : ['.detail-head', '.contact-panel h2', '.contact-panel p', '.outline-action'];
    return selectors.flatMap((selector) => [...panel.querySelectorAll(selector)]);
  }
  function animatePanelOpen(panel) {
    const gsap = window.gsap;
    if (!gsap || reducedMotion.matches) return;
    const targets = panelAnimatedTargets(panel);
    if (!targets.length) return;
    gsap.killTweensOf([panel, ...targets]);
    gsap.set([panel, ...targets], { clearProps: 'all' });
    gsap.fromTo(targets, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .52, stagger: .055, ease: 'power3.out' });
  }
  function focusableElements(panel) {
    return [...panel.querySelectorAll('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter((element) => !element.disabled);
  }
  function closePanels({ restoreFocus = true, animate = true } = {}) {
    const opener = state.opener;
    const panels = [ui.personPanel, ui.menuPanel, ui.detailPanel, ui.aboutPanel, ui.contactPanel];
    const activePanel = state.activePanel;
    const finish = () => {
      panels.forEach((panel) => setPanel(panel, false));
      closeInlineEditor({ restoreFocus: false });
      stopPhotoCarousel();
      setBackgroundEditorOpen(false);
      window.clearTimeout(photoImageCleanupTimer);
      photoImageCleanupTimer = null;
      ui.menuButton.setAttribute('aria-expanded', 'false');
      ui.personButton.setAttribute('aria-expanded', 'false');
      state.activePanel = null;
      state.opener = null;
      state.closingPanel = false;
      state.panelTimeline = null;
      scheduleAutoResume();
      if (restoreFocus && opener && opener.isConnected) opener.focus();
    };
    if (state.panelTimeline) state.panelTimeline.kill();
    if (!animate || !activePanel || !activePanel.classList.contains('is-open') || reducedMotion.matches || !window.gsap) { finish(); return; }
    state.closingPanel = true;
    const targets = panelAnimatedTargets(activePanel);
    state.panelTimeline = window.gsap.timeline({ onComplete: finish });
    state.panelTimeline.to(targets, { y: -14, autoAlpha: 0, duration: .26, stagger: .025, ease: 'power2.in' })
      .to(activePanel, { autoAlpha: 0, y: 10, duration: .34, ease: 'power2.inOut' }, 0);
  }
  function openPanel(panel, opener) {
    closePanels({ restoreFocus: false, animate: false });
    state.opener = opener || document.activeElement;
    state.activePanel = panel;
    state.auto = false;
    setPanel(panel, true);
    animatePanelOpen(panel);
    setTimeout(() => focusableElements(panel)[0]?.focus(), 0);
  }

  function renderPersonList() {
    ui.personList.replaceChildren();
    Object.values(people).forEach((person) => {
      const button = document.createElement('button');
      button.className = `person-option${person.id === activePersonId ? ' is-active' : ''}`;
      button.type = 'button';
      button.dataset.personId = person.id;
      button.setAttribute('aria-pressed', String(person.id === activePersonId));
      button.innerHTML = `<span class="person-option-name">${person.name}</span><span class="person-option-meta">${person.code}</span>`;
      button.addEventListener('click', () => switchPerson(person.id));
      ui.personList.appendChild(button);
    });
  }

  function renderMenuList() {
    ui.menuList.replaceChildren();
    cards.forEach((card, index) => {
      const link = document.createElement('a');
      link.className = 'menu-link';
      link.href = '#top';
      const title = document.createElement('span');
      title.textContent = card.title;
      const meta = document.createElement('small');
      const indexLine = document.createElement('span');
      indexLine.className = 'menu-link-index';
      indexLine.textContent = `${String(index + 1).padStart(2, '0')} / ${card.category}`;
      const subtypeLine = document.createElement('span');
      subtypeLine.className = 'menu-link-subtypes';
      subtypeLine.textContent = card.subtypes.join(' · ');
      meta.append(indexLine, subtypeLine);
      link.append(title, meta);
      link.addEventListener('click', (event) => { event.preventDefault(); state.target = index; state.progress = index; state.velocity = 0; updateStatus(); openDetail(index, ui.menuButton); });
      ui.menuList.appendChild(link);
    });
  }

  function switchPerson(personId) {
    if (!people[personId] || personId === activePersonId) { closePanels(); return; }
    activePersonId = personId;
    cards = people[activePersonId].cards;
    state.switchProgress = reducedMotion.matches ? 1 : 0;
    updatePersonUI();
    renderMenuList();
    if (sceneState.cardGroup && sceneState.THREE) {
      sceneState.cardGroup.children.forEach((mesh, index) => {
        const nextTexture = canvasTexture(sceneState.THREE, cards[index], index);
        mesh.material.map?.dispose();
        mesh.material.map = nextTexture;
        mesh.material.needsUpdate = true;
      });
    }
    closePanels({ restoreFocus: false, animate: false });
    animateHeroCopy();
    ui.personButton.focus({ preventScroll: true });
  }

  function currentSubtypeDetail(card, subtypeIndex = 0) {
    const detail = card.subtypeDetails?.[subtypeIndex] || { name: card.subtypes?.[subtypeIndex] || card.category, copy: card.copy, photoCount: 0 };
    const photos = Array.isArray(detail.photos) ? detail.photos : [];
    return { ...detail, photos, photoCount: photos.length };
  }

  function renderPhotoRail(photoCount) {
    if (!ui.detailPhotoRail) return;
    const count = Math.max(0, photoCount || 0);
    ui.detailPhotoRail.replaceChildren();
    for (let index = 0; index < count; index += 1) {
      const button = document.createElement('button');
      button.className = 'photo-index-button';
      button.type = 'button';
      button.dataset.photoIndex = String(index);
      button.textContent = String(index + 1).padStart(2, '0');
      button.setAttribute('aria-label', `切换到第${index + 1}张照片`);
      button.addEventListener('click', () => changeDetailPhoto(index));
      ui.detailPhotoRail.appendChild(button);
    }
  }

  function setDetailPhotoIndex(photoIndex, photoCount, { animate = true } = {}) {
    const count = Math.max(0, photoCount || 0);
    if (!count) {
      state.detailPhotoIndex = 0;
      if (ui.detailPhotoIndex) ui.detailPhotoIndex.textContent = 'PHOTO 00 / 00';
      ui.detailPhotoRail?.querySelectorAll('.photo-index-button').forEach((button) => button.classList.remove('is-active'));
      return;
    }
    const index = ((photoIndex % count) + count) % count;
    state.detailPhotoIndex = index;
    if (!ui.detailPhotoIndex) return;
    ui.detailPhotoIndex.textContent = `PHOTO ${String(index + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
    ui.detailPhotoRail?.querySelectorAll('.photo-index-button').forEach((button) => {
      const selected = Number(button.dataset.photoIndex) === index;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-current', selected ? 'true' : 'false');
    });
    const gsap = window.gsap;
    if (animate && gsap && !reducedMotion.matches) {
      gsap.fromTo(ui.detailPhotoIndex, { y: -3, autoAlpha: .62 }, { y: 0, autoAlpha: 1, duration: .48, ease: 'power2.out' });
    }
  }

  function stopPhotoCarousel() {
    window.clearInterval(photoCarouselTimer);
    photoCarouselTimer = null;
  }

  function schedulePhotoCarousel(subtypeDetail) {
    stopPhotoCarousel();
    const photoCount = subtypeDetail.photos?.length || 0;
    if (photoCount < 2 || document.hidden || reducedMotion.matches) return;
    photoCarouselTimer = window.setInterval(() => {
      if (state.activePanel !== ui.detailPanel || state.closingPanel) return;
      changeDetailPhoto(state.detailPhotoIndex + 1, { resetTimer: false });
    }, PHOTO_CAROUSEL_INTERVAL);
  }

  function startPhotoCarousel(card, subtypeDetail) {
    const photoCount = subtypeDetail.photos?.length || 0;
    renderPhotoRail(photoCount);
    setDetailPhotoIndex(0, photoCount, { animate: false });
    subtypeDetail.photos?.forEach((photo) => {
      const source = typeof photo === 'string' ? photo : photo?.src;
      if (source) {
        const preload = new Image();
        preload.decoding = 'async';
        preload.src = source;
      }
    });
    schedulePhotoCarousel(subtypeDetail);
  }

  function restartPhotoCarousel() {
    const card = cards[state.detailCardIndex];
    if (!card || state.activePanel !== ui.detailPanel || state.closingPanel) return;
    schedulePhotoCarousel(currentEditingDetail(card));
  }

  function animateDetailContent({ photoOnly = false } = {}) {
    const gsap = window.gsap;
    if (!gsap || reducedMotion.matches) return;
    const targets = photoOnly
      ? [ui.detailDescription]
      : [ui.detailLabel, ui.detailTitle, ui.detailDescription];
    const fromVars = photoOnly ? { y: 4, autoAlpha: .58 } : { y: 8, autoAlpha: .48 };
    gsap.killTweensOf(targets);
    gsap.fromTo(targets, fromVars, { y: 0, autoAlpha: 1, duration: photoOnly ? .62 : .56, stagger: .045, ease: 'power2.out' });
  }

  function animateDetailPhotoTransition() {
    const slot = ui.detailSlot;
    if (!slot || reducedMotion.matches) return;
    window.clearTimeout(photoTransitionTimer);
    slot.classList.remove('is-photo-transitioning');
    void slot.offsetWidth;
    slot.classList.add('is-photo-transitioning');
    photoTransitionTimer = window.setTimeout(() => {
      slot.classList.remove('is-photo-transitioning');
      photoTransitionTimer = null;
    }, 760);
  }

  function changeDetailPhoto(photoIndex, { animate = true, resetTimer = true } = {}) {
    const card = cards[state.detailCardIndex];
    if (!card) return;
    const subtypeDetail = currentEditingDetail(card);
    const photoCount = subtypeDetail.photos?.length || 0;
    if (!photoCount) {
      setDetailPhotoIndex(0, 0, { animate: false });
      renderDetailSlot(card, subtypeDetail, 0);
      return;
    }
    const nextIndex = ((photoIndex % photoCount) + photoCount) % photoCount;
    const delta = nextIndex - state.detailPhotoIndex;
    const wrappedDelta = ((delta % photoCount) + photoCount) % photoCount;
    const direction = wrappedDelta <= photoCount / 2 ? 'next' : 'prev';
    if (animate) animateDetailPhotoTransition();
    setDetailPhotoIndex(nextIndex, photoCount, { animate });
    const photo = subtypeDetail.photos?.[nextIndex];
    const photoDescription = typeof photo === 'object' ? photo.description : '';
    ui.detailDescription.textContent = `${photoDescription || subtypeDetail.copy || card.copy} 当前查看第 ${nextIndex + 1} 张照片。`;
    renderDetailSlot(card, subtypeDetail, nextIndex, { transition: animate, direction });
    if (animate) animateDetailContent({ photoOnly: true });
    if (resetTimer) restartPhotoCarousel();
  }

  function renderDetailSlot(card, subtypeDetail = currentSubtypeDetail(card), photoIndex = 0, { transition = false, direction = 'next' } = {}) {
    if (!ui.detailSlot) return;
    const photo = subtypeDetail.photos?.[photoIndex];
    const imageSource = (typeof photo === 'string' ? photo : photo?.src) || subtypeDetail.image;
    const previousImage = ui.detailSlot.querySelector('.detail-photo-current') || ui.detailSlot.querySelector('img');
    ui.detailSlot.classList.toggle('has-image', Boolean(imageSource));
    ui.detailSlot.classList.toggle('is-position-editable', Boolean(developerMode && inlineDraft && ui.inlineEditor && !ui.inlineEditor.hidden && imageSource));
    if (imageSource) {
      const image = document.createElement('img');
      image.className = 'detail-photo-current';
      image.src = imageSource;
      image.alt = (typeof photo === 'object' && photo.alt) || `${subtypeDetail.name || card.title}第${photoIndex + 1}张图片`;
      const positionX = Number.isFinite(Number(photo?.positionX)) ? Number(photo.positionX) : (Number.isFinite(Number(subtypeDetail.imagePosition?.x)) ? Number(subtypeDetail.imagePosition.x) : (Number.isFinite(Number(card.imagePosition?.x)) ? Number(card.imagePosition.x) : 50));
      const positionY = Number.isFinite(Number(photo?.positionY)) ? Number(photo.positionY) : (Number.isFinite(Number(subtypeDetail.imagePosition?.y)) ? Number(subtypeDetail.imagePosition.y) : (Number.isFinite(Number(card.imagePosition?.y)) ? Number(card.imagePosition.y) : 50));
      image.style.objectPosition = `${positionX}% ${positionY}%`;
      image.draggable = false;
      image.decoding = 'async';
      window.clearTimeout(photoImageCleanupTimer);
      if (transition && previousImage) {
        previousImage.classList.remove('detail-photo-current');
        previousImage.classList.add('detail-photo-previous');
        ui.detailSlot.style.setProperty('--photo-shift', direction === 'prev' ? '-14px' : '14px');
        ui.detailSlot.replaceChildren(previousImage, image);
        photoImageCleanupTimer = window.setTimeout(() => {
          previousImage.remove();
          photoImageCleanupTimer = null;
        }, 760);
      } else {
        ui.detailSlot.replaceChildren(image);
      }
      return;
    }
    window.clearTimeout(photoImageCleanupTimer);
    photoImageCleanupTimer = null;
    ui.detailSlot.replaceChildren();
    const title = document.createElement('span');
    title.textContent = (typeof photo === 'object' && photo.title) || subtypeDetail.name || '图片位置';
    const note = document.createElement('small');
    note.textContent = `照片 ${String(photoIndex + 1).padStart(2, '0')} · 把这一分类的图片放到这里`;
    ui.detailSlot.append(title, note);
  }

  function selectDetailSubtype(card, subtypeIndex, { animate = true } = {}) {
    const subtypeDetail = currentSubtypeDetail(card, subtypeIndex);
    state.detailSubtypeIndex = subtypeIndex;
    state.detailPhotoIndex = 0;
    ui.detailSubtypes.querySelectorAll('.subtype-button').forEach((item, index) => {
      const selected = index === subtypeIndex;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    const firstPhoto = subtypeDetail.photos?.[0];
    const firstPhotoDescription = typeof firstPhoto === 'object' ? firstPhoto.description : '';
    const photoCount = subtypeDetail.photos?.length || 0;
    ui.detailDescription.textContent = photoCount
      ? `${firstPhotoDescription || subtypeDetail.copy || card.copy} 当前查看第 1 张照片。`
      : `${subtypeDetail.copy || card.copy} 尚未加入照片。`;
    ui.detailSlot.setAttribute('aria-label', `${subtypeDetail.name || card.title}图片区域`);
    renderDetailSlot(card, subtypeDetail, 0);
    stopPhotoCarousel();
    startPhotoCarousel(card, subtypeDetail);
    if (ui.detailStatus) {
      ui.detailStatus.textContent = photoCount ? `已接入 · ${photoCount} 张照片` : '待补充 · 0 张照片';
      ui.detailStatus.dataset.hasMedia = String(photoCount > 0);
    }
    refreshInlineEditor();
    if (animate) animateDetailContent();
  }

  function clonePhoto(photo) {
    if (typeof photo === 'string') return { src: photo, title: '', alt: '', description: '', positionX: 50, positionY: 50 };
    return { src: photo?.src || '', title: photo?.title || '', alt: photo?.alt || '', description: photo?.description || '', positionX: Number.isFinite(Number(photo?.positionX)) ? Number(photo.positionX) : 50, positionY: Number.isFinite(Number(photo?.positionY)) ? Number(photo.positionY) : 50 };
  }

  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
  function currentEditingDetail(card) {
    const detail = currentSubtypeDetail(card, state.detailSubtypeIndex);
    if (inlineDraft && ui.inlineEditor && !ui.inlineEditor.hidden && inlineDraft.subtypeName === detail.name) detail.photos = inlineDraft.photos.map(clonePhoto);
    return detail;
  }

  function coverSource() {
    return inlineDraft?.cardImage || inlineDraft?.photos?.[0]?.src || '';
  }

  function renderInlineCoverPreview() {
    const preview = ui.inlineCoverPreview;
    if (!preview || !inlineDraft) return;
    const source = coverSource();
    preview.replaceChildren();
    preview.classList.remove('is-broken');
    preview.classList.toggle('has-image', Boolean(source));
    preview.classList.toggle('is-position-editable', Boolean(developerMode && source));
    if (!source) {
      const empty = document.createElement('span');
      empty.textContent = '未设置封面';
      preview.appendChild(empty);
      return;
    }
    const image = document.createElement('img');
    image.src = source;
    image.alt = '合集封面预览';
    image.draggable = false;
    image.style.objectPosition = `${inlineDraft.cardImagePosition?.x ?? 50}% ${inlineDraft.cardImagePosition?.y ?? 50}%`;
    image.addEventListener('error', () => preview.classList.add('is-broken'));
    preview.appendChild(image);
  }

  function beginCoverPositionDrag(event) {
    if (!developerMode || !inlineDraft || ui.inlineEditor?.hidden || !coverSource()) return;
    const image = ui.inlineCoverPreview?.querySelector('img');
    if (!image) return;
    state.coverDrag = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, startPositionX: inlineDraft.cardImagePosition?.x ?? 50, startPositionY: inlineDraft.cardImagePosition?.y ?? 50, historyPushed: false };
    ui.inlineCoverPreview.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }

  function moveCoverPositionDrag(event) {
    if (!state.coverDrag || !inlineDraft || !ui.inlineCoverPreview) return;
    const rect = ui.inlineCoverPreview.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    if (!state.coverDrag.historyPushed) { pushInlineHistory(); state.coverDrag.historyPushed = true; }
    const dx = event.clientX - state.coverDrag.startX;
    const dy = event.clientY - state.coverDrag.startY;
    inlineDraft.cardImagePosition = {
      x: Math.round(clamp(state.coverDrag.startPositionX - (dx / rect.width) * 100, 0, 100) * 10) / 10,
      y: Math.round(clamp(state.coverDrag.startPositionY - (dy / rect.height) * 100, 0, 100) * 10) / 10
    };
    if (!inlineDraft.cardImage) {
      inlineDraft.cardImage = coverSource();
      if (ui.inlineCardImage) ui.inlineCardImage.value = inlineDraft.cardImage;
    }
    const image = ui.inlineCoverPreview.querySelector('img');
    if (image) image.style.objectPosition = `${inlineDraft.cardImagePosition.x}% ${inlineDraft.cardImagePosition.y}%`;
    setInlineStatus(`封面取景 ${inlineDraft.cardImagePosition.x}% / ${inlineDraft.cardImagePosition.y}%`);
  }

  function endCoverPositionDrag(event) {
    if (!state.coverDrag) return;
    if (event?.pointerId != null && ui.inlineCoverPreview?.hasPointerCapture?.(event.pointerId)) ui.inlineCoverPreview.releasePointerCapture?.(event.pointerId);
    state.coverDrag = null;
    setInlineStatus('封面取景已调整，保存后更新合集卡片。');
  }

  function beginDetailPositionDrag(event) {
    if (!developerMode || !inlineDraft || ui.inlineEditor?.hidden || !ui.detailSlot?.classList.contains('has-image')) return;
    const image = ui.detailSlot.querySelector('img');
    const photo = inlineDraft.photos[state.detailPhotoIndex];
    if (!image || !photo) return;
    state.detailDrag = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, startPositionX: photo.positionX ?? 50, startPositionY: photo.positionY ?? 50, historyPushed: false };
    ui.detailSlot.setPointerCapture?.(event.pointerId);
    ui.detailSlot.classList.add('is-position-dragging');
    event.preventDefault();
  }

  function moveDetailPositionDrag(event) {
    if (!state.detailDrag || !inlineDraft) return;
    const image = ui.detailSlot.querySelector('img');
    const photo = inlineDraft.photos[state.detailPhotoIndex];
    const rect = ui.detailSlot.getBoundingClientRect();
    if (!image || !photo || !rect.width || !rect.height) return;
    const dx = event.clientX - state.detailDrag.startX;
    const dy = event.clientY - state.detailDrag.startY;
    if (!state.detailDrag.historyPushed) { pushInlineHistory(); state.detailDrag.historyPushed = true; }
    photo.positionX = Math.round(clamp(state.detailDrag.startPositionX - (dx / rect.width) * 100, 0, 100) * 10) / 10;
    photo.positionY = Math.round(clamp(state.detailDrag.startPositionY - (dy / rect.height) * 100, 0, 100) * 10) / 10;
    if (inlineDraft.cardImage === photo.src) inlineDraft.cardImagePosition = { x: photo.positionX, y: photo.positionY };
    image.style.objectPosition = `${photo.positionX}% ${photo.positionY}%`;
    setInlineStatus(`取景位置 ${photo.positionX}% / ${photo.positionY}%`);
  }

  function endDetailPositionDrag(event) {
    if (!state.detailDrag) return;
    state.detailDrag = null;
    if (event?.pointerId != null && ui.detailSlot.hasPointerCapture?.(event.pointerId)) ui.detailSlot.releasePointerCapture?.(event.pointerId);
    ui.detailSlot.classList.remove('is-position-dragging');
    setInlineStatus('取景位置已调整，保存后写入本地。');
  }

  function activeDetailCard() { return cards[state.detailCardIndex]; }

  function captureInlineDraft() {
    if (!inlineDraft || !ui.inlineEditor) return;
    inlineDraft.cardTitle = ui.inlineCardTitle?.value.trim() || '';
    inlineDraft.cardLabel = ui.inlineCardLabel?.value.trim() || '';
    inlineDraft.cardCategory = ui.inlineCardCategory?.value.trim() || '';
    inlineDraft.cardCopy = ui.inlineCardCopy?.value.trim() || '';
    inlineDraft.subtypeCopy = ui.inlineSubtypeCopy?.value.trim() || '';
    inlineDraft.cardImage = ui.inlineCardImage?.value.trim() || '';
    inlineDraft.photos = [...ui.inlinePhotoList.querySelectorAll('.inline-photo-row')].map((row, index) => ({
      src: row.querySelector('[data-inline-photo-src]')?.value.trim() || '',
      title: row.querySelector('[data-inline-photo-title]')?.value.trim() || '',
      alt: row.querySelector('[data-inline-photo-alt]')?.value.trim() || '',
      description: row.querySelector('[data-inline-photo-description]')?.value.trim() || '',
      positionX: inlineDraft.photos[index]?.positionX ?? 50,
      positionY: inlineDraft.photos[index]?.positionY ?? 50
    })).filter((photo) => photo.src);
  }

  function setInlineStatus(message, isError = false) {
    if (!ui.inlineStatus) return;
    ui.inlineStatus.textContent = message;
    ui.inlineStatus.classList.toggle('is-error', isError);
  }

  function cloneInlineDraft() { return inlineDraft ? JSON.parse(JSON.stringify(inlineDraft)) : null; }
  function updateInlineUndo() { if (ui.inlineUndo) ui.inlineUndo.disabled = inlineHistory.length === 0; }
  function pushInlineHistory() {
    captureInlineDraft();
    const snapshot = cloneInlineDraft();
    if (!snapshot) return;
    inlineHistory.push(snapshot);
    if (inlineHistory.length > 18) inlineHistory.shift();
    updateInlineUndo();
  }
  function undoInlineChange() {
    const previous = inlineHistory.pop();
    if (!previous) return;
    inlineDraft = previous;
    ui.inlineCardTitle.value = inlineDraft.cardTitle; ui.inlineCardLabel.value = inlineDraft.cardLabel; ui.inlineCardCategory.value = inlineDraft.cardCategory;
    ui.inlineCardCopy.value = inlineDraft.cardCopy; ui.inlineSubtypeCopy.value = inlineDraft.subtypeCopy; ui.inlineCardImage.value = inlineDraft.cardImage;
    renderInlinePhotos();
    renderInlineCoverPreview();
    const card = activeDetailCard();
    if (card) renderDetailSlot(card, currentEditingDetail(card), state.detailPhotoIndex);
    setInlineStatus('已撤销上一步操作'); updateInlineUndo();
  }

  function renderInlinePhotos() {
    if (!inlineDraft || !ui.inlinePhotoList) return;
    ui.inlinePhotoList.replaceChildren();
    inlineDraft.photos.forEach((photo, index) => {
      const row = document.createElement('div');
      row.className = 'inline-photo-row';
      row.dataset.photoIndex = String(index);
      const thumb = document.createElement('div');
      thumb.className = 'inline-photo-thumb';
      if (photo.src) {
        const image = document.createElement('img'); image.src = photo.src; image.alt = photo.alt || '';
        image.addEventListener('error', () => thumb.classList.add('is-broken'));
        thumb.appendChild(image);
      } else thumb.textContent = '—';
      const number = document.createElement('span'); number.className = 'inline-photo-number'; number.textContent = String(index + 1).padStart(2, '0');
      const fields = document.createElement('div'); fields.className = 'inline-photo-fields';
      const makeInput = (label, value, attr, type = 'input') => {
        const wrapper = document.createElement('label'); wrapper.textContent = label;
        const field = document.createElement(type); field.setAttribute(attr, 'true'); field.value = value || '';
        if (type === 'textarea') field.rows = 2;
        field.addEventListener('input', () => { inlineDraft.photos[index][attr.replace('data-inline-photo-', '')] = field.value; });
        wrapper.appendChild(field); return wrapper;
      };
      fields.append(makeInput('标题', photo.title, 'data-inline-photo-title'), makeInput('照片介绍', photo.description, 'data-inline-photo-description', 'textarea'));
      const pathField = makeInput('路径', photo.src, 'data-inline-photo-src'); pathField.classList.add('inline-path-field'); fields.appendChild(pathField);
      const actions = document.createElement('div'); actions.className = 'inline-photo-actions';
      const move = (label, direction) => { const button = document.createElement('button'); button.type = 'button'; button.className = 'inline-icon-button'; button.textContent = label; button.setAttribute('aria-label', direction < 0 ? '上移照片' : '下移照片'); button.addEventListener('click', () => { const next = index + direction; if (next < 0 || next >= inlineDraft.photos.length) return; pushInlineHistory(); [inlineDraft.photos[index], inlineDraft.photos[next]] = [inlineDraft.photos[next], inlineDraft.photos[index]]; renderInlinePhotos(); }); return button; };
      actions.append(move('↑', -1), move('↓', 1));
      const replaceInput = document.createElement('input'); replaceInput.type = 'file'; replaceInput.accept = 'image/*'; replaceInput.hidden = true;
      const replace = document.createElement('button'); replace.type = 'button'; replace.className = 'inline-text-button'; replace.textContent = '替换'; replace.addEventListener('click', () => replaceInput.click());
      replaceInput.addEventListener('change', () => { if (replaceInput.files?.[0]) { pushInlineHistory(); uploadInlineFiles([replaceInput.files[0]], index); } replaceInput.value = ''; });
      actions.append(replace, replaceInput);
      const cover = document.createElement('button'); cover.type = 'button'; cover.className = `inline-text-button inline-cover-button${inlineDraft.cardImage === photo.src ? ' is-active' : ''}`; cover.textContent = inlineDraft.cardImage === photo.src ? '已是封面' : '设封面'; cover.addEventListener('click', () => { pushInlineHistory(); inlineDraft.cardImage = photo.src; inlineDraft.cardImagePosition = { x: photo.positionX ?? 50, y: photo.positionY ?? 50 }; if (ui.inlineCardImage) ui.inlineCardImage.value = photo.src; renderInlinePhotos(); setInlineStatus('已选择这张照片作为合集封面'); });
      actions.appendChild(cover);
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'inline-text-button is-danger'; remove.textContent = '删除'; remove.addEventListener('click', () => { pushInlineHistory(); inlineDraft.photos.splice(index, 1); if (inlineDraft.cardImage === photo.src) inlineDraft.cardImage = ''; renderInlinePhotos(); });
      actions.appendChild(remove);
      row.addEventListener('dragover', (event) => { event.preventDefault(); row.classList.add('is-drop-target'); });
      row.addEventListener('dragleave', () => row.classList.remove('is-drop-target'));
      row.addEventListener('drop', (event) => { event.preventDefault(); row.classList.remove('is-drop-target'); const files = [...(event.dataTransfer?.files || [])]; if (files.length) { pushInlineHistory(); uploadInlineFiles(files, index); } });
      row.append(number, thumb, fields, actions); ui.inlinePhotoList.appendChild(row);
    });
    ui.inlineEmpty?.classList.toggle('is-visible', inlineDraft.photos.length === 0);
    renderInlineCoverPreview();
  }

  function refreshInlineEditor() {
    const card = activeDetailCard();
    const detail = card ? currentSubtypeDetail(card, state.detailSubtypeIndex) : null;
    if (!card || !detail || !ui.inlineEditor || ui.inlineEditor.hidden) return;
    captureInlineDraft();
    inlineDraft = { cardTitle: card.title || '', cardLabel: card.label || '', cardCategory: card.category || '', cardCopy: card.copy || '', subtypeName: detail.name || '', subtypeCopy: detail.copy || '', cardImage: card.image || '', cardImagePosition: { x: card.imagePosition?.x ?? 50, y: card.imagePosition?.y ?? 50 }, photos: detail.photos.map(clonePhoto) };
    inlineHistory = [];
    updateInlineUndo();
    ui.inlineSubtypeName.textContent = ` / ${inlineDraft.subtypeName}`;
    ui.inlineCardTitle.value = inlineDraft.cardTitle; ui.inlineCardLabel.value = inlineDraft.cardLabel; ui.inlineCardCategory.value = inlineDraft.cardCategory;
    ui.inlineCardCopy.value = inlineDraft.cardCopy; ui.inlineSubtypeCopy.value = inlineDraft.subtypeCopy; ui.inlineCardImage.value = inlineDraft.cardImage;
    renderInlinePhotos();
    renderInlineCoverPreview();
  }

  function openInlineEditor() {
    const card = activeDetailCard();
    if (!developerMode || !card || !ui.inlineEditor) return;
    stopPhotoCarousel();
    const detail = currentSubtypeDetail(card, state.detailSubtypeIndex);
    inlineDraft = { cardTitle: card.title || '', cardLabel: card.label || '', cardCategory: card.category || '', cardCopy: card.copy || '', subtypeName: detail.name || '', subtypeCopy: detail.copy || '', cardImage: card.image || '', cardImagePosition: { x: card.imagePosition?.x ?? 50, y: card.imagePosition?.y ?? 50 }, photos: detail.photos.map(clonePhoto) };
    inlineHistory = [];
    if (window.innerWidth < 700) {
      if (ui.detailPanel) ui.detailPanel.scrollTop = 0;
      frame.scrollTop = 0;
      frame.scrollLeft = 0;
    }
    updateInlineUndo();
    ui.inlineEditor.hidden = false; ui.inlineEditor.setAttribute('aria-hidden', 'false'); ui.inlineEditorTrigger?.setAttribute('aria-expanded', 'true');
    ui.inlineSubtypeName.textContent = ` / ${inlineDraft.subtypeName}`;
    ui.inlineCardTitle.value = inlineDraft.cardTitle; ui.inlineCardLabel.value = inlineDraft.cardLabel; ui.inlineCardCategory.value = inlineDraft.cardCategory;
    ui.inlineCardCopy.value = inlineDraft.cardCopy; ui.inlineSubtypeCopy.value = inlineDraft.subtypeCopy; ui.inlineCardImage.value = inlineDraft.cardImage;
    setInlineStatus('可直接编辑当前子分类'); renderInlinePhotos();
    renderDetailSlot(card, currentEditingDetail(card), state.detailPhotoIndex);
    const gsap = window.gsap;
    if (gsap && !reducedMotion.matches) gsap.fromTo(ui.inlineEditor, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .42, ease: 'power3.out' });
    if (window.innerWidth >= 700) setTimeout(() => ui.inlineCardTitle?.focus(), 0);
  }

  function closeInlineEditor({ restoreFocus = true } = {}) {
    if (!ui.inlineEditor) return;
    ui.inlineEditor.hidden = true; ui.inlineEditor.setAttribute('aria-hidden', 'true'); ui.inlineEditorTrigger?.setAttribute('aria-expanded', 'false'); inlineDraft = null; inlineHistory = []; updateInlineUndo();
    const card = activeDetailCard();
    if (card) renderDetailSlot(card, currentSubtypeDetail(card), state.detailPhotoIndex);
    if (state.activePanel === ui.detailPanel && !state.closingPanel) restartPhotoCarousel();
    if (restoreFocus) ui.inlineEditorTrigger?.focus({ preventScroll: true });
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result || '')); reader.onerror = reject; reader.readAsDataURL(file); });
  }

  async function uploadInlineFiles(files, replaceIndex = -1) {
    if (!files?.length || !inlineDraft) return;
    inlineUploadCount += files.length; setInlineStatus(`正在接入 ${files.length} 张照片…`);
    try {
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        const dataUrl = await fileToDataUrl(file);
        const response = await fetch('api/gallery-upload', { method: 'POST', headers: editorRequestHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify({ personId: activePersonId, cardIndex: state.detailCardIndex, filename: file.name, data: dataUrl }) });
        if (!response.ok) throw new Error(response.status === 403 ? 'denied' : 'upload failed');
        const result = await response.json();
        const photo = { src: result.path, title: file.name.replace(/\.[^.]+$/, ''), alt: '', description: '', positionX: 50, positionY: 50 };
        if (replaceIndex >= 0) {
          const previous = inlineDraft.photos[replaceIndex];
          inlineDraft.photos[replaceIndex] = photo;
          if (previous && inlineDraft.cardImage === previous.src) { inlineDraft.cardImage = photo.src; inlineDraft.cardImagePosition = { x: 50, y: 50 }; if (ui.inlineCardImage) ui.inlineCardImage.value = photo.src; }
          replaceIndex = -1;
        } else inlineDraft.photos.push(photo);
      }
      renderInlinePhotos();
      const activeCard = activeDetailCard();
      if (activeCard) renderDetailSlot(activeCard, currentEditingDetail(activeCard), state.detailPhotoIndex);
      setInlineStatus('照片已接入，保存后更新展廊。');
    } catch (error) { setInlineStatus(error?.message === 'denied' ? '没有编辑权限，请用开发者模式打开。' : '照片接入失败，请确认本地服务仍在运行。', true); }
    inlineUploadCount = Math.max(0, inlineUploadCount - files.length);
  }

  function buildContentOverride() {
    captureInlineDraft();
    const source = window.LIN_GALLERY_DATA && typeof window.LIN_GALLERY_DATA === 'object' ? window.LIN_GALLERY_DATA : { version: 1, people: {} };
    source.version ||= 1; source.people ||= {};
    const person = source.people[activePersonId] ||= { cards: {} }; person.cards ||= {};
    const key = String(state.detailCardIndex); const override = person.cards[key] ||= {};
    override.label = inlineDraft.cardLabel; override.title = inlineDraft.cardTitle; override.category = inlineDraft.cardCategory; override.copy = inlineDraft.cardCopy;
    if (inlineDraft.cardImage) override.image = inlineDraft.cardImage; else delete override.image;
    if (inlineDraft.cardImagePosition) override.imagePosition = { x: inlineDraft.cardImagePosition.x, y: inlineDraft.cardImagePosition.y }; else delete override.imagePosition;
    override.subtypes ||= {};
    override.subtypes[inlineDraft.subtypeName] = { copy: inlineDraft.subtypeCopy, photos: inlineDraft.photos };
    return source;
  }

  function applySavedContent(source) {
    const refreshed = applyContentOverrides(defaultPeople, source);
    people[activePersonId] = refreshed[activePersonId]; cards = people[activePersonId].cards;
    updatePersonUI(); renderMenuList();
    if (sceneState.cardGroup && sceneState.THREE) sceneState.cardGroup.children.forEach((mesh, index) => { mesh.material.map?.dispose(); mesh.material.map = canvasTexture(sceneState.THREE, cards[index], index); mesh.material.needsUpdate = true; });
    openDetail(state.detailCardIndex, ui.inlineEditorTrigger);
  }

  async function saveInlineEditor() {
    if (!inlineDraft || inlineUploadCount) return;
    const source = buildContentOverride(); setInlineStatus('正在保存…');
    try {
      const response = await fetch('api/gallery-data', { method: 'PUT', headers: editorRequestHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify(source) });
      if (!response.ok) throw new Error(response.status === 403 ? 'denied' : 'save failed');
      window.LIN_GALLERY_DATA = source; setInlineStatus('已保存。'); applySavedContent(source); closeInlineEditor();
    } catch (error) { setInlineStatus(error?.message === 'denied' ? '没有编辑权限，请用开发者模式打开。' : '保存失败，请确认本地服务仍在运行。', true); }
  }

  function openDetail(index, opener) {
    const cardIndex = wrap(index);
    const card = cards[cardIndex];
    state.detailCardIndex = cardIndex;
    state.detailSubtypeIndex = 0;
    document.querySelector('[data-detail-index]').textContent = `${String(cardIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    document.querySelector('[data-detail-category]').textContent = card.category;
    ui.detailLabel.textContent = card.label;
    ui.detailTitle.textContent = card.title;
    ui.detailType.textContent = card.type;
    ui.detailDescription.textContent = card.copy;
    ui.detailSubtypes.replaceChildren();
    card.subtypes.forEach((subtype, subtypeIndex) => {
      const button = document.createElement('button');
      button.className = `subtype-button${subtypeIndex === 0 ? ' is-selected' : ''}`;
      button.type = 'button';
      const subtypeDetail = currentSubtypeDetail(card, subtypeIndex);
      const subtypePhoto = subtypeDetail.photos?.[0];
      const subtypeSource = typeof subtypePhoto === 'string' ? subtypePhoto : subtypePhoto?.src;
      button.innerHTML = `<span class="subtype-title"></span><small class="subtype-meta"></small>`;
      button.querySelector('.subtype-title').textContent = subtype;
      button.querySelector('.subtype-meta').textContent = `${String(subtypeDetail.photos?.length || 0).padStart(2, '0')} PHOTO`;
      button.style.setProperty('--subtype-color', card.color || '#d8d2c8');
      if (subtypeSource) {
        button.classList.add('has-image');
        button.style.setProperty('--subtype-image', `url("${subtypeSource.replace(/"/g, '\\"')}")`);
      }
      button.setAttribute('aria-pressed', String(subtypeIndex === 0));
      button.addEventListener('click', () => selectDetailSubtype(card, subtypeIndex));
      bindHoverCardInteraction(button);
      ui.detailSubtypes.appendChild(button);
    });
    openPanel(ui.detailPanel, opener);
    selectDetailSubtype(card, 0, { animate: false });
    animateDetailContent();
  }

  function showFallback() {
    loading.classList.add('is-ready');
    canvas.style.display = 'none';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.setAttribute('data-webgl-error', 'true');
    fallback.classList.add('is-visible');
    fallback.setAttribute('aria-hidden', 'false');
    if (!document.querySelector('.status-error')) document.querySelector('.stage-status').insertAdjacentHTML('afterbegin', '<span class="status-error">三维视图离线</span>');
  }

  function bindUI() {
    const screenUi = document.querySelector('.screen-ui');
    if (screenUi && ui.backgroundEditor && ui.backgroundEditor.parentElement !== screenUi) {
      screenUi.appendChild(ui.backgroundEditor);
      ui.backgroundEditor.classList.add('is-root-editor');
    }
    document.querySelectorAll('[data-build-mode]').forEach((item) => { item.textContent = editorRequested ? '开发者编辑版' : '预览版'; });
    window.addEventListener('resize', setScale, { passive: true }); setScale();
    window.addEventListener('pointermove', (event) => updateHeroParallax(event.clientX, event.clientY), { passive: true });
    window.addEventListener('blur', () => updateHeroParallax(-1, -1), { passive: true });
    ui.themeToggle?.addEventListener('click', () => applyTheme(isDarkTheme() ? 'light' : 'dark'));
    ui.backgroundOpenButtons.forEach((button) => button.addEventListener('click', toggleBackgroundEditor));
    ui.backgroundClose?.addEventListener('click', () => setBackgroundEditorOpen(false));
    [[ui.bgColor1, 'color1'], [ui.bgColor2, 'color2'], [ui.bgColor3, 'color3']].forEach(([input, key]) => input?.addEventListener('input', () => { const palette = activeBackgroundPalette(); palette[key] = input.value; localStorage.setItem('lin-gallery-background', JSON.stringify(backgroundPalettes)); applyBackgroundPalette(); }));
    const backgroundRanges = [['bgMouseForce','mouseForce'],['bgCursorSize','cursorSize'],['bgResolution','resolution'],['bgAutoSpeed','autoSpeed'],['bgAutoIntensity','autoIntensity'],['bgPressure','pressure'],['bgViscousCoef','viscousCoef'],['bgViscousIterations','viscousIterations']];
    backgroundRanges.forEach(([control, key]) => ui[control]?.addEventListener('input', () => { const palette = activeBackgroundPalette(); palette[key] = Number(ui[control].value); const output = document.querySelector(`[data-${control.replace(/^bg/, 'bg-')}-value]`); if (output) output.textContent = Number(ui[control].value).toFixed(Number(ui[control].step) < .1 ? 2 : 1); localStorage.setItem('lin-gallery-background', JSON.stringify(backgroundPalettes)); applyBackgroundPalette(); }));
    [[ui.bgBounce, 'bounceEdges'], [ui.bgAutoAnimate, 'autoAnimate'], [ui.bgViscous, 'viscousEnabled']].forEach(([input, key]) => input?.addEventListener('change', () => { const palette = activeBackgroundPalette(); palette[key] = input.checked; localStorage.setItem('lin-gallery-background', JSON.stringify(backgroundPalettes)); applyBackgroundPalette(); }));
    ui.backgroundReset?.addEventListener('click', () => { backgroundPalettes[isDarkTheme() ? 'dark' : 'light'] = { ...BACKGROUND_DEFAULTS[isDarkTheme() ? 'dark' : 'light'] }; localStorage.setItem('lin-gallery-background', JSON.stringify(backgroundPalettes)); applyBackgroundPalette(); });
    [[ui.auroraColor1, 0], [ui.auroraColor2, 1], [ui.auroraColor3, 2]].forEach(([input, index]) => input?.addEventListener('input', () => { const palette = activeAuroraPalette(); palette.colorStops[index] = input.value; localStorage.setItem('lin-gallery-aurora', JSON.stringify(auroraPalettes)); applyAuroraPalette(); }));
    [['auroraSpeed', 'speed'], ['auroraAmplitude', 'amplitude'], ['auroraBlend', 'blend']].forEach(([control, key]) => ui[control]?.addEventListener('input', () => { const palette = activeAuroraPalette(); palette[key] = Number(ui[control].value); const output = document.querySelector(`[data-${control.replace(/^aurora/, 'aurora-')}-value]`); if (output) output.textContent = Number(ui[control].value).toFixed(2); localStorage.setItem('lin-gallery-aurora', JSON.stringify(auroraPalettes)); applyAuroraPalette(); }));
    ui.auroraLightMode?.addEventListener('change', () => { const palette = activeAuroraPalette(); palette.lightMode = ui.auroraLightMode.checked; localStorage.setItem('lin-gallery-aurora', JSON.stringify(auroraPalettes)); applyAuroraPalette(); });
    ui.auroraReset?.addEventListener('click', () => { const theme = isDarkTheme() ? 'dark' : 'light'; auroraPalettes[theme] = { ...AURORA_DEFAULTS[theme], colorStops: [...AURORA_DEFAULTS[theme].colorStops] }; localStorage.setItem('lin-gallery-aurora', JSON.stringify(auroraPalettes)); applyAuroraPalette(); });
    window.linAuroraBackground?.init(ui.detailAurora, activeAuroraPalette());
    window.linAuroraBackground?.setVisible(false);
    ui.personButton.addEventListener('click', (event) => {
      if (ui.personPanel.classList.contains('is-open')) closePanels();
      else { openPanel(ui.personPanel, event.currentTarget); ui.personButton.setAttribute('aria-expanded', 'true'); }
    });
    document.querySelectorAll('[data-close-person]').forEach((button) => button.addEventListener('click', closePanels));
    document.querySelectorAll('[data-open-about]').forEach((button) => button.addEventListener('click', (event) => openPanel(ui.aboutPanel, event.currentTarget)));
    document.querySelectorAll('[data-open-contact]').forEach((button) => button.addEventListener('click', (event) => openPanel(ui.contactPanel, event.currentTarget)));
    document.querySelector('[data-open-menu]').addEventListener('click', (event) => {
      if (ui.menuPanel.classList.contains('is-open')) closePanels();
      else { openPanel(ui.menuPanel, event.currentTarget); ui.menuButton.setAttribute('aria-expanded', 'true'); }
    });
    document.querySelectorAll('[data-close-menu]').forEach((button) => button.addEventListener('click', closePanels));
    document.querySelectorAll('[data-close-detail]').forEach((button) => button.addEventListener('click', closePanels));
    document.querySelectorAll('[data-close-about]').forEach((button) => button.addEventListener('click', closePanels));
    document.querySelectorAll('[data-close-contact]').forEach((button) => button.addEventListener('click', closePanels));
    ui.inlineEditorTrigger?.addEventListener('click', openInlineEditor);
    ui.detailReplace?.addEventListener('click', () => { if (!developerMode) return; if (!inlineDraft || ui.inlineEditor?.hidden) openInlineEditor(); setTimeout(() => ui.detailReplaceFile?.click(), 0); });
    ui.detailReplaceFile?.addEventListener('change', () => { if (ui.detailReplaceFile.files?.[0]) uploadInlineFiles([ui.detailReplaceFile.files[0]], state.detailPhotoIndex); ui.detailReplaceFile.value = ''; });
    ui.inlineEditorClose?.addEventListener('click', () => closeInlineEditor());
    ui.inlineUndo?.addEventListener('click', undoInlineChange);
    ui.inlineSave?.addEventListener('click', saveInlineEditor);
    ui.inlineCardImage?.addEventListener('input', () => {
      if (!inlineDraft) return;
      inlineDraft.cardImage = ui.inlineCardImage.value.trim();
      renderInlineCoverPreview();
    });
    ui.inlineFile?.addEventListener('change', () => { if (ui.inlineFile.files?.length) uploadInlineFiles([...ui.inlineFile.files]); ui.inlineFile.value = ''; });
    ui.inlineDropzone?.addEventListener('click', () => ui.inlineFile?.click());
    ui.inlineDropzone?.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); ui.inlineFile?.click(); } });
    ui.inlineDropzone?.addEventListener('dragover', (event) => { event.preventDefault(); ui.inlineDropzone.classList.add('is-dragover'); });
    ui.inlineDropzone?.addEventListener('dragleave', () => ui.inlineDropzone.classList.remove('is-dragover'));
    ui.inlineDropzone?.addEventListener('drop', (event) => { event.preventDefault(); ui.inlineDropzone.classList.remove('is-dragover'); const files = [...(event.dataTransfer?.files || [])]; if (files.length) uploadInlineFiles(files); });
    ui.detailSlot?.addEventListener('pointerdown', beginDetailPositionDrag);
    ui.detailSlot?.addEventListener('pointermove', moveDetailPositionDrag);
    ui.detailSlot?.addEventListener('pointerup', endDetailPositionDrag);
    ui.detailSlot?.addEventListener('pointercancel', endDetailPositionDrag);
    ui.detailSlot?.addEventListener('lostpointercapture', endDetailPositionDrag);
    bindHoverCardInteraction(ui.detailSlot);
    ui.inlineCoverPreview?.addEventListener('pointerdown', beginCoverPositionDrag);
    ui.inlineCoverPreview?.addEventListener('pointermove', moveCoverPositionDrag);
    ui.inlineCoverPreview?.addEventListener('pointerup', endCoverPositionDrag);
    ui.inlineCoverPreview?.addEventListener('pointercancel', endCoverPositionDrag);
    ui.inlineCoverPreview?.addEventListener('lostpointercapture', endCoverPositionDrag);
    const handlePhotoWheel = (event) => {
      if (state.activePanel !== ui.detailPanel) return;
      event.preventDefault();
      changeDetailPhoto(state.detailPhotoIndex + (Math.sign(event.deltaY || event.deltaX) || 1));
    };
    ui.detailSlot?.addEventListener('wheel', handlePhotoWheel, { passive: false });
    ui.detailPhotoRail?.addEventListener('wheel', handlePhotoWheel, { passive: false });
    renderPersonList();
    renderMenuList();
    canvas.addEventListener('pointerdown', (event) => { const hit = pickCard(event); state.down = true; state.pointerX = event.clientX; state.pointerStartX = event.clientX; state.pointerStartY = event.clientY; state.pointerHitIndex = hit?.userData.index ?? -1; state.activeCardIndex = state.pointerHitIndex; state.hoveredIndex = -1; const touchDrag = event.pointerType === 'touch' || window.innerWidth < 700; state.dragScale = touchDrag ? 1 : Math.max(.001, window.innerWidth / FRAME.width); state.dragSensitivity = touchDrag ? .006 : .008; scheduleAutoResume(); canvas.dataset.dragging = 'true'; canvas.focus({ preventScroll: true }); canvas.setPointerCapture(event.pointerId); });
    canvas.addEventListener('pointermove', (event) => {
      if (state.down) {
        const moved = Math.hypot(event.clientX - state.pointerStartX, event.clientY - state.pointerStartY);
        if (moved > 8) state.pointerHitIndex = -1;
        const delta = (event.clientX - state.pointerX) / Math.max(state.dragScale, .001); state.target -= delta * state.dragSensitivity; state.pointerX = event.clientX; scheduleAutoResume(); updateStatus();
        return;
      }
      const hit = pickCard(event); state.hoveredIndex = hit?.userData.index ?? -1;
      const rect = canvas.getBoundingClientRect();
      state.cursorNdcX = rect.width ? Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1)) : 0;
      state.cursorNdcY = rect.height ? Math.max(-1, Math.min(1, -((event.clientY - rect.top) / rect.height) * 2 + 1)) : 0;
      canvas.dataset.hovering = String(state.hoveredIndex >= 0);
    });
    const stopDrag = (event) => {
      const clickIndex = state.pointerHitIndex;
      const wasClick = clickIndex >= 0 && Math.hypot(event.clientX - state.pointerStartX, event.clientY - state.pointerStartY) < 8;
      state.down = false; state.pointerHitIndex = -1; state.activeCardIndex = -1; canvas.dataset.dragging = 'false';
      if (wasClick) openDetail(clickIndex, canvas);
      else scheduleAutoResume();
    };
    canvas.addEventListener('pointerup', stopDrag);
    canvas.addEventListener('pointercancel', () => { state.down = false; state.pointerHitIndex = -1; state.activeCardIndex = -1; canvas.dataset.dragging = 'false'; scheduleAutoResume(); });
    canvas.addEventListener('lostpointercapture', () => { state.down = false; state.pointerHitIndex = -1; state.activeCardIndex = -1; canvas.dataset.dragging = 'false'; scheduleAutoResume(); });
    canvas.addEventListener('pointerleave', () => { if (!state.down) { state.hoveredIndex = -1; state.cursorNdcX = 0; state.cursorNdcY = 0; canvas.dataset.hovering = 'false'; } });
    canvas.addEventListener('wheel', (event) => { event.preventDefault(); state.target += Math.sign(event.deltaY || event.deltaX) * .18; scheduleAutoResume(); updateStatus(); }, { passive: false });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { if (ui.backgroundEditor && !ui.backgroundEditor.hidden) { event.preventDefault(); setBackgroundEditorOpen(false); return; } if (state.activePanel) { event.preventDefault(); closePanels(); } return; }
      if (state.activePanel && event.key === 'Tab') {
        const items = focusableElements(state.activePanel);
        if (!items.length) return;
        const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        return;
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const active = document.activeElement;
        const blockedByControl = active && active !== document.body && active !== canvas && frame.contains(active);
        if (blockedByControl) return;
        event.preventDefault(); step(event.key === 'ArrowRight' ? 1 : -1); return;
      }
      if (event.key === 'Enter' && !state.activePanel && document.activeElement === canvas) { event.preventDefault(); openDetail(currentIndex(), canvas); }
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopPhotoCarousel();
        return;
      }
      if (state.activePanel === ui.detailPanel) restartPhotoCarousel();
    });
    reducedMotion.addEventListener?.('change', (event) => {
      state.auto = !event.matches && !state.activePanel;
      if (event.matches) stopPhotoCarousel();
      else if (state.activePanel === ui.detailPanel) restartPhotoCarousel();
    });
  }

  bindUI();
  applyTheme(localStorage.getItem('lin-gallery-theme') || 'light', false);
  authorizeDeveloperMode();
  const threeModule = import('./vendor/three.module.min.js').catch(() => import('https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js'));
  Promise.race([threeModule, new Promise((_, reject) => window.setTimeout(() => reject(new Error('Three.js load timeout')), 2800))]).then((THREE) => {
    try { createScene(THREE); } catch (_) { showFallback(); }
  }).catch(showFallback);
})();
