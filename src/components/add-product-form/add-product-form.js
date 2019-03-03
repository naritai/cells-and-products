import React from 'react';
import { vaildateFormInputs } from './utils';
import { GeneralForm, GeneralButton } from '../general-styled-components';
import { addNewProductAction } from '../cell-list';
import styled from 'styled-components';

import {
  CellBarcodeInput,
  cellBarcodeInput as cellBarcodeStore,
  resetCell
} from './cell-barcode-input';

import {
  ProductBarcodeInput,
  productBarcodeInput as productBarcodeStore,
  resetProduct
} from './product-barcode-input';

import {
  AmountInput,
  amountInput as amountStore,
  resetAmount
} from './amount-input';

const AddProductForm = () => {
  const addProduct = (event) => {
    event.preventDefault();
    const cellBarcode = cellBarcodeStore.getState();
    const productBarcode = productBarcodeStore.getState();
    const amount = amountStore.getState();
    const message = vaildateFormInputs(cellBarcode, productBarcode, amount, resetAmount);
    if (message) {
      alert(message);
      return;
    } else {
      addNewProductAction(cellBarcode, productBarcode, amount);
      resetProduct();
      resetAmount();
      resetCell();
    }
  };

  const takeProduct = (event) => {
    event.preventDefault();
    const cellBarcode = cellBarcodeStore.getState();
    const productBarcode = productBarcodeStore.getState();
    const amount = amountStore.getState();
    const message = vaildateFormInputs(cellBarcode, productBarcode, amount, resetAmount);
    if (message) {
      alert(message);
      return;
    } else {
      addNewProductAction(cellBarcode, productBarcode, -amount);
      resetProduct();
      resetAmount();
      resetCell();
    }
  };

  return (
    <GeneralForm>
      <CellBarcodeInput />
      <ProductBarcodeInput />
      <AmountInput />

      <ButtonWrapper>
        <GeneralButton
          className="btn btn-outline-secondary"
          onClick={addProduct}>
          Add Product
        </GeneralButton>
        <GeneralButton
          className="btn btn-outline-secondary"
          onClick={takeProduct}>
          Take Product
        </GeneralButton>
      </ButtonWrapper>
    </GeneralForm>
  )
};

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export default AddProductForm;
