const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    mode: 'jit',
    purge: {
        mode: 'all',
        content: [
            'app/resources/**/*.{js,scss}',
            'app/src/**/*.php',
            'app/views/**/*.twig',
        ],
        options: {
            safelist: ['html', 'body', 'main', 'fab', 'fas', /^hljs/],
        }
    },
    theme: {
        extend: {
            colors: {
                primary: colors.cyan,
                secondary: colors.orange,
                primaryDark: colors.cyan,
                secondaryDark: colors.orange,
                gray: colors.blueGray,
            },
        }
    },
    variants: {
        backgroundOpacity: ['dark'],
        visibility: ['responsive', 'hover', 'group-hover']
    }
};
