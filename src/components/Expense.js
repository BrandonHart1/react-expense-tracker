import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import './Expense.css';

const Expense = (props) => {
  const { dispatch } = useContext(AppContext);

  const deleteHandler = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <div className='expense__item'>
      <ul>
        <div className='cost__delete'>
          <li>
            {props.name}
            <span>${props.cost}</span>
            <TiDelete onClick={deleteHandler}></TiDelete>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Expense;
