/* ==========================================================================
   PORTFOLIO ENZO TEIXEIRA — Script JavaScript Vanilla
   Thème Terminal Informatique Interactif
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  DONNÉES DU PORTFOLIO                                               */
  /* ------------------------------------------------------------------ */

  const CV_DATA = [
    {
      date: '2025 - 2027',
      title: 'BTS Services Informatiques aux Organisations — option SLAM',
      company: 'Lycée Louis Pergaud',
      desc: 'Formation aux solutions logicielles et applications métiers : programmation, modélisation des données et cybersécurité.',
      details: [
        'Développement web et applicatif : PHP 8, Symfony 6, React, JavaScript, HTML5 et CSS3',
        'Modélisation Merise (MCD, MLD, MPD) et bases de données SQL (MySQL, MariaDB)',
      ],
    },
    {
      date: 'Juin - juillet 2025',
      title: 'Piscine — intégration en école de développement',
      company: 'École 42, Lausanne',
      desc: 'Épreuve intensive de programmation et d’algorithmique en langage C.',
      details: [
        'Gestion de la mémoire, pointeurs et algorithmique',
        'Scripts Shell et environnement Unix/Linux',
        'Pédagogie par les pairs : autonomie et résolution méthodique de problèmes',
      ],
    },
    {
      date: '2022 - 2025',
      title: 'Baccalauréat général',
      company: 'Lycée Edgar Faure',
      desc: 'Baccalauréat Général',
      details: ['Spécialité Mathématiques', 'Langue Litterature et Culture Étrangère: Anglais'],
    },
  ];

  const EXPERIENCE_DATA = [
    {
      date: '26 mai - 26 juin 2026',
      title: 'Technicien support IT (stage de 1re année BTS SIO)',
      company: 'Cartier SA (Groupe Richemont) — La Chaux-de-Fonds, Suisse',
      desc: 'Stage au sein de l’équipe support IT de niveau 1-2, dans un environnement de manufacture.',
      details: [
        'Inventaire, étiquetage et traçabilité de 210 unités (ordinateurs et écrans), puis recyclage avec suivi Excel.',
        'Effacement sécurisé des données avant désaffectation et recyclage du matériel.',
        'Sélection et préparation de postes de travail réattribués aux apprentis de la manufacture.',
        'Prise en charge d’environ 6 tickets par jour dans ServiceNow et interventions utilisateurs sur site.',
        'Outils : ServiceNow ITSM, Tanium et CyberArk.',
      ],
    },
    {
      date: '2021',
      title: 'Stage en service après-vente',
      company: 'Tissot SA — Le Locle, Suisse',
      desc: 'Immersion logistique et contrôle qualité au sein de la manufacture horlogère.',
      details: [
        'Suivi administratif et logistique de pièces et montres en révision SAV.',
        'Contrôle qualité rigoureux selon les standards de précision horlogère.',
      ],
    },
    {
      date: '2021',
      title: 'Stage en mécanique automobile',
      company: 'BT Passion — Le Locle, Suisse',
      desc: 'Sérvice complet sur véhicules : diagnostic, entretien et révision technique.',
      details: [
        'Diagnostic et réparation de vehicules en quasi-autonomie, sous supervision du chef d’atelier.',
      ],
    },
  ];

  const PROJECTS_DATA = [
    {
      title: 'Développement web & frameworks',
      category: 'Formation',
      desc: 'Développement web et applicatif dans le cadre de ma formation BTS SIO, option SLAM.',
      tech: ['PHP 8', 'Symfony 6', 'Twig', 'Doctrine ORM', 'React', 'JavaScript ES6+', 'HTML5 / CSS3', 'Bootstrap'],
    },
    {
      title: 'Langages & algorithmique',
      category: 'École 42',
      desc: 'Compétences travaillées pendant la Piscine de l’École 42 à Lausanne.',
      tech: ['C', 'Pointeurs', 'Gestion mémoire', 'Algorithmique avancée', 'Bash / Shell Unix', 'Norminette 42'],
    },
    {
      title: 'Bases de données & modélisation',
      category: 'BTS SIO',
      desc: 'Conception de données et modélisation des applications.',
      tech: ['SQL', 'MySQL', 'MariaDB', 'Merise (MCD, MLD, MPD)', 'MVC', 'POO'],
    },
    {
      title: 'Outils IT & environnements',
      category: 'Outils',
      desc: 'Outils utilisés en formation et lors de mon stage en support informatique.',
      tech: ['ServiceNow ITSM', 'Tanium', 'CyberArk', 'Wipe sécurisé', 'Gestion de parc', 'Git / GitHub', 'Linux / Unix', 'PhpStorm', 'VS Code', 'Agile Scrum'],
    },
  ];

  const CERTIFICATES_DATA = [
    { title: 'Attestation ANSSI', file: 'assets/anssi.pdf' },
    { title: 'Attestation CNIL — module 1', file: 'assets/cnil-1.pdf' },
    { title: 'Attestation CNIL — module 2', file: 'assets/cnil-2.pdf' },
    { title: 'Attestation CNIL — module 3', file: 'assets/cnil-3.pdf' },
    { title: 'Attestation CNIL — module 4', file: 'assets/cnil-4.pdf' },
    { title: 'Attestation CNIL — module 5', file: 'assets/cnil-5.pdf' },
    { title: 'Attestation CNIL — module 6', file: 'assets/cnil-6.pdf' },
    { title: 'Attestation EBIOS', file: 'assets/ebios.pdf' },
  ];

  const LANGUAGES_DATA = [
    { title: 'Portugais', level: 'Natif', desc: 'Langue maternelle, bilingue parfait', icon: 'PT' },
    { title: 'Français', level: 'Bilingue C2', desc: 'Excellente aisance écrite et orale', icon: 'FR' },
    { title: 'Anglais', level: 'Bilingue C2', desc: 'Veille technique et documentation', icon: 'EN' },
  ];

  const VEILLE_DATA = [
    { date: 'Stage recherché', title: 'Développement logiciel', source: 'BTS SIO — option SLAM', desc: 'Recherche un stage en développement logiciel.' },
    { date: 'Localisation', title: 'Villers-le-Lac, France', source: 'Mobilité régionale', desc: 'Basé dans le Doubs, à proximité de la Suisse.' },
    { date: 'Mobilité', title: 'Permis en cours d’acquisition', source: 'Permis de conduire', desc: 'Information indiquée sur mon CV.' },
  ];

  const PASSIONS_DATA = [
    { title: 'Sports collectifs', desc: 'Football et volleyball : communication et esprit d’équipe.', icon: '⚽' },
    { title: 'Photo & high-tech', desc: 'Création visuelle, cadrage et retouche numérique.', icon: '📷' },
    { title: 'Jeux vidéo', desc: 'Jeux de stratégie et de réflexion, avec une approche tactique.', icon: '🎮' },
  ];

  /* ------------------------------------------------------------------ */
  /*  TYPING EFFECT — Hero                                              */
  /* ------------------------------------------------------------------ */

  const typingEl = document.getElementById('typing');
  const outputEl = document.getElementById('hero-output');
  const heroLines = [
    'Bonjour, je suis Enzo Sousa Teixeira.',
    'Étudiant en BTS SIO, option SLAM.',
    'Développeur informatique / Analyste programmeur.',
    'À la recherche d’un stage en développement logiciel.',
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
        ${exp.details && exp.details.length ? `<ul class="cv-detail-list">${exp.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>` : ''}
      `;
      experienceGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU COMPÉTENCES                                                 */
  /* ------------------------------------------------------------------ */

  const projectGrid = document.getElementById('project-grid');
  function renderProjects() {
    projectGrid.innerHTML = '';
    PROJECTS_DATA.forEach((proj) => {
      const card = document.createElement('div');
      card.className = 'project-card';
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
        </div>
      `;
      projectGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU CERTIFICATIONS                                              */
  /* ------------------------------------------------------------------ */

  const certificateTabs = document.getElementById('certificate-tabs');
  const certificateTitle = document.getElementById('certificate-title');
  const certificateOpen = document.getElementById('certificate-open');
  const certificatePdf = document.getElementById('certificate-pdf');

  function renderCertificates() {
    certificateTabs.innerHTML = '';
    CERTIFICATES_DATA.forEach((certificate, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'certificate-tab';
      button.textContent = certificate.title;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        certificateTabs.querySelectorAll('.certificate-tab').forEach((tab) => {
          tab.classList.remove('is-active');
          tab.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('is-active');
        button.setAttribute('aria-pressed', 'true');
        certificateTitle.textContent = certificate.title;
        certificatePdf.src = certificate.file;
        certificatePdf.title = `Visionneuse PDF — ${certificate.title}`;
        certificateOpen.href = certificate.file;
      });
      certificateTabs.appendChild(button);
      if (index === 0) button.click();
    });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU LANGUES                                                     */
  /* ------------------------------------------------------------------ */

  const certsGrid = document.getElementById('certs-grid');

  function renderLanguages() {
    certsGrid.innerHTML = '';
    LANGUAGES_DATA.forEach((cert) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.innerHTML = `
        <span class="cert-badge">${cert.icon}</span>
        <h3 class="cert-title">${cert.title}</h3>
        <span class="cert-org">${cert.level}</span>
        <p class="cert-status">${cert.desc}</p>
      `;
      certsGrid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  RENDU INFORMATIONS PRATIQUES                                      */
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
    renderCertificates();
    renderLanguages();
    renderVeille();
    renderPassions();

    // Animations au scroll
    initScrollAnimations();
  });

})();