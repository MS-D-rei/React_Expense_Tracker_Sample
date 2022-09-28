import Card from '@/components/UI/Card';
import ExpensesFilter from '@/components/Expenses/ExpensesFilter';
import { Expense } from '@/components/Expenses/types';
import '@/components/Expenses/Expenses.css';
import { useState } from 'react';
import ExpensesList from '@/components/Expenses/ExpensesList';

function Expenses(props: { expensesArray: Expense[] }) {
  const [filterYear, setFilterYear] = useState('All');
  const expenseYearFilterHandler = (selectedYear: string) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.expensesArray.filter((expense) => {
    if (filterYear === 'All') {
      return true;
    } else {
      return expense.date.getFullYear() === +filterYear;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSelectFilterYear={expenseYearFilterHandler}
      />
      <ExpensesList list={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
