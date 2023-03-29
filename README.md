# @clyan/eslint-config
[![npm](https://img.shields.io/npm/v/@clyan/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@clyan/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone **without** Prettier)
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas
- Reasonable defaults, best practices, only one-line of config
- **Style principle**: Minimal for reading, stable for diff

## Usage

### Install

```bash
pnpm add -D eslint @clyan/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@clyan"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "json", "jsonc", "json5"]
}
```
