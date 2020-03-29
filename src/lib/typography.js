import Typography from 'typography'
import '../fonts/fonts.css'

export const fonts = {
  cardo: 'Cardo',
  walsheim: 'GT Walsheim Regular',
  walsheimLight: 'GT Walsheim Light',
  walsheimUltralight: 'GT Walsheim Ultralight',
  walsheimBold: 'GT Walsheim Bold',
  light: 'Freight Text Pro Light',
  regular: 'Freight Text Pro Regular',
  regularItalic: 'Freight Text Pro Italic',
  bold: 'Freight Text Pro Bold',
}

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.walsheimBold, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'serif'],
  headerColor: '#0C182B',
  bodyColor: '#1D293C',

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: '#0C182B',
    },
    h2: {
      color: '#243042',
    },
    h3: {
      color: '#4B576A',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
