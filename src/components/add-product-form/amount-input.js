import React from 'react';
import { createStore, createEvent } from 'effector';
import { createComponent } from 'effector-react';
import { GeneralLabel } from '../general-styled-components';

const amountInput = createStore('');
const changeAmountInput = createEvent('amount input product form');
const resetAmount = createEvent('reset amount field product form');

amountInput
  .on(changeAmountInput, (state, payload) => payload)
  .reset(resetAmount);

  const AmountInput = createComponent(
    amountInput, (props, text) => {
      return (
        <GeneralLabel>
          <input 
            type="text"
            value={text}
            placeholder="20"
            onChange={event => changeAmountInput(event.target.value)}
          />
          <span>
            Amount
          </span>
        </GeneralLabel>
      )
    }
  );

export {
  AmountInput,
  amountInput,
  resetAmount
};
