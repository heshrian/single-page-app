import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearHandler = (year) => {
    // console.log("Expenses.js");
    setFilteredYear(year);
    // console.log(year);
  };
  const expensesArray = props.items;
  const filteredArray = expensesArray.filter(
    (filteredArray) =>
      filteredArray.date.toString().slice(11, 15) === filteredYear // my solution
    // filteredArray.date.getFullYear().toString() === filteredYear  // video solution
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelect={selectYearHandler} value={filteredYear} />
        {filteredArray.length === 0 && <p>No expenses found</p>}
        {filteredArray.length > 0 &&
          filteredArray.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            );
          })}
        {/* {filteredArray.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredArray.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            );
          })
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
