import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import note from './note'

export default new Vuex.Store({
  modules: {
    note
  }
})