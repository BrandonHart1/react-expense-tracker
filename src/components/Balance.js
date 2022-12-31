import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Balance = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0); // <-------- 0 = Starting value --------

  // -----------------------------------------------------
  // ******** Add an alert when balance is negative ********
  // -----------------------------------------------------

  return (
    <div className='remaining__balance'>
      <span>Remaining Balance: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Balance;
