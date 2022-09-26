// import React from 'react'; /* no longer need to import but still used under the hood */
import Expenses from '@/components/Expenses/Expenses';
import { expenses } from '@/components/Expenses/expensesSample';

function App() {
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started!"),
  //   React.createElement(Expenses, { expensesArray: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expensesArray={expenses} />
    </div>
  );
}

export default App;
