import styled from 'styled-components';


export default function ProductsHeader() {
  return (
    <div>
        <ProductHeader>
            <HeaderItem><Title>Ean / Plu</Title></HeaderItem> 
            <HeaderItem><Title>Name</Title></HeaderItem>
            <HeaderItem><Title>Producer</Title></HeaderItem>
            <HeaderItem><Title>Size</Title></HeaderItem>
            <HeaderItem><Title>Shelf</Title></HeaderItem>
            <HeaderItem><Title>Product Group</Title></HeaderItem>
        </ProductHeader>
    </div>
  );
}


const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-gap: 10px;
  border-bottom: 1px solid #DDDDDD;
  margin-right: 15px;
`;


const HeaderItem = styled.div`
  padding-left: 10%;
`;

const Title = styled.h4`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 11px;
  text-transform: uppercase;
  color: #AAAAAA;
`;

