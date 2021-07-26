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
                primaryDark: colors.cyan,
                gray: colors.blueGray,
            },
            textColor: {
                github: '#171515',
                twitter: '#1DA1F2'
            }
        }
    },
    variants: {
        backgroundOpacity: ['dark'],
        visibility: ['responsive', 'hover', 'group-hover']
    }
};
