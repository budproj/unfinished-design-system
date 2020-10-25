import React, { ComponentType, Fragment } from 'react'
import { ThemeProvider as TUIThemeProvider } from 'theme-ui'
import { createMock } from 'ts-auto-mock'
import { shallow } from 'enzyme'
import baseTheme from '@bud/themes/preset-base'

import FontFaces from 'FontFaces'
import Component from '../Component'

type Theme = {
  a: string
  b: string
}

describe('Component composition', () => {
  const fakeTheme: Theme = createMock<Theme>()
  type FakeComponentProps = {
    foo?: string
  }
  const FakeComponent: ComponentType<FakeComponentProps> = (props) => <Fragment {...props} />

  it('Should return an instance of TUIThemeProvider', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.type()).toBe(TUIThemeProvider)
  })

  it('Should pass a given theme to the Theme-ui ThemeProvider', () => {
    const wrapper = shallow(<Component theme={fakeTheme} />)
    expect(wrapper.props().theme).toBe(fakeTheme)
  })

  it('Should use the default base component if no other theme was provided', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.props().theme).toBe(baseTheme)
  })

  it('Should inject FontFaces in the current context', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.contains(<FontFaces />)).toBe(true)
  })

  it('Should keep the children inside this provider context', () => {
    const wrapper = shallow(
      <Component>
        <FakeComponent />
      </Component>,
    )
    expect(wrapper.contains(<FakeComponent />)).toBe(true)
  })

  it('Should keep the children component props as is', () => {
    const wrapper = shallow(
      <Component>
        <FakeComponent foo="doo" />
      </Component>,
    )
    expect(wrapper.find(FakeComponent).props().foo).toBe('doo')
  })
})
