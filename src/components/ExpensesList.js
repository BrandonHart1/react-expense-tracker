import React, { useContext } from 'react';
import Expense from './Expense';
import { AppContext } from '../context/AppContext';
import './ExpensesList.css';

const ExpensesList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <>
      <div className='expenses__list'>
        <ul>
          {expenses?.map((expense) => (
            <Expense id={expense.id} name={expense.name} cost={expense.cost} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpensesList;
