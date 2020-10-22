import React, { FunctionComponent } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Box from './Component'

export default {
  title: 'Components/Box',
  component: Box,
} as Meta

export const Basic: FunctionComponent = () => <Box>This is a basic box</Box>
