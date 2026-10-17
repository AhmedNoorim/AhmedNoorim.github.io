# AhmedNoorim.github.io

Personal academic website of Ahmed Noorim, served by GitHub Pages at
**https://ahmednoorim.github.io**.

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Files

```
index.html              All page content (edit this most often)
css/style.css           Layout, colors, fonts, light/dark theme
js/theme.js             Applies the saved light/dark choice before the page paints
js/main.js              Contents panel, active-section highlight, mobile menus, theme toggle
assets/img/profile.jpg  Profile photo
assets/img/favicon.svg  Browser tab icon
files/                  Put Ahmed_Noorim_CV.pdf here for the "Download CV" button
.nojekyll               Tells GitHub Pages to serve the files as they are
```

## Common edits

**Find a section.** In `index.html`, every part of the page sits between a
banner and an end line, for example:

```html
<!-- =================================================================
     SECTION: EDUCATION
     ================================================================= -->
<section class="section" aria-labelledby="education"> … </section>
<!-- END SECTION: EDUCATION -->
```

Search for `SECTION:` (Ctrl+F) to jump between them. In VS Code you can also
fold a whole `<section>` with the arrow in the gutter. The left sidebar and the
right panel have their own `LEFT SIDEBAR` / `RIGHT SIDEBAR` banners.

**Add, move or remove a section.** Copy, cut or delete everything from the
`SECTION:` banner to its `END SECTION` line. Give a new section's `<h2>` a
unique `id`; the "On this page" panel picks it up automatically, and
`<h3 id="…">` headings appear as indented sub-items. Add `data-toc="Short name"`
to a heading to show a shorter label in the panel.

**Add a publication.** Copy one `<li class="pub">…</li>` inside the
"Conference proceedings" list. Numbering ([1], [2], …) updates by itself.
Wrap your own name in `<strong class="me">Noorim, A.</strong>`.

**Project links.** Paste the URL between the quotes of `href=""` in the
project's `proj-links` line. Links with an empty `href=""` stay hidden, so you
can leave unused slots in place.

**Change colors.** Edit the variables at the top of `css/style.css`
(`--fog`, `--panel`, `--amber`, …). The dark theme has its own set just below.

**Replace the photo.** Save a square image (600×600 or larger) as
`assets/img/profile.jpg`.

**ORCID.** In the left sidebar of `index.html`, uncomment the ORCID line and
add your iD once you have one.

**Update the date.** Change "Last updated" in the footer when you edit content.

