const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss')('./tailwind.config.js'),
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