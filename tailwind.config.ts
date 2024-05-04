import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [
    'formkit.theme.ts'
  ],
  theme: {
    extend: {
      colors: {
        customOrange: {
            '50': '#fffcea',
            '100': '#fff5c5',
            '200': '#ffeb85',
            '300': '#ffda46',
            '400': '#ffc71b',
            '500': '#ffa500',
            '600': '#e27c00',
            '700': '#bb5502',
            '800': '#984208',
            '900': '#7c360b',
            '950': '#481a00',
        },
        customBlue: {
            '50': '#edf8ff',
            '100': '#d6edff',
            '200': '#b5e1ff',
            '300': '#83cfff',
            '400': '#48b4ff',
            '500': '#1e8fff',
            '600': '#066fff',
            '700': '#005aff',
            '800': '#0845c5',
            '900': '#0d3f9b',
            '950': '#0e275d',
        },
        background: {
            '50': '#f5f5fa',
            '100': '#e9e9f5',
            '200': '#cfd1e8',
            '300': '#a4a8d5',
            '400': '#737abd',
            '500': '#5259a5',
            '600': '#3f448a',
            '700': '#343770',
            '800': '#2e305e',
            '900': '#2a2b50',
            '950': '#090911',
        },
      }
    }
  }
}