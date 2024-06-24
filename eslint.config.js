module.exports = {
  parser: "@babel/eslint-parser", // JSX 파일에 적합한 파서
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // JSX를 인식하도록 설정
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // TypeScript 관련 설정
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    // 추가적인 규칙들
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
