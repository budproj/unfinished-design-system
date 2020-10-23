import React, { ComponentType } from 'react'
import { Button } from 'theme-ui'
import { Story, Meta } from '@storybook/react/types-6-0'

import { base as baseTheme } from 'styles/themes'
import ThemeProvider from './Component'
import { ThemeProviderProps } from './interfaces'

const Child: ComponentType = () => <Button>This is a button with theme</Button>

const Template: Story<ThemeProviderProps> = (args) => <ThemeProvider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <Child />,
}

export default {
  title: 'Styles/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    theme: {
      description:
        'This property defines the theme that should be applied to your application. It is important to note that this should be a valid theme',
      control: 'object',
      table: {
        defaultValue: {
          summary: 'Theme/Base',
        },
      },
    },
    children: {
      description:
        'Your application root node. Since this is a provider, your entire application should be inside it',
      control: null,
      table: {
        defaultValue: {
          summary: 'ReactNode',
        },
      },
    },
  },
  args: {
    theme: baseTheme,
  },
} as Meta
