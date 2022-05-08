module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/jest/svgTransform.js",
    "^.+\\.css$": "<rootDir>/jest/cssTransform.js",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleNameMapper: {
    "^~/(.+)": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};
