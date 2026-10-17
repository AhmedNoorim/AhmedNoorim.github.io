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

**Add or change a section.** In `index.html`, copy an existing
`<section class="section">…</section>` block inside `<main>`. Give its `<h2>`
a unique `id`. The "On this page" panel picks it up automatically; `<h3 id="…">`
headings appear as indented sub-items. Add `data-toc="Short name"` to a heading
to show a shorter label in the panel.

**Add a publication.** Copy one `<li class="pub">…</li>` inside the
"Conference proceedings" list. Numbering ([1], [2], …) updates by itself.
Wrap your own name in `<strong class="me">Noorim, A.</strong>`.

**Change colors.** Edit the variables at the top of `css/style.css`
(`--fog`, `--panel`, `--amber`, …). The dark theme has its own set just below.

**Replace the photo.** Save a square image (600×600 or larger) as
`assets/img/profile.jpg`.

**Google Scholar / ORCID.** In the left sidebar of `index.html`, replace the
Scholar search link with your profile URL, and uncomment the ORCID line once you
have an iD.

**Update the date.** Change "Last updated" in the footer when you edit content.

## Preview locally

Open `index.html` in a browser, or install the **Live Server** extension in
VS Code and click "Go Live" to see changes on save.

## Publish

1. Copy these files into the root of your local `AhmedNoorim.github.io` repo.
2. In GitHub Desktop, write a commit message, click **Commit to main**, then **Push origin**.
3. First time only: on github.com, open the repo's **Settings → Pages**, set
   *Source* to **Deploy from a branch**, branch **main**, folder **/ (root)**.

The site updates a minute or two after each push.
