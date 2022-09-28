import { useState } from 'react';
import Card from '@/components/UI/Card';
import ExpensesFilter from '@/components/Expenses/ExpensesFilter';
import ExpensesList from '@/components/Expenses/ExpensesList';
import ExpensesChart from '@/components/Expenses/ExpensesChart';
import { Expense } from '@/components/Expenses/types';
import '@/components/Expenses/Expenses.css';

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
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList list={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
