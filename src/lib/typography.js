import Typography from 'typography'
import '../fonts/fonts.css'
import colors from '../lib/colors'

export const fonts = {
  walsheim: 'GT Walsheim Regular',
  walsheimLight: 'GT Walsheim Light',
  walsheimBold: 'GT Walsheim Bold',
  regular: 'FreightText W01 Book',
  regularItalic: 'FreightText W01 Book Italic',
  bold: 'FreightText W01 Bold',
  boldItalic: 'FreightText W01 Bold Italic',
  regularSans: 'FreightSans W03 Book',
  regularSansItalic: 'Freight Sans W03 Book Italic',
  lightSans: 'Freight Sans W03 Light',
  boldSans: 'Freight Sans W03 Bold',
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
      fontSize: rhythm(2.2),
      letterSpacing: 'normal',
    },
    h2: {
      color: colors.darkGrey,
      fontFamily: fonts.regular,
      fontSize: rhythm(1.4),
      fontWeight: 'normal',
    },
    h3: {
      color: colors.darkGrey,
      fontFamily: fonts.lightSans,
      fontSize: rhythm(1),
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: fonts.walsheimLight,
      marginBottom: rhythm(1),
      letterSpacing: 'normal',
    },
    h5: {
      fontSize: rhythm(0.6),
      lineHeight: rhythm(0.8),
    },
    'h5, h6': {
      fontWeight: '100',
      marginTop: 0,
      fontFamily: fonts.regularSans,
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(0.6),
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    },
    h6: {
      color: colors.grey,
    },
    p: {
      marginBottom: rhythm(1 / 2),
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
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
