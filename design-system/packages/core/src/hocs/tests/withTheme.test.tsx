import React, { ComponentType } from 'react'
import { shallow } from 'enzyme'
import { createMock } from 'ts-auto-mock'

import withTheme from '../withTheme'

describe('Component composition', () => {
  type FakeChildProps = {
    a?: string
  }

  const FakeChild: ComponentType<FakeChildProps> = () => <></>
  const fakeProps: FakeChildProps = createMock<FakeChildProps>()

  it('Passes the provided children node to the ThemeProvider', () => {
    const Component = withTheme(FakeChild)
    const wrapper = shallow(<Component />)

    expect(wrapper.contains(<FakeChild />)).toBe(true)
  })

  it('Passes expected props to the provided children', () => {
    const Component = withTheme(FakeChild)
    const wrapper = shallow(<Component {...fakeProps} />)

    expect(wrapper.find(FakeChild).props()).toEqual(fakeProps)
  })
})
