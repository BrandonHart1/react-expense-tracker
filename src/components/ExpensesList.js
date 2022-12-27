import React from 'react';
import Expense from './Expense';

const ExpensesList = () => {
  const expenses = [
    { id: 1234567, name: 'Shopping', cost: 100 },
    { id: 1234567, name: 'Groceries', cost: 100 },
    { id: 1234567, name: 'Rent', cost: 500 },
    { id: 1234567, name: 'Car Payment', cost: 200 },
    { id: 1234567, name: 'Gas', cost: 30 },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <Expense id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpensesList;
