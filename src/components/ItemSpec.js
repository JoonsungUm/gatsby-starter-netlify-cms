import React from 'react'
import PropTypes from 'prop-types'

import ItemColors from '../components/ItemColors'
import ItemSizes from '../components/ItemSizes'
import ItemPrice from '../components/ItemPrice'

const ItemSpec = ({ itemCode, colors, sizes, isSale, price, sale }) => (
  <div
    className="section"
    style={{ border: '1px solid #333', padding: '1em 1em', margin: '2em 2em' }}
  >
    <div className="field">
      <label class="label">Item Code</label>
      {itemCode}
    </div>

    <div className="field">
      <label class="label">Colors</label>
      <div class="control">
        <ItemColors colors={colors} />
      </div>
    </div>

    <div className="field">
      <label class="label">Sizes</label>
      <div class="control">
        <ItemSizes sizes={sizes} />
      </div>
    </div>

    <div className="field">
      <label class="label">Price</label>
      <ItemPrice isSale={isSale} price={price} sale={sale} />
    </div>
  </div>
)

ItemSpec.propTypes = {
  itemCode: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  isSale: PropTypes.bool,
  price: PropTypes.number,
  sale: PropTypes.number,
}

export default ItemSpec
