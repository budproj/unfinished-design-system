import { constants } from '@bud/tokens'
import faker from 'faker'

import isHostnameProduction from '../isHostnameProduction'

type InvalidTestEnvironments = Record<string, unknown>

type ValidTestEnvironments = {
  local?: string
  develop?: string
  production?: string
}

type TestEnvironments = {
  valid: ValidTestEnvironments
  invalid: InvalidTestEnvironments
}

const environments: TestEnvironments = {
  valid: {
    local: 'local',
    develop: 'develop',
    production: 'production',
  },
  invalid: {
    [faker.random.word()]: faker.random.word(),
  },
}

describe('Function composition', () => {
  const spy: jest.SpyInstance = jest.spyOn(global, 'window', 'get')

  it('Should return false if a valid develop environment is in window hostname', () => {
    constants.environments = environments.valid
    spy.mockImplementation(() => ({
      location: {
        hostname: 'develop.getbud.co',
      },
    }))

    const result = isHostnameProduction()

    expect(result).toBe(false)
  })

  it('Should return false if a valid local environment is in window hostname', () => {
    constants.environments = environments.valid
    spy.mockImplementation(() => ({
      location: {
        hostname: 'local.getbud.co',
      },
    }))

    const result = isHostnameProduction()

    expect(result).toBe(false)
  })

  it('Should return true if no valid develop environment were found in window hostname', () => {
    constants.environments = environments.valid
    spy.mockImplementation(() => ({
      location: {
        hostname: 'getbud.co',
      },
    }))

    const result = isHostnameProduction()

    expect(result).toBe(true)
  })
})
