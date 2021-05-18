import { combineReducers } from 'redux'


const byProducts = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      const { products } = action
      return products    
    case "FILTER_PRODUCTS":
      const { filterValue, fproducts } = action
      //const filterProducts = fproducts.filter(item => item.name.toLowerCase().startsWith(filterValue.toLowerCase())); //figma design
      const filterProducts = fproducts.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase())); //prefer
      const sortProducts = filterProducts.sort((a, b) => b.name.toLowerCase().includes(filterValue.toLowerCase()) - a.name.toLowerCase().includes(filterValue.toLowerCase()));
      return sortProducts;
    case "SELECTABLE_SHELF":
      const { productId, shelfId } = action;
      let index = state.findIndex(item => item.id === parseInt(productId) );
      state[index].shelf_id = parseInt(shelfId);
      return state;    
    case "SELECTABLE_PRODUCT_GROUP":
      const { product_id, productGroupId } = action;
      let index_g = state.findIndex(item => item.id === parseInt(product_id) );
      state[index_g].product_group_id = parseInt(productGroupId);
      return state;
    default:
      return state
  }
}
 
const byPGroups = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_PRODUCT_GROUPS":
      return action.product_groups
    default:
      return state
  }
}

const byShelfs = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_SHELFS":
      return action.shelfs
    default:
      return state
  }
}

const rootReducer = combineReducers({
    products: byProducts,
    product_groups: byPGroups,
    shelfs: byShelfs,
})

export default rootReducer
 
export const getProduct = (state, id) =>
  state.byId[id]
