import React, { ComponentType, ComponentProps } from 'react'

import StyledBox from './StyledBox'
import { BoxProps } from './interfaces'

const Box: ComponentType<BoxProps & ComponentProps<'div'>> = ({
  borderRadius = 0,
  p = 2,
  bg = 'primary',
  color = '#ffffff',
  ...rest
}) => (
  <StyledBox
    borderRadius={borderRadius}
    p={p}
    bg={bg}
    color={color}
    {...rest}
  />
)

export default Box
