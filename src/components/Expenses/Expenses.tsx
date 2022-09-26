import ExpenseItem from '@/components/Expenses/ExpenseItem';
import Card from '@/components/UI/Card';
import { Expense } from '@/components/Expenses/types';
import '@/components/Expenses/Expenses.css';

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
