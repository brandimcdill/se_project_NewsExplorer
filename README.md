NewsExplorer - Frontend Core Web Application

NewsExplorer is a fully responsive, pixel-perfect frontend React application that allows users to search for real-world headlines using a live third-party news data pipeline and save articles to a personalized, dynamic analytics dashboard.

## 🚀 Live Production Deployment

The compiled production bundle is hosted live on the web:
👉 **[View Live Site](https://brandimcdill.github.io/se_project_NewsExplorer/)**

## 🎥 Project Pitch Video

Check out my walkthrough presentation video where I describe my engineering process, responsible AI collaboration strategies, and technical challenge resolutions:
👉 **[Watch My Project Pitch Walkthrough](https://drive.google.com/file/d/15t0GaZmH6MuDUOow_-NQz8on-ySW0fK1/view?usp=sharing)**

---

## 🛠️ Core Implementations & Milestone Accomplishments

- **Live News API Integration (`src/utils/NewsApi.js`):** Engineered a dynamic fetch utility layer utilizing an environment mode switcher (`import.meta.env.MODE`) to allow seamless, secure deployment swaps between localhost development and the live production proxy URL.
- **Centralized Form Validation Hook (`src/hooks/useFormAndValidation.js`):** Scaled input handling across all workflow modals natively using HTML5 validity keys. Configured custom text overrides to display strict Figma-compliant labels ("Invalid email address", "Invalid password") directly below input rows.
- **Dynamic Analytics Dashboard (`SavedNewsHeader.jsx`):** Programmed an analytical frequency aggregator sorting engine that automatically calculates user saved article quantities and strings together their top keywords (slicing down to show the top 2 tags + remaining balance calculations).
- **Responsive Layout Grid Wraps:** Implemented explicit flex-wrap rules within the CSS design tokens matrix to cleanly wrap article cards into uniform rows of three across all viewports.
- **Session Lifecycle Flushing:** Configured complete application cache and view state flushes upon profile logout actions to ensure secure user separation.

## 💻 Tech Stack Used

- **Framework:** React.js (Vite Build Platform Engine)
- **Routing:** React Router DOM v6
- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **Design Specifications:** Figma Prototype Blueprint Guidelines
- **Automation Tools:** ESLint, Prettier, GitHub Actions Automation Pipeline

---

## 🪵 Key Local Environment Commands

- `npm run dev` — Starts the local browser development server environment.
- `npm run build` — Compiles and optimizes the code tree into static production assets inside the `/dist` directory folder.
- `npm run lint` — Fires the automated ESLint code quality and validation check.
- `npm run deploy` — Executes the automated gh-pages script to push production files directly to the live hosting branch.
