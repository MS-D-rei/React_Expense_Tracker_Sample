import Expenses from '@/components/Expenses';
import { expenses } from '@/components/expensesSample';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expensesArray={expenses} />
    </div>
  );
}

export default App;
