/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Typing effect ── */
const phrases = [
  'Software Engineer',
  'Systems Programmer',
  'Open Source Contributor',
  'C++ / Python / JavaScript',
  'Building reliable software',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 45 : 80;

  if (!isDeleting && charIndex === current.length) {
    delay = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

function observeRevealElements() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}
observeRevealElements();

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activateObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(section => activateObserver.observe(section));

/* ── Mouse parallax on hero glows ── */
const glow1 = document.querySelector('.glow-1');
const glow2 = document.querySelector('.glow-2');

window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  if (glow1) glow1.style.transform = `translate(${x}px, ${y}px)`;
  if (glow2) glow2.style.transform = `translate(${-x}px, ${-y}px)`;
}, { passive: true });

/* ── Nav active style ── */
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: var(--text); }
.nav-links a.active::after { transform: scaleX(1); }`;
document.head.appendChild(style);

/* ────────────────────────────────────────
   GitHub API — fetch & render projects
──────────────────────────────────────── */

const GITHUB_USER = 'masesk';
const GITHUB_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;

const STAR_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
const FORK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v1a2 2 0 002 2h4a2 2 0 012 2v1"/><line x1="6" y1="9" x2="6" y2="21"/></svg>`;
const FOLDER_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>`;

/**
 * Repos to skip — forks, meta repos, or low-signal entries.
 * Keeps the projects section meaningful.
 */
const SKIP_REPOS = new Set([
  `${GITHUB_USER}.github.io`,
  `${GITHUB_USER}-com`,
  'stratum',       // fork
  'allotment',     // fork
  'BannerlordCoop',// fork
  'waim-test',     // test repo
]);

function langColor(lang) {
  const map = {
    'C++': '#f34b7d', 'Python': '#3572A5', 'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489', 'Java': '#b07219', 'HTML': '#e34c26',
    'CSS': '#563d7c', 'Go': '#00ADD8', 'Rust': '#dea584',
    'Shell': '#89e051', 'C': '#555555', 'C#': '#178600', 'Swift': '#F05138', 'Rust': '#dea584',
  };
  return map[lang] || '#8892a4';
}

function buildMeta(stars, forks, lang) {
  const parts = [];
  if (lang) parts.push(`<span class="repo-lang"><span class="lang-dot" style="background:${langColor(lang)}"></span>${lang}</span>`);
  if (stars > 0) parts.push(`<span class="star-count">${STAR_SVG}${stars}</span>`);
  if (forks > 0) parts.push(`<span class="fork-count">${FORK_SVG}${forks}</span>`);
  return parts.join('');
}

function buildCard(repo, featured = false) {
  const desc = repo.description
    ? repo.description.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    : 'No description provided.';

  const topicTags = (repo.topics || [])
    .slice(0, 3)
    .map(t => `<span>${t}</span>`)
    .join('');

  const langTag = repo.language && !topicTags
    ? `<span>${repo.language}</span>`
    : '';

  const tags = topicTags || langTag;

  const iconSize = featured ? 28 : 22;
  const iconClass = featured ? 'project-icon' : 'project-icon small';

  return `
    <div class="project-card${featured ? ' featured' : ''} reveal">
      <div class="project-card-top">
        <div class="${iconClass}">
          ${FOLDER_SVG.replace('width="28"', `width="${iconSize}"`).replace('height="28"', `height="${iconSize}"`)}
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener" aria-label="GitHub">${GITHUB_SVG}</a>
      </div>
      <h3 class="project-name">${repo.name}</h3>
      <p class="project-desc">${desc}</p>
      <div class="project-footer">
        <div class="project-tags">${tags}</div>
        <div class="project-meta">${buildMeta(repo.stargazers_count, repo.forks_count, repo.language)}</div>
      </div>
    </div>`;
}

async function loadGitHubProjects() {
  const featuredEl = document.getElementById('projects-featured');
  const gridEl     = document.getElementById('projects-grid');

  try {
    // Fetch up to 100 repos sorted by stars so top ones float up
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=stars&per_page=100&type=owner`
    );

    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);

    const all = await res.json();

    // Filter: own repos only, not forked, not in skip list, and not empty
    // Then sort by stars descending so the most popular always appear first
    const repos = all
      .filter(r =>
        !r.fork &&
        !SKIP_REPOS.has(r.name) &&
        (r.description || r.stargazers_count > 0)
      )
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    if (repos.length === 0) throw new Error('No repos found');

    // Top 2 by stars → featured row; rest → grid (up to 9)
    const featured = repos.slice(0, 2);
    const grid     = repos.slice(2, 11);

    featuredEl.innerHTML = featured.map(r => buildCard(r, true)).join('');
    gridEl.innerHTML     = grid.map(r => buildCard(r, false)).join('');

    // Wire up reveal observer for the newly injected cards
    observeRevealElements();

  } catch (err) {
    const errHtml = `
      <div class="projects-error">
        Could not load repositories from GitHub.
        <a href="https://github.com/${GITHUB_USER}?tab=repositories" target="_blank" rel="noopener">View them directly →</a>
      </div>`;
    featuredEl.innerHTML = errHtml;
    gridEl.innerHTML = '';
    console.error('GitHub fetch failed:', err);
  }
}

loadGitHubProjects();