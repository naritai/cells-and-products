import React from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item';

const ProductList = ({ products }) => {
  return (
    <ProductListWrapper>
        {
          products.map(
            ({ barcode, amount }) => {
              return (
                <li key={barcode}>  
                  <ProductItem 
                    barcode={barcode} 
                    amount={amount} />
                </li>
              )
            }
          )
        }
    </ProductListWrapper>
  )
};

const ProductListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  height: 180px;
  padding: 5px;

  list-style: none;
  overflow: scroll;
`;

export default ProductList;
