import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [entertedDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(entertedDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    handleClick();
    // onCancel();
  };

  const [isShown, setItShown] = useState(false);
  const handleClick = (event) => {
    setItShown((current) => !current);
  };

  const addNewExpense = (
    <div>
      <button type="submit" onClick={handleClick}>
        Add new expense!
      </button>
    </div>
  );

  const formForNewExpense = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="20222-12-31"
            value={entertedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={handleClick}>Cancel</button>
        <button type="submit">Add new expense</button>
      </div>
    </form>
  );

  return (
    <div>
      {isShown && formForNewExpense}
      {!isShown && addNewExpense}
    </div>
  );
};

export default ExpenseForm;
