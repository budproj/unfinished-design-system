import { colors, fonts } from '@bud/tokens'
import { TUITheme } from './interfaces'

export default <TUITheme>{
  colors: {
    text: colors.g500,
    background: colors.white,
    primary: colors.b500,
    secondary: colors.b300,
    accent: colors.c200,
    highlight: colors.c500,
    muted: colors.g200,
  },

  fonts: {
    body: `${fonts.base}, sans-serif`,
    heading: `${fonts.base}, sans-serif`,
  },

  fontsWeights: {
    body: 300,
    heading: 500,
    bold: 700,
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
}
