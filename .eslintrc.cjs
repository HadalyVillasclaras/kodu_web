module.exports = {
  root: true,
	env: {
		browser: true,
		es2021: true,
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	extends: ['standard-with-typescript', 'plugin:react/recommended', 'eslint-config-prettier'],
	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'semi': ['error', 'always'],
		'indent':  ['warn', 2, { "SwitchCase": 1 }],
		'no-tabs': 'off',
		'@typescript-eslint/indent': ['warn', 2, { "SwitchCase": 1 }],
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'react/display-name': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
