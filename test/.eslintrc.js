module.exports = {
	rules: {
		// allow `console.warn` / `console.error`
		// this is because we often mock `console.warn` and `console.error` and adding this rule
		// avoids needing to constantly be opting out of the rule
		'no-console': ['error', { allow: ['warn', 'error'] }],

		// allow useMemo and useCallback in tests
		'no-restricted-imports': 'off',
	},
};
