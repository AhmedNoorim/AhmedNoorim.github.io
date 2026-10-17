/* =========================================================
   Ahmed Noorim, academic portfolio
   1. Light/dark toggle
   2. "On this page" panel, built from the headings in <main>
   3. Highlight the section currently in view
   4. Floating contents panel on tablets and phones
   5. Expandable contact links on phones
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  var sheetQuery = window.matchMedia('(max-width: 1199.98px)');

  /* ---------- 1. Theme toggle ---------- */
  var themeBtn = document.querySelector('.theme-toggle');

  function activeTheme() {
    var chosen = root.getAttribute('data-theme');
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return darkQuery.matches ? 'dark' : 'light';
  }

  function syncThemeButton() {
    if (!themeBtn) return;
    var isDark = activeTheme() === 'dark';
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeBtn.setAttribute('title', isDark ? 'Light theme' : 'Dark theme');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = activeTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* not saved, still applied */ }
      syncThemeButton();
    });
  }
  darkQuery.addEventListener('change', syncThemeButton);
  syncThemeButton();

  /* ---------- 2. Build the contents list ---------- */
  var toc = document.getElementById('toc');
  var tocList = document.getElementById('toc-list');
  var headings = Array.prototype.slice.call(
    document.querySelectorAll('#main h2[id], #main h3[id]')
  );
  var linkFor = {};

  if (tocList) {
    var currentTop = null;
    headings.forEach(function (heading) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = heading.getAttribute('data-toc') || heading.textContent.trim();
      li.appendChild(a);
      linkFor[heading.id] = a;

      if (heading.tagName === 'H2' || !currentTop) {
        tocList.appendChild(li);
        currentTop = li;
      } else {
        var sub = currentTop.querySelector('ol');
        if (!sub) {
          sub = document.createElement('ol');
          currentTop.appendChild(sub);
        }
        sub.appendChild(li);
      }
    });
  }

  /* ---------- 3. Highlight the section in view ---------- */
  var activeLink = null;

  function setActive(id) {
    var link = linkFor[id];
    if (!link || link === activeLink) return;
    if (activeLink) {
      activeLink.classList.remove('is-active');
      activeLink.removeAttribute('aria-current');
    }
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'location');
    activeLink = link;
    keepLinkVisible(link);
  }

  // Scroll the panel itself (never the page) so the active link stays in view
  function keepLinkVisible(link) {
    if (!toc || toc.scrollHeight <= toc.clientHeight) return;
    var linkTop = link.offsetTop;
    var linkBottom = linkTop + link.offsetHeight;
    var viewTop = toc.scrollTop;
    var viewBottom = viewTop + toc.clientHeight;
    if (linkTop < viewTop + 48) {
      toc.scrollTop = Math.max(0, linkTop - 48);
    } else if (linkBottom > viewBottom - 24) {
      toc.scrollTop = linkBottom - toc.clientHeight + 24;
    }
  }

  function updateActive() {
    if (!headings.length) return;
    var offset = window.innerHeight * 0.25;
    var current = headings[0];
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top - offset <= 0) {
        current = headings[i];
      } else {
        break;
      }
    }
    // At the very bottom, the last heading may never reach the line
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = headings[headings.length - 1];
    setActive(current.id);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActive();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateActive();

  /* ---------- 4. Floating contents panel (tablet + phone) ---------- */
  var fab = document.querySelector('.toc-fab');
  var closeBtn = document.querySelector('.toc-close');
  var scrim = document.querySelector('.scrim');

  function isSheet() { return sheetQuery.matches; }

  function openToc() {
    body.classList.add('toc-open');
    if (fab) fab.setAttribute('aria-expanded', 'true');
    var target = activeLink || (tocList && tocList.querySelector('a'));
    if (target) {
      // Wait for the panel to become visible before moving focus
      window.setTimeout(function () { target.focus({ preventScroll: true }); }, 30);
    }
  }

  function closeToc(returnFocus) {
    if (!body.classList.contains('toc-open')) return;
    body.classList.remove('toc-open');
    if (fab) {
      fab.setAttribute('aria-expanded', 'false');
      if (returnFocus) fab.focus({ preventScroll: true });
    }
  }

  if (fab) {
    fab.addEventListener('click', function () {
      if (body.classList.contains('toc-open')) closeToc(true);
      else openToc();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', function () { closeToc(true); });
  if (scrim) scrim.addEventListener('click', function () { closeToc(false); });

  if (tocList) {
    tocList.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (link && isSheet()) closeToc(false);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeToc(true);
  });

  sheetQuery.addEventListener('change', function () {
    if (!isSheet()) closeToc(false);
  });

  /* ---------- 5. Contact links on phones ---------- */
  var profile = document.getElementById('profile');
  var linksBtn = document.querySelector('.links-toggle');

  if (profile && linksBtn) {
    linksBtn.addEventListener('click', function () {
      var open = profile.classList.toggle('links-open');
      linksBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
