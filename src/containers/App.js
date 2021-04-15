import "../styles/style.css";
import styled from 'styled-components';
import ProductsHeader from './ProductsHeader';
import ProductsContainer from './ProductsContainer';
import Filter from '../components/Filter';



export default function App() {
  return (
    <Main>
      <Header>
        <Title>Products</Title>
      </Header>
      <Filter />
      <ProductsHeader />
      <ProductsContainer />
    </Main>
  );
}


const Main = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  background: linear-gradient(180deg, #387DC2 0%, #2B65B5 100%);
  height: 54px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  padding-top: 16px;
`;