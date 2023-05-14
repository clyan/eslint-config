module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@clyan/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [2, 2],
    'react/boolean-prop-naming': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [2, { nonEmpty: false, selfClosing: 'line-aligned' }],
    'react/jsx-curly-brace-presence': 2,
    'react/jsx-curly-newline': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-fragments': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 3 }],
    'react/jsx-sort-props': [2, { shorthandFirst: true, callbacksLast: true, multiline: 'last' }],
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always', beforeClosing: 'proportional-always' }],
    'react/no-array-index-key': 1,
    'react/jsx-no-leaked-render': [2, { validStrategies: ['coerce', 'ternary'] }],
    'react/jsx-wrap-multilines': [2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-one-expression-per-line': [2, { allow: 'literal' }],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-pascal-case': 2,
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'react/self-closing-comp': 2,
  },
}
