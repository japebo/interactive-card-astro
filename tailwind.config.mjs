/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                neutral: colors.neutral,
                "dark-green": '#047687',
                "light-green": '#09ABB2',
                "light-grey": '#BFBFBF',
                "text-content": '#245367',
            },
            fontFamily: {
                sans: ['Asap', ...defaultTheme.fontFamily.sans]
            }
        }
    },
};
