import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");

  const yearFilterHandler = (selectedYear) => {
    setPickedYear(selectedYear);
    console.log("Expenses.js");
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === pickedYear;
  })

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          pickedYear={pickedYear}
          onYearFilter={yearFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
