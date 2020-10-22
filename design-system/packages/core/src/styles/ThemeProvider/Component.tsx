import React, { FunctionComponent } from 'react'
import { ThemeProvider as TUIThemeProvider } from 'theme-ui'

import { base as baseTheme } from 'styles/themes'
import { ThemeProviderProps } from './interfaces'

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ theme = baseTheme, ...rest }) => (
  <TUIThemeProvider theme={theme} {...rest} />
)

export default ThemeProvider
