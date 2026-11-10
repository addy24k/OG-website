# Xtraordinari Life — www.xtraordinari.com

Website for Olga Demina's online coaching and consulting services.

## Files
- `index.html`: the whole website (home page, 13 service pages, pricing and booking).
- `images/olga-demina.jpg`: Olga's profile photo (About section).
- `images/hero-ocean.jpg`, `images/booking-ocean.jpg`, `images/services/*.jpg`: background and service photos (free Unsplash licence).
- `download-images.ps1`: fills the `images` folder with the Unsplash photos. Run it once on Windows before uploading.

## Publish on GitHub Pages
1. Upload `index.html`, `README.md` and the entire `images` folder to the repository root.
2. Go to **Settings > Pages**, set the source to the `main` branch, root folder.
3. Under **Custom domain**, enter `www.xtraordinari.com`, then add a CNAME record at your domain registrar pointing `www` to `<your-github-username>.github.io`.

## Editing
Contact details, booking link and session price are in the `CONFIG` block near the top of the script in `index.html`.
If any photo in `images/` is missing, the page automatically falls back to the Unsplash link.
