import React from 'react';
import { createStore, createEvent } from 'effector';
import { createComponent } from 'effector-react';
import styled from 'styled-components';
import ProductList from '../product-list';

const cellListStore = createStore([]);
const addCellToList = createEvent('add cell to list');
const addProductToList = createEvent('add product to list');
const takeProductFromList = createEvent('take product from list');

cellListStore
  .on(addCellToList, (state, payload) => [...state, payload])
  .on(addProductToList, (state, payload) => payload)
  .on(takeProductFromList, (state, payload) => payload);


const CellsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
  height: 600px;

  overflow: scroll;
`;

const CellItem = styled.div`
  width: 230px;
  height: 230px;
  padding: 5px;
  margin-right: 5px;
  maring-bottom: 5px;

  border-left: 3px solid lightgray;
  border-bottom: 3px solid lightgray;

  > span {
    text-transform: uppercase;
    font-size: 16px;
    color: #FDE3A7;
  }
`;

const CellList = createComponent(
  cellListStore, (props, cellList) => {

    return (
      <CellsListWrapper>
        {
          cellList.map(
            (({ barcode, products }) => {
              return (
                <CellItem key={barcode}>
                  <span>Cell: {barcode}</span>
                  <ProductList products={products} />
                </CellItem>
              )
            })
          )
        }
      </CellsListWrapper>
    )
  }
);

const updateProductListAction = (
  products, currentProduct, amount, productBarcode) => {
  const currentProductId = products.findIndex(product => product.barcode === productBarcode);

  if(!currentProduct && amount < 0) {
    alert(`Продукта с кодом "${productBarcode}" нет в данной ячейке`);
    return products;
  };

  if (currentProduct) {
    if (+currentProduct.amount + +amount < 0) {
      alert(`Продукт с кодом ${productBarcode} есть в количестве ${currentProduct.amount}. Пожалуйста, уменьшите значение.`);
      return products;
    };

    const newProduct = {
      barcode: productBarcode,
      amount: +currentProduct.amount + +amount
    };

    return [
      ...products.slice(0, currentProductId),
      newProduct,
      ...products.slice(currentProductId + 1)
    ];
  }

  const newProduct = {
    barcode: productBarcode,
    amount: amount
  };

  return [
    ...products,
    newProduct
  ];
};

const addNewCellAction = (barcode) => {
  if (barcode === '') {
    alert('Нельзя добавить ячейку без штрих-кода. Введите, пожалуйста, значение');
    return;
  };

  const currentCellList = cellListStore.getState();
  const previousCell = currentCellList.find(
    (cell) => {
      return cell.barcode === barcode
    }
  );

  if (previousCell) {
    alert(`Ячейка с штрих-кодом "${barcode}" уже существует`);
  } else {
    const newCell = {
      barcode,
      products: []
    };
    addCellToList(newCell);
  }  
};

const addNewProductAction = (cellBarcode, productBarcode, amount) => {
  const currentCellList = cellListStore.getState();
  const currentCell = currentCellList.find(cell => cell.barcode === cellBarcode);
  const currentCellId = currentCellList.findIndex(cell => cell.barcode === cellBarcode);

  if (!currentCell) {
    alert(`Ячейки с штрих-кодом "${cellBarcode}" нет. Для начала добавьте ячейку`);
    return;
  }

  const currentProductList = currentCell.products;
  const currentProduct = currentProductList.find(product => product.barcode === productBarcode);

  const newProductList = updateProductListAction(
    currentProductList, currentProduct, amount, productBarcode);

  const newCell = {
    barcode: cellBarcode,
    products: newProductList
  };

  const newCellList = [
    ...currentCellList.slice(0, currentCellId),
    newCell,
    ...currentCellList.slice(currentCellId + 1),
  ];

  addProductToList(newCellList);
};

export {
  CellList,
  addCellToList,
  addProductToList,
  takeProductFromList,
  addNewCellAction,
  addNewProductAction
}

cellListStore.watch(console.log);
