import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FixedSizeList as List } from "react-window";
import styled from 'styled-components';
import AutoSizer from "react-virtualized-auto-sizer";
import ProductItem from '../components/ProductItem'

//FOR MOBILE
let item_size = 45;
if(typeof window !== undefined){  
    if(window.innerWidth < 640) item_size = 70;
}

const Row = ({data, index, style }) => {
    return (
        <ProductItem 
            style={style} 
            id={data[index].id} 
            ean_plu={data[index].ean_plu} 
            name={data[index].name} 
            producer={data[index].producer} 
            wt_vol_pce={data[index].wt_vol_pce} 
            shelf_id={data[index].shelf_id} 
            product_group_id={data[index].product_group_id} 
        />
    );
}

const ProductsContainer = ({ products }) => (
    <AutoSizer>
        { products.length > 0 ?
            ({ height, width }) => (
                <List className="List" height={height} itemCount={products.length} itemData={products} itemSize={item_size} width={width}>
                    {Row} 
                </List>
            )
            :
            ({ height, width }) => (
                <List className="List" height={height} itemCount={1} itemSize={45} width={width}>
                    {NoResults} 
                </List>
            )
        }

    </AutoSizer>
)

const NoResults = () => {
    return (
        <Info>
            <Title>No Result Found...</Title>
        </Info>
    );
}


const Info = styled.div`
    border-bottom: 1px solid #DDDDDD;
    text-align: center;
    height: 45px;
`;

const Title = styled.span`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    text-transform: uppercase;
    color: #AAAAAA;
    padding-top: 15px;
    display: block;
`;

ProductsContainer.propTypes = {
    dataSet: PropTypes.shape({
        products: PropTypes.arrayOf(
        PropTypes.string
        )
    })
};

const mapStateToProps = state => ({
  products: state.products
}) 


export default connect(
  mapStateToProps
)(ProductsContainer)
