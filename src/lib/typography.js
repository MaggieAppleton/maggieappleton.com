import Typography from 'typography'
import '../fonts/fonts.css'
import colors from '../lib/colors'

export const fonts = {
  cardo: 'Cardo',
  walsheim: 'GT Walsheim Regular',
  walsheimLight: 'GT Walsheim Light',
  walsheimUltralight: 'GT Walsheim Ultralight',
  walsheimBold: 'GT Walsheim Bold',
  light: 'FreightTextProLight-Regular',
  regular: 'FreightTextProBook-Regular',
  regularItalic: 'FreightTextProBook-Italic',
  bold: 'FreightTextProBlack-Regular',
}

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.45,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.walsheim, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'serif'],
  headerColor: '#121F35',
  bodyColor: '#334259',

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: colors.black,
      fontFamily: fonts.walsheim,
      fontSize: rhythm(2),
    },
    h2: {
      color: colors.darkGrey,
      fontFamily: fonts.regular,
      fontSize: rhythm(1.4),
    },
    h3: {
      color: colors.darkGrey,
      fontFamily: fonts.walsheimLight,
      fontSize: rhythm(0.9),
      letterSpacing: '0.02em',
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
