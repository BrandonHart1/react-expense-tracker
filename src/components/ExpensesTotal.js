import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Expenses = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0); // <-------- 0 = Starting value --------

  return (
    <div>
      <span>Total Expenses: {totalExpenses}</span>
    </div>
  );
};

export default Expenses;
