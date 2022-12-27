import React from 'react';
import './App.css';
import Budget from './components/Budget';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import ExpensesList from './components/ExpensesList';
import NewExpenseForm from './components/NewExpenseForm';

function App() {
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Budget Tracker</h1>
        </div>
        {/* -------- Put all of the components in a column -------- */}
        <div className='columns'>
          <div>
            <Budget />
          </div>
          <div>
            <Expenses />
          </div>
          <div>
            <Balance />
          </div>
        </div>
        <div className='summary'>
          <h3>Expenses Summary</h3>
        </div>
        <div>
          <ExpensesList />
        </div>
        <h3>Add New Expense</h3>
        <div>
          <NewExpenseForm />
        </div>
      </div>
    </>
  );
}

export default App;
