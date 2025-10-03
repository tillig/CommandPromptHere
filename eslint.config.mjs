import globals from 'globals';
import eslint from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier/recommended';
import typescript from 'typescript-eslint';

export default [
  {
    ignores: ['**/node_modules/', '**/dist/', '**/out/']
  },
  eslint.configs.recommended,
  ...typescript.configs.strict,
  ...typescript.configs.stylistic,
  prettier,
  jsdoc.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.es6,
        ...globals.node
      }
    },
    plugins: {
      jsdoc
    },
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'comma-dangle': ['error', 'never'],
      'eqeqeq': 'error',
      'indent': 'off',
      'jsdoc/no-undefined-types': ['warn', { definedTypes: ['NodeJS'] }],
      'jsdoc/require-description': 'warn',
      'jsdoc/require-description-complete-sentence': 'warn',
      'jsdoc/require-jsdoc': [
        'warn',
        {
          contexts: [
            'TSInterfaceDeclaration',
            'TSMethodSignature',
            'TSPropertySignature'
          ],
          enableFixer: true,
          publicOnly: {
            ancestorsOnly: true,
            cjs: true,
            esm: true
          },
          require: {
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            MethodDefinition: true
          }
        }
      ],
      'linebreak-style': 'off',
      'max-len': 'off',
      'no-empty-function': 'off',
      'no-invalid-this': 'off',
      'no-unused-vars': 'off',
      'object-curly-spacing': ['error', 'always'],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          printWidth: 80,
          quoteProps: 'consistent',
          semi: true,
          singleQuote: true,
          trailingComma: 'none'
        }
      ],
      'semi': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never'
        }
      ]
    }
  }
];
