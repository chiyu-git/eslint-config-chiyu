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
        'react/jsx-curly-spacing': [ERROR, { 'when': 'never', 'children': true }],
        'jsx-quotes': [ERROR, 'prefer-single'],
        'react/jsx-no-bind': [2, {
            'allowFunctions': true,
        }],
        // 强制使用 react 的 propTypes 相关 API 去指定默认值，已经落后于时代了，使用 js 默认参数即可
        'react/require-default-props': OFF,
    },
};
