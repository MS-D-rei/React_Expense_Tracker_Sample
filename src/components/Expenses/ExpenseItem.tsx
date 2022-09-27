import { useState } from 'react';
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
  // useState returns object. first element is the current value, and second element is the setter for it
  const [ title, setTitle ] = useState(props.title);
  const clickHandler = () => {
    setTitle('updated!');
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
