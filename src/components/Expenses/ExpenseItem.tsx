import ExpenseDate from '@/components/Expenses/ExpenseDate';
import Card from '@/components/UI/Card';
import '@/components/Expenses/ExpenseItem.css';
// import './ExpenseItem.css'

function ExpenseItem(props: {
  id: string;
  title: string;
  amount: number;
  date: Date;
}) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
