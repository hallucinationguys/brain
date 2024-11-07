/** @type {import('prettier').Config} */
export default {
    semi: false,
    tabWidth: 4,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    jsxBracketSameLine: true,
    plugins:  ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
