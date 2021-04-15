import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { getFilteredProducts } from '../actions'
import filter from '../assets/filter.svg';


const Filter  = ({ getFilteredProducts }) => {
  const [ search , setSearch] = useState('');

  const onChangeTitle = event => {
    setSearch(event.target.value);
    getFilteredProducts(event.target.value);
  };

  return (
    <div>
        <SearchField>
            <Image src={filter} alt = "Filter" />
            <Input type="text" name="searchInput" onChange={onChangeTitle}  value={search} placeholder="Filter by name" />
        </SearchField>
    </div>
  );
}


const SearchField = styled.div`
  background: #60A5EA;
  height: 44px;
  position: relative;
`;


const Image = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
`;

const Input = styled.input`
  position: relative;
  padding-left: 30px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #AAAAAA;
  width: calc(100% - 30px);
  height: 32px;
  margin: 5px;
  background: #FFFFFF;
  border-radius: 4px;
  border: none;
  outline: none;
`;



Filter.propTypes = {
  getFilteredProducts: PropTypes.func
}

const mapStateToProps = state => ({
  products: state.products
}) 

export default connect(
  mapStateToProps,
  { getFilteredProducts }
)(Filter)



