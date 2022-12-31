import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './ExpensesTotal.css';

const Expenses = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0); // <-------- 0 = Starting value --------

  return (
    <div className='total__expenses'>
      <span>Total Expenses: ${totalExpenses}</span>
    </div>
  );
};

export default Expenses;
