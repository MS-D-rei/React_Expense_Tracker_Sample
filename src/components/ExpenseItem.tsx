import '@/components/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import './ExpenseItem.css'

function ExpenseItem(props: {
  id: string;
  title: string;
  amount: number;
  date: Date;
}) {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
