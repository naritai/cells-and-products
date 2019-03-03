import React from 'react';
import FormsPanel from '../forms-panel';
import { CellList } from '../cell-list';
import Header from '../header';
import styled, { createGlobalStyle } from 'styled-components';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <FlexWrapper>
        <FormsPanel />
        <CellList />
      </FlexWrapper>
    </AppWrapper>
  )
};

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: #34495E;
    color: #fff;
    font-family: 'Lato', Arial, sans-serif;
  }
`;

const AppWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;
