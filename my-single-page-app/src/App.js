/**
 * The function App() returns a div element with two children: an h2 element and a p element
 * @returns The function App is returning a div with a h2 and a p tag.
 */

import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ExpenseItem></ExpenseItem> */}
      <ExpenseItem />
    </div>
  );
}

export default App;
