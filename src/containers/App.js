import Filter from './Filter';
import ProductsHeader from './ProductsHeader';
import ProductsContainer from './ProductsContainer';
import "../styles/style.css";




export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <Filter />
      <ProductsHeader />
      <ProductsContainer />
    </div>
  );
}
