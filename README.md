# MaineFrame Labs — homepage

Static company website for **MaineFrame Labs**, a freelance machine learning
engineering studio focused on computer vision, multimodal generative AI, and
data-centric AI (active learning & uncertainty quantification).

Built with plain **HTML, CSS, and a little vanilla JavaScript** — no framework,
no build step, no dependencies. Hosted for free on **GitHub Pages**.

## Structure

```
index.html              Home
about.html              About
projects.html           Projects hub (links to the two below)
client-work.html        Client work (vessel detection, biochemical analysis)
writing.html            Writing index (personal research write-ups)
writing/
  vlm-blind.html        Reimplementing "VLMs are blind"
  sae-vit.html          Sparse autoencoders on vision transformers
  solubility-uq.html    UQ for molecular solubility models
contact.html            Contact (mailto link)
CNAME                   Custom domain (placeholder: maineframelabs.hr)
assets/
  css/style.css         Dark/technical theme
  js/main.js            Mobile nav + footer year + active link
  img/logo.svg          Logo / favicon
  img/og.svg            Open Graph image
docs/
  custom-domain.md      How to wire up your custom domain
```

Article pages live under `writing/` and use `../assets/...` relative paths.

## Run locally

Just open `index.html` in a browser. No server or build step required.

Alternatively, from the repo root:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push this repository to GitHub (remote is already
   `https://github.com/vstipetic/maineframe-labs-homepage.git`).
2. In the repo on GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
5. After a minute, the site is live at
   `https://vstipetic.github.io/maineframe-labs-homepage/` — or at your custom
   domain once configured (see below).

## Custom domain

The `CNAME` file currently contains a **placeholder**: `maineframelabs.hr`.
Replace it with your real domain when ready, then follow the steps in
[`docs/custom-domain.md`](docs/custom-domain.md) to point DNS at GitHub Pages
and enable HTTPS.

## Editing

- Content lives directly in the `.html` files.
- The header navigation and footer are duplicated in each page — if you change
  the nav or footer, update all four files (`index`, `about`, `projects`,
  `contact`).
- Theme tokens (colors, fonts, spacing) are CSS variables at the top of
  `assets/css/style.css` under `:root`.
