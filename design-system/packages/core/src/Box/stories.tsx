import React, { ComponentType } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Box from './Component'
import { BoxProps } from './interfaces'

const Child: ComponentType = () => <p>Hi! I am a box 😄</p>

const Template: Story<BoxProps> = (args) => <Box {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <Child />,
}

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    borderRadius: {
      description: 'How rounded your box should be',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
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
    borderRadius: 0,
    p: 2,
    bg: 'primary',
    color: '#ffffff',
  },
} as Meta
