import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearHandler = (year) => {
    console.log("Expenses.js");
    setFilteredYear(year);
    console.log(year);
  };
  const expensesArray = props.items;
  // console.log(props.items[0].date.toString().slice(11,15))
  const filteredArray = expensesArray.filter(
    (filteredArray) =>
      filteredArray.date.toString().slice(11, 15) === filteredYear
  );
  console.log(filteredArray);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelect={selectYearHandler} value={filteredYear} />

        {filteredArray.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          );
        })}
        {/* <ExpensesFilter onYearSelect={selectYearHandler} value={filteredYear} />
  
          {props.items.map((item) => {
            // console.log(item.date.toString().slice(11, 15) === filteredYear);
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            );
          })} */}
      </Card>
    </div>
  );
};

export default Expenses;
