import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { selectableProductShelf, selectableProductGruop } from '../actions';
import dropdown from '../assets/drop-down.svg';


let checkmobile = false;
if(typeof window !== undefined){  
    if(window.innerWidth < 640) checkmobile = true;
}

const ProductItem = ({ selectableProductShelf, selectableProductGruop, product_groups, shelfs, style, id, ean_plu, name, producer, wt_vol_pce, shelf_id, product_group_id }) => {
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
    <Row style={style}>
        <Item><Title>{ean_plu}</Title></Item> 
        <Item><Title>{name}</Title></Item>
        <Item><Title>{producer}</Title></Item>
        <Item><Title>{wt_vol_pce}</Title></Item>
        <Item>
            <Select value={shelfId} className="selector" onChange={handleChangeShelf}>
                { shelfs.length > 0 && shelfs.map((item , key) => <Option key={key} value={item.id}>{item.name}</Option>)}
            </Select>
        </Item>
        <Item>
            <Select value={productGroupId} className="selector" onChange={handleChangePGroup}>
                { product_groups.length > 0 && product_groups.map((item , key) => <Option key={key} value={item.id}>{item.name}</Option>)}
            </Select>
        </Item>
    </Row>
    )
}

const Row = styled.div`
    display: grid;
    grid-template-columns: ${checkmobile ? 'repeat(3,1fr)' : 'repeat(6,1fr)'};
    grid-gap: ${checkmobile ? '0px' : '10px'};
    border-bottom: 1px solid #DDDDDD;
    justify-content: center;
    align-items: center;
    padding-top: ${checkmobile ? '10px' : '0px'};
`;

const Item = styled.div`
    padding-left: 10%;
`;

const Title = styled.p`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin: 0px;
`;

const Select = styled.select`
    outline: none;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    width: 90%;
    position: relative;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    margin: 12px 0px;
    background: url(${dropdown}) no-repeat center right;
`;

const Option = styled.option`
    background: #F1F2F2;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
`;



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

