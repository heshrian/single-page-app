import React, { useState } from "react";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearHandler = (year) => {
    setFilteredYear(year);
    // console.log(year);
  };
  const expensesArray = props.items;
  const filteredArray = expensesArray.filter(
    (filteredArray) =>
      filteredArray.date.toString().slice(11, 15) === filteredYear // my solution
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelect={selectYearHandler} value={filteredYear} />
        <ExpensesList items={filteredArray}/>
        {/* {filteredArray.length === 0 && <p>No expenses found</p>}
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
          })} */}
        {/* {expenseContent} */}
      </Card>
    </div>
  );
};

export default Expenses;
