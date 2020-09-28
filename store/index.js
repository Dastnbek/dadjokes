export const state = () => ({
    jokes: []
  })
  
  export const mutations = {
    addJokes(state, jokes) {
      state.jokes = jokes;
    }
  }
  