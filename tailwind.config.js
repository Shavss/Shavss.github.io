/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-mono)', 'monospace'],
        body: ['var(--font-work-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        canvas: '#0A0A0A',
        surface: '#111111',
        ink: '#E8E4DC',
        muted: '#6B6560',
        accent: '#D4580A',
        rule: '#2A2A2A',
        stroke: '#1E1E1E',
      },
    },
  },
  plugins: [],
}
