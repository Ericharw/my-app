import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: "jest-environment-jsdom",
  modulePaths: ['<rootDir>/src/'],
  collectCoverage: true,
  
  collectCoverageFrom: [
    'src/views/produk/index.tsx',
    'src/components/TombolBantuan.tsx'
  ],
}

export default createJestConfig(config)