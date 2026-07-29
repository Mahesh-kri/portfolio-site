module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          bg: '#0D0D0C',
          text: '#EDE8DD',
          amber: '#D99A3D',
          gray: '#6B6B63',
        },
        neon: {
          cyan: '#3DE8E0',
          magenta: '#E23DE0',
        },
        bg: '#0A0A0F',
        text: '#D8DCE0',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(61,232,224,0.15), 0 0 20px rgba(61,232,224,0.05)' },
          '50%': { boxShadow: '0 0 25px rgba(61,232,224,0.35), 0 0 50px rgba(61,232,224,0.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'cursor-blink': {
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
