/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['"RobotoVF"', "sans-serif"],
            },
            colors: {
                bg: "hsl(var(--bg) / <alpha-value>)",
                fg: "hsl(var(--fg) / <alpha-value>)",
                muted: "hsl(var(--muted) / <alpha-value>)",
                border: "hsl(var(--border) / <alpha-value>)",

                brand: {
                    DEFAULT: "hsl(var(--brand) / <alpha-value>)",
                    strong: "hsl(var(--brand-strong) / <alpha-value>)",
                },

                success: "hsl(var(--success) / <alpha-value>)",
                warning: "hsl(var(--warning) / <alpha-value>)",
                danger: "hsl(var(--danger) / <alpha-value>)",
                info: "hsl(var(--info) / <alpha-value>)",

                card: "hsl(var(--card) / <alpha-value>)",
                "card-fg": "hsl(var(--card-fg) / <alpha-value>)",
                ring: "hsl(var(--card-focus) / <alpha-value>)",
            },
            borderRadius: {
                DEFAULT: "var(--radius)",
                xl: "calc(var(--radius) + 6px)",
            },
            spacing: {
                sm: "var(--space-sm)",
                md: "var(--space-md)",
                lg: "var(--space-lg)",
                xl: "var(--space-xl)",
                "2xl": "calc(var(--space-xl) + 8px)",
            },
            fontSize: {
                xs: "var(--font-xs)",
                sm: "var(--font-sm)",
                md: "var(--font-md)",
                lg: "var(--font-lg)",
                xl: "var(--font-xl)",
                "2xl": "var(--font-2xl)",
            },
            fontWeight: {
                regular: "var(--font-regular)",
                medium: "var(--font-medium)",
                bold: "var(--font-bold)",
            },
        },
    },
    plugins: [],
}
