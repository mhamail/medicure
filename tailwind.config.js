/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
     './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       colors: {
       primary:"#0A66C2",
       primaryBold:"#004492",
       hovering:"#DFE3E4",
      },
      fontFamily: {
          popin:['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
