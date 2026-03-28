import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "140px",
      },
      screens: {
        "2xl": "1480px",
      },
    },
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          dark: "hsl(var(--brand-dark))",
          "dark-soft": "hsl(var(--brand-dark-soft))",
          "dark-panel": "hsl(var(--brand-dark-panel))",
          "deep-blue": "hsl(var(--brand-deep-blue))",
          "deep-blue-muted": "hsl(var(--brand-deep-blue-muted))",
          star: "hsl(var(--brand-star))",
          avatar: "hsl(var(--brand-avatar))",
          "avatar-text": "hsl(var(--brand-avatar-text))",
          "overlay-strong": "hsl(var(--brand-overlay-strong))",
          "overlay-soft": "hsl(var(--brand-overlay-soft))",
          glass: "hsl(var(--brand-glass))",
          "glass-strong": "hsl(var(--brand-glass-strong))",
          "glass-border": "hsl(var(--brand-glass-border))",
          "glass-border-soft": "hsl(var(--brand-glass-border-soft))",
        },
        navy: "hsl(var(--navy))",
        blue: "hsl(var(--blue))",
        "blue-light": "hsl(var(--blue-light))",
        "gray-light": "hsl(var(--gray-light))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
        "glass-soft": "var(--shadow-glass-soft)",
        "glass-dark": "var(--shadow-glass-dark)",
        glow: "var(--shadow-glow)",
      },
      backdropBlur: {
        glass: "var(--blur-glass)",
        "glass-strong": "var(--blur-glass-strong)",
      },
      blur: {
        glow: "var(--blur-glow)",
        "glow-lg": "var(--blur-glow-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
