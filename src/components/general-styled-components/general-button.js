import React from 'react';
import styled from 'styled-components';

const GeneralButton = styled.button`
  display: inline-block;

  width: 200px;
  padding: 10px;
  margin-right: 10px;

  font-size: 20px;
  font-weight: 600;
  color: #34495E;

  &:hover {
    cursor: pointer;
  }
`;

export default GeneralButton;
