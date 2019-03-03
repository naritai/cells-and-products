import React from 'react';
import styled from 'styled-components';

const ProductItem = ({ barcode, amount }) => {
  return (
    <ProductItemWrapper>
      <span>###: {barcode}</span>
      <span>amount: {amount}</span>
    </ProductItemWrapper>
  )
};

const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 1px solid #EB9532;

  margin-bottom: 5px;

  > span {
    margin-right: 10px;
    font-weight: 100;
  }
`;

export default ProductItem;
