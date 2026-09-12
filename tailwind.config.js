/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        text: '#ffffff',
        muted: '#888888',
        accent: '#ffffff',
        'highlight-green': '#00e676',
        border: '#222222',
        'card-bg': '#050505',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        dramaticTextReveal: {
          '0%': { transform: 'translateY(120%) scale(1.05)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'dramatic-text': 'dramaticTextReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) both 0.15s',
        'fade-in': 'fadeIn 0.8s ease both 0.8s',
      }
    },
  },
  plugins: [],
}
