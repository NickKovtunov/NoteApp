export default {
    state: {
        notes: [
            {
              title: 'First Note',
              descr: 'Description for first note',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'low'
            },
            {
              title: 'Second Note',
              descr: 'Description for second note',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'medium'
            },
            {
              title: 'Third Note',
              descr: 'Description for third note',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'high'
            }
          ],
        priorities:[
            {
                title: 'low'
            },
            {
                title: 'medium'
            },
            {
                title: 'high'
            }
        ],
    },
    actions: {
        addNote({commit}, note) {
            commit('ADD_NOTE', note)
        },
        removeNote({commit}, index) {
            commit('REMOVE_NOTE', index)
        },
        editNote({commit}, note) {
            commit('EDIT_NOTE', note)
        },
    },
    mutations: {
        ADD_NOTE(state, note) {
            state.notes.push(note)
        },
        REMOVE_NOTE(state, index) {
            state.notes.splice(index, 1)
        },
        EDIT_NOTE(state, note) {
            state.notes[note.index].title = note.title
            state.notes[note.index].descr = note.descr
            state.notes[note.index].priority = note.priority
            state.notes[note.index].date = note.date
        },
    },
    getters: {
      getPrioritiesList (state) {
        return state.priorities
      },
      getNotesList (state) {
        return state.notes
      },
      getNote: (state) => (index) => {
        return state.notes[index]
      },
    },
  }