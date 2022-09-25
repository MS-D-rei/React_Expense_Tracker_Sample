import '@/components/ExpenseItem.css';
// import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 24);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 300.0;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
