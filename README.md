# Sanket Dale – Portfolio

Static site (HTML, CSS, JavaScript). No build step or dependencies.

## Run locally
    cd portfolio
    python3 -m http.server 8000   # open http://localhost:8000

## Edit content
Projects and skills live in `data.js`. Replace screenshots in `images/<project>/` and update paths there.
Resume: replace `resume/Professional_Resume.pdf`.

## Deploy (simplest: Netlify)
Drag the whole folder onto app.netlify.com/drop. Or GitHub Pages: push to a repo, then Settings > Pages > deploy from `main` / root.
