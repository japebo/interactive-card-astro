/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                neutral: colors.neutral,
                brandMain: '#1ea8ab',
            },
            fontFamily: {
                sans: ['Asap', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#F67280',
                    'primary-content': '#1f1f1f',
                    secondary: '#C06C84',
                    info: '#F67280',
                    'info-content': '#1f1f1f'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
