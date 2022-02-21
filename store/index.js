export const state = () => {
  return { items: [] }
}
export const mutations = {
  fetchItems(state, data) {
    state.items = data
  },
}
export const actions = {
  // get
  async fetchItems(context) {
    const res = await this.$axios('http://localhost:3030/items')
    context.commit('fetchItems', res.data)
  },

  // port
  async addItems(context, data) {
    await this.$axios.post('http://localhost:3030/items', {
      img: data.img,
      name: data.name,
      brand: data.brand,
      model: data.model,
      code_ip: data.code_ip,
    })
  },
}

export const getters = { getData: (state) => state.items }
