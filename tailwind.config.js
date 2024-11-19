/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {

        'midnight-gray': '#222222',
        'midnight-black': '#161513',
      },
      container: {
        center: true
      },
      width: {
        '128': '32rem',
      },
      padding: {
        xl: '180px 0 0 0',
        '0.2': '0.0325rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'logo-anim': 'logo-anim 4s ease-in-out infinite',
      },
      keyframes: {
        'logo-anim': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
}