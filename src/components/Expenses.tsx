import ExpenseItem from '@/components/ExpenseItem';
import Card from '@/components/Card';
import { Expense } from '@/components/types';
import '@/components/Expenses.css';

function Expenses(props: { expensesArray: Expense[] }) {
  const showEachExpense = props.expensesArray.map((expense) => (
    <ExpenseItem
      key={expense.id}
      id={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <Card className="expenses">{showEachExpense}</Card>;
}

export default Expenses;
