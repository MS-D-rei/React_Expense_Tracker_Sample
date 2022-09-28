import { useState } from 'react';
import NewExpenseForm from '@/components/NewExpense/NewExpenseForm';
import '@/components/NewExpense/NewExpense.css';
import { Expense } from '@/components/Expenses/types';

function NewExpense(props: { onAddNewExpense: Function }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const saveNewExpenseDataHandler = (enteredExpenseData: Expense) => {
    props.onAddNewExpense(enteredExpenseData);
  };

  const formOpenCloseHandler= () => {
    setIsFormOpen((prevState) => !prevState);
  };

  let newExpenseContent = (
    <button onClick={formOpenCloseHandler}>Add New Expense</button>
  );

  if (isFormOpen) {
    newExpenseContent = (
      <NewExpenseForm onSaveNewExpenseData={saveNewExpenseDataHandler} onFormCloseButton={formOpenCloseHandler} />
    );
  }

  return (
    <div className="new-expense">
      {newExpenseContent}
    </div>
  );
}

export default NewExpense;
