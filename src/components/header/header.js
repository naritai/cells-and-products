import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  margin-bottom: 20px;
  border-bottom: 1px solid white;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Cells and Products</h1>
    </HeaderWrapper>
  )
};

export default Header;
