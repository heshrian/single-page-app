import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
  // const expensesArray = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearHandler = (year) => {
    console.log("Expenses.js");
    setFilteredYear(year);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelect={selectYearHandler} value={filteredYear}/>
        {props.items.map((item, index) => {
          return (
            <ExpenseItem
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
