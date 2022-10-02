import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // Using one state aproach
  // const [userInputs, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // Updating state (one state approach)
    // To ensure that react will use the last snapshot of the state, we use a function
    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const addExpenseHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      title,
      amount: +amount,
      date: new Date(date),
      id: Math.floor(Math.random() * 1000) + 1,
    };
    setTitle('');
    setAmount('');
    setDate('');
    props.AddExpenseHandler(newExpense);
  };
  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2023"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
