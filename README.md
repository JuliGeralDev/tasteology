# 🍽️ Tasteology Interface Challenge

## 📖 Overview
This project is a responsive, interactive web interface built with React, Vite, and Tailwind CSS. It implements two main content blocks based on a design challenge, simulating CMS-driven content and focusing on accessibility, modularity, and modern frontend best practices.

## 🔗 Live Preview

[👉 View the Demo on Netlify](https://tasteology-juligeraldev.netlify.app/)

## Features
- **Dynamic Sections:** Content is loaded from a JSON file (`public/data/Sections.json`), simulating a CMS. Sections are rendered dynamically based on their type.
- **Responsive Design:** Layout adapts from desktop to mobile (down to 320px), using Tailwind CSS utilities and grid/flex layouts.
- **Interactivity & Animation:**
  - Cards in the "Taste the Colours" section are clickable and animated with Framer Motion.
  - Images in the "What does cooking mean?" section open in a modal on click.
- **Accessibility:**
  - All interactive images use `<button>` for keyboard accessibility.
  - Cards are wrapped in `<a>` tags for semantic navigation.
- **Global Anchor Click Logging:** All anchor clicks are captured and logged to the console via a custom React hook.
- **Scalable Structure:** Uses React Context to avoid prop drilling and keep section data accessible to all relevant components.

## 📁 Project Structure
```
├── public/
│   ├── assets/           # Images used in the UI
│   └── data/Sections.json # CMS-like content data
├── src/
│   ├── components/
│   │   ├── atoms/        # Smallest UI elements (ImageWithModal, Modal, Title, etc.)
│   │   ├── molecules/    # Composed UI elements (Card, ImageGrid)
│   │   └── organisms/    # Larger UI blocks (CookingImages, CookingText)
│   ├── context/          # React Context for section data
│   ├── features/
│   │   ├── cookingSection/ # Cooking section feature
│   │   └── TasteSection/   # Taste section feature
│   ├── hooks/            # Custom hooks (useGetSection, useLogAnchorClicks)
│   ├── layouts/          # SectionRenderer for dynamic section rendering
│   ├── pages/            # Page-level components
│   ├── services/         # Data fetching utilities
│   ├── styles/           # Global styles (Tailwind)
│   └── types/            # TypeScript types
├── App.tsx               # App entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## ⚙️ How it Works
- **SectionRenderer** dynamically renders each section based on its type (e.g., `image-grid`, `card-grid`).
- **TasteSection** displays a grid of cards, each wrapped in an anchor tag for navigation and click logging.
- **CookingSection** displays a grid of images; clicking an image opens it in a modal.
- **Content** is fully dynamic and can be changed in `Sections.json` without code changes.
- **useLogAnchorClicks** hook logs all anchor clicks to the console for analytics/debugging.

## ⚛️ Technologies Used
- **React** (with hooks and context)
- **Vite** (for fast development and build)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations)
- **TypeScript** (type safety)

## ♿ Accessibility & Semantics
- All interactive elements are accessible by keyboard.
- Semantic HTML is used throughout (e.g., `<a>`, `<button>`, headings).
- Images that open modals are wrapped in `<button>` for accessibility.

## 🚀 How to Run
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Deployment
You can deploy this project to any static hosting (Vercel, Netlify, GitHub Pages, etc.) after running:
```sh
npm run build
```

## 🤔 Reasoning & Decisions
- **CMS Simulation:** All content is loaded from a JSON file to mimic real-world CMS-driven sites.
- **Context API:** Used to avoid prop drilling and keep section data easily accessible.
- **Accessibility:** Chose semantic elements and ARIA attributes for better UX.
- **Animations:** Framer Motion is used for smooth, modern UI transitions.
- **Scalability:** The structure allows for easy addition of new section types and content.


## 🌍 Browser Support
- Latest Chrome, Firefox, and Edge (tested)


## 👩‍💻 Author
Juliana García Corredor  
GitHub: @JuliGeralDev

