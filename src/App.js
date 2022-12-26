import React from 'react';
import './App.css';
import Budget from './components/Budget';
import Balance from './components/Balance';
import Expenses from './components/Expenses';

function App() {
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Budget Tracker</h1>
        </div>
        {/* -------- Need to put all of the components in a column -------- */}
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
      </div>
    </>
  );
}

export default App;
