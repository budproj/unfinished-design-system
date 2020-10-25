import React, { ComponentType } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import theme from '@bud/themes/preset-base'

import Box from './Component'
import { BoxProps } from './interfaces'

const Child: ComponentType = () => <p>Hi! I am a box 😄</p>

const Template: Story<BoxProps> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Child />,
}

export const Rounded = Template.bind({})
Rounded.args = {
  children: <Child />,
  variant: 'box.rounded',
  bg: 'primary',
  color: 'white',
}

export const Oval = Template.bind({})
Oval.args = {
  children: <Child />,
  variant: 'box.oval',
  bg: 'primary',
  color: 'white',
}

export const Contained = Template.bind({})
Contained.args = {
  children: <Child />,
  variant: 'box.contained',
}

export const RoundedContained = Template.bind({})
RoundedContained.args = {
  children: <Child />,
  variant: 'box.roundedContained',
  bg: 'primary',
  color: 'white',
}

export const OvalContained = Template.bind({})
OvalContained.args = {
  children: <Child />,
  variant: 'box.ovalContained',
  bg: 'primary',
  color: 'white',
}

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    variant: {
      description: 'The type of Box you want to use',
      control: {
        type: 'select',
        options: Object.keys(theme.variants.box).map((variant) => `box.${variant}`),
      },
    },
    borderColor: {
      description: 'The hex code of your desired border color in your Box',
      control: 'text',
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
    },
    color: {
      description: 'The hex code of your desired text color in your Box',
      control: 'text',
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
} as Meta
