export const state = () => {
  return { equipment: [], search: "" }
}
export const mutations = {
  fetchItems(state, data) {
    state.equipment = data
  },
  setsearchitem(state, search){
    state.search = search
    console.log(search);
  }
}
export const actions = {
  // get
  async fetchItems(context,search) {
    let url = ""
    if(search != ""){
      url = `http://localhost:3030/items/search/`+search 

    }
    else{url = 'http://localhost:3030/items'}
    const res = await this.$axios(url)
    context.commit('fetchItems', res.data)
    console.log(res.data);
  },

  // port
  async addItems(context, data) {
    await this.$axios.post('http://localhost:3030/items', {
      img: data.img,
      name: data.name,
      brand: data.brand,
      model: data.model,
      code_ip: data.code_ip,
      statusitem: data.statusitem,
    })
  },
}

export const getters = { getData: (state) => state.items, getsearch: (state) => state.search }
