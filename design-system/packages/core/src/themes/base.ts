import { colors } from '@bud/tokens';

interface ThemeUIColorsSpec {
  text: string,
  background: string,
  primary: string,
  secondary: string,
  accent: string,
  highlight: string,
  muted: string,
};

interface ThemeUISpec {
  colors: ThemeUIColorsSpec,
};

export default <ThemeUISpec> {
  colors: {
    text: colors.grey[500],
    background: colors.white,
    primary: colors.blue[500],
    secondary: colors.blue[300],
    accent: colors.cyan[200],
    highlight: colors.cyan[500],
    muted: colors.grey[200],
  },
};
