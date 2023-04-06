module.exports = {
    env: {
        browser: true, es2021: true,
    },
    extends: ['airbnb', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 'latest', sourceType: 'module',
    },
    rules: {
        'import/no-unresolved': [0],
        'import/extensions': [0],
        camelcase: [0],
        'no-tabs': [0],
        indent: ['error', 2],
        'comma-dangle': ['error', 'always-multiline'],
        semi: ['error', 'never'],
        'import/prefer-default-export': [0],
        'no-underscore-dangle': [0],
        'import/no-extraneous-dependencies': [0],
        "object-curly-newline": ["error", {
            "ObjectExpression": { "multiline": true, "minProperties": 2, "consistent": true },
            "ObjectPattern": { "multiline": true, "minProperties": 2, "consistent": true },
            "ImportDeclaration": { "multiline": true, "minProperties": 2, "consistent": true },
            "ExportDeclaration": { "multiline": true, "minProperties": 2, "consistent": true }
        }],
        "multiline-ternary": ["error", "always-multiline"]
    },
}