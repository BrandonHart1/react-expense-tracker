import React, { useContext } from 'react';
import Expense from './Expense';
import { AppContext } from '../context/AppContext';

const ExpensesList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <ul>
      {expenses.map((expense) => (
        <Expense id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpensesList;
