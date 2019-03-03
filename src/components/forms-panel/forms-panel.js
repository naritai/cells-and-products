import React from 'react';
import AddProductForm from '../add-product-form';
import AddCellForm from '../add-cell-form';
import styled from 'styled-components';

const FormsPanel = () => {
  return (
    <FormsWrapper>
      <AddProductForm />
      <AddCellForm />
    </FormsWrapper>
  )
};

const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 20px;

  border-right: 10px solid #EB9532;
  border-bottom: 10px solid #EB9532;
  border-radius: 10px;

  height: 440px;
`;

export default FormsPanel;
