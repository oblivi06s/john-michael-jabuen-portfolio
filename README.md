# John Michael E. Jabuen — Portfolio

Freelance portfolio for AI video production, teaching and software work.
Hosted on GitHub Pages from the `main` branch (see the repository's Settings → Pages for the live URL).

## Structure
- `index.html` — all page content, in this order: Hero, AI Video Production, Teaching & Recognition, Software Engineering & Automation, About, Contact.
- `styles.css` — one stylesheet. Colours, type sizes and spacing are tokens at the top (`:root`).
- `videos.js` — the list of portfolio videos (Google Drive). See `HOW_TO_ADD_VIDEOS.txt`.
- `script.js` — video grid and filters, video and image popups, mobile menu, contact form.
- `assets/` — original images and PDFs. `assets/optimized/` holds smaller copies used on the page; the originals open in the full-size viewer.

There is no build step and no dependencies.

## Run locally
Open `index.html` in a browser, or serve the folder so it behaves like GitHub Pages:

    python3 -m http.server 8000

then visit http://localhost:8000/.

## Contact form setup (Formspree, free plan)
1. Create a free account at https://formspree.io and add a new form. Use johnmichaeljabuen11@gmail.com as the destination.
2. Copy the form endpoint, e.g. `https://formspree.io/f/abcdwxyz`. It is public, not a secret.
3. In `index.html`, paste it into the form's `data-endpoint=""` attribute.
4. Send one test message from the live site and confirm it in Formspree.

Until the endpoint is set, the form opens the visitor's email app with their message filled in.
