XTRAORDINARI LIFE - WEBSITE FILES

Upload everything in this folder to the root of www.xtraordinari.com.

BEFORE UPLOADING
1. Copy your own photos into this folder, keeping the same names you used before:
   images/hero-ocean.jpg  and  images/services/<service-id>.jpg
   (If a photo is missing, the site uses the Unsplash photo instead.)
2. No phone number is shown. To add one later, put it in CONFIG.phone in assets/site.js.

PAGES
/                                   Home
/life-coaching/                     Life Coaching
/nutrition-wellness-coaching/       Wellness & Nutrition
/closet-cleanout-capsule-styling/   Closet & Capsule Styling
/brand-identity-social-media/       Brand Identity & Social Media
/web-design-development/            Web Design & Development
/career-coaching-resume-writing/    Career & Workforce
/esl-for-professionals/             ESL
/travel-planning/                   Travel Planning
Old links like /#service/esl automatically forward to the new pages.

PREVIEW ON YOUR COMPUTER
Double-click index.html. Links work locally as well as online.

EDITING SERVICES LATER
Edit the SERVICES list in your single-file source (index.html), then rebuild:
  node build-site.js your-source.html site
build-site.js is in the zip next to this folder. It copies the optimized
photos and icons from the static folder (made by make-images.py) into the site.

AFTER GOING LIVE
Google Search Console: verify the domain, submit sitemap.xml, request indexing.
