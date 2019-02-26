import React from 'react'
import PropTypes from 'prop-types'

const ItemSizes = ({ sizes }) => (
  <div className="select">
    <select>
      {sizes.map(size => (<option key={size}>{size}</option>))}
    </select>
  </div>
)

ItemSizes.propTypes = {
  sizes: PropTypes.array,
}

export default ItemSizes
