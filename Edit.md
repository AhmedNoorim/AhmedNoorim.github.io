## Common edits

**Finding a section.** Each part of index.html sits between two comment banners:

```html
<!-- =================================================================
     SECTION: EDUCATION
     ================================================================= -->
<section class="section" aria-labelledby="education"> … </section>
<!-- END SECTION: EDUCATION -->
```

Press Ctrl+F and search for `SECTION:` to jump between them. In VS Code, the arrow in the gutter folds a whole section. The sidebars have their own `LEFT SIDEBAR` and `RIGHT SIDEBAR` banners.

**Adding, moving, or removing a section.** Select everything from the `SECTION:` banner down to the matching `END SECTION` line and treat it as one block. Give the new `<h2>` a unique `id`, and the "On this page" panel will pick it up. `<h3>` headings with an `id` appear as indented items underneath. For a long heading, add `data-toc="Short name"` to show a shorter label in the panel.

**Adding a publication.** Copy one `<li class="pub">` from the conference list and edit it. The [1], [2] numbers update on their own. Wrap your name in `<strong class="me">Noorim, A.</strong>` so it stands out.

**Project links.** Paste the URL between the quotes in `href=""` on the project's `proj-links` line. A link with an empty `href` stays hidden, so you can leave unused slots in place.

**Changing colors.** The variables at the top of `css/style.css` (`--fog`, `--panel`, `--amber`, and so on) set the light theme. The dark theme has its own set just below.

**Replacing the photo.** Save a square image, at least 600×600, as `assets/img/profile.jpg`.

**Adding ORCID.** In the left sidebar of index.html, uncomment the ORCID line and paste your iD once you have one.

**Updating the date.** Change "Last updated" in the footer whenever you change the content.