/* ==========================================================================
   PORTFOLIO ENZO TEIXEIRA — Script JavaScript Vanilla
   Thème Terminal Informatique Interactif
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  DONNÉES DU PORTFOLIO (placeholder — à personnaliser)              */
  /* ------------------------------------------------------------------ */

  const CV_DATA = [
    {
      date: '2024 - Aujourd\'hui',
      title: 'Étudiant en informatique',
      company: 'Lycée / Établissement scolaire',
      desc: 'Formation en informatique avec spécialisation développement web et analyse des besoins.',
      details: [
        'Apprentissage du HTML, CSS, JavaScript',
        'Notions de bases de données (SQL)',
        'Introduction à l\'analyse des besoins utilisateurs',
        'Projets de groupe en méthodologie agile',
      ],
    },
    {
      date: '2023 - 2024',
      title: 'Brevet des collèges / Niveau secondaire',
      company: 'Collège',
      desc: 'Obtention du brevet avec mention. Premier contact avec la programmation.',
      details: [
        'Initiation à l\'algorithmique',
        'Utilisation d\'outils bureautiques',
        'Premiers pas en programmation visuelle',
      ],
    },
    {
      date: 'En préparation',
      title: 'Certification PIX',
      company: 'PIX',
      desc: 'Certification de compétences numériques en cours de validation.',
      details: [
        'Information et données',
        'Communication et collaboration',
        'Création de contenus numériques',
        'Protection et sécurité',
      ],
    },
  ];

  const EXPERIENCE_DATA = [
    {
      date: '2025',
      title: 'Stage de découverte',
      company: 'Entreprise d\'accueil',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      date: '2024',
      title: 'Projet scolaire',
      company: 'Lycée',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      date: '2023',
      title: 'Bénévolat',
      company: 'Association',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const PROJECTS_DATA = [
    {
      id: 'p1',
      title: 'Site vitrine lycée',
      category: 'lycee',
      desc: 'Création d\'un site vitrine pour un établissement scolaire avec HTML/CSS pur et design responsive.',
      tech: ['HTML', 'CSS', 'JS'],
      link: '#',
    },
    {
      id: 'p2',
      title: 'Application de gestion',
      category: 'lycee',
      desc: 'Petite application de gestion de notes étudiants avec stockage local et interface terminal.',
      tech: ['JavaScript', 'LocalStorage'],
      link: '#',
    },
    {
      id: 'p3',
      title: 'Portfolio personnel',
      category: 'personnel',
      desc: 'Ce portfolio interactif avec thème terminal, animations et effets glitch.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
    },
    {
      id: 'p4',
      title: 'Outil d\'analyse de besoins',
      category: 'personnel',
      desc: 'Prototype d\'outil d\'analyse des besoins utilisateurs pour futurs projets produits.',
      tech: ['JavaScript', 'UX/UI'],
      link: '#',
    },
    {
      id: 'p5',
      title: 'Jeu de terminal',
      category: 'personnel',
      desc: 'Jeu d\'aventure textuel jouable directement dans un navigateur, style années 80.',
      tech: ['JavaScript', 'CSS'],
      link: '#',
    },
    {
      id: 'p6',
      title: 'Dashboard veille tech',
      category: 'personnel',
      desc: 'Tableau de bord regroupant mes sources de veille technologique préférées.',
      tech: ['HTML', 'CSS', 'JS'],
      link: '#',
    },
  ];

  const CERTS_DATA = [
    { title: 'ANSSI - Sensibilisation cybersécurité', org: 'ANSSI', status: 'valid', icon: '🛡️' },
    { title: 'PIX - Compétences numériques', org: 'PIX', status: 'prep', icon: '📊' },
    { title: 'CISCO - Introduction à la cybersécurité', org: 'CISCO', status: 'prep', icon: '🌐' },
    { title: 'OpenClassrooms - HTML/CSS', org: 'OpenClassrooms', status: 'valid', icon: '💻' },
  ];

  const VEILLE_DATA = [
    { date: '2026-10', title: 'WebAssembly : état de l\'art', source: 'Blog technique', desc: 'Exploration des performances de Wasm pour le web.', link: '#' },
    { date: '2026-09', title: 'CSS Container Queries', source: 'MDN Web Docs', desc: 'Utilisation des container queries pour le responsive moderne.', link: '#' },
    { date: '2026-08', title: 'Accessibilité web (a11y)', source: 'Article', desc: 'Bonnes pratiques pour rendre un site accessible à tous.', link: '#' },
  ];

  const PASSIONS_DATA = [
    { title: 'Jeux vidéo rétro', desc: 'Amateur de jeux des années 80-90 et pixel art.', icon: '🎮' },
    { title: 'Musique électronique', desc: 'Création et écoute de sons synthétiques.', icon: '🎹' },
    { title: 'Science-fiction', desc: 'Lecture et cinéma d\'anticipation technologique.', icon: '🚀' },
  ];

  /* ------------------------------------------------------------------ */
  /*  TYPING EFFECT — Hero                                              */
  /* ------------------------------------------------------------------ */

  const typingEl = document.getElementById('typing');
  const outputEl = document.getElementById('hero-output');
  const heroLines = [
    'Bonjour, je suis Enzo Teixeira.',
    'Étudiant en informatique & Futur Product Owner.',
    '"Expériences numériques et analyse des besoins".',
    '',
    'Bienvenue sur mon portfolio terminal.',
    'Tapez \'help\' pour voir les commandes disponibles.',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let outputHtml = '';

  function typeWriter() {
    const currentLine = heroLines[lineIndex];

    if (!isDeleting && charIndex < currentLine.length) {
      typingEl.textContent = currentLine.slice(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, 60);
    } else if (!isDeleting && charIndex === currentLine.length) {
      if (currentLine === '') {
        outputHtml += '\n';
      } else {
        outputHtml += currentLine + '\n';
      }
      outputEl.textContent = outputHtml;
      isDeleting = true;
      setTimeout(typeWriter, 800);
    } else if (isDeleting && charIndex > 0) {
      typingEl.textContent = currentLine.slice(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, 30);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      lineIndex++;
      if (lineIndex < heroLines.length) {
        setTimeout(typeWriter, 300);
      } else {
        typingEl.textContent = '';
        outputEl.textContent = outputHtml + 'enzo@portfolio:~$ ';
      }
    }
  }

  /* ------------------------------------------------------------------ */
  /*  CURSEUR TERMINAL — Suivi de la souris                             */
  /* ------------------------------------------------------------------ */

  const cursor = document.getElementById('terminal-cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  /* ------------------------------------------------------------------ */
  /*  NAVIGATION — Scroll fluide + surlignage                           */
  /* ------------------------------------------------------------------ */

  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Mise à jour du statut
      const status = document.getElementById('nav-status');
      status.textContent = 'navigation vers ' + link.dataset.cmd;
      setTimeout(() => { status.textContent = 'system ready'; }, 1500);
    });
  });

  /* ------------------------------------------------------------------ */
  /*  RENDU CV — Timeline interactive                                   */
  /* ------------------------------------------------------------------ */

  const cvTimeline = document.getElementById('cv-timeline');
  const cvDetailTitle = document.getElementById('cv-detail-title');
  const cvDetailDesc = document.getElementById('cv-detail-desc');
  const cvDetailList = document.getElementById('cv-detail-list');
  const cvDetail = document.getElementById('cv-detail');

  function renderCV() {
    cvTimeline.innerHTML = '';
    CV_DATA.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cv-item';
      itemEl.innerHTML = `
        <div class="cv-marker" aria-label="Détail : ${item.title}" role="button" tabindex="0"></div>
        <div class="cv-content">
          <span class="cv-date">${item.date}</span>
          <h3 class="cv-title">${item.title}</h3>
          <span class="cv-company">${item.company}</span>
          <p class="cv-desc">${item.desc}</p>
        </div>
      `;
      const marker = itemEl.querySelector('.cv-marker');
      marker.addEventListener('click', () => showCVDetail(item));
      marker.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') showCVDetail(item);
      });
      cvTimeline.appendChild(itemEl);
    });
  }

  function showCVDetail(item) {
    cvDetailTitle.textContent = item.title;
    cvDetailDesc.textContent = item.company + ' — ' + item.date;
    cvDetailList.innerHTML = item.details.map((d) => `<li>${d}</li>`).join('');
    cvDetail.classList.add('visible');
    cvDetail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU EXPÉRIENCE                                                  */
  /* ------------------------------------------------------------------ */

  const experienceGrid = document.getElementById('experience-grid');

  function renderExperience() {
    experienceGrid.innerHTML = '';
    EXPERIENCE_DATA.forEach((exp) => {
      const card = document.createElement('div');
      card.className = 'exp-card';
      card.innerHTML = `
        <span class="exp-date">${exp.date}</span>
        <h3 class="exp-title">${exp.title}</h3>
        <span class="exp-company">${exp.company}</span>
        <p class="exp-desc">${exp.desc}</p>
      `;
      experienceGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU PROJETS + FILTRES                                           */
  /* ------------------------------------------------------------------ */

  const projectGrid = document.getElementById('project-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filter = 'all') {
    projectGrid.innerHTML = '';
    const filtered = filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

    filtered.forEach((proj) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.dataset.category = proj.category;
      card.innerHTML = `
        <div class="project-glitch">[TERMINAL]</div>
        <div class="project-image"></div>
        <div class="project-content">
          <span class="project-category">${proj.category}</span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-tech">
            ${proj.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <a href="${proj.link}" class="project-link" target="_blank" rel="noopener">ouvrir</a>
        </div>
      `;
      projectGrid.appendChild(card);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  /* ------------------------------------------------------------------ */
  /*  RENDU CERTIFICATIONS                                              */
  /* ------------------------------------------------------------------ */

  const certsGrid = document.getElementById('certs-grid');

  function renderCerts() {
    certsGrid.innerHTML = '';
    CERTS_DATA.forEach((cert) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.innerHTML = `
        <span class="cert-badge">${cert.icon}</span>
        <h3 class="cert-title">${cert.title}</h3>
        <span class="cert-org">${cert.org}</span>
        <span class="cert-status ${cert.status}">
          ${cert.status === 'valid' ? 'Validé' : 'En préparation'}
        </span>
      `;
      certsGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU VEILLE TECHNOLOGIQUE                                        */
  /* ------------------------------------------------------------------ */

  const veilleGrid = document.getElementById('veille-grid');

  function renderVeille() {
    veilleGrid.innerHTML = '';
    VEILLE_DATA.forEach((v) => {
      const card = document.createElement('div');
      card.className = 'veille-card';
      card.innerHTML = `
        <span class="veille-date">${v.date}</span>
        <h3 class="veille-title">${v.title}</h3>
        <span class="veille-source">${v.source}</span>
        <p class="veille-desc">${v.desc}</p>
        <a href="${v.link}" class="veille-link" target="_blank" rel="noopener">lire</a>
      `;
      veilleGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU PASSIONS                                                    */
  /* ------------------------------------------------------------------ */

  const passionsGrid = document.getElementById('passions-grid');

  function renderPassions() {
    passionsGrid.innerHTML = '';
    PASSIONS_DATA.forEach((p) => {
      const item = document.createElement('div');
      item.className = 'passion-item';
      item.innerHTML = `
        <span class="passion-icon">${p.icon}</span>
        <h3 class="passion-title">${p.title}</h3>
        <p class="passion-desc">${p.desc}</p>
      `;
      passionsGrid.appendChild(item);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  SCROLL ANIMATIONS — Intersection Observer                         */
  /* ------------------------------------------------------------------ */

  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initScrollAnimations() {
    document.querySelectorAll('.cv-item').forEach((el) => observer.observe(el));
    document.querySelectorAll('.exp-card, .project-card, .cert-card, .veille-card, .passion-item').forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /*  ANNÉE DYNAMIQUE DANS LE FOOTER                                    */
  /* ------------------------------------------------------------------ */

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------ */
  /*  INITIALISATION                                                    */
  /* ------------------------------------------------------------------ */

  document.addEventListener('DOMContentLoaded', () => {
    // Démarre l'effet typing après un court délai
    setTimeout(typeWriter, 800);

    // Rendu des sections
    renderCV();
    renderExperience();
    renderProjects();
    renderCerts();
    renderVeille();
    renderPassions();

    // Animations au scroll
    initScrollAnimations();
  });

})();