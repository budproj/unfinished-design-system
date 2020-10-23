import { ComponentType } from 'react'
import styled from '@emotion/styled'
import { Box } from 'theme-ui'

import { BoxProps } from './interfaces'

const StyledBox: ComponentType<BoxProps> = styled(Box)`
  border-radius: ${(props: BoxProps) => props.borderRadius}px;
`

export default StyledBox
