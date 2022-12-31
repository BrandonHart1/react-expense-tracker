import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Budget.css';

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className='budget'>
      <span>Budget: ${budget}</span>
    </div>
  );
};

export default Budget;
