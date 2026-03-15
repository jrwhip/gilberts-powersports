# Gilbert's Powersports & Repair — Project Documentation

The owner of this site has no development skills. Handle all git operations, deployments, and technical decisions. Never ask her to run terminal commands or do git tasks herself.

---

## Git & Deployment

- **Hosting**: AWS Amplify, auto-deploys from `main` branch
- **Deploy directory**: `public/`
- **No build step**: This is a static site. No bundler, no compiler, no npm dependencies in production.
- **Git**: Always handle git operations completely. Commit with clear messages. Push when asked.
- **Branch**: Everything happens on `main`.

---

## How to Work on This Codebase

### No Trial and Error
Do not guess at solutions. Do not try something, see if it works, then try something else. Before writing any fix or feature:
1. **Read the existing code** you are about to change. Understand how it works and why it was written that way.
2. **Understand the root cause** of the problem before proposing a solution. If you don't understand the cause, keep reading code until you do.
3. **Think through the full interaction** — not just the happy path. Consider hover, click, keyboard, mobile, focus, edge cases, and how states interact with each other.

### Research from Authoritative Sources Only
When you need to learn how something should work (UX patterns, browser APIs, accessibility, etc.):
- Use **official documentation**: MDN Web Docs, W3C/WAI-ARIA specs, WCAG guidelines.
- Use **established component libraries as reference implementations**: Angular CDK, Radix UI, Headless UI, Adobe React Aria. These are hardened, tested, and handle edge cases you won't think of.
- Use **reputable UX research**: Nielsen Norman Group, Baymard Institute, Smashing Magazine.
- Do NOT use random blog posts, Stack Overflow answers, or AI-generated tutorials as primary sources. If a search returns generic results, refine the search or go directly to the source documentation.

### UX Implementations Must Be Complete
Do not implement the minimum that "works." Implement the full interaction pattern as established by production-grade component systems. For example:
- A dropdown is not just "click to open." It is a state machine with hover, click, pinned states, keyboard support, focus management, outside-click dismissal, ARIA attributes, and coordinated visual feedback.
- A carousel is not just "setInterval every 5 seconds." It accounts for variable content durations, user interaction pauses, seamless transitions, and edge cases like content finishing while paused.
- Before implementing any interactive component, study how Angular CDK, Radix, or React Aria implement that same pattern. Understand the full state machine. Then implement it — adapted to vanilla JS, but with the same completeness.

---

## Do Not Break These Things

These are conventions that exist for specific reasons. Breaking them causes real bugs.

### Fonts
- `DIN 2014` is the **display/header font only** (`--font-display`). It is NOT a body font.
- Body text uses the **system font stack** (`--font-body`). Do not change this.
- Do not add any other custom fonts. No Google Fonts. No other @font-face declarations.
- Font files: `public/fonts/DIN2014-Regular.otf` (400), `DIN2014-Bold.otf` (700), `DIN2014-Light.otf` (300).

### UTVs Dropdown (Navigation)
- The UTVs nav item is a `<button class="nav-dropdown-toggle">`, **NOT** an `<a href="#">`. Using an `<a href="#">` will cause the SPA router to intercept the click and try to fetch a page, breaking the dropdown.
- Dropdown visibility is controlled entirely by **JavaScript** via the `.open` class on `.nav-dropdown`. CSS `:hover` does NOT control dropdown visibility.
- The dropdown uses a **hover+click state machine** with pinned/unpinned states:
  - Hover opens immediately, mouseleave closes after 300ms delay
  - Click pins the dropdown open (mouseleave won't close it)
  - Click again while pinned closes it
  - Click outside, Escape, or clicking a menu link all close and unpin
- `aria-expanded` is toggled on every open/close.
- On mobile (below 768px), the dropdown menu items are always visible in the slide-out nav via CSS (`position: static; opacity: 1; visibility: visible`). The state machine still works but is supplementary.

### Hero Video Carousel (Homepage)
- Auto-advancement is **event-driven** using the video `ended` event. There is NO `setInterval` and NO `setTimeout` for auto-play.
- Videos do NOT have the `loop` attribute. Each video plays once, fires `ended`, and the carousel advances.
- Videos have **different lengths** (4.8s, 8s, 8s). This is why `setInterval` doesn't work — it can't account for varying durations.
- Hover-pause listeners are on `.hero-btn`, `.hero-nav`, `.hero-arrows` only — **NOT on the full `#hero` element** (which is 100vh and would always be "hovered").
- On mouseleave, if the video already ended while paused, the carousel advances immediately.
- The `goTo()` function resets `currentTime = 0` and forces a reflow to restart the Ken Burns CSS animation.

### SPA Router
- `public/js/router.js` intercepts internal link clicks and swaps `<main>` content via `fetch()` without full page reload.
- Pages work fully **without JavaScript** — the router is progressive enhancement.
- After navigation, the router re-initializes components via `window.SiteComponents.loadHeader()`, `.initScrollReveal()`, `.initFaqToggles()`.
- UTV pages have inline `<script>` tags with a `pageInit` function. The router detects and executes these via `new Function()`.
- The router rejects `href="#"`, `mailto:`, `tel:`, `target="_blank"`, `download`, and non-http protocols.

### McCormick Tractors
- McCormick tractors were **completely removed** from the site. Do not add McCormick references to any page, nav link, footer link, meta description, structured data, or contact form option.

### Template Literals
- All JS string building uses template literals (backtick strings). Do not use string concatenation with `+`.

---

## Site Architecture

```
public/                          # Deployed to Amplify
├── index.html                   # Homepage — hero carousel, features, testimonials, FAQ
├── services.html                # Services page — 4 service categories
├── contact.html                 # Contact form (posts to Lambda)
├── utv/
│   ├── ut6.html                 # Segway UT6 (3 trims, starting $10,499)
│   ├── ut10.html                # Segway UT10 (2 trims, starting $14,499)
│   ├── ut10-crew.html           # Segway UT10 Crew (2 trims, starting $16,999)
│   └── villain-sx10.html        # Segway Villain SX10 (3 trims, starting $16,499)
├── css/styles.css               # Single master stylesheet (~1,660 lines)
├── js/
│   ├── components.js            # Header, footer, dropdown, scroll reveal, FAQ toggles
│   ├── router.js                # SPA client-side router
│   └── contact-form.js          # Contact form submission to Lambda
├── fonts/                       # DIN 2014 font files (.otf)
├── img/                         # Logos, favicons, product image
├── videos/                      # Hero carousel and background videos (.m4v)
└── data/                        # Spec JSON files (exist but NOT currently used)

lambda/
└── contact-handler/index.mjs    # AWS Lambda function for contact emails

_client-docs/                    # Client requirements and communication history
```

---

## JavaScript Files

### `components.js`
Shared UI components injected on every page.
- `loadHeader()` — Injects site header with nav links, active state detection, mobile menu, and dropdown. Calls `initHeaderScroll()`, `initMobileMenu()`, `initDropdown()`.
- `loadFooter()` — Injects site footer with links, social icons, copyright year.
- `initHeaderScroll()` — Adds `.scrolled` class to header when scrolled past 60px (shrinks padding, adds backdrop blur).
- `initMobileMenu()` — Hamburger toggle for mobile nav drawer. Closes nav when a link is clicked.
- `initDropdown()` — The hover+click state machine for the UTVs dropdown (see "Do Not Break" section above).
- `initScrollReveal()` — IntersectionObserver that adds `.visible` to `.reveal` elements for fade-in animations.
- `initFaqToggles()` — Click handler for FAQ accordion items.
- All functions exported to `window.SiteComponents` so the router can re-initialize them after navigation.

### `router.js`
Client-side SPA router. Intercepts internal link clicks, fetches new page HTML, swaps `<main>` content with a 300ms fade transition. Handles browser back/forward via `popstate`. A `transitioning` flag prevents rapid navigation spam.

### `contact-form.js`
Validates form fields, sends POST to Lambda Function URL, shows success/error messages. Exports `window.initContactForm` for SPA re-initialization.

---

## Contact Form Backend

- **Lambda Function URL**: `https://iwqj4dq2stas3rbnikkwqeft740jljqn.lambda-url.us-west-2.on.aws/`
- **AWS Region**: `us-west-2`
- **Email service**: AWS SES
- **Recipient**: `kristiglbrt@gmail.com`
- **How it works**: Lambda receives POST with JSON body (`name`, `email`, `phone`, `subject`, `message`), validates fields, sends email via SES. The email is sent FROM the recipient address with `ReplyToAddresses` set to the form submitter's email (SES requires verified sender).
- **CORS**: Handled by the Lambda Function URL configuration, NOT in the Lambda handler code. Do not add CORS headers to the handler — it causes duplicate headers.

---

## CSS Architecture

### Custom Properties (defined on `:root`)
```
--color-red: #DA0012           (primary brand red)
--color-red-hover: #ff1a2e     (hover state)
--color-bg: #0a0a0a            (main background)
--color-bg-alt: #0f0f0f        (alternate background)
--color-card: #111             (card background)
--color-card-hover: #161616    (card hover)
--color-footer: #060606        (footer background)
--color-white: #fff
--color-text: #e0e0e0          (body text)
--color-text-muted: rgba(255,255,255,0.7)
--color-text-dim: rgba(255,255,255,0.5)
--color-text-faint: rgba(255,255,255,0.4)
--color-text-ghost: rgba(255,255,255,0.3)
--color-border: rgba(255,255,255,0.06)
--font-display: 'DIN2014', sans-serif
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

### Responsive Breakpoint
Single breakpoint: `@media (max-width: 768px)`
- Header switches to mobile slide-out drawer
- Grids collapse to single column
- Hero navigation arrows hidden
- Dropdown menu becomes static/always-visible

### Key Animation Patterns
- **Scroll reveal**: `.reveal` → `.visible` (opacity 0→1, translateY 40px→0, 0.8s cubic-bezier)
- **Stagger delays**: `.delay-1` through `.delay-4` (0.1s increments)
- **Ken Burns**: `scale(1)` → `scale(1.08)` over 12s on hero slides
- **Header scroll**: Background gains blur backdrop at 60px scroll
- **Page transitions**: 300ms opacity fade via `.page-exit` class

### Fluid Typography
Uses `clamp()` for responsive sizing:
- Hero title: `clamp(2.5rem, 6vw, 5rem)`
- Section titles: `clamp(2rem, 4vw, 3rem)`
- UTV model names: `clamp(3rem, 8vw, 6rem)`

---

## UTV Landing Pages

All 4 UTV pages follow the same template:
1. Hero section with model name and starting price
2. Trim selector buttons (switching active trim)
3. Product image + selected trim details
4. Specs comparison table (columns per trim, row highlighting)
5. Accessories section with pricing cards
6. CTA section linking to contact page

Each page has an inline `<script>` with a `pageInit` function that initializes the trim selector. The SPA router detects and executes this function after navigation.

Specs are **hardcoded in the HTML tables**. JSON data files exist in `public/data/` but are not currently used.

---

## Client Documentation

The `_client-docs/` directory contains the original client requirements and communication:
- `01-services-page.md` — Services page content and layout notes
- `03-utv-landing-pages.md` — UTV page template wireframe and full spec tables for all 10 trims
- `04-segway-accessories.md` — Accessory pricing for UT10, UT10 Crew, Villain SX10
- `05-assets-and-branding.md` — Logo files, photos, stock image needs
- `06-communication-log.md` — All client emails (Feb 23 – Apr 7, 2025)

---

## Client Contact

**Kristi Gilbert**
- Email: kristiglbrt@gmail.com
- Google account: kristiglbrt05@gmail.com
