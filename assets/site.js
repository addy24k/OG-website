/* =========================================================
   EDIT YOUR DETAILS HERE
   ========================================================= */
const CONFIG = {
  email: "olga.demina@xtraordinari.com",       // all inquiries & booking requests go here
  phone: "",                                    // your phone number (leave empty to hide)
  consultUrl: "https://cal.com/olga-n-demina/30min",  // free discovery / consultation call (30 minutes)
  sessionUrl: "https://cal.com/olga-n-demina/60min",  // single paid session or class (1 hour, paid when booking)
  consultServiceField: "service", // identifier of the "service" booking question in cal.com
};

/* ---------- Photos (free Unsplash images, loaded from images.unsplash.com) ---------- */
const IMG = {
  "life-coaching":"photo-1506126613408-eca07ce68773",
  "wellness-coaching":"photo-1512621776951-a57141f2eefd",
  "career-counseling":"photo-1698047682091-782b1e5c6536",
  "social-media":"photo-1758691737045-3ece61135061",
  "web-design":"photo-1498050108023-c5249f4df085",
  "esl":"photo-1497633762265-9d179a990aa6",
  "travel":"photo-1507812984078-917a274065be",
  "image-branding":"photo-1490481651871-ab68de25d43d"
};
/* Each service has its own page; ROOT is '' on the home page and '../' on service pages */
const ROOT = document.documentElement.getAttribute('data-root') || '';
const SLUG = {"life-coaching":"life-coaching","wellness-coaching":"nutrition-wellness-coaching","image-branding":"closet-cleanout-capsule-styling","social-media":"brand-identity-social-media","web-design":"web-design-development","career-counseling":"career-coaching-resume-writing","esl":"esl-for-professionals","travel":"travel-planning"};
const svcUrl = (id, pricing) => `${ROOT}${SLUG[id]||id}/${pricing?'#pricing':''}`;
const pic = (id,w=1200) => `https://images.unsplash.com/${IMG[id]||id}?auto=format&fit=crop&w=${w}&q=80`;
/* Photos load from the local images/services folder first; Unsplash is the backup if a file is missing */
const bg = (id,w) => `url('${ROOT}images/services/${id}${w < 1000 ? '-sm' : ''}.jpg')`;

/* ---------- Icons ---------- */
const I = {
  lotus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20c-4 0-8-2-9-6 3 0 5 1 6.5 2.5M12 20c4 0 8-2 9-6-3 0-5 1-6.5 2.5M12 20c-2.5-2-3.5-4.5-3.5-7.5S10 6 12 4c2 2 3.5 5.5 3.5 8.5S14.5 18 12 20z"/></svg>',
  apple:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7c-1.5-1-5-1.5-6.5 1.5S5 16 7 19s3.5 2 5 1.5c1.5.5 3 1.5 5-1.5s2.5-7.5 1.5-10.5S13.5 6 12 7z"/><path d="M12 7c0-2 1-3.5 3-4"/></svg>',
  compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>',
  crown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/><path d="M5 19h14"/></svg>',
  monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M9 9l-2 1.5L9 12M15 9l2 1.5-2 1.5"/></svg>',
  social:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z"/></svg>',
  plane:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15l-8-4V5a1.5 1.5 0 00-3 0v6l-8 4v2l8-2v4l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-4l8 2z"/></svg>',
  hanger:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7a2 2 0 112-2"/><path d="M12 7v2L3 16a1.5 1.5 0 001 2.7h16a1.5 1.5 0 001-2.7l-9-7"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>'
};

