import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/products'
import { createLogger } from 'redux-logger'
import { getAllProducts, getAllProductGroups, getAllShelfs } from './actions'
import App from './containers/App'
import reportWebVitals from './reportWebVitals';



const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
 
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)


store.dispatch(getAllProducts())
store.dispatch(getAllProductGroups())
store.dispatch(getAllShelfs())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 