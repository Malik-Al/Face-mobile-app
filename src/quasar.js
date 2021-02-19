import Vue from 'vue'

import './styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Loading } from 'quasar'

Vue.use(Quasar, {
  config: {
    loading: { /* look at QUASARCONFOPTIONS from the API card (bottom of page) */ }
  },
  plugins: {
    Loading
  },
 })
