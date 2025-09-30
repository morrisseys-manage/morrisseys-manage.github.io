
# Wedding Website Starter (GitHub Pages)

A clean, multi‑page starter built with plain HTML/CSS/JS:

- **Home** with a countdown
- **Events** schedule
- **Photos** gallery
- **RSVP** page embedding a Google Form
- Mobile‑friendly, accessible, fast

## Quick start

1. Download this folder and push it to your GitHub repo's default branch.
2. In **Settings → Pages**, set:
   - **Build and deployment**: Deploy from a branch
   - **Branch**: choose your default branch (e.g. `main`) and folder `/root`
3. (Optional) Configure your custom domain in **Settings → Pages** if not already done.

## Personalize

- Replace initials in the header logo (`A ♥ B`) across HTML files.
- In `index.html`:
  - Update the visible date/location.
  - Set the countdown target via `data-date` on `#countdown` (ISO format with timezone).
- In `events.html`: edit event cards.
- In `photos.html`: drop images into `assets/img/` and update the `<img>` `src`/`alt`.
- In `rsvp.html`: replace the `<iframe>` `src` with your live Google Form embed URL
  (Google Form → Send → Embed <> → copy the `src`).

## Styling

All styles live in `assets/css/styles.css`. If you prefer **SCSS**, you can:
- Create `assets/scss/styles.scss`, write Sass, and compile locally:  
  `sass assets/scss/styles.scss assets/css/styles.css --style=compressed`
- Commit the compiled CSS (`assets/css/styles.css`).

> Tip: Keep colors in the `:root` CSS variables.

## Notes

- A simple `404.html` is included.
- No external JS/CSS frameworks are used—easy to maintain.
- Lighthouse-friendly: responsive, reduced JS, semantic HTML.
