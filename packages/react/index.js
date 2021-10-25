const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        '@chiyu-git/eslint-config-basic'
    ],
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    settings: {
        'import/resolver': {
            node: { extensions: ['.tsx', '.ts', '.js', '.json'] },
        },
    },
    rules: {
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
            },
        ],
        'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
        'react/jsx-one-expression-per-line': OFF,
        'react/destructuring-assignment': OFF,
        'react/state-in-constructor': OFF,
        'react/jsx-props-no-spreading': OFF,
        'react/prop-types': OFF,

        'jsx-a11y/click-events-have-key-events': OFF,
        'jsx-a11y/no-noninteractive-element-interactions': OFF,
        'jsx-a11y/no-static-element-interactions': OFF,

        /**
         * 代码格式相关的规则，代替prettier
         */
        'react/jsx-indent': [ERROR, 4],
        'react/jsx-indent-props': [ERROR, 4],
        'react/jsx-equals-spacing': [ERROR, "always"],
        'react/jsx-curly-spacing': [ERROR, { 'when': 'always', 'children': true }],
        'jsx-quotes': [ERROR, 'prefer-single'],
    },
};