/* ---------- Services (all delivered online) ---------- */
const SERVICES = [
  {"id": "life-coaching", "group": 1, "icon": "lotus", "cat": "Coaching", "title": "Life Coaching: Mindful Stress Management", "help": "How we can help", "intro": "<p>Build calm, confidence, and lasting inner resilience so you can step into your true life purpose. Through mindful mindset strategies and practical daily habits, you will learn how to quiet self-doubt, overcome imposter syndrome, release past emotional blocks, and navigate life's pressures with clarity and self-trust.</p><p><b>Starting over in a new country?</b> If you are relocating to the US or Canada, or have recently arrived, coaching can help you manage the stress of the move, rebuild confidence in a new culture, and settle into your next chapter, guided by someone who has made that journey herself.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "A no-pressure introductory session to discuss your goals, challenges, and how we can work together."}, {"t": "1-on-1 Personalized Coaching Sessions", "d": "Private, judgment-free virtual sessions tailored to your unique life stage and personal goals."}, {"t": "Custom Stress & Mindset Action Plan", "d": "Practical daily habits and mindfulness tools to help you stay grounded under pressure."}, {"t": "Confidence & Imposter Syndrome Toolkit", "d": "Guided exercises to quiet self-doubt, reframe limiting beliefs, and build authentic self-trust."}, {"t": "Life Purpose & Clarity Mapping", "d": "Structured goal-setting frameworks to help you uncover what truly matters and align your next steps."}, {"t": "Between-Session Check-Ins & Resources", "d": "Light accountability, reflection prompts, and worksheets to keep your momentum going between calls."}], "note": "<em>Life coaching is a forward-focused partnership for personal growth and well-being; it is not licensed therapy or clinical mental health treatment.</em>", "from": "$80", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "Single 50-Minute Coaching Session", "p": "$80", "d": ""}, {"n": "Single 75-Minute Coaching Session", "p": "$100", "d": ""}, {"n": "4-Session Clarity & Resilience Package", "p": "Starting at $290", "d": "Save ~10%"}, {"n": "8-Session Deep Transformation Package", "p": "Starting at $540", "d": "Save ~15%, includes between-session email/check-in support"}], "pnote": "Custom plans are available upon consultation."},
  {"id": "wellness-coaching", "group": 1, "icon": "apple", "cat": "Wellness", "title": "Wellness Coaching: Personalized Nutrition & Meal Planning", "help": "How we can help", "intro": "<p>Take the guesswork out of healthy eating with tailored nutrition guidance designed around your lifestyle and goals. Together, we explore nutrient-dense foods, build realistic custom meal plans, and review general nutrient patterns from your routine blood work to support sustainable energy and everyday well-being.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "A no-pressure introductory chat to discuss your wellness goals, eating habits, and lifestyle needs."}, {"t": "Comprehensive Nutrition & Lifestyle Assessment", "d": "A deep dive into your current routines, food preferences, energy levels, and personal health goals."}, {"t": "Custom Mix-and-Match Meal Plans", "d": "Realistic, easy-to-follow weekly meal guides tailored to your tastes, schedule, and nutritional needs."}, {"t": "Anti-Aging & Nutrient-Dense Food Guidance", "d": "Practical shopping lists and food-swap ideas focused on cellular vitality, radiant health, and sustainable energy without strict dieting."}, {"t": "General Nutrient Biomarker Review", "d": "Educational insights into routine blood test patterns to help support everyday energy and wellness habits."}, {"t": "Ongoing Accountability & Plan Adjustments", "d": "Regular check-ins to tweak your meal plans and keep healthy habits sustainable."}], "note": "<em>Nutrition coaching and meal planning are provided for general wellness and educational purposes only and do not constitute medical advice or diagnosis.</em>", "from": "$55", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "Single Nutrition & Wellness Consultation (60 min)", "p": "$55", "d": "Introductory Student Rate"}, {"n": "Custom 7-Day Mix-and-Match Meal Plan + 1 Walkthrough Consultation (60 min)", "p": "$95", "d": ""}, {"n": "4-Week Anti-Aging & Sustainable Habits Package", "p": "$215", "d": "Includes initial intake assessment, custom meal guide, grocery/food-swap list, and 4 weekly 45-minute check-ins"}], "pnote": "Custom plans are available upon consultation."},
  {"id": "image-branding", "group": 2, "icon": "hanger", "cat": "Personal Style", "title": "Closet Cleanout & Capsule Styling", "help": "How we can help", "intro": "<p>Clear out the clutter in your wardrobe and make getting dressed effortless every single day. We start by editing what no longer fits your body or lifestyle, then shop intentionally for a versatile, mix-and-match collection of colors and styles that multiply your outfit options.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "A quick chat to discuss your personal style goals, professional image needs, and whether virtual or in-person support works best for you."}, {"t": "Virtual or In-Person Closet Cleanout", "d": "Step-by-step support—either via video call or hands-on in your home <em>(available locally in the Houston area)</em>—to sort through your wardrobe and decide what to keep, tailor, donate, or let go."}, {"t": "Personal Color, Style & Image Blueprint", "d": "A tailored guide to the silhouettes, fabrics, and color palette that flatter you best and align with your personal and professional brand."}, {"t": "Online or In-Person Capsule & Accessory Shopping", "d": "Choose between curated shoppable links or a guided personal shopping trip together to select versatile clothing, shoes, bags, and accessories that pull every look together."}, {"t": "Complete Mix-and-Match Outfit Lookbook", "d": "Visual outfit combinations—down to the finishing accessories—showing you how to style your pieces for work, interviews, leadership roles, weekends, and special events."}], "from": "$100", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "Virtual Closet Edit & Online Styling", "p": "Starting at $120", "d": "2-hour video session + personalized style recommendations"}, {"n": "In-Person Closet Cleanout <em>(Houston Area)</em>", "p": "Starting at $200", "d": "Up to 3 hours of hands-on wardrobe editing, sorting, and outfit pairing"}, {"n": "In-Person Personal Shopping <em>(Houston Area)</em>", "p": "Starting at $100", "d": "2-hour guided shopping trip for clothing and finishing accessories"}, {"n": "Complete Capsule Wardrobe & Digital Lookbook", "p": "Starting at $250", "d": "Custom piece-by-piece wardrobe checklist, curated shopping links, and visual head-to-toe outfit boards"}], "pnote": "Custom full-wardrobe makeover bundles combining a closet cleanout, shopping, and capsule lookbook are available upon consultation."},
  {"id": "social-media", "group": 2, "icon": "social", "cat": "Creative Services", "title": "Brand Identity & Social Media", "help": "How we can help", "intro": "<p>Beyond aesthetics, we build cohesive visual systems that convert. Our process is designed to turn your brand into an authoritative presence that captures attention, builds deep trust, and drives consistent results across your visual identity and social media platforms.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "A no-pressure introductory chat to discuss your brand vision, audience, and strategic goals."}, {"t": "Primary & Secondary Logo Suite", "d": "Custom primary and secondary logos designed for versatility across digital and print platforms."}, {"t": "Color Palette, Typography & Brand Style Guide", "d": "A complete visual system with exact color codes, font pairings, and usage guidelines for consistent branding."}, {"t": "Social Media Templates & Content Direction", "d": "Custom branded templates, visual storytelling assets, and content direction so you can launch and post with impact."}, {"t": "Packaging & Custom Brand Assets (Complete System Tier)", "d": "Extended visual ecosystem deliverables including custom packaging design, website visual assets, and a tailored brand roadmap."}], "from": "$1,200", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "Brand Identity", "p": "Starting at $1,200", "d": "Primary & secondary logos, color palette, typography selection, and brand style guide — ideal for clients building a solid visual foundation"}, {"n": "Visual Strategy", "p": "Starting at $2,500", "d": "Everything in Brand Identity plus social media templates, content direction, and brand storytelling assets — ideal for clients launching with impact"}, {"n": "Complete System", "p": "Starting at $4,000", "d": "Full visual ecosystem identity, strategic brand foundation, custom packaging design, website assets, and a tailored visual roadmap — our premium experience"}], "pnote": "These packages are designed as a starting point. Every brand is unique, and custom scopes are tailored to align with your specific goals and budget.", "plabel": "Pricing & Packages"},
  {"id": "web-design", "group": 2, "icon": "monitor", "cat": "Web Services", "title": "Web Design & Development", "help": "How we can help", "intro": "<p>Turn visitors into clients with a clean, modern, and easy-to-navigate website built to grow with your business. Working alongside an experienced IT and web specialist, we combine strategic layout and clear messaging with reliable technical development—handling everything from mobile responsiveness and booking forms to domain connection and foundational SEO—so you get a polished site without the tech headaches.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "An introductory session to map out your website goals, page structure, and technical requirements."}, {"t": "Custom Layout & Responsive Design", "d": "A clean, user-friendly website tailored to your brand that looks sharp on desktop, tablet, and mobile devices."}, {"t": "Contact, Inquiry & Booking Form Integration", "d": "Seamless forms and scheduling links so prospective clients can reach out or book your services effortlessly."}, {"t": "Domain, Hosting & SSL Connection", "d": "Full technical setup connecting your custom domain name, secure SSL certificate, and hosting environment."}, {"t": "Foundational On-Page SEO & Speed Optimization", "d": "Clean page titles, meta descriptions, image optimization, and fast load times to help clients find you online."}, {"t": "Post-Launch Walkthrough", "d": "A simple 1-on-1 handoff session showing you how to make basic text or photo updates on your own."}], "from": "$200", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "Landing Page / One-Page Website", "p": "Starting at $350", "d": "Clean, mobile-responsive single-page site, contact/booking form integration, and basic SEO setup"}, {"n": "Small-Business Website Design (Up to 5 Pages)", "p": "Starting at $650", "d": "Custom multi-page layout, mobile optimization, domain/hosting connection, and basic on-page SEO"}, {"n": "Website Refresh & Technical Tune-Up", "p": "Starting at $200", "d": "Layout modernization, mobile responsiveness fixes, speed optimization, and broken-link/form repairs"}], "pnote": "Custom quotes are provided after your discovery call for larger multi-page websites, e-commerce stores, or custom web development features.", "plabel": "Pricing & Packages"},
  {"id": "career-counseling", "group": 2, "icon": "compass", "cat": "Career & Workforce", "title": "Career Readiness & Workforce Consulting", "help": "How we can help", "intro": "<p>Strategic career and enrollment support tailored to both individual job seekers and adult education partners:</p><ul class=\"help-list\"><li><b>For Individuals:</b> Stand out in today's job market with polished resume writing, targeted interview preparation, job search strategy, and confident career-change guidance.</li><li><b>For Training Providers &amp; Organizations:</b> Strengthen student recruitment, community outreach, and enrollment pipelines for workforce certification programs.</li></ul><p><b>Moving to the US or Canada?</b> As an immigrant and internationally trained professional myself, I help newcomers present their international experience in a resume North American employers understand, prepare for local interview styles, and build a job search plan for their new market.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "An introductory consultation to review your individual career goals or your organization's program operations and enrollment needs."}, {"t": "#For Individual Job Seekers", "d": ""}, {"t": "Resume Writing & Optimization", "d": "Modern, accomplishment-driven resume rewriting tailored to highlight your strengths and pass applicant tracking systems (ATS)."}, {"t": "Job Search Platform Setup & Navigation", "d": "Hands-on help creating, optimizing, and navigating profiles on major job boards so employers can easily find you."}, {"t": "1-on-1 Mock Interviews & Feedback", "d": "Personalized coaching to help you answer tough questions with clarity and confidence."}, {"t": "Job Search & Career Transition Roadmap", "d": "Actionable strategies for targeting the right roles, organizing applications, and pivoting into new industries."}, {"t": "#For Training Providers & Organizations", "d": ""}, {"t": "Class Logistics & Day-to-Day Operations", "d": "Hands-on program administration to coordinate schedules, rosters, materials, and smooth class delivery."}, {"t": "Student Enrollment & Onboarding Support", "d": "End-to-end assistance guiding prospective adult learners through registration, paperwork, and class readiness."}, {"t": "Community Outreach & Recruitment", "d": "Targeted local outreach strategies to connect with adult learners and fill certification and workforce training classes."}], "from": "$65", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "#For Individual Job Seekers", "p": "", "d": ""}, {"n": "ATS Resume Writing & Optimization", "p": "Starting at $100", "d": "1-on-1 career intake session + 1 custom, ATS-ready master resume tailored to your target role"}, {"n": "Additional Tailored Resume Version", "p": "+$40 each", "d": "Custom summary, keywords, and bullet adjustments for a second career track or priority job posting"}, {"n": "Job Board Profile Setup & Search Navigation (Up to 90 min)", "p": "Starting at $65", "d": "Hands-on profile creation, keyword optimization, and search strategy across 1–2 platforms"}, {"n": "1-on-1 Mock Interview & Career Coaching (60 min)", "p": "$65", "d": "Targeted interview practice, feedback, and career transition guidance"}, {"n": "Complete Job-Seeker Career Bundle", "p": "Starting at $200", "d": "Full master resume rewrite + job board setup + one 60-minute mock interview session"}, {"n": "#For Training Providers & Organizations", "p": "", "d": ""}, {"n": "Program Operations, Enrollment & Community Outreach Consulting", "p": "Custom Quote", "d": "Flexible hourly or project-based rates tailored to your class schedule and student enrollment goals"}], "pnote": "Multi-session job search and career transition packages are available upon consultation."},
  {"id": "esl", "group": 1, "icon": "globe", "cat": "English Language", "title": "ESL for Foreign Professionals: Workplace & Everyday Communication", "help": "How we can help", "intro": "<p>Designed specifically for internationally trained professionals at all English proficiency levels who want to communicate clearly and confidently in both everyday life and an English-speaking workplace. Build fluency for daily conversations, meetings, presentations, networking, and interviews through practical lessons tailored to your personal and career goals.</p><p><b>Relocating to North America?</b> Whether you are preparing for a move to the US or Canada or have just arrived, lessons can focus on the English you need first: job interviews, workplace meetings, everyday appointments, and feeling at home in your new community.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "A friendly introductory call to assess your current English level and discuss your personal and workplace communication goals."}, {"t": "1-on-1 Tailored ESL Classes for All Levels", "d": "Customized lessons adapted to your proficiency level, industry, and real-life daily and professional scenarios."}, {"t": "Practical Grammar & Clear Writing", "d": "Targeted grammar review and hands-on guidance for writing clear, natural emails, messages, and professional documents."}, {"t": "Pronunciation, Idioms & Language Norms", "d": "Clear pronunciation coaching alongside everyday American idioms, natural phrasing, and cultural norms for both social settings and the workplace."}, {"t": "Everyday & Workplace Speaking Practice", "d": "Real-world conversation practice for daily life situations (appointments, networking, community interactions) as well as meetings, interviews, and presentations."}], "from": "$45", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "Single 60-Minute ESL Session", "p": "$45", "d": ""}, {"n": "Monthly Fluency Plan (2x/Week — 8 Sessions)", "p": "$320", "d": "$40/session - ideal for steady progress"}, {"n": "Intensive Monthly Plan (3x/Week — 12 Sessions)", "p": "$420", "d": "$35/session - our best value for rapid workplace & everyday fluency"}], "pnote": "Custom plans are available upon consultation."},
  {"id": "travel", "group": 2, "icon": "plane", "cat": "Travel", "title": "Personalized Travel Planning & Savings", "help": "How we can help", "intro": "<p>Enjoy stress-free trips without overpaying, whether you are planning a single getaway or looking for ongoing travel perks. I create custom itineraries, search for the best airfare deals, unlock discounted rates on hotels and entertainment tickets, and offer guidance on joining an exclusive travel club for wholesale booking discounts and flexible income opportunities.</p>", "offers": [{"t": "Complimentary 30-Minute Discovery Call", "d": "A quick chat to discuss your upcoming travel dreams, budget, or interest in ongoing travel perks."}, {"t": "Custom Day-by-Day Trip Itineraries", "d": "Personalized destination research, activity recommendations, and travel logistics tailored to your style and schedule."}, {"t": "Flight Deal & Discounted Booking Research", "d": "Hands-on support finding competitive airfare plus access to special rates on hotels and entertainment tickets."}, {"t": "Travel Membership Consulting (Optional)", "d": "A transparent walkthrough of how to join an exclusive travel club to unlock ongoing wholesale booking savings and optional income streams."}], "from": "$65", "pricing": [{"n": "Complimentary 30-Minute Discovery Call", "p": "Free", "d": ""}, {"n": "Flight, Hotel & Ticket Deal Research", "p": "Starting at $65", "d": "Targeted comparison of top flight routes, hotel rates, car rentals, or entertainment tickets for your dates"}, {"n": "Weekend & Short Getaway Itinerary (Up to 4 Days)", "p": "Starting at $125", "d": "Custom day-by-day trip plan, accommodation recommendations, and curated local dining & activity ideas"}, {"n": "Extended & Multi-Destination Trip Planning (5+ Days)", "p": "Starting at $225", "d": "Full custom itinerary, multi-stop logistics, excursion recommendations, and cost-saving booking guidance"}, {"n": "Travel Membership & Wholesale Savings Overview", "p": "Complimentary", "d": "No-obligation walkthrough of how a private travel membership unlocks up to 65% off retail rates on hotels, resorts, cruises, car rentals, and entertainment tickets across multiple global destinations, plus monthly loyalty points, a 110% Best Value Guarantee, and an annual complimentary stay in a participating country of your choice"}], "pnote": "Custom quotes are available for group trips, family reunions, or extended international journeys. Annual complimentary vacation incentives and discount percentages are subject to membership tier and participating destination availability."}
];

/* ---------- Pricing ---------- */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const consultLink = svc => svc ? `${CONFIG.consultUrl}?${CONFIG.consultServiceField}=${encodeURIComponent(svc)}` : CONFIG.consultUrl;
const priceRows = (s,compact) => s.pricing.map(r=>r.n.startsWith('#')
  ? `<li class="pgrp">${r.n.slice(1)}</li>`
  : `<li class="${r.p==='Free'?'pfree':''}"><span class="pn">${r.n}${(!compact&&r.d)?`<small>${r.d}</small>`:''}</span><b class="pp">${r.p}</b></li>`).join('');
const PACKS = [
  {name:"Free Consultation", desc:"Get to know each other and map out your goals, with no obligation.", big:"Free", sub:"30-minute video call",
   feats:["Talk through your goals and challenges","Find the right service for you","Get a personalized plan and price","No obligation"], cta:"Book Free Call", href:()=>CONFIG.consultUrl},
  {name:"Pricing by Service", desc:"Every service is priced individually. Choose a service to see its full pricing.", list:true, featured:true},
  {name:"Referral Discount", desc:"Share the experience with a friend, family member or colleague.", big:"You both save", sub:"when a friend books",
   feats:["Refer anyone who could benefit","They receive a discount on their first session","You receive a discount on your next session","No limit on referrals"], cta:"Refer a Friend", href:()=>`mailto:${CONFIG.email}?subject=${encodeURIComponent('Referral for xtraordinari Life')}`}
];
const POLICY = {
  cancel:"Please give at least 24 hours' notice to cancel or reschedule. Late cancellations and no-shows may count as a completed session.",
  prepay:"5- and 10-session packages need 50% paid up front. The balance is due by the midpoint of the package."
};

/* ---------- Shared wiring (each design supplies window.T with tile/service/price renderers) ---------- */
function boot(){
  const fill = (sel, html) => { const el=$(sel); if(el) el.innerHTML = html; };
  fill('#formFields', FORM_FIELDS);
  fill('#tiles', SERVICES.map(T.tile).join(''));
  fill('#ddPanel', SERVICES.map(s=>`<a href="${svcUrl(s.id)}"><span class="mini-ico">${I[s.icon]}</span>${s.title}</a>`).join(''));
  fill('#fservice', '<option>Not sure yet: help me choose</option>' + SERVICES.map(s=>`<option>${s.title}</option>`).join(''));
  fill('#footCol1', SERVICES.filter(s=>s.group===1).map(s=>`<li><a href="${svcUrl(s.id)}">${s.title}</a></li>`).join(''));
  fill('#footCol2', SERVICES.filter(s=>s.group!==1).map(s=>`<li><a href="${svcUrl(s.id)}">${s.title}</a></li>`).join(''));
  fill('#priceGrid', PACKS.map(T.price).join(''));
  $$('.js-cancel').forEach(e=>e.textContent=POLICY.cancel);
  $$('.js-prepay').forEach(e=>e.textContent=POLICY.prepay);
  $$('.js-contact-mail').forEach(a=>a.href='mailto:'+CONFIG.email);
  $$('.js-consult-link').forEach(a=>{a.href=CONFIG.consultUrl;a.target='_blank';a.rel='noopener'});
  const pick=$('#consultSvc'), go=$('#consultGo');
  if(pick&&go){ pick.innerHTML='<option value="">Choose a service…</option>'+SERVICES.map(x=>`<option>${x.title}</option>`).join('');
    const upd=()=>{go.href=consultLink(pick.value);}; pick.addEventListener('change',upd); upd(); }
  $$('.js-session-link').forEach(a=>{a.href=CONFIG.sessionUrl;a.target='_blank';a.rel='noopener'});
  $$('.js-email').forEach(e=>e.textContent=CONFIG.email);
  $$('.js-email-link').forEach(a=>{a.textContent=CONFIG.email;a.href='mailto:'+CONFIG.email});
  if(CONFIG.phone) $$('.js-phone-link').forEach(a=>{a.textContent=CONFIG.phone;a.href='tel:'+CONFIG.phone.replace(/[^\d+]/g,'')});
  $$('.yr').forEach(e=>e.textContent=new Date().getFullYear());

  const menu = $('#menu');
  const closeMenu = () => { menu && menu.classList.remove('open'); $('#dd') && $('#dd').classList.remove('open'); };
  $('#burger') && $('#burger').addEventListener('click', ()=>menu.classList.toggle('open'));
  $('#ddBtn') && $('#ddBtn').addEventListener('click', ()=>$('#dd').classList.toggle('open'));

  let pendingSvc = null;
  /* Old links such as #service/esl forward to the service's own page */
  const legacy = location.hash.match(/^#service\/([a-z-]+)(\/pricing)?/);
  if(legacy && SLUG[legacy[1]]){ location.replace(svcUrl(legacy[1], legacy[2])); return; }
  function route(){ closeMenu(); }
  window.addEventListener('hashchange', route);
  document.addEventListener('click', e=>{
    const a = e.target.closest('a[href="#book"]'); if(!a) return;
    if(a.dataset.svc) pendingSvc = a.dataset.svc;
    if(a.dataset.opt && $('#foption')) $('#foption').value = a.dataset.opt;
    if(location.hash==='#book'){ e.preventDefault(); route(); }
  });
  const form = $('#bookForm');
  form && form.addEventListener('submit', e=>{
    e.preventDefault();
    const v = id => document.getElementById(id).value;
    const body = `Name: ${v('fname')}\nEmail: ${v('femail')}\nPhone: ${v('fphone')}\nPreferred date: ${v('fdate')}\nService: ${v('fservice')}\nOption: ${v('foption')}\n\nGoals:\n${v('fmsg')}`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Appointment request: '+v('foption'))}&body=${encodeURIComponent(body)}`;
    $('#formSuccess').style.display='block';
  });
  (function(){var els=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window)||!els.length)return;
    document.documentElement.classList.add('js-reveal');
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.15});
    els.forEach(function(el,i){el.style.transitionDelay=(i%5)*90+'ms';io.observe(el);});})();
  document.addEventListener('click',e=>{
    const t=e.target.closest('.price-toggle'), c=e.target.closest('.tp-close');
    if(!t&&!c) return;
    const card=(t||c).closest('.card'), panel=card.querySelector('.tile-price'), btn=card.querySelector('.price-toggle');
    const open=t?panel.hidden:false; panel.hidden=!open; btn.setAttribute('aria-expanded',open);
  });
  route();
}

/* Shared booking form fields (identical in every design) */
const FORM_FIELDS = `
  <div class="row2">
    <div class="field"><label for="fname">Full name</label><input id="fname" required placeholder="Your name"></div>
    <div class="field"><label for="femail">Email</label><input id="femail" type="email" required placeholder="you@email.com"></div>
  </div>
  <div class="row2">
    <div class="field"><label for="fphone">Phone</label><input id="fphone" type="tel" placeholder="(555) 555-5555"></div>
    <div class="field"><label for="fdate">Preferred date</label><input id="fdate" type="date"></div>
  </div>
  <div class="field"><label for="fservice">Service of interest</label><select id="fservice"></select></div>
  <div class="field"><label for="foption">Option</label>
    <select id="foption">
      <option>Free preliminary consultation</option><option>Single session</option>
      <option>5-session package (10% off)</option><option>10-session package (20% off)</option>
    </select></div>
  <div class="field"><label for="fmsg">Tell me a little about your goals</label><textarea id="fmsg" rows="3" placeholder="Optional"></textarea></div>`;

const T = {
  tile:s=>`<article class="card">
    <a class="card-main" href="${svcUrl(s.id)}">
      <div class="ph"><div class="ph-img"><div role="img" aria-label="${s.title}" style="background-image:${bg(s.id,700)}"></div></div><span class="ico">${I[s.icon]}</span></div>
      <div class="body"><h3>${s.title}</h3></div></a>
    <div class="card-foot"><a class="go" href="${svcUrl(s.id)}">Discover →</a><button type="button" class="price-toggle" aria-expanded="false">View pricing</button></div>
    <div class="tile-price" hidden>
      <div class="tp-head"><span>Pricing</span><button type="button" class="tp-close" aria-label="Close pricing">×</button></div>
      <ul class="plist compact">${priceRows(s,true)}</ul>
      <a class="tp-more" href="${svcUrl(s.id,1)}">Full pricing details →</a>
    </div>
  </article>`,
  price:p=>p.list?`<div class="price featured svc-links">
    <h3>${p.name}</h3><p>${p.desc}</p>
    <ul>${SERVICES.map(x=>`<li><a href="${svcUrl(x.id,1)}"><span>${x.title.split(':')[0]}</span><em>From ${x.from}</em></a></li>`).join('')}</ul></div>`:`<div class="price ${p.featured?'featured':''}">
    <h3>${p.name}</h3><p>${p.desc}</p>
    <div class="amt">${p.big}</div>
    <div class="save">${p.sub}</div>
    <ul>${p.feats.map(f=>`<li>${f}</li>`).join('')}</ul>
    <a href="${p.href()}" ${p.href().startsWith('mailto')?'':'target="_blank" rel="noopener"'} class="btn ${p.featured?'':'btn-line'}">${p.cta}</a></div>`,
  service:(s,rel)=>`
  <section class="s-hero" style="background-image:${bg(s.id,2000)}">
    <div class="wrap">
      <div class="crumb"><a href="${ROOT||'./'}">Home</a> · <a href="${ROOT}#services">Services</a> · ${s.title}</div>
      <span class="kicker">${s.cat}</span>
      <h1>${s.title}</h1>
      <div class="hero-actions" style="justify-content:flex-start"><a href="${consultLink(s.title)}" target="_blank" rel="noopener" class="btn btn-coral">Book a Free Consultation</a><a href="${svcUrl(s.id,1)}" class="btn btn-ghost">View Pricing</a></div>
    </div>
  </section>
  <div class="wrap s-body">
    <div>
      <span class="kicker">Overview</span><h2>${s.help}</h2>${s.intro}
      ${s.note?`<div class="note">${s.note}</div>`:''}
      <h2 style="margin-top:34px">What's included</h2>
      <div class="offers">${s.offers.map(o=>o.t.startsWith('#')?`<h3 class="grp">${o.t.slice(1)}</h3>`:`<div${o.t.startsWith('Complimentary')?' class="dc"':''}><i>${I.check}</i><span><b>${o.t}</b>${o.d}</span></div>`).join('')}</div>
      <div class="svc-pricing" id="pricing">
        <span class="kicker">${s.plabel||'Pricing'}</span>
        <ul class="plist">${priceRows(s,false)}</ul>
        <p class="pnote"><b>Note:</b> ${s.pnote}</p>
      </div>
    </div>
    <aside><div class="side">
      <h3>Get started</h3>
      <ul>
        <li><span>Discovery call</span><b>Free · 30 min</b></li>
        <li><span>Pricing</span><b>From ${s.from}</b></li>
        <li><span>Referral discount</span><b>You both save</b></li>
      </ul>
      <a href="${consultLink(s.title)}" target="_blank" rel="noopener" class="btn btn-coral">Book Free Consultation</a>
      <a href="${CONFIG.sessionUrl}" target="_blank" rel="noopener" class="btn btn-line">Book a Session or Class</a>
      <a href="${svcUrl(s.id,1)}" class="side-link">See full pricing ↓</a>
      <p class="fine">Sessions are paid when booking · 24-hour cancellation notice · Packages require 50% pre-payment</p>
    </div></aside>
  </div>
  <section class="more"><div class="wrap"><span class="kicker">Explore more</span><h2 style="margin-bottom:40px">You may also like</h2><div class="tiles">${rel.map(T.tile).join('')}</div></div></section>`
};
(function(){const h=document.getElementById('hdr');const f=()=>{h.classList.toggle('solid',window.scrollY>40)};window.addEventListener('scroll',f);f();})();

boot();
/* Opening the files straight from your computer (file://) needs index.html in links; on the live site clean URLs are used */
if(location.protocol==='file:'){document.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(/^(https?:|mailto:|tel:|#)/.test(h))return;a.setAttribute('href',h.replace(/\/(#.*)?$/,'/index.html$1'));});}
