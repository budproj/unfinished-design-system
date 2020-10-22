import React, { ComponentType } from 'react'

import ThemeProvider from 'styles/ThemeProvider'

const withTheme = <P extends Record<string, unknown>>(
  Component: ComponentType<P>,
): ComponentType<P> => (props: P) => (
  <ThemeProvider>
    <Component {...props} />
  </ThemeProvider>
)

export default withTheme
