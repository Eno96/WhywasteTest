import product from '../api/products'
import product_group from '../api/products'
import shelf from '../api/products'



/********************************************  
            GETTERS
********************************************/
const receiveProducts = (products, product_groups, shelfs) => ({
  type: "RECEIVE_PRODUCTS",
  products,
  product_groups,
  shelfs,
})

export const getAllProducts = () => dispatch => {
  product.getProducts(products => {
    product_group.getProductGroups(product_groups => {
      shelf.getProductShelfs(shelfs => {
        dispatch(receiveProducts(products, product_groups, shelfs))
      })
    })
  })
}



const receiveProductGroups = product_groups => ({
  type: "RECEIVE_PRODUCT_GROUPS",
  product_groups
})

export const getAllProductGroups = () => dispatch => {
  product_group.getProductGroups(product_groups => {
    dispatch(receiveProductGroups(product_groups))
  })
}






const receiveShelfs = shelfs => ({
  type: "RECEIVE_SHELFS",
  shelfs
})

export const getAllShelfs = () => dispatch => {
  shelf.getProductShelfs(shelfs => {
    dispatch(receiveShelfs(shelfs))
  })
}



/********************************************  
            FILTERS
********************************************/
const receiveFilteredProducts = (fproducts, filterValue) => ({
  type: "FILTER_PRODUCTS",
  fproducts,
  filterValue
})

export const getFilteredProducts = filterValue => (dispatch, getState) => {
  product.getProducts(products => {
    dispatch(receiveFilteredProducts(products,filterValue))
  })
}


/********************************************  
            SELECTORS
********************************************/
const selectablePShelf = (productId , shelfId) => ({
  type: 'SELECTABLE_SHELF',
  productId,
  shelfId
})

export const selectableProductShelf = (productId , shelfId) => (dispatch, getState) => {
    dispatch(selectablePShelf(productId , shelfId))
}




const selectablePGruop = (product_id , productGroupId) => ({
  type: 'SELECTABLE_PRODUCT_GROUP',
  product_id,
  productGroupId
})

export const selectableProductGruop = (product_id , productGroupId) => (dispatch, getState) => {
  dispatch(selectablePGruop(product_id , productGroupId))
}