import { create } from '@storybook/theming'
import { assets } from '@bud/tokens'
import baseTheme from '@bud/themes/preset-storybook'

const theme = {
  ...baseTheme,
  brandImage: assets.logotypes.primary.svg.production,
};

export default create(theme);
