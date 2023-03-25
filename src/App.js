import React from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from './Components/NewExpense/NewExpense';

const App =() =>{
  const expenses = [
    {
      id:'e1',
      title:'Toilet paper', 
      amount:94.12, 
      date:new Date(2020, 7, 28)
    },
    {
      id:'e2',
      title:'New TV', 
      amount:799.49, 
      date:new Date(2021, 2, 12)
    },
    {
      id:'e3',
      title:'Car Insurance', 
      amount:294.67, 
      date:new Date(2022, 2, 28)
    },
    {
      id:'e4',
      title:'Wooden Desk', 
      amount:450, 
      date:new Date(2023, 2, 28)
    },
];
  return (
    <div className="App">
        <NewExpense />
        <Expenses items={expenses} />        
    </div>
  );
}
export default App;
