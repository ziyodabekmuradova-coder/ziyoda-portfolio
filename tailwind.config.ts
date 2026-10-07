import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        paper: "#F7F7F5",
        electric: "#2F6BFF",
      },
      maxWidth: {
        site: "1280px",
      },
      letterSpacing: {
        editorial: "-0.055em",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 16, 16, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
