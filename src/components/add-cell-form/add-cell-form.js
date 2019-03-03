import React from 'react';
import { createStore, createEvent } from 'effector';
import { createComponent } from 'effector-react';
import { addNewCellAction } from '../cell-list';
import styled from 'styled-components';

import { 
  GeneralLabel, 
  GeneralButton, 
  GeneralForm 
} from '../general-styled-components';

const addCellInput = createStore('');
const changeAddCellInput = createEvent('change add cell input');
const resetField = createEvent('reset field');

addCellInput
  .on(changeAddCellInput, (state, payload) => payload)
  .reset(resetField);

const AddCellForm = createComponent(
  addCellInput, (props, text) => {
    const addNewCell = (event) => {
      event.preventDefault();
      const barcode = addCellInput.getState().trim();
      addNewCellAction(barcode);
      resetField();
    };

    return (
      <CustomForm>
        <GeneralLabel>
          <input 
            type="text"
            value={text}
            placeholder="12345"
            onChange={event => changeAddCellInput(event.target.value)} 
          />
          <span>
            Cell Barcode
          </span>
        </GeneralLabel>

        <GeneralButton 
          className="btn btn-outline-secondary"
          onClick={addNewCell}>
          Add Cell
        </GeneralButton>
    </CustomForm>
    )
  }
);

const CustomForm = styled(GeneralForm)`
  justify-content: space-between;
  height: 120px;
  margin-bottom: 0;
  padding-bottom: 0;
  border-top: 10px solid #EB9532;
`;

export default AddCellForm;
