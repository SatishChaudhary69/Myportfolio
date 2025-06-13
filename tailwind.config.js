/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#00F9FF',
          purple: '#B026FF',
          pink: '#FF00E5',
        },
        dark: {
          base: '#0A0A1F',
          light: '#1A1A3F',
        }
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 249, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(176, 38, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 229, 0.5)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 10px rgba(0, 249, 255, 0.5), 0 0 20px rgba(0, 249, 255, 0.3)' 
          },
          '100%': { 
            textShadow: '0 0 20px rgba(0, 249, 255, 0.8), 0 0 30px rgba(0, 249, 255, 0.6), 0 0 40px rgba(0, 249, 255, 0.4)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};