import React from 'react';
import { createStore, createEvent } from 'effector';
import { createComponent } from 'effector-react';
import { GeneralLabel } from '../general-styled-components';

const productBarcodeInput = createStore('');
const changeProductBarcodeInput = createEvent('product barcode product form');
const resetProduct = createEvent('reset field product form');

productBarcodeInput
  .on(changeProductBarcodeInput, (state, payload) => payload)
  .reset(resetProduct);

const ProductBarcodeInput = createComponent(
  productBarcodeInput, (props, text) => {
    return (
      <GeneralLabel>
        <input 
          type="text"
          value={text}
          placeholder="12345"
          onChange={event => changeProductBarcodeInput(event.target.value)}
        />
        <span>
          Product Barcode
        </span>
      </GeneralLabel>
    )
  }
);

export {
  ProductBarcodeInput,
  productBarcodeInput,
  resetProduct
};
