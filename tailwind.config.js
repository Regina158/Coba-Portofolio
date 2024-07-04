/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#7e22ce",    // Ungu
          "secondary": "#22d3ee",  // Biru muda
          "accent": "#10b981",     // Hijau
          "neutral": "#374151",    // Abu-abu gelap
          "base-100": "#ffffff",   // Putih
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      {
        synthwave: {
          "primary": "#e779c1",
          "secondary": "#58c7f3",
          "accent": "#f3cc30",
          "neutral": "#20134e",
          "base-100": "#1a103c",
          "info": "#53c0f3",
          "success": "#71ead2",
          "warning": "#f3cc30",
          "error": "#e24056",
        },
      },
    ],
  },
}