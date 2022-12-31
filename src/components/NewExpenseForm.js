import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const NewExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    // -------- Create a new expense object --------
    const expense = {
      id: uuidv4(), // -------- Will generate random id --------
      name: name,
      cost: parseInt(cost),
    };

    // --------  --------
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    // -------- Reset to empty fields --------
    setName('');
    setCost('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='new__expenses'>
        <div className='expense__name'>
          <label htmlFor='name'>Name</label>
          <input
            value={name}
            type='text'
            require='required'
            id='name'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='new__expense__cost'>
          <label htmlFor='cost'>Cost</label>
          <input
            value={cost}
            type='text'
            require='required'
            id='cost'
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className='new__expense__button'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;

// -------- Had to change the label "for" to "htmlFor" --------
