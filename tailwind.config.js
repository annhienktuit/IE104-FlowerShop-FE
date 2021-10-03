module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      footer_bg: {
        DEFAULT: '#f4f2f2'
      }
    },
    extend: {},
    padding: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
