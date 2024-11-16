module.exports = {
    content: [
        './layouts/**/*.html',
        './content/**/*.md',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#007bff',
                    dark: '#0056b3',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 