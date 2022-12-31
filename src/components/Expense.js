import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const Expense = (props) => {
  const { dispatch } = useContext(AppContext);

  const deleteHandler = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li>
      {props.name}
      <div>
        <span>${props.cost}</span>
        <TiDelete size='1.5rem' onClick={deleteHandler}></TiDelete>
      </div>
    </li>
  );
};

export default Expense;
