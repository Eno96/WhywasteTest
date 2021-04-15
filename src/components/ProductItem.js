import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectableProductShelf, selectableProductGruop } from '../actions';


const ProductItem = ({ selectableProductShelf, selectableProductGruop, shelfs, product_groups, style, id, ean_plu, name, producer, wt_vol_pce, shelf_id, product_group_id }) => {
    const [shelfId, setShelfId] = useState(shelf_id)
    const [productGroupId, setproductGroupId] = useState(product_group_id)

    function handleChangeShelf(e) {
        setShelfId(e.target.value);
        selectableProductShelf(id , e.target.value)
    }    
    function handleChangePGroup(e) {
        setproductGroupId(e.target.value);
        selectableProductGruop(id , e.target.value)
    }

    return (
    <div className="Row" style={style}>
        <div><p>{ean_plu}</p></div> 
        <div><p>{name}</p></div>
        <div><p>{producer}</p></div>
        <div><p>{wt_vol_pce}</p></div>
        <div>
            <select value={shelfId} className="selector" onChange={handleChangeShelf}>
                { shelfs && shelfs.map((item , key) => <option key={key} value={item.id}>{item.name}</option>)}
            </select>
        </div>
        <div>
            <select value={productGroupId} className="selector" onChange={handleChangePGroup}>
                { product_groups && product_groups.map((item , key) => <option key={key} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    </div>
    )
}

ProductItem.propTypes = {
    ean_plu: PropTypes.string,
    name: PropTypes.string,
    producer: PropTypes.string,
    wt_vol_pce: PropTypes.string,
    shelf_name: PropTypes.string,
    product_group_name: PropTypes.string
}

const mapStateToProps = state => ({
    product_groups: state.product_groups,
    shelfs: state.shelfs
  }) 
  
  
export default connect(
    mapStateToProps,
    { selectableProductShelf, selectableProductGruop }
)(ProductItem)

