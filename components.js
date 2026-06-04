/* ============================================================
   components.js — shared header + footer for every page
   Edit nav/footer HERE only; all pages pick it up automatically.
   ============================================================ */

(function () {

  /* ---------- SOCIAL LINKS (single source of truth) ---------- */
  const SOCIAL = {
    linkedin: 'https://www.linkedin.com/company/indian-national-academy-of-engineering-inae-/posts/?feedView=all',
    twitter: 'https://x.com/inaehq1',
    youtube: 'https://www.youtube.com/channel/UCXOkjYeIRPADua-dny4W1Xg',
    email: 'mailto:technologyconclave@inae.in',
  };

  /* ---------- ACTIVE-PAGE DETECTION ---------- */
  function getActivePage() {
    const p = window.location.pathname.split('/').pop() || 'index.html';
    if (p === '' || p === 'index.html') return 'home';
    return p.replace('.html', '');
  }

  /* ---------- UTILITY BAR ---------- */
  function utilityHTML() {
    return `
<div class="utility" role="complementary" aria-label="Site utility bar">
  <div class="utility-inner">
    <div class="utility-left">
      <span>Organised by <strong style="color:#fff;font-weight:600">Indian National Academy of Engineering (INAE)</strong></span>
      <span class="sep">|</span>
      <span>Established 1987</span>
    </div>
    <div class="utility-right" aria-label="Social links">
      <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="${SOCIAL.twitter}"  target="_blank" rel="noopener" aria-label="Twitter / X"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="${SOCIAL.email}" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
    </div>
  </div>
</div>`;
  }

  /* ---------- NAV ---------- */
  function navHTML(active) {
    function li(href, key, label) {
      return `<a href="${href}"${active === key ? ' class="active"' : ''}>${label}</a>`;
    }
    return `
<header class="nav" id="nav">
  <div class="nav-inner">
    <a class="brand" href="index.html" aria-label="INAE Technology Conclave 2026 home">
      <img src="assets/logos/inae.jpg" alt="INAE logo" />
      <span class="divider" aria-hidden="true"></span>
      <img src="assets/logos/soa.webp" alt="SOA University logo" />
      <span class="divider" aria-hidden="true"></span>
      <div class="brand-text">
        <span class="b1">INAE Technology Conclave 2026</span>
      </div>
    </a>
    <nav class="nav-links" aria-label="Primary">
      ${li('index.html', 'home', 'Home')}
      ${li('speakers.html', 'speakers', 'Speakers')}
      ${li('program.html', 'program', 'Program')}
      <div class="has-dropdown">
        <a href="#"${active === 'call' ? ' class="active"' : ''} aria-haspopup="true">Call</a>
        <div class="nav-dropdown" role="menu">
          <a href="documents/call_for_extended_abstracts.pdf" target="_blank" rel="noopener" role="menuitem"><i class="fa-regular fa-file-pdf"></i>Extended Abstracts</a>
          <a href="startup-display.html" target="_blank" rel="noopener" role="menuitem"><i class="fa-solid fa-rocket"></i>Startup Display</a>
        </div>
      </div>
      ${li('submission.html', 'submission', 'Submission')}
      ${li('committee.html', 'committee', 'Committee')}
      <div class="has-dropdown">
        <a href="information.html"${active === 'information' ? ' class="active"' : ''} aria-haspopup="true">Information</a>
        <div class="nav-dropdown" role="menu">
          <a href="information.html#venue"         role="menuitem"><i class="fa-solid fa-location-dot"></i>Venue</a>
          <a href="information.html#accommodation" role="menuitem"><i class="fa-solid fa-hotel"></i>Accommodation</a>
          <a href="information.html#bhubaneswar"  role="menuitem"><i class="fa-solid fa-city"></i>About Bhubaneswar</a>
        </div>
      </div>
      ${li('sponsorships.html', 'sponsorships', 'Sponsorships')}
      ${li('contact.html', 'contact', 'Contact')}
    </nav>
    <button class="hamburger" aria-label="Open menu" aria-expanded="false" id="hamburger">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>
  <div class="accent-stripe" aria-hidden="true"></div>
  <div class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation">
    <a href="index.html">Home</a>
    <a href="speakers.html">Speakers</a>
    <a href="program.html">Program</a>
    <div class="mm-group">
      <div class="mm-group-label">Call</div>
      <div class="mm-sub">
        <a href="documents/call_for_extended_abstracts.pdf" target="_blank" rel="noopener">Extended Abstracts (PDF)</a>
        <a href="startup-display.html" target="_blank">Startup Display</a>
      </div>
    </div>
    <a href="submission.html">Submission</a>
    <a href="committee.html">Committee</a>
    <div class="mm-group">
      <div class="mm-group-label">Information</div>
      <div class="mm-sub">
        <a href="information.html#venue">Venue</a>
        <a href="information.html#accommodation">Accommodation</a>
        <a href="information.html#bhubaneswar">About Bhubaneswar</a>
      </div>
    </div>
    <a href="sponsorships.html">Sponsorships</a>
    <a href="contact.html">Contact Us</a>
  </div>
</header>`;
  }

  /* ---------- FOOTER ---------- */
  function footerHTML() {
    return `
<footer>
  <div class="foot-inner">
    <div class="foot-col">
      <div class="foot-brand">
        <img src="assets/logos/inae.jpg" alt="INAE logo" />
        <img src="assets/logos/soa.webp" alt="SOA University logo" />
        <img src="assets/logos/iit-bhubaneswar-logo.png" alt="IIT Bhubaneswar logo" />
      </div>
      <p>The Technology Conclave is INAE&rsquo;s flagship event, strengthening Industry&ndash;Academia&ndash;Government collaboration for a self-reliant, technologically advanced India.</p>
    </div>
    <div class="foot-col">
      <h5>Programme</h5>
      <ul>
        <li><a href="speakers.html">Speakers</a></li>
        <li><a href="program.html">Program</a></li>
        <li><a href="committee.html">Committee</a></li>
      </ul>
    </div>
    <div class="foot-col">
      <h5>Participate</h5>
      <ul>
        <li><a href="submission.html">Submission</a></li>
        <li><a href="information.html">Venue &amp; Information</a></li>
        <li><a href="sponsorships.html">Sponsorships</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="foot-col">
      <h5>Contact</h5>
      <ul class="foot-contact">
        <li><i class="fa-regular fa-envelope"></i><span>technologyconclave@inae.in</span></li>
        <li><i class="fa-solid fa-phone"></i><span>011-26582475</span></li>
        <li><i class="fa-solid fa-location-dot"></i><span>Technology Bhavan, New Mehrauli Road,<br/>New Delhi 110016</span></li>
      </ul>
    </div>
  </div>
  <div class="foot-bottom">
    <div>&copy; 2026 Indian National Academy of Engineering. All rights reserved.</div>
    <div class="socials" aria-label="Social media">
      <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="${SOCIAL.twitter}"  target="_blank" rel="noopener" aria-label="Twitter / X"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="${SOCIAL.youtube}"  target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
      <a href="${SOCIAL.email}" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
    </div>
  </div>
</footer>`;
  }

  /* ---------- INJECT ---------- */
  function inject() {
    const active = getActivePage();
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    if (headerEl) headerEl.outerHTML = utilityHTML() + navHTML(active);
    if (footerEl) footerEl.outerHTML = footerHTML();
  }

  // DOM is already parsed when scripts at end-of-body run; inject immediately.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
