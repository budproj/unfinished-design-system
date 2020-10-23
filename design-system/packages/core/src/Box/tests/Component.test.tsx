import React from 'react'
import { createMock } from 'ts-auto-mock'
import { shallow } from 'enzyme'
import faker from 'faker'

import Component from '../Component'
import StyledBox from '../StyledBox'
import { BoxProps } from '../interfaces'

describe('Component composition', () => {
  const fakeProps: BoxProps = createMock<BoxProps>({
    borderRadius: faker.random.number(),
    p: faker.random.number(),
    bg: faker.helpers.randomize(['primary', 'secondary']),
    color: faker.internet.color(),
  })

  it('Should return a StyledBox', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.type()).toBe(StyledBox)
  })

  it('Should pass the provided borderRadius to the StyledBox', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().borderRadius).toBe(fakeProps.borderRadius)
  })

  it('Should pass the provided p to the StyledBox', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().p).toBe(fakeProps.p)
  })

  it('Should pass the provided bg to the StyledBox', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().bg).toBe(fakeProps.bg)
  })

  it('Should pass the provided color to the StyledBox', () => {
    const wrapper = shallow(<Component {...fakeProps} />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().color).toBe(fakeProps.color)
  })
})

describe('Component default values', () => {
  it('Should pass 0 as the default borderRadius', () => {
    const wrapper = shallow(<Component />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().borderRadius).toBe(0)
  })

  it('Should pass 2 as the default p', () => {
    const wrapper = shallow(<Component />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().p).toBe(2)
  })

  it('Should pass "primary" as the default bg', () => {
    const wrapper = shallow(<Component />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().bg).toBe('primary')
  })

  it('Should pass "#ffffff" as the default color', () => {
    const wrapper = shallow(<Component />)
    const styledBox = wrapper.find(StyledBox)

    expect(styledBox.props().color).toBe('#ffffff')
  })
})
