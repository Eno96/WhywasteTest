import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductItem from '../components/ProductItem'


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
// RESPONZIVNOST
// NO RESULTS FIND ROW !

const ProductsContainer = ({ products }) => (
    <AutoSizer>
        {({ height, width }) => (
        <List className="List" height={height} itemCount={products.length} itemData={products} itemSize={45} width={width}>
            {Row} 
        </List>
        )}
    </AutoSizer>
)


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
