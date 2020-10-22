import { colors } from '@bud/tokens'
import { TUITheme } from './interfaces'

export default <TUITheme>{
  colors: {
    text: colors.grey[500],
    background: colors.white,
    primary: colors.blue[500],
    secondary: colors.blue[300],
    accent: colors.cyan[200],
    highlight: colors.cyan[500],
    muted: colors.grey[200],
  },
}
