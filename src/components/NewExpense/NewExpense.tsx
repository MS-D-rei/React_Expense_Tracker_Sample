import NewExpenseForm from '@/components/NewExpense/NewExpenseForm';
import '@/components/NewExpense/NewExpense.css'
import { Expense } from '@/components/Expenses/types';

function NewExpense(props: { onAddNewExpense: Function }) {
  const saveNewExpenseDataHandler = (enteredExpenseData: Expense) => {
    props.onAddNewExpense(enteredExpenseData)
  }

  return (
    <div className='new-expense'>
      <NewExpenseForm onSaveNewExpenseData={saveNewExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;