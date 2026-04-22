import { TestEnvironment } from 'jest-environment-jsdom'
import nextJest from 'next/jext.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
    coverageProvider: 'v8',
    TestEnvironment: 'jsdom',
}

export default createJestConfig(config)
