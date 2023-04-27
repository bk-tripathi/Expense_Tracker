import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
<<<<<<< HEAD
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

=======
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
<<<<<<< HEAD
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
=======
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1
    </Card>
  );
}

export default ExpenseItem;
