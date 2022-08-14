import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [entertedTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setenteredAmount] = useState("");

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setenteredAmount(event.target.value);
  };
  const [entertedDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="20222-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add new expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
