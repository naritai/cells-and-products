import React from 'react';
import styled from 'styled-components';

const GeneralLabel = styled.label`
  > span {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #E4F1FE;
    vertical-align: bottom;
    text-transform: uppercase;
  }

  > input {
    display: inline-block;
    width: 200px;
    height: 40px;

    border: none;
    outline: none;
    border-bottom: 5px solid #BDC3C7;
    background-color: #34495E;

    font-size: 20px;
    font-weight: 600;
    color: #E4F1FE;
  }

  margin-bottom: 10px;
`;

export default GeneralLabel;
