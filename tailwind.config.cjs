/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['"RobotoVF"', "sans-serif"],
            },
        },
    },
    plugins: [],
}
