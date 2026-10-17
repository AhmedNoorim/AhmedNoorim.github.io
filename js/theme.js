/* Runs in <head> before the page paints, so a saved dark/light
   choice applies without a flash. With nothing saved, the site
   shows the light theme. */
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {
    /* Storage blocked: stay on the light theme */
  }
})();