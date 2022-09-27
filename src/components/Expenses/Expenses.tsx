import ExpenseItem from '@/components/Expenses/ExpenseItem';
import Card from '@/components/UI/Card';
import ExpensesFilter from '@/components/Expenses/ExpensesFilter';
import { Expense } from '@/components/Expenses/types';
import '@/components/Expenses/Expenses.css';
import { useState } from 'react';

function Expenses(props: { expensesArray: Expense[] }) {
  const [filterYear, setFilterYear] = useState('All')
  const [filteredExpenses, setFilteredExpenses] = useState(props.expensesArray);
  const expenseFilterHandler = (selectedYear: string) => {
    setFilterYear(selectedYear);
    if (selectedYear === 'All') {
      setFilteredExpenses(props.expensesArray);
    } else {
      const filteredExpenses = props.expensesArray.filter(
        (expense) => expense.date.getFullYear() === +selectedYear
      );
      setFilteredExpenses(filteredExpenses);
    }
  };
  const showEachExpense = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      id={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSelectFilterYear={expenseFilterHandler} />
      {showEachExpense}
    </Card>
  );
}

export default Expenses;
