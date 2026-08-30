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
  const ORBIT_RADIUS = 4.55;
  const PHOTO_CAROUSEL_INTERVAL = 4200;
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
  const canvas = document.getElementById('gallery-canvas');
  const loading = document.querySelector('[data-loading]');
  const fallback = document.querySelector('[data-fallback]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const state = { progress: 0, target: 0, velocity: 0, last: performance.now(), down: false, pointerX: 0, pointerStartX: 0, pointerStartY: 0, pointerHitIndex: -1, dragScale: 1, dragSensitivity: .008, hoveredIndex: -1, cursorNdcX: 0, cursorNdcY: 0, auto: !reducedMotion.matches, activePanel: null, opener: null, switchProgress: 1, statusIndex: -1, closingPanel: false, panelTimeline: null, detailCardIndex: -1, detailSubtypeIndex: 0, detailPhotoIndex: 0, detailDrag: null, coverDrag: null };
  const sceneState = { camera: null, cardGroup: null, raycaster: null, pointer: null, THREE: null };
  const ui = {
    title: document.querySelector('[data-current-title]'), count: document.querySelector('[data-current-count]'), mediaStatus: document.querySelector('[data-current-media-status]'), edgeIndex: document.querySelector('[data-edge-index]'), edgeRange: document.querySelector('[data-edge-range]'), menuPanel: document.querySelector('[data-menu-panel]'), menuButton: document.querySelector('[data-open-menu]'), menuList: document.querySelector('[data-menu-list]'), detailPanel: document.querySelector('[data-detail-panel]'), aboutPanel: document.querySelector('[data-about-panel]'), contactPanel: document.querySelector('[data-contact-panel]'), personPanel: document.querySelector('[data-person-panel]'), personButton: document.querySelector('[data-open-person]'), personList: document.querySelector('[data-person-list]'), personCode: document.querySelector('[data-current-person-code]'), personName: document.querySelector('[data-current-person-name]'), personFooter: document.querySelector('[data-current-person-footer]'), heroCopy: document.querySelector('.hero-copy'), heroRail: document.querySelector('.hero-rail'), heroIndex: document.querySelector('[data-hero-index]'), heroName: document.querySelector('[data-hero-name]'), heroMode: document.querySelector('[data-hero-mode]'), heroNote: document.querySelector('[data-hero-note]'), detailVisual: document.querySelector('.detail-visual'), detailSlot: document.querySelector('[data-detail-slot]'), detailPhotoRail: document.querySelector('[data-detail-photo-rail]'), detailPhotoIndex: document.querySelector('[data-detail-photo-index]'), detailLabel: document.querySelector('[data-detail-label]'), detailTitle: document.querySelector('[data-detail-title]'), detailDescription: document.querySelector('[data-detail-description]'), detailType: document.querySelector('[data-detail-type]'), detailStatus: document.querySelector('[data-detail-status]'), detailSubtypes: document.querySelector('[data-detail-subtypes]'), detailSlotTitle: document.querySelector('[data-detail-slot-title]'), detailSlotNote: document.querySelector('[data-detail-slot-note]'), detailEditHint: document.querySelector('[data-detail-edit-hint]'), inlineEditor: document.querySelector('[data-inline-editor]'), inlineEditorTrigger: document.querySelector('[data-open-inline-editor]'), inlineEditorClose: document.querySelector('[data-close-inline-editor]'), inlineSubtypeName: document.querySelector('[data-inline-subtype-name]'), inlineCardTitle: document.querySelector('[data-inline-card-title]'), inlineCardLabel: document.querySelector('[data-inline-card-label]'), inlineCardCategory: document.querySelector('[data-inline-card-category]'), inlineCardCopy: document.querySelector('[data-inline-card-copy]'), inlineSubtypeCopy: document.querySelector('[data-inline-subtype-copy]'), inlineCardImage: document.querySelector('[data-inline-card-image]'), inlineCoverPreview: document.querySelector('[data-inline-cover-preview]'), inlineDropzone: document.querySelector('[data-inline-dropzone]'), inlineFile: document.querySelector('[data-inline-file]'), inlinePhotoList: document.querySelector('[data-inline-photo-list]'), inlineEmpty: document.querySelector('[data-inline-empty]'), inlineStatus: document.querySelector('[data-inline-status]'), inlineUndo: document.querySelector('[data-inline-undo]'), inlineSave: document.querySelector('[data-inline-save]')
  };
  let inlineDraft = null;
  let inlineUploadCount = 0;

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
    const imageRegion = { x: 46, y: 52, width: 628, height: 885 };
    const cardBackground = card.image ? '#d9d4cc' : card.color;
    const cardInk = index === 4 ? '#f4f1eb' : '#161616';
    ctx.fillStyle = cardBackground; ctx.fillRect(0, 0, 720, 1080);
    ctx.fillStyle = cardInk;
    ctx.font = '500 20px "Microsoft YaHei", sans-serif'; ctx.letterSpacing = '2px'; ctx.fillText(`${person.code} - ${String(index + 1).padStart(2, '0')}`, 44, 58);
    ctx.strokeStyle = index === 4 ? 'rgba(244,241,235,.35)' : 'rgba(22,22,22,.23)'; ctx.lineWidth = 2;
    ctx.strokeRect(imageRegion.x, imageRegion.y, imageRegion.width, imageRegion.height);
    ctx.strokeStyle = index === 4 ? 'rgba(244,241,235,.22)' : 'rgba(22,22,22,.10)';
    for (let y = imageRegion.y + 24; y < imageRegion.y + imageRegion.height - 12; y += 26) { ctx.beginPath(); ctx.moveTo(imageRegion.x + 22, y); ctx.lineTo(imageRegion.x + imageRegion.width - 22, y); ctx.stroke(); }
    if (!card.image) {
      ctx.fillStyle = cardInk; ctx.font = '700 76px "Microsoft YaHei", sans-serif'; ctx.fillText('图片', 66, 500); ctx.fillText('位置', 66, 580);
      ctx.font = '500 18px "Microsoft YaHei", sans-serif'; ctx.fillText('后续添加最终图片', 68, 636);
    }
    ctx.font = '500 22px "Microsoft YaHei", sans-serif'; ctx.fillText(card.label, 46, 990);
    ctx.font = '500 16px "Microsoft YaHei", sans-serif'; ctx.fillText(card.type, 46, 1024);
    ctx.fillStyle = index === 4 ? '#f4f1eb' : '#161616'; ctx.font = '500 16px "Microsoft YaHei", sans-serif'; ctx.fillText('打开', 619, 1026);
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
        ctx.strokeStyle = index === 4 ? 'rgba(244,241,235,.35)' : 'rgba(22,22,22,.23)';
        ctx.lineWidth = 2;
        ctx.strokeRect(imageRegion.x, imageRegion.y, imageRegion.width, imageRegion.height);
        texture.needsUpdate = true;
      };
      image.src = card.image;
    }
    return texture;
  }

  function createScene(THREE) {
    sceneState.THREE = THREE;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(FRAME.width, FRAME.height, false);
    renderer.setClearColor(0xeeeae3, 1);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(31, FRAME.width / FRAME.height, .1, 100);
    camera.position.set(0, 0.25, 10.6);
    const ambient = new THREE.AmbientLight(0xffffff, 2.2); scene.add(ambient);
    const group = new THREE.Group(); group.position.y = -1.37; scene.add(group);
    const cardGroup = new THREE.Group(); group.add(cardGroup);
    sceneState.camera = camera;
    sceneState.cardGroup = cardGroup;
    sceneState.raycaster = new THREE.Raycaster();
    sceneState.pointer = new THREE.Vector2();
    const cardWidth = 2.78;
    const cardHeight = 4.17;
    const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
    const backingGeometry = new THREE.PlaneGeometry(cardWidth + .06, cardHeight + .06);
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
      const material = new THREE.MeshBasicMaterial({ map: canvasTexture(THREE, card, index), side: THREE.FrontSide, depthWrite: true, depthTest: true });
      const mesh = new THREE.Mesh(geometry, material); mesh.userData.index = index;
      const backingColor = card.image ? '#d9d4cc' : (card.color || '#ded9d0');
      const backing = new THREE.Mesh(backingGeometry, new THREE.MeshBasicMaterial({ color: backingColor, side: THREE.FrontSide, depthWrite: true, depthTest: true }));
      backing.position.set(.035, -.04, -.045);
      mesh.add(backing);
      const outline = new THREE.LineLoop(outlineGeometry, new THREE.LineBasicMaterial({ color: 0x4d4a45, transparent: true, opacity: .14, depthWrite: false }));
      const focusFrame = new THREE.LineSegments(focusGeometry, new THREE.LineBasicMaterial({ color: index % 2 ? 0xb73559 : 0xc9643b, transparent: true, opacity: 0, depthTest: false, depthWrite: false }));
      mesh.add(outline, focusFrame);
      mesh.userData.outline = outline;
      mesh.userData.backing = backing;
      mesh.userData.focusFrame = focusFrame;
      cardGroup.add(mesh);
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 8), new THREE.MeshBasicMaterial({ color: 0xded9d0, transparent: true, opacity: .36 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -3.22; floor.position.z = -1.3; scene.add(floor);

    function render(now) {
      const dt = Math.min((now - state.last) / 1000, .05); state.last = now;
      if (state.auto && !state.down && !state.activePanel) state.target += dt * .11;
      normalizeOrbitProgress();
      const delta = state.target - state.progress; state.velocity = state.velocity * .84 + delta * 4.8 * dt; state.progress += state.velocity;
      if (currentIndex() !== state.statusIndex) updateStatus();
      state.switchProgress = Math.min(1, state.switchProgress + dt * (reducedMotion.matches ? 12 : 3.4));
      const switchWave = Math.sin(state.switchProgress * Math.PI);
      cardGroup.rotation.y = switchWave * 0.045;
      group.position.y = -1.37 + switchWave * 0.08;
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
        mesh.rotation.y = -wrappedAngle * .48 + hover * (.035 + state.cursorNdcX * .055); mesh.rotation.x = hover * state.cursorNdcY * -.045; mesh.rotation.z = Math.sin(angle) * -.07;
        const scale = (.76 + depth * .42) * (1 + hover * .08); mesh.scale.setScalar(scale);
        const pulse = .5 + Math.sin(now * .0011 + index * .8) * .5;
        const shade = (.66 + depth * .34) * (.72 + state.switchProgress * .28);
        if (mesh.material.color) mesh.material.color.setRGB(shade, shade, shade);
        if (mesh.userData.backing) {
          mesh.userData.backing.position.x = .035 + hover * .045;
          mesh.userData.backing.position.y = -.04 - hover * .045;
        }
        if (mesh.userData.outline) {
          mesh.userData.outline.material.opacity = (.08 + depth * .16) * (.84 + pulse * .16) + hover * .08;
          mesh.userData.outline.material.color.setHex(hover > .02 ? 0xb73559 : 0x4d4a45);
        }
        if (mesh.userData.focusFrame) {
          mesh.userData.focusFrame.material.opacity = Math.max(0, depth - .28) * (.06 + hover * .88);
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

  function setPanel(panel, open) { panel.classList.toggle('is-open', open); panel.setAttribute('aria-hidden', String(!open)); panel.inert = !open; }
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
      renderInlinePhotos(); setInlineStatus('照片已接入，保存后更新展廊。');
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
      button.textContent = subtype;
      button.setAttribute('aria-pressed', String(subtypeIndex === 0));
      button.addEventListener('click', () => selectDetailSubtype(card, subtypeIndex));
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
    window.addEventListener('resize', setScale, { passive: true }); setScale();
    window.addEventListener('pointermove', (event) => updateHeroParallax(event.clientX, event.clientY), { passive: true });
    window.addEventListener('blur', () => updateHeroParallax(-1, -1), { passive: true });
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
    canvas.addEventListener('pointerdown', (event) => { const hit = pickCard(event); state.down = true; state.pointerX = event.clientX; state.pointerStartX = event.clientX; state.pointerStartY = event.clientY; state.pointerHitIndex = hit?.userData.index ?? -1; state.hoveredIndex = -1; const touchDrag = event.pointerType === 'touch' || window.innerWidth < 700; state.dragScale = touchDrag ? 1 : Math.max(.001, window.innerWidth / FRAME.width); state.dragSensitivity = touchDrag ? .006 : .008; scheduleAutoResume(); canvas.dataset.dragging = 'true'; canvas.focus({ preventScroll: true }); canvas.setPointerCapture(event.pointerId); });
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
      state.down = false; state.pointerHitIndex = -1; canvas.dataset.dragging = 'false';
      if (wasClick) openDetail(clickIndex, canvas);
      else scheduleAutoResume();
    };
    canvas.addEventListener('pointerup', stopDrag);
    canvas.addEventListener('pointercancel', () => { state.down = false; state.pointerHitIndex = -1; canvas.dataset.dragging = 'false'; scheduleAutoResume(); });
    canvas.addEventListener('lostpointercapture', () => { state.down = false; state.pointerHitIndex = -1; canvas.dataset.dragging = 'false'; scheduleAutoResume(); });
    canvas.addEventListener('pointerleave', () => { if (!state.down) { state.hoveredIndex = -1; state.cursorNdcX = 0; state.cursorNdcY = 0; canvas.dataset.hovering = 'false'; } });
    canvas.addEventListener('wheel', (event) => { event.preventDefault(); state.target += Math.sign(event.deltaY || event.deltaX) * .18; scheduleAutoResume(); updateStatus(); }, { passive: false });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { if (state.activePanel) { event.preventDefault(); closePanels(); } return; }
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
  authorizeDeveloperMode();
  import('https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js').then((THREE) => {
    try { createScene(THREE); } catch (_) { showFallback(); }
  }).catch(showFallback);
})();
