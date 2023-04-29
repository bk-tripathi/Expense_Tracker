import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [viewAddExpenseForm, setViewAddExpenseForm]= useState(false)

  const showAddExpenseForm = () =>{
    setViewAddExpenseForm(true);
  }

  const hideAddExpenseForm = () =>{
    setViewAddExpenseForm(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {!viewAddExpenseForm && <button onClick={showAddExpenseForm}>Add new expense</button>}
        {viewAddExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideAddExpenseForm}/>}
    </div>
  );
};

export default NewExpense;
