import React from 'react'
import PropTypes from 'prop-types'

const ItemPrice = ({ isSale, price, sale }) => (
  <div className="">
    {isSale ? (<><s>{price * 1000}원</s> {sale * 1000}원</>) : (<>{price * 1000}원</> )}
  </div>
)

ItemPrice.propTypes = {
  isSale: PropTypes.bool,
  price: PropTypes.number,
  sale: PropTypes.number,
}

export default ItemPrice
