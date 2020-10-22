import React, { ComponentType } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withTheme } from 'hocs'

import Box from './Component'
import { BoxProps } from './interfaces'

const TestComponent: ComponentType = () => <p>Hi! I am a box 😄</p>

const Template: Story<BoxProps> = withTheme((args) => <Box {...args} />)

export const Primary = Template.bind({})
Primary.args = {
  children: <TestComponent />,
}

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    p: {
      description: 'The amount of padding your Box must have',
      control: 'number',
      table: {
        defaultValue: {
          summary: 2,
        },
      },
    },
    bg: {
      description: 'The background key color your Box must use',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    color: {
      description: 'The hex code of your desired text color in your Box',
      control: 'text',
      table: {
        defaultValue: {
          summary: '#ffffff',
        },
      },
    },
    children: {
      description: 'Your desired Box content. This should be a valid React Node',
      control: null,
      table: {
        defaultValue: {
          summary: 'ReactNode',
        },
      },
    },
  },
  args: {
    p: 2,
    bg: 'primary',
    color: '#ffffff',
  },
} as Meta
