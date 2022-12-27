import React from 'react';

const NewExpenseForm = () => {
  return (
    <form>
      <div className='new__expenses'>
        <div className='expense__name'>
          <label for='name'>Name</label>
          <input type='text' require='required' id='name' />
        </div>
        <div className='new__expense__cost'>
          <label for='cost'>Cost</label>
          <input type='text' require='required' id='cost' />
        </div>
        <div className='new__expense__button'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
