import React from 'react'
import { createMock } from 'ts-auto-mock'
import { shallow } from 'enzyme'
import faker from 'faker'
import { Box as TUIBox } from 'theme-ui'

import Component from '../Component'
import { BoxProps } from '../interfaces'

describe('Component composition', () => {
  const fakeProps: BoxProps = createMock<BoxProps>({
    borderColor: faker.internet.color(),
    p: faker.random.number(),
    bg: faker.helpers.randomize(['primary', 'secondary']),
    color: faker.internet.color(),
  })

  it('Should return a TUIBox', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.type()).toBe(TUIBox)
  })

  it('Should pass the provided p to the TUIBox', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const tuiBox = wrapper.find(TUIBox)

    expect(tuiBox.props().p).toBe(fakeProps.p)
  })

  it('Should pass the provided bg to the TUIBox', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const tuiBox = wrapper.find(TUIBox)

    expect(tuiBox.props().bg).toBe(fakeProps.bg)
  })

  it('Should pass the provided color to the TUIBox', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const tuiBox = wrapper.find(TUIBox)

    expect(tuiBox.props().color).toBe(fakeProps.color)
  })

  it('Should pass the provided border color to the TUIBox as a sx prop', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const tuiBox = wrapper.find(TUIBox)
    const sx = tuiBox.props().sx

    expect(sx.borderColor).toBe(fakeProps.borderColor)
  })
})

describe('Component default values', () => {
  it('Should pass 2 as the default p', () => {
    const wrapper = shallow(<Component />)
    const tuiBox = wrapper.find(TUIBox)

    expect(tuiBox.props().p).toBe(2)
  })
})
