import React, { FunctionComponent } from 'react'
import { Box as TUIBox } from 'theme-ui'

import { BoxProps } from './interfaces'

const Box: FunctionComponent<BoxProps> = ({
  p = 2,
  bg = 'primary',
  color = '#ffffff',
  ...rest
}) => <TUIBox p={p} bg={bg} color={color} {...rest} />

export default Box
