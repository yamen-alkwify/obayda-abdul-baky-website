(() => {
  'use strict';

  // The Arabic copy in index.html is the source of truth. Keeping it in the
  // document also means the page is readable before JavaScript runs.
  const english = {
    skip: 'Skip to content',
    contactAria: 'Contact',
    navAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    navAbout: 'About',
    navLeadership: 'Leadership',
    navJourney: 'Journey',
    navProjects: 'Projects',
    navExpertise: 'Qualifications',
    navContact: 'Contact',
    heroName: 'Obayda<br />Abdul Baky',
    heroIntro: 'From vision to action; a career in investment management and urban development, grounded in responsibility and focused on lasting impact.',
    discover: 'Explore the journey',
    heroPositionsTitle: 'Selected positions',
    heroRoleOne: 'Board Member, Syrian Sovereign Fund',
    heroRoleTwo: 'Chairman, Sham Holding Company',
    heroPositionOne: 'General Manager, Asl Company',
    heroPositionTwo: 'Investment Director, Ministry of Local Administration',
    heroPositionThree: 'Board Member, Janah Al-Asima',
    heroPositionFour: 'Founder and Director, Al-Murabitoun Media Foundation',
    heroAlt: 'Portrait of Obayda Abdul Baky',
    sectionAbout: 'About Obayda',
    aboutKicker: 'Vision shaped by action',
    aboutTitle: 'Leading with a vision<br /><em>for wider impact.</em>',
    aboutSmall: 'Where investment and development meet, ideas become action.',
    aboutAlt: 'Obayda Abdul Baky signing a document in a meeting room',
    aboutOverline: 'Profile / 2026',
    aboutParaOne: 'Obayda Abdul Baky’s career brings together institutional leadership, investment management, and work in real estate development and housing projects. His CV records more than nine years of administrative and investment experience, including strategic planning and project supervision.',
    aboutParaTwo: 'He currently serves on the board of the Syrian Sovereign Fund and chairs Sham Holding Company, continuing to connect strategic vision with institutional execution.',
    exploreJourney: 'Explore the journey',
    sectionLeadership: 'Leadership positions',
    leadershipKicker: 'Responsibility makes the difference',
    leadershipTitle: 'Roles that open <em>new horizons.</em>',
    leadershipIntro: 'Leadership positions connecting asset and investment management, institutional development, and opportunities for the future.',
    fundType: 'Sovereign sector',
    fundTitle: 'Syrian Sovereign Fund',
    fundRole: 'Board Member',
    fundNote: 'Contributing to the institutional vision for investment and development.',
    shamType: 'Investment & Development',
    shamTitle: 'Sham Holding Company',
    shamRole: 'Chairman',
    shamNote: 'Guiding the company’s direction in an economy looking toward growth.',
    statementAria: 'Approach',
    statement: 'True leadership begins when a vision becomes an <span class="statement-highlight">impact people can feel.</span>',
    statementLabel: 'Working approach',
    sectionJourney: 'Professional journey',
    journeyTitle: 'A career driven by <em>vision and action.</em>',
    journeyIntro: 'Roles across investment, local administration, urban development, engineering and media, as listed in the professional profile.',
    expOneTitle: 'General Manager, Asl Company',
    expOneDesc: 'Management and investment of real estate owned by the Syrian Sovereign Fund.',
    expTwoTitle: 'Investment Director',
    expTwoDesc: 'Ministry of Local Administration · One year.',
    expThreeTitle: 'Board Member, Damascus Al-Sham Holding',
    expThreeDesc: 'Participation in the work of the board of directors.',
    expFourTitle: 'Board Member, Janah Al-Asima',
    expFourDesc: 'An advertising and publicity company.',
    expFiveTitle: 'Founder, General Administration of Housing',
    expFiveDesc: 'Salvation Government · Former.',
    expSixTitle: 'Responsible for Real Estate Development and Investment Projects',
    expSixDesc: 'Ministry of Local Administration, Salvation Government.',
    expSevenTitle: 'Director, Engineering Studies Center',
    expSevenDesc: 'Idlib.',
    expEightTitle: 'Founder and Director, Al-Murabitoun Media Foundation',
    expEightDesc: 'Establishment and management of a media organization.',
    expNineTitle: 'Administrative Follow-up Member',
    expNineDesc: 'Two years.',
    expTenTitle: 'Military Construction Department Follow-up',
    expTenDesc: 'One year.',
    scopeKicker: 'Professional range',
    scopeTitle: 'Fields of <em>expertise</em>',
    scopeOnePeriod: 'More than <span class="scope-years-number">8</span> years',
    scopeOneTitle: 'Project management',
    scopeOneDesc: 'Planning to delivery.',
    scopeTwoPeriod: '<span class="scope-years-number">8</span> years',
    scopeTwoTitle: 'Feasibility studies',
    scopeTwoDesc: 'Sustainable development.',
    scopeThreePeriod: '<span class="scope-years-number">8</span> years',
    scopeThreeTitle: 'Legal affairs',
    scopeThreeDesc: 'Legal follow-up.',
    scopeFourPeriod: 'More than <span class="scope-years-number">6</span> years',
    scopeFourTitle: 'Financial affairs',
    scopeFourDesc: 'Financial oversight.',
    scopeFivePeriod: '<span class="scope-years-number">5</span> years',
    scopeFiveTitle: 'Marketing',
    scopeFiveDesc: 'Publicity and advertising.',
    scopeSixPeriod: 'More than <span class="scope-years-number">2</span> years',
    scopeSixTitle: 'Artificial intelligence',
    scopeSixDesc: 'AI tools and applications.',
    scopeSevenPeriod: 'Specialized experience',
    scopeSevenTitle: 'Crisis management',
    scopeSevenDesc: 'Crisis response.',
    sectionProjects: 'Project experience',
    projectTitle: 'From planning to <em>places taking shape.</em>',
    projectIntro: 'Professional work recorded across real estate, tourism, housing and urban planning.',
    projectOneCategory: 'Tourism & hospitality',
    projectOneTitle: 'Tourism projects and restaurants in Idlib',
    projectOneDesc: 'Supervision of the construction and implementation of tourism projects and major restaurants.',
    projectTwoCategory: 'Management & delivery',
    projectTwoTitle: 'Strategic projects',
    projectTwoDesc: 'Supervision of strategic project implementation and management.',
    projectThreeCategory: 'Real estate investment',
    projectThreeTitle: 'Tourism real estate',
    projectThreeDesc: 'Experience with tourism real estate projects.',
    projectFourCategory: 'Urban planning',
    projectFourTitle: 'Urban organization',
    projectFourDesc: 'Urban planning and work to limit informal settlements.',
    projectFiveCategory: 'Local administration',
    projectFiveTitle: 'Local council projects',
    projectFiveDesc: 'Oversight of parks, playgrounds and swimming pool projects.',
    projectSixCategory: 'Housing',
    projectSixTitle: 'Housing projects in Idlib Governorate',
    projectSixDesc: 'Management of housing projects exceeding 10,000 units across several locations in the governorate.',
    sectionExpertise: 'Qualifications',
    expertiseTitle: 'A foundation of knowledge <em>across disciplines.</em>',
    expertiseIntro: 'Studies in economics, politics and media, with training in development and international affairs.',
    degreeOne: 'Master’s Degree in Economics',
    degreeTwo: 'Bachelor’s Degree in Political Science',
    degreeThree: 'Higher Diploma in Media and Journalism',
    degreeFour: 'Certified Consultant in Sustainable Development',
    degreeFive: 'Diploma in Diplomatic and International Affairs',
    degreeSix: 'Diploma in Modern Marketing',
    qualificationsHeading: 'Academic qualifications',
    trainingOneTitle: 'Project management',
    trainingOneDesc: 'PMP diploma in professional project management from Al-Ra’ed Center, licensed by Idlib University, plus operational planning and team management.',
    trainingTwoTitle: 'Finance and evaluation',
    trainingTwoDesc: 'Accounting diploma from Ghosn Al-Zaytoun Center, and monitoring and evaluation diploma from Al-Faris International Center.',
    trainingThreeTitle: 'Digital tools',
    trainingThreeDesc: 'ICDL from Idlib University, Excel levels one to three, and MS Project.',
    trainingFourTitle: 'Media and design',
    trainingFourDesc: 'Journalist correspondent course with Al Jazeera, and advanced Adobe editing and design courses at Kafranbel Center.',
    trainingFiveTitle: 'Administration and communication',
    trainingFiveDesc: 'Operational planning, time and office management at Al-Ra’ed Center; public speaking at Al-Bunyan Center; and negotiation at the Technical Security Institute.',
    trainingSixTitle: 'Turkish language',
    trainingSixDesc: 'A1 and A2 language courses at Al-Fateh Center, licensed by IHH.',
    skillsKicker: 'Professional qualities',
    skillsTitle: 'Leadership, thought and adaptability',
    skillOne: 'Quick learning and adaptability',
    skillTwo: 'Working under pressure',
    skillThree: 'Team spirit and institutional work',
    skillFour: 'Strategic thinking and problem-solving',
    skillFive: 'Persuasion and leadership',
    skillSix: 'Interest in digital and technological transformation',
    languagesLabel: 'Languages',
    languageArabic: 'Arabic · Native',
    languageEnglish: 'English · Good',
    languageTurkish: 'Turkish · Intermediate',
    contactKicker: 'Let’s start a conversation',
    contactTitle: 'Big ideas<br /><em>begin with a conversation.</em>',
    contactIntro: 'For professional inquiries and strategic opportunities, you can contact us directly.',
    contactLocation: 'Syria',
    footerRights: '© 2026 Obayda Abdul Baky. All rights reserved.',
    backTop: 'Back to top',
  };

  const root = document.documentElement;
  const header = document.getElementById('site-header');
  const langButton = document.getElementById('language-toggle');
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const backgroundRegions = [document.getElementById('main'), document.querySelector('.site-footer')].filter(Boolean);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  const htmlKeys = new Set(['heroName']);
  const nodes = {
    text: [...document.querySelectorAll('[data-i18n]')],
    html: [...document.querySelectorAll('[data-i18n-html]')],
    aria: [...document.querySelectorAll('[data-aria]')],
    alt: [...document.querySelectorAll('[data-alt]')],
  };
  const arabic = {};

  for (const node of nodes.text) {
    const key = node.dataset.i18n;
    arabic[key] = htmlKeys.has(key) ? node.innerHTML : node.textContent;
  }
  for (const node of nodes.html) arabic[node.dataset.i18nHtml] = node.innerHTML;
  for (const node of nodes.aria) arabic[node.dataset.aria] = node.getAttribute('aria-label');
  for (const node of nodes.alt) arabic[node.dataset.alt] = node.getAttribute('alt');

  const pageMeta = {
    ar: {
      title: 'عبيدة عبد الباقي | قيادة واستثمار',
      description: 'الموقع الشخصي لعبيدة عبد الباقي، عضو مجلس إدارة الصندوق السيادي السوري ورئيس مجلس إدارة شركة شام القابضة.',
      themeToggleLight: 'تفعيل الوضع الفاتح',
      themeToggleDark: 'تفعيل الوضع الداكن',
      languageToggle: 'التبديل إلى الإنجليزية',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
    },
    en: {
      title: 'Obayda Abdul Baky | Leadership & Investment',
      description: 'Personal website of Obayda Abdul Baky, Board Member of the Syrian Sovereign Fund and Chairman of Sham Holding Company.',
      themeToggleLight: 'Switch to light mode',
      themeToggleDark: 'Switch to dark mode',
      languageToggle: 'Switch to Arabic',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
  };

  const readPreference = (key, allowed, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return allowed.includes(value) ? value : fallback;
    } catch {
      return fallback;
    }
  };
  const savePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Storage can be disabled. */ }
  };

  let language = readPreference('obayda-language', ['ar', 'en'], 'ar');
  let theme = readPreference('obayda-theme', ['dark', 'light'], 'dark');
  let menuOpen = false;

  function updateControls() {
    const labels = pageMeta[language];
    langButton.setAttribute('aria-label', labels.languageToggle);
    langButton.setAttribute('title', labels.languageToggle);
    themeButton.setAttribute('aria-label', theme === 'dark' ? labels.themeToggleLight : labels.themeToggleDark);
    themeButton.setAttribute('title', theme === 'dark' ? labels.themeToggleLight : labels.themeToggleDark);
    menuButton.setAttribute('aria-label', menuOpen ? labels.menuClose : labels.menuOpen);
  }

  function applyLanguage(next, persist = true) {
    language = next;
    root.lang = next;
    root.dir = next === 'ar' ? 'rtl' : 'ltr';
    root.dataset.language = next;
    const copy = next === 'ar' ? arabic : english;

    for (const node of nodes.text) {
      const key = node.dataset.i18n;
      if (copy[key] === undefined) continue;
      if (htmlKeys.has(key)) node.innerHTML = copy[key];
      else node.textContent = copy[key];
    }
    for (const node of nodes.html) {
      const value = copy[node.dataset.i18nHtml];
      if (value !== undefined) node.innerHTML = value;
    }
    for (const node of nodes.aria) {
      const value = copy[node.dataset.aria];
      if (value !== undefined) node.setAttribute('aria-label', value);
    }
    for (const node of nodes.alt) {
      const value = copy[node.dataset.alt];
      if (value !== undefined) node.setAttribute('alt', value);
    }

    document.title = pageMeta[next].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta[next].description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageMeta[next].title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageMeta[next].description);
    updateControls();
    if (persist) savePreference('obayda-language', next);
  }

  function applyTheme(next, persist = true) {
    theme = next;
    root.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0d1214' : '#efeee9');
    updateControls();
    if (persist) savePreference('obayda-theme', next);
  }

  function setMenu(open, restoreFocus = false) {
    menuOpen = open;
    mobileNav.inert = !open;
    mobileNav.setAttribute('aria-hidden', String(!open));
    mobileNav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    for (const region of backgroundRegions) region.inert = open;
    menuButton.setAttribute('aria-expanded', String(open));
    updateControls();
    if (open) {
      requestAnimationFrame(() => {
        if (menuOpen) mobileNav.querySelector('a')?.focus();
      });
    } else if (restoreFocus) {
      menuButton.focus();
    }
  }

  langButton.addEventListener('click', () => applyLanguage(language === 'ar' ? 'en' : 'ar'));
  themeButton.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));
  menuButton.addEventListener('click', () => setMenu(!menuOpen, menuOpen));
  mobileNav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    setMenu(false);
    const destination = document.getElementById(link.hash.slice(1));
    if (destination) {
      destination.tabIndex = -1;
      requestAnimationFrame(() => destination.focus({ preventScroll: true }));
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuOpen) setMenu(false, true);
    if (event.key !== 'Tab' || !menuOpen) return;
    const focusable = [...header.querySelectorAll('a[href], button:not([disabled])')].filter((element) => {
      const style = getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden' && !element.closest('[inert]');
    });
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  document.addEventListener('pointerdown', (event) => {
    if (menuOpen && !header.contains(event.target)) setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (menuOpen && getComputedStyle(menuButton).display === 'none') setMenu(false);
  }, { passive: true });

  let scrollScheduled = false;
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 24);
    scrollScheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollScheduled) {
      scrollScheduled = true;
      requestAnimationFrame(updateHeader);
    }
  }, { passive: true });
  updateHeader();

  document.body.classList.add('js-ready');
  const revealNodes = [...document.querySelectorAll('.reveal')];
  function showAllReveals() {
    for (const node of revealNodes) node.classList.add('visible');
  }
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });
    revealNodes.forEach((node) => observer.observe(node));
    reduceMotion.addEventListener?.('change', () => {
      if (reduceMotion.matches) {
        observer.disconnect();
        showAllReveals();
      }
    });
  } else {
    showAllReveals();
  }

  const enterNodes = [...document.querySelectorAll('.enter')];
  for (const [index, node] of enterNodes.entries()) {
    if (reduceMotion.matches) node.classList.add('is-visible');
    else window.setTimeout(() => node.classList.add('is-visible'), 130 + index * 95);
  }

  if (!reduceMotion.matches && finePointer.matches) {
    for (const link of document.querySelectorAll('.magnetic')) {
      let frame = 0;
      link.addEventListener('pointermove', (event) => {
        if (reduceMotion.matches) {
          link.style.translate = '';
          return;
        }
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = link.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
          const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
          link.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
        });
      });
      link.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        link.style.translate = '';
      });
      reduceMotion.addEventListener?.('change', () => {
        if (reduceMotion.matches) link.style.translate = '';
      });
    }

    for (const card of document.querySelectorAll('.leadership-card')) {
      let frame = 0;
      card.addEventListener('pointermove', (event) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width * 100).toFixed(1)}%`);
          card.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height * 100).toFixed(1)}%`);
        });
      });
      card.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
      });
    }
  }

  applyLanguage(language, false);
  applyTheme(theme, false);
  setMenu(false);
})();
