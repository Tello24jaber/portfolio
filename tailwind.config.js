/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        'primary-600': 'var(--primary-600)',
        accent: 'var(--accent)',
        ring: 'var(--ring)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px rgba(0,0,0,0.35)',
        card: '0 0 0 1px rgba(255,255,255,0.04)',
      },
      borderRadius: {
        '2xl': '1rem'
      },
      animation: {
        'hero-gradient': 'hero-gradient 14s ease infinite',
        'shine': 'shine 2s ease-in-out infinite',
      },
      keyframes: {
        'hero-gradient': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' }
        },
        'shine': {
          '0%': { transform: 'translateX(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) rotate(45deg)' }
        }
      }
    },
  },
  plugins: [],
}