export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#D8A2A2',
          blush: '#FFDCDC',
          cream: '#FFF9D6',
          sage: '#8EA66B',
        },
        espresso: '#2B1F19',
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--on-primary) / <alpha-value>)',
        'sage-ink': 'rgb(var(--sage-ink) / <alpha-value>)',
        tint: 'rgb(var(--tint) / <alpha-value>)',
        'tint-rose': 'rgb(var(--tint-rose) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
