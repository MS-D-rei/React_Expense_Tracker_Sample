import React, { useState } from 'react';
import '@/components/NewExpense/NewExpenseForm.css';

function NewExpenseForm(props: { onSaveNewExpenseData: Function, onFormCloseButton: Function }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInputExpense, setUserInputExpense] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
    // setUserInputExpense({ /* This code is NOT safe when updating state. Pass funciton to setState like below. */
    //   ...userInputExpense,
    //   enteredTitle: event.target.value,
    // });
    // https://reactjs.org/docs/hooks-reference.html#usestate
    // 'If the new state is computed using the previous state, you can pass a function to setState.
    // The function will receive the previous value, and return an updated value'
    // setUserInputExpense((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
    // setUserInputExpense({
    //   ...userInputExpense,
    //   enteredAmount: event.target.value,
    // });
    // setUserInputExpense((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
    // setUserInputExpense({
    //   ...userInputExpense,
    //   enteredDate: event.target.value,
    // });
    // setUserInputExpense((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newExpenseData = {
      id: `e${Math.random()}`,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(newExpenseData);
    props.onSaveNewExpenseData(newExpenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onFormCloseButton()
  }

  const cancelButtonHandler = () => {
    props.onFormCloseButton()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={cancelButtonHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
