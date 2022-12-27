import React from 'react';
import { TiDelete } from 'react-icons/ti';

const Expense = (props) => {
  return (
    <li>
      {props.name}
      <div>
        <span>${props.cost}</span>
        <TiDelete size='1.5rem'></TiDelete>
      </div>
    </li>
  );
};

export default Expense;
