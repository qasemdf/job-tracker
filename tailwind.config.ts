import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme("colors");

  const flattenColors = (
    obj: Record<string, string | Record<string, string>>,
    prefix = ""
  ): Record<string, string> =>
    Object.entries(obj).reduce((acc, [key, val]) => {
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof val === "string") {
        acc[newKey] = val;
      } else {
        Object.assign(acc, flattenColors(val, newKey));
      }
      return acc;
    }, {} as Record<string, string>);

  const allColors = flattenColors(colors);

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
