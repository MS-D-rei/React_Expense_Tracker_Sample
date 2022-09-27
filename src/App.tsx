// import React from 'react'; /* no longer need to import but still used under the hood */
import { useState } from 'react';
import Expenses from '@/components/Expenses/Expenses';
import NewExpense from '@/components/NewExpense/NewExpense';
import { initialExpenses } from '@/components/Expenses/expensesSample';
import { Expense } from '@/components/Expenses/types';

function App() {
  const [allExpenses, setAllExpenses] = useState(initialExpenses);
  const addExpenseHandler = (newExpenseData: Expense) => {
    setAllExpenses((prevState) => {
      return [...prevState, newExpenseData];
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started!"),
  //   React.createElement(Expenses, { expensesArray: expenses })
  // );
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expensesArray={allExpenses} />
    </div>
  );
}

export default App;
