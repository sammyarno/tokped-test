module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  parserOptions:  {
    ecmaVersion:  2020,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
    project: './tsconfig.json',
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    'max-depth': ['warn', {
      'max': 4
    }],
    'linebreak-style': 'off',
    'react/no-array-index-key': [ 'off' ],
    'max-len': [ 'off' ],
    "react/forbid-prop-types": [1, { "forbid": [ 'any'] }],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
    'react/no-danger': [ 'off' ],
    'import/extensions': ['error', 'always', {
      js: 'never',
      ts: 'never',
      tsx: 'never'
    }],
    'jsx-a11y/label-has-for': [ 0, {
      'components': [ 'Label' ],
      'allowChildren': true
    }],
    'no-console': ['error',  { allow: ['warn'] }],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', {
      'args': 'none',
      'caughtErrors': 'all'
    }],
    'no-shadow': ['off', { allow: ['props'] }],
    'no-param-reassign': ['warn', { props: false }],
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'radix': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 6
    }],
    'no-plusplus': [2, {
      'allowForLoopAfterthoughts': true
    }],
    'no-underscore-dangle': ['error', { 
      'allow': ['_id'] 
    }],
    'react/jsx-curly-brace-presence': 'off',
    // camelcase and class method (this.xxx) disabled for UNSAFE lifecycles on react
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'react/state-in-constructor': [0, 'never'],
    'react/static-property-placement': [0, 'never'],
    'import/prefer-default-export': 'off',
    'no-console': ["error", { allow: ["log", "warn", "error"] }],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'import/no-cycle': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-one-expression-per-line': 'off',
    "@typescript-eslint/ban-types": 'off'
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  overrides: [
    {
      'files': ['sdet/**/*.js'],
      'rules': {
        'max-depth': ['warn', {
            'max': 3
        }],
        'indent': ['warn', 4],
        'max-len': 'off',
        'strict': 'off',
        'comma-dangle': ['error', 'never'],
        'global-require': 0,
        'import/no-dynamic-require': 0,
        'no-unused-vars': ['error', {
            'args': 'none',
            'caughtErrors': 'all'
        }],
        'no-undef': 'off',
        'no-param-reassign': ['error', {
            'props': false
        }],
        'require-yield': 0,
        'radix': 'off',
        'func-names': 'off',
        'prefer-destructuring': 'off',
        'newline-per-chained-call': ['error', {
            'ignoreChainWithDepth': 6
        }],
        'no-plusplus': [2, {
            'allowForLoopAfterthoughts': true
        }],
        'no-underscore-dangle': ['error', { 
            'allow': ['_id'] 
        }]
      }
    }
  ]
};