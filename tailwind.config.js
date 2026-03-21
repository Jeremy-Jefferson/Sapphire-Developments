/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base colors
        white: "#fff",
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-300": "#d1d5db",
        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "gray-600": "#4b5563",
        "gray-700": "#374151",
        "gray-800": "#1f2937",
        "gray-900": "#111827",
        
        // Brand colors - Blue/Slate theme
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Main primary blue
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        
        // Legacy color mappings for consistency
        "gray-black": "#1e3a8a",
        "gray-500": "#6b7280",
        
        // Primary brand (navy/slate blue)
        "primary-50": "#eff6ff",
        "primary-500": "#3b82f6",
        "primary-600": "#2563eb",
        "primary-700": "#1d4ed8",
        "primary-800": "#1e40af",
        "primary-900": "#1e3a8a",
        
        // Gray variants
        "gray1": "rgba(0, 0, 0, 0.5)",
        "darkgray": "#6b7280",
        "darkslategray": "#475569",
        "lightslategray": "#64748b",
        
        // Slate variants for modern look
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        
        // Legacy whitesmoke
        whitesmoke: {
          "100": "#f8fafc",
          "200": "#f1f5f9",
        },
        
        // Legacy gainsboro
        gainsboro: "rgba(226, 226, 226, 0.1)",
        
        // Legacy darkslateblue
        darkslateblue: "#3b82f6",
      },
      spacing: {},
      fontFamily: {
        "header-heading-4": "'Public Sans'",
        roboto: "Roboto",
        poppins: "Poppins",
        "body-large-400": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "3xl": "22px",
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "xs-6": "11.6px",
      "2xs-8": "10.8px",
      "sm-6": "13.6px",
      "mini-5": "14.5px",
      "26xl": "45px",
      lg: "18px",
      "13xl": "32px",
      "45xl": "64px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
