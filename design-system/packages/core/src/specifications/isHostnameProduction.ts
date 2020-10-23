import { constants } from '@bud/tokens'
import { Environment } from './enums'

const isHostnameProduction = (): boolean => !Object.values(constants.environments).filter(isNotProduction).some(isEnvironmentInHostname)

const isNotProduction = (environment: Environment): boolean => environment !== constants.environments.production

const isEnvironmentInHostname = (environment: Environment): boolean => window.location.hostname.split('.').includes(environment)

export default isHostnameProduction
