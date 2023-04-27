<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
<<<<<<< HEAD

const Expenses = (props) => {
  return (
    <Card className="expenses">
=======
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]=useState('2020');

  const filterChangeHandler=(selectedYear) =>{
    setFilteredYear(selectedYear);
  }

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChnageFilter={filterChangeHandler}/>
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
<<<<<<< HEAD
      />
=======
        />
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
<<<<<<< HEAD
      />
=======
        />
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
<<<<<<< HEAD
      />
=======
        />
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
<<<<<<< HEAD
      />
    </Card>
=======
        />
    </Card>
      </div>
>>>>>>> 842233bf484f1e49158929a24fa6323f4abd90e1
  );
}

export default Expenses;
