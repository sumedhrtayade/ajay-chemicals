# Ajay Chemicals — Demo site (React + Vite + Tailwind)

This project reproduces the layout and responsive behavior of a corporate chemicals website while replacing all text and images with neutral placeholder content. The site's name used throughout is "Ajay Chemicals".

## Features
- Vite + React + React Router
- Tailwind CSS (v3.4.10) — using Tailwind's default blues
- Pages: Home, About, Products, Contact
- Mobile-first responsive layout and components
- Dummy images (picsum.photos) and placeholder text
- Contact form with client-side validation (no backend)

## Run locally (recommended)
1. Ensure Node.js v18+ and npm are installed.
2. In the project root run:
   ```
   npm install
   npm run dev
   ```
   Note: if `tailwindcss` install fails due to network/registry issues, run:
   ```
   npm install -D tailwindcss@3.4.10 postcss autoprefixer
   ```
3. Open the URL printed by Vite (usually http://localhost:5173).

## Cross-browser & Mobile
- Uses standard HTML, CSS and Tailwind classes to ensure compatibility with modern browsers: Chrome, Edge, Firefox, Safari (desktop & mobile).
- Responsive breakpoints included for small, medium, and large screens.

## Customize
Replace placeholder images and text in `/src/pages` and update brand colors in `/src/input.css`.

