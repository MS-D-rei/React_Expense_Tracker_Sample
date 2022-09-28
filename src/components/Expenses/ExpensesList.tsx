import ExpenseItem from '@/components/Expenses/ExpenseItem';
import { Expense } from '@/components/Expenses/types';
import '@/components/Expenses/ExpensesList.css';

function ExpensesList(props: { list: Expense[] }) {
  const showEachExpense = props.list.map((expense) => (
    <ExpenseItem
      key={expense.id}
      id={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  const noExpensesFoundMessage = <h2 className='expenses-list__fallback'>No expense found.</h2>;

  let expensesContent: JSX.Element | JSX.Element[] = noExpensesFoundMessage;
  if (props.list.length > 0) {
    expensesContent = showEachExpense;
  }

  return (
    <ul className="expenses-list">
      {/* {filteredExpenses.length === 0 ? (<p>No expenses found.</p>) : (showEachExpense)} */}
      {/* <h2 className='expenses-list__fallback'>{props.list.length === 0 && noExpensesFoundMessage}</h2>
      {props.list.length > 0 && showEachExpense} */}
      {expensesContent}
    </ul>
  );
}

export default ExpensesList;
