import React, { useState } from 'react';
import filter from '../assets/filter.svg';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFilteredProducts } from '../actions'





const Filter  = ({ getFilteredProducts }) => {
  const [ search , setSearch] = useState('');

  const onChangeTitle = event => {
    setSearch(event.target.value);
    getFilteredProducts(event.target.value);
  };

  return (
    <div>
        <div className="Search">
            <img src={filter} className="searchIcon" alt = "Filter" />
            <input type="text" name="searchInput" onChange={onChangeTitle}  value={search} placeholder="Filter by name" />
        </div>
    </div>
  );
}


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

