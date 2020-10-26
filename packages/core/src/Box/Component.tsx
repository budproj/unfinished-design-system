import React, { ComponentType, ComponentProps } from 'react'
import { Box as TUIBox } from 'theme-ui'

import { BoxProps } from './interfaces'

const Box: ComponentType<BoxProps & ComponentProps<'div'>> = ({ p = 2, borderColor, ...rest }) => (
  <TUIBox
    p={p}
    sx={{
      borderColor,
    }}
    {...rest}
  />
)

export default Box
