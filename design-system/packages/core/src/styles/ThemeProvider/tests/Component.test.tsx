import React from 'react'
import { ThemeProvider as TUIThemeProvider } from 'theme-ui'
import { createMock } from 'ts-auto-mock'
import { shallow } from 'enzyme'

import { base as baseTheme } from 'styles/themes'
import Component from '../Component'

jest.mock('styles/themes')

type Theme = {
  a: string
  b: string
}

describe('Component composition', () => {
  const fakeTheme = createMock<Theme>()

  it('Should return an instance of TUIThemeProvider', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.first().type()).toBe(TUIThemeProvider)
  })

  it('Should pass a given theme to the Theme-ui ThemeProvider', () => {
    const wrapper = shallow(<Component theme={fakeTheme} />)
    expect(wrapper.props().theme).toBe(fakeTheme)
  })

  it('Should use the default base component if no other theme was provided', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.props().theme).toBe(baseTheme)
  })
})
