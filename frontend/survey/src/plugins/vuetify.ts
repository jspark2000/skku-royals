// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { aliases, fa } from 'vuetify/iconsets/fa'

// Vuetify
import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/labs/components'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  },
  components: {
    ...labs
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1264,
      xl: 1904
    }
  }
})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
