# professional-profile

Personal portfolio by Marcos André Raimundo with a dark code-inspired style, built without a framework and without a build step. Vanilla HTML, CSS, and JavaScript.

![Animated preview of the portfolio navigating between pages](assets/preview/portfolio-preview.gif)

<p>
  <img src="assets/preview/index-desktop.png" width="49%" alt="Index - hero with name and action buttons" />
  <img src="assets/preview/projects-desktop.png" width="49%" alt="Projects - carousel with lateral peek" />
</p>

<p>
  <img src="assets/preview/skills-desktop.png" width="49%" alt="Skills - skill group grid" />
  <img src="assets/preview/experience-desktop.png" width="49%" alt="Experience - professional timeline" />
</p>

**Mobile (390px):**

<img src="assets/preview/projects-mobile.png" width="32%" alt="Projects on mobile - carousel with dot navigation" />

---

## About the project

The goal was to have a portfolio that any dev can open in DevTools and understand in minutes - no abstraction layers, no hidden dependencies. Every decision was made with readability in mind and ease of explaining in an interview.

The Projects tab carousel was built with native CSS, no library. The dot navigation automatically detects which image is currently visible. The resume PDF is generated directly by the browser, with no intermediaries.

The fonts were chosen intentionally: JetBrains Mono on labels and tags gives the feel of a code editor; Space Grotesk on reading content keeps the text legible. The mobile layout was given the same care as the desktop - most recruiters open LinkedIn links on their phones.

---

## Featured project - pato.do.problema

<p>
  <img src="assets/projects/internal-support-desk/cover.png" width="32%" alt="N1 panel - ticket queue with filters and metrics" />
  <img src="assets/projects/internal-support-desk/login.png" width="32%" alt="Login screen with the duck mascot" />
  <img src="assets/projects/internal-support-desk/user.png" width="32%" alt="Customer area with ongoing ticket" />
</p>

Internal help desk system built from scratch: FastAPI, Python, HTML, CSS, and vanilla JavaScript. Real JWT authentication, three-tier support queue (N1, N2, N3), per-ticket chat, internal notes, knowledge base, and optional integration with the Anthropic API for response suggestions and escalation summaries.

## Structure

```
.
├── assets/
│   ├── preview/        ← screenshots for this README
│   ├── projects/       ← project images (one folder per project)
│   ├── scripts/
│   └── styles/
├── tests/
├── index.html
├── profile.html
├── skills.html
├── experience.html
├── education.html
├── projects.html
└── contact.html
```
