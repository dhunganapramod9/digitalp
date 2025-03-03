/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        background: '#0a0a0a',
        accent: '#3b82f6',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
      },
    },
  },
  plugins: [],
};