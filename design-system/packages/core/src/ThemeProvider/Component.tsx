import React, { ComponentType } from 'react'
import { ThemeProvider as TUIThemeProvider } from 'theme-ui'
import baseTheme from '@bud/themes/preset-base'

import FontFaces from 'FontFaces'
import { ThemeProviderProps } from './interfaces'

const ThemeProvider: ComponentType<ThemeProviderProps> = ({ theme = baseTheme, children }) => (
  <TUIThemeProvider theme={theme}>
    <FontFaces />
    {children}
  </TUIThemeProvider>
)

export default ThemeProvider
