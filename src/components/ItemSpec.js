import React from 'react'
import PropTypes from 'prop-types'

import ItemPrice from '../components/ItemPrice'

const ItemSpec = ({ itemCode, isSale, price, sale }) => (
  <div
    className="section"
    style={{ border: '1px solid #ddd', padding: '1em 1em', margin: '2em 2em' }}
  >
    <div className="field">
      <label class="label">Item Code</label>
      {itemCode}
    </div>

    <div className="field">
      <label class="label">Price</label>
      <ItemPrice isSale={isSale} price={price} sale={sale} />
    </div>
  </div>
)

ItemSpec.propTypes = {
  itemCode: PropTypes.string,
  isSale: PropTypes.bool,
  price: PropTypes.number,
  sale: PropTypes.number,
}

export default ItemSpec
