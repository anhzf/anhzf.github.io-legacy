const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss')('./tailwind.config.js'),
                require('autoprefixer'),
            ],
        }
    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        plugins: [],
    },
}