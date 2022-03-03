module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-paper/babel',
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
                blacklist: null,
                whitelist: null,
                safe: false,
                allowUndefined: true,
            },
        ],
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '^~(.+)': './src/\\1',
                },
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.jsx',
                    '.json',
                    '.tsx',
                    '.ts',
                    '.native.js',
                ],
            },
        ],
    ],
}
