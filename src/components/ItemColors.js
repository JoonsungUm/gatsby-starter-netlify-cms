import React from 'react'
import PropTypes from 'prop-types'

const ItemColors = ({ colors }) => (
  <div className="select">
    <select>
      {colors.map(color => (<option key={color}>{color}</option>))}
    </select>
  </div>
)

ItemColors.propTypes = {
  colors: PropTypes.array,
}

export default ItemColors
