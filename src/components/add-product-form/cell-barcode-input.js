import React from 'react';
import { createStore, createEvent } from 'effector';
import { createComponent } from 'effector-react';
import { GeneralLabel } from '../general-styled-components';

const cellBarcodeInput = createStore('');
const changeCellBarcodeInput = createEvent('cell barcode product form');
const resetCell = createEvent('reset field product form');

cellBarcodeInput
  .on(changeCellBarcodeInput, (state, payload) => payload)
  .reset(resetCell);

const CellBarcodeInput = createComponent(
  cellBarcodeInput, (props, text) => {
    return (
      <GeneralLabel>
        <input 
          type="text"
          value={text}
          placeholder="12345"
          onChange={event => changeCellBarcodeInput(event.target.value)} 
        />
        <span>
          Cell Barcode
        </span>
      </GeneralLabel>
    )
  }
);

export {
  CellBarcodeInput,
  cellBarcodeInput,
  resetCell
};
