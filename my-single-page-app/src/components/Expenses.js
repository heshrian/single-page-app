import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    // const expensesArray = props.items;
  return (
    <div className="expenses">
      {props.items.map((item, index) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
