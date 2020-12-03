const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            color: defaultTheme.colors.gray[900],
            fontWeight: '800',
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h2: {
            color: defaultTheme.colors.gray[900],
            fontWeight: '700',
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h3: {
            color: defaultTheme.colors.gray[900],
            fontWeight: '600',
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h4: {
            color: defaultTheme.colors.gray[900],
            fontWeight: '600',
            fontFamily: `${theme('fontFamily.display')}`,
          },
        },
      },
      lg: {
        css: {
          h1: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h2: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h3: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h4: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
        },
      },
      xl: {
        css: {
          h1: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h2: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h3: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h4: {
            fontFamily: `${theme('fontFamily.display')}`,
          },
        },
      },
    }),
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      display: [
        'Inter var',
        'SF Pro Display',
        'Sukhumvit Set',
        'Kanit',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-roman.var.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-italic.var.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Kanit',
            fontStyle: 'normal',
            fontWeight: '400',
            fontDisplay: 'swap',
            src:
              'local("Kanit Regular"), local("Kanit-Regular"), url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCKd6xBDFs.woff2) format("woff2")',
            unicodeRange: 'U+0E01-0E5B, U+200C-200D, U+25CC',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sukhumvit Set',
            fontDisplay: 'swap',
            src: "local('Sukhumvit Set')",
            unicodeRange: 'U+0E01-0E5B, U+200C-200D, U+25CC',
          },
        },
      ])
    },
  ],
}
