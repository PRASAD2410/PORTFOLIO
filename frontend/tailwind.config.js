export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0a0e27',
          text: '#ff9500',
          border: '#1a2847',
          hover: '#ff7700',
          muted: '#6b5b4a',
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 149, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 149, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
