import _products from './products.json'
import _productgroups from './product_groups.json'
import _shelfs from './shelfs.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  getProductGroups: (cb, timeout) => setTimeout(() => cb(_productgroups), timeout || TIMEOUT),
  getProductShelfs: (cb, timeout) => setTimeout(() => cb(_shelfs), timeout || TIMEOUT),
}


