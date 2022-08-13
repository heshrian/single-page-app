import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";

const Expenses = (props) => {
    // const expensesArray = props.items;
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
