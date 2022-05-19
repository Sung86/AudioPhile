/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	env: {
		'vue/setup-compiler-macros': true,
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.spec.{js,ts,jsx,tsx}',
				'cypress/integration/**.spec.{js,ts,jsx,tsx}',
			],
			extends: ['plugin:cypress/recommended'],
		},
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				printWidth: 80,
				trailingComma: 'es5',
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/component-tags-order': [
			'error',
			{
				order: ['template', 'script', 'style'],
			},
		],
	},
};
