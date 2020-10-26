# Contributing to our Design System

On this file, you'll learn how to contribute to our Design System repository. Please, read all the following content before submitting any pull request. It is important to have a common language, usage, and pattern between all the the code we develop for this repository.

On this document you will find the following topics:

* [How it works](#how-it-works)
* [Basic architecture](#basic-architecture)
* [Development environment setup](#development-environment-setup)
* [Package context boundaries](#package-context-boundaries)
* [Creating a component](#creating-a-component)
* [Documenting a component](#documenting-a-component)

## How it works

Our design system is a bunch of packages that you can use in your application upon your needs. Each package solves a given problem by exporting standard components for usage.

We're in a monorepo scope since each package is standalone and independent. You can find all our packages at `design-system/packages`.

You may seem that the `design-system` folder is a package itself. Using [Lerna](https://lerna.js.org/) with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to manage, build, and deploy all our packages.

Lerna makes it easier for us to build and deploy our packages. A simple `yarn publish` will build, update version, and deploy all new packages. Yarn workspaces, on the other hand, help us developing those packages by providing a unified development structure where we can share modules and update multiple packages at the same time.

You should avoid going inside each package folder. Instead, you can run any command, in any package, with `yarn workspace`. For example, if you want to run `start:dev` at `@bud/core` package, you can go to the `design-system` folder and execute `yarn workspace @bud/core start:dev`.

**HINT:** There are some aliases in our root package. `yarn core`, for example, is an alias for `yarn workspace @bud/core`.

## Basic architecture

The `design-system` folder contains all packages and build commands. A folder called `storybook` in the root of this repository includes the integration for all the documentation in all our packages.

Here is a sample folder structure:

```txt
root
│
├── storybook
|   └── <storybook files>
└── design-system
    ├── <package>
    |   └── <package contents>
    └── package.json << lerna build scripts
```

Each package has its structure, and they depend on the package context. Also, a package can contain a storybook, too, with their component's stories.

The root storybook includes all package's storybook for proper navigation and versioning.

## Development environment setup

To set up your local machine for development, you need to follow these steps:

### 1. Update your hosts file

At your `/etc/hosts` add the following statement:

```txt
127.0.0.1 local.getbud.co
```

It is essential to do so since some of our static resources have rigid CORS rules.

### 2. Install the prerequisite software

To contribute to this project, you must have the following tools installed:

* [asdf](https://asdf-vm.com/#/)
* [asdf-nodejs](https://github.com/asdf-vm/asdf-nodejs)
* [asdf-yarn](https://github.com/twuni/asdf-yarn)

### 3. Install the required tool versions

Inside the `design-system` folder, check the contents of the `.tool-versions` file with the following command:

```sh
cat .tool-versions
```

Now, install the required versions with `asdf` by running:

```sh
asdf install nodejs <nodejs-version>
asdf install yarn <yarn-version>
```

### 4. Install dependencies

Now that you've all the required software, you can go to the `design-system` folder and run:

```sh
yarn install
```

By doing so, you're installing all dependencies for all packages (including root).

## Package context boundaries

In a monorepo structure, it is common to mix boundaries. You need to know clearly what is the limit of each package domains. Below, we've listed all packages with their boundaries set.

### @bud/core

**YES**

* Essential components, like `Box`, `Grid`, and `ThemeProvider`
* HOCs, Hooks, and any helper that we can use in multiple contexts (even outside of components)
* Structural components, like `Layout`, `Flex`, and `Menu`
* Animated structures, such as `Drawer`, `Dialog`, and `Snackbar`

**NO**

* Complex structural components, like `Header`, `Footer`, or `Sidebar`
* Context-aware components, like `ProductList`, `KRList`, or `History`

### @bud/tokens

**YES**

* Primitive tokens, like `colors`, `fonts`, and `assets`
* Assets location
* Decoupled tokens

**NO**

* Assets content, like an icon, font, or picture
* Coupled tokens, mapped to their themes

### @bud/themes

**YES**

* Theming map structure
* The theme object itself
* Theme presets
* Theme extensions

**NO**

* The theme itself (after being created)
* The theme provider, or any other React logic

### @bud/icons

**YES**

* Icon components to use in React
* Icon styling
* Icon structures, like `FlatBackground`

**NO**

* The icon SVG static asset
* Complex state logic

## Creating a component

While creating components **keep in mind that you're coding for multiple applications**. So, you need to be generic as possible and think in all possible usages for your component.

Before coding it, always as yourself the following question:
> Do this component must be generic? Or we can code inside an application only.

Your component is often highly coupled to your application, so you should avoid coding it to our design system.

If the above question was yes, and you **really** need to put it in our design system, do the following process:

### 1. Create a Storybook story

You should start by creating a story, thinking about how your component needs to behave. You can learn how to code stories in the [documenting a component](#documenting-a-component) section.

### 2. Write a unit test

Based on your story, you should now write unit tests that will try and test your component.

### 3. Code the component itself.

You know. Type, type, type, coffee, coffee. And so forth.

### 4. Recheck your story

Now, it is time to see if you've missed anything, and you've covered all corner cases.

## Documenting a component

In a nutshell, the storybook uses **stories**(duh) to explain how components work.

Start by creating a `stories.tsx` file inside your component folder. **IMPORTANT** The file should have precisely that name since Storybook searches for this file name in our components folder.

There are a bunch of addons to enhance your stories, but you should start with the following template:

```typescript
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
```

The above code is a slightly complex story, with some variations, but we're going to inspect the code, explaining each part.

At `line 10`:
```typescript
const Template: Story<BoxProps> = (args) => <Box {...args} />
```
We've defined our template. We're creating a base to use in other stories.

From `line 12 to 16`:
```typescript
export const Default = Template.bind({})
Default.args = {
  children: <Child />,
}
```
We've defined a given variation. Storybook uses each exported `const` as a nested story.

From `line 17 to 24`:
```typescript
export const Rounded = Template.bind({})
Rounded.args = {
  children: <Child />,
  variant: 'box.rounded',
  bg: 'primary',
  color: 'white',
}
```
Here we've defined another story. That is slightly different from the previous one. We're adding some args (which will translate to props in our component) to change its behavior.

Them, until `line 55`, we're doing the same (creating other stories).

Finally, from `line 55 to the end:
```typescript
fault {
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
```

Here we're defining our root story (the `default` export). We've set the `title`, so `Components/Box` means that it will be inside the `Components` section, a story called `Box`. The `component` key is the root component itself, and`argTypes` defines our args (such as name, description, and controls).

There are a **lot** of possible scenarios and other options. Check the [Storybook's docs](https://storybook.js.org/docs/react/get-started/introduction) to learn more.
